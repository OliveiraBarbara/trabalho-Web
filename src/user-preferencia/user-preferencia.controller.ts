import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserPreferenciaService } from './user-preferencia.service';
import { CreateUserPreferenciaDto } from './dto/create-user-preferencia.dto';
import { UpdateUserPreferenciaDto } from './dto/update-user-preferencia.dto';

@Controller('user-preferencia')
export class UserPreferenciaController {
  constructor(private readonly userPreferenciaService: UserPreferenciaService) {}

  @Post()
  create(@Body() createUserPreferenciaDto: CreateUserPreferenciaDto) {
    return this.userPreferenciaService.create(createUserPreferenciaDto);
  }

  @Get()
  findAll() {
    return this.userPreferenciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userPreferenciaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserPreferenciaDto: UpdateUserPreferenciaDto) {
    return this.userPreferenciaService.update(+id, updateUserPreferenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userPreferenciaService.remove(+id);
  }
}
