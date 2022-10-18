import { CidadesModule } from './core/cidade/cidade.module';
import { EstadosModule } from './core/estado/estado.module';
import { Estado } from 'src/core/estado/entities/estado.entity';
import { Cidade } from './core/cidade/entities/cidade.entity';
import { EnderecosModule } from './core/endereco/endereco.module';
import { Endereco } from './core/endereco/entities/endereco.entity';
import { Instrutor } from './instrutor/entities/instrutor.entity';
import { SharedModule } from './shared/shared.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { PreferenciaModule } from './preferencia/preferencia.module';
import { ExercicioModule } from './exercicio/exercicio.module';
import { InstrutorModule } from './instrutor/instrutor.module';
import { LocalTreinamentoModule } from './local-treinamento/local-treinamento.module';
import { PreferenciaExercicioModule } from './preferencia-exercicio/preferencia-exercicio.module';
import { UserPreferenciaModule } from './user-preferencia/user-preferencia.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database/site.db',
      entities: [Instrutor, Endereco, Cidade, Estado],
      synchronize: true,
    }),
    InstrutorModule,
    EnderecosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
