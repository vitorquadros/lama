'use client';

import { login } from '@/actions/authActions';
import styles from './LoginForm.module.css';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginForm = () => {
  const [state, formAction] = useFormState(login, { success: false });

  const router = useRouter();

  //   useEffect(() => {
  //     if (state?.success) {
  //       router.push('/login');
  //     }
  //   }, [state?.success, router]);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
      {state?.error && <p style={{ color: 'red' }}>{state.error}</p>}
      <Link href="/register">
        Don't have an account? <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
