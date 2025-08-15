import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/logo2.png"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();

    const navigation = [
        { name: 'Home', href: '/', current: location.pathname === '/' },
        { name: 'About Us', href: '/about-us', current: location.pathname === '/about-us' },
        { name: 'Services', href: '/services', current: location.pathname === '/services' },
        { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
        { name: 'Book', href: '/book', current: location.pathname === '/book' },
        { name: 'Pricing', href: '/pricing', current: location.pathname === '/pricing' },
    ];

    return (
        <header className="bg-gray-100 shadow-sm">
            {/* Top contact bar */}
            <div className="bg-yellow-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-2 text-sm">
                        {/* Desktop layout */}
                        <div className="hidden sm:flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span>+254 792 278719</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <span>info.cleandrasolutions@gmail.com</span>
                            </div>
                        </div>

                        {/* Mobile layout - Phone left, Email right */}
                        <div className="flex sm:hidden items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>+254 792 278719</span>
                        </div>
                        <div className="flex sm:hidden items-center space-x-2">
                            <Mail className="h-4 w-4" />
                            <span>info.cleandrasolutions@gmail.com</span>
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
                        <img
                            src={logo}
                            alt="Cleandra Solutions Logo"
                            className="w-15 h-15 object-contain"
                        />
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Cleandra</h1>
                            <p className="text-sm text-yellow-600 font-medium">Solutions</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                {navigation.filter(item => item.name !== 'Book').map((item) => (
                                    <div key={item.name} className="relative">
                                        <Link
                                            to={item.href}
                                            className={`${item.current
                                                ? 'text-yellow-600 border-b-2 border-yellow-500'
                                                : 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50'
                                                } px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out`}
                                        >
                                            {item.name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-yellow-700 transition-colors flex items-center gap-2">
                            <Calendar size={20} />
                            Book Now
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
                            {navigation.filter(item => item.name !== 'Book').map((item) => (
                                <div key={item.name} className="relative">
                                    <Link
                                        to={item.href}
                                        className={`${item.current
                                            ? 'text-yellow-600 border-b-2 border-yellow-500'
                                            : 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50'
                                            } px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out`}
                                    >
                                        {item.name}
                                    </Link>
                                </div>
                            ))}
                            <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-700 transition-colors mx-2 mt-4 flex items-center justify-center gap-2">
                                <Calendar size={20} />
                                Book Now
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;