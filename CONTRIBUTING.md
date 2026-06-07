# Contributing

Here's some information on contributing to this repo.

## Authorship

Remember to include authorship information for each file, either in `REUSE.toml`, or in the file's header, or in a
`.license` file colocated with the file.

Verify that authorship information is complete by running:

```
$ reuse lint
```

## CSS Style Guide

Use `rem` for dimensions that should shrink/grow when the user changes font size. Avoid `rem` for borders, padding and
vertical spacing.

Use `px` for dimensions that should not shrink/grow when the user changes font size. Use `px` for borders, padding and
vertical spacing.

([Read more][rem] on `rem` vs `px`.)

Always use `5px` increments for vertical `px` dimensions, including `line-height`, to create vertical rhythm.

([Read more][govuk-type-scale] on vertical rhythm.)

Use the provided `--font-size-foo` and `--line-height-foo` variables instead of manually choosing values. When setting a
`--font-size-foo`, always use the appropriate `--line-height-foo` together with it. Exceptions are allowed for unusual
elements.

[govuk-type-scale]: https://design-system.service.gov.uk/styles/type-scale/
[rem]: https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/#strategic-unit-deployment-6

## Adding New Reports, Tools, and Ideas Posts

Create a new `.md` file in [`content/`](./content/) or its subdirectories, and add the appropriate metadata to the front
matter at the top of the file. Here's an example:

```
---
authors: ['vlad']
category: 'funding-tech-infrastructure'
title: "Not Paying Open Source Maintainers Is Expensive"
description: "Not paying for the Open Source software you use can seem like a great deal — but it can end up costing you money."
date: 2025-06-18
canonicalWebsiteName: 'the Open Source Pledge blog'
canonicalUrl: 'https://opensourcepledge.com/blog/not-paying-open-source-maintainers-is-expensive/'
---
```

To view the front matter schema, check [`content.config.ts`](/content.config.ts).

To view existing categories or to create a new category, use [`app/data/content.ts`](./app/data/content.ts).

To properly credit multiple authors:

* Add the authors to `app/data/content.ts`
* Add an avatar to `public/images/people/personName.webp` using, for example, `magick personName.jpg -resize '>400x' personName.webp`
* Add the author IDs to the `authors` field in the `.md` file's front matter
