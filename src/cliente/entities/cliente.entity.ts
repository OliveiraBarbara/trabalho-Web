import { Usuario } from 'src/usuario/entities/usuario.entity';
import { ChildEntity, Column } from 'typeorm';

@ChildEntity()
export class Cliente extends Usuario {
  @Column()
  cpf: string;
}
