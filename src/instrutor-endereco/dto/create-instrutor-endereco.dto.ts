import { IsString, MaxLength } from 'class-validator';

export class CreateInstrutorEnderecoDto {
  @IsString()
  @MaxLength(30)
  tipo: string;
}
