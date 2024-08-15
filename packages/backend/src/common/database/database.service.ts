import { PrismaClient } from '@prisma/client';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { seed } from '@/common/database/config/seed';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({ log: ['query'] });
  }

  public async onModuleInit() {
    await this.$connect();
    const quantity = await this.product.count();
    if (!quantity) {
      await Promise.all([this.product.create({ data: seed[0] }), this.product.create({ data: seed[1] })]);
    }
  }

  public async beforeApplicationShutdown() {
    await this.$disconnect();
  }
}
