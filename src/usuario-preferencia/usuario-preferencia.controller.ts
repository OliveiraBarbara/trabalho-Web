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
} from '@nestjs/common';
import { UsuarioPreferenciaService } from './usuario-preferencia.service';
import { CreateUsuarioPreferenciaDto } from './dto/create-usuario-preferencia.dto';
import { UpdateUsuarioPreferenciaDto } from './dto/update-usuario-preferencia.dto';

@Controller('usuario-preferencia')
export class UsuarioPreferenciaController {
  constructor(
    private readonly usuarioPreferenciaService: UsuarioPreferenciaService,
  ) {}

  @Post()
  create(@Body() createUsuarioPreferenciaDto: CreateUsuarioPreferenciaDto) {
    return this.usuarioPreferenciaService.create(createUsuarioPreferenciaDto);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search: string,
  ) {
    return this.usuarioPreferenciaService.findAll({ page, limit }, search);
  }

  @Get(':idUP')
  findOne(@Param('idUP') idUP: number) {
    return this.usuarioPreferenciaService.findOne(idUP);
  }

  @Patch(':idUP')
  update(
    @Param('idUP') idUP: number,
    @Body() updateUsuarioPreferenciaDto: UpdateUsuarioPreferenciaDto,
  ) {
    return this.usuarioPreferenciaService.update(
      idUP,
      updateUsuarioPreferenciaDto,
    );
  }

  @Delete(':idUP')
  remove(@Param('idUP') idUP: number) {
    return this.usuarioPreferenciaService.remove(idUP);
  }
}
