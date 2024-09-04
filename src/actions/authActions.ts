'use server';

import { signIn, signOut } from '@/lib/auth';

export const handleGithubLogin = async () => {
  await signIn('github');
};

export const handleLogout = async () => {
  await signOut();
};
