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
import { EstadoService } from './estado.service';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard_Admin } from 'src/auth/guards/admin-auth.guard';

@ApiTags('estado')
@Controller('estado/')
export class EstadoController {
  constructor(private readonly estadoService: EstadoService) {}

  //@UseGuards(AuthGuard_Admin)
  @Post('add-estado')
  create(@Body() createEstadoDto: CreateEstadoDto) {
    return this.estadoService.create(createEstadoDto);
  }

  @Get('ver-estado')
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search: string,
  ) {
    return this.estadoService.findAll({ page, limit }, search);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.estadoService.findOne(id);
  }

  //@UseGuards(AuthGuard_Admin)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEstadoDto: UpdateEstadoDto,
  ) {
    return this.estadoService.update(id, updateEstadoDto);
  }

  @UseGuards(AuthGuard_Admin)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.estadoService.remove(id);
  }
}
