import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LocalTreinamentoService } from './local-treinamento.service';
import { CreateLocalTreinamentoDto } from './dto/create-local-treinamento.dto';
import { UpdateLocalTreinamentoDto } from './dto/update-local-treinamento.dto';

@Controller('local-treinamento')
export class LocalTreinamentoController {
  constructor(private readonly localTreinamentoService: LocalTreinamentoService) {}

  @Post()
  create(@Body() createLocalTreinamentoDto: CreateLocalTreinamentoDto) {
    return this.localTreinamentoService.create(createLocalTreinamentoDto);
  }

  @Get()
  findAll() {
    return this.localTreinamentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.localTreinamentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLocalTreinamentoDto: UpdateLocalTreinamentoDto) {
    return this.localTreinamentoService.update(+id, updateLocalTreinamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.localTreinamentoService.remove(+id);
  }
}
