import { Type } from 'class-transformer';
import {
  IsDefined,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';

import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';
import { AddressType } from '../entities/endereco.entity';


export class CreateEnderecoDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  rua: string;

  @IsInt()
  num?: number;

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

  /*@IsEnum(AddressType)
  @IsNotEmpty()
  tipo: string;

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsObject()
  @IsDefined()
  @IsNotEmptyObject()
  cidade: RelationEntityDto;*/
}