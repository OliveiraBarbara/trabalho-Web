import { IsString, MaxLength } from 'class-validator';

export class CreatePreferenciaExercicioDto {
  @IsString()
  @MaxLength(30)
  intensidade: string;
}
