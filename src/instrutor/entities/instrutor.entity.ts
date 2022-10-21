import { Usuario } from 'src/usuario/entities/usuario.entity';
import { ChildEntity, Column } from 'typeorm';

@ChildEntity()
export class Instrutor extends Usuario {
  @Column()
  cref: number;

  @Column({ length: 255 })
  modalidade: string;
}
