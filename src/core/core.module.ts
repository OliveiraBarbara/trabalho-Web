import { EnderecosModule } from './endereco/endereco.module';
import { CidadesModule } from './cidade/cidade.module';
import { EstadosModule } from './estado/estado.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [EstadosModule, CidadesModule, EnderecosModule],
})
export class CoreModule {}
