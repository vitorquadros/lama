import { handleGithubLogin } from '@/actions/authActions';
import LoginForm from '@/components/LoginForm/LoginForm';
import styles from './login.module.css';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm />
        <form action={handleGithubLogin}>
          <button type="submit" className={styles.github}>
            Login with Github
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
