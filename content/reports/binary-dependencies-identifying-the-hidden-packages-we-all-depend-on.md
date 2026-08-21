---
[buildwarden]: https://github.com/buildwarden/buildwarden
authors: ['vlad']
category: 'software-supply-chains'
title: "Binary Dependencies: Identifying the Hidden Packages We All Depend On"
description: "We need better tools for uncovering phantom binary dependencies. Not having these tools makes our global tech infrastructure less secure, and puts a strain on the Open Source maintainers we rely on."
date: 2026-01-31T00:00:00+00:00
location: 'Brussels, Belgium'
venue: 'FOSDEM 2026'
venueUrl: 'https://fosdem.org/2026/'
canonicalWebsiteName: "vlad.website"
canonicalUrl: "https://vlad.website/binary-dependencies-identifying-the-hidden-packages-we-all-depend-on/"
featured: true
featuredOnHomepage: true
---

<figure>
    <video
        controls
        width="980"
        poster="https://vlad.website/static/vlad-fosdem-2026.webp"
    >
        <source type="video/mp4" src="https://vlad.website/static/vlad-fosdem-2026.mp4">
        Download the <a href="https://vlad.website/static/vlad-fosdem-2026.mp4">mp4 video</a>.
    </video>
    <figcaption>
        Or watch on <a href="https://www.youtube.com/watch?v=fP8OFI5PdBI">YouTube</a>
    </figcaption>
</figure>

On 31 Jan 2026, I gave a talk at [FOSDEM 2026][fosdem] on _phantom binary dependencies_ — packages that we depend on in
binary form, even though these dependency relationships are invisible to us. If we cannot reliably identify these
phantom dependencies, the sustainability and security of our tech infrastructure will be at risk, which threatens
critical services such as hospitals, transportation and the internet.

You can watch my talk on this page, and I've included more details below, as well as a list of resources for those who
want to learn more about this topic.

<div class="page-items">
    <a class="button button--arrow" href="https://fosdem.org/2026/schedule/event/7NQJNU-binary_dependencies_identifying_the_hidden_packages_we_all_depend_on/">
        See talk info
    </a>
    <a class="button button--arrow" href="https://vlad.website/static/vlad-fosdem-2026.pdf">
        See slides
    </a>
</div>

## Abstract

When you create a software package, your work might depend on other packages. Usually, you will depend on the _source
code_ of these other packages. However, sometimes, you will depend on _precompiled binaries_ of your dependencies. This
frequently happens when calling compiled code, like C code, from other programming languages, such as Python.

In almost all ecosystems, it is difficult to keep track of binary dependencies. When you depend on a package's source
code, this is normally recorded in your manifest file — `pyproject.toml`, `package.json` and so on. However, when you
depend on a package's precompiled binaries, this information is usually not recorded anywhere. This means that the
binary dependency relationship between your project and whatever you're depending on is hidden — so we can say that you
have a _phantom binary dependency_.

You can find detailed technical information about how binary dependencies work in my article titled
[How Binary Dependencies Work Across Different Languages][how-bindeps-work].

Why are phantom binary dependencies important? For at least two reasons:

- **Sustainability**.
  <a href="/ideas/keystone-maintainers-keep-the-internet-going/" class="suplink">Keystone</a> maintainers struggle to get paid
  because of the
  <a href="https://openpath.quest/2024/the-open-source-sustainability-crisis/" class="suplink"
      >Open Source sustainability crisis</a>,
  which makes them more vulnerable to
  <a href="https://opensourcepledge.com/blog/burnout-in-open-source-a-structural-problem-we-can-fix-together/" class="suplink">
    burnout</a>.
  Projects like the
  <a href="https://opensourcepledge.com" class="suplink">Open Source Pledge</a>,
  the
  <a href="https://endowment.dev" class="suplink">Open Source Endowment</a>,
  and
  <a href="https://thanks.dev" class="suplink">thanks.dev</a>
  help maintainers get paid. But we have to know which maintainers we depend on to be able to pay them. If we cannot
  identify our binary dependencies, we cannot identify which maintainers we should support, which puts the
  sustainability of the Open Source ecosystem at risk, threating our global tech infrastructure.
- **Security**.
  If your project depends on a library, any security issues in that library will leave your project vulnerable. If you
  don't have a clear picture of which libraries you depend on, you won't have a clear picture of security
  vulnerabilities that might affect you, which puts your project at risk. For software that supports critical
  infrastructure like hospitals, transportation systems, and the internet, this vulnerability puts the public at risk of
  harm.

There are tools we can build, and systemic changes we can make to our package management ecosystems, that will correct
these issues, though this will be a lot of work. In my talk, I sketch the beginnings of a solution.

I believe we should start by creating tools that can identify and record binary dependencies for a wide variety of
packages, giving maintainers, security researchers, and other parties the information they need to figure out more
robust solutions.

Once we have this information, we can work on other aspects of the problem. How can we made sure that binary dependencies
are always sourced from the appropriate package managers, instead of being merely vendored, so that they can be kept up
to date with security patches? How can we make sure that language package managers and system package managers
interoperate to warn developers of security issues across the entire dependency graph?

I'm actively involved in this work, and there are many conversations happening around these questions. If you're
interested, here are some resources to help you learn more and/or get involved!&nbsp;<span class="ender"></span>

## Other Resources

- The [Open Source Pledge][osp] is an initiative aiming to get companies to pay the Open Source maintainers whose work
  they depend on. Pledge members have paid $6,879,498 to Open Source developers at the time of writing.
- [_The C-Shaped Hole in Package Management_][c-shaped] by Andrew Nesbitt, a great post about the problem of binary
  dependencies.
