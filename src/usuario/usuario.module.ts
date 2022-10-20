import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnderecosModule } from 'src/core/endereco/endereco.module';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), EnderecosModule],
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [TypeOrmModule],
})
export class UsuarioModule {}
