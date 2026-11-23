import React, { useState, useEffect } from 'react';
import { Menu, X, User, Home, Users, Heart, Trophy, Info, Sparkles, UserPlus } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";
import { DiyaIcon, StickerBadge } from './Cartoon/CartoonDoodles';
import { REGISTRATION_ENABLED } from '../utils/constant';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items data
  const navItems = [
    { to: "/", label: "ମୁଖ୍ୟ ପୃଷ୍ଠା (Home)", icon: Home },
    { to: "/all-members", label: "ସଦସ୍ୟ (Members)", icon: Users },
    { to: "/all-festivals", label: "ସଂସ୍କୃତି (Culture)", icon: Heart },
    { to: "/all-sports", label: "କ୍ରୀଡ଼ା (Sports)", icon: Trophy },
    { to: "/about", label: "ଆମ ବିଷୟରେ (About)", icon: Info }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F0]/95 backdrop-blur-md shadow-[0_4px_0px_#2B231D] py-2 border-b-3 border-[#2B231D]'
          : 'bg-[#FAF7F0] py-2.5 sm:py-3 border-b-3 border-[#2B231D]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Club Title with Handcrafted Cartoon Badge */}
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center space-x-3 group"
          >
            {/* Logo in Cartoon Border Circle */}
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-300 border-2.5 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center overflow-hidden p-1 group-hover:rotate-6 transition-transform">
                <img
                  src="/gd-logo.png"
                  alt="Gopabandhu Pathagara"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-1.5 -right-1.5">
                <DiyaIcon className="w-4 h-4 animate-bounce-gentle" />
              </div>
            </div>

            {/* Title Text in Prabhakar Odia Font */}
            <div className="flex flex-col">
              <span className="heading-font text-lg sm:text-2xl font-black text-[#2B231D] tracking-tight leading-tight group-hover:text-amber-800 transition-colors">
                ଗୋପବନ୍ଧୁ ପଠାଗାର
              </span>
              <span className="font-cartoon text-xs sm:text-sm font-bold text-amber-800 flex items-center gap-1">
                <span>ପାଇକରାପୁର</span>
                <span className="text-[10px] bg-amber-200 text-stone-900 px-1.5 py-0.2 rounded-md border border-[#2B231D]">
                  ସ୍ଥାପିତ ୧୯୫୫
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation in 2D Cartoon Style */}
          <div className="hidden lg:flex items-center space-x-1.5 xl:space-x-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center space-x-1.5 px-3.5 py-2 text-xs xl:text-sm font-bold rounded-xl border-2 transition-all duration-150 ${
                    isActive
                      ? "bg-amber-400 text-stone-900 border-[#2B231D] shadow-cartoon-sm -translate-y-0.5"
                      : "bg-white/80 text-stone-800 border-transparent hover:border-[#2B231D] hover:bg-white hover:shadow-cartoon-sm"
                  }`}
                >
                  <IconComponent className="w-4 h-4 text-amber-700" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons - Desktop */}
          <div className="hidden sm:flex items-center space-x-2 sm:space-x-3">
            {/* Requirement 1: Join / Registration Button - Conditionally displayed based on REGISTRATION_ENABLED */}
            {REGISTRATION_ENABLED && (
              <Link
                to="/register"
                className="bg-emerald-400 hover:bg-emerald-300 text-stone-900 text-xs sm:text-sm font-bold px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl border-2 sm:border-2.5 border-[#2B231D] shadow-cartoon-sm hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center space-x-1.5"
              >
                <UserPlus className="w-4 h-4" />
                <span>ସଦସ୍ୟ ହୁଅନ୍ତୁ</span>
              </Link>
            )}

            {/* Admin / Login Button */}
            <Link
              to="/admin"
              className="bg-amber-400 hover:bg-amber-300 text-stone-900 text-xs sm:text-sm font-bold px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl border-2 sm:border-2.5 border-[#2B231D] shadow-cartoon-sm hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center space-x-1.5"
            >
              <User className="w-4 h-4" />
              <span>ପରିଚାଳନା</span>
            </Link>
          </div>

          {/* Mobile Menu Button with 2D Cartoon Push Button */}
          <button 
            className="lg:hidden p-2 bg-white rounded-xl border-2 border-[#2B231D] shadow-cartoon-sm text-stone-900 hover:bg-amber-100 transition-colors cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 pb-4 pt-2 border-t-2 border-[#2B231D]/20 animate-fadeIn">
            <div className="space-y-2 bg-white rounded-2xl border-2.5 border-[#2B231D] p-3 shadow-cartoon">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-bold border-2 transition-all ${
                      isActive
                        ? "bg-amber-400 text-stone-900 border-[#2B231D] shadow-cartoon-sm"
                        : "bg-stone-50 text-stone-700 border-transparent hover:border-[#2B231D] hover:bg-amber-50"
                    }`}
                  >
                    <IconComponent className="w-4 h-4 text-amber-700" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}

              <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
                {/* Requirement 1: Registration Button in mobile drawer conditionally rendered */}
                {REGISTRATION_ENABLED && (
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full bg-emerald-400 text-stone-900 text-center py-2.5 rounded-xl border-2 border-[#2B231D] shadow-cartoon-sm font-bold flex items-center justify-center space-x-2"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>ନୂତନ ସଦସ୍ୟ ପଞ୍ଜୀକରଣ (Register)</span>
                  </Link>
                )}

                <Link
                  to="/admin"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-amber-400 text-stone-900 text-center py-2.5 rounded-xl border-2 border-[#2B231D] shadow-cartoon-sm font-bold flex items-center justify-center space-x-2"
                >
                  <User className="w-4 h-4" />
                  <span>ଆଡମିନ୍ ପ୍ୟାନେଲ୍ (Admin Login)</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
