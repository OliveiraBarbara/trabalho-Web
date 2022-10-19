import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioEnderecoService } from './usuario-endereco.service';
import { CreateUsuarioEnderecoDto } from './dto/create-usuario-endereco.dto';
import { UpdateUsuarioEnderecoDto } from './dto/update-usuario-endereco.dto';

@Controller('usuario-endereco')
export class UsuarioEnderecoController {
  constructor(private readonly usuarioEnderecoService: UsuarioEnderecoService) {}

  @Post()
  create(@Body() createUsuarioEnderecoDto: CreateUsuarioEnderecoDto) {
    return this.usuarioEnderecoService.create(createUsuarioEnderecoDto);
  }

  @Get()
  findAll() {
    return this.usuarioEnderecoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioEnderecoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioEnderecoDto: UpdateUsuarioEnderecoDto) {
    return this.usuarioEnderecoService.update(+id, updateUsuarioEnderecoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioEnderecoService.remove(+id);
  }
}
