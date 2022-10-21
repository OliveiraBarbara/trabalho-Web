import { InstrutorModule } from './../instrutor/instrutor.module';
import { EnderecoModule } from 'src/endereco/endereco.module';
import { LocalTreinamento } from './entities/local-treinamento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { LocalTreinamentoService } from './local-treinamento.service';
import { LocalTreinamentoController } from './local-treinamento.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LocalTreinamento]), EnderecoModule],
  controllers: [LocalTreinamentoController],
  providers: [LocalTreinamentoService],
  exports: [TypeOrmModule, LocalTreinamentoService],
})
export class LocalTreinamentoModule {}
