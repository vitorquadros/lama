'use server';

import { signIn, signOut } from '@/lib/auth';
import { User } from '@/lib/models';
import { connectToDb } from '@/lib/utils';

export const handleGithubLogin = async () => {
  await signIn('github');
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (formData: FormData) => {
  const { username, email, password, passwordConfirm, img } = Object.fromEntries(formData) as {
    username: string;
    email: string;
    img: string;
    password: string;
    passwordConfirm: string;
  };

  if (password !== passwordConfirm) {
    return 'Passwords do not match.';
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return 'Username already exists';
    }

    const newUser = new User({
      username,
      email,
      password,
      img
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong.' };
  }
};
