import { Endereco } from 'src/endereco/entities/endereco.entity';
import {
  IsDecimal,
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';

export class CreateLocalTreinamentoDto {
  @IsString()
  nome: string;

  @IsDecimal()
  valor: number;

  @IsString()
  horaFunc: string;

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsObject()
  @IsDefined()
  @IsNotEmptyObject()
  endereco: Endereco;
}
