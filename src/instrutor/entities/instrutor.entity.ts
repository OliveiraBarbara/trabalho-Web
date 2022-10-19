import { Endereco } from '../../endereco/entities/endereco.entity';
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Instrutor extends BaseEntity{
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  cref: number;

  @Column({ length: 255 })
  nome: string;

  @Column()
  telefone: string;

  @ManyToMany(() => Endereco,  {
    cascade: true, 
    eager: true, 
    onDelete: 'CASCADE' })
  @JoinTable({ name: 'instrutor_tem_endereco' })
  enderecos?: Endereco[];
}
