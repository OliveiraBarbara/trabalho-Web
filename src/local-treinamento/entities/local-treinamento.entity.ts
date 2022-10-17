import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LocalTreinamento {
  @PrimaryGeneratedColumn()
  idLocal: number;

  @Column({ length: 255 })
  valor: number;

  @Column()
  horaFunc: string;
}
