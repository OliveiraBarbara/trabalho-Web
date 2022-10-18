import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LocalTreinamento {
  @PrimaryGeneratedColumn()
  idLocal: number;

  @Column()
  nome: string;
  
  @Column()
  valor: number;

  @Column()
  horaFunc: string;
}
