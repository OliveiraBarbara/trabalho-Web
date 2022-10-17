import { Module } from '@nestjs/common';
import { UserPreferenciaService } from './user-preferencia.service';
import { UserPreferenciaController } from './user-preferencia.controller';

@Module({
  controllers: [UserPreferenciaController],
  providers: [UserPreferenciaService]
})
export class UserPreferenciaModule {}
