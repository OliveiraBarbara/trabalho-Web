import { PreferenciaModule } from './../preferencia/preferencia.module';
import { Cliente } from './entities/cliente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { EnderecoModule } from 'src/endereco/endereco.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cliente]),
    forwardRef(() => EnderecoModule),
    forwardRef(() => PreferenciaModule),
  ],
  controllers: [ClienteController],
  providers: [ClienteService],
  exports: [TypeOrmModule],
})
export class ClienteModule {}
