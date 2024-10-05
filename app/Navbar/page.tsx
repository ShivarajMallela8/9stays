"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side (Logo) */}
          <div className="flex items-center">
            <Link href="/home" className="flex-shrink-0">
              <span className="font-bold text-3xl font-roboto">9stays</span>
            </Link>
          </div>

          {/* Right side (Nav links for larger screens) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 text-lg font-bold">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#amenities">Amenities</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#location">Location</NavLink>
              <NavLink 
                href="/booking" 
                className="bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600 transition duration-300"
              >
                Book Now
              </NavLink>
            </div>
          </div>

          {/* Hamburger menu for mobile view */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 font-bold space-y-1 bg-purple-800">
            <MobileNavLink href="#home">Home</MobileNavLink>
            <MobileNavLink href="#amenities">Amenities</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <MobileNavLink href="#location">Location</MobileNavLink>
            <MobileNavLink 
              href="/booking" 
              className="bg-green-500 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600 transition duration-300"
            >
              Book Now
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode; className?: string }> = ({ href, children, className }) => (
  <Link 
    href={href.startsWith("#") ? `/${href}` : href} // Add a slash before the fragment if it starts with #
    className={`text-white hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md transition duration-300 ${className}`}
  >
    {children}
  </Link>
);

const MobileNavLink: React.FC<{ href: string; children: React.ReactNode; className?: string }> = ({ href, children, className }) => (
  <Link 
    href={href.startsWith("#") ? `/${href}` : href} // Add a slash before the fragment if it starts with #
    className={`text-white hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md ${className}`}
  >
    {children}
  </Link>
);


export default Navbar;
