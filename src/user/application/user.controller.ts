import { Controller, Post, Body, Inject } from '@nestjs/common';
import { UserService } from '../domain/service/user.service';
import { UserRequest } from './dto/user.request';
import { Public } from 'src/auth/infrastructure/config/set.metadata';

@Controller('user')
export class UserController {
  @Inject()
  private readonly userService: UserService;

  @Post()
  @Public()
  create(@Body() request: UserRequest) {
    return this.userService.create(request);
  }
}
