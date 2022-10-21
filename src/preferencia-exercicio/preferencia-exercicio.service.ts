import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { RecordNotFoundException } from '@exceptions/record-not-found.exception';
import { CreatePreferenciaExercicioDto } from './dto/create-preferencia-exercicio.dto';
import { UpdatePreferenciaExercicioDto } from './dto/update-preferencia-exercicio.dto';
import { PreferenciaExercicio } from './entities/preferencia-exercicio.entity';

@Injectable()
export class PreferenciaExercicioService {
  constructor(
    @InjectRepository(PreferenciaExercicio)
    private repository: Repository<PreferenciaExercicio>,
  ) {}

  create(
    createPreferenciaExercicioDto: CreatePreferenciaExercicioDto,
  ): Promise<PreferenciaExercicio> {
    const prefexec: PreferenciaExercicio = this.repository.create(
      createPreferenciaExercicioDto,
    );

    return this.repository.save(prefexec);
  }

  findAll(
    options: IPaginationOptions,
    search: string,
  ): Promise<Pagination<PreferenciaExercicio>> {
    const where: FindOptionsWhere<PreferenciaExercicio> = {};

    if (search) {
      where.intensidade = ILike(`%${search}`);
    }
    return paginate<PreferenciaExercicio>(this.repository, options, { where });
  }

  async findOne(idPE: number) {
    const prefexec = await this.repository.findOneBy({ idPE });

    if (!prefexec) {
      throw new RecordNotFoundException();
    }

    return prefexec;
  }

  async update(
    idPE: number,
    updatePreferenciaExercicioDto: UpdatePreferenciaExercicioDto,
  ): Promise<PreferenciaExercicio> {
    await this.repository.update(idPE, updatePreferenciaExercicioDto);
    const prefexec = await this.repository.findOneBy({ idPE });
    if (!prefexec) {
      throw new RecordNotFoundException();
    }
    return prefexec;
  }

  async remove(idPE: number): Promise<boolean> {
    const prefexec = await this.repository.delete(idPE);

    if (!prefexec?.affected) {
      throw new RecordNotFoundException();
    }

    return true;
  }
}
