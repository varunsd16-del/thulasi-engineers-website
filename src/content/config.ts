import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Thulasi Engineers & Contractors'),
    image: z.string(),
    category: z.enum([
      'residential-construction',
      'commercial-construction',
      'industrial-construction',
      'renovation-remodeling',
      'architecture-planning',
      'structural-engineering',
      'construction-cost-guides',
      'interior-design',
      'building-approvals',
      'materials-quality',
      'area-guides',
      'smart-homes',
      'villa-construction',
      'turnkey-construction',
      'civil-engineering-insights',
      'pmc'
    ]),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    aiAnswer: z.string().optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional()
  })
});

export const collections = { blog };
