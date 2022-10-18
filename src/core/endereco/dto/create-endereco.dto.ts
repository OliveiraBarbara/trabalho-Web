import { Type } from 'class-transformer';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';
import {
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class CreateEnderecoDto {
  @IsString()
  @MinLength(3)
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
  @IsNotEmptyObject()*/
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  cidade: string;
}