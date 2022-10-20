import { hashSync } from 'bcrypt';
import { Endereco } from '../../core/endereco/entities/endereco.entity';
import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Instrutor extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cref: number;

  @Column({ length: 255 })
  nome: string;

  @Column()
  telefone: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  senha?: string;

  @ManyToMany(() => Endereco, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'instrutor_tem_endereco' })
  enderecos?: Endereco[];

  @BeforeInsert()
  hashPassword() {
    this.senha = hashSync(this.senha, 10);
  }
}
