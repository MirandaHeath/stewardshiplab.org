---
authors: ['vlad']
category: 'philosophy'
title: "npmx: A Lesson in Open Source's Collaboration Feedback Loops"
description: "npmx's success is reminding us why Open Source is such a special social phenomenon."
date: "2026-03-03"
location: Edinburgh, Scotland
canonicalUrl: http://opensourcepledge.com/blog/npmx-a-lesson-in-open-source-collaboration-feedback-loops
canonicalWebsiteName: "the Open Source Pledge blog"
featured: true
---

[_npmx_ launched today][npmx-release-post], and witnessing its incredible development journey has taught me a lot about
what I'm calling the _collaboration feedback loops_ of successful Open Source projects — patterns where every
contribution to a project makes future contributions easier, creating a virtuous cycle of collaboration, enabled by
trust and collective governance. Let's start with some details about _npmx_.

JavaScript is one of the world's most popular programming languages, and JavaScript developers use the _Node package
manager_ (_npm_) to incorporate packages written by others into their work. _npm_ packages can be accessed through
[npmjs.com][npmjs], but this website, maintained by Microsoft's GitHub, has not been gaining new features at the
fastest pace. Currently, its entire homepage is an ad for paid services offered by Microsoft.

[_npmx_][npmx] is a brand new browser for _npm_ packages, developed by the community. It doesn't replace the _npm_
package registry, it just offers another way to browse the packages in it.

On 22 Jan 2026, [Daniel Roe][roe] made the [first commit][npmx-first-commit] to _npmx_, and 10 days later, [100
people][100-contrib] had already contributed to it. 13 days in, the numbers were even more impressive: 199
contributors, with over 1000 merged pull requests.

Of course, _npmx_ has plenty of innovative features, some of which I've never seen in another package manager interface:
[package comparisons][comparisons], community [flagging][vulns-and-deps] of vulnerabilities and outdated dependencies,
[automatic documentation generation][docs], and [detailed download charts][charts].

_npmx_ even runs [its own atproto PDS][vlad-pds-post], which is a great home for the social accounts of Open Source
projects, since it provides them with a community-run, European-hosted home. That's where the [Open Source Pledge
Bluesky account][osp-pds-post] lives now.

But what I find most impressive about _npmx_ is something else: how its team has fostered a culture of trust and
playfulness that has enabled the speed and scale of its development by creating _collaboration feedback loops_.

---

## Collaboration Feedback Loops

Here's where the feedback loops come in. At least two things are required for a project like _npmx_ to come into being.

First, _imagination_. We're so used to the practices that are common in our everyday lives that it can be difficult to
get into the mindset of imagining alternatives. But imagination is an activity best done socially. Once Daniel [raised
the possibility][daniel-intro-post] of alternatives to [npmjs.com][npmjs], and once the community started bouncing ideas
around, hundreds of contributors came up with suggestions they would not have come up with individually. Each
contributor built a foundation for the next person's imagination.

Second, _implementation_. There's a lot of work to do on a project like this, and not everyone has the time or
expertise to lay down the technical foundations. But the more _npmx_ developed, the wider the variety of work available
became, giving would-be contributors an ever-increasing range of tasks to test their skills on.

This is the _collaboration feedback loop_ of Open Source. Earlier contributors make future contributions easier, both in
terms of imagination and implementation. Each contribution sends ripples beyond the code contained within it — present
contributions set up a ladder for future contributors to use.

---

But there are at least two conditions that must be met for this virtuous cycle to happen.

## Open Collaboration

The first condition is _open collaboration_. It's obvious that there's a kind of collaboration feedback loop when any
two people collaborate, like when you and your partner bounce ideas off each other. Loops of larger scales can happen
within companies — one on the larger side might have 50 or 100 developers.

But only global, fully open collaboration can produce virtuous cycles on the scale that Open Source has given us. Open
collaboration gives us a huge potential base of contributors, with a variety of ability that is impossible to find
within any single company ([Weber 2005][weber-success], ch 6).

