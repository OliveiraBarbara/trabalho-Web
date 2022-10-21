import { Usuario } from 'src/usuario/entities/usuario.entity';
import { ChildEntity, Column } from 'typeorm';

@ChildEntity()
export class Admin extends Usuario {
  @Column()
  numReg: number;

  @Column()
  cargo: string;

  @Column()
  formacao: string;

  @Column()
  horaTrabalho: string;
}
