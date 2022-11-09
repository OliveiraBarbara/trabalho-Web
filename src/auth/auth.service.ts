/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { UsuarioPayload } from './models/user-payload.model';
import { UsuarioToken } from './models/user-token.model';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async login(usuario: Usuario): Promise<UsuarioToken> {
    const payload: UsuarioPayload = {
      sub: usuario.id,
      email: usuario.email,
      name: usuario.nome,
      //tipo
    };

    return {
      access_token: this.jwtService.sign(payload),
      token_type: 'Bearer',
    };
  }

  async validateUsuario(email: string, pass: string): Promise<Usuario> {
    const usuario = await this.usuarioService.findByEmail(email, true);

    if (usuario) {
      const isPasswordValid = await compareSync(pass, usuario.senha);
      if (isPasswordValid) {
        const { senha, ...result } = usuario;
        return result as Usuario;
      }
    }
    return null;
  }
}
