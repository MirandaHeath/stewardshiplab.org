import { defineContentConfig, defineCollection } from '@nuxt/content';
import { z } from 'zod';

const commonSchema = z.object({
  author: z.string().optional(),
  authorImage: z.string().optional(),
  editor: z.string().optional(),
  editorImage: z.string().optional(),
  date: z.date().optional(),
  location: z.string().optional(),
  tags: z.array(z.string()),
  metaImage: z.string().optional(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  fullWidth: z.boolean().optional(),
  canonicalWebsiteName: z.string().optional(),
  canonicalUrl: z.string().optional(),
  venue: z.string().optional(),
  venueUrl: z.string().optional(),
});

export default defineContentConfig({
  collections: {
    tools: defineCollection({
      type: 'page',
      source: 'tools/*.md',
      schema: commonSchema,
    }),
    reports: defineCollection({
      type: 'page',
      source: 'reports/*.md',
      schema: commonSchema,
    }),
    ideas: defineCollection({
      type: 'page',
      source: 'ideas/*.md',
      schema: commonSchema,
    }),
  },
});
