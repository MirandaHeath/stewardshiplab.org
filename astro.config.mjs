// @ts-check

import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
    site: 'https://stewardshiplab.org',
    integrations: [mdx(), vue()],
    compressHTML: true,
    redirects: {
        '/ideas/a-research-lab-for-open-source': {
            status: 301,
            destination: '/news/a-research-lab-for-open-source',
        },
        '/ideas/cfp-package-management-devroom-at-fosdem-27': {
            status: 301,
            destination: '/news/cfp-package-management-devroom-at-fosdem-27',
        },
        '/proposal.bindep.pdf': {
            status: 301,
            destination: 'https://static.stewardshiplab.org/proposal.bindep.pdf',
        },
    },
});
