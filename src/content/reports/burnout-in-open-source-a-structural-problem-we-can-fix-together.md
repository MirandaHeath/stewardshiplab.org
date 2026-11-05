---
authors: ['miranda']
category: 'maintainer-well-being'
title: "Burnout in Open Source: A Structural Problem We Can Fix Together"
date: "2025-11-18"
description: "Burnout is affecting the entire Open Source ecosystem. Here's what we could do to make things better."
canonicalWebsiteName: "the Open Source Pledge blog"
canonicalUrl: "https://opensourcepledge.com/blog/burnout-in-open-source-a-structural-problem-we-can-fix-together/"
featured: true
featuredOnHomepage: true
ogImageUrl: "https://stewardshiplab.org/images/og/burnout-in-open-source.png"
---

<figure class="post__image">
  <img src="https://cdn.sanity.io/images/4jfayhvz/production/0811b8d8fe4ae81aa02c592f17fa29beb524dbc6-2520x945.jpg" alt="A title saying “Burnout in Open Source: A Structural Problem We Can Fix Together” next to the hand of a person buried under a pile of bug reports and pull requests reaches out, trying to escape from the pile">
</figure>

Imagine this: you build something to address a need that you have. It works — and it works well! Realising it might be useful to others, you decide to share it as Open Source.

To your surprise, it quickly becomes popular. Your work is valuable to others. It feels like a dream!

Then the requests for features and fixes come pouring in. Some feel more like demands. You care deeply about what you have made, so you try your best to respond.

You do this in your free time, but it starts to feel like a second job. Your working days get longer and longer — some nights you barely sleep. You know your work is valuable; massive companies are using it under the hood! It’s a rare day when anyone stops to say thanks for the hours you put in — but for them to offer any sort of financial support? Almost never.

A pull request comes in. Someone earnestly trying to help? Nope — it’s clearly something they threw AI at without understanding the code.

It carries on like this for months. The project you made for you, once a source of joy, is now a source of stress and anxiety. You feel profoundly unseen. Reluctantly, you begin to wonder: is it time to give up on the dream?

---

I’m a psychologist, and I’ve been compiling a report on the problem of burnout in Open Source Software (OSS).

Over the past 5 months I have interviewed OSS developers, read dozens of academic articles, and analysed 50 pieces written by members of the OSS community to try to identify the causes, and possible solutions, to OSS developer burnout.

