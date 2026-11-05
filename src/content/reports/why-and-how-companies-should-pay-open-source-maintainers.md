---
authors: ['vlad']
category: 'funding-tech-infrastructure'
title: "Why and How Companies Should Pay Open Source Maintainers"
date: "2025-02-02"
location: 'Brussels, Belgium'
venue: 'FOSDEM 2025'
venueUrl: 'https://fosdem.org/2025/'
canonicalWebsiteName: 'vlad.website'
canonicalUrl: 'https://vlad.website/why-and-how-companies-should-pay-open-source-maintainers/'
---

<figure>
	<video
		controls
		width="980"
		poster="https://vlad.website/static/why-and-how-companies-should-pay-open-source-maintainers.webp"
	>
		<source type="video/mp4" src="https://vlad.website/static/why-and-how-companies-should-pay-open-source-maintainers.mp4">
		Download the <a href="https://vlad.website/static/why-and-how-companies-should-pay-open-source-maintainers.mp4">mp4 video</a>.
	</video>
	<figcaption>
		Or watch on <a href="https://youtu.be/UarZwUjFJpI">YouTube</a>
	</figcaption>
</figure>

On 2 Feb 2025, I gave a talk at [FOSDEM 2025][fosdem] on improving the sustainability of the Open Source ecosystem,
titled “Why and How Companies Should Pay Open Source Maintainers”. This page includes information on this talk, as well
as ways to submit your own feedback and views on these topics.

<div class="page-items">
	<a class="button button--arrow" href="https://fosdem.org/2025/schedule/event/fosdem-2025-4149-why-and-how-companies-should-pay-open-source-maintainers/">
		See talk info
	</a>
	<a class="button button--arrow" href="https://vlad.website/static/why-and-how-companies-should-pay-open-source-maintainers.pdf">
		See slides
	</a>
</div>

<figure style="max-width: 40rem; margin-left: auto; margin-right: auto;">
	<img
		src="https://vlad.website/static/vlad-at-fosdem-2025@1000px.webp"
		alt="Me speaking in front of a crowd of seated people at FOSDEM 2025"
		loading="lazy">
	<figcaption>Thanks to <a href="https://merveilles.town/@leo">leo</a> for this photo.</figcaption>
</figure>

## Join the Conversation

Have feedback or ideas? I set up an issue tracker where everyone can share their thoughts.

<div class="page-items">
	<a class="button button--arrow" href="https://codeberg.org/vladh/open-source-sustainability/issues">
		Go to issue tracker
	</a>
</div>

## Abstract

In this talk, I present some economical arguments for why companies should pay the Open Source maintainers they depend
on, and I suggest some technological solutions for how this might be accomplished.

Virtually all companies use Open Source software, making a critical subset of the Open Source ecosystem crucial for
everything from watching YouTube videos to working with medical records. But the companies that use Open Source software
rarely pay the maintainers of the software they depend on. I explain that this can lead to serious issues in the Open
Source ecosystem, such as the international security risks we saw with the XZ backdoor and the Log4Shell vulnerability.

I explain that, if companies paid the Open Source maintainers they depend on, the Open Source ecosystem would become
more sustainable and stable while retaining the significant economical advantages provided by Open Source governance
models, and companies would benefit from this.

Next, I want to talk about how to actually pay maintainers. Forward-thinking companies have, in fact, shown their
willingness to fund the Open Source software they depend on. But it is not always trivial to figure out which Open
Source maintainers a large codebase depends on, and how to actually pay those maintainers.

At thanks.dev, we have created a platform that scans companies' codebases to identify the Open Source maintainers whose
projects these codebases depend on. We then give companies an easy and financially transparent way to pay these
maintainers.

But dependencies often form a complex tree, and it is not immediately clear how much money should go to each
dependency's maintainer. Current methods, though helpful, are simplistic. I introduce a new algorithmic technique for
fund allocation, which uses a combination of coupling and complexity metrics to calculate which dependencies are most
critical to a certain project. Using this method can provide a better allocation of funds.

I am keen to hear the community's feedback on both my economical and my technological suggestions, and to further
develop solutions together.&nbsp;<span class="ender"></span>

## Other Resources

* [Open Source Pledge][osp]
* [thanks.dev][td]

[fosdem]: https://fosdem.org/2025/
[osp]: https://opensourcepledge.com
[td]: https://thanks.dev
