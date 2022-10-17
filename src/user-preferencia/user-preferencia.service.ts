import { Injectable } from '@nestjs/common';
import { CreateUserPreferenciaDto } from './dto/create-user-preferencia.dto';
import { UpdateUserPreferenciaDto } from './dto/update-user-preferencia.dto';

@Injectable()
export class UserPreferenciaService {
  create(createUserPreferenciaDto: CreateUserPreferenciaDto) {
    return 'This action adds a new userPreferencia';
  }

  findAll() {
    return `This action returns all userPreferencia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userPreferencia`;
  }

  update(id: number, updateUserPreferenciaDto: UpdateUserPreferenciaDto) {
    return `This action updates a #${id} userPreferencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} userPreferencia`;
  }
}
