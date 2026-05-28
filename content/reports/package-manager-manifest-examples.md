---
authors: ['andrew']
category: 'package-management'
title: "Package Manager Manifest Examples"
date: 2025-11-30
description: "Over 145 manifest and lockfile examples from 34 package ecosystems, organized by PURL type."
canonicalWebsiteName: "GitHub"
canonicalUrl: "https://github.com/ecosyste-ms/package-manager-manifest-examples"
---

Over 145 manifest and lockfile examples from 34 package ecosystems, organized by PURL type.

Manifests include `package.json`, `requirements.txt`, `pyproject.toml`, `Cargo.toml`, `Gemfile`, `composer.json`, `go.mod`, `pom.xml`, and more. Lockfiles include `package-lock.json`, `yarn.lock`, `poetry.lock`, `Cargo.lock`, `Gemfile.lock`, `composer.lock`, `go.sum`, and others.

Initially extracted from [Bibliothecary](https://github.com/ecosyste-ms/bibliothecary), with additional examples from tools like Trivy, Syft, OSV-Scanner, and Grype. Each example documents its filename, type (manifest/lockfile), source project, and what features it demonstrates.

<div class="page-items">
    <a class="button button--arrow" href="https://github.com/ecosyste-ms/package-manager-manifest-examples" target="_blank">
        Go to data
    </a>
</div>

## Background

This work was originally posted on [blog.ecosyste.ms](https://blog.ecosyste.ms/2025/11/17/documenting-package-manager-data.html) on November 17, 2025.

Package managers are the quiet workhorses of computing. They make installing software on a machine trivial, but they have their differences, and as recent events have shown, those differences can lead to vulnerabilities and provide opportunities for attackers to disrupt public and private services alike.

ecosyste.ms is in something of a unique position: having aggregated and normalized package data from over 70 sources we know something about how package managers work, and how they differ from one another.

Working alongside the [CHAOSS Package Metadata Working Group](https://github.com/chaoss/wg-package-metadata) and [Alpha-Omega](https://alpha-omega.dev) we've documented the similarities and differences across package registries and clients, publishing multiple repositories of information about how package managers work, including the data in this post. In doing so we hope to identify common problems and work toward better practices.

This repository is released under CC0 1.0 Universal and accepts contributions if you have corrections or additions.
