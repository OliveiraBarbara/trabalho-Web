import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Endereco extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rua: string;

  @Column()
  num: number;

  @Column({ nullable: true })
  complemento: string;

  @Column()
  bairro: string;

  @Column()
  cep: string;

  /*@ManyToOne(() => Cidade, (cidade) => cidade.enderecos)
  cidade: Cidade;*/

  @Column()
  cidade: string;

  @Column()
  estado: string;
}
