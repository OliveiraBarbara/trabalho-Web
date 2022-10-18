import { IsString, IsUppercase, Length } from 'class-validator';

export class CreateEstadoDto {
  @IsString()
  name: string;

  @IsString()
  @Length(2, 2)
  @IsUppercase()
  sigla: string;
}