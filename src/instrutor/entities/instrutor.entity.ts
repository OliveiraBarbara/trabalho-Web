import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Instrutor {
  @PrimaryGeneratedColumn()
  cref: number;

  @Column({ length: 255 })
  name: string;

  @Column()
  telefone: string;
}
