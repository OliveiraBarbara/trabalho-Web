import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import { Endereco } from './entities/endereco.entity';
import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { RecordNotFoundException } from '@exceptions';

@Injectable()
export class EnderecosService {
  constructor(@InjectRepository(Endereco) private repository: Repository<Endereco>) {}

  create(createEnderecoDto: CreateEnderecoDto) {
    const endereco = this.repository.create(createEnderecoDto);
    endereco.rua = createEnderecoDto.rua;
    endereco.num = createEnderecoDto.num;
    endereco.bairro = createEnderecoDto.bairro;
    endereco.complemento = createEnderecoDto.complemento;
    endereco.cep = createEnderecoDto.cep;
    endereco.cidade = createEnderecoDto.cidade;
    endereco.estado = createEnderecoDto.estado;

    return this.repository.save(endereco);
  }

  findAll(options: IPaginationOptions, search?: string): Promise<Pagination<Endereco>> {
    const where: FindOptionsWhere<Endereco> = {};
    if(search){
      where.rua = ILike(`%${search}`);
    }

    return paginate<Endereco>(this.repository, options, {where});
  }

  async findOne(id: number) {
    const endereco = await this.repository.findOneBy({id});

    if(!endereco){
      throw new RecordNotFoundException();
    }

    return endereco;
  }

  async update(id: number, updateEnderecoDto: UpdateEnderecoDto): Promise<Endereco> {
    await this.repository.update(id, updateEnderecoDto);
    const endereco = await this.repository.findOneBy({id});

    if(!endereco){
      throw new RecordNotFoundException();
    }

    return endereco;
  }
  

  async remove(id: number): Promise<boolean> {
    const endereco = await this.repository.delete(id);

    if (!endereco?.affected) {
      throw new RecordNotFoundException();
    }

    return true;
  }
}
