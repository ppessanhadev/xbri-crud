import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { DatabaseService } from '@/common/database/database.service';
import { CreateProductBody } from '@/modules/products/schemas/create-product.schema';

@Injectable()
export class ProductsService {
  constructor(private readonly db: DatabaseService) {}

  public async create(data: CreateProductBody) {
    await this.db.product.create({ data });
  }

  public async delete(id: number | string) {
    const identifier = Number(id);

    if (!identifier) {
      throw new BadRequestException('ID precisa ser um número válido.');
    }

    const product = await this.db.product.findFirst({ where: { id: identifier } });

    if (!product) {
      throw new BadRequestException('Produto não encontrado.');
    }

    await this.db.product.delete({ where: { id: identifier } });
  }
}
