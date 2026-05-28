---
authors: ['vlad']
category: 'software-supply-chains'
title: "How Binary Dependencies Work Across Different Languages"
description: "Have you ever wondered how it's possible to call C code from other languages like Python? Here are the technical details — and also why this topic is important for security and sustainability."
date: 2026-01-16T00:00:00+00:00
metaImage: 'https://vlad.website/images/opengraph/how-binary-dependencies-work.png'
image: 'https://vlad.website/static/how-binary-dependencies-work-header.webp'
imageAlt: 'A graph showing the different kinds of binary dependencies, all jumbled together'
canonicalWebsiteName: "vlad.website"
canonicalUrl: "https://vlad.website/how-binary-dependencies-work/"
---

Sometimes, your code depends on a library, but you don't want to compile that library's source code alongside your
program. Rather, you want to directly call into a compiled binary of the library. This most frequently happens when you
want to call a C library from languages like Python, JavaScript or Rust.

In this situation, the library you're calling is a _binary dependency_ of your program.

For example, under the hood, Python's
{{< link href="https://numpy.org/" class="suplink" target="_blank" >}}NumPy{{< /link >}}
library calls functions from C library
{{< link href="https://github.com/OpenMathLib/OpenBLAS" class="suplink" target="_blank" >}}OpenBLAS{{< /link >}}
to do some of its computation.

