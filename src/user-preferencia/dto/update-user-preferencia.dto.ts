import { PartialType } from '@nestjs/mapped-types';
import { CreateUserPreferenciaDto } from './create-user-preferencia.dto';

export class UpdateUserPreferenciaDto extends PartialType(CreateUserPreferenciaDto) {}
