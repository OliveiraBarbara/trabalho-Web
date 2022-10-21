import { EnderecoModule } from 'src/endereco/endereco.module';
import { Instrutor } from './entities/instrutor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { InstrutorService } from './instrutor.service';
import { InstrutorController } from './instrutor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Instrutor]), EnderecoModule],
  controllers: [InstrutorController],
  providers: [InstrutorService],
  exports: [TypeOrmModule],
})
export class InstrutorModule {}
