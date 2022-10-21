import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';
import { Cidade } from './entities/cidade.entity';
import { RecordNotFoundException } from '@exceptions';

@Injectable()
export class CidadeService {
  constructor(
    @InjectRepository(Cidade) private repository: Repository<Cidade>,
  ) {}

  create(createCidadeDto: CreateCidadeDto) {
    const cidade = this.repository.create(createCidadeDto);
    cidade.nome = createCidadeDto.nome;
    cidade.estado = createCidadeDto.estado;
    return this.repository.save(cidade);
  }

  findAll(
    options: IPaginationOptions,
    search?: string,
  ): Promise<Pagination<Cidade>> {
    const where: FindManyOptions<Cidade> = {};
    if (search) {
      where.where = [{ nome: ILike(`%${search}%`) }];
    }

    return paginate<Cidade>(this.repository, options, where);
  }

  async findOne(id: number): Promise<Cidade> {
    const cidade = await this.repository.findOneBy({ id });

    if (!cidade) {
      throw new RecordNotFoundException();
    }

    return cidade;
  }

  async update(id: number, updateCidadeDto: UpdateCidadeDto): Promise<Cidade> {
    await this.repository.update(id, updateCidadeDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const cidade = await this.repository.delete(id);

    if (!cidade?.affected) {
      throw new RecordNotFoundException();
    }

    return true;
  }
}
