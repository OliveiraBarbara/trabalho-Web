import { Cidade } from 'src/cidade/entities/cidade.entity';
import { BaseEntity } from 'src/shared/entities';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity()
export class Estado extends BaseEntity {
  @Column()
  nome: string;

  @Column({ unique: true, length: 2 })
  sigla: string;

  @OneToMany(() => Cidade, (cidade) => cidade.estado)
  cidades: Cidade[];
}
