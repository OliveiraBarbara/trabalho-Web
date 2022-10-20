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
} from '@nestjs/common';
import { UsuarioEnderecoService } from './usuario-endereco.service';
import { CreateUsuarioEnderecoDto } from './dto/create-usuario-endereco.dto';
import { UpdateUsuarioEnderecoDto } from './dto/update-usuario-endereco.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('usuario-endereco')
@Controller('usuario-endereco')
export class UsuarioEnderecoController {
  constructor(
    private readonly usuarioEnderecoService: UsuarioEnderecoService,
  ) {}

  @Post()
  create(@Body() createUsuarioEnderecoDto: CreateUsuarioEnderecoDto) {
    return this.usuarioEnderecoService.create(createUsuarioEnderecoDto);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search: string,
  ) {
    return this.usuarioEnderecoService.findAll({ page, limit }, search);
  }

  @Get(':idUE')
  findOne(@Param('idUE') idUE: number) {
    return this.usuarioEnderecoService.findOne(idUE);
  }

  @Patch(':idUE')
  update(
    @Param('idUE') idUE: number,
    @Body() updateUsuarioEnderecoDto: UpdateUsuarioEnderecoDto,
  ) {
    return this.usuarioEnderecoService.update(idUE, updateUsuarioEnderecoDto);
  }

  @Delete(':idUE')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('idUE', ParseIntPipe) idUE: number) {
    return this.usuarioEnderecoService.remove(idUE);
  }
}
