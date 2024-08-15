import { Module } from '@nestjs/common';
import { DatabaseModule } from '@/common/database/database.module';
import { ProductsService } from '@/modules/products/products.service';
import { ProductController } from '@/modules/products/products.controller';

@Module({
  imports: [DatabaseModule],
  providers: [ProductsService],
  controllers: [ProductController],
})
export class ProductsModule {}
