export interface User {
  _id: string;
  username: string;
  email: string;
  img?: string;
  isAdmin: boolean;
  createdAt: Date;
}
