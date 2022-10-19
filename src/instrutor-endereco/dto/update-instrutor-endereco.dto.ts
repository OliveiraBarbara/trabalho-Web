import { PartialType } from '@nestjs/mapped-types';
import { CreateInstrutorEnderecoDto } from './create-instrutor-endereco.dto';

export class UpdateInstrutorEnderecoDto extends PartialType(CreateInstrutorEnderecoDto) {}
