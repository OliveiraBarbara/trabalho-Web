import { IsInt, IsString, MinLength } from 'class-validator';
import { CreateUsuarioDto } from './../../usuario/dto/create-usuario.dto';

export class CreateInstrutorDto extends CreateUsuarioDto {
  @IsInt()
  cref: number;

  @IsString()
  @MinLength(3)
  modalidade: string;
}
