import { Estado } from 'src/core/estado/entities/estado.entity';
import { Type } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsNotEmptyObject, IsObject, IsString, MinLength, ValidateNested } from 'class-validator';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';

export class CreateCidadeDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  name: string;

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsObject()
  @IsDefined()
  @IsNotEmptyObject()
  estado: Estado;
}