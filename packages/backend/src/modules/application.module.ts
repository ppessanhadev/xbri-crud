import { Module } from '@nestjs/common';
import { ProductController } from '@/modules/products/product.controller';

@Module({
  controllers: [ProductController],
})
export class ApplicationModule {}
