/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, DefaultValuePipe, ParseIntPipe } from '@nestjs/common';
import { ExercicioService } from './exercicio.service';
import { CreateExercicioDto } from './dto/create-exercicio.dto';
import { UpdateExercicioDto } from './dto/update-exercicio.dto';

@Controller('exercicio')
export class ExercicioController {
  constructor(private readonly exercicioService: ExercicioService) {}

  @Post()
  create(@Body() createExercicioDto: CreateExercicioDto) {
    return this.exercicioService.create(createExercicioDto);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search: string,
  ) {
    return this.exercicioService.findAll({ page, limit }, search);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) idExec: number) {
    return this.exercicioService.findOne(idExec);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) idExec: number, @Body() updateExercicioDto: UpdateExercicioDto) {
    return this.exercicioService.update(idExec, updateExercicioDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) idExec: number) {
    return this.exercicioService.remove(idExec);
  }
}
