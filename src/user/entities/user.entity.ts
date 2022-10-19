import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  cpf: string;

  @Column({ length: 255 })
  name: string;

  @Column()
  telefone: string;
}
