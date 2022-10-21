import { LocalTreinamento } from './../../local-treinamento/entities/local-treinamento.entity';
import { Exercicio } from './../../exercicio/entities/exercicio.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { ChildEntity, Column, JoinTable, ManyToMany } from 'typeorm';

@ChildEntity()
export class Instrutor extends Usuario {
  @Column()
  cref: number;

  @Column({ length: 255 })
  modalidade: string;

  @ManyToMany(() => Exercicio, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'instrutor_tem_exercicios' })
  exercicios?: Exercicio[];

  @ManyToMany(() => LocalTreinamento, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'instrutor_tem_local' })
  academias?: LocalTreinamento[];
}
