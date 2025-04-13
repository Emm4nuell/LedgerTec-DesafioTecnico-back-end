export class UserRequest {
  id?: number;
  name: string;
  username: string;
  password: string;

  constructor(name: string, username: string, id?: number) {
    this.id = id;
    this.name = name;
    this.username = username;
  }
}
