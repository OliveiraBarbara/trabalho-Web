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
import { InstrutorEnderecoService } from './instrutor-endereco.service';
import { CreateInstrutorEnderecoDto } from './dto/create-instrutor-endereco.dto';
import { UpdateInstrutorEnderecoDto } from './dto/update-instrutor-endereco.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('instrutor-endereco')
@Controller('instrutor-endereco')
export class InstrutorEnderecoController {
  constructor(
    private readonly instrutorEnderecoService: InstrutorEnderecoService,
  ) {}

  @Post()
  create(@Body() createInstrutorEnderecoDto: CreateInstrutorEnderecoDto) {
    return this.instrutorEnderecoService.create(createInstrutorEnderecoDto);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search: string,
  ) {
    return this.instrutorEnderecoService.findAll({ page, limit }, search);
  }

  @Get(':idIE')
  findOne(@Param('idIE') idIE: number) {
    return this.instrutorEnderecoService.findOne(idIE);
  }

  @Patch(':idIE')
  update(
    @Param('idIE') idIE: number,
    @Body() updateInstrutorEnderecoDto: UpdateInstrutorEnderecoDto,
  ) {
    return this.instrutorEnderecoService.update(
      idIE,
      updateInstrutorEnderecoDto,
    );
  }

  @Delete(':idIE')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('idIE', ParseIntPipe) idIE: number) {
    return this.instrutorEnderecoService.remove(idIE);
  }
}
