import { PreferenciaModule } from './../preferencia/preferencia.module';
import { Preferencia } from './../preferencia/entities/preferencia.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { UsuarioPreferencia } from './entities/usuario-preferencia.entity';
import { Module } from '@nestjs/common';
import { UsuarioPreferenciaService } from './usuario-preferencia.service';
import { UsuarioPreferenciaController } from './usuario-preferencia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsuarioPreferencia]),
    Usuario,
    Preferencia,
    PreferenciaModule,
  ],
  controllers: [UsuarioPreferenciaController],
  providers: [UsuarioPreferenciaService],
  exports: [TypeOrmModule],
})
export class UsuarioPreferenciaModule {}
