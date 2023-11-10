import { z } from "zod";
import { Cart } from "../carts/resources/cart";

export const schemas = {
  buy: z.object({
    cart: z.instanceof(Cart),
    payment: z.union([
      z.object({
        method: z.literal("cash"),
      }),
      z.object({
        method: z.literal("card"),
        number: z.string().regex(/^4[0-9]{12}(?:[0-9]{3})?$/),
        code: z.string().min(4),
        installments: z.number().min(1),
      }),
    ]),
  }),

  cancel: z.object({
    id: z.string().uuid(),
  }),
};
