import { EnderecosModule } from './../core/endereco/endereco.module';
import { Module } from '@nestjs/common';
import { InstrutorService } from './instrutor.service';
import { InstrutorController } from './instrutor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instrutor } from './entities/instrutor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Instrutor]), EnderecosModule],
  controllers: [InstrutorController],
  providers: [InstrutorService]
})
export class InstrutorModule {}
