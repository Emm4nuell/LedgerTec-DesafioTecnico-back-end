import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/repository/user.repository';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class PrismaDatabase implements UserRepository {
  @Inject()
  private readonly prisma: PrismaService;

  async create(entity: UserEntity): Promise<UserEntity> {
    const database = await this.prisma.$transaction(async (result) => {
      return await result.user.create({
        data: {
          name: entity.getName(),
          username: entity.getUsername(),
          password: entity.getPassword(),
        },
      });
    });

    return new UserEntity(
      database.name,
      database.username,
      database.password,
      database.id,
      database.createdAt,
    );
  }
}
