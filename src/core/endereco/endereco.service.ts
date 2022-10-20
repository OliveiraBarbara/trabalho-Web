import { Repository } from 'typeorm';
import { Endereco } from './entities/endereco.entity';
import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  //paginate,
  //Pagination,
} from 'nestjs-typeorm-paginate';
import { RecordNotFoundException } from '@exceptions';

@Injectable()
export class EnderecosService {
  constructor(
    @InjectRepository(Endereco) private repository: Repository<Endereco>,
  ) {}

  create(createEnderecoDto: CreateEnderecoDto) {
    return 'This action adds a new address';
  }

  findAll(options: IPaginationOptions, search?: string) {
    return `This action returns all addresses`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    return `This action updates a #${id} address`;
  }

  async remove(id: number): Promise<boolean> {
    const endereco = await this.repository.delete(id);

    if (!endereco?.affected) {
      throw new RecordNotFoundException();
    }

    return true;
  }
}
