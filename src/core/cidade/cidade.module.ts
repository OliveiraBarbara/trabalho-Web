import { Module } from '@nestjs/common';
import { CidadesService } from './cidade.service';
import { CidadesController } from './cidade.controller';

@Module({
  imports: [CidadesModule],
  controllers: [CidadesController],
  providers: [CidadesService]
})
export class CidadesModule {}