This global base of contributors is what _npmx_ is leveraging, and ironically, Microsoft itself has admitted that
“commercial quality can be achieved/exceeded by OSS projects” ([Weber 2005][weber-success], p 126).

## Trust

The second condition is one that _npmx_ meets with flying colours: _having a culture of trust_. 5 weeks into the
project, _npmx_ already has [18 maintainers][npmx-about]. Many creators would struggle to find the trust to give 17
people a say in the governance of a project they just started. But the esteem implicit in trust motivates people to do
their best and to build relationships with those that took a risk for them.

This kind of trust reveals a deep understanding present in _npmx_'s culture — an understanding that we depend on other
people more than we know, and that we can only go so far by ourselves.

In _npmx_'s case, this distributed governance model has paid off, and not just in terms of productivity. The sheer
energy, optimism, excitement and hope in the _npmx_ community is something I've rarely, if ever, seen in an Open Source
project. It feels like the opposite of corporate drudgery; like a big programming sleepover where everyone is excited
to playfully create.

---

Of course, no collaboration feedback loop can increase in speed forever, and _npmx_'s growth will eventually settle into
a cosy steady state. But how nice it is to witness this cultural moment in Open Source. And how nice it is to be part of
it! I have made my own first contributions to _npmx_.

In a different sense, the [npmjs.com][npmjs] team is also participating in the fun — it looks like the success of _npmx_
has pushed them to ship their [first new features][npmjscom-features] in a while.

But companies that depend on _npm_ can participate, too. That's most companies, by the way.

Many companies are already supporting the Open Source maintainers whose work they depend on, by paying those maintainers
and becoming members of the [Open Source Pledge][osp], which is how we've raised $6,904,318 for Open Source maintainers
to date.

[Supporting _npmx_ financially][npmx-opencollective] certainly counts towards Pledge membership. But more than that,
it's a way for companies to support not only the technological innovators they rely on, but also the cultural
innovators: those who enable Open Source innovation with their vision of trust and collective governance. Our global
tech ecosystem wouldn't be there without them.&nbsp;<span class="ender"></span>

[100-contrib]: https://bsky.app/profile/npmx.dev/post/3mdsf6qaqys2c
[charts]: https://bsky.app/profile/graphieros.npmx.social/post/3mdg6wmflg22m
[comparisons]: https://github.com/npmx-dev/npmx.dev/pull/383
[daniel-intro-post]: https://bsky.app/profile/danielroe.dev/post/3md3cmrg56k2r
[depflags]: https://npmx.dev/package/nuxt#dependencies
[docs]: https://bsky.app/profile/danielroe.dev/post/3mdgta2umgs2o
[flags]: https://bsky.app/profile/linolevan.com/post/3mdnqvfflhs2y
[forkable-llms]: https://www.forkable.io/p/when-ai-floods-the-commons-maintainers
[npmjs]: https://www.npmjs.com/
[npmjscom-features]: https://bsky.app/profile/filipsobol.bsky.social/post/3menmxfxt4k25
[npmx-about]: https://npmx.dev/about
[npmx-first-commit]: https://github.com/npmx-dev/npmx.dev/commit/e39e56c08fd1e7bdb556c8565c6b11b3c34c8934
[npmx-opencollective]: https://opencollective.com/npmx
[npmx-release-post]: https://npmx.dev/blog/alpha-release
[npmx]: https://npmx.dev
[osp-pds-post]: https://bsky.app/profile/opensourcepledge.com/post/3mfteuvfc2222
[osp]: https://opensourcepledge.com/
[roe]: https://roe.dev/
[salma-howto]: https://whitep4nth3r.com/blog/how-to-make-your-first-open-source-contribution/
[vlad-pds-post]: https://bsky.app/profile/vlad.website/post/3mfm7cbosps2o
[vulns-and-deps]: https://bsky.app/profile/finnbayer.de/post/3mfxeh4fw422q
[weber-success]: https://www.hup.harvard.edu/books/9780674018587
