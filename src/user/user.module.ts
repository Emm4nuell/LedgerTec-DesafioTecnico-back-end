import { Module } from '@nestjs/common';
import { UserController } from './application/user.controller';
import { PrismaService } from 'src/database/prisma.service';
import { UserService } from './domain/service/user.service';
import { UserRepository } from './infrastructure/repository/user.repository';
import { PrismaDatabase } from './domain/service/prisma.database';

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
  exports: [UserRepository],
})
export class UserModule {}
