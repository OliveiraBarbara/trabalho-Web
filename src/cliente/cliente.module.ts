import { Cliente } from './entities/cliente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { EnderecoModule } from 'src/endereco/endereco.module';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente]), EnderecoModule],
  controllers: [ClienteController],
  providers: [ClienteService],
  exports: [TypeOrmModule],
})
export class ClienteModule {}
