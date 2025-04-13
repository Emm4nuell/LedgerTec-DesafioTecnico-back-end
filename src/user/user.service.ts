import { Injectable } from '@nestjs/common';
import { UserRequest } from './dto/user.request';

@Injectable()
export class UserService {
  create(request: UserRequest) {
    return 'This action adds a new user';
  }

  // findAll() {
  //   return `This action returns all user`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
