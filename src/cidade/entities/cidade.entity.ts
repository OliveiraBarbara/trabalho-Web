import { Estado } from 'src/estado/entities/estado.entity';
import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, ManyToOne, Unique } from 'typeorm';

@Entity()
@Unique(['nome', 'estado'])
export class Cidade extends BaseEntity {
  @Column()
  nome: string;

  @ManyToOne(() => Estado, (estado) => estado.cidades, { eager: true })
  estado: Estado;
}
