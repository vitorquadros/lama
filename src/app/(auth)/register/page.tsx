import { register } from '@/actions/authActions';
import styles from './register.module.css';

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={register} className={styles.form}>
          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="password" placeholder="Password" />
          <input type="text" name="passwordConfirm" placeholder="Password confirmation" />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
