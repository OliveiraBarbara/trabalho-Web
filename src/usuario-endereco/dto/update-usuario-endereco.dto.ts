import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioEnderecoDto } from './create-usuario-endereco.dto';

export class UpdateUsuarioEnderecoDto extends PartialType(CreateUsuarioEnderecoDto) {}
