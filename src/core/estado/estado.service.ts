import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { FindManyOptions, ILike, Repository } from 'typeorm';

import { UpdateEstadoDto } from './dto/update-estado.dto';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { Estado } from './entities/estado.entity';

@Injectable()
export class EstadosService {
  constructor(@InjectRepository(Estado) private repository: Repository<Estado>) {}

  create(createEstadoDto: CreateEstadoDto): Promise<Estado> {
    const estado = this.repository.create(createEstadoDto);
    estado.name = createEstadoDto.name;
    estado.sigla = createEstadoDto.sigla;
    estado.cidade = createEstadoDto.cidade;
    return this.repository.save(estado);
  }

  findAll(options: IPaginationOptions, search?: string): Promise<Pagination<Estado>> {
    const where: FindManyOptions<Estado> = {};
    if (search) {
      where.where = [{ name: ILike(`%${search}%`) }, { sigla: ILike(`%${search}%`) }];
    }

    return paginate<Estado>(this.repository, options, where);
  }

  async findOne(id: number): Promise<Estado> {
    const estado = await this.repository.findOneBy({ id });

    if (!estado) {
      throw new RecordNotFoundException();
    }

    return estado;
  }

  async update(id: number, updateEstadoDto: UpdateEstadoDto): Promise<Estado> {
    await this.repository.update(id, updateEstadoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const user = await this.repository.delete(id);

    if (!user?.affected) {
      throw new RecordNotFoundException();
    }

    return true;
  }
}