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
    revalidatePath('/admin');

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error: 'Failed to add post!' };
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
    revalidatePath('/admin');

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error: 'Failed to delete post!' };
  }
};
