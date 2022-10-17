import { Estado } from 'src/core/estado/entities/estado.entity';
import { Column, Entity, ManyToOne, Unique } from 'typeorm';

@Entity()
@Unique(['name', 'state'])
export class Cidade {
  @Column()
  name: string;

  @ManyToOne(() => Estado, { eager: true })
  estado: Estado;
}
