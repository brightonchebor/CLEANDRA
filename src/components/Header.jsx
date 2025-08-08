import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      {/* Top contact bar */}
      <div className="bg-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+254 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@cleandrasolutions.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Professional Cleaning Services in Kenya</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              {/* Logo placeholder - you can replace with actual logo */}
              <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full opacity-20"></div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Cleandra</h1>
              <p className="text-sm text-yellow-600 font-medium">Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
              Contact
            </a>
            <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-yellow-700 transition-colors">
              Get Quote
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-yellow-600 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-yellow-600 font-medium px-2 py-1">
                Home
              </a>
              <a href="#services" className="text-gray-700 hover:text-yellow-600 font-medium px-2 py-1">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-yellow-600 font-medium px-2 py-1">
                About Us
              </a>
              <a href="#contact" className="text-gray-700 hover:text-yellow-600 font-medium px-2 py-1">
                Contact
              </a>
              <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-700 transition-colors mx-2 mt-4">
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;