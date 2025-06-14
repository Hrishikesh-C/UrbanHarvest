
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaSeedling,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaShoppingBasket,
  FaUserPlus,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope
} from 'react-icons/fa';
import heroImage from '../assets/hero.png'; // Replace with your actual image path

export default function HomeComponent() {
  const gardens = [
    { name: 'Green Haven', veggies: 'Tomatoes, Spinach', icon: <FaSeedling /> },
    { name: 'Urban Roots', veggies: 'Carrots, Kale', icon: <FaSeedling /> },
    { name: 'Leafy Lane', veggies: 'Peppers, Lettuce', icon: <FaSeedling /> },
  ];

  return (
    <div className="bg-[#f4f2ef] text-gray-800 font-sans min-h-screen">
      {/* Header */}
      <header className="bg-[#2e604a] text-white px-6 py-4 shadow-md">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-3xl font-bold tracking-wide">
            <span className="text-[#DBB78A]">Urban</span> Harvest
          </div>
          <nav className="flex gap-6 mt-3 md:mt-0 text-[16px]">
            <Link to="/" className="hover:text-[#DBB78A]">Home</Link>
            <Link to="/" className="hover:text-[#DBB78A]">About</Link>
            <Link to="/guides" className="hover:text-[#DBB78A]">Guides</Link>
            <Link to="/login" className="bg-white text-[#2e604a] px-4 py-1.5 rounded hover:bg-gray-100">Login</Link>
            <Link to="/signup" className="bg-white text-[#2e604a] px-4 py-1.5 rounded hover:bg-gray-100">Signup</Link>
          </nav>
        </div>
      </header>

      {/* Search */}
      <div className="bg-[#f1eee7] py-6 shadow-inner">
        <div className="max-w-screen-xl mx-auto px-4">
          <input
            type="text"
            placeholder="Search fresh produce near you..."
            className="w-full md:w-3/4 mx-auto block px-6 py-3 border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-[#7EA88F]"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="text-center bg-white py-20 px-4 relative">
        <div className="max-w-screen-xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#1E2A35] leading-tight">
            Fresh Produce from Rooftops,<br /> Delivered Sustainably
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Explore urban gardening like never before. Get fresh, organic veggies from trusted rooftop growers in your neighborhood.
          </p>
          <Link to="/seller-login" className="inline-flex items-center gap-2 bg-[#7EA88F] text-white font-semibold py-3 px-6 rounded-full hover:opacity-90 transition">
            <FaUserPlus /> Become a Seller
          </Link>

          <div className="relative mt-12 flex justify-center">
            <img
              src={heroImage}
              alt="Rooftop garden"
              className="w-full max-w-4xl h-auto rounded-xl shadow-xl object-cover"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <Link to="/login" className="bg-[#2e604a] text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:opacity-90 transition">
                Explore Gardens
              </Link>
            </button>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4 bg-[#DBB78A] text-center text-[#1E2A35]">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center space-y-3">
              <FaMapMarkedAlt size={40} />
              <h4 className="font-semibold">Locate Nearby Gardens</h4>
              <p>Find urban farms within a 2km radius instantly.</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <FaPhoneAlt size={40} />
              <h4 className="font-semibold">Contact Growers</h4>
              <p>Talk directly with the gardener to place your request.</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <FaShoppingBasket size={40} />
              <h4 className="font-semibold">Pick Your Veggies</h4>
              <p>Visit and collect fresh greens grown just for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-[#fdfaf5] px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2e604a] mb-6">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Urban Harvest aims to empower communities through sustainable rooftop gardening. By reducing food miles and supporting local growers, we create healthier cities and stronger local economies—one rooftop at a time.
          </p>
        </div>
      </section>

      {/* Nearby Gardens */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10 text-[#1E2A35]">Nearby Gardens</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {gardens.map((g, i) => (
              <div
                key={i}
                className="bg-[#fefefe] rounded-xl shadow-md p-6 border border-[#7EA88F] transition hover:shadow-lg"
              >
                <div className="text-[#2e604a] text-3xl mb-2">{g.icon}</div>
                <h4 className="font-bold text-xl mb-1">{g.name}</h4>
                <p className="text-gray-600">{g.veggies}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f4f2ef] py-20 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1E2A35] mb-10">What Our Users Say</h2>
          <div className="space-y-6">
            <blockquote className="text-lg italic text-gray-700">“Urban Harvest helped me discover the best tomatoes I’ve ever had—grown just 500m away!” – Neha S.</blockquote>
            <blockquote className="text-lg italic text-gray-700">“I'm saving on groceries and eating healthier thanks to my local gardener.” – Ravi M.</blockquote>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-[#DBB78A] text-center text-[#1E2A35]">
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
          <p className="mb-6">Get the latest updates, gardening tips, and fresh arrivals in your inbox.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-full border border-gray-300 w-full sm:w-2/3 focus:outline-none"
            />
            <button className="bg-[#2e604a] text-white px-6 py-2 rounded-full hover:opacity-90">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2e604a] text-white pt-10 pb-6 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-bold mb-2">Urban Harvest</h4>
            <p>Connecting communities through rooftop gardening.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/availability">Availability</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Help</h4>
            <ul className="space-y-1">
              <li>FAQs</li>
              <li>Support</li>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Follow Us</h4>
            <div className="flex space-x-4 mt-2">
              <FaFacebook className="hover:text-[#DBB78A]" />
              <FaInstagram className="hover:text-[#DBB78A]" />
              <FaTwitter className="hover:text-[#DBB78A]" />
              <FaEnvelope className="hover:text-[#DBB78A]" />
            </div>
          </div>
        </div>
        <div className="text-center mt-10 text-xs">
          &copy; 2025 Urban Harvest. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
