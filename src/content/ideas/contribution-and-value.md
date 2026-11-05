---
authors: ['dawn']
category: 'software-metrics'
title: "OSPO Contribution Strategies to Demonstrate Value"
date: "2026-02-15"
description: "Ways that organizations can demonstrate the value of their open source contributions"
canonicalWebsiteName: "fastwonderblog.com"
canonicalUrl: "https://fastwonderblog.com/2026/02/15/ospo-contribution-strategies-to-demonstrate-value/"
---

Many OSPOs struggle to [demonstrate the value](https://fastwonderblog.com/2025/07/22/demonstrating-organizational-value/) of their organization's contributions to open source projects. A good way to demonstrate the value of these open source contributions is by showing how the work helps your organization achieve its goals, and this is an approach that I've used when working in several different companies.  

Every leadership team has to look across the entire organization and prioritize the efforts that have the biggest overall impact on the organization as a whole. This means that if you want your leadership to continue to staff and fund your OSPO or other open source teams, you need to make the case for why your work is as important or more important than other efforts that are also competing for limited resources. Having a clear open source strategy where you can tell the story of how the open source work helps achieve the organization's goals is a great way for leadership to understand the importance of the work so that you can continue to do it. 

Clearly articulating the importance of your contributions to upstream projects should be an important piece of that open source strategy. This often has 2 components: 1) identifying which projects are most strategic / critical for your organization and 2) creating contribution strategies for individual projects.

**Identifying Strategic Projects**

When deciding where to focus your organization's upstream contributions, I've seen a lot of people struggle with the difference between open source projects that are frequently used within an organization vs. the projects that are truly strategic. The way I like to think about this is by asking whether I could easily drop in a replacement. You might use a tiny library in a bunch of your products to make some task quicker and easier, but if you could easily replace it with something else, like another similar library or you could re-write it yourself pretty easily, then it's not likely to be a strategic project that is critical to your organization. Something like Kubernetes on the other hand is an incredibly complex piece of software that could not be easily replaced, and if you're relying on it to be able to deliver products and services to your customers, then this would probably be a strategic project for you. You're unlikely to get much value out of contributing to that tiny library, but you might get value out of contributing to those more strategic projects. 

When I was at VMware, I was responsible for maintaining our list of strategic projects. This came about because executives would ask which open source projects were most important to us, and before creating the strategic projects list, all we had to give them was the list of packages that appeared most frequently in our products, but this wasn't what leadership wanted. They wanted to know which open source projects were most critical or most strategic for us. We started creating a list of strategic projects by talking to the product leads in our business units to ask them what open source projects they relied on and couldn't deliver products to our customers without those projects. It provided a window for executives into what projects were most important and most strategic while also helping our business units coordinate with each other when they were engaging in the same projects. 

**Contributions Strategies for Individual Projects**

This strategic projects list also provided a start toward justifying having people contributing to those projects, but it can help to dive into the details of some of these projects to look at project health, feature maturity, and other aspects of each project to decide where you might need to contribute. For example, when I worked at Pivotal, I was responsible for our open source strategy, and Kubernetes was a big part of that strategy. This was before the VMware acquisition of Pivotal, and we were in the process of making the shift from using Cloud Foundry as the base for our main products to using Kubernetes. This was a huge shift for the company. Pivotal was one of the creators of Cloud Foundry and we had a ton of influence in that project, while we were just getting started with Kubernetes. I spent quite a bit of time talking to the people in leadership who were driving this shift along with the people responsible for driving the individual product strategies with a focus on where we wanted to be in a few years. I also started engaging directly within the Kubernetes community to explore the different aspects of Kubernetes while talking to our engineers about which parts of Kubernetes were missing features or lacking maturity so that we could match what we were going to need in the next few years with the areas within Kubernetes that would need work if we wanted to base our products on top of it.

I used all of this information to create a written strategy that clearly tied our open source Kubernetes work back to our overall company mission and goals, and I was able to get people allocated to upstream Kubernetes by showing how our long term product strategies relied on specific areas within the Kubernetes code base, and outlining where we needed to make contributions to support those products. We then continued to track those contributions so that we could show the value that we were providing back to the company. 

This was my approach when I was at Pivotal and later VMware, but every company and every open source project is unique, so this requires customizing your approach so it works for your organization. The CHAOSS project has an entire Practitioner Guide on the topic of [Demonstrating Organizational Value](https://chaoss.community/practitioner-guide-demonstrating-org-value/) with some additional ideas for how to demonstrate and frame the business value of your open source work.

## Additional Resources:

* [Demonstrating Organizational Value](https://fastwonderblog.com/2025/07/22/demonstrating-organizational-value/) and[ More about Demonstrating Organizational Value](https://fastwonderblog.com/2025/10/07/more-about-demonstrating-organizational-value/)
* [A Strategic Approach for OSPOs](https://fastwonderblog.com/2026/01/10/a-strategic-approach-for-ospos/)
* [Using CHAOSS Practitioner Guides to Improve your OSS Projects](https://fastwonderblog.com/2025/05/08/using-chaoss-practitioner-guides-to-improve-your-oss-projects/)
* [From Data to Action: Building Healthy and Sustainable Open Source Projects](https://fastwonderblog.com/2025/05/28/from-data-to-action-building-healthy-and-sustainable-open-source-projects/)
* [Contributor Sustainability Impacts Risk and Adoption of OSS Projects](https://fastwonderblog.com/2025/06/15/contributor-sustainability-impacts-risk-and-adoption-of-oss-projects/)
