import { PreferenciaExercicio } from 'src/preferencia-exercicio/entities/preferencia-exercicio.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Exercicio {
  @PrimaryGeneratedColumn()
  idExec: number;

  @Column({ length: 255 })
  tipo: string;

  @Column()
  tempoExec: string;

  @OneToMany(
    () => PreferenciaExercicio,
    (prefExercicio) => prefExercicio.exercicio,
  )
  exercPref: PreferenciaExercicio[];
}
