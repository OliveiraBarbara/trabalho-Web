import { InstrutorEndereco } from './entities/instrutor-endereco.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { InstrutorEnderecoService } from './instrutor-endereco.service';
import { InstrutorEnderecoController } from './instrutor-endereco.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InstrutorEndereco]), InstrutorEndereco],
  controllers: [InstrutorEnderecoController],
  providers: [InstrutorEnderecoService],
  exports: [TypeOrmModule],
})
export class InstrutorEnderecoModule {}
