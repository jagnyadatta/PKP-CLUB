import React from 'react';
import { ChevronRight, Crown, Coins, BookOpen, UserPlus, Trophy, Music } from 'lucide-react';
import { FaPhone, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

const Members = () => {
  const navigate = useNavigate();
  const members = [
    {
      id: 1,
      name: "ଶ୍ରୀ. ରୂପକ ଦଳେଇ",
      role: "Vice-President",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      icon: Crown,
      experience: "5+ years leadership",
      phone: "+919876543210",
      whatsapp: "+919876543210",
      facebook: "rupa.dalei",
      email: "rupa.dalei@example.com"
    },
    {
      id: 2,
      name: "ଶ୍ରୀ. କାହ୍ନା ଦଳେଇ",
      role: "Treasurer",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      icon: Coins,
      experience: "8+ years financial management",
      phone: "+919876543211",
      whatsapp: "+919876543211",
      facebook: "kahna.dalei",
      email: "kahna.dalei@example.com"
    },
    {
      id: 3,
      name: "ଶ୍ରୀ. ରୀତିକ ଦଳେଇ",
      role: "Puja Secretary",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      icon: BookOpen,
      experience: "6+ years cultural activities",
      phone: "+919876543212",
      whatsapp: "+919876543212",
      facebook: "ritik.dalei",
      email: "ritik.dalei@example.com"
    },
    {
      id: 4,
      name: "ଶ୍ରୀ. ବାପି ସାହୁ",
      role: "Assistant Secretary",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      icon: UserPlus,
      experience: "4+ years administration",
      phone: "+919876543213",
      whatsapp: "+919876543213",
      facebook: "bapi.sahu",
      email: "bapi.sahu@example.com"
    },
    {
      id: 5,
      name: "ଶ୍ରୀ. ଟିଲୁ ବେହେରା",
      role: "Sport Secretary",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      icon: Trophy,
      experience: "7+ years sports coordination",
      phone: "+919876543214",
      whatsapp: "+919876543214",
      facebook: "tilu.behera",
      email: "tilu.behera@example.com"
    },
    {
      id: 6,
      name: "ଶ୍ରୀ. ପ୍ରକାଶ ଦଳେଇ",
      role: "Cultural Secretary",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      icon: Music,
      experience: "5+ years cultural events",
      phone: "+919876543215",
      whatsapp: "+919876543215",
      facebook: "prakash.dalei",
      email: "prakash.dalei@example.com"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent mb-6">
            କମିଟି ମେମ୍ବର
          </h2>
          <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto">
            ଆମର କ୍ଲବ୍‌କୁ ଏକ ସୁସଂଗଠିତ ସମୁଦାୟରେ ପରିଣତ କରୁଥିବା ସମର୍ପିତ କମିଟି ସଦସ୍ୟମାନଙ୍କ ସହ ପରିଚୟ କରନ୍ତୁ।
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8">
          {members.map((member) => {
            const IconComponent = member.icon;
            return (
              <div 
                key={member.id}
                className="relative bg-gradient-to-br from-white to-sky-50 rounded-xl sm:rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(14,165,233,0.1)] sm:shadow-[0_25px_50px_rgba(14,165,233,0.15)] hover:shadow-[0_20px_40px_rgba(14,165,233,0.25)] transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 p-4 sm:p-6 group overflow-hidden"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  {/* Profile Image */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-sky-400 rounded-lg sm:rounded-xl blur-md sm:blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="relative w-18 h-20 sm:w-28 sm:h-28 rounded-lg sm:rounded-xl object-cover border-2 sm:border-3 border-sky-200 shadow-md sm:shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Member Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent truncate leading-tight sm:leading-normal">
                      {member.name}
                    </h3>
                    <p className="text-sky-600 font-bold text-xs sm:text-sm mt-1">
                      {member.role}
                    </p>
                    <div className="flex items-center text-gray-600 text-xs mt-1">
                      <PiSuitcaseSimpleBold className="w-3 h-3 mr-1 text-sky-500 flex-shrink-0" />
                      <span className="font-semibold truncate">{member.experience}</span>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center space-x-1 sm:space-x-2 mt-2 sm:mt-3">
                      {/* Phone */}
                      <a
                        href={`tel:${member.phone}`}
                        className="bg-green-100 text-green-600 p-1 sm:p-1.5 rounded-md sm:rounded-lg hover:bg-green-200 transition-colors duration-200 group/social"
                        title="Call"
                      >
                        <FaPhone className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover/social:scale-110 transition-transform" />
                      </a>

                      {/* WhatsApp */}
                      <a
                        href={`https://wa.me/${member.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-100 text-green-600 p-1 sm:p-1.5 rounded-md sm:rounded-lg hover:bg-green-200 transition-colors duration-200 group/social"
                        title="WhatsApp"
                      >
                        <FaWhatsapp className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover/social:scale-110 transition-transform" />
                      </a>

                      {/* Facebook */}
                      <a
                        href={`https://facebook.com/${member.facebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-100 text-blue-600 p-1 sm:p-1.5 rounded-md sm:rounded-lg hover:bg-blue-200 transition-colors duration-200 group/social"
                        title="Facebook"
                      >
                        <FaFacebook className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover/social:scale-110 transition-transform" />
                      </a>

                      {/* Email */}
                      <a
                        href={`mailto:${member.email}`}
                        className="bg-red-100 text-red-600 p-1 sm:p-1.5 rounded-md sm:rounded-lg hover:bg-red-200 transition-colors duration-200 group/social"
                        title="Email"
                      >
                        <FaEnvelope className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover/social:scale-110 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Role Icon */}
                  <div className="bg-sky-100 text-sky-600 rounded-full p-1.5 sm:p-2 shadow-md sm:shadow-lg flex-shrink-0">
                    <IconComponent className="w-3 h-3 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button onClick={() => navigate('/all-members')} className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-3 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-full transition-all duration-200 inline-flex items-center space-x-2 text-base text-md sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <span>ସମସ୍ତ କମିଟି ମେମ୍ବର</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Members;