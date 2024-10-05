import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';


const Footer: React.FC = () => {

  return (
    <footer className="bg-purple-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">9stays</h3>
            <p className="text-sm">Luxury and comfort in the heart of the city. Experience the best hospitality at 9stays.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#home" className="hover:text-purple-300 transition-colors">Home</Link></li>
              <li><Link href="#amenities" className="hover:text-purple-300 transition-colors">Amenities</Link></li>
              <li><Link href="#testimonials" className="hover:text-purple-300 transition-colors">Testimonials</Link></li>
              <li><Link href="#location" className="hover:text-purple-300 transition-colors">Location</Link></li>
              <li><Link href="/booking" className="hover:text-purple-300 transition-colors">Book Now</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">123 Luxury Avenue, Cityville</p>
            <p className="text-sm">State 12345, Country</p>
            <p className="text-sm">Phone: +1 (555) 123-4567</p>
            <p className="text-sm">Email: info@9stays.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-300 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-purple-300 transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-purple-300 transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-purple-300 transition-colors"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-700 text-center text-sm">
          <p>&copy; 2024 9stays Hotel. All rights reserved.</p>
          <div className="mt-2">
            <Link href="#" className="hover:text-purple-300 transition-colors mr-4">Privacy Policy</Link>
            <Link href="#" className="hover:text-purple-300 transition-colors mr-4">Terms of Service</Link>
            <Link href="#" className="hover:text-purple-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;