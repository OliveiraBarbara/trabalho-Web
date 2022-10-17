import { Injectable } from '@nestjs/common';
import { CreateLocalTreinamentoDto } from './dto/create-local-treinamento.dto';
import { UpdateLocalTreinamentoDto } from './dto/update-local-treinamento.dto';

@Injectable()
export class LocalTreinamentoService {
  create(createLocalTreinamentoDto: CreateLocalTreinamentoDto) {
    return 'This action adds a new localTreinamento';
  }

  findAll() {
    return `This action returns all localTreinamento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} localTreinamento`;
  }

  update(id: number, updateLocalTreinamentoDto: UpdateLocalTreinamentoDto) {
    return `This action updates a #${id} localTreinamento`;
  }

  remove(id: number) {
    return `This action removes a #${id} localTreinamento`;
  }
}
