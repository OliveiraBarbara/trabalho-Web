import { CreatePreferenciaDto } from './../preferencia/dto/create-preferencia.dto';
import { Preferencia } from 'src/preferencia/entities/preferencia.entity';
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
import { Repository, FindOptionsWhere, ILike, FindManyOptions } from 'typeorm';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente) private repository: Repository<Cliente>,
    @InjectRepository(Endereco)
    private enderecoRepository: Repository<Endereco>,
    @InjectRepository(Preferencia)
    private preferenciaRepository: Repository<Preferencia>,
  ) {}

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const cliente: Cliente = this.repository.create(createClienteDto);
    cliente.enderecos = [];
    createClienteDto.enderecos?.forEach((endereco) => {
      cliente.enderecos.push(this.enderecoRepository.create(endereco));
    });
    cliente.preferencias = [];
    createClienteDto.preferencias?.forEach((preferencia) => {
      cliente.preferencias.push(this.preferenciaRepository.create(preferencia));
    });
    const { senha, ...result } = await this.repository.save(cliente);

    return result as Cliente;
  }

  async createPref(
    cliente: Cliente,
    preferencia: CreatePreferenciaDto,
  ): Promise<Cliente> {
    cliente.preferencias.push(this.preferenciaRepository.create(preferencia));

    return await this.repository.save(cliente);
  }

  findAll(
    options: IPaginationOptions,
    search: string,
  ): Promise<Pagination<Cliente>> {
    const where: FindManyOptions<Cliente> = {};

    if (search) {
      where.where = [
        { nome: ILike(`%${search}`) },
        { cpf: ILike(`%${search}`) },
      ];
    }

    return paginate<Cliente>(this.repository, options, where);
  }

  async findOne(id: number) {
    const cliente = await this.repository.findOneBy({ id });

    if (!cliente) {
      throw new RecordNotFoundException();
    }

    return cliente;
  }

  async update(
    id: number,
    updateClienteDto: UpdateClienteDto,
  ): Promise<Cliente> {
    const { enderecos, preferencias, ...dadosUpdate } = updateClienteDto;
    await this.repository.update(id, dadosUpdate);

    const cliente = await this.repository.findOneBy({ id });

    for (let index = 0; index < cliente.enderecos.length; index++) {
      this.enderecoRepository.update(
        cliente.enderecos[index].id,
        enderecos[index],
      );
    }

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
