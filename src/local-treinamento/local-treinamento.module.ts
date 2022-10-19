import { LocalTreinamento } from './entities/local-treinamento.entity';
import { Module } from '@nestjs/common';
import { LocalTreinamentoService } from './local-treinamento.service';
import { LocalTreinamentoController } from './local-treinamento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([LocalTreinamento]),
    LocalTreinamentoModule,
    LocalTreinamento,
  ],
  controllers: [LocalTreinamentoController],
  providers: [LocalTreinamentoService],
  exports: [TypeOrmModule],
})
export class LocalTreinamentoModule {}
