// src/App.jsx
import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">

      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-700">MyAwesomeSite</h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-br from-blue-50 to-white">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-800">Welcome to MyAwesomeSite</h2>
        <p className="text-gray-600 mb-6 text-lg max-w-xl">
          Build modern, fast, and responsive UIs effortlessly with React + Tailwind CSS.
        </p>
        <a
          href="#about"
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        >
          Learn More
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-blue-700">About Us</h3>
          <p className="text-gray-700 text-md leading-relaxed">
            We help developers create sleek interfaces using modern technologies like React, Tailwind CSS, and more.
            Our mission is to make beautiful UIs easy and accessible for everyone.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-700 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} MyAwesomeSite. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

