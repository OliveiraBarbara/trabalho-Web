import { RelationEntityDto } from './../../shared/dto/relation-entity.dto';
import { Estado } from 'src/estado/entities/estado.entity';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCidadeDto {
  @ApiProperty({
    example: 'Três Lagoas',
  })
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    example: '{"id": 1}',
  })
  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsObject()
  @IsDefined()
  @IsNotEmptyObject()
  estado: Estado;
}
