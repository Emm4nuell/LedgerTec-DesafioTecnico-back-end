export class UserEntity {
  private id?: number;
  private name: string;
  private email: string;
  private password: string;

  constructor(name: string, email: string, id?: number) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  public getId(): number | undefined {
    return this.id;
  }
  public setId(id: number): void {
    this.id = id;
  }
  public getName(): string {
    return this.name;
  }
  public setName(name: string): void {
    this.name = name;
  }
  public getEmail(): string {
    return this.email;
  }
  public setEmail(email: string): void {
    this.email = email;
  }
  public getPassword(): string {
    return this.password;
  }
  public setPassword(password: string): void {
    this.password = password;
  }
}
