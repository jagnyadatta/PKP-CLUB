import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Link as LinkIcon } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Unity Sports Club</h3>
            <p className="text-gray-300 mb-6">
              Building champions, fostering community spirit, and creating lifelong friendships since 1985.
            </p>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">123 Sports Avenue, City Center</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">info@unitysportsclub.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-sky-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors duration-200">Our Members</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors duration-200">Sports</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors duration-200">Festivals</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors duration-200">Service Work</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
            <p className="text-gray-400 text-sm mt-6">
              Stay connected with our community and never miss an update!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Unity Sports Club. All rights reserved.
            </p>

            {/* Created by Instockly */}
            <div className="flex items-center space-x-1">
              <span className="text-gray-400 text-sm">Created by</span>
              <a
                href="https://instockly-web.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 text-sm flex items-center"
              >
                Instockly
                <LinkIcon className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-sky-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
