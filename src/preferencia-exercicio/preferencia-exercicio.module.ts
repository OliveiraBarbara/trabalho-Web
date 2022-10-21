import { PreferenciaExercicio } from 'src/preferencia-exercicio/entities/preferencia-exercicio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PreferenciaExercicioService } from './preferencia-exercicio.service';
import { PreferenciaExercicioController } from './preferencia-exercicio.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PreferenciaExercicio])],
  controllers: [PreferenciaExercicioController],
  providers: [PreferenciaExercicioService],
  exports: [TypeOrmModule],
})
export class PreferenciaExercicioModule {}
