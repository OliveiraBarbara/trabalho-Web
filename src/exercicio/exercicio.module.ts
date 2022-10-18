import { Exercicio } from './entities/exercicio.entity';
import { Module } from '@nestjs/common';
import { ExercicioService } from './exercicio.service';
import { ExercicioController } from './exercicio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Exercicio]), ExercicioModule],
  controllers: [ExercicioController],
  providers: [ExercicioService]
})
export class ExercicioModule {}
