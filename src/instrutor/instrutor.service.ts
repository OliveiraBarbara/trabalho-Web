import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Instrutor } from './entities/instrutor.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInstrutorDto } from './dto/create-instrutor.dto';
import { UpdateInstrutorDto } from './dto/update-instrutor.dto';
import { FindOptionsWhere, Repository, ILike } from 'typeorm';
import { RecordNotFoundException } from '@exceptions';
import { Endereco } from 'src/endereco/entities/endereco.entity';

@Injectable()
export class InstrutorService {  
  constructor(
    @InjectRepository(Instrutor) private repository: Repository<Instrutor>,
    @InjectRepository(Endereco) private enderecoRepository: Repository<Endereco>
  ){}

  create(createInstrutorDto: CreateInstrutorDto): Promise<Instrutor> {
    const instrutor: Instrutor = this.repository.create(createInstrutorDto);
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

  async findOne(id: number) {
    const instrutor = await this.repository.findOneBy({id});

    if(!instrutor){
      throw new RecordNotFoundException();
    }

    return instrutor;
  }

  async update(id: number, updateInstrutorDto: UpdateInstrutorDto): Promise<Instrutor> {
    await this.repository.update(id, updateInstrutorDto);
    const instrutor = await this.repository.findOneBy({id});
    if(!instrutor){
      throw new RecordNotFoundException();
    }

    return instrutor;
  }

  async remove(id: number): Promise<boolean> {
    const instrutor = await this.repository.delete(id);

    if (!instrutor?.affected) {
      throw new RecordNotFoundException();
    }

    return true;
  }
}
