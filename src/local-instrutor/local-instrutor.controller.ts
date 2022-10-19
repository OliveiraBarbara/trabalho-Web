import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LocalInstrutorService } from './local-instrutor.service';
import { CreateLocalInstrutorDto } from './dto/create-local-instrutor.dto';
import { UpdateLocalInstrutorDto } from './dto/update-local-instrutor.dto';

@Controller('local-instrutor')
export class LocalInstrutorController {
  constructor(private readonly localInstrutorService: LocalInstrutorService) {}

  @Post()
  create(@Body() createLocalInstrutorDto: CreateLocalInstrutorDto) {
    return this.localInstrutorService.create(createLocalInstrutorDto);
  }

  @Get()
  findAll() {
    return this.localInstrutorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.localInstrutorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLocalInstrutorDto: UpdateLocalInstrutorDto) {
    return this.localInstrutorService.update(+id, updateLocalInstrutorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.localInstrutorService.remove(+id);
  }
}
