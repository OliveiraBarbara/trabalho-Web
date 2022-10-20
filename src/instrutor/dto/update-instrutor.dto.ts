import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateInstrutorDto } from './create-instrutor.dto';

export class UpdateInstrutorDto extends PartialType(
  OmitType(CreateInstrutorDto, ['senha'] as const),
) {}
