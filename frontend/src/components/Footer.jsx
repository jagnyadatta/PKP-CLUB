import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-sky-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-white bg-clip-text text-transparent">
              ଗୋପବନ୍ଧୁ ପଠାଗାର ଯୁବକ ସଂଘ
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              ୧୯୮୫ ମସିହାରୁ ଆମେ ଗ୍ରାମର ଯୁବସମାଜକୁ ଏକତ୍ରିତ କରି ସାମାଜିକ ଓ ସାଂସ୍କୃତିକ କାର୍ଯ୍ୟକ୍ରମରେ ଅଗ୍ରଣୀ ଭୂମିକା ଗ୍ରହଣ କରୁଛୁ।
            </p>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm">ପାଇକରାପୁର, କୃଷ୍ଣପ୍ରସାଦ, ପୁରୀ, ଓଡିଶା - ୭୫୨୦୩୨</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="text-sm">+91 7606976736</span>
              </div>
              <div className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm break-all">gopabandhupathagarapkp@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-sky-400 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/all-members" className="hover:text-sky-400 transition-colors duration-200">Our Members</Link></li>
              <li><Link to="/all-sports" className="hover:text-sky-400 transition-colors duration-200">Sports</Link></li>
              <li><Link to="/all-festivals" className="hover:text-sky-400 transition-colors duration-200">Festivals</Link></li>
              <li><Link to="/" className="hover:text-sky-400 transition-colors duration-200">Service Work</Link></li>
              <li><Link to="/" className="hover:text-sky-400 transition-colors duration-200">Contact</Link></li>
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
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © ୨୦୨୪ ଗୋପବନ୍ଧୁ ପଠାଗାର ଯୁବକ ସଂଘ। ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।
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