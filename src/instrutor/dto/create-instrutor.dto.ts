import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';
import { LocalTreinamento } from './../../local-treinamento/entities/local-treinamento.entity';
import { Exercicio } from './../../exercicio/entities/exercicio.entity';
import {
  IsArray,
  IsInt,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateUsuarioDto } from './../../usuario/dto/create-usuario.dto';
import { Type } from 'class-transformer';

export class CreateInstrutorDto extends CreateUsuarioDto {
  @IsInt()
  cref: number;

  @IsString()
  @MinLength(3)
  modalidade: string;

  @ValidateNested({ each: true })
  @Type(() => RelationEntityDto)
  @IsArray()
  @IsOptional()
  exercicios?: Exercicio[];

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsArray()
  @IsOptional()
  academias?: LocalTreinamento[];
}
