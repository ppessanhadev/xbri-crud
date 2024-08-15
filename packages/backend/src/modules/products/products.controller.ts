import { Body, Inject, Param } from '@nestjs/common';
import { DefineController, UseRoute } from '@/common/decorators';
import { ProductsService } from '@/modules/products/products.service';
import { CreateProductRequest, ListProductResponse, UpdateProductRequest } from '@/modules/products/schemas';

@DefineController('products')
export class ProductController {
  constructor(
    @Inject(ProductsService)
    private readonly productService: ProductsService,
  ) {}

  @UseRoute({
    summary: 'Lists all products on database',
    response: { type: ListProductResponse },
  })
  public async list() {
    return this.productService.list();
  }

  @UseRoute({
    method: 'POST',
    summary: 'Creates an new product on database',
    code: 201,
  })
  public async create(@Body() body: CreateProductRequest) {
    return this.productService.create(body);
  }

  @UseRoute({
    method: 'UPDATE',
    summary: 'Updates field of an existent product',
    response: { type: UpdateProductRequest },
  })
  public async update(@Body() body: UpdateProductRequest) {
    return this.productService.update(body);
  }

  @UseRoute({
    method: 'DELETE',
    summary: 'Deletes specific product',
    route: '/:id',
    params: [{ name: 'id', example: '1' }],
    code: 204,
  })
  public async delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
