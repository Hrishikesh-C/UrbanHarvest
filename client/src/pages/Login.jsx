import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSeedling, FaBan, FaHandsHelping, FaReceipt } from 'react-icons/fa';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('Admin@gmail.com');
  const [password, setPassword] = useState('1234567');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'Admin@gmail.com' && password === '1234567') {
      navigate('/dashboard');
    } else if (email === 'joe@example.com' && password === 'joe1234') {
     navigate('/seller/dashboard');

    } else {
      alert('Invalid credentials.');
    }
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-[#7ba696] px-4 font-sans"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row items-center gap-12 p-10">
        {/* Login Card */}
        <div className="bg-[#fdf8f2] p-10 rounded-xl shadow-lg w-[360px]">
          <h1 className="text-3xl font-bold text-center text-[#2e604a] mb-2">
            Urban <span className="text-[#2e604a]">Harvest</span> <span></span>
          </h1>
          <hr className="my-4 border-gray-300" />
          <h2 className="text-xl font-semibold text-center mb-6">Login</h2>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" id="remember" className="cursor-pointer" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button
              type="submit"
              className="bg-[#f3e6ce] hover:bg-[#ecd7b1] text-black font-semibold py-2.5 rounded-full text-lg transition"
            >
              Submit
            </button>
          </form>

          <div className="flex justify-between text-sm mt-5 text-gray-700">
            <a href="#" className="hover:underline">Forgot password?</a>
            <a href="/signup" className="hover:underline font-medium">SignUp</a>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-[#fdf8f2] p-8 rounded-xl shadow-lg w-[280px]">
          <h3 className="text-xl font-semibold text-[#2e604a] mb-5">Why Choose US</h3>
          <ul className="space-y-5 text-base text-gray-800">
            <li className="flex items-center gap-3">
              <FaSeedling className="text-[#2e604a] text-xl" /> Fresh Produce
            </li>
            <li className="flex items-center gap-3">
              <FaBan className="text-[#2e604a] text-xl" /> No Middlemen
            </li>
            <li className="flex items-center gap-3">
              <FaHandsHelping className="text-[#2e604a] text-xl" /> Support Local Gardeners
            </li>
            <li className="flex items-center gap-3">
              <FaReceipt className="text-[#2e604a] text-xl" /> Affordable Pricing
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
