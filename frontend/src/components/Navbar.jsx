import React, { useState, useEffect } from 'react';
import { Menu, X, User, Home, Users, Heart, Trophy, Info } from 'lucide-react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items data
  const navItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/all-members", label: "Members", icon: Users },
    { to: "/all-festivals", label: "Our Culture", icon: Heart },
    { to: "/all-sports", label: "Sports", icon: Trophy },
    { to: "/about", label: "About Us", icon: Info }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' 
        : 'bg-white/90 backdrop-blur-sm py-2'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img src="/gd-logo.png" alt="logo" className='w-12 h-12 sm:w-16 sm:h-16 rounded-full cursor-pointer'/>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-sky-600 transition-colors duration-200 rounded-lg hover:bg-gray-50"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Login Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full transition-colors duration-200 flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-sky-600 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
              
              {/* Mobile Login Button */}
              <button className="w-full bg-sky-500 hover:bg-sky-600 text-white px-4 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 mt-4">
                <User className="w-5 h-5" />
                <span>Login</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;