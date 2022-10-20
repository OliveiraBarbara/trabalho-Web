import { Module } from '@nestjs/common';
import { InstrutorService } from './instrutor.service';
import { InstrutorController } from './instrutor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instrutor } from './entities/instrutor.entity';
import { EnderecosModule } from 'src/core/endereco/endereco.module';

@Module({
  imports: [TypeOrmModule.forFeature([Instrutor]), EnderecosModule],
  controllers: [InstrutorController],
  providers: [InstrutorService],
  exports: [TypeOrmModule],
})
export class InstrutorModule {}
