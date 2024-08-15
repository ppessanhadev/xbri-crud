import { z } from 'zod';

const required_error = 'Campo obrigatório';

export const CreateProductSchema = z.object({
  name: z.string({ message: required_error }).min(1, required_error),
  quantity: z.preprocess(
    (v) => Number(v),
    z
      .number({ required_error, invalid_type_error: 'Campo só aceita valor númerico.' })
      .positive({ message: 'Valor precisa ser maior que 0' }),
  ),
  price: z.preprocess(
    (v) => Number(v),
    z
      .number({ required_error, invalid_type_error: 'Campo só aceita valor númerico.' })
      .positive({ message: 'Valor precisa ser maior que 0' }),
  ),
  description: z.string().optional(),
  image: z.string({ message: 'Campo precisa ser uma url válida.' }).optional(),
});

export type CreateProduct = z.infer<typeof CreateProductSchema>;
