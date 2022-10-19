import { UsuarioPreferencia } from './entities/usuario-preferencia.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsuarioPreferenciaDto } from './dto/create-usuario-preferencia.dto';
import { UpdateUsuarioPreferenciaDto } from './dto/update-usuario-preferencia.dto';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { RecordNotFoundException } from '@exceptions/record-not-found.exception';

@Injectable()
export class UsuarioPreferenciaService {
  constructor(
    @InjectRepository(UsuarioPreferencia)
    private repository: Repository<UsuarioPreferencia>,
  ) {}

  create(
    createUsuarioPreferenciaDto: CreateUsuarioPreferenciaDto,
  ): Promise<UsuarioPreferencia> {
    const usupref: UsuarioPreferencia = this.repository.create(
      createUsuarioPreferenciaDto,
    );
    usupref.qtdPessoas = createUsuarioPreferenciaDto.qtdPessoas;
    usupref.modo = createUsuarioPreferenciaDto.modo;

    return this.repository.save(usupref);
  }

  findAll(
    options: IPaginationOptions,
    search: string,
  ): Promise<Pagination<UsuarioPreferencia>> {
    const where: FindOptionsWhere<UsuarioPreferencia> = {};

    if (search) {
      where.modo = ILike(`%${search}`);
    }

    return paginate<UsuarioPreferencia>(this.repository, options, { where });
  }

  async findOne(idUP: number) {
    const usupref = await this.repository.findOneBy({ idUP });

    if (!usupref) {
      throw new RecordNotFoundException();
    }

    return usupref;
  }

  async update(
    idUP: number,
    updateUsuarioPreferenciaDto: UpdateUsuarioPreferenciaDto,
  ): Promise<UsuarioPreferencia> {
    await this.repository.update(idUP, updateUsuarioPreferenciaDto);
    const usupref = await this.repository.findOneBy({ idUP });
    if (!usupref) {
      throw new RecordNotFoundException();
    }

    return usupref;
  }

  async remove(idUP: number): Promise<boolean> {
    const usupref = await this.repository.delete(idUP);

    if (!usupref?.affected) {
      throw new RecordNotFoundException();
    }

    return true;
  }
}
