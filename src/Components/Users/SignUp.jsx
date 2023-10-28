import React, { useState } from 'react';
import Axios from 'axios';

const backgroundImage = 'https://www.bayut.jo/blog/wp-content/uploads/2015/04/%D8%A3%D9%81%D8%B6%D9%84-%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%B7%D9%82-%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%AD%D9%8A%D8%A9-%D8%A8%D8%A7%D9%84%D8%A7%D8%B1%D8%AF%D9%86.jpg';

function SignUp() {
  const [user_name, setuser_name] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://127.0.0.1:3000/adduser', {
        user_name,
        email,
        password,
      });

      if (response.status === 200) {
        alert('Registered successfully');
      }
    } catch (error) {
      alert('Registration error: Please check your information.');
    }
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <form action="/adduser" method="POST">
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="user_name"
              placeholder="Full Name"
              value={user_name}
              onChange={(e) => setuser_name(e.target.value)}
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <button
              type="submit"
              value="Add User"
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
              onClick={handleRegistration}
            >
              Create Account
            </button>
            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
            <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-green-300 text-green-500 dark:text-green-400 font-bold"
              href="../login/"
            >
              Log in
            </a>
          </div>
            .
          </div>
        </div>
      </div></form>
    </div>
  );
}

export default SignUp;
