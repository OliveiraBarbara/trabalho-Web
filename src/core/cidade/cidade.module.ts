import { Estado } from 'src/core/estado/entities/estado.entity';
import { Cidade } from './entities/cidade.entity';
import { Module } from '@nestjs/common';
import { CidadesService } from './cidade.service';
import { CidadesController } from './cidade.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Endereco } from '../../endereco/entities/endereco.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cidade]), CidadesModule, Endereco, Estado],
  controllers: [CidadesController],
  providers: [CidadesService]
})
export class CidadesModule {}
