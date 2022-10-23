import { EnderecoModule } from 'src/endereco/endereco.module';
import { Admin } from './entities/admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Admin]),
    forwardRef(() => EnderecoModule),
  ],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [TypeOrmModule],
})
export class AdminModule {}
