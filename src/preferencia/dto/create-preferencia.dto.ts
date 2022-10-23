import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePreferenciaDto {
  @ApiProperty({
    example: 'pesos',
  })
  @IsString()
  material: string;

  @ApiProperty({
    example: 'manhã',
  })
  @IsString()
  periodo: string;
}
