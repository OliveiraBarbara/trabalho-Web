import { EstadosModule } from './../estado/estado.module';
import { Estado } from 'src/core/estado/entities/estado.entity';
import { Cidade } from './../cidade/entities/cidade.entity';
import { CidadesModule } from './../cidade/cidade.module';
import { Endereco } from './entities/endereco.entity';
import { Module } from '@nestjs/common';
import { EnderecosService } from './endereco.service';
import { EnderecosController } from './endereco.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Endereco, Cidade, Estado]),
    CidadesModule,
    EstadosModule,
  ],
  controllers: [EnderecosController],
  providers: [EnderecosService],
  exports: [TypeOrmModule],
})
export class EnderecosModule {}
