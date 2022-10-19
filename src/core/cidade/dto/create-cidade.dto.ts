import { Endereco } from '../../../endereco/entities/endereco.entity';
import { Estado } from 'src/core/estado/entities/estado.entity';
import { Type } from 'class-transformer';
import { IsArray, IsDefined, IsNotEmpty, IsNotEmptyObject, IsObject, IsString, MinLength, ValidateNested } from 'class-validator';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';

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

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsArray()
  @IsDefined()
  enderecos: Endereco[];
}