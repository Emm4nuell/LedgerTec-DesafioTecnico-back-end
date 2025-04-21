export class ArchivematicaEntity {
  private id?: number;
  private originalname: string;
  private mimetype: string;
  private buffer: Buffer;
  private size: number;
  private status: string;
  private createdAt?: Date;

  constructor(
    originalname: string,
    mimetype: string,
    buffer: Buffer,
    size: number,
    status: string,
    id?: number,
    createdAt?: Date,
  ) {
    this.id = id;
    this.originalname = originalname;
    this.mimetype = mimetype;
    this.buffer = buffer;
    this.size = size;
    this.status = status;
    this.createdAt = createdAt;
  }

  public getId(): number | undefined {
    return this.id;
  }

  public getOriginalname(): string {
    return this.originalname;
  }

  public getMimetype(): string {
    return this.mimetype;
  }

  public getBuffer(): Buffer {
    return this.buffer;
  }

  public getSize(): number {
    return this.size;
  }

  public getStatus(): string {
    return this.status;
  }

  public getCreatedAt(): Date | undefined {
    return this.createdAt;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public setOriginalname(originalname: string): void {
    this.originalname = originalname;
  }

  public setMimetype(mimetype: string): void {
    this.mimetype = mimetype;
  }

  public setBuffer(buffer: Buffer): void {
    this.buffer = buffer;
  }

  public setSize(size: number): void {
    this.size = size;
  }

  public setStatus(status: string): void {
    this.status = status;
  }

  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }
}
