import { UserEntity } from '../entities/user.entity';
import { UserRequest } from './user.request';
import { UserResponse } from './user.response';

export class UserMapper {
  static toEntity(request: UserRequest): UserEntity {
    return new UserEntity(request.name, request.username, request.password);
  }

  static toResponse(entity: UserEntity): UserResponse {
    return new UserResponse(
      entity.getName(),
      entity.getUsername(),
      entity.getId(),
      entity.getCreatedAt(),
    );
  }
}
