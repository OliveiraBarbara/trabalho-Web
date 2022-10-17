import { SharedModule } from './shared/shared.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PreferenciaModule } from './preferencia/preferencia.module';
import { ExercicioModule } from './exercicio/exercicio.module';
import { InstrutorModule } from './instrutor/instrutor.module';
import { LocalTreinamentoModule } from './local-treinamento/local-treinamento.module';
import { PreferenciaExercicioModule } from './preferencia-exercicio/preferencia-exercicio.module';
import { EstadoModule } from './core/estado/estado.module';
import { CidadesModule } from './core/cidades/cidades.module';
import { EnderecoModule } from './core/endereco/endereco.module';
import { UserPreferenciaModule } from './user-preferencia/user-preferencia.module';

@Module({
  imports: [
    SharedModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database/site',
      entities: [__dirname + '/**/*.entity.{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    PreferenciaModule,
    ExercicioModule,
    InstrutorModule,
    LocalTreinamentoModule,
    PreferenciaExercicioModule,
    EstadoModule,
    CidadesModule,
    EnderecoModule,
    UserPreferenciaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
