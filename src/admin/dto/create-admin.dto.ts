import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
import { CreateUsuarioDto } from 'src/usuario/dto/create-usuario.dto';

export class CreateAdminDto extends CreateUsuarioDto {
  @ApiProperty({
    example: '7998',
  })
  @IsInt()
  numReg: number;

  @ApiProperty({
    example: 'Analista',
  })
  @IsString()
  cargo: string;

  @ApiProperty({
    example: 'Sistemas de Informação',
  })
  @IsString()
  formacao: string;

  @ApiProperty({
    example: '40 horas',
  })
  @IsString()
  horaTrabalho: string;
}
