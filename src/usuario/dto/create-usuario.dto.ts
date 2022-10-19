import { CreateEnderecoDto } from '../../endereco/dto/create-endereco.dto';
import { Endereco } from '../../endereco/entities/endereco.entity';
import {
  IsArray,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUsuarioDto {
  @IsString()
  @MinLength(3)
  nome: string;

  @IsString()
  @MinLength(3)
  cpf: string;

  @IsString()
  @MaxLength(11)
  telefone: string;

  @ValidateNested({ each: true })
  @Type(() => CreateEnderecoDto)
  @IsArray()
  @IsOptional()
  enderecos?: Endereco[];
}
