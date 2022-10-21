import { IsString, Length, IsUppercase } from 'class-validator';

export class CreateEstadoDto {
  @IsString()
  nome: string;

  @IsString()
  @Length(2, 2)
  @IsUppercase()
  sigla: string;
}
