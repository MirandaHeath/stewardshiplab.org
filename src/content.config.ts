import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { PEOPLE, POST_CATEGORIES, MEDIA_CATEGORIES } from './data/content.ts';

const postSchema = z.object({
  title: z.string(),
  date: z.iso.date(),
  description: z.string().optional(),
  category: z.enum(Object.keys(POST_CATEGORIES)),
  authors: z.array(z.enum(Object.keys(PEOPLE))).optional(),
  location: z.string().optional(),
  ogImageUrl: z.string().optional(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  fullWidthLayout: z.boolean().optional(),
  featured: z.boolean().optional(),
  featuredOnHomepage: z.boolean().optional(),
  canonicalWebsiteName: z.string().optional(),
  canonicalUrl: z.string().optional(),
  venue: z.string().optional(),
  venueUrl: z.string().optional(),
  hidden: z.boolean().optional(),
  embargoReleaseTime: z.iso.date().optional(),
  ctaText: z.string().optional(),
  ctaAction: z.string().optional(),
  ctaLink: z.string().optional(),
  llmDisclaimer: z.boolean().optional(),
  disclaimers: z.array(z.strictObject({ title: z.string(), text: z.string() })).optional(),
});

const mediaSchema = z.object({
  title: z.string(),
  date: z.iso.date(),
  description: z.string().optional(),
  guests: z.array(z.enum(Object.keys(PEOPLE))).optional(),
  hosts: z.array(z.enum(Object.keys(PEOPLE))).optional(),
  image: z.string().optional(),
  featured: z.boolean().optional(),
  url: z.string().optional(),
  venue: z.string().optional(),
});

const pageSchema = z.object({
  title: z.string(),
});

export const collections = {
  reports: defineCollection({
    loader: glob({ base: './src/content/reports', pattern: '**/*.{md,mdx}' }),
    schema: postSchema,
  }),
  ideas: defineCollection({
    loader: glob({ base: './src/content/ideas', pattern: '**/*.{md,mdx}' }),
    schema: postSchema,
  }),
  news: defineCollection({
    loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
    schema: postSchema,
  }),
  media: defineCollection({
    loader: glob({ base: './src/content/media', pattern: '**/*.{md,mdx}' }),
    schema: mediaSchema,
  }),
  pages: defineCollection({
    loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
    schema: pageSchema,
  }),
};
