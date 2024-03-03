// pages/login.js

import { login } from '../utils/authService';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    // Simulate a successful login
    login();

    // Redirect to the dashboard
    router.push('/dashboard'); // Adjust the route accordingly
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
