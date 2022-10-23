import { CreateExercicioDto } from './../../exercicio/dto/create-exercicio.dto';
import { CreateLocalTreinamentoDto } from './../../local-treinamento/dto/create-local-treinamento.dto';
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
import { ApiProperty } from '@nestjs/swagger';

export class CreateInstrutorDto extends CreateUsuarioDto {
  @ApiProperty({
    example: 123456,
  })
  @IsInt()
  cref: number;

  @ApiProperty({
    example: 'Esporte de Quadra',
  })
  @IsString()
  @MinLength(3)
  modalidade: string;

  @ApiProperty({
    example: '[{"tipo": "Vôlei", "tempoExec": "3 horas"}]',
  })
  @ValidateNested({ each: true })
  @Type(() => CreateExercicioDto)
  @IsArray()
  @IsOptional()
  exercicios?: Exercicio[];

  @ApiProperty({
    example: '[{"nome": "Pime", "valor": "120.00", "horaFunc": "5h às 22h"}]',
  })
  @ValidateNested({ each: true })
  @Type(() => CreateLocalTreinamentoDto)
  @IsArray()
  @IsOptional()
  academias?: LocalTreinamento[];
}
