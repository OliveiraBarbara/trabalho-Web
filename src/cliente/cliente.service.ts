/* eslint-disable @typescript-eslint/no-unused-vars */
import { RecordNotFoundException } from '@exceptions';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente) private repository: Repository<Cliente>,
    @InjectRepository(Endereco)
    private enderecoRepository: Repository<Endereco>,
  ) {}

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const cliente: Cliente = this.repository.create(createClienteDto);
    cliente.enderecos = [];
    createClienteDto.enderecos?.forEach((endereco) => {
      cliente.enderecos.push(this.enderecoRepository.create(endereco));
    });
    const { senha, ...result } = await this.repository.save(cliente);

    return result as Cliente;
  }

  findAll(
    options: IPaginationOptions,
    search: string,
  ): Promise<Pagination<Cliente>> {
    const where: FindOptionsWhere<Cliente> = {};

    if (search) {
      where.nome = ILike(`%${search}`);
    }

    return paginate<Cliente>(this.repository, options, { where });
  }

  async findOne(id: number) {
    const cliente = await this.repository.findOneBy({ id });

    if (!cliente) {
      throw new RecordNotFoundException();
    }

    return cliente;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    await this.repository.update(id, updateClienteDto);
    const cliente = await this.repository.findOneBy({ id });

    if (!cliente) {
      throw new RecordNotFoundException();
    }

    return cliente;
  }

  async remove(id: number): Promise<boolean> {
    const cliente = await this.repository.delete(id);

    if (!cliente?.affected) {
      throw new RecordNotFoundException();
    }

    return true;
  }
}
