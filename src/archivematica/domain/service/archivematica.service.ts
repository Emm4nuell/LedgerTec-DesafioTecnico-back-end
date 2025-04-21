import { Inject, Injectable } from '@nestjs/common';
import { ArchivematicaEntity } from '../entity/archivematica.entity';
import { ArchivematicaRepository } from 'src/archivematica/infrastructure/repository/archivematica.repository';
import { ArchivematicaResponse } from 'src/archivematica/application/dto/Archivematica.response';

@Injectable()
export class ArchivematicaService {
  @Inject()
  private readonly archivematicarepository: ArchivematicaRepository;

  save(file: Express.Multer.File) {
    const requestfile = new ArchivematicaEntity(
      file.originalname,
      file.mimetype,
      file.buffer,
      file.size,
      'Ativado',
    );
    this.archivematicarepository.save(requestfile);
    return 'This action adds a new archivematica';
  }

  async findById(id: number): Promise<ArchivematicaEntity | null> {
    return this.archivematicarepository.findById(id);
  }

  async findAllFiles(): Promise<ArchivematicaResponse[] | null> {
    const files = await this.archivematicarepository.findAllFiles();
    return files
      ? files?.map(
          (file) =>
            new ArchivematicaResponse(
              file.getId()!,
              file.getOriginalname(),
              file.getMimetype(),
              file.getSize(),
            ),
        )
      : null;
  }

  deleteFile(id: number) {
    this.archivematicarepository.deleteFile(id);
  }
}
