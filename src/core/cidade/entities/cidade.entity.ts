import { Endereco } from '../../../endereco/entities/endereco.entity';
//import { BaseEntity } from 'src/shared/entities';
import { Estado } from 'src/core/estado/entities/estado.entity';
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['nome', 'estado'])
export class Cidade extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Estado, (estado) => estado.cidade)
  estado: Estado;

  @OneToMany(() => Endereco, (endereco) => endereco.cidade,{
    cascade:true,
    eager: true,
  })
  enderecos: Endereco[];

}
