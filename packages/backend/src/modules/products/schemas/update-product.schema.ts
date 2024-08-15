import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const required_error = 'Campo obrigatório';

const UpdateProductSchema = z.object({
  id: z.preprocess((v) => Number(v), z.number({ required_error }).int()),
  name: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  quantity: z.preprocess((v) => Number(v), z.number({ required_error }).int()).optional(),
  price: z.preprocess((v) => Number(v), z.number({ required_error })).optional(),
});
export type UpdateProductBody = z.infer<typeof UpdateProductSchema>;

export class UpdateProductRequest extends createZodDto(UpdateProductSchema) {}
