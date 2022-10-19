/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';

import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario) private repository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuario = this.repository.create(createUsuarioDto);
    const { senha, ...result } = await this.repository.save(usuario);
    return result as Usuario;
  }

  findAll(
    options: IPaginationOptions,
    search?: string,
  ): Promise<Pagination<Usuario>> {
    const where: FindOptionsWhere<Usuario> = {};
    if (search) {
      where.nome = ILike(`%${search}%`);
    }

    return paginate<Usuario>(this.repository, options, { where });
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.repository.findOneBy({ id });

    if (!usuario) {
      throw new RecordNotFoundException();
    }

    return usuario;
  }

  async findByEmail(
    email: string,
    includePassowrd: boolean = false,
  ): Promise<Usuario> {
    const usuario = await this.repository
      .createQueryBuilder('usuario')
      .addSelect('usuario.password')
      .where('usuario.email = :email', { email })
      .getOne();

    if (includePassowrd) {
      return usuario;
    } else {
      const { senha, ...result } = usuario;
      return result as Usuario;
    }
  }

  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    await this.repository.update(id, updateUsuarioDto);
    const usuario = await this.repository.findOneBy({ id });
    if (!usuario) {
      throw new RecordNotFoundException();
    }

    return usuario;
  }

  async remove(id: number) {
    const usuario = await this.repository.delete(id);

    if (!usuario?.affected) {
      throw new RecordNotFoundException();
    }

    return true;
  }
}
