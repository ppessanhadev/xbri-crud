import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@/common/database/database.service';
import { CreateProductBody } from '@/modules/products/schemas/create-product.schema';

@Injectable()
export class ProductsService {
  constructor(private readonly db: DatabaseService) {}

  public async create(data: CreateProductBody) {
    await this.db.product.create({ data });
  }
}
