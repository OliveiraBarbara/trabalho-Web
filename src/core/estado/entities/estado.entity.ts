import { BaseEntity } from 'src/shared/entities'
import { Column, Entity } from 'typeorm';

@Entity()
export class Estado extends BaseEntity{
  @Column()
  name: string;

  @Column({ unique: true, length: 2 })
  sigla: string;
}
