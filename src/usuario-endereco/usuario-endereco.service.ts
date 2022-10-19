import { Injectable } from '@nestjs/common';
import { CreateUsuarioEnderecoDto } from './dto/create-usuario-endereco.dto';
import { UpdateUsuarioEnderecoDto } from './dto/update-usuario-endereco.dto';

@Injectable()
export class UsuarioEnderecoService {
  create(createUsuarioEnderecoDto: CreateUsuarioEnderecoDto) {
    return 'This action adds a new usuarioEndereco';
  }

  findAll() {
    return `This action returns all usuarioEndereco`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuarioEndereco`;
  }

  update(id: number, updateUsuarioEnderecoDto: UpdateUsuarioEnderecoDto) {
    return `This action updates a #${id} usuarioEndereco`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuarioEndereco`;
  }
}
