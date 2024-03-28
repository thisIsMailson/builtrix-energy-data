'use client'
import { useRouter } from 'next/navigation';
import { login } from '../utils/authService';


const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    // Simulate a successful login
    login();

    // Redirect to the dashboard
    router.push('/dashboard'); // Adjust the route accordingly
  };

  return (
    <div className="bg-slate-950 text-white h-screen flex justify-center items-center">
      <form className="p-4" onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input type="email" id="email" name="email" className="bg-white text-slate-950 px-4 py-2 rounded w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Password:</label>
          <input type="password" id="password" name="password" className="bg-white text-slate-950 px-4 py-2 rounded w-full" />
        </div>
        <button type="submit" className="bg-white text-slate-950 px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
