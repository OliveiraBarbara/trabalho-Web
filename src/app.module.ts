import { PreferenciaExercicioModule } from './preferencia-exercicio/preferencia-exercicio.module';
import { UsuarioPreferenciaModule } from './usuario-preferencia/usuario-preferencia.module';
import { UsuarioPreferencia } from './usuario-preferencia/entities/usuario-preferencia.entity';
import { PreferenciaExercicio } from './preferencia-exercicio/entities/preferencia-exercicio.entity';
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
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
/*import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';*/

@Module({
  imports: [
    //ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database/site.db',
      entities: [
        Instrutor,
        Endereco,
        Exercicio,
        LocalTreinamento,
        Usuario,
        Preferencia,
        PreferenciaExercicio,
        UsuarioPreferencia,
      ],
      synchronize: true,
    }),
    InstrutorModule,
    EnderecosModule,
    PreferenciaModule,
    ExercicioModule,
    LocalTreinamentoModule,
    UsuarioModule,
    UsuarioPreferenciaModule,
    PreferenciaExercicioModule,
    //AuthModule,
  ],
  controllers: [],
  //providers: [{ provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}
