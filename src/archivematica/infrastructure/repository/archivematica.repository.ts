import { Injectable } from '@nestjs/common';
import { ArchivematicaEntity } from 'src/archivematica/domain/entity/archivematica.entity';

@Injectable()
export abstract class ArchivematicaRepository {
  abstract save(entity: ArchivematicaEntity);
  abstract findById(id: number): Promise<ArchivematicaEntity | null>;
  abstract findAllFiles(): Promise<ArchivematicaEntity[] | null>;
  abstract deleteFile(id: number): Promise<void>;
}
