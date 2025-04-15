import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserEntity } from 'src/user/domain/entities/user.entity';
import { UserRepository } from 'src/user/infrastructure/repository/user.repository';

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

  async findByUserName(username: string): Promise<UserEntity | null> {
    const database = await this.prisma.user.findUnique({
      where: { username: username },
    });

    return database
      ? new UserEntity(
          database.name,
          database.username,
          database.password,
          database.id,
          database.createdAt,
        )
      : null;
  }
}
