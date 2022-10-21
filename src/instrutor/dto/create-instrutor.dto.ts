import { LocalTreinamento } from './../../local-treinamento/entities/local-treinamento.entity';
import { CreateLocalTreinamentoDto } from './../../local-treinamento/dto/create-local-treinamento.dto';
import { Exercicio } from './../../exercicio/entities/exercicio.entity';
import { CreateExercicioDto } from './../../exercicio/dto/create-exercicio.dto';
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
  @Type(() => CreateExercicioDto)
  @IsArray()
  @IsOptional()
  exercicios?: Exercicio[];

  @ValidateNested({ each: true })
  @Type(() => CreateLocalTreinamentoDto)
  @IsArray()
  @IsOptional()
  academias?: LocalTreinamento[];
}
