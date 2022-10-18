import { BaseEntity } from 'src/shared/entities';
import { Estado } from 'src/core/estado/entities/estado.entity';
import { Column, Entity, ManyToOne, Unique } from 'typeorm';

@Entity()
@Unique(['name', 'estado'])
export class Cidade extends BaseEntity{
  @Column()
  name: string;

  @ManyToOne(() => Estado, { eager: true })
  estado: Estado;
}
