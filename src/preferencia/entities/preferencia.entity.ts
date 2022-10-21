import { PreferenciaExercicio } from './../../preferencia-exercicio/entities/preferencia-exercicio.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Preferencia {
  @PrimaryGeneratedColumn()
  idPref: number;

  @Column({ length: 255 })
  material: string;

  @Column()
  periodo: string;

  @OneToMany(
    () => PreferenciaExercicio,
    (prefExercicio) => prefExercicio.preferencia,
  )
  prefExercicio: PreferenciaExercicio[];
}
