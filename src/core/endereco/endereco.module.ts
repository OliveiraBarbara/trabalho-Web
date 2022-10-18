import { Endereco } from './entities/endereco.entity';
import { Module } from '@nestjs/common';
import { EnderecosService } from './endereco.service';
import { EnderecosController } from './endereco.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Endereco]), EnderecosModule],
  controllers: [EnderecosController],
  providers: [EnderecosService]
})
export class EnderecosModule {}
