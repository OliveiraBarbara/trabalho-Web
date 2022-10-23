import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsUppercase } from 'class-validator';

export class CreateEstadoDto {
  @ApiProperty({
    example: 'Mato Grosso do Sul',
  })
  @IsString()
  nome: string;

  @ApiProperty({
    example: 'MS',
  })
  @IsString()
  @Length(2, 2)
  @IsUppercase()
  sigla: string;
}
