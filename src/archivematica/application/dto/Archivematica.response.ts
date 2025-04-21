export class ArchivematicaResponse {
  id: number;
  originalname: string;
  mimetype: string;
  size: number;

  constructor(
    id: number,
    originalname: string,
    mimetype: string,
    size: number,
  ) {
    this.id = id;
    this.originalname = originalname;
    this.mimetype = mimetype;
    this.size = size;
  }
}
