import { CreateEnderecoDto } from '../../core/endereco/dto/create-endereco.dto';
import { Endereco } from '../../core/endereco/entities/endereco.entity';
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
   * O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir
   * informações da pessoa conectada.
   * @example Barbara Oliveira
   */
  @IsString()
  @MinLength(3)
  nome: string;

  @IsString()
  @MinLength(3)
  cpf: string;

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
