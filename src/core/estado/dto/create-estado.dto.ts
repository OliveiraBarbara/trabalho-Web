import { Cidade } from './../../cidade/entities/cidade.entity';
import { IsArray, IsDefined, IsNotEmptyObject, IsString, IsUppercase, Length, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';

export class CreateEstadoDto {
  @IsString()
  name: string;

  @IsString()
  @Length(2, 2)
  @IsUppercase()
  sigla: string;

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsArray()
  @IsDefined()
  @IsNotEmptyObject()
  cidade: Cidade[];
}