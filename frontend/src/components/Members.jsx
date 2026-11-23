import React from 'react';
import { ChevronRight, Crown, Coins, BookOpen, UserPlus, Trophy, Music } from 'lucide-react';
import { FaPhone, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { StickerBadge, JhotiCorner } from './Cartoon/CartoonDoodles';

const Members = () => {
  const navigate = useNavigate();
  
  const members = [
    {
      id: 1,
      name: "ଶ୍ରୀ. ରୂପକ ଦଳେଇ",
      role: "Vice-President",
      roleOdia: "ଉପ-ସଭାପତି",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      icon: Crown,
      badgeColor: "bg-amber-400 text-stone-900",
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
      roleOdia: "କୋଷାଧ୍ୟକ୍ଷ",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      icon: Coins,
      badgeColor: "bg-emerald-400 text-stone-900",
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
      roleOdia: "ପୂଜା ସମ୍ପାଦକ",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      icon: BookOpen,
      badgeColor: "bg-rose-400 text-white",
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
      roleOdia: "ସହ-ସମ୍ପାଦକ",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      icon: UserPlus,
      badgeColor: "bg-sky-400 text-stone-900",
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
      roleOdia: "କ୍ରୀଡ଼ା ସମ୍ପାଦକ",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      icon: Trophy,
      badgeColor: "bg-amber-400 text-stone-900",
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
      roleOdia: "ସାଂସ୍କୃତିକ ସମ୍ପାଦକ",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      icon: Music,
      badgeColor: "bg-purple-400 text-white",
      experience: "5+ years cultural events",
      phone: "+919876543215",
      whatsapp: "+919876543215",
      facebook: "prakash.dalei",
      email: "prakash.dalei@example.com"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F0] border-b-3 sm:border-b-4 border-[#2B231D] relative overflow-hidden">
      
      {/* Decorative Traditional Corner */}
      <div className="absolute top-4 left-4 opacity-30 hidden sm:block">
        <JhotiCorner position="top-left" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-3">
            <StickerBadge text="କର୍ମଠ ସଦସ୍ୟଗଣ" color="amber" rotate="-rotate-2" />
          </div>

          <h2 className="heading-font text-3xl sm:text-5xl md:text-6xl font-black text-[#2B231D] mb-4">
            କମିଟି ମେମ୍ବର
          </h2>

          <div className="w-24 sm:w-32 h-2.5 bg-amber-400 rounded-full border-2 border-[#2B231D] mx-auto mb-5 shadow-cartoon-sm"></div>

          <p className="font-cartoon text-base sm:text-xl text-stone-700 max-w-2xl mx-auto leading-relaxed">
            ଆମର କ୍ଲବ୍‌କୁ ଏକ ସୁସଂଗଠିତ ସମୁଦାୟରେ ପରିଣତ କରୁଥିବା ସମର୍ପିତ କମିଟି ସଦସ୍ୟମାନଙ୍କ ସହ ପରିଚୟ କରନ୍ତୁ।
          </p>
        </div>

        {/* Responsive Grid with Handcrafted 2D Cartoon Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {members.map((member) => {
            const IconComponent = member.icon;
            return (
              <div 
                key={member.id}
                className="card-cartoon bg-white p-5 sm:p-6 hover:-translate-y-1.5 hover:shadow-cartoon-lg transition-all duration-300 relative group overflow-hidden"
              >
                {/* Role Icon Stamp top right */}
                <div className="absolute top-4 right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-300 border-2 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                  <IconComponent className="w-5 h-5 text-stone-900" />
                </div>

                <div className="flex items-start space-x-4">
                  {/* Profile Image with 2D Cartoon Border Frame */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl border-2.5 border-[#2B231D] overflow-hidden bg-amber-50 shadow-cartoon-sm group-hover:scale-102 transition-transform">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Member Details */}
                  <div className="flex-1 min-w-0 pr-6">
                    <h3 className="heading-font text-base sm:text-xl font-bold text-[#2B231D] truncate leading-tight">
                      {member.name}
                    </h3>

                    {/* Role Stamp */}
                    <div className="inline-block mt-1">
                      <span className={`text-[11px] sm:text-xs font-bold px-2 py-0.5 rounded-md border border-[#2B231D] shadow-xs ${member.badgeColor}`}>
                        {member.role} ({member.roleOdia})
                      </span>
                    </div>

                    <div className="flex items-center text-stone-600 text-xs font-bold mt-2">
                      <PiSuitcaseSimpleBold className="w-3.5 h-3.5 mr-1 text-amber-700 flex-shrink-0" />
                      <span className="truncate">{member.experience}</span>
                    </div>

                    {/* Social Media & Contact Buttons */}
                    <div className="flex items-center space-x-1.5 sm:space-x-2 mt-3 pt-1">
                      <a
                        href={`tel:${member.phone}`}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 text-emerald-800 border-1.5 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center hover:bg-emerald-200 transition-colors"
                        title="Call"
                      >
                        <FaPhone className="w-3 h-3" />
                      </a>

                      <a
                        href={`https://wa.me/${member.whatsapp.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 text-emerald-800 border-1.5 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center hover:bg-emerald-200 transition-colors"
                        title="WhatsApp"
                      >
                        <FaWhatsapp className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={`https://facebook.com/${member.facebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-sky-100 text-sky-800 border-1.5 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center hover:bg-sky-200 transition-colors"
                        title="Facebook"
                      >
                        <FaFacebook className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={`mailto:${member.email}`}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-rose-100 text-rose-800 border-1.5 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center hover:bg-rose-200 transition-colors"
                        title="Email"
                      >
                        <FaEnvelope className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button 
            onClick={() => navigate('/all-members')} 
            className="btn-cartoon-amber text-base sm:text-lg"
          >
            <span>ସମସ୍ତ କମିଟି ମେମ୍ବର</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Members;
