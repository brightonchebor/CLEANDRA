import React from 'react';
import { Home, Search, ArrowLeft, Phone, Calendar, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-yellow-400">404</span> - Page Not Found
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
              Oops! The page you're looking for seems to have been swept away. 
              Let us help you find what you need.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Large 404 Visual */}
          <div className="mb-12">
            <div className="bg-yellow-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-16 w-16 text-yellow-600" />
            </div>
            <h2 className="text-6xl lg:text-8xl font-bold text-gray-300 mb-4">404</h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              The page you're looking for might have been moved, deleted, or doesn't exist. 
              Don't worry, we'll help you get back on track!
            </p>
          </div>

          {/* Navigation Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Link
              to="/"
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <Home className="h-6 w-6 text-yellow-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Go Home</h4>
              <p className="text-gray-600 text-sm">
                Return to our homepage and start fresh
              </p>
            </Link>

            <Link
              to="/services"
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Browse Services</h4>
              <p className="text-gray-600 text-sm">
                Explore our cleaning services and solutions
              </p>
            </Link>

            <Link
              to="/contact"
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Get Help</h4>
              <p className="text-gray-600 text-sm">
                Contact us if you need assistance
              </p>
            </Link>
          </div>

          {/* Popular Links */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Pages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                to="/services"
                className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
              >
                Our Services
              </Link>
              <Link
                to="/pricing"
                className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/about-us"
                className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/book"
                className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
              >
                Book Service
              </Link>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => window.history.back()}
              className="bg-gray-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors flex items-center space-x-2"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Go Back</span>
            </button>
            <Link
              to="/"
              className="bg-yellow-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-700 transition-colors flex items-center space-x-2"
            >
              <Home className="h-5 w-5" />
              <span>Homepage</span>
            </Link>
            <Link
              to="/book"
              className="border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-600 hover:text-white transition-colors flex items-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Book Now</span>
            </Link>
          </div>

          {/* Help Text */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-2">
              If you believe this is an error, please contact our support team
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span>📧 info.cleandrasolutions@gmail.com</span>
              <span>•</span>
              <span>📞 +254 792 278719</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageNotFound;