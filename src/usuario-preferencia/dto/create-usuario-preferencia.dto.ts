import { IsInt, IsNotEmpty, IsPositive, IsString, Min } from 'class-validator';

export class CreateUsuarioPreferenciaDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  @IsNotEmpty()
  qtdPessoas: number;

  @IsString()
  modo: string;
}
