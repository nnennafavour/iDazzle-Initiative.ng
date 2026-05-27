

import React, { useState } from 'react';
import idazzle from "../assets/idazzle.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 w-full z-50 shadow">

      <div className="w-full px-6 lg:px-12">

        <div className="flex justify-between items-center h-24">

          {/* Logo + Name */}
          <a href="#home" className="flex items-center gap-3">

            <img
              src={idazzle}
              alt="idazzle"
              className="h-14 md:h-20 w-auto"
            />

            <div className="leading-tight">

              <p className="text-xl md:text-2xl font-bold text-black">
                iDazzle
              </p>

              <p className="text-xl md:text-2xl font-bold text-gray-700">
                Initiative
              </p>

            </div>

          </a>

          {/* Right Section */}
          <div className="flex items-center gap-4">

            {/* Mobile Donate Button */}
            <a
              href="#donate"
              className="md:hidden bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 transition"
            >
              Donate
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10 text-black font-medium text-lg">

              <a
                href="#home"
                className="hover:text-blue-600 transition"
              >
                Home
              </a>

              <a
                href="#about"
                className="hover:text-blue-600 transition"
              >
                About Us
              </a>

              <a
                href="#projects"
                className="hover:text-blue-600 transition"
              >
                Projects
              </a>

              <a
  href="#teams"
  className="hover:text-blue-600 transition"
>
  Teams
</a>

              <a
                href="#contact"
                className="hover:text-blue-600 transition"
              >
                Contact Us
              </a>

              {/* Donate Button */}
              <a
                href="#donate"
                className="bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600 transition"
              >
                Donate
              </a>

            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-2xl"
              >
                ☰
              </button>

            </div>

          </div>

        </div>

        {/* Mobile Menu */}
        {isOpen && (

          <div className="md:hidden flex flex-col gap-4 mt-4 pb-4 text-gray-700 font-medium text-lg">

            <a
              href="#home"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>

            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>

            <a
  href="#teams"
  onClick={() => setIsOpen(false)}
>
  Teams
</a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>

          </div>

        )}

      </div>

    </nav>
  );
};

export default Navbar;