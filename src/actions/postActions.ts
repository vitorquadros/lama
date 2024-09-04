'use server';

import { Post } from '@/lib/models';
import { connectToDb } from '@/lib/utils';
import { revalidatePath } from 'next/cache';

export const addPost = async (formData: FormData) => {
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
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong!');
  }
};

export const deletePost = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData) as {
    id: string;
  };

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    revalidatePath('/blog');
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong!');
  }
};
