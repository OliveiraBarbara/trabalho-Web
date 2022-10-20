import { Preferencia } from './entities/preferencia.entity';
import { Module } from '@nestjs/common';
import { PreferenciaService } from './preferencia.service';
import { PreferenciaController } from './preferencia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Preferencia])],
  controllers: [PreferenciaController],
  providers: [PreferenciaService],
})
export class PreferenciaModule {}
