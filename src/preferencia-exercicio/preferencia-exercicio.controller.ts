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
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { PreferenciaExercicioService } from './preferencia-exercicio.service';
import { CreatePreferenciaExercicioDto } from './dto/create-preferencia-exercicio.dto';
import { UpdatePreferenciaExercicioDto } from './dto/update-preferencia-exercicio.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard_Cliente } from 'src/auth/guards/cliente-auth.guard';

@ApiTags('preferencia-exercicio')
@Controller('preferencia-exercicio')
export class PreferenciaExercicioController {
  constructor(
    private readonly preferenciaExercicioService: PreferenciaExercicioService,
  ) {}

  @UseGuards(AuthGuard_Cliente)
  @Post('add-prefExercicio')
  create(@Body() createPreferenciaExercicioDto: CreatePreferenciaExercicioDto) {
    return this.preferenciaExercicioService.create(
      createPreferenciaExercicioDto,
    );
  }

  @Get('ver-prefExercicio')
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search: string,
  ) {
    return this.preferenciaExercicioService.findAll({ page, limit }, search);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.preferenciaExercicioService.findOne(id);
  }

  @UseGuards(AuthGuard_Cliente)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePreferenciaExercicioDto: UpdatePreferenciaExercicioDto,
  ) {
    return this.preferenciaExercicioService.update(
      id,
      updatePreferenciaExercicioDto,
    );
  }

  @UseGuards(AuthGuard_Cliente)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.preferenciaExercicioService.remove(id);
  }
}
