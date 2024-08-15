import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const required_error = 'Campo obrigatório';

const CreateProductSchema = z.object({
  name: z.string({ required_error }),
  description: z.string().optional(),
  image: z.string().optional(),
  quantity: z.preprocess((v) => Number(v), z.number({ required_error }).int()),
  price: z.preprocess((v) => Number(v), z.number({ required_error })),
});
export type CreateProductBody = z.infer<typeof CreateProductSchema>;

export class CreateProductRequest extends createZodDto(CreateProductSchema) {}
