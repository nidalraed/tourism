import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const backgroundImage = 'https://modo3.com/thumbs/fit630x300/49661/1434627185/%D8%A3%D9%87%D9%85%D9%8A%D8%A9_%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%AD%D8%A9_%D9%81%D9%8A_%D8%A7%D9%84%D8%A3%D8%B1%D8%AF%D9%86.jpg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://127.0.0.1:3000/login', {
        email,
        password,
      });

      if (response.status === 200) {
        alert('Login successful');
      }
    } catch (error) {
      alert('Login error: Please check your information.');
    }
  }

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="px-6 py-8">
            <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
              Welcome Back
            </h3>
            <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
              Login or create an account
            </p>
            <form onSubmit={handleLogin}>
              <div className="w-full mt-4">
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus-border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full mt-4">
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus-border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                  name="password"
                  placeholder="Password"
                  aria-label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <Link to="/forgot-password" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">
                  Forgot Password?
                </Link>
                <button className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1 shadow-md">
                  Sign In
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
            <span className="text-sm text-gray-600 dark:text-gray-200">
              Don't have an account?{" "}
            </span>
            <Link to="/signup" className="mx-2 text-sm font-bold text-green-500 dark:text-green-400 hover:underline">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

