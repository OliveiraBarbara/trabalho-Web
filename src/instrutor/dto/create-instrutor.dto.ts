import { CreateEnderecoDto } from '../../core/endereco/dto/create-endereco.dto';
import { Endereco } from '../../core/endereco/entities/endereco.entity';
import {
  IsArray,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  Matches,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
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

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'senha muito fraca',
  })
  senha: string;

  @ValidateNested({ each: true })
  @Type(() => CreateEnderecoDto)
  @IsArray()
  @IsOptional()
  enderecos?: Endereco[];
}
