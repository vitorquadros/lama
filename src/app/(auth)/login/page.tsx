import { handleGithubLogin } from '@/actions/authActions';

const LoginPage = async () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button type="submit">Login with Github</button>
      </form>
    </div>
  );
};

export default LoginPage;
