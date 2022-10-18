import { HttpStatus } from '@nestjs/common';
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, DefaultValuePipe, ParseIntPipe, HttpCode } from '@nestjs/common';
import { InstrutorService } from './instrutor.service';
import { CreateInstrutorDto } from './dto/create-instrutor.dto';
import { UpdateInstrutorDto } from './dto/update-instrutor.dto';

@Controller('instrutor')
export class InstrutorController {
  constructor(private readonly instrutorService: InstrutorService) {}

  @Post()
  create(@Body() createInstrutorDto: CreateInstrutorDto) {
    return this.instrutorService.create(createInstrutorDto);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search: string,
    ) {
    return this.instrutorService.findAll({page, limit}, search);
  }

  @Get(':cref')
  findOne(@Param('cref') cref: number) {
    return this.instrutorService.findOne(cref);
  }

  @Patch(':cref')
  update(
    @Param('cref', ParseIntPipe) cref: number, 
    @Body() updateInstrutorDto: UpdateInstrutorDto) {
    return this.instrutorService.update(cref, updateInstrutorDto);
  }

  @Delete(':cref')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(
    @Param('cref', ParseIntPipe) cref: number) {
    return this.instrutorService.remove(cref);
  }
}
