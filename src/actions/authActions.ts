'use server';

import { signIn, signOut } from '@/lib/auth';
import { User } from '@/lib/models';
import { connectToDb } from '@/lib/utils';
import bcrypt from 'bcrypt';

export const handleGithubLogin = async () => {
  await signIn('github');
};

export const handleLogout = async () => {
  await signOut();
};

export const login = async (formData: FormData) => {
  const { username, password } = Object.fromEntries(formData) as {
    username: string;
    password: string;
  };

  try {
    connectToDb();

    await signIn('credentials', {
      username,
      password
    });
  } catch (error) {
    console.log(error);
    return { error: 'Failed to login!', success: false };
  }
};

export const register = async (
  previousState: { success: boolean; error?: string },
  formData: FormData
) => {
  const { username, email, password, passwordConfirm, img } = Object.fromEntries(formData) as {
    username: string;
    email: string;
    img: string;
    password: string;
    passwordConfirm: string;
  };

  if (password !== passwordConfirm) {
    return { error: 'Passwords do not match!', success: false };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: 'User already exists!', success: false };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img
    });

    await newUser.save();
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: 'Failed to register!', success: false };
  }
};
