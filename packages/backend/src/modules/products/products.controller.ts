import { Body, Inject, Query } from '@nestjs/common';
import { DefineController, UseRoute } from '@/common/decorators';
import { ProductsService } from '@/modules/products/products.service';
import { CreateProductRequest } from '@/modules/products/schemas/create-product.schema';

@DefineController('products')
export class ProductController {
  constructor(
    @Inject(ProductsService)
    private readonly productService: ProductsService,
  ) {}

  @UseRoute({
    method: 'POST',
    summary: 'Creates an new product on database',
    code: 201,
  })
  public async create(@Body() body: CreateProductRequest) {
    return this.productService.create(body);
  }

  @UseRoute({
    method: 'DELETE',
    summary: 'Deletes specific product',
    queries: [{ name: 'id', example: 1 }],
    code: 204,
  })
  public async delete(@Query('id') id: string) {
    return this.productService.delete(id);
  }
}
