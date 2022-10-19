/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateInstrutorDto } from './dto/create-instrutor.dto';
import { UpdateInstrutorDto } from './dto/update-instrutor.dto';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { RecordNotFoundException } from '@exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Instrutor } from './entities/instrutor.entity';

@Injectable()
export class InstrutorService {
  constructor(
    @InjectRepository(Instrutor) private repository: Repository<Instrutor>,
  ) {}

  async create(createInstrutorDto: CreateInstrutorDto): Promise<Instrutor> {
    const instrutor = this.repository.create(createInstrutorDto);
    const { senha, ...result } = await this.repository.save(instrutor);

    return result as Instrutor;
  }

  findAll(
    options: IPaginationOptions,
    search?: string,
  ): Promise<Pagination<Instrutor>> {
    const where: FindOptionsWhere<Instrutor> = {};
    if (search) {
      where.nome = ILike(`%${search}`);
    }

    return paginate<Instrutor>(this.repository, options, { where });
  }

  async findOne(id: number): Promise<Instrutor> {
    const instrutor = await this.repository.findOneBy({ id });

    if (!instrutor) {
      throw new RecordNotFoundException();
    }

    return instrutor;
  }

  async findByEmail(
    email: string,
    includePassword: boolean = false,
  ): Promise<Instrutor> {
    const instrutor = await this.repository
      .createQueryBuilder('instrutor')
      .addSelect('instrutor.senha')
      .where('usuario.email = :email', { email })
      .getOne();

    if (includePassword) {
      return instrutor;
    } else {
      const { senha, ...result } = instrutor;
      return result as Instrutor;
    }
  }

  async update(
    id: number,
    updateInstrutorDto: UpdateInstrutorDto,
  ): Promise<Instrutor> {
    await this.repository.update(id, updateInstrutorDto);
    const instrutor = await this.repository.findOneBy({ id });

    if (!instrutor) {
      throw new RecordNotFoundException();
    }

    return instrutor;
  }

  async remove(id: number) {
    const instrutor = await this.repository.delete(id);

    if (!instrutor?.affected) {
      throw new RecordNotFoundException();
    }

    return true;
  }
}
