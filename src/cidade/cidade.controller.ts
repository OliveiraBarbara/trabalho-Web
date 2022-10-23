/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard_Admin } from 'src/auth/guards/admin-auth.guard';
import { CidadeService } from './cidade.service';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';

@ApiTags('cidade')
@Controller('cidade/')
export class CidadeController {
  constructor(private readonly cidadeService: CidadeService) {}

  @UseGuards(AuthGuard_Admin)
  @Post('add-cidade')
  create(@Body() createCidadeDto: CreateCidadeDto) {
    return this.cidadeService.create(createCidadeDto);
  }

  @Get('ver-cidade')
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search: string,
  ) {
    return this.cidadeService.findAll({ page, limit }, search);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.cidadeService.findOne(id);
  }

  @UseGuards(AuthGuard_Admin)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCidadeDto: UpdateCidadeDto,
  ) {
    return this.cidadeService.update(id, updateCidadeDto);
  }

  @UseGuards(AuthGuard_Admin)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.cidadeService.remove(id);
  }
}
