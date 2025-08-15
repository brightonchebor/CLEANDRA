import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from "../assets/logo2.png"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company info */}
          <div className="lg:pr-4">
            <div className="flex items-center space-x-3 mb-6">
              <Link to='/'>
                <img
                  src={logo}
                  alt="Cleandra Solutions Logo"
                  className="w-15 h-15 object-contain"
                />
              </Link>
              <Link to='/'>
                <div>
                  <h1 className="text-2xl font-bold text-white">Cleandra</h1>
                  <p className="text-sm text-yellow-600 font-medium">Solutions</p>
                </div>
              </Link>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional cleaning services across Kenya. We provide reliable, eco-friendly cleaning solutions for homes and businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:px-4">
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">+254 792 278719</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">info.cleandrasolutions@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                  <p>Sun: Emergency calls only</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-4">
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about-us" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/book" className="text-gray-300 hover:text-white transition-colors">
                  Book
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Cleandra Solutions. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Professional cleaning services in Kenya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;