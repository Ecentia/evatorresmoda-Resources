import { defineCollection, reference, z } from 'astro:content';

const categories = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string().optional(), // Campo nuevo para el subtítulo
    coverImage: z.string(),
  }),
});

const products = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    price: z.string().optional(),
    image: z.string(),
    description: z.string().optional(),
    category: reference('categories'),
    sizes: z.array(z.string()).optional(),
    isFeatured: z.boolean().optional(),
  }),
});

export const collections = {
  categories,
  products,
};