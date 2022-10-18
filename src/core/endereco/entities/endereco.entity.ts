import { BaseEntity } from 'src/shared/entities';
import { Cidade } from '../../cidade/entities/cidade.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Endereco extends BaseEntity{
  @Column()
  rua: string;

  @Column({ nullable: true })
  num: number;

  @Column({ nullable: true })
  complemento: string;

  @Column()
  bairro: string;

  @Column()
  cep: string;

  @Column()
  cidade: string;
}
