import { LocalTreinamentoModule } from './local-treinamento/local-treinamento.module';
import { LocalTreinamento } from './local-treinamento/entities/local-treinamento.entity';
import { Exercicio } from './exercicio/entities/exercicio.entity';
import { Preferencia } from './preferencia/entities/preferencia.entity';
import { EnderecosModule } from './core/endereco/endereco.module';
import { Endereco } from './core/endereco/entities/endereco.entity';
import { Instrutor } from './instrutor/entities/instrutor.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreferenciaModule } from './preferencia/preferencia.module';
import { ExercicioModule } from './exercicio/exercicio.module';
import { InstrutorModule } from './instrutor/instrutor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database/site.db',
      entities: [Instrutor, Endereco, Preferencia, Exercicio, LocalTreinamento],
      synchronize: true,
    }),
    InstrutorModule,
    EnderecosModule,
    PreferenciaModule,
    ExercicioModule,
    LocalTreinamentoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