Binary dependencies are interesting because they most frequently occur as
<em>
{{< link href="https://www.endorlabs.com/learn/dependency-resolution-in-python-beware-the-phantom-dependency" class="suplink" target="_blank" >}}phantom dependencies{{< /link >}} —
</em>
dependencies that we don't know about, because they are never recorded in a place such as a
{{< link href="https://nesbitt.io/2026/01/13/package-manager-glossary.html#manifest" class="suplink" target="_blank" >}}package manifest{{< /link >}}.
This has serious implications for security, and for the
{{< link href="https://openpath.quest/2024/the-open-source-sustainability-crisis/" class="suplink" target="_blank" >}}financial sustainability{{< /link >}}
of Open Source. I've spoken about these topics
[at FOSDEM 2026](https://fosdem.org/2026/schedule/event/7NQJNU-binary_dependencies_identifying_the_hidden_packages_we_all_depend_on/),
and you can learn more about this in
[my research proposal](https://hackmd.io/@vladh/binary-dependencies).

But before we can conduct this research, we need to understand how binary dependencies work to begin with. There are
some interesting questions to ask:

* How does calling a precompiled (eg, C) library work under the hood?
* What are the different ways to do this in different programming languages?

I'll try to answer these questions. I'll provide examples from a few different programming languages, but you shouldn't
rely on the code in this post, because my aim is not to provide accurate documentation, but to show the similarities
between these various languages, and how they share the same ideas.

In this post, I'll cover three methods of calling code located in precompiled binaries:

* _dynamic linking,_
* _dynamic loading_, and
* _dynamic linking with extension modules_, where I'll cover Python's extension modules, Ruby's extension libraries, and
Node.js's C++ addons.

But for now, let's start with the basic ideas.

## General Principles

Say you have a precompiled
{{< link href="https://developer.ibm.com/tutorials/l-dynamic-libraries/" class="suplink" target="_blank" >}}dynamic library{{< /link >}},
originally written in C, in a file called `c_lib.so`. How can we reach into this file, find the function we want to
call, and actually run the code inside it? Let's start by looking at the general steps any solution must cover.

I'm assuming we're on Linux, but the steps are analogous on other platforms. I'll start with hand-wavy pseudocode, then
move into some real code.

<figure>
	<img src="https://vlad.website/illus/binary-dependencies/graph-demo.svg" alt="An abstract illustration of a C function call">
</figure>

The first step is obvious. Whatever tool we're using to do the calling, we need to let it know about the file that has
our dynamic library, so we need something with this general shape:

<div class="alert">
	<h3>Linking declaration</h3>
	<pre><code>link("c_lib.so")</code></pre>
</div>

Then, we need some details about the function we want to call. We need to know

* the function's name,
* the function's return type,
* the number of arguments,
* the arguments' types.

Putting this together, we'll need a signature approximately like this:

<div class="alert">
	<h3>Type definitions</h3>
	<pre><code>foo(const char*, i64, i64) -> str</code></pre>
</div>

This is where the complications start. The C function we're calling takes a string as its first argument. C strings are
represented as null-terminated character arrays. However, strings in our host language might be represented differently
— maybe a struct containing (1) a pointer to some bytes, (2) a length, and (3) a capacity, like
{{< link href="https://doc.rust-lang.org/std/string/struct.String.html#representation" class="suplink" target="_blank" >}}in Rust{{< /link >}}.

So we might need to take some of the arguments we intend to pass to the function, then convert them to the appropriate C
types, so that the function we're calling receives its data in its expected format. For example:

<div class="alert">
	<h3>Data conversion</h3>
	<pre><code>x = foo("hi".to_cstr(), 1, 2)</code></pre>
</div>

Now that we have the symbol of the function we're looking for — which is basically its name, so `foo` — we need to
find the code for this function at its specific address inside our `.so` file. The result
might be an address like this:

<div class="alert">
	<h3>Symbol finding</h3>
	<pre><code
>/usr/lib/c_lib.so
0x1234: foo()</code></pre>
</div>

To complete the call, we'll somehow need to generate the assembly code that actually calls into the function on our
architecture. Fortunately, we know the number of arguments and their types, as well as the function's address, and
that's all the information we need.

So we can follow our platform's
{{< link href="https://en.wikipedia.org/wiki/Calling_convention" class="suplink" target="_blank" >}}calling convention{{< /link >}}
to put the appropriate arguments in the appropriate CPU registers, and get the returned value out of the appropriate
register. Of course, we won't need to do this manually, but let's consider what the result might look like.

I'm using Linux on an x86_64 machine, so I need to follow the
{{< link href="https://en.wikipedia.org/wiki/X86_calling_conventions#System_V_AMD64_ABI" class="suplink" target="_blank" >}}System V ABI{{< /link >}},
which means that I will put my arguments into registers `rdi`, `rsi` and `rdx` (in that order), and I'll get my return
value in register `rax`.

In
{{< link href="https://en.wikipedia.org/wiki/X86_assembly_language" class="suplink" target="_blank" >}}x86 assembly language{{< /link >}},
this would look something vaguely like:

<div class="alert">
	<h3>Call generation</h3>
	<pre><code
>mov rdi, "hi\0"
mov rsi, 1
mov rdx, 2
call foo
; result in rax</code></pre>
</div>

These are the general steps we need to follow. Let's look at several concrete approaches to implementing such a function
call.

## Dynamic Linking

<figure>
	<img src="https://vlad.website/illus/binary-dependencies/graph-dynlink.svg" alt="An illustration of dynamic linking">
	<figcaption>
		Calling a function using dynamic linking. The diamonds represent data. We need to provide data to our shared
		library using the C types it expects, and we will receive returned data in the same format.
	</figcaption>
</figure>

Are you writing your code in a compiled language like Rust? If so, you can take advantage of the first method, which is
the simplest because of the help you get from your operating system's {{< link
href="https://en.wikipedia.org/wiki/Kernel_(operating_system)" class="suplink" target="_blank" >}}kernel{{< /link >}} —
_dynamic linking_.

When using
{{< link href="https://developer.ibm.com/tutorials/l-dynamic-libraries/#dynamic-linking-with-linux0" class="suplink" target="_blank" >}}dynamic linking{{< /link >}},
your compiler will insert calls to the C function `foo()` just like any other function call. Here's the catch, though —
that function will remain undefined. On execution, the kernel will see that the function is undefined, and use the
runtime dynamic linker to attempt to find the function's definition within the dynamic libraries specified as being
required by the program during compilation.

The linker will know how to find the `c_lib.so` file in
{{< link href="https://man7.org/linux/man-pages/man8/ld.so.8.html" class="suplink" target="_blank" >}}standard operating system paths{{< /link >}}
for dynamic libraries such as `/usr/local/lib/`. This means that it's enough to just specify the dynamic library's
filename.

