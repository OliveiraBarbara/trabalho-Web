import { Endereco } from 'src/endereco/entities/endereco.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn()
  idUsuario: number;

  @Column()
  cpf: string;

  @Column({ length: 255 })
  nome: string;

  @Column()
  telefone: string;

  @ManyToMany(() => Endereco, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'usuario_tem_endereco' })
  enderecos?: Endereco[];
}
