import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PreferenciaExercicioService } from './preferencia-exercicio.service';
import { CreatePreferenciaExercicioDto } from './dto/create-preferencia-exercicio.dto';
import { UpdatePreferenciaExercicioDto } from './dto/update-preferencia-exercicio.dto';

@Controller('preferencia-exercicio')
export class PreferenciaExercicioController {
  constructor(private readonly preferenciaExercicioService: PreferenciaExercicioService) {}

  @Post()
  create(@Body() createPreferenciaExercicioDto: CreatePreferenciaExercicioDto) {
    return this.preferenciaExercicioService.create(createPreferenciaExercicioDto);
  }

  @Get()
  findAll() {
    return this.preferenciaExercicioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.preferenciaExercicioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePreferenciaExercicioDto: UpdatePreferenciaExercicioDto) {
    return this.preferenciaExercicioService.update(+id, updatePreferenciaExercicioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.preferenciaExercicioService.remove(+id);
  }
}
