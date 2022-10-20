import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class InstrutorEndereco extends BaseEntity {
  @PrimaryGeneratedColumn()
  idIE: number;

  /*@ManyToMany(() => Endereco, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'instrutor_tem_endereco' })
  idEnd: Endereco;

  @ManyToMany(() => Instrutor, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'instrutor_tem_endereco' })
  id: Instrutor;*/

  @Column()
  tipo: string;
}
