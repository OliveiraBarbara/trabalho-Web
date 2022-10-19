import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import {
  BaseEntity,
  Column,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class UsuarioEndereco extends BaseEntity {
  @PrimaryGeneratedColumn()
  idUE: number;

  @ManyToMany(() => Endereco, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'usuario_tem_endereco' })
  idEnd: Endereco;

  @ManyToMany(() => Usuario, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'usuario_tem_endereco' })
  id: Usuario;

  @Column()
  tipo: string;
}
