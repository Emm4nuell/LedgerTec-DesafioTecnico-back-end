import { Injectable } from '@nestjs/common';
import { UserRequest } from '../dto/user.request';
import { UserRepository } from '../repository/user.repository';
import { hash } from 'bcrypt';
import { UserMapper } from '../dto/user.mapper';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(request: UserRequest) {
    const entity = UserMapper.toEntity(request);
    entity.setPassword(await hash(request.password, 10));
    const user = await this.userRepository.create(entity);

    return UserMapper.toResponse(user);
  }
}
