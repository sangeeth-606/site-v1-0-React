import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    setEmail('');
    setPassword('');
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-800 to-slate-950 text-white">
      <div className="bg-slate-800 bg-opacity-80 backdrop-blur-sm p-10 rounded-xl shadow-2xl max-w-md mx-auto">
        <form
          onSubmit={ (e) => submitHandler(e) }
          className="flex flex-col space-y-5 p-8 rounded-lg text-white"
        >
          <input value={email}
          onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 py-3 bg-slate-900 bg-opacity-60 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-200"
          />
          <input value={password}
          onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="w-full px-5 py-3 bg-slate-900 bg-opacity-60 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-200"
          />
          <button
            type="submit"
            className="w-full px-5 py-3 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
