import { CreateEnderecoDto } from '../../endereco/dto/create-endereco.dto';
import { Endereco } from '../../endereco/entities/endereco.entity';
import {
  IsArray,
  IsEmail,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUsuarioDto {
  /**
   * O nome serÃ¡ utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir
   * informaÃ§Ãµes da pessoa conectada.
   * @example Barbara Oliveira
   */
  @IsString()
  @MinLength(3)
  nome: string;

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
