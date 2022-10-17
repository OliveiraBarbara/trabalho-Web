import { PartialType } from '@nestjs/mapped-types';
import { CreateLocalTreinamentoDto } from './create-local-treinamento.dto';

export class UpdateLocalTreinamentoDto extends PartialType(CreateLocalTreinamentoDto) {}
