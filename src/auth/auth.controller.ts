import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { IsPublic, CurrentUser } from 'src/shared/decorators';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  login(@CurrentUser() usuario: Usuario) {
    return this.authService.login(usuario);
  }

  @UseGuards(JwtAuthGuard)
  @Get('usuario')
  @UseGuards()
  getProfile(@CurrentUser() user) {
    return user;
  }
}

/*import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { IsPublic } from 'src/shared/decorators';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth/login')
  @IsPublic()
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return req.body;
  }

  @UseGuards(JwtAuthGuard)
  @Get('usuario')
  getProfile(@Request() req) {
    return req.usuario;
  }
}*/
