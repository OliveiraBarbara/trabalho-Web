import { IsInt, IsNumber, IsString } from 'class-validator';
import { CreateUsuarioDto } from 'src/usuario/dto/create-usuario.dto';

export class CreateAdminDto extends CreateUsuarioDto {
  @IsInt()
  numReg: number;

  @IsString()
  cargo: string;

  @IsString()
  formacao: string;

  @IsString()
  horaTrabalho: string;
}
