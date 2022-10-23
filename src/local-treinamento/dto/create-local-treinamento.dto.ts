import { CreateEnderecoDto } from 'src/endereco/dto/create-endereco.dto';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import {
  IsArray,
  IsDecimal,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLocalTreinamentoDto {
  @ApiProperty({
    example: 'MOOVE Qualidade de Vida',
  })
  @IsString()
  nome: string;

  @ApiProperty({
    example: '150.00',
  })
  @IsDecimal()
  valor: number;

  @ApiProperty({
    example: '05:00 as 23:00',
  })
  @IsString()
  horaFunc: string;

  /* @ApiProperty({
    example:
      '[{"rua": "Rua dos Ipês", "num": 2648, "bairro": "Centro", "cep": "16854200", "cidade": {"id": 1}}]',
  })
  @ValidateNested()
  @Type(() => CreateEnderecoDto)
  @IsArray()
  @IsOptional()
  endereco?: Endereco;*/

  @ApiProperty({
    example:
      '[{"rua": "Rua das Flores", "num": 2741, "bairro": "Centro", "cep": "16601753", "cidade": {"id": 1}}]',
  })
  @ValidateNested({ each: true })
  @Type(() => CreateEnderecoDto)
  @IsArray()
  @IsOptional()
  enderecos?: Endereco;
}
