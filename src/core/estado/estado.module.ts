//import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EstadosService } from './estado.service';
import { EstadosController } from './estado.controller';

@Module({
  imports: [EstadosModule],
  controllers: [EstadosController],
  providers: [EstadosService]
})
export class EstadosModule {}
