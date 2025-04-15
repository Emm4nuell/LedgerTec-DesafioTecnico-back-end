import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { AuthResponse } from '../../application/dto/auth.response';
import { UserRepository } from 'src/user/infrastructure/repository/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<AuthResponse> {
    const user = await this.userRepository.findByUserName(username);

    if (!(await compare(pass, user!.getPassword()))) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user!.getId(), username: user!.getUsername() };
    return new AuthResponse(await this.jwtService.signAsync(payload));
  }
}
