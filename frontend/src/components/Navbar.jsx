import React, { useState, useEffect } from 'react';
import { Menu, X, User, Home } from 'lucide-react';

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' 
        : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800 hidden sm:block">
              Unity Club
            </span>
          </div>

          {/* Center Club Name - Desktop */}
          <div className="hidden md:block">
            <h1 className="text-2xl font-bold text-gray-800">Unity Sports Club</h1>
          </div>

          {/* Mobile Club Name */}
          <div className="md:hidden">
            <h1 className="text-lg font-bold text-gray-800">Unity Club</h1>
          </div>

          {/* Login Button - Desktop */}
          <div className="hidden sm:block">
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full transition-colors duration-200 flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="sm:hidden p-2"
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
          <div className="sm:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-2">
              <button className="w-full bg-sky-500 hover:bg-sky-600 text-white px-4 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
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