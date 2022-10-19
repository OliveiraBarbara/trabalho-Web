import { UsuarioEndereco } from './entities/usuario-endereco.entity';
import { Module } from '@nestjs/common';
import { UsuarioEnderecoService } from './usuario-endereco.service';
import { UsuarioEnderecoController } from './usuario-endereco.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsuarioEndereco]),
    UsuarioEndereco,
    UsuarioEnderecoModule,
  ],
  controllers: [UsuarioEnderecoController],
  providers: [UsuarioEnderecoService],
  exports: [TypeOrmModule],
})
export class UsuarioEnderecoModule {}
