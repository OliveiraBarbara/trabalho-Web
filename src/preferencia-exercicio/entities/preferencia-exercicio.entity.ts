import { Exercicio } from './../../exercicio/entities/exercicio.entity';
import { Preferencia } from './../../preferencia/entities/preferencia.entity';
import { BaseEntity, Column, Entity, ManyToMany } from 'typeorm';

@Entity()
export class PreferenciaExercicio extends BaseEntity {
  @ManyToMany(() => Preferencia, { eager: true })
  idPref: Preferencia;

  @ManyToMany(() => Exercicio, { eager: true })
  idExec: Exercicio;

  @Column()
  intensidade: string;
}
