// components/AllMembersPage.jsx
import React from 'react';
import { Crown, Coins, BookOpen, UserPlus, Trophy, Music, ArrowLeft } from 'lucide-react';
import { FaPhone, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

const AllMembersPage = () => {
  const navigate = useNavigate();

  // Extended dummy data with president, secretary, and regular members
  const allMembers = [
    // President
    {
      id: 0,
      name: "ଶ୍ରୀ. ଅଜୟ ଦଳେଇ",
      role: "President",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      icon: Crown,
      experience: "10+ years leadership",
      phone: "+919876543200",
      whatsapp: "+919876543200",
      facebook: "ajay.dalei",
      email: "ajay.dalei@example.com",
      category: "president"
    },
    // Secretary
    {
      id: -1,
      name: "ଶ୍ରୀ. ସଞ୍ଜୟ ସାହୁ",
      role: "Secretary",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      icon: BookOpen,
      experience: "8+ years administration",
      phone: "+919876543201",
      whatsapp: "+919876543201",
      facebook: "sanjay.sahu",
      email: "sanjay.sahu@example.com",
      category: "secretary"
    },
    // Committee Members (existing ones)
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
      email: "rupa.dalei@example.com",
      category: "committee"
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
      email: "kahna.dalei@example.com",
      category: "committee"
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
      email: "ritik.dalei@example.com",
      category: "committee"
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
      email: "bapi.sahu@example.com",
      category: "committee"
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
      email: "tilu.behera@example.com",
      category: "committee"
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
      email: "prakash.dalei@example.com",
      category: "committee"
    },
    // Additional regular members
    {
      id: 7,
      name: "ଶ୍ରୀ. ରାଜେଶ ମହାପାତ୍ର",
      role: "Member",
      image: "https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      icon: UserPlus,
      experience: "3+ years community service",
      phone: "+919876543216",
      whatsapp: "+919876543216",
      facebook: "rajesh.mahapatra",
      email: "rajesh.mahapatra@example.com",
      category: "member"
    },
    {
      id: 8,
      name: "ଶ୍ରୀ. ସୁରେଶ ପ୍ରଧାନ",
      role: "Member",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      icon: UserPlus,
      experience: "2+ years volunteering",
      phone: "+919876543217",
      whatsapp: "+919876543217",
      facebook: "suresh.pradhan",
      email: "suresh.pradhan@example.com",
      category: "member"
    },
    {
      id: 9,
      name: "ଶ୍ରୀ. ଅନିଲ ପଟ୍ଟନାୟକ",
      role: "Member",
      image: "https://images.pexels.com/photos/3785090/pexels-photo-3785090.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      icon: UserPlus,
      experience: "4+ years event management",
      phone: "+919876543218",
      whatsapp: "+919876543218",
      facebook: "anil.pattnaik",
      email: "anil.pattnaik@example.com",
      category: "member"
    }
  ];

  // Filter members by category
  const president = allMembers.find(member => member.category === 'president');
  const secretary = allMembers.find(member => member.category === 'secretary');
  const committeeMembers = allMembers.filter(member => member.category === 'committee');
  const regularMembers = allMembers.filter(member => member.category === 'member');

  const MemberCard = ({ member, size = "medium" }) => {
    const IconComponent = member.icon;
    const isLarge = size === "large";
    
    return (
      <div className={`bg-gradient-to-br from-white to-sky-50 rounded-xl border border-gray-100 shadow-[0_10px_30px_rgba(14,165,233,0.1)] hover:shadow-[0_20px_40px_rgba(14,165,233,0.25)] transform hover:-translate-y-1 transition-all duration-500 p-4 sm:p-6 group overflow-hidden ${
        isLarge ? 'sm:rounded-2xl' : ''
      }`}>
        <div className={`flex items-start space-x-3 ${isLarge ? 'sm:space-x-4' : ''}`}>
          {/* Profile Image */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-sky-400 rounded-lg blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <img 
              src={member.image}
              alt={member.name}
              className={`relative rounded-lg object-cover border-2 border-sky-200 shadow-md group-hover:scale-105 transition-transform duration-300 ${
                isLarge ? 'w-20 h-24 sm:w-28 sm:h-32' : 'w-16 h-20 sm:w-20 sm:h-24'
              }`}
            />
          </div>
          
          {/* Member Details */}
          <div className="flex-1 min-w-0">
            <h3 className={`font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent truncate leading-tight ${
              isLarge ? 'text-lg sm:text-xl' : 'text-sm sm:text-base'
            }`}>
              {member.name}
            </h3>
            <p className={`text-sky-600 font-bold mt-1 ${
              isLarge ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
            }`}>
              {member.role}
            </p>
            <div className="flex items-center text-gray-600 mt-1">
              <PiSuitcaseSimpleBold className="w-3 h-3 mr-1 text-sky-500 flex-shrink-0" />
              <span className={`font-semibold truncate ${isLarge ? 'text-sm' : 'text-xs'}`}>
                {member.experience}
              </span>
            </div>

            {/* Social Media Links */}
            <div className={`flex items-center space-x-1 mt-2 ${isLarge ? 'sm:space-x-2 sm:mt-3' : ''}`}>
              <a href={`tel:${member.phone}`} className="bg-green-100 text-green-600 p-1 rounded-md hover:bg-green-200 transition-colors duration-200 group/social" title="Call">
                <FaPhone className="w-3 h-3 group-hover/social:scale-110 transition-transform" />
              </a>
              <a href={`https://wa.me/${member.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-green-100 text-green-600 p-1 rounded-md hover:bg-green-200 transition-colors duration-200 group/social" title="WhatsApp">
                <FaWhatsapp className="w-3 h-3 group-hover/social:scale-110 transition-transform" />
              </a>
              <a href={`https://facebook.com/${member.facebook}`} target="_blank" rel="noopener noreferrer" className="bg-blue-100 text-blue-600 p-1 rounded-md hover:bg-blue-200 transition-colors duration-200 group/social" title="Facebook">
                <FaFacebook className="w-3 h-3 group-hover/social:scale-110 transition-transform" />
              </a>
              <a href={`mailto:${member.email}`} className="bg-red-100 text-red-600 p-1 rounded-md hover:bg-red-200 transition-colors duration-200 group/social" title="Email">
                <FaEnvelope className="w-3 h-3 group-hover/social:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Role Icon */}
          <div className="bg-sky-100 text-sky-600 rounded-full p-1.5 shadow-md flex-shrink-0">
            <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
        </div>
      </div>
    );
  };

  const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-8">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-sky-700 mb-2">{title}</h3>
      {subtitle && <p className="text-gray-600 text-sm sm:text-base">{subtitle}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 py-8 mt-12 sm:mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-sky-600 hover:text-sky-700 transition-colors duration-200 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back</span>
          </button>
          
          {/* <div className="text-center flex-1 mx-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent">
              ସମସ୍ତ କମିଟି ମେମ୍ବର
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              ଆମ ସମୁଦାୟର ସମସ୍ତ ସଦସ୍ୟମାନଙ୍କ ସହିତ ପରିଚିତ ହନ୍ତୁ
            </p>
          </div> */}
          
          {/* <div className="w-20"></div> Spacer for balance */}
        </div>

        {/* President and Secretary Section */}
        <section className="mb-12">
          <SectionTitle 
            title="ଅଧ୍ୟକ୍ଷ ଏବଂ ସମ୍ପାଦକ" 
            subtitle="ଆମ ସଂଗଠନର ମୁଖ୍ୟ ପ୍ରତିନିଧିମାନେ"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {president && <MemberCard member={president} size="large" />}
            {secretary && <MemberCard member={secretary} size="large" />}
          </div>
        </section>

        {/* Committee Members Section */}
        <section className="mb-12">
          <SectionTitle 
            title="କମିଟି ସଦସ୍ୟ" 
            subtitle="ବିଭିନ୍ନ ବିଭାଗର ଦାୟିତ୍ୱରେ ଥିବା ସଦସ୍ୟମାନେ"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {committeeMembers.map((member) => (
              <MemberCard key={member.id} member={member} size="medium" />
            ))}
          </div>
        </section>

        {/* Regular Members Section */}
        <section className="mb-12">
          <SectionTitle 
            title="ସାଧାରଣ ସଦସ୍ୟ" 
            subtitle="ଆମ ସମୁଦାୟର ସକ୍ରିୟ ସଦସ୍ୟମାନେ"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {regularMembers.map((member) => (
              <MemberCard key={member.id} member={member} size="medium" />
            ))}
          </div>
        </section>

        {/* Total Count */}
        <div className="text-center bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto">
          <div className="text-3xl sm:text-4xl font-bold text-sky-600 mb-2">
            {allMembers.length}
          </div>
          <div className="text-gray-600 font-semibold">ମୋଟ ସଦସ୍ୟ ସଂଖ୍ୟା</div>
        </div>
      </div>
    </div>
  );
};

export default AllMembersPage;