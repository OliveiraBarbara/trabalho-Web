import { Preferencia } from './../../preferencia/entities/preferencia.entity';
import { User } from './../../user/entities/user.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity()
export class UserPreferencia {
  @ManyToMany(() => User, { eager: true })
  cpf: User;

  @ManyToMany(() => Preferencia, { eager: true })
  idPref: Preferencia;

  @Column()
  qtdporSemana: number;

  @Column()
  qtdPessoas: number;
}
