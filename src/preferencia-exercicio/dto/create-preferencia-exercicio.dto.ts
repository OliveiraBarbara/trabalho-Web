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
import { ApiProperty } from '@nestjs/swagger';

export class CreatePreferenciaExercicioDto {
  @ApiProperty({
    example: 'baixo',
  })
  @IsString()
  intensidade: string;

  @ApiProperty({
    example: '2 vezes na semana',
  })
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
