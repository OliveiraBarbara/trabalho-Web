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
      entities: [Instrutor, Endereco, Preferencia, Exercicio],
      synchronize: true,
    }),
    InstrutorModule,
    EnderecosModule,
    PreferenciaModule,
    ExercicioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
