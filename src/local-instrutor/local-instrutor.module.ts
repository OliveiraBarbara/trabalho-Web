import { Module } from '@nestjs/common';
import { LocalInstrutorService } from './local-instrutor.service';
import { LocalInstrutorController } from './local-instrutor.controller';

@Module({
  controllers: [LocalInstrutorController],
  providers: [LocalInstrutorService]
})
export class LocalInstrutorModule {}
