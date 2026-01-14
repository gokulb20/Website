import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['competence', 'composure', 'character']),
    excerpt: z.string(),
    image: z.string(),
    readTime: z.string(),
  }),
});

export const collections = { blog };
