import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSeedling, FaBan, FaHandsHelping, FaReceipt } from 'react-icons/fa';

export default function Signup() {
  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-[#7ba696] px-4 font-sans"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row items-center gap-12 p-10">
        {/* Signup Card */}
        <div className="bg-[#fdf8f2] p-10 rounded-xl shadow-lg w-[360px]">
          <h1 className="text-3xl font-bold text-center text-[#2e604a] mb-2">
            Urban <span className="text-[#2e604a]">Harvest</span> <span></span>
          </h1>
          <hr className="my-4 border-gray-300" />
          <h2 className="text-xl font-semibold text-center mb-6">Register</h2>

          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Full name"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <input
              type="text"
              placeholder="Number"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button
              type="submit"
              className="bg-[#f3e6ce] hover:bg-[#ecd7b1] text-black font-semibold py-2.5 rounded-full text-lg transition"
            >
              Submit
            </button>
          </form>

          <div className="flex justify-between text-sm mt-5 text-gray-700">
            <span>Already have an account?</span>
            <Link to="/login" className="hover:underline font-medium">Login</Link>
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
