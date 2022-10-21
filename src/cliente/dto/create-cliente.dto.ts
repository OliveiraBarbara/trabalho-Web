import { IsString } from 'class-validator';
import { CreateUsuarioDto } from './../../usuario/dto/create-usuario.dto';

export class CreateClienteDto extends CreateUsuarioDto {
  @IsString()
  cpf: string;
}
