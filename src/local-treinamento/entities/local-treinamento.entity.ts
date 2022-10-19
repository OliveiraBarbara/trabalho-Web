import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LocalTreinamento extends BaseEntity {
  @PrimaryGeneratedColumn()
  idLocal: number;

  @Column()
  nome: string;
  
  @Column()
  valor: number;

  @Column()
  horaFunc: string;
}