Do note, though, that we never specify which symbols are found in which libraries — so we never say that `foo` can be
found in `c_lib.so`. The kernel will just search all the dynamic libraries our program depends on to find our desired
symbol, and take the
{{< link href="https://stackoverflow.com/a/58028619" class="suplink" target="_blank" >}}first definition{{< /link >}}.

---

Here's a more in-depth look at what the linker is doing. Let's say I compile a program that uses `curl_easy_init()` from
{{< link href="https://curl.se/libcurl/" class="suplink" target="_blank" >}}CURL's{{< /link >}}
`libcurl.so`, which you almost certainly have on your computer. Of course, when compiling, I'll use the `-lcurl` flag,
to specify that my program depends on `libcurl`.

It doesn't really matter what language we write this program in, as long as we can compile it to a binary. Because I'm
on Linux, the compiler outputs an
{{< link href="https://en.wikipedia.org/wiki/Executable_and_Linkable_Format" class="suplink" target="_blank" >}}ELF executable{{< /link >}}
that I've called `myprog.bin`.

If we use `ldd` to inspect which dynamic libraries our program depends on, we can see that it does indeed depend on
`libcurl`:

```
$ ldd myprog.bin
	linux-vdso.so.1 (0x00007f6ff7fec000)
	libcurl.so.4 => /usr/lib/libcurl.so.4 (0x00007f6ff7eb7000)
	libc.so.6 => /usr/lib/libc.so.6 (0x00007f6ff7c00000)
	...
```

Let's now use `readelf` to check what _symbols_ our program requires but has not yet defined, by grepping for “UND”
(which stands for “undefined”):

```
$ readelf -WCs myprog.bin | grep -i 'UND '
	...
	81: 0000000000000000     0 FUNC    GLOBAL DEFAULT  UND curl_easy_init@CURL_OPENSSL_4
	...
```

So the following information is built into our compiled binary, and can be used by the runtime linker when executing our
program:

* Our program depends on the dynamic library `libcurl.so`.
* Our program requires the symbol `curl_easy_init` to be defined among any of our depended-upon dynamic libraries.

---

We can now more concretely look at how we might call a C function from a different language, such as Rust. This section
only includes Rust examples, but the principles apply to other languages too.

<div class="alert">
	<h3>Linking declaration</h3>
	<h4>Rust</h4>
	<div class="indent">
		<p>
			In Rust, you can do this as part of your code using an attribute:
		</p>
		<pre><code>#[link(name = "c_lib")]</code></pre>
	</div>
</div>

Next, we want to define the function and its relevant types in our host language. It's worth pausing to look at the
previous diagram once again.

<figure>
	<img src="https://vlad.website/illus/binary-dependencies/graph-dynlink.svg" alt="An illustration of dynamic linking">
</figure>

The diamonds represent data, which means that both our arguments and the return value use C data structures. So we need
to use C types from within our host language.

<div class="alert">
	<h3>Type definitions</h3>
	<h4>Rust</h4>
	<p>
		Rust has built-in types such as <code>c_char</code>.
	</p>
	<div class="indent">
		<pre><code
>unsafe extern "C" {
	fn foo(a: ∗const c_char, b: i64, c: i64) -> ∗const c_char;
}</code></pre>
	</div>
</div>

At this point, we run into the data conversion issue we talked about before. Our host language needs to know about C's
types, so that it can convert arguments into data structures C can understand:

<div class="alert">
	<h3>Data conversion</h3>
	<h4>Rust</h4>
	<div class="indent">
		<p>We convert our arguments to Rust's built-in C types, such as <code>CString</code>:</p>
		<pre><code
>unsafe extern "C" {
	foo(CString::new("hi").unwrap().as_ptr(), 1, 2);
}</code></pre>
	</div>
</div>

