import { PartialType } from '@nestjs/mapped-types';
import { CreatePreferenciaExercicioDto } from './create-preferencia-exercicio.dto';

export class UpdatePreferenciaExercicioDto extends PartialType(CreatePreferenciaExercicioDto) {}
