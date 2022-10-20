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
import { PreferenciaService } from './preferencia.service';
import { CreatePreferenciaDto } from './dto/create-preferencia.dto';
import { UpdatePreferenciaDto } from './dto/update-preferencia.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('preferencia')
@Controller('preferencia')
export class PreferenciaController {
  constructor(private readonly preferenciaService: PreferenciaService) {}

  @Post()
  create(@Body() createPreferenciaDto: CreatePreferenciaDto) {
    return this.preferenciaService.create(createPreferenciaDto);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search: string,
  ) {
    return this.preferenciaService.findAll({ page, limit }, search);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) idPref: number) {
    return this.preferenciaService.findOne(idPref);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) idPref: number,
    @Body() updatePreferenciaDto: UpdatePreferenciaDto,
  ) {
    return this.preferenciaService.update(idPref, updatePreferenciaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) idPref: number) {
    return this.preferenciaService.remove(idPref);
  }
}
