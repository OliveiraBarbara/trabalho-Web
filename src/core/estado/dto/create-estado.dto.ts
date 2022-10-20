//import { Cidade } from './../../cidade/entities/cidade.entity';
import { IsString, IsUppercase, Length } from 'class-validator';
//import { Type } from 'class-transformer';
//import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';

export class CreateEstadoDto {
  @IsString()
  nome: string;

  @IsString()
  @Length(2, 2)
  @IsUppercase()
  sigla: string;

  /*@ValidateNested()
  @Type(() => RelationEntityDto)
  @IsArray()
  @IsDefined()
  @IsNotEmptyObject()
  cidade: Cidade[];*/
}
