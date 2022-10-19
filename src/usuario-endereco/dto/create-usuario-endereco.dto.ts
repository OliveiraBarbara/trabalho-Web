import { IsString, MaxLength } from 'class-validator';

export class CreateUsuarioEnderecoDto {
  @IsString()
  @MaxLength(30)
  tipo: string;
}
