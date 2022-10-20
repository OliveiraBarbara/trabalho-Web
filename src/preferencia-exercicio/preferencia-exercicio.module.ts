import { Module } from '@nestjs/common';
import { PreferenciaExercicioService } from './preferencia-exercicio.service';
import { PreferenciaExercicioController } from './preferencia-exercicio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExercicioModule } from 'src/exercicio/exercicio.module';

import { PreferenciaExercicio } from './entities/preferencia-exercicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PreferenciaExercicio]), ExercicioModule],
  controllers: [PreferenciaExercicioController],
  providers: [PreferenciaExercicioService],
  exports: [TypeOrmModule],
})
export class PreferenciaExercicioModule {}
