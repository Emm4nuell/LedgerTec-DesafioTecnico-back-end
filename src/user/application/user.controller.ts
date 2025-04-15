import { Controller, Post, Body, Inject } from '@nestjs/common';
import { UserService } from '../domain/service/user.service';
import { UserRequest } from './dto/user.request';

@Controller('user')
export class UserController {
  @Inject()
  private readonly userService: UserService;

  @Post()
  create(@Body() request: UserRequest) {
    return this.userService.create(request);
  }
}
