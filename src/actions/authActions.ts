'use server';

import { signIn } from '@/lib/auth';

export const handleGithubLogin = async () => {
  await signIn('github');
};
