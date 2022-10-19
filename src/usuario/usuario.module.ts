import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { EnderecosModule } from 'src/endereco/endereco.module';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), Endereco, EnderecosModule],
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [TypeOrmModule],
})
export class UsuarioModule {}
