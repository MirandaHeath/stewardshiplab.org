---
authors: ['vlad']
category: 'philosophy'
title: "A Research Lab for Open Source"
date: 2026-07-30
description: "We're launching the world's first research lab dedicated to Open Source sustainability."
hidden: true
embargoReleaseTime: 2026-07-30T09:00:00[Europe/London]
ctaText: Want to strengthen Open Source together?
ctaAction: Sponsor us
ctaLink: /sponsor
disclaimers:
  - title: Authorship note
    text: This post is written by humans. LLMs have never been used in my writing.
---

Today, we're launching the world's first research lab dedicated to Open Source sustainability.

Why? The infrastructure we all use depends on Open Source: transportation, healthcare, the internet and more.
When the Open Source packages we use break, this infrastructure is at risk.

This isn't hypothetical — it's happening already, with catastrophic global supply chain attacks such as the [XZ Utils
backdoor][xz], [Log4Shell][log4shell], [Shai-Hulud][shaihulud] and others.

There are efforts underway to make Open Source development more sustainable.
The [Open Source Pledge][osp] has raised $7,262,189 for maintainers,
the [Open Source Endowment][ose] is nearing a principal of $1m,
and excellent security work is being done by
Python's [Security Developer-in-Residence][seth],
[Alpha-Omega][ao]
and others.

But there is no organisation dedicated to answering the more general questions that this work depends on. What are the
most critical [keystone][keystone] packages? Which keystone packages appear to be maintained, but are actually long-dead
[Bernies][bernies]? Which dependencies are [invisible][bindep] to us? How can we prevent the ever-growing issue of
[maintainer burnout][burnout]?

One would think that one of the many [well-funded Open Source foundations][foundations] could tackle this research, with
a median yearly revenue of $1.6m and a mean of $11.6m. But for the most part, foundations, as a policy, do not pay
developers at all, so they cannot fund this work. This is partly a quirk of the US tax code — until the Feb 2026 launch
of the Open Source Endowment, the IRS had not recognised Open Source software as serving the public benefit, so they had
not given _501(c)(3)_ status to any organisation that funds Open Source development.

What about for-profit companies? Some, like [Chainguard][chainguard] and [Socket][socket] are building software supply
chain analysis tools. But this work is proprietary. This doesn't sit right with our vision. The tools that allow us to
monitor our critical infrastructure _are themselves critical infrastructure_, so they should be publicly accessible, and
funded independently of for-profit interests. This way, current and future developers and researchers can build tools on
top of them, and the public can benefit.

<hr class="hr--short hr--blue">

All in all, a non-profit public-benefit home for this critical research does not exist.

So we decided to create one.

The Software Stewardship Lab is a new non-profit research lab dedicated to ensuring the stability of the Open Source
ecosystem we all depend on. We map and strengthen the Open Source ecosystem by building software, creating APIs, and
writing research reports. But we also focus on the human side of Open Source, by investigating and caring for maintainer
health.

Our [team][team] includes some of the most experienced people in the field:

- [Vlad-Stefan Harbuz][vlad], director of the [Open Source Pledge][osp] and adviser to the [Open Source Endowment][ose].
- [Andrew Nesbitt][andrew], creator of [ecosyste.ms][ecosystems] and probably the world's foremost expert on package
management.
- [Miranda Heath][miranda], author of the to-date most comprehensive [report on burnout in Open Source][burnout].
- [Dawn Foster][dawn], CHAOSS board member, with a [PhD][dawn-academic] using metrics to study the Linux kernel.
- [Daniel Roe][daniel], leader of globally-used web framework [Nuxt][nuxt] and a steward of [npmx][npmx].
- [Matias Capeletto (patak)][patak], also a steward of [npmx][npmx], and a legendary Open Source community leader.
- [Mike McQuaid][mike], leader of Homebrew and a former GitHub Principal Engineer.

We are [registered][companies-house] as a Scottish non-profit — though our scope is global — and our [values][values]
and [articles][articles] legally bind us to serving the public good and making all our work publicly accessible.
Our [independent non-executive directors][team] hold us accountable.

<blockquote class="blockquote--center">
  <p>
    “This effort is critical to the future sustainability of Open Source. The unique challenges the Open Source
    ecosystem is facing need the sort of Open Source thinking the Software Stewardship Lab is building. Open Source
    has never been more important. It's imperative we give it a strong future.”
  </p>
  <footer>
    <img
      src="/images/people/josh-bressers@120px.webp"
      alt="A portrait of Josh Bressers"
      width="22"
      height="22"
    >
    <div>
      <div>
        Josh Bressers
      </div>
      <em>
        VP of Security at
        <a href="https://anchore.com/" target="_blank">Anchore</a>,
        host of the
        <a href="https://opensourcesecurity.io/" target="_blank">Open&nbsp;Source&nbsp;Security&nbsp;Podcast</a>
      </em>
    </div>
  </footer>
</blockquote>

