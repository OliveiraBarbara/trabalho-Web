import { Endereco } from './../../core/endereco/entities/endereco.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn} from 'typeorm';

@Entity()
export class Instrutor {
  @PrimaryColumn()
  cref: number;

  @Column({ length: 255 })
  name: string;

  @Column()
  telefone: string;

  @ManyToMany(() => Endereco, { cascade: true, eager: true, onDelete: 'CASCADE' })
  @JoinTable({ name: 'instrutor_tem_endereco' })
  enderecos?: Endereco[];
}
