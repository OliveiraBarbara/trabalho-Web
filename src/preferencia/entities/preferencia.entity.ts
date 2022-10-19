import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Preferencia extends BaseEntity {
  @PrimaryGeneratedColumn()
  idPref: number;

  @Column({ length: 255 })
  material: string;

  @Column()
  periodo: string;
}
