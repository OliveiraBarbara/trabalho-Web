import { CreatePreferenciaDto } from './../../preferencia/dto/create-preferencia.dto';
import { Preferencia } from 'src/preferencia/entities/preferencia.entity';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { CreateUsuarioDto } from './../../usuario/dto/create-usuario.dto';
import { Type } from 'class-transformer';

export class CreateClienteDto extends CreateUsuarioDto {
  @IsString()
  cpf: string;

  @ValidateNested({ each: true })
  @Type(() => CreatePreferenciaDto)
  @IsArray()
  @IsOptional()
  preferencias?: Preferencia[];
}
