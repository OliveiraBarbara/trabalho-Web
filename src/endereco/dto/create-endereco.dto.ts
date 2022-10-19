import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateEnderecoDto {
  @IsString()
  @IsNotEmpty()
  rua: string;

  @IsInt()
  num: number;

  @IsOptional()
  @IsString()
  complemento?: string;

  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  bairro: string;

  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  cep: string;

  /*@ValidateNested()
  @Type(() => RelationEntityDto)
  @IsObject()
  @IsDefined()
  @IsNotEmptyObject()
  cidade: Cidade;*/

  @IsString()
  @IsNotEmpty()
  cidade: string;

  @IsString()
  @IsNotEmpty()
  estado: string;
}