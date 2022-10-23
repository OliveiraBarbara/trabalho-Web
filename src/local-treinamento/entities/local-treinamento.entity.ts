import { Endereco } from 'src/endereco/entities/endereco.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class LocalTreinamento {
  @PrimaryGeneratedColumn()
  idLocal: number;

  @Column()
  nome: string;

  @Column()
  valor: number;

  @Column()
  horaFunc: string;

  @ManyToMany(() => Endereco, {
    cascade: true,
    orphanedRowAction: 'delete',
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'academia_tem_endereco' })
  enderecos?: Endereco;
}
