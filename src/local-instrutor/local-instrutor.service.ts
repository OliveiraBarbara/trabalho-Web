import { Injectable } from '@nestjs/common';
import { CreateLocalInstrutorDto } from './dto/create-local-instrutor.dto';
import { UpdateLocalInstrutorDto } from './dto/update-local-instrutor.dto';

@Injectable()
export class LocalInstrutorService {
  create(createLocalInstrutorDto: CreateLocalInstrutorDto) {
    return 'This action adds a new localInstrutor';
  }

  findAll() {
    return `This action returns all localInstrutor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} localInstrutor`;
  }

  update(id: number, updateLocalInstrutorDto: UpdateLocalInstrutorDto) {
    return `This action updates a #${id} localInstrutor`;
  }

  remove(id: number) {
    return `This action removes a #${id} localInstrutor`;
  }
}
