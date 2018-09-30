export class User {
  constructor(
    public name: string = '',
    public surname: string = '',
    public telephone: string = '',
    public address: string = '',
    public token: string = null
  ) {}

  getFullName(): string {
    return `${this.name} ${this.surname}`;
  }
}
