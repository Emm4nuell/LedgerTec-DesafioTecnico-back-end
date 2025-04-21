import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { ArchivematicaService } from '../domain/service/archivematica.service';

@Controller('/archivematica')
export class ArchivematicaController {
  constructor(private readonly archivematicaService: ArchivematicaService) {}

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    this.archivematicaService.save(file);
  }

  @Get('/download/:id')
  async downloadFile(@Param('id') id: number) {
    const fileEntity = await this.archivematicaService.findById(id);

    if (!fileEntity) {
      throw new NotFoundException('Arquivo não encontrado');
    }

    return new StreamableFile(fileEntity.getBuffer(), {
      type: fileEntity.getMimetype(),
      disposition: `attachment; filename="${fileEntity.getOriginalname()}"`,
      length: fileEntity.getSize(),
    });
  }

  @Get('files')
  async getAllFiles() {
    return await this.archivematicaService.findAllFiles();
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteFile(@Param('id') id: number) {
    this.archivematicaService.deleteFile(+id);
  }
}
