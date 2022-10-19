import { PartialType } from '@nestjs/mapped-types';
import { CreateLocalInstrutorDto } from './create-local-instrutor.dto';

export class UpdateLocalInstrutorDto extends PartialType(CreateLocalInstrutorDto) {}
