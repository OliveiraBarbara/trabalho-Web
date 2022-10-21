import { IsDecimal, IsString } from 'class-validator';

export class CreateLocalTreinamentoDto {
  @IsString()
  nome: string;

  @IsDecimal()
  valor: number;

  @IsString()
  horaFunc: string;
}