Next, we need to actually find the address of the function's code within our dynamic library, using the function's
symbol (which is approximately the same as the function's name). Fortunately, we don't have to do anything here! The
kernel will do this for us.

<div class="alert">
	<h3>Symbol finding</h3>
	<p>
		The OS handles this. On Linux, this is done in
		<a href="https://www.man7.org/linux/man-pages/man8/ld.so.8.html" class="suplink" target="_blank"><code>ld-linux.so</code></a>.
	</p>
</div>

Last, we need the assembly instructions that will actually call into our dynamic library. The compiler will
automatically handle this when compiling our host language's function call. So we're done.

<div class="alert">
	<h3>Call generation</h3>
	<p>The compiler handles this.</p>
</div>

I hope you can see why dynamic linking is easier than some other methods — the compiler and the kernel handled
the symbol finding and call generation for us. We just had to specify the function definitions and types we're using,
and convert our data to those types.

At the same time, if we're trying to call C code from an interpreted language like Python, Ruby or JavaScript, this
approach isn't helpful.

<details>
	<summary>But sometimes, you <em>can</em> use dynamic linking with interpreted languages…kind of.</summary>
	<p>
		Tools like
		<a href="https://cython.org/" class="suplink" target="_blank">Cython</a>,
		<a href="https://numba.pydata.org/" class="suplink" target="_blank">Numba</a>
		and
		<a href="https://www.swig.org/" class="suplink" target="_blank">SWIG</a>
		augment interpreted languages like Python into something that can be compiled. This means that you can write
		code that's 90% Python, but still use dynamic linking.
	</p>
	<p>
		When using these tools, though, you end up with a full-blown compiled language, so the binary dependency
		situation is functionally the same as in the Rust example. For this reason, I won't talk about this scenario in
		any more detail.
	</p>
</details>

## Dynamic Loading

<figure>
	<img src="https://vlad.website/illus/binary-dependencies/graph-dynload.svg" alt="An illustration of dynamic loading">
	<figcaption>
		Calling a function using dynamic loading. The dashed arrows indicate that the actual function calls are
		generated at runtime, not compile time. Notice the blue diamonds — we're still using C data structures.
	</figcaption>
</figure>

Are you calling C code from an interpreted language, like Python, Ruby or JavaScript? If so, dynamic linking is not an
option. The alternative approach that is easiest to understand is _dynamic loading_.

{{< link href="https://developer.ibm.com/tutorials/l-dynamic-libraries/#dynamic-loading-with-linux1" class="suplink" target="_blank" >}}Dynamic loading{{< /link >}}
is fundamentally similar to dynamic linking. The main difference is that, because our code is not being compiled, we
need our linking to happen at runtime, so we can't take advantage of all of the information the compiler baked into our
binary in the “dynamic linking” section — since there's no compiler!

I'll provide code examples for Python, Ruby and JavaScript. But for now, let's look at the technical details.

---

The first things we need to do when doing dynamic loading are to locate the dynamic library, and locate our desired
symbol within it.

Fortunately, Linux's helpful
{{< link href="https://www.man7.org/linux/man-pages/man3/dlopen.3.html" class="suplink" target="_blank" >}}libdl{{< /link >}},
which has equivalents in other operating systems, allows us to do both of these tasks:

```
// Open dynamic library
lib = dlopen("c_lib.so");
// Locate symbol “foo” within it
foo = dlsym(lib, "foo");
```

Here's where we run into trouble, though. How do we actually call this function?

When we were compiling our code, the compiler was able to generate the assembly code to correctly call our desired
function according to our platform's calling convention. The compiler turned this:

```
foo("hi", 1, 2)
```

into this:

```
mov rdi, "hi"
mov rsi, 1
mov rdx, 2
call foo
```

The compiler can do this because it's aware of our platform's calling conventions. For example, if we were on another
processor architecture, putting our arguments in `rdi`, `rsi` and `rdx` wouldn't be the right thing to do — we would
need to use other registers.

Without the compiler, we don't know how to do this. But fortunately, there's a library that does —
{{< link href="https://github.com/libffi/libffi" class="suplink" target="_blank" >}}libffi{{< /link >}}.

Because we can't call into our `c_lib.so` directly, we can call into libffi first. libffi will then know how to call
`c_lib.so` with the appropriate calling conventions. Neat!

<details>
	<summary>But…if we can't call external libraries…how can we call libffi, which is written in C? 😳</summary>
	<p>
		We can't — at least not directly! We have to rely on some help from our language's interpreter, which, of course,
		<em>is</em> a compiled program.
	</p>
	<p>
		For example, Python's
		<a href="https://github.com/python/cpython/tree/3.14/Lib/ctypes" class="suplink" target="_blank">ctypes</a>
		library, which wraps libffi, is written in Python. But it depends on Python's
		<a href="https://github.com/python/cpython/tree/3.14/Modules/_ctypes" class="suplink" target="_blank"><code>_ctypes</code></a>
		module, which is part of the CPython interpreter, which is written in C.
	</p>
</details>

---

Putting this all together, we now use some version of `dlopen` to find and open our dynamic library. The specifics vary
between different languages:

<div class="alert">
	<h3>Linking declaration</h3>
	<h4>Python</h4>
	<p>
		In Python, this used to be accomplished by
		<a href="https://docs.python.org/3/library/ctypes.html" class="suplink" target="_blank">ctypes</a>,
		but the better way is to use
		<a href="https://cffi.readthedocs.io/en/stable/" class="suplink" target="_blank">cffi</a>
		in its
		<a href="https://cffi.readthedocs.io/en/stable/overview.html#simple-example-abi-level-in-line" class="suplink" target="_blank">ABI mode</a>.
	</p>
	<pre><code
>from cffi import FFI
C = ffi.dlopen("c_lib.so")</code></pre>
	<h4>Ruby</h4>
	<p>
		In Ruby, this is accomplished with the
		<a href="https://github.com/ffi/ffi?tab=readme-ov-file" class="suplink" target="_blank">Ruby-FFI</a>
		gem.
	</p>
	<pre><code
>require 'ffi'
module CLib
	extend FFI::Library
	ffi_lib 'c_lib'
end</code></pre>
	<h4>JavaScript</h4>
	<p>
		In Node.js, use
		<a href="https://github.com/node-ffi/node-ffi" class="suplink" target="_blank">node-ffi</a>:
	</p>
	<pre><code
>const ffi = require('ffi');
const c_lib = ffi.Library('c_lib');</code></pre>
</div>

Of course, we also need to provide our type definitions. Let's double-check our diagram:

<figure>
	<img src="https://vlad.website/illus/binary-dependencies/graph-dynload.svg" alt="An illustration of dynamic loading">
</figure>

We are _still_ using C types to talk to our dynamic library, so we need to use the C types built into whatever FFI
library we're using.

<div class="alert">
	<h3>Type definitions</h3>
	<h4>Python</h4>
	<p>
		Python's cffi allows us to copy-paste C function declarations directly, which it will then parse, which saves us
		some work.
	</p>
	<pre><code
>ffi.cdef("""
	const char* foo(const char&#42;, int64_t, int64_t);
""")</code></pre>
	<h4>Ruby</h4>
	<p>
		Ruby-FFI offers some slightly unintuitively-named C types
		(<code>:pointer</code> is used for <code>const char&#42;</code>):
	</p>
	<pre><code
>require 'ffi'
module CLib
	extend FFI::Library
	ffi_lib 'c_lib'
	attach_function :foo, [ :pointer, :int64, :int64 ], :pointer
end</code></pre>
	<h4>JavaScript</h4>
	<p>
		node-ffi is similar:
	</p>
	<pre><code
>const ffi = require('ffi');
const c_lib = ffi.Library('c_lib', {
	'foo': [ 'string', [ 'string', 'int64', 'int64' ] ]
});</code></pre>
</div>

Most libraries handle most type conversions automatically (except that first string for Python's cffi):

<div class="alert">
	<h3>Data conversion</h3>
	<h4>Python</h4>
	<pre><code>foo(ffi.new("char[]", b"hello"), 1, 2)</code></pre>
	<h4>Ruby</h4>
	<pre><code>CLib.foo("hello", 1, 2)</code></pre>
	<h4>JavaScript</h4>
	<pre><code>lib.foo("hello", 1, 2)</code></pre>
</div>

And that's it! libffi will call `dlsym` to find the appropriate symbol in our dynamic library…

<div class="alert">
	<h3>Symbol finding</h3>
	<p>Handled by libffi.</p>
</div>

…and libffi will also generate our function call.

<div class="alert">
	<h3>Call generation</h3>
	<p>Handled by libffi.</p>
</div>

## Dynamic Linking with Extension Modules

<figure>
	<img src="https://vlad.website/illus/binary-dependencies/graph-extmod.svg" alt="An illustration of dynamic linking with extension modules">
	<figcaption>
		Calling a function using dynamic linking together with extension modules. The extension module in the center
		works with the host language's data types (eg Python data types) on one side, and C data types on the other
		side. This allows the extension module to perform type conversions whenever would be best for performance.
	</figcaption>
</figure>

The aforementioned solutions have one big limitation. Say our host language is Python. We can call C functions from
Python as much as we want, which is great. But every time we do this, we have to convert Python data structures into C
data structures, and the other way around for the return values. This means we're doing a lot of extra work, which could
result in a big performance hit.

More generally, it would be helpful to be able to decide which work to do in Python, and which work to do in C. This
would also give us full flexibility to decide which code should use Python data structures, and which code should use C
data structures, so that we can decide to perform conversions at the best possible time.

And having a way to do some work in C means that we could call the `c_lib` dynamic library…from our own C code! We could
natively use `c_lib`'s API by doing `#include <c_lib.h>` in our C code. This would allow us to take the simpler
dynamic linking approach when calling `c_lib`'s code, taking advantage of the kernel and the runtime dynamic linker —
better performance, and less work.

---

To achieve this, we can use _extension modules_. Extension modules are C programs that also know about the types of our
host language. So a Python extension module is a C program that knows how to construct Python data structures. Extension
modules gain this ability by including some C definitions provided by the language creators, such as:

* {{< link href="https://github.com/python/cpython/blob/main/Include/Python.h" class="suplink" target="_blank" >}}<code>Python.h</code>{{< /link >}}
or {{< link href="https://hpyproject.org/" class="suplink" target="_blank" >}}<code>hpy.h</code>{{< /link >}}
* {{< link href="https://github.com/ruby/ruby/blob/master/include/ruby/ruby.h" class="suplink" target="_blank" >}}<code>ruby.h</code>{{< /link >}}
* {{< link href="https://github.com/nodejs/node/blob/main/src/node.h" class="suplink" target="_blank" >}}<code>node.h</code>{{< /link >}}.

Of course, we still need to call our extension module's C code from our host language. But because we're writing both
the host (eg Python) code, and the extension module's code, we can use whatever calling mechanism is most convenient for
us, giving us a lot more flexibility.

Because our Python/Ruby/JavaScript interpreter will have support for native modules built in, we don't even need to do
anything special to have our interpreter load our compiled C module — we can just do something like `import ext`.

That's right, even though our `ext.so` dynamic library was written in C, Python/Ruby/JavaScript can _directly import_
this C dynamic module with a simple `import ext` or equivalent, by special-casing `import` to recognise extension
modules. This is really convenient.

---

Extension modules are available via:

* {{< link href="https://docs.python.org/3/extending/extending.html" class="suplink" target="_blank" >}}Python's extension modules{{< /link >}},
* {{< link href="https://docs.ruby-lang.org/en/master/extension_rdoc.html" class="suplink" target="_blank" >}}Ruby's extension libraries{{< /link >}}, and
* {{< link href="https://nodejs.org/api/addons.html" class="suplink" target="_blank" >}}Node.js's C++ addons{{< /link >}}.

In Python, an extension module might look vaguely like this:

```
#define PY_SSIZE_T_CLEAN
#include <Python.h>

static PyObject *
foo(PyObject *self, PyObject *args) {
	...
}

static PyMethodDef methods[] = {
	{ "foo", foo, METH_VARARGS, "" },
	{ NULL, NULL, 0, NULL }
};

static struct PyModuleDef module = {
	PyModuleDef_HEAD_INIT, "foo", NULL, -1, methods
};

PyMODINIT_FUNC PyInit_ext(void) {
	return PyModule_Create(&module);
}
```

In Ruby, it might look something like this:

```
#include "ruby/ruby.h"

static VALUE
foo(VALUE self, VALUE a, VALUE b, VALUE c) {
	...
}

void Init_extension(void) {
	VALUE Ext = rb_define_module("Ext");
	VALUE NativeHelpers = rb_define_class_under(Ext, "NativeHelpers", rb_cObject);
	rb_define_singleton_method(NativeHelpers, "foo", foo, 3);
}
```

And in Node.js, something like this:

```
#include <node.h>

namespace ext {
	...

	void Method(const FunctionCallbackInfo<Value>& args) {
		...
	}

	void Initialize(Local<Object> exports) {
		NODE_SET_METHOD(exports, "foo", Method);
	}

	NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
}
```

Each of these files will get compiled with a C compiler — let's say the compiled module gets put in a file called
`ext.so`.

Thanks to special-casing `import` statements, these modules get loaded very easily:

<div class="alert">
	<h3>Linking declaration</h3>
	<h4>Python</h4>
	<pre><code>import ext</code></pre>
	<h4>Ruby</h4>
	<pre><code>require "ext"</code></pre>
	<h4>JavaScript</h4>
	<pre><code>require("ext")</code></pre>
</div>

Things are also simpler when it comes to type definitions.

You can trivially get `c_lib`'s type definitions in your extension module's C code by just doing `#include <c_lib.h>`.

And when it comes to calls between your host language and your C extension module, there's no need to tediously
translate C definitions into the equivalent Python/Ruby/Node.js data structures. Various libraries can automate this
process, by taking in your C definitions, and generating _bindings_ — Python/Ruby/Node.js code that allows you to
directly call your C functions.

<div class="alert">
	<h3>Type definitions</h3>
	<h4>Python</h4>
	<p>
		Tools like
		<a href="https://github.com/wjakob/nanobind" class="suplink" target="_blank">nanobind</a>,
		<a href="https://pybind11.readthedocs.io/en/stable/" class="suplink" target="_blank">pybind11</a> and
		<a href="https://www.boost.org/doc/libs/latest/libs/python/doc/html/index.html" class="suplink" target="_blank">Boost.Python</a>
		can generate type definitions automatically from your C code. Here's a quick preview of how they work:
	</p>
	<pre><code
>#include &lt;nanobind/nanobind.h&gt;
const char&#42; foo(const char &#42;a, int64_t b, int64_t c) { ... }
NB_MODULE(ext, m) {
	m.def("foo", &foo);
}</code></pre>
	<p>
		Alongside your own C code, you include C++ code from one of these binding generation libraries. This C++ code
		takes advantage of C++'s introspection abilities — when you call <code>NB_MODULE</code>, nanobind runs a
		bunch of C++ code that examines all of your function definitions, then creates Python glue code based on
		them. This is really convenient.
	</p>
	<p>
		If you're looking for something more manual, you can use
		<a href="https://cffi.readthedocs.io/en/stable/overview.html" class="suplink" target="_blank">cffi in API mode</a>.
	</p>
	<h4>Ruby</h4>
	<p>
		Type definitions can be automated using
		<a href="https://github.com/ruby-rice/ruby-bindgen" class="suplink" target="_blank">ruby-bindgen</a>,
		<a href="https://github.com/ruby-rice/rice" class="suplink" target="_blank">rice</a> etc.
	</p>
	<h4>JavaScript</h4>
	<p>
		<a href="https://github.com/charto/nbind#readme" class="suplink" target="_blank">nbind</a>
		is very similar to nanobind.
	</p>
</div>

There is no need for any data conversion between your C extension module and the `c_lib` code you're calling, since they
both use C data structures. And with respect to conversion for calls between your host code and your C extension
module, you now have more flexibility than in previous solutions.

<div class="alert">
	<h3>Data conversion</h3>
	<p>
		Because your extension module can create both Python/Ruby/Node.js data structures and C data structures, you can
		perform data conversion whenever is most performant.
	</p>
	<p>
		For example, say you need to call <code>c_lib</code>'s function <code>foo()</code> 500 times. If you generate
		500 different function calls from your host language, you'll have to convert data back and forth 500 times.
	</p>
	<p>
		But if you call <code>foo()</code> 500 times from your extension module, keeping the data in the existing C
		structures, you'll only have to convert that data to Python/Ruby/Node.js data structures <em>once</em> — much
		better!
	</p>
</div>

Symbol finding is also addressed by the aforementioned generation libraries, since you tell them about the functions in
your extension module using their own custom syntax.

Of course, when you call code in `c_lib` from your extension module, you don't have to do anything special — the runtime
dynamic linker will do the work to find symbols like for our example `foo` function, just like in our first dynamic
linking example.

<div class="alert">
	<h3>Symbol finding</h3>
	<p>
		Addressed by binding generation libraries.
	</p>
</div>

Call generation between your C extension module and `c_lib` is not a problem, since it's handled by the C compiler.

To generate the calls from your host code to your C extension module, each language has its own convention. I'm
including these for completeness, though you don't need to worry about them at all:

<div class="alert">
	<h3>Call generation</h3>
	<h4>Python</h4>
	<p>
		<a href="https://peps.python.org/pep-0590/" class="suplink" target="_blank"><code>vectorcall</code></a>,
		<a href="https://docs.python.org/3/c-api/call.html" class="suplink" target="_blank"><code>tp_call</code></a>.
	</p>
	<h4>Ruby</h4>
	<p>
		<a href="https://github.com/ruby/ruby/blob/8a586af33b59cae93a1bee13c39e87dd087a4a6b/vm.c#L3096" class="suplink" target="_blank"><code>rb_vm_call_cfunc</code></a>.
	</p>
	<h4>JavaScript</h4>
	<p>
		I don't know! Do you? If so, let me know.
	</p>
</div>

That's all for this particular method — dynamic linking with extension modules.

We've seen that extension modules have plenty of advantages. Are there any disadvantages?

Well, you have to write a bunch of C code, and either write quite tiresome bindings yourself, or import a lot of
autogeneration machinery. It's up to you to decide whether that's worth it.

---

<details>
	<summary>A bonus fourth strategy: what does Go do?</summary>
	<p>
		Go is a compiled language, but it does not allow direct dynamic linking, as far as I can tell.
	</p>
	<p>
		Instead, Go uses a lightweight extension module system, implemented as part of
		<a href="https://pkg.go.dev/cmd/cgo" class="suplink" target="_blank">cgo</a>.
	</p>
	<p>
		However, Go goes beyond simpler extension module implementations in that it bundles its own FFI implementation,
		effectively implementing a small libffi from scratch. We can think of cgo as a complete, lightweight,
		self-contained and optimised extension module system — not surprising, given Go's design philosophy.
	</p>
	<p>
		I haven't covered Go specifically above, but you can read more about cgo
		<a href="https://go.dev/blog/cgo" target="_blank">here</a>,
		and if you're feeling brave, you can also read the full implementation details in
		<a href="https://go.dev/src/runtime/cgocall.go" target="_blank">cgocall.go</a>.
	</p>
</details>

And that's all I wanted to cover.

This is a living document, so your [feedback is welcome](/#contact). Given the complexity of the topic, I'm sure my
understanding could be improved.

Still, I hope you found this overview helpful.&nbsp;<span class="ender"></span>

## Additional Resources

* _[ESSTRA][esstra]_, a tool developed at Sony that embeds metadata into binaries at compile time, so that they can later
  be traced.
* _[auditwheel][auditwheel]_, a Python tool that can analyse the binary dependency of wheels, using `DT_NEEDED` records
  from the `.dynamic` section found in ELF files. See particularly [PR #577][auditwheel-577].

[auditwheel]: https://github.com/pypa/auditwheel
[auditwheel-577]: https://github.com/pypa/auditwheel/pull/577
[esstra]: https://github.com/sony/esstra
