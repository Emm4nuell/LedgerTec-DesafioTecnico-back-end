import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../domain/service/auth.service';
import { Public } from '../infrastructure/config/set.metadata';
import { AuthRequest } from './dto/auth.request';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @Public()
  signin(@Body() request: AuthRequest) {
    const response = this.authService.signIn(request);
    return response;
  }
}
