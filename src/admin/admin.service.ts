import { RecordNotFoundException } from '@exceptions';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Admin } from './entities/admin.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private repository: Repository<Admin>,
    @InjectRepository(Endereco)
    private enderecoRepository: Repository<Endereco>,
  ) {}

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const admin: Admin = this.repository.create(createAdminDto);
    admin.enderecos = [];
    createAdminDto.enderecos.forEach((endereco) => {
      admin.enderecos.push(this.enderecoRepository.create(endereco));
    });
    const { senha, ...result } = await this.repository.save(admin);

    return result as Admin;
  }

  findAll(
    options: IPaginationOptions,
    search: string,
  ): Promise<Pagination<Admin>> {
    const where: FindOptionsWhere<Admin> = {};

    if (search) {
      where.nome = ILike(`%${search}`);
    }

    return paginate<Admin>(this.repository, options, { where });
  }

  async findOne(id: number) {
    const admin = await this.repository.findOneBy({ id });

    if (!admin) {
      throw new RecordNotFoundException();
    }

    return admin;
  }

  async update(id: number, updateAdminDto: UpdateAdminDto): Promise<Admin> {
    const { enderecos, ...dadosUpdate } = updateAdminDto;
    await this.repository.update(id, dadosUpdate);

    const admin = await this.repository.findOneBy({ id });

    for (let index = 0; index < admin.enderecos.length; index++) {
      this.enderecoRepository.update(
        admin.enderecos[index].id,
        enderecos[index],
      );
    }

    if (!admin) {
      throw new RecordNotFoundException();
    }

    return admin;
  }

  async remove(id: number): Promise<boolean> {
    const admin = await this.repository.delete(id);

    if (!admin?.affected) {
      throw new RecordNotFoundException();
    }
    return true;
  }
}
