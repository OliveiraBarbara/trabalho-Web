import { Exercicio } from './../exercicio/entities/exercicio.entity';
import { Preferencia } from 'src/preferencia/entities/preferencia.entity';
import { PreferenciaExercicio } from 'src/preferencia-exercicio/entities/preferencia-exercicio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PreferenciaExercicioService } from './preferencia-exercicio.service';
import { PreferenciaExercicioController } from './preferencia-exercicio.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([PreferenciaExercicio]),
    Preferencia,
    Exercicio,
  ],
  controllers: [PreferenciaExercicioController],
  providers: [PreferenciaExercicioService],
  exports: [TypeOrmModule],
})
export class PreferenciaExercicioModule {}
