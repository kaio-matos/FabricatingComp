import { z } from "zod";

export const schemas = {
  add: z.object({
    userId: z.number(),
    products: z
      .object({
        id: z.number(),
        quantity: z.number(),
      })
      .array(),
  }),

  update: z.object({
    merge: z.boolean().optional(),
    products: z
      .object({
        id: z.number(),
        quantity: z.number(),
      })
      .array(),
  }),
};
