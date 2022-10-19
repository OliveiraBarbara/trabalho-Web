import { Cidade } from './../../cidade/entities/cidade.entity';
import { BaseEntity } from 'src/shared/entities'
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Estado extends BaseEntity{
  @Column()
  name: string;

  @Column({ unique: true, length: 2 })
  sigla: string;

  @OneToMany(() => Cidade, (cidade) => cidade.estado, {
    cascade:true,
    eager:true,
  })
  cidade: Cidade[];
}
