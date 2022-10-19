import { InstrutorEndereco } from './entities/instrutor-endereco.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInstrutorEnderecoDto } from './dto/create-instrutor-endereco.dto';
import { UpdateInstrutorEnderecoDto } from './dto/update-instrutor-endereco.dto';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { RecordNotFoundException } from '@exceptions/record-not-found.exception';

@Injectable()
export class InstrutorEnderecoService {
  constructor(
    @InjectRepository(InstrutorEndereco)
    private repository: Repository<InstrutorEndereco>,
  ) {}

  create(
    createInstrutorEnderecoDto: CreateInstrutorEnderecoDto,
  ): Promise<InstrutorEndereco> {
    const instend: InstrutorEndereco = this.repository.create(
      createInstrutorEnderecoDto,
    );
    instend.tipo = createInstrutorEnderecoDto.tipo;

    return this.repository.save(instend);
  }

  findAll(
    options: IPaginationOptions,
    search: string,
  ): Promise<Pagination<InstrutorEndereco>> {
    const where: FindOptionsWhere<InstrutorEndereco> = {};

    if (search) {
      where.tipo = ILike(`%${search}`);
    }

    return paginate<InstrutorEndereco>(this.repository, options, { where });
  }

  async findOne(idIE: number) {
    const instend = await this.repository.findOneBy({ idIE });

    if (!instend) {
      throw new RecordNotFoundException();
    }

    return instend;
  }

  async update(
    idIE: number,
    updateInstrutorEnderecoDto: UpdateInstrutorEnderecoDto,
  ): Promise<InstrutorEndereco> {
    await this.repository.update(idIE, updateInstrutorEnderecoDto);
    const instend = await this.repository.findOneBy({ idIE });
    if (!instend) {
      throw new RecordNotFoundException();
    }

    return instend;
  }

  async remove(idIE: number): Promise<boolean> {
    const instend = await this.repository.delete(idIE);

    if (!instend?.affected) {
      throw new RecordNotFoundException();
    }

    return true;
  }
}
