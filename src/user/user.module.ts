import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/user.repository';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaDatabase } from 'src/user/service/prisma.database';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaDatabase,
    },
  ],
})
export class UserModule {}
