import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email', passwordField: 'senha' });
  }

  async validate(email: string, password: string): Promise<Usuario> {
    const usuario = await this.authService.validateUsuario(email, password);
    if (!usuario) {
      throw new UnauthorizedException(
        'O endereço de e-mail ou a senha fornecidos estão incorretos.',
      );
    }
    return usuario;
  }
}
