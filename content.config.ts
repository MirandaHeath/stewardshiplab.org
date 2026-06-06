import { defineContentConfig, defineCollection } from '@nuxt/content';
import { z } from 'zod';
import { PEOPLE, POST_CATEGORIES, MEDIA_CATEGORIES } from './app/data/content.ts';

const postSchema = z.object({
  category: z.enum(Object.keys(POST_CATEGORIES)),
  authors: z.array(z.enum(Object.keys(PEOPLE))).optional(),
  date: z.date().optional(),
  location: z.string().optional(),
  metaImage: z.string().optional(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  fullWidthLayout: z.boolean().optional(),
  featured: z.boolean().optional(),
  featuredOnHomepage: z.boolean().optional(),
  canonicalWebsiteName: z.string().optional(),
  canonicalUrl: z.string().optional(),
  venue: z.string().optional(),
  venueUrl: z.string().optional(),
});

const mediaSchema = z.object({
  category: z.enum(Object.keys(MEDIA_CATEGORIES)),
  guests: z.array(z.enum(Object.keys(PEOPLE))).optional(),
  hosts: z.array(z.enum(Object.keys(PEOPLE))).optional(),
  date: z.date().optional(),
  image: z.string().optional(),
  featured: z.boolean().optional(),
  url: z.string().optional(),
  venue: z.string().optional(),
});

export default defineContentConfig({
  collections: {
    tools: defineCollection({
      type: 'page',
      source: 'tools/*.md',
      schema: postSchema,
    }),
    reports: defineCollection({
      type: 'page',
      source: 'reports/*.md',
      schema: postSchema,
    }),
    ideas: defineCollection({
      type: 'page',
      source: 'ideas/*.md',
      schema: postSchema,
    }),
    media: defineCollection({
      type: 'page',
      source: 'media/*.md',
      schema: mediaSchema,
    }),
  },
});
