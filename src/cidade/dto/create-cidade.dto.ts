import { RelationEntityDto } from './../../shared/dto/relation-entity.dto';
import { Estado } from 'src/estado/entities/estado.entity';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class CreateCidadeDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  nome: string;

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsObject()
  @IsDefined()
  @IsNotEmptyObject()
  estado: Estado;
}
