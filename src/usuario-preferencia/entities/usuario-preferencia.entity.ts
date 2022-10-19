import { Preferencia } from '../../preferencia/entities/preferencia.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Entity()
export class UsuarioPreferencia extends BaseEntity {
  @PrimaryGeneratedColumn()
  idUP: number;

  @ManyToMany(() => Usuario, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'usuario_tem_preferencia' })
  cpf: Usuario;

  @ManyToMany(() => Preferencia, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'usuario_tem_preferencia' })
  idPref: Preferencia;

  @Column()
  modo: string;

  @Column()
  qtdPessoas: number;
}
