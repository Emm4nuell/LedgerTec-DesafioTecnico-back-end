import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/user/domain/entities/user.entity';

@Injectable()
export abstract class UserRepository {
  abstract create(entity: UserEntity): Promise<UserEntity>;
  abstract findByUserName(username: string): Promise<UserEntity | null>;
}
