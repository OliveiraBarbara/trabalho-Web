import { CreateEnderecoDto } from '../../endereco/dto/create-endereco.dto';
import { Endereco } from '../../endereco/entities/endereco.entity';
import { IsArray, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, MaxLength, Min, MinLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateInstrutorDto {
  @IsString()
  @MinLength(3)
  nome: string;

  @IsInt()
  @IsPositive()
  @Min(1)
  @IsNotEmpty()
  cref: number;

  @IsString()
  @MaxLength(11)
  telefone: string;

  @ValidateNested({ each: true })
  @Type(() => CreateEnderecoDto)
  @IsArray()
  @IsOptional()
  enderecos?: Endereco[];
}