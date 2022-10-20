import { Cidade } from './../cidade/entities/cidade.entity';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EstadosService } from './estado.service';
import { EstadosController } from './estado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estado } from 'src/core/estado/entities/estado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estado]), Cidade],
  controllers: [EstadosController],
  providers: [EstadosService],
})
export class EstadosModule {}
