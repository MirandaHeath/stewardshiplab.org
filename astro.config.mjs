// @ts-check

import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
    site: 'https://stewardshiplab.org',
    integrations: [mdx(), vue()],
    compressHTML: true,
});