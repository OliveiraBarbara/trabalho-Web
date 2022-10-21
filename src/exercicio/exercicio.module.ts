import { Exercicio } from './entities/exercicio.entity';
import { Module } from '@nestjs/common';
import { ExercicioService } from './exercicio.service';
import { ExercicioController } from './exercicio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Exercicio])],
  controllers: [ExercicioController],
  providers: [ExercicioService],
  exports: [TypeOrmModule, ExercicioService],
})
export class ExercicioModule {}
