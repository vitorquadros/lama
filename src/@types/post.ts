export interface Post {
  _id: string;
  title: string;
  description: string;
  img?: string;
  userId: string;
  slug: string;
  createdAt: Date;
}
