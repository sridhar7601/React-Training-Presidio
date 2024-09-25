import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { z } from 'zod';
import { User, Lock } from 'lucide-react';

const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      loginSchema.parse(formData);
      if (formData.username === 'user' && formData.password === '111111') {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/home');
      } else {
        setErrors({ form: 'Invalid credentials. Please try again.' });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.flatten().fieldErrors);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex items-center space-x-2">
            <User className="text-gray-400" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          <div className="flex items-center space-x-2">
            <Lock className="text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          {errors.form && <p className="text-red-500 text-sm">{errors.form}</p>}
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
