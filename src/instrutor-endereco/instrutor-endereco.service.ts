import { Injectable } from '@nestjs/common';
import { CreateInstrutorEnderecoDto } from './dto/create-instrutor-endereco.dto';
import { UpdateInstrutorEnderecoDto } from './dto/update-instrutor-endereco.dto';

@Injectable()
export class InstrutorEnderecoService {
  create(createInstrutorEnderecoDto: CreateInstrutorEnderecoDto) {
    return 'This action adds a new instrutorEndereco';
  }

  findAll() {
    return `This action returns all instrutorEndereco`;
  }

  findOne(id: number) {
    return `This action returns a #${id} instrutorEndereco`;
  }

  update(id: number, updateInstrutorEnderecoDto: UpdateInstrutorEnderecoDto) {
    return `This action updates a #${id} instrutorEndereco`;
  }

  remove(id: number) {
    return `This action removes a #${id} instrutorEndereco`;
  }
}
