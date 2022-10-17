import { Module } from '@nestjs/common';
import { PreferenciaExercicioService } from './preferencia-exercicio.service';
import { PreferenciaExercicioController } from './preferencia-exercicio.controller';

@Module({
  controllers: [PreferenciaExercicioController],
  providers: [PreferenciaExercicioService]
})
export class PreferenciaExercicioModule {}
