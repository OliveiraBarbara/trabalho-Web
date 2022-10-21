import { LocalTreinamentoService } from './../local-treinamento/local-treinamento.service';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { RecordNotFoundException } from '@exceptions';
import { Instrutor } from './entities/instrutor.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { CreateInstrutorDto } from './dto/create-instrutor.dto';
import { UpdateInstrutorDto } from './dto/update-instrutor.dto';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { ExercicioService } from 'src/exercicio/exercicio.service';

@Injectable()
export class InstrutorService {
  constructor(
    @InjectRepository(Instrutor) private repository: Repository<Instrutor>,
    @InjectRepository(Endereco)
    private enderecoRepository: Repository<Endereco>,
    private readonly localtreinamentoService: LocalTreinamentoService,
    private readonly exercicioService: ExercicioService,
  ) {}

  async create(createInstrutorDto: CreateInstrutorDto): Promise<Instrutor> {
    const instrutor: Instrutor = this.repository.create(createInstrutorDto);
    instrutor.enderecos = [];
    createInstrutorDto.enderecos?.forEach((endereco) => {
      instrutor.enderecos.push(this.enderecoRepository.create(endereco));
    });
    instrutor.exercicios = [];
    createInstrutorDto.exercicios?.forEach(async (exercicio) => {
      instrutor.exercicios.push(
        await this.exercicioService.findOne(exercicio.idExec),
      );
    });
    instrutor.academias = [];
    createInstrutorDto.academias?.forEach(async (academia) => {
      instrutor.academias.push(
        await this.localtreinamentoService.findOne(academia.idLocal),
      );
    });

    const { senha, ...result } = await this.repository.save(instrutor);

    return result as Instrutor;
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

  async findOne(id: number) {
    const instrutor = await this.repository.findOneBy({ id });

    if (!instrutor) {
      throw new RecordNotFoundException();
    }

    return instrutor;
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
