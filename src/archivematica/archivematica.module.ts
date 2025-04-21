import { Module } from '@nestjs/common';
import { ArchivematicaController } from './application/archivematica.controller';
import { ArchivematicaService } from './domain/service/archivematica.service';
import { PrismaService } from 'src/database/prisma.service';
import { ArchivematicaRepository } from './infrastructure/repository/archivematica.repository';
import { PrismaArchivematica } from './domain/service/prisma.archivematica';

@Module({
  controllers: [ArchivematicaController],
  providers: [
    ArchivematicaService,
    PrismaService,
    {
      provide: ArchivematicaRepository,
      useClass: PrismaArchivematica,
    },
  ],
})
export class ArchivematicaModule {}
