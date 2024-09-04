'use client';

import { register } from '@/actions/authActions';
import styles from './RegisterForm.module.css';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, { success: false });

  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push('/login');
    }
  }, [state?.success, router]);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" name="username" placeholder="Username" />
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <input type="password" name="passwordConfirm" placeholder="Password confirmation" />
      <button type="submit">Register</button>
      {state?.error && <p style={{ color: 'red' }}>{state.error}</p>}
      <Link href="/login">
        Already have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
