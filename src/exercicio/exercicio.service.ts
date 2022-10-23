import { RecordNotFoundException } from '@exceptions';
import {
  Pagination,
  IPaginationOptions,
  paginate,
} from 'nestjs-typeorm-paginate';
import { Exercicio } from './entities/exercicio.entity';
import { Injectable } from '@nestjs/common';
import { CreateExercicioDto } from './dto/create-exercicio.dto';
import { UpdateExercicioDto } from './dto/update-exercicio.dto';
import { Repository, ILike, FindManyOptions } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExercicioService {
  constructor(
    @InjectRepository(Exercicio) private repository: Repository<Exercicio>,
  ) {}

  create(createExercicioDto: CreateExercicioDto): Promise<Exercicio> {
    const exercicio = this.repository.create(createExercicioDto);
    return this.repository.save(exercicio);
  }

  findAll(
    options: IPaginationOptions,
    search?: string,
  ): Promise<Pagination<Exercicio>> {
    const where: FindManyOptions<Exercicio> = {};
    if (search) {
      where.where = [
        { tipo: ILike(`%${search}%`) },
        { tempoExec: ILike(`%${search}%`) },
      ];
    }
    return paginate<Exercicio>(this.repository, options, where);
  }

  async findOne(idExec: number): Promise<Exercicio> {
    const exercicio = await this.repository.findOneBy({ idExec });
    if (!exercicio) {
      throw new RecordNotFoundException();
    }
    return exercicio;
  }

  async update(
    idExec: number,
    updateExercicioDto: UpdateExercicioDto,
  ): Promise<Exercicio> {
    await this.repository.update(idExec, updateExercicioDto);
    const exercicio = await this.repository.findOneBy({ idExec });
    if (!exercicio) {
      throw new RecordNotFoundException();
    }

    return exercicio;
  }

  async remove(idExec: number): Promise<boolean> {
    const exercicio = await this.repository.delete(idExec);

    if (!exercicio?.affected) {
      throw new RecordNotFoundException();
    }

    return true;
  }
}
