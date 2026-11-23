import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Link as LinkIcon, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DiyaIcon, JhotiCorner } from './Cartoon/CartoonDoodles';
import MarigoldGarland from './Cartoon/MarigoldGarland';
import { REGISTRATION_ENABLED } from '../utils/constant';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-[#2B231D] text-[#FAF7F0] border-t-4 border-[#2B231D] relative overflow-hidden">
      {/* Decorative Cartoon Toran Ribbon at top of footer */}
      <div className="bg-amber-400 py-1.5 px-4 border-b-3 border-[#2B231D] flex items-center justify-between text-xs sm:text-sm font-black text-stone-900 select-none">
        <span className="flex items-center gap-1.5 font-odia">
          🌸 ଗୋପବନ୍ଧୁ ପଠାଗାର • ପାଇକରାପୁର, ପୁରୀ 🌸
        </span>
        <span className="hidden sm:inline font-cartoon">
          "ସେବା ହିଁ ମାନବ ଧର୍ମ" • ସ୍ଥାପିତ ୧୯୫୫
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">

          {/* Club Info Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 border-2 border-stone-900 p-1 flex items-center justify-center flex-shrink-0">
                <img src="/gd-logo.png" alt="logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="heading-font text-2xl sm:text-3xl font-black text-amber-300">
                ଗୋପବନ୍ଧୁ ପଠାଗାର ଯୁବକ ସଂଘ
              </h3>
            </div>

            <div className="bg-[#3A3028] border-2 border-[#54463B] rounded-2xl p-4 shadow-cartoon-sm">
              <p className="font-cartoon text-stone-200 text-sm sm:text-base leading-relaxed">
                ୧୯୮୫ ମସିହାରୁ ଆମେ ଗ୍ରାମର ଯୁବସମାଜକୁ ଏକତ୍ରିତ କରି ସାମାଜିକ ଓ ସାଂସ୍କୃତିକ କାର୍ଯ୍ୟକ୍ରମରେ ଅଗ୍ରଣୀ ଭୂମିକା ଗ୍ରହଣ କରୁଛୁ।
              </p>
            </div>

            <div className="space-y-3 pt-2 text-stone-300 font-cartoon text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 text-amber-400 flex-shrink-0" />
                <span>ପାଇକରାପୁର, କୃଷ୍ଣପ୍ରସାଦ, ପୁରୀ, ଓଡିଶା - ୭୫୨୦୩୨</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-emerald-400 flex-shrink-0" />
                <span>+91 7606976736</span>
              </div>
              <div className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-1 text-sky-400 flex-shrink-0" />
                <span className="break-all">gopabandhupathagarapkp@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h4 className="heading-font text-xl sm:text-2xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-stone-700">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-cartoon text-sm sm:text-base">
              <li>
                <Link to="/about" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">✦</span> About Us (ଆମ ବିଷୟରେ)
                </Link>
              </li>
              <li>
                <Link to="/all-members" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">✦</span> Our Members (ଆମର ସଦସ୍ୟ)
                </Link>
              </li>
              <li>
                <Link to="/all-sports" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">✦</span> Sports (କ୍ରୀଡ଼ା ଟୁର୍ଣ୍ଣାମେଣ୍ଟ)
                </Link>
              </li>
              <li>
                <Link to="/all-festivals" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">✦</span> Festivals (ପର୍ବପର୍ବାଣି)
                </Link>
              </li>
              <li>
                <a href="#service" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">✦</span> Service Work (ସେବା କାର୍ଯ୍ୟ)
                </a>
              </li>
              <li>
                <Link to="/admin" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">✦</span> Admin Portal (ପରିଚାଳନା)
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Community Notice */}
          <div className="md:col-span-4">
            <h4 className="heading-font text-xl sm:text-2xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-stone-700">
              Follow Us
            </h4>

            {/* Social Icons with 2D Cartoon Buttons */}
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-11 h-11 bg-white text-stone-900 rounded-xl border-2 border-stone-900 shadow-cartoon-sm flex items-center justify-center hover:bg-amber-400 hover:-translate-y-1 transition-all"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            <p className="font-cartoon text-stone-300 text-sm leading-relaxed mb-4">
              Stay connected with our community and never miss an update!
            </p>

            {/* Registration Callout - Requirement 1: Only displayed when registration is enabled */}
            {REGISTRATION_ENABLED && (
              <div className="bg-[#3A3028] border-2 border-[#54463B] rounded-2xl p-4">
                <p className="text-xs font-bold text-amber-300 mb-2">
                  କ୍ଲବ୍ ସହିତ ଯୋଡ଼ି ହେବାକୁ ଚାହାଁନ୍ତି କି?
                </p>
                <Link
                  to="/register"
                  className="w-full btn-cartoon-amber text-xs font-bold py-2"
                >
                  + ସଦସ୍ୟ ଭାବେ ପଞ୍ଜୀକରଣ କରନ୍ତୁ
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar with 2D Comic Styling */}
        <div className="border-t-2 border-stone-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 font-cartoon text-xs sm:text-sm">

            {/* Preserved Copyright text verbatim */}
            <p className="text-stone-300 font-semibold">
              © ୨୦୨୪ ଗୋପବନ୍ଧୁ ପଠାଗାର ଯୁବକ ସଂଘ। ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।
            </p>

            {/* Created by Instockly with link badge */}
            <div className="flex items-center space-x-1.5 bg-stone-800 px-3 py-1.5 rounded-full border border-stone-700">
              <span className="text-stone-400">Created by</span>
              <a
                href="https://jagnyadattadalai.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-bold flex items-center"
              >
                Jagnyadatta
                <LinkIcon className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

            <div className="flex space-x-6 text-stone-400">
              <Link to="/about" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/about" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
