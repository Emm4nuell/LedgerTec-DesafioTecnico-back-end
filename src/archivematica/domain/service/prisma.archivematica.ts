import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ArchivematicaRepository } from 'src/archivematica/infrastructure/repository/archivematica.repository';
import { ArchivematicaEntity } from 'src/archivematica/domain/entity/archivematica.entity';

@Injectable()
export class PrismaArchivematica implements ArchivematicaRepository {
  @Inject()
  private readonly prismaService: PrismaService;

  async findById(id: number): Promise<ArchivematicaEntity | null> {
    const database = await this.prismaService.file.findFirst({
      where: { id },
    });

    if (database == null) {
      return null;
    }
    return new ArchivematicaEntity(
      database?.originalname,
      database?.mimetype,
      Buffer.from(database.buffer),
      database?.size,
      database?.status,
      database?.id,
      database?.createdAt,
    );
  }

  async save(entity: ArchivematicaEntity): Promise<void> {
    try {
      await this.prismaService.$transaction(
        async (prisma) => {
          await prisma.file.create({
            data: {
              originalname: entity.getOriginalname(),
              mimetype: entity.getMimetype(),
              buffer: entity.getBuffer(),
              size: entity.getSize(),
              status: entity.getStatus() || 'Ativado',
              createdAt: entity.getCreatedAt() || new Date(),
            },
          });
        },
        {
          maxWait: 20000, // 20 segundos
          timeout: 30000, // 30 segundos
        },
      );
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      throw new Error(`Falha na operação de salvamento: ${error.message}`);
    }
  }

  async findAllFiles(): Promise<ArchivematicaEntity[] | null> {
    const files = await this.prismaService.file.findMany();
    if (!files || files.length === 0) {
      return null;
    }

    return files.map(
      (file) =>
        new ArchivematicaEntity(
          file.originalname,
          file.mimetype,
          Buffer.from(file.buffer),
          file.size,
          file.status,
          file.id,
          file.createdAt,
        ),
    );
  }

  async deleteFile(id: number): Promise<void> {
    await this.prismaService.file.delete({
      where: { id },
    });
  }
}
