import { EnderecoModule } from 'src/endereco/endereco.module';
import { LocalTreinamento } from './entities/local-treinamento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';
import { LocalTreinamentoService } from './local-treinamento.service';
import { LocalTreinamentoController } from './local-treinamento.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([LocalTreinamento]),
    forwardRef(() => EnderecoModule),
  ],
  controllers: [LocalTreinamentoController],
  providers: [LocalTreinamentoService],
  exports: [TypeOrmModule, LocalTreinamentoService],
})
export class LocalTreinamentoModule {}
