import { Module } from '@nestjs/common';
import { CidadeService } from './cidade.service';
import { CidadeController } from './cidade.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cidade } from './entities/cidade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cidade])],
  controllers: [CidadeController],
  providers: [CidadeService],
  exports: [TypeOrmModule],
})
export class CidadeModule {}
