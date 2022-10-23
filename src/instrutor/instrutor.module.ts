import { LocalTreinamentoModule } from './../local-treinamento/local-treinamento.module';
import { ExercicioModule } from './../exercicio/exercicio.module';
import { EnderecoModule } from 'src/endereco/endereco.module';
import { Instrutor } from './entities/instrutor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';
import { InstrutorService } from './instrutor.service';
import { InstrutorController } from './instrutor.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Instrutor]),
    forwardRef(() => EnderecoModule),
    forwardRef(() => ExercicioModule),
    forwardRef(() => LocalTreinamentoModule),
  ],
  controllers: [InstrutorController],
  providers: [InstrutorService],
  exports: [TypeOrmModule],
})
export class InstrutorModule {}
