import { CreatePreferenciaDto } from './../../preferencia/dto/create-preferencia.dto';
import { Preferencia } from 'src/preferencia/entities/preferencia.entity';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { CreateUsuarioDto } from './../../usuario/dto/create-usuario.dto';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto extends CreateUsuarioDto {
  @ApiProperty({
    example: '78965412333',
  })
  @IsString()
  cpf: string;

  @ApiProperty({
    example: '[{"material": "pesos", "periodo": "manhã"}]',
  })
  @ValidateNested({ each: true })
  @Type(() => CreatePreferenciaDto)
  @IsArray()
  @IsOptional()
  preferencias?: Preferencia[];
}
