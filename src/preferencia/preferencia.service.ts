import { RecordNotFoundException } from '@exceptions';
import { Preferencia } from './entities/preferencia.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePreferenciaDto } from './dto/create-preferencia.dto';
import { UpdatePreferenciaDto } from './dto/update-preferencia.dto';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class PreferenciaService {

  constructor(@InjectRepository(Preferencia) private repository: Repository<Preferencia>){}

  create(createPreferenciaDto: CreatePreferenciaDto) {
    const prefencia = this.repository.create(createPreferenciaDto);
    prefencia.material = createPreferenciaDto.material;
    prefencia.periodo = createPreferenciaDto.periodo;

    return this.repository.save(prefencia);
  }

  findAll(options: IPaginationOptions, search?: string): Promise<Pagination<Preferencia>> {
    const where: FindOptionsWhere<Preferencia> = {};
    if(search){
      where.material = ILike(`%${search}`);
    }

    return paginate<Preferencia>(this.repository, options, {where});
  }

  async findOne(idPref: number): Promise<Preferencia>{
    const preferencia = await this.repository.findOneBy({idPref});

    if(!preferencia){
      throw new RecordNotFoundException();
    }

    return preferencia;
  }

  async update(idPref: number, updatePreferenciaDto: UpdatePreferenciaDto): Promise<Preferencia> {
    await this.repository.update(idPref, updatePreferenciaDto);
    const preferencia = await this.repository.findOneBy({idPref});
    if(!preferencia){
      throw new RecordNotFoundException();
    }

    return preferencia;
  }

  async remove(idPref: number) {
    const preferencia = await this.repository.delete({idPref});

    if(!preferencia?.affected){
      throw new RecordNotFoundException();
    }

    return true;
  }
}
