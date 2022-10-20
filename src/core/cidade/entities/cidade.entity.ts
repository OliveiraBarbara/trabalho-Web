//import { Endereco } from '../../endereco/entities/endereco.entity';
import { BaseEntity } from 'src/shared/entities';
import { Estado } from 'src/core/estado/entities/estado.entity';
import { Column, Entity, ManyToOne, OneToMany, Unique } from 'typeorm';
import { Endereco } from 'src/core/endereco/entities/endereco.entity';

@Entity()
@Unique(['nome', 'estado'])
export class Cidade extends BaseEntity {
  @Column()
  nome: string;

  @ManyToOne(() => Estado, { eager: true })
  estado: Estado;

  @OneToMany(() => Endereco, (endereco) => endereco.cidade, {
    cascade: true,
    eager: true,
  })
  enderecos: Endereco[];
}
