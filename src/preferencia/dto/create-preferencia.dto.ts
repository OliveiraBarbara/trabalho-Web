import {IsString} from 'class-validator';

export class CreatePreferenciaDto {
  @IsString()
  material: string;

  @IsString()
  periodo: string;
}