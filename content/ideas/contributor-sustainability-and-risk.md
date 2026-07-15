---
authors: ['dawn']
category: 'software-metrics'
title: "Contributor Sustainability Impacts Risk and Adoption of OSS Projects"
date: 2025-06-15
description: "How contributor sustainability is viewed through the lens of risk by companies who might adopt your project"
canonicalWebsiteName: "fastwonderblog.com"
canonicalUrl: "https://fastwonderblog.com/2025/06/15/contributor-sustainability-impacts-risk-and-adoption-of-oss-projects/"
---

I've spent a lot of time over the years thinking about the sustainability of open source projects and the role that contributor sustainability plays in overall project sustainability. When I was co-chair of the CNCF Contributor Strategy Technical Advisory Group, contributor sustainability came up often as a concern for CNCF projects, and the most common question was about how to get more people contributing to our projects. This is a hard problem, but there are some resources at the bottom of this post to help grow your contributor base and increase the sustainability of your open source projects.

What I think many people underestimate is how contributor sustainability is viewed through the lens of risk by companies who are deciding whether to adopt your project. It's easy to think that your project is different. No one will leave, and the project will be wildly successful forever, but that's not how many companies think about open source adoption. Some companies think hard about which projects to adopt, especially if those technologies are crucial for delivering solutions to their customers, and would be difficult to replace if the project suddenly wasn't available. Projects with a single dominant contributor or contributions coming almost entirely from a single company are going to be perceived as riskier and companies will be less likely to adopt or use those projects. This is especially true given the recent wave of [companies relicensing open source projects](https://fastwonderblog.com/2025/05/23/new-power-dynamics-in-open-source-rug-pulls-relicensing-and-forks/) and putting them under proprietary licenses. Put in simple terms, contributor sustainability risk makes it harder to get people to adopt your open source projects.

When I was Director of Open Source Community Strategy at VMware, I would often evaluate the risks of adopting specific open source projects, especially if we were considering building commercial products that incorporated those open source technologies in ways that were critical to delivering products to our customers. Contributor sustainability played a big role in deciding whether we would adopt a project. This was especially true for projects that were more strategically important for us, and which would be hard to replace if the project became unsustainable in the future. Given the choice, we'd select projects with better contributor sustainability, which would be a lower risk for us as a company.

Just last week, I was looking at an open source project where almost all of the contributions came from employees of the company driving the project, and there was a single lead developer who made the vast majority of the contributions and code reviews / approvals. That lead developer and their employer are single points of failure for the project. These single points of failure introduce risk for potential adopters and are likely to cause people to think twice before using a project. If I was a company looking for a solution, I would be unlikely to select a project that could suddenly cease to be updated (including security updates) if something happened to the dominant contributor or the company.

In summary, contributor risk stemming from a single person or a single employer makes your project riskier and less likely to be adopted.

While growing your contributor base is hard work, there are quite a few resources to help you improve contributor sustainability along with gaining a better understanding about how companies think about risk when adopting open source projects. Here are a few of those resources, most of which also have links to additional resources:

* [CHAOSS Practitioner Guide: Getting Started with Contributor Sustainability](https://chaoss.community/practitioner-guide-contributor-sustainability/)
* [CHAOSS Practitioner Guide: Getting Started with Organizational Participation](https://chaoss.community/practitioner-guide-organizational-participation/)
* [CNCF Contributor Growth Framework](https://contribute.cncf.io/maintainers/community/contributor-growth-framework/)
* [Contributor Growth Strategies for OSS Projects](https://sched.co/1OGk2) presentation at OSSummit EU in Bilbao in September 2023 ([video](https://www.youtube.com/watch?v=xRCFHhL1IgE))
* [Navigating Open Source Risk: A Strategic Approach](https://sched.co/ltD8) presentation at the Open Source Strategy Forum in London in October 2021 ([video](https://www.youtube.com/watch?v=4ifeQYuZ8gc))

Update: You might also be interested in reading this follow up post: [Companies Can Mitigate Sustainability Risks](https://fastwonderblog.com/2025/06/18/companies-can-mitigate-sustainability-risks/)

