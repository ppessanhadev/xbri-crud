import { z } from 'zod';
import { CreateProductSchema } from './create-product.schema';

export const UpdateProductSchema = z.object({
  id: z.union([z.string(), z.number()]),
  ...CreateProductSchema.shape
})

export type UpdateProduct = z.infer<typeof UpdateProductSchema>;
