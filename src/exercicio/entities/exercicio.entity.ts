import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Exercicio extends BaseEntity {
  @PrimaryGeneratedColumn()
  idExec: number;

  @Column({ length: 255 })
  tipo: string;

  @Column()
  tempoExec: string;
}
