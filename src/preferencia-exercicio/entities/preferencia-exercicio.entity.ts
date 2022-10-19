import { Exercicio } from './../../exercicio/entities/exercicio.entity';
import { Preferencia } from './../../preferencia/entities/preferencia.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class PreferenciaExercicio extends BaseEntity {
  @PrimaryGeneratedColumn()
  idPE: number;

  @ManyToMany(() => Preferencia, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'preferencia_tem_exercicio' })
  idPref: Preferencia;

  @ManyToMany(() => Exercicio, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'preferencia_tem_exercicio' })
  idExec: Exercicio;

  @Column()
  intensidade: string;
}
