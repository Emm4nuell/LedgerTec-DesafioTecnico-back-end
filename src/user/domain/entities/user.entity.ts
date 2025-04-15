export class UserEntity {
  private id?: number;
  private name: string;
  private username: string;
  private password: string;
  private createdAt?: Date;

  constructor(
    name: string,
    username: string,
    password: string,
    id?: number,
    createdAt?: Date,
  ) {
    this.name = name;
    this.username = username;
    this.password = password;
    this.id = id;
    this.createdAt = createdAt;
  }

  // Getters
  public getId(): number | undefined {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getUsername(): string {
    return this.username;
  }

  public getPassword(): string {
    return this.password;
  }

  public getCreatedAt(): Date | undefined {
    return this.createdAt;
  }

  // Setters
  public setId(value: number | undefined): void {
    this.id = value;
  }

  public setName(value: string): void {
    this.name = value;
  }

  public setUsername(value: string): void {
    this.username = value;
  }

  public setPassword(value: string): void {
    this.password = value;
  }

  public setCreatedAt(value: Date | undefined): void {
    this.createdAt = value;
  }
}
