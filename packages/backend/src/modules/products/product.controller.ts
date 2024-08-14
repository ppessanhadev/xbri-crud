import { DefineController, UseRoute } from '@/common/decorators';

@DefineController('air-conditioner')
export class ProductController {
  @UseRoute({ summary: 'List all products avaliable' })
  public async list() {
    return [{ id: 1, name: 'produto', price: 25.5 }];
  }
}
