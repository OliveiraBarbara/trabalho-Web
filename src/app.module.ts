import { LocalTreinamentoModule } from './local-treinamento/local-treinamento.module';
import { LocalTreinamento } from './local-treinamento/entities/local-treinamento.entity';
import { PreferenciaExercicio } from 'src/preferencia-exercicio/entities/preferencia-exercicio.entity';
import { Preferencia } from 'src/preferencia/entities/preferencia.entity';
import { PreferenciaExercicioModule } from './preferencia-exercicio/preferencia-exercicio.module';
import { PreferenciaModule } from './preferencia/preferencia.module';
import { Instrutor } from './instrutor/entities/instrutor.entity';
import { InstrutorModule } from './instrutor/instrutor.module';
import { UsuarioModule } from './usuario/usuario.module';
import { Cidade } from 'src/cidade/entities/cidade.entity';
import { Estado } from 'src/estado/entities/estado.entity';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { ClienteModule } from './cliente/cliente.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { EstadoModule } from './estado/estado.module';
import { CidadeModule } from './cidade/cidade.module';
import { EnderecoModule } from './endereco/endereco.module';
import { Cliente } from './cliente/entities/cliente.entity';
import { Admin } from './admin/entities/admin.entity';
import { Usuario } from './usuario/entities/usuario.entity';
import { Exercicio } from './exercicio/entities/exercicio.entity';
import { ExercicioModule } from './exercicio/exercicio.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database/site.db',
      entities: [
        Cliente,
        Admin,
        Instrutor,
        Endereco,
        Estado,
        Cidade,
        Usuario,
        Exercicio,
        Preferencia,
        PreferenciaExercicio,
        LocalTreinamento,
      ],
      synchronize: true,
    }),
    EstadoModule,
    CidadeModule,
    EnderecoModule,
    ClienteModule,
    AdminModule,
    InstrutorModule,
    UsuarioModule,
    ExercicioModule,
    PreferenciaModule,
    PreferenciaExercicioModule,
    LocalTreinamentoModule,
    AuthModule,
  ],
  controllers: [],
  providers: [{ provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}
