import { BaseEntity } from 'src/shared/entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class Estado extends BaseEntity {
  @Column()
  nome: string;

  @Column({ unique: true, length: 2 })
  sigla: string;

  /*@OneToMany(() => Cidade, (cidade) => cidade.estado, {
    cascade:true,
    eager:true,
  })
  cidade: Cidade[];*/
}
