import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Cidade } from 'src/cidade/entities/cidade.entity';
import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

@Entity()
export class Endereco extends BaseEntity {
  @Column()
  rua: string;

  @Column()
  num: number;

  @Column({ nullable: true })
  complemento?: string;

  @Column()
  bairro: string;

  @Column()
  cep: string;

  @ManyToOne(() => Cidade, { eager: true })
  cidade: Cidade;
}
