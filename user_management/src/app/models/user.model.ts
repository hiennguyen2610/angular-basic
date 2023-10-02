export class User {
  id!: string;
  name!: string;
  email!: string;
  birthday!: string;
  avatar: string | undefined;
  token?: string;
}