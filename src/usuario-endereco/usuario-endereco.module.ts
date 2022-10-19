import { Module } from '@nestjs/common';
import { UsuarioEnderecoService } from './usuario-endereco.service';
import { UsuarioEnderecoController } from './usuario-endereco.controller';

@Module({
  controllers: [UsuarioEnderecoController],
  providers: [UsuarioEnderecoService]
})
export class UsuarioEnderecoModule {}
