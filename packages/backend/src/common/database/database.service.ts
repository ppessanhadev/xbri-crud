import { PrismaClient } from '@prisma/client';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({ log: ['query'] });
  }

  public async onModuleInit() {
    await this.$connect();
  }

  public async beforeApplicationShutdown() {
    await this.$disconnect();
  }
}
