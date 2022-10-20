/*import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Usuario } from './usuario/entities/usuario.entity';
import { CurrentUser, IsPublic } from 'src/shared/decorators';

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
}*/
import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
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
}
