import { handleGithubLogin, login } from '@/actions/authActions';

const LoginPage = async () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button type="submit">Login with Github</button>
      </form>
      <form action={login}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login with credentials</button>
      </form>
    </div>
  );
};

export default LoginPage;
