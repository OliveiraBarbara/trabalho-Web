import { Module } from '@nestjs/common';
import { InstrutorEnderecoService } from './instrutor-endereco.service';
import { InstrutorEnderecoController } from './instrutor-endereco.controller';

@Module({
  controllers: [InstrutorEnderecoController],
  providers: [InstrutorEnderecoService]
})
export class InstrutorEnderecoModule {}
