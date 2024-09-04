'use server';

import { Post, User } from '@/lib/models';
import { connectToDb } from '@/lib/utils';
import { revalidatePath } from 'next/cache';
import bcrypt from 'bcrypt';

export const addUser = async (
  previousState: { success: boolean; error?: string },
  formData: FormData
) => {
  const { username, email, password, img, isAdmin } = Object.fromEntries(formData) as {
    username: string;
    email: string;
    img: string;
    password: string;
    isAdmin: string;
  };

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      img: img !== '' ? img : undefined,
      password: await bcrypt.hash(password, 10),
      isAdmin: isAdmin === 'true'
    });

    await newUser.save();
    revalidatePath('/admin');
    revalidatePath('/blog');
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong!', success: false };
  }
};

export const deleteUser = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData) as {
    id: string;
  };

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    revalidatePath('/admin');
    revalidatePath('/blog');
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong!', success: false };
  }
};
