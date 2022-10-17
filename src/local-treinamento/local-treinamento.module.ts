import { Module } from '@nestjs/common';
import { LocalTreinamentoService } from './local-treinamento.service';
import { LocalTreinamentoController } from './local-treinamento.controller';

@Module({
  controllers: [LocalTreinamentoController],
  providers: [LocalTreinamentoService]
})
export class LocalTreinamentoModule {}
