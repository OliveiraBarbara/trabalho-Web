import { Module } from '@nestjs/common';
import { InstrutorService } from './instrutor.service';
import { InstrutorController } from './instrutor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instrutor } from './entities/instrutor.entity';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { EnderecosModule } from 'src/endereco/endereco.module';

@Module({
  imports: [TypeOrmModule.forFeature([Instrutor]), Endereco, EnderecosModule],
  controllers: [InstrutorController],
  providers: [InstrutorService],
  exports:[TypeOrmModule],
})
export class InstrutorModule {}