I have been struck to learn [how much](https://opensource.org/blog/key-insights-from-the-2025-state-of-open-source-report) the software infrastructure we rely on every day is made possible by developers choosing to make their projects available Open Source, with over 96% of all companies depending on Open Source software. Even more striking, I discovered that choosing to make and maintain software as Open Source is putting developers at risk of the very real psychological harm of burnout.

Burnout is an exhaustion of physical and mental energy, typically associated with work. Burnout leaves us feeling drained, that we have no fuel left in the tank, that we are running on fumes. When we are burnt out, it is hard to motivate ourselves, to control our emotions, or to think positively about our work.

It is a _huge_ predictor of quitting.

The risk of burnout increases when there is an [imbalance](https://www.sciencedirect.com/science/article/abs/pii/S0277953604003296?via%3Dihub) between the energy our work demands of us, and the resources available to replenish it. For example, if we are expected to work long hours under higher pressure, yet the work is unrewarding, we aren’t supported by our colleagues, and we are not fairly paid or recognised for our efforts, there is a good chance we will end up burning out.

Unfortunately, conditions such as these are common in OSS, 73% of software developers around the world [experience burnout](https://www.jetbrains.com/lp/devecosystem-2023/) at some point in their careers, and [more](https://opensauced.pizza/blog/when-open-source-maintainers-leave) and [more](https://openpath.quest/2024/the-open-source-sustainability-crisis/) (and [more](https://www.youtube.com/watch?v=gR2hjbh0RUk)!) often, conversations about Open Source sustainability are turning to the topic of burnout.

The consequences of developer burnout are system-wide. When the team — or, shockingly often, single person — maintaining a project is running on fumes, [exploits get missed](https://www.technologyreview.com/2021/12/17/1042692/log4j-internet-open-source-hacking/) and [malicious collaborators](https://www.itnews.com.au/news/unknown-dev-gets-rights-to-popular-module-adds-crypto-stealer-516106) go undetected, putting the security of a [frightening proportion](https://arstechnica.com/security/2024/04/what-we-know-about-the-xz-utils-backdoor-that-almost-infected-the-world/) of our global software infrastructure at risk.

Clearly, burnout in OSS is a critical issue in need of an urgent solution. I want to tell you about two issues my research has identified that are pushing developers to the brink:

1.  Developers are struggling to make a living
2.  Toxic behavior from community members is wearing developers down.

Dissecting these issues, we will see that burnout in Open Source is not an individual problem — it’s a structural one. Hotfixes like teaching maintainers to be more resilient can only get us so far: it may be time for a substantial rewrite of some of our Open Source practices.

## 1. Developers are struggling to make a living

<figure class="post__image">
  <img src="https://cdn.sanity.io/images/4jfayhvz/production/f817760efa1ba100e353f80207c1dbbe3e19e3b9-1000x771.webp" alt="A hand reaching out for dollar bills which are getting swept away by the wind">
</figure>

[Very few developers](https://openpath.quest/2024/the-open-source-sustainability-crisis/) are able to sustain themselves financially through OSS alone, and many feel [despondent](https://www.drmaciver.com/2015/08/throwing-in-the-towel/) about the very possibility of reliable payment for OSS.

A common theme in OSS community discussion was that of the ‘[double-shift](https://www.youtube.com/watch?v=EqcuzSwySR4)’. Many developers have full-time jobs outside of OSS in order to pay the bills. While OSS might start out as a hobby, once a project takes off, maintaining it takes multiple hours of work each day. Doing both a full-time paid job and a second ‘[stealth job](https://www.youtube.com/watch?v=RbeHBnWfXUc)’ in OSS, developers face intense workloads, long hours, little sleep, and difficulty finding time for friends and family. This is unsustainable, and erodes their physical and mental health.

To add insult to injury, OSS developers often feel exploited by the beneficiaries of their work. Their code and the effort they put in to maintain it enables the software industry to be enormously profitable, and yet it is an uphill struggle to receive anything in return, leaving many feeling they are doing ‘[free labour](https://www.drmaciver.com/2015/08/throwing-in-the-towel/)’ for software companies that have the resources to pay them and a [market that is failing](https://www.youtube.com/watch?v=gR2hjbh0RUk) to recognise their contributions.

Psychological research shows that high demand, low reward and feelings of unfairness in work are all associated with an [increased risk of burnout](https://doi.org/10.1016/j.im.2013.08.003), and many OSS developer testimonials highlighted the amount of time and effort they were putting into their OSS, only to receive little-to-nothing in recognition of their efforts, as instrumental in causing their burnout.

<blockquote class="blockquote--center">
  <p>
    There was a long time where I was doing Open Source almost more time than my full time job, and getting paid nothing. I just burnt out. I stopped writing and contributing to Open Source.
  </p>
  <footer>
    <a href="https://blog.opencollective.com/frontend-masters/" target="_blank">Marc Grabanski, Open Collective Case Studies</a>
  </footer>
</blockquote>

If it were easier for OSS developers to get regular, reliable and sufficient compensation for their OSS work, they wouldn’t need to rely on additional full-time employment to pay their way while contributing to OSS. They would be less likely to feel like they are being treated unfairly by the people that benefit from their labour. They would have more time to do the things that replenish our energy: full nights of sleep, full days with the people we love. This would greatly reduce the risk of burnout.

However, while payment for OSS is an important part of the solution to the problem of OSS developer burnout, working out how best to implement it in practice is a real challenge.

Some developers fear the wrong model of payment could pressure them to act in the best interests of their funders, rather than their own interests or the interests of the community. This could in fact make burnout in OSS _worse_; [psychological research](https://ia800108.us.archive.org/view_archive.php?archive=/24/items/wikipedia-scholarly-sources-corpus/10.1037%252F0002-9432.71.2.245.zip&file=10.1037%252F0021-9010.86.3.499.pdf) suggests the risk of burnout is higher when we lack autonomy at work.

This fear is also not unfounded: the recent [Ruby Gems takeover fiasco](https://www.theregister.com/2025/09/25/open_source_to_closed_doors/) highlights how the pressure to appease sources of funding can change the direction of an Open Source project, resulting in maintainers losing control over a project they stewarded for many years.

It will take hard work and productive [community discussion](https://github.com/bzg/opensource-challenges) to figure out the details. Perhaps we need [decentralised funding](https://github.com/chadwhitacre/openpath/issues/14), such that no project is reliant on a single source of income. Maybe funded OSS projects need [collective governance](https://opensourcepledge.com/blog/open-source-deceptive-power-or-collective-governance/), to protect maintainers from the whims of the fabled [BDFL](https://en.wikipedia.org/wiki/Benevolent_dictator_for_life). Whatever precise shape it takes, the model of payment for OSS that is most protective against burnout will be one that allows maintainers to make a living while maintaining creative control over their work.

## 2. Toxic behavior from community members is wearing developers down

<figure class="post__image">
  <img src="https://cdn.sanity.io/images/4jfayhvz/production/48934b9392f5188077cb4459052b0221be560f04-1000x807.webp" alt="The hand of a person buried under a pile of bug reports and pull requests reaches out, trying to escape from the pile">
</figure>

It is more than just a lack of financial compensation that is making OSS developers feel exploited. In both the academic literature and OSS developer testimonials, one issue kept coming up [time](https://jamie.build/dear-javascript.html) and [time](https://dev.to/sapegin/healthier-way-to-open-source-your-code-2el6) again; a vocal part of the userbase can be [entitled](https://cmustrudel.github.io/papers/osstoxicity22.pdf), [insulting](https://arxiv.org/abs/2106.02245v2), and [downright toxic](https://dl.acm.org/doi/abs/10.1145/3479497).

Psychological research tells us that [hostile communication](https://dl.acm.org/doi/abs/10.1145/1952712.1952718) and [pressure to be polite](https://pubmed.ncbi.nlm.nih.gov/9597747/) to antagonistic people increase the risk of burnout, and developers are struggling in the face of intense criticism and unreasonable demands for features and fixes.

It is not straightforward for developers to say no to unreasonable requests either. Open Source developers are strikingly conscientious. Many feel responsible towards the people that depend on their project and feel guilty for leaving requests unanswered. Coding is their craft, and it takes strength to separate comments about the quality of their code from their sense of worth and identity as a craftsman.

Combine this with the fact that, once a project is popular, responding to requests and reviewing code can take hours and hours every single day, and it is easy to see why many developers feel that maintenance work can be truly thankless.

<blockquote class="blockquote--center">
  <p>
    [T]he angry response has been overwhelming. Every single day I'm reading someone else rant about how awful of a job we're doing. It's been hard to stay motivated.
  </p>
  <footer>
    <a href="https://jamie.build/dear-javascript.html" target="_blank">James Kyle, Dear JavaScript</a>
  </footer>
</blockquote>

Normally, when we receive something for free that is beneficial to us, we react with gratitude. However, it seems as if a portion of the Open Source userbase are acting as if OSS were a service provided by a company. This is the typical model of consumption in a market economy. But [Open Source has always been different](https://www.softwaremaxims.com/blog/not-a-supplier). Open Source is a common resource pool — people contribute for free, and the more people contribute, the more it benefits all of us.

If it were possible to shake users out of their default mode of consumption, to realise that Open Source is a gift not a service, provided by a small team or even single maintainer in their free time, they might be less inclined to be hostile and demanding. This would make maintenance work less thankless, and less likely to lead to burnout.

Changing group attitudes is hard. A good place to start could be with GitHub, who are well-positioned to educate users about the nature of Open Source. Leaders in the OSS community could also help raise awareness; psychological research tells us community leaders are [particularly effective](https://doi.org/10.1016/j.leaqua.2014.05.002) at shaping group practices.

While it is clear that toxic communities can break maintainers down, positive communities, where our interactions with others leave us feeling supported and give us a sense of belonging, are associated with a [lower risk of burnout](https://pubmed.ncbi.nlm.nih.gov/9597747/).

One way this could be achieved is by organising [community-focused events](https://squiggleconf.com/). These serve as watering holes at which the OSS community can gather, support each other, talk about their feelings and frustrations, and find paths forward together. Unfortunately, community events are currently few and far between and can be expensive to attend.

Another way this could be achieved is by increasing access to resources like mentoring relationships, coaching, mental health support and communications training, so developers feel supported and better able to cope in the face of demanding users. But it is hard to know how to implement this in Open Source: who would offer it, and who would pay for it?

Perhaps companies that rely on Open Source and recognise the need to give thanks to the OSS community could sponsor community events that aim to build social and emotional support among maintainers, or advance principles of good governance. Alternatively, they could fund, organise or offer access to coaching and training resources that enable developers to feel socially supported, while they support the software infrastructure we rely on every day.

---

At its core, burnout is an utter depletion of motivational energy. It is a state of exhaustion, an inability to conjure any further effort, and it is brought about when our work takes more energy from us than it gives us in return.

Developers who manage to avoid burnout find ways to give in line with what they get. They don’t spend time responding to people who don’t provide [minimal reproducible examples](https://antfu.me/posts/why-reproductions-are-required). They put as much effort into reviewing code as the author put into writing it. They learn, through great personal strength, to say no, even though they care deeply about the quality of their work.

But there is another way to rebalance the energy equation. What if instead of leaving developers to learn to refuse or burn out trying, we give something back? A move towards a community in which OSS developers are recognised as worthy of gratitude for the hugely beneficial work that they do, in which they have social support, are treated with respect, and enabled to afford to live comfortably, is a move towards a community without OSS burnout. It is time to recognise the humans behind Open Source.

---

<div class="page-items">
    <a class="button button--arrow" href="https://mirandaheath.website/report-on-burnout-in-open-source-software/" target="_blank">
        Read full report
    </a>
</div>

You can read my finished report in full using the button above. I am really keen to get feedback from the Open Source community to ensure I am fairly representing their views. If you work in open source and can spare some of your precious time to read the report, I would love to hear from you! You can talk to me on Bluesky [@mirandaheath.website](https://bsky.app/profile/mirandaheath.website), Mastodon [@mirandah@mastodon.social](https://mastodon.social/@mirandah/) or drop me an email at miranda@mirandaheath.website.

<p class="credit">
  Illustrations by Harriet Boeing. Additional work by Vlad Miricioiu, Greg Kumparak and Michael Selvidge.
</p>
