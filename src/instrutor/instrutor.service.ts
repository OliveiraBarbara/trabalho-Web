import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Instrutor } from './entities/instrutor.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInstrutorDto } from './dto/create-instrutor.dto';
import { UpdateInstrutorDto } from './dto/update-instrutor.dto';
import { FindOptionsWhere, Repository, ILike } from 'typeorm';
import { RecordNotFoundException } from '@exceptions';

@Injectable()
export class InstrutorService {
  enderecoRepository: any;
  
  constructor(@InjectRepository(Instrutor) private repository: Repository<Instrutor>){}

  create(createInstrutorDto: CreateInstrutorDto): Promise<Instrutor> {
    const instrutor = this.repository.create(createInstrutorDto);
    instrutor.nome = createInstrutorDto.nome;
    instrutor.cref = createInstrutorDto.cref;
    instrutor.telefone = createInstrutorDto.telefone;
    instrutor.enderecos = [];
    createInstrutorDto.enderecos?.forEach((endereco) => {
      instrutor.enderecos.push(this.enderecoRepository.create(endereco));
    });
    
    return this.repository.save(instrutor);
  }

  findAll(options: IPaginationOptions, search: string): Promise<Pagination<Instrutor>> {
    const where: FindOptionsWhere<Instrutor> = {};

    if(search){
      where.nome= ILike(`%${search}`);
    }

    return paginate<Instrutor>(this.repository, options, {where});
  }

  async findOne(cref: number) {
    const instrutor = await this.repository.findOneBy({cref});

    if(!instrutor){
      throw new RecordNotFoundException();
    }

    return instrutor;
  }

  async update(cref: number, updateInstrutorDto: UpdateInstrutorDto): Promise<Instrutor> {
    await this.repository.update(cref, updateInstrutorDto);
    const instrutor = await this.repository.findOneBy({cref});
    if(!instrutor){
      throw new RecordNotFoundException();
    }

    return instrutor;
  }

  async remove(cref: number): Promise<boolean> {
    const instrutor = await this.repository.delete(cref);

    if (!instrutor?.affected) {
      throw new RecordNotFoundException();
    }

    return true;
  }
}
