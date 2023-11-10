import { z } from "zod";

export const schemas = {
  create: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    discountPercentage: z.number(),
    rating: z.number(),
    stock: z.number(),
    brand: z.string(),
    category: z.string(),
    thumbnail: z.string(),
    images: z.string().array(),
  }),

  update: z
    .object({
      title: z.string(),
      description: z.string(),
      price: z.number(),
      discountPercentage: z.number(),
      rating: z.number(),
      stock: z.number(),
      brand: z.string(),
      category: z.string(),
      thumbnail: z.string(),
      images: z.string().array(),
    })
    .partial(),
};
