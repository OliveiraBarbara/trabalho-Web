import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { RecordNotFoundException } from '@exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { Repository, FindManyOptions, ILike } from 'typeorm';

@Injectable()
export class EnderecoService {
  constructor(
    @InjectRepository(Endereco) private repository: Repository<Endereco>,
  ) {}

  create(createEnderecoDto: CreateEnderecoDto) {
    const endereco = this.repository.create(createEnderecoDto);
    return this.repository.save(endereco);
  }

  findAll(
    options: IPaginationOptions,
    search?: string,
  ): Promise<Pagination<Endereco>> {
    const where: FindManyOptions<Endereco> = {};
    if (search) {
      where.where = [
        { rua: ILike(`%${search}%`) },
        { bairro: ILike(`%${search}`) },
        { cep: ILike(`%${search}`) },
      ];
    }

    return paginate<Endereco>(this.repository, options, where);
  }

  async findOne(id: number): Promise<Endereco> {
    const endereco = await this.repository.findOneBy({ id });

    if (!endereco) {
      throw new RecordNotFoundException();
    }

    return endereco;
  }

  update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    return `This action updates a #${id} endereco`;
  }

  async remove(id: number): Promise<boolean> {
    const end = await this.repository.delete(id);

    if (!end?.affected) {
      throw new RecordNotFoundException();
    }

    return true;
  }
}
