import { Usuario } from 'src/usuario/entities/usuario.entity';
import { forwardRef, Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnderecoModule } from 'src/endereco/endereco.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    forwardRef(() => EnderecoModule),
  ],
  providers: [UsuarioService],
  exports: [TypeOrmModule, UsuarioService],
})
export class UsuarioModule {}
