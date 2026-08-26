import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const blogSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).default([]),
  date: z.coerce.date(),
  featured: z.boolean().default(false),
})

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: '*/blog/**/*.md',
      schema: blogSchema,
    }),
    pages: defineCollection({
      type: 'page',
      source: '*/*.md',
      schema: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
      }),
    }),
  },
})
