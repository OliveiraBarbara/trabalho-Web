import { Module } from '@nestjs/common';
import { PreferenciaExercicioService } from './preferencia-exercicio.service';
import { PreferenciaExercicioController } from './preferencia-exercicio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercicio } from 'src/exercicio/entities/exercicio.entity';
import { ExercicioModule } from 'src/exercicio/exercicio.module';
import { Preferencia } from 'src/preferencia/entities/preferencia.entity';
import { PreferenciaExercicio } from './entities/preferencia-exercicio.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PreferenciaExercicio]),
    Preferencia,
    PreferenciaExercicioModule,
    Exercicio,
    ExercicioModule,
  ],

  controllers: [PreferenciaExercicioController],
  providers: [PreferenciaExercicioService],
  exports: [TypeOrmModule],
})
export class PreferenciaExercicioModule {}