- [_Dependency Resolution in Python: Beware The Phantom Dependency_][phantom] by Anand Sawant is where the term _phantom
  dependency_ was originally coined.
- [_auditwheel_][auditwheel], a widely-used Python package that can identify a wheel's required dynamic libraries, but
  does not yet have accurate human-readable output, or an API for researchers and developers to use.
- [Issue #676][auditwheel-676] on [_auditwheel_][auditwheel], where I ask the maintainers whether they are interested in
  adding APIs that would give users and researchers more visibility into binary dependencies.
- [_elfdeps_][elfdeps], a lesser-known Python package that can identify a wheel's required dynamic libraries and _does
  have_ a public API.
- [PEP 770][seth-pep-770], in which author Seth Larson introduces SBOMs to Python packages. See also his
  [PR #577][auditwheel-577] to [_auditwheel_][auditwheel], which enables users to discover binary dependencies,
  and include them in a package's SBOM.
- [PEP 725][pep-725], which specifies a way to record binary dependencies in `pyproject.toml`. This interoperable record
  of binary dependencies could allow many tools to, for example, flag security issues that were previously invisible.
- [PEP 804][pep-804], which specifies a system for mapping binary dependency names to packages in non-Python registries.
- [Issue #1261][ecosystems-packages-1261] on the <a href="https://ecosyste.ms" class="suplink">ecosyste.ms</a> _packages_
  repo collects more information on strategies for tracking binary dependencies across multiple package managers.
- [_ESSTRA_][esstra] is a tool developed at Sony that aims to improve supply chain transparency by embedding metadata
  into binaries.
- [_Fromager_][fromager] is a tool that aims, among other things, to provide a way for Python packages to be built
  completely from source, which includes building all their binary dependencies from source. I am not sure whether this
  is actually implemented yet.
- [UAPI specification 8][uapi-8] provides a section within ELF binaries for recording the provenance of a dynamic
  library, including the name of the system package it originated from. See also Fedora's page about [_Package
  information on ELF objects_][fedora-package-info].
- [UAPI specification 12][uapi-12] provides a section within ELF binaries for recording the names of libraries loaded
  with `dlopen()`. This would hypothetically allow us to keep track of libraries opened with
  [_libffi_][libffi]/[_cffi_][cffi]. However, I'm not sure how these records would be filled in, since it's possible for
  the names of libraries opened with `dlopen()` to not be known until runtime.
- In a paper titled [_Insight: Exploring Cross-Ecosystem Vulnerability Impacts_][insight], Xu et al describe a system
  for identifying when Python code calls into parts of C-based dynamic libraries that are known to have security
  vulnerabilities. According to their research, 24.0% of PyPI projects “transitively invoke vulnerable APIs from C
  libraries”. Note, however, that Xu et al analyse Python code that calls into binary dependencies _using `dlopen()`_,
  which is a notable caveat, since these kinds of FFI calls are not the most common way to call into binary
  dependencies. See my [post on how binary dependencies work][how-bindeps-work] for more information.
- The [_PURL registry_][purl-registry] is a registry of packages, mainly C/C++ packages, that do not otherwise have a
  [PURL][purl] because they are not clearly identified in package registries. Such a registry could be used for
  assigning reliable identities to binary dependencies.
- [_How to publish binaries on npm_][npm-bin-pub] by Luca Forstner tells us that it's possible, but tricky, to publish
  binary packages on _npm_.
- [_BuildWarden_][buildwarden] “produces a cryptographically-signed, tamper-evident ledger of every network input to a
  software build”.

[auditwheel-577]: https://github.com/pypa/auditwheel/pull/577
[auditwheel-676]: https://github.com/pypa/auditwheel/issues/676
[auditwheel]: https://github.com/pypa/auditwheel
[buildwarden]: https://github.com/buildwarden/buildwarden
[burnout]: https://opensourcepledge.com/blog/burnout-in-open-source-a-structural-problem-we-can-fix-together/
[c-shaped]: https://nesbitt.io/2026/01/27/the-c-shaped-hole-in-package-management.html
[cffi]: https://cffi.readthedocs.io/en/stable/
[ecosystems-packages-1261]: https://github.com/ecosyste-ms/packages/issues/1261
[elfdeps]: https://github.com/python-wheel-build/elfdeps/
[endowment]: https://endowment.dev
[esstra]: https://github.com/sony/esstra
[fedora-package-info]: https://fedoraproject.org/wiki/Changes/Package_information_on_ELF_objects
[fosdem]: https://fosdem.org/2026/
[fromager]: https://github.com/python-wheel-build/fromager
[how-bindeps-work]: /reports/how-binary-dependencies-work/
[insight]: https://dl.acm.org/doi/pdf/10.1145/3551349.3556921
[keystone]: /keystone-maintainers-keep-the-internet-going/
[libffi]: https://github.com/libffi/libffi
[npm-bin-pub]: https://sentry.engineering/blog/publishing-binaries-on-npm
[osp]: https://opensourcepledge.com
[pep-725]: https://peps.python.org/pep-0725/
[pep-804]: https://peps.python.org/pep-0804/
[phantom]: https://www.endorlabs.com/learn/dependency-resolution-in-python-beware-the-phantom-dependency
[purl-registry]: https://github.com/package-url/purl-registry
[purl]: https://github.com/package-url/purl-spec
[seth-pep-770]: https://sethmlarson.dev/pep-770-sbom-data-from-pypi-fedora-and-redhat
[suscri]: https://openpath.quest/2024/the-open-source-sustainability-crisis/
[uapi-12]: https://uapi-group.org/specifications/specs/elf_dlopen_metadata/
[uapi-8]: https://uapi-group.org/specifications/specs/package_metadata_for_executable_files/
