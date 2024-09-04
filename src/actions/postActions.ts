import { Post } from '@/lib/models';
import { connectToDb } from '@/lib/utils';
import { revalidatePath } from 'next/cache';

export const addPost = async (formData: FormData) => {
  'use server';

  const { title, description, userId } = Object.fromEntries(formData) as {
    title: string;
    description: string;
    userId: string;
  };

  try {
    connectToDb();
    const newPost = new Post({
      title,
      description,
      userId,
      slug: title.toLowerCase().replace(/ /g, '-')
    });

    await newPost.save();
    revalidatePath('/blog');
    console.log('successfully added new post');
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong!');
  }
};
