import React, { useState, useEffect } from 'react';
import { Crown, Coins, BookOpen, UserPlus, Trophy, Music, ArrowLeft, Search, Filter, Phone, Mail } from 'lucide-react';
import { FaPhone, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/constant';
import { StickerBadge, JhotiCorner, DiyaIcon } from '../Cartoon/CartoonDoodles';
import MarigoldGarland from '../Cartoon/MarigoldGarland';

const AllMembersPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Initial local members data
  const defaultMembers = [
    {
      id: 0,
      name: "ଶ୍ରୀ. ଅଜୟ ଦଳେଇ",
      role: "President",
      roleOdia: "ସଭାପତି",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      icon: Crown,
      experience: "10+ years leadership",
      phone: "+919876543200",
      whatsapp: "+919876543200",
      facebook: "ajay.dalei",
      email: "ajay.dalei@example.com",
      category: "president"
    },
    {
      id: -1,
      name: "ଶ୍ରୀ. ସଞ୍ଜୟ ସାହୁ",
      role: "Secretary",
      roleOdia: "ସମ୍ପାଦକ",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      icon: BookOpen,
      experience: "8+ years administration",
      phone: "+919876543201",
      whatsapp: "+919876543201",
      facebook: "sanjay.sahu",
      email: "sanjay.sahu@example.com",
      category: "secretary"
    },
    {
      id: 1,
      name: "ଶ୍ରୀ. ରୂପକ ଦଳେଇ",
      role: "Vice-President",
      roleOdia: "ଉପ-ସଭାପତି",
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
      roleOdia: "କୋଷାଧ୍ୟକ୍ଷ",
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
      roleOdia: "ପୂଜା ସମ୍ପାଦକ",
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
      roleOdia: "ସହ-ସମ୍ପାଦକ",
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
      roleOdia: "କ୍ରୀଡ଼ା ସମ୍ପାଦକ",
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
      roleOdia: "ସାଂସ୍କୃତିକ ସମ୍ପାଦକ",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      icon: Music,
      experience: "5+ years cultural events",
      phone: "+919876543215",
      whatsapp: "+919876543215",
      facebook: "prakash.dalei",
      email: "prakash.dalei@example.com",
      category: "committee"
    },
    {
      id: 7,
      name: "ଶ୍ରୀ. ରାଜେଶ ମହାପାତ୍ର",
      role: "Member",
      roleOdia: "ସଦସ୍ୟ",
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
      roleOdia: "ସଦସ୍ୟ",
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
      roleOdia: "ସଦସ୍ୟ",
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

  const [members, setMembers] = useState(defaultMembers);

  // Fetch live members from backend if available
  useEffect(() => {
    fetch(`${BASE_URL}/api/members/all`)
      .then(res => res.json())
      .then(result => {
        if (result?.data && result.data.length > 0) {
          // Merge unique phone
          const backendList = result.data.map(m => ({
            ...m,
            icon: m.role.toLowerCase().includes('president') ? Crown :
                  m.role.toLowerCase().includes('secretary') ? BookOpen :
                  m.role.toLowerCase().includes('treasurer') ? Coins :
                  m.role.toLowerCase().includes('sport') ? Trophy : UserPlus
          }));
          setMembers(backendList);
        }
      })
      .catch(err => console.log('Using default member list'));
  }, []);

  // Filter members by search and category
  const filtered = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.phone.includes(searchTerm);
    const matchesCat = selectedCategory === 'all' || member.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const president = filtered.find(m => m.category === 'president');
  const secretary = filtered.find(m => m.category === 'secretary');
  const committeeMembers = filtered.filter(m => m.category === 'committee');
  const regularMembers = filtered.filter(m => m.category === 'member');

  const MemberCard = ({ member, size = "medium" }) => {
    const IconComponent = member.icon || UserPlus;
    const isLarge = size === "large";

    return (
      <div className={`card-cartoon bg-white p-5 sm:p-6 hover:-translate-y-1 hover:shadow-cartoon-lg transition-all duration-300 relative group overflow-hidden ${
        isLarge ? "border-3 sm:border-4" : ""
      }`}>
        <div className="flex items-start space-x-4">
          {/* Profile Image with 2D Cartoon Border */}
          <div className="relative flex-shrink-0">
            <div className={`rounded-2xl border-2.5 border-[#2B231D] overflow-hidden bg-amber-50 shadow-cartoon-sm ${
              isLarge ? "w-24 h-28 sm:w-32 sm:h-36" : "w-20 h-24 sm:w-24 sm:h-28"
            }`}>
              <img
                src={member.image || "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            
            {/* Stamp on corner */}
            <div className="absolute -bottom-2 -left-1">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md border border-[#2B231D] bg-amber-300 shadow-xs">
                {member.roleOdia || member.role}
              </span>
            </div>
          </div>

          {/* Member Details */}
          <div className="flex-1 min-w-0 pr-6">
            <h3 className={`heading-font font-black text-[#2B231D] truncate leading-tight ${
              isLarge ? "text-xl sm:text-2xl" : "text-base sm:text-xl"
            }`}>
              {member.name}
            </h3>

            <p className="font-cartoon text-amber-800 font-extrabold text-xs sm:text-sm mt-1">
              {member.role}
            </p>

            <div className="flex items-center text-stone-600 text-xs font-bold mt-1.5">
              <PiSuitcaseSimpleBold className="w-3.5 h-3.5 mr-1 text-amber-700 flex-shrink-0" />
              <span className="truncate">{member.experience}</span>
            </div>

            {/* Contact Buttons */}
            <div className="flex items-center space-x-1.5 sm:space-x-2 mt-3 pt-1">
              <a
                href={`tel:${member.phone}`}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 text-emerald-800 border-1.5 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center hover:bg-emerald-200 transition-colors"
                title="Call"
              >
                <FaPhone className="w-3 h-3" />
              </a>

              <a
                href={`https://wa.me/${(member.whatsapp || member.phone).replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 text-emerald-800 border-1.5 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center hover:bg-emerald-200 transition-colors"
                title="WhatsApp"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
              </a>

              {member.facebook && (
                <a
                  href={`https://facebook.com/${member.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-sky-100 text-sky-800 border-1.5 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center hover:bg-sky-200 transition-colors"
                  title="Facebook"
                >
                  <FaFacebook className="w-3.5 h-3.5" />
                </a>
              )}

              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-rose-100 text-rose-800 border-1.5 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center hover:bg-rose-200 transition-colors"
                  title="Email"
                >
                  <FaEnvelope className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>

          {/* Role Icon */}
          <div className="w-9 h-9 rounded-xl bg-amber-200 border-2 border-[#2B231D] flex items-center justify-center flex-shrink-0 shadow-cartoon-sm">
            <IconComponent className="w-4 h-4 text-stone-900" />
          </div>
        </div>
      </div>
    );
  };

  const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-8">
      <h3 className="heading-font text-2xl sm:text-3xl font-black text-[#2B231D] mb-2">{title}</h3>
      {subtitle && <p className="font-cartoon text-stone-700 text-sm sm:text-base font-semibold">{subtitle}</p>}
      <div className="w-16 h-1.5 bg-amber-400 rounded-full border border-[#2B231D] mx-auto mt-2"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAF7F0] pt-20 sm:pt-24 pb-16">
      
      {/* Top Garland */}
      <MarigoldGarland />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        
        {/* Navigation & Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="btn-cartoon-white text-xs sm:text-sm py-2 px-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span>ପଛକୁ ଫେରନ୍ତୁ (Back)</span>
          </button>
          
          <div className="text-center">
            <h1 className="heading-font text-3xl sm:text-5xl font-black text-[#2B231D]">
              ସମସ୍ତ କମିଟି ମେମ୍ବର
            </h1>
            <p className="font-cartoon text-stone-700 text-sm sm:text-base font-bold mt-1">
              ଆମ ସମୁଦାୟର ସମସ୍ତ ସଦସ୍ୟମାନଙ୍କ ସହିତ ପରିଚିତ ହନ୍ତୁ
            </p>
          </div>

          {/* Spacer */}
          <div className="w-28 hidden sm:block"></div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="card-cartoon bg-white p-5 mb-10 shadow-cartoon">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="ଖୋଜନ୍ତୁ (Search by name, role, phone)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border-2 border-[#2B231D] rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0]"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {[
                { id: 'all', label: 'ସମସ୍ତ (All)' },
                { id: 'president', label: 'ସଭାପତି' },
                { id: 'secretary', label: 'ସମ୍ପାଦକ' },
                { id: 'committee', label: 'କମିଟି' },
                { id: 'member', label: 'ସାଧାରଣ ସଦସ୍ୟ' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold border-2 transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-amber-400 text-stone-900 border-[#2B231D] shadow-cartoon-sm"
                      : "bg-white text-stone-700 border-[#2B231D]/30 hover:border-[#2B231D]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* President and Secretary Section */}
        {(selectedCategory === 'all' || selectedCategory === 'president' || selectedCategory === 'secretary') && (
          <section className="mb-14">
            <SectionTitle 
              title="ଅଧ୍ୟକ୍ଷ ଏବଂ ସମ୍ପାଦକ" 
              subtitle="ଆମ ସଂଗଠନର ମୁଖ୍ୟ ପ୍ରତିନିଧିମାନେ"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {president && <MemberCard member={president} size="large" />}
              {secretary && <MemberCard member={secretary} size="large" />}
            </div>
          </section>
        )}

        {/* Committee Members Section */}
        {(selectedCategory === 'all' || selectedCategory === 'committee') && committeeMembers.length > 0 && (
          <section className="mb-14">
            <SectionTitle 
              title="କମିଟି ସଦସ୍ୟ" 
              subtitle="ବିଭିନ୍ନ ବିଭାଗର ଦାୟିତ୍ୱରେ ଥିବା ସଦସ୍ୟମାନେ"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {committeeMembers.map((member) => (
                <MemberCard key={member.id || member._id} member={member} size="medium" />
              ))}
            </div>
          </section>
        )}

        {/* Regular Members Section */}
        {(selectedCategory === 'all' || selectedCategory === 'member') && regularMembers.length > 0 && (
          <section className="mb-14">
            <SectionTitle 
              title="ସାଧାରଣ ସଦସ୍ୟ" 
              subtitle="ଆମ ସମୁଦାୟର ସକ୍ରିୟ ସଦସ୍ୟମାନେ"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {regularMembers.map((member) => (
                <MemberCard key={member.id || member._id} member={member} size="medium" />
              ))}
            </div>
          </section>
        )}

        {/* Total Count Badge */}
        <div className="text-center card-cartoon bg-white p-6 max-w-md mx-auto shadow-cartoon">
          <div className="font-odia text-4xl sm:text-5xl font-black text-amber-700 mb-1">
            {filtered.length}
          </div>
          <div className="font-cartoon text-stone-700 font-bold text-base">
            ମୋଟ ସଦସ୍ୟ ସଂଖ୍ୟା
          </div>
        </div>

      </div>
    </div>
  );
};

export default AllMembersPage;
