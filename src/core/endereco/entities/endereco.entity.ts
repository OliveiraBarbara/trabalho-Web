import { Cidade } from './../../cidades/entities/cidade.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum AddressType {
  RESIDENTIAL = 'Residencial',
  BUSINESS = 'Comercial',
  FAMILY = 'Família',
  MAILING = 'Correspondência',
  OTHER = 'Outro',
}

@Entity()
export class Endereco {
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

  @ManyToOne(() => Cidade, { eager: true })
  cidade: Cidade;

  @Column({
    type: 'varchar',
    enum: AddressType,
    default: AddressType.RESIDENTIAL,
  })
  tipo: AddressType;
}
