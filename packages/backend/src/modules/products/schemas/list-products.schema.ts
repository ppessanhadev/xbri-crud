import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const ListProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().optional(),
  image: z.string().url().optional(),
  quantity: z.number(),
  price: z.number(),
});
export type ListProductBody = z.infer<typeof ListProductSchema>;

export class ListProductResponse extends createZodDto(ListProductSchema) {}
