import { Exercicio } from './../../exercicio/entities/exercicio.entity';
import { Preferencia } from 'src/preferencia/entities/preferencia.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class PreferenciaExercicio extends BaseEntity {
  @PrimaryGeneratedColumn()
  idPE: number;

  @ManyToOne(() => Preferencia, (preferencia) => preferencia.prefExercicio, {
    eager: true,
  })
  preferencia: Preferencia;

  @ManyToOne(() => Exercicio, (exercicio) => exercicio.exercPref, {
    eager: true,
  })
  exercicio: Exercicio;

  @Column()
  intensidade: string;

  @Column()
  qtdnaSemana: string;
}
