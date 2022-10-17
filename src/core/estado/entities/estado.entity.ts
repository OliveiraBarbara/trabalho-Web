import { Column, Entity } from 'typeorm';

@Entity()
export class Estado {
  @Column()
  name: string;

  @Column({ unique: true, length: 2 })
  sigla: string;
}
