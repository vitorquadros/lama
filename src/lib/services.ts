import { Post, User } from './models';
import { connectToDb } from './utils';

export const getPosts = async () => {
  try {
    await connectToDb();
    const posts = await Post.find();

    return posts;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch posts!');
  }
};

export const getPost = async (slug: string) => {
  try {
    await connectToDb();
    const post = await Post.find({ slug });

    return post;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch post!');
  }
};

export const getUsers = async () => {
  try {
    await connectToDb();
    const users = await User.find();

    return users;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch users!');
  }
};

export const getUser = async (id: string) => {
  try {
    await connectToDb();
    const user = await User.findById(id);

    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch user!');
  }
};
