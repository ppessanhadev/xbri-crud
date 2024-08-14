import { Module } from '@nestjs/common';
import { DatabaseService } from '@/common/database/database.service';

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
