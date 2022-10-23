import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateExercicioDto {
  @ApiProperty({
    example: 'Musculação',
  })
  @IsString()
  tipo: string;

  @ApiProperty({
    example: '2 horas',
  })
  @IsString()
  tempoExec: string;
}
