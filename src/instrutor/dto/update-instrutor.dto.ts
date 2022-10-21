import { PartialType } from '@nestjs/swagger';
import { CreateInstrutorDto } from './create-instrutor.dto';

export class UpdateInstrutorDto extends PartialType(CreateInstrutorDto) {}
