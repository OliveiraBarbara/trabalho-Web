import { Preferencia } from 'src/preferencia/entities/preferencia.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { ChildEntity, Column, JoinTable, ManyToMany } from 'typeorm';

@ChildEntity()
export class Cliente extends Usuario {
  @Column()
  cpf: string;

  @ManyToMany(() => Preferencia, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'cliente_tem_preferencia' })
  preferencias?: Preferencia[];
}
