export class AuthRequest {
  private username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  public getUsername = (): string => {
    return this.username;
  };

  public setUsername = (value: string): void => {
    this.username = value;
  };

  public getPassword = (): string => {
    return this.password;
  };

  public setPassword = (value: string): void => {
    this.password = value;
  };
}
