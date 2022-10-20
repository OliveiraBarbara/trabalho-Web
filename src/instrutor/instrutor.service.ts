/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { Instrutor } from './entities/instrutor.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInstrutorDto } from './dto/create-instrutor.dto';
import { UpdateInstrutorDto } from './dto/update-instrutor.dto';
import { FindOptionsWhere, Repository, ILike } from 'typeorm';
import { RecordNotFoundException } from '@exceptions';
import { Endereco } from 'src/core/endereco/entities/endereco.entity';

@Injectable()
export class InstrutorService {
  constructor(
    @InjectRepository(Instrutor) private repository: Repository<Instrutor>,
    @InjectRepository(Endereco)
    private enderecoRepository: Repository<Endereco>,
  ) {}

  async create(createInstrutorDto: CreateInstrutorDto): Promise<Instrutor> {
    const instrutor: Instrutor = this.repository.create(createInstrutorDto);
    instrutor.nome = createInstrutorDto.nome;
    instrutor.cref = createInstrutorDto.cref;
    instrutor.telefone = createInstrutorDto.telefone;
    instrutor.email = createInstrutorDto.email;
    const { senha, ...result } = await this.repository.save(instrutor);
    instrutor.enderecos = [];
    createInstrutorDto.enderecos?.forEach((endereco) => {
      instrutor.enderecos.push(this.enderecoRepository.create(endereco));
    });
    return this.repository.save(instrutor);
  }

  findAll(
    options: IPaginationOptions,
    search: string,
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

  async remove(id: number): Promise<boolean> {
    const instrutor = await this.repository.delete(id);

    if (!instrutor?.affected) {
      throw new RecordNotFoundException();
    }

    return true;
  }
}
