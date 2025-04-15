import { Controller, Post, Body } from '@nestjs/common';
import { AuthRequest } from './dto/auth.request';
import { AuthService } from '../domain/service/auth.service';
import { Public } from '../infrastructure/config/set.metadata';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @Public()
  signin(@Body() request: AuthRequest) {
    return this.authService.signIn(request.username, request.password);
  }
}
