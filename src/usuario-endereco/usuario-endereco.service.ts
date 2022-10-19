import { UsuarioEndereco } from './entities/usuario-endereco.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsuarioEnderecoDto } from './dto/create-usuario-endereco.dto';
import { UpdateUsuarioEnderecoDto } from './dto/update-usuario-endereco.dto';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { RecordNotFoundException } from '@exceptions/record-not-found.exception';

@Injectable()
export class UsuarioEnderecoService {
  constructor(
    @InjectRepository(UsuarioEndereco)
    private repository: Repository<UsuarioEndereco>,
  ) {}

  create(
    createUsuarioEnderecoDto: CreateUsuarioEnderecoDto,
  ): Promise<UsuarioEndereco> {
    const usuend: UsuarioEndereco = this.repository.create(
      createUsuarioEnderecoDto,
    );
    usuend.tipo = createUsuarioEnderecoDto.tipo;

    return this.repository.save(usuend);
  }

  findAll(
    options: IPaginationOptions,
    search: string,
  ): Promise<Pagination<UsuarioEndereco>> {
    const where: FindOptionsWhere<UsuarioEndereco> = {};

    if (search) {
      where.tipo = ILike(`%${search}`);
    }

    return paginate<UsuarioEndereco>(this.repository, options, { where });
  }

  async findOne(idUE: number) {
    const usuend = await this.repository.findOneBy({ idUE });

    if (!usuend) {
      throw new RecordNotFoundException();
    }

    return usuend;
  }

  async update(
    idUE: number,
    updateUsuarioEnderecoDto: UpdateUsuarioEnderecoDto,
  ): Promise<UsuarioEndereco> {
    await this.repository.update(idUE, updateUsuarioEnderecoDto);
    const usuend = await this.repository.findOneBy({ idUE });
    if (!usuend) {
      throw new RecordNotFoundException();
    }

    return usuend;
  }

  async remove(idUE: number): Promise<boolean> {
    const usuend = await this.repository.delete(idUE);

    if (!usuend?.affected) {
      throw new RecordNotFoundException();
    }

    return true;
  }
}