Our current research focus is building the components of an observatory that allows users to identify and monitor the
world's critical Open Source packages in real time. You can find more details [here][observatory].

Another ongoing project is compiling yearly follow-ups to the [Burnout Report][burnout], and creating a companion report
on how AI is affecting maintainer burnout.

Moving forward, the Lab's experts will supervise and direct funding to Open Source sustainability researchers doing
critical work. We are already building a research network and working together with universities on this.

And we are also working with our solicitors on becoming the UK's first Open Source charity, hopefully helping pave the
way for charity regulators worldwide to recognise the criticality of Open Source infrastructure.

<hr class="hr--short hr--blue">

But we need your help.

We can't do this research without funding. In fact, without funding, we would be in the ironic situation where we
couldn't sustainably develop _the very technology_ required for the Open Source ecosystem to be more sustainable. That's
a _Catch-22_ with serious ramifications.

We have seen that companies are [willing to fund][osp-members] keystone Open Source projects, which is important. But
we're asking organisations to also fund Open Source sustainability research, simply because it acts as a force
multiplier — it creates tools that strengthen the entire ecosystem, not just individual projects. Each dollar funds
structural improvements to the foundations of our technological infrastructure.

If you're a decision maker at a company, we have [multiple sponsorship tiers][sponsor] available, and are happy to
[discuss][contact] how we can make sponsoring the Lab work for you.

If you represent a grant-making organisation, we have a grant proposal available on [_Securing Python's Binary
Dependencies_][proposal-bindep], and others in the works. If this, or related work, aligns with your funding goals,
[contact us][contact].

We are very grateful for donations from individuals as well. You'll find more info on our [Sponsor page][sponsor].

All our income and expenses will be detailed on Open Collective with full transparency.

Know that, if you are able to help fund our work, you are making a positive difference to the Open Source ecosystem that
the entire world relies on.

<hr class="hr--short hr--blue">

If our mission resonates with you, follow us on [Bluesky][bluesky] and [Mastodon][mastodon], join our community of
researchers on [Discord][discord], and share this post with interested colleagues.

Open Source lies at the foundation of our modern technology. That technology can, and does, fall apart when keystone
projects are underfunded and insecure, and when maintainers are overworked. Existing solutions aren't doing enough to
preserve our critical infrastructure.

We can solve this problem together with your support. If you're able to, [sponsor us][sponsor].

<div class="post-signature">
  <img src="/images/vlad-squiggle-sig.svg" width="130" alt="Vlad's signature">
  <i>
    Vlad-Stefan Harbuz, Executive Director
  </i>
  <p>Together with our board:</p>
  <i>
    Andrew Nesbitt<br>
    Miranda Heath<br>
    Daniel Roe<br>
    Dawn Foster<br>
    Matias Capeletto
  </i>
</div>

[andrew]: https://nesbitt.io/
[ao]: https://alpha-omega.dev/
[articles]: https://find-and-update.company-information.service.gov.uk/company/SC893294/filing-history/MzUyNjQ3NTMwNWFkaXF6a2N4/document?format=pdf&download=0
[bernies]: /ideas/weekend-at-bernies
[bindep]: /reports/binary-dependencies-identifying-the-hidden-packages-we-all-depend-on
[bluesky]: https://bsky.app/profile/stewardshiplab.org
[burnout]: /reports/burnout-in-open-source-a-structural-problem-we-can-fix-together
[chainguard]: https://www.chainguard.dev/
[chaoss]: https://chaoss.community/
[companies-house]: https://find-and-update.company-information.service.gov.uk/company/SC893294
[contact]: /contact
[daniel]: https://roe.dev/
[dawn-academic]: https://fastwonderblog.com/academic/
[dawn]: https://fastwonder.com/
[discord]: https://discord.gg/2GNQHcKmcH
[ecosystems]: https://ecosyste.ms/
[foundations]: /reports/foundations
[homebrew]: https://brew.sh/
[keystone]: https://vlad.website/keystone-maintainers-keep-the-internet-going/
[log4shell]: https://en.wikipedia.org/wiki/Log4Shell#Usage
[mastodon]: https://fosstodon.org/@stewardshiplab
[mike]: https://mikemcquaid.com/
[miranda]: https://mirandaheath.website/
[npmx]: https://npmx.dev/
[nuxt]: https://nuxt.com/
[observatory]: /#observatory
[ose]: https://endowment.dev/
[osp-members]: https://opensourcepledge.com/members/
[osp]: https://opensourcepledge.com/
[patak]: https://patak.cat/
[proposal-bindep]: /proposal.bindep.pdf
[seth]: https://sethmlarson.dev/
[shaihulud]: https://securitylabs.datadoghq.com/articles/shai-hulud-2.0-npm-worm/
[socket]: https://socket.dev/
[sponsor]: /sponsor
[team]: /#team
[values]: /#values
[vlad]: https://vlad.website/
[xz]: https://en.wikipedia.org/wiki/XZ_Utils_backdoor
