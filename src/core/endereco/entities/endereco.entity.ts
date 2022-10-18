import { BaseEntity } from 'src/shared/entities';
import { Cidade } from '../../cidade/entities/cidade.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum AddressType {
  RESIDENTIAL = 'Residencial',
  BUSINESS = 'Comercial',
  FAMILY = 'Família',
  MAILING = 'Correspondência',
  OTHER = 'Outro',
}

@Entity()
export class Endereco extends BaseEntity{
  @PrimaryGeneratedColumn()
  id:number;

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

  /*@Column({
    type: 'varchar',
    enum: AddressType,
    default: AddressType.RESIDENTIAL,
  })
  tipo: AddressType;*/
}
