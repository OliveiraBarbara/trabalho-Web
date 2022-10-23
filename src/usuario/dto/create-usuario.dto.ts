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
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiProperty({
    example: 'Monica da Cruz',
  })
  @IsString()
  @MinLength(3)
  nome: string;

  @ApiProperty({
    example: '21996325487',
  })
  @IsString()
  @MaxLength(11)
  telefone: string;

  @ApiProperty({
    example: 'monica@teste.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'Abc@123',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'senha muito fraca',
  })
  senha: string;

  @ApiProperty({
    example:
      '[{"rua": "Rua dos Professora", "num": 2741, "bairro": "Centro", "cep": "16601753", "cidade": {"id": 1}}]',
  })
  @ValidateNested({ each: true })
  @Type(() => CreateEnderecoDto)
  @IsArray()
  @IsOptional()
  enderecos?: Endereco[];
}
