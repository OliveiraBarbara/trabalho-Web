import { IsString } from 'class-validator';

export class CreateExercicioDto {
  @IsString()
  tipo: string;

  @IsString()
  tempoExec: string;
}
