import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstrutorEnderecoService } from './instrutor-endereco.service';
import { CreateInstrutorEnderecoDto } from './dto/create-instrutor-endereco.dto';
import { UpdateInstrutorEnderecoDto } from './dto/update-instrutor-endereco.dto';

@Controller('instrutor-endereco')
export class InstrutorEnderecoController {
  constructor(private readonly instrutorEnderecoService: InstrutorEnderecoService) {}

  @Post()
  create(@Body() createInstrutorEnderecoDto: CreateInstrutorEnderecoDto) {
    return this.instrutorEnderecoService.create(createInstrutorEnderecoDto);
  }

  @Get()
  findAll() {
    return this.instrutorEnderecoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instrutorEnderecoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInstrutorEnderecoDto: UpdateInstrutorEnderecoDto) {
    return this.instrutorEnderecoService.update(+id, updateInstrutorEnderecoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instrutorEnderecoService.remove(+id);
  }
}
