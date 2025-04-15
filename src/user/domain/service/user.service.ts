import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { UserMapper } from 'src/user/application/dto/user.mapper';
import { UserRequest } from 'src/user/application/dto/user.request';
import { UserRepository } from 'src/user/infrastructure/repository/user.repository';

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
