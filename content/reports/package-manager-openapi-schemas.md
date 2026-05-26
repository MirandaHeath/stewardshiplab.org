---
author: "Andrew Nesbitt"
authorImage: "/images/team/andrew.webp"
title: "Package Manager OpenAPI Schemas"
date: 2025-11-30
description: "OpenAPI 3.0 specifications for 25+ package registry APIs including npm, PyPI, Maven, RubyGems, Cargo, Docker, and Terraform."
canonicalWebsiteName: "GitHub"
canonicalUrl: "https://github.com/ecosyste-ms/package-manager-openapi-schemas"
---

OpenAPI 3.0 specifications for 25+ package registry APIs including npm, PyPI, Maven, RubyGems, Cargo, Docker, and Terraform.

Most schemas are generated using the [packages.ecosyste.ms](https://github.com/ecosyste-ms/packages) mapping code. Two registries, crates.io and open-vsx.org, have official OpenAPI specs. Hopefully more registries will publish official specs in the future.

You can use these specs to generate API clients, create documentation with Swagger UI, or build mock servers for testing.

<div class="page-items">
    <a class="button button--arrow" href="https://github.com/ecosyste-ms/package-manager-openapi-schemas" target="_blank">
        Go to data
    </a>
</div>

## Background

This work was originally posted on [blog.ecosyste.ms](https://blog.ecosyste.ms/2025/11/17/documenting-package-manager-data.html) on November 17, 2025.

Package managers are the quiet workhorses of computing. They make installing software on a machine trivial, but they have their differences, and as recent events have shown, those differences can lead to vulnerabilities and provide opportunities for attackers to disrupt public and private services alike.

ecosyste.ms is in something of a unique position: having aggregated and normalized package data from over 70 sources we know something about how package managers work, and how they differ from one another.

Working alongside the [CHAOSS Package Metadata Working Group](https://github.com/chaoss/wg-package-metadata) and [Alpha-Omega](https://alpha-omega.dev) we've documented the similarities and differences across package registries and clients, publishing multiple repositories of information about how package managers work, including the data in this post. In doing so we hope to identify common problems and work toward better practices.

This repository is released under CC0 1.0 Universal and accepts contributions if you have corrections or additions.
