import { Preferencia } from 'src/preferencia/entities/preferencia.entity';
import { Exercicio } from './../../exercicio/entities/exercicio.entity';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';

export class CreatePreferenciaExercicioDto {
  @IsString()
  @MaxLength(30)
  intensidade: string;

  @IsString()
  @MaxLength(30)
  qtdnaSemana: string;

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsObject()
  @IsDefined()
  @IsNotEmptyObject()
  exercicio: Exercicio;

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsObject()
  @IsDefined()
  @IsNotEmptyObject()
  preferencia: Preferencia;
}
