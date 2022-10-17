import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  cpf: string;

  @Column({ length: 255 })
  name: string;

  @Column()
  telefone: string;
}
