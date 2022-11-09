import { CreatePreferenciaDto } from './../preferencia/dto/create-preferencia.dto';
import { Cliente } from './entities/cliente.entity';
/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  DefaultValuePipe,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/shared/decorators';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@ApiTags('cliente')
@Controller('cliente/')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post('add-cliente')
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }

  @Post('add-pref')
  createPref(
    @CurrentUser() cliente: Cliente,
    @Body() preferencia: CreatePreferenciaDto,
  ) {
    return this.clienteService.createPref(cliente, preferencia);
  }

  @Get('ver-cliente')
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search: string,
  ) {
    return this.clienteService.findAll({ page, limit }, search);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.clienteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(id, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.clienteService.remove(id);
  }
}
