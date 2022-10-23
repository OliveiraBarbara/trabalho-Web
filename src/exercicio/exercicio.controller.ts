/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ExercicioService } from './exercicio.service';
import { CreateExercicioDto } from './dto/create-exercicio.dto';
import { UpdateExercicioDto } from './dto/update-exercicio.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard_Intrutor } from 'src/auth/guards/instrutor-auth.guard';

@ApiTags('exercicio')
@Controller('exercicio/')
export class ExercicioController {
  constructor(private readonly exercicioService: ExercicioService) {}

  @UseGuards(AuthGuard_Intrutor)
  @Post('add-exercicio')
  create(@Body() createExercicioDto: CreateExercicioDto) {
    return this.exercicioService.create(createExercicioDto);
  }

  @Get('ver-exercicio')
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

  @UseGuards(AuthGuard_Intrutor)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) idExec: number,
    @Body() updateExercicioDto: UpdateExercicioDto,
  ) {
    return this.exercicioService.update(idExec, updateExercicioDto);
  }

  @UseGuards(AuthGuard_Intrutor)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) idExec: number) {
    return this.exercicioService.remove(idExec);
  }
}
