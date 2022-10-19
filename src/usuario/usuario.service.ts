import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { RecordNotFoundException } from '@exceptions';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario) private repository: Repository<Usuario>,
    @InjectRepository(Endereco)
    private enderecoRepository: Repository<Endereco>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuario: Usuario = this.repository.create(createUsuarioDto);
    usuario.nome = createUsuarioDto.nome;
    usuario.cpf = createUsuarioDto.cpf;
    usuario.telefone = createUsuarioDto.telefone;
    usuario.enderecos = [];
    createUsuarioDto.enderecos?.forEach((endereco) => {
      usuario.enderecos.push(this.enderecoRepository.create(endereco));
    });
    return this.repository.save(usuario);
  }

  findAll(
    options: IPaginationOptions,
    search: string,
  ): Promise<Pagination<Usuario>> {
    const where: FindOptionsWhere<Usuario> = {};

    if (search) {
      where.nome = ILike(`%${search}`);
    }

    return paginate<Usuario>(this.repository, options, { where });
  }

  async findOne(idUsuario: number) {
    const usuario = await this.repository.findOneBy({ idUsuario });

    if (!usuario) {
      throw new RecordNotFoundException();
    }

    return usuario;
  }

  async update(
    idUsuario: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    await this.repository.update(idUsuario, updateUsuarioDto);
    const usuario = await this.repository.findOneBy({ idUsuario });
    if (!usuario) {
      throw new RecordNotFoundException();
    }

    return usuario;
  }

  async remove(idUsuario: number): Promise<boolean> {
    const usuario = await this.repository.delete(idUsuario);

    if (!usuario?.affected) {
      throw new RecordNotFoundException();
    }

    return true;
  }
}
