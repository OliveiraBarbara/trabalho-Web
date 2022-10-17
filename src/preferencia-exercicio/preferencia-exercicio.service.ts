import { Injectable } from '@nestjs/common';
import { CreatePreferenciaExercicioDto } from './dto/create-preferencia-exercicio.dto';
import { UpdatePreferenciaExercicioDto } from './dto/update-preferencia-exercicio.dto';

@Injectable()
export class PreferenciaExercicioService {
  create(createPreferenciaExercicioDto: CreatePreferenciaExercicioDto) {
    return 'This action adds a new preferenciaExercicio';
  }

  findAll() {
    return `This action returns all preferenciaExercicio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} preferenciaExercicio`;
  }

  update(id: number, updatePreferenciaExercicioDto: UpdatePreferenciaExercicioDto) {
    return `This action updates a #${id} preferenciaExercicio`;
  }

  remove(id: number) {
    return `This action removes a #${id} preferenciaExercicio`;
  }
}
