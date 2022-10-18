import { Module } from '@nestjs/common';
import { EnderecosService } from './endereco.service';
import { EnderecosController } from './endereco.controller';

@Module({
  imports: [],
  controllers: [EnderecosController],
  providers: [EnderecosService]
})
export class EnderecosModule {}
