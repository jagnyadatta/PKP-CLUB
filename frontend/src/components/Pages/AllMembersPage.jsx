import React, { useState, useEffect } from 'react';
import { Crown, Coins, BookOpen, UserPlus, Trophy, Music, ArrowLeft, Search, Filter } from 'lucide-react';
import { FaPhone, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { BASE_URL, ROLE_ODIA_MAP } from '../../utils/constant';
import { StickerBadge, JhotiCorner, DiyaIcon } from '../Cartoon/CartoonDoodles';
import { MemberPhotoPlaceholder } from '../Cartoon/EmptyPhotoPlaceholder';
import MarigoldGarland from '../Cartoon/MarigoldGarland';

const AllMembersPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Initial local members data with Instagram profile field (replacing email per Requirement 6)
  const defaultMembers = [
    {
      id: 0,
      name: "ଶ୍ରୀ. ଅଜୟ ଦଳେଇ",
      role: "President",
      roleOdia: "ସଭାପତି",
      /* image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop", */
      image: "",
      icon: Crown,
      experience: "10+ years leadership",
      phone: "+919876543200",
      whatsapp: "+919876543200",
      facebook: "ajay.dalei",
      instagram: "ajay.dalei",
      category: "president"
    },
    {
      id: -1,
      name: "ଶ୍ରୀ. ସଞ୍ଜୟ ସାହୁ",
      role: "Secretary",
      roleOdia: "ସମ୍ପାଦକ",
      /* image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop", */
      image: "",
      icon: BookOpen,
      experience: "8+ years administration",
      phone: "+919876543201",
      whatsapp: "+919876543201",
      facebook: "sanjay.sahu",
      instagram: "sanjay.sahu",
      category: "secretary"
    },
    {
      id: 1,
      name: "ଶ୍ରୀ. ରୂପକ ଦଳେଇ",
      role: "Vice-President",
      roleOdia: "ଉପ-ସଭାପତି",
      /* image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop", */
      image: "",
      icon: Crown,
      experience: "5+ years leadership",
      phone: "+919876543210",
      whatsapp: "+919876543210",
      facebook: "rupa.dalei",
      instagram: "rupa.dalei",
      category: "committee"
    },
    {
      id: 2,
      name: "ଶ୍ରୀ. କାହ୍ନା ଦଳେଇ",
      role: "Treasurer",
      roleOdia: "କୋଷାଧ୍ୟକ୍ଷ",
      /* image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop", */
      image: "",
      icon: Coins,
      experience: "8+ years financial management",
      phone: "+919876543211",
      whatsapp: "+919876543211",
      facebook: "kahna.dalei",
      instagram: "kahna.dalei",
      category: "committee"
    },
    {
      id: 3,
      name: "ଶ୍ରୀ. ରୀତିକ ଦଳେଇ",
      role: "Puja Secretary",
      roleOdia: "ପୂଜା ସମ୍ପାଦକ",
      /* image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop", */
      image: "",
      icon: BookOpen,
      experience: "6+ years cultural activities",
      phone: "+919876543212",
      whatsapp: "+919876543212",
      facebook: "ritik.dalei",
      instagram: "ritik.dalei",
      category: "committee"
    },
    {
      id: 4,
      name: "ଶ୍ରୀ. ବାପି ସାହୁ",
      role: "Assistant Secretary",
      roleOdia: "ସହ-ସମ୍ପାଦକ",
      /* image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop", */
      image: "",
      icon: UserPlus,
      experience: "4+ years administration",
      phone: "+919876543213",
      whatsapp: "+919876543213",
      facebook: "bapi.sahu",
      instagram: "bapi.sahu",
      category: "committee"
    },
    {
      id: 5,
      name: "ଶ୍ରୀ. ଟିଲୁ ବେହେରା",
      role: "Sport Secretary",
      roleOdia: "କ୍ରୀଡ଼ା ସମ୍ପାଦକ",
      /* image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop", */
      image: "",
      icon: Trophy,
      experience: "7+ years sports coordination",
      phone: "+919876543214",
      whatsapp: "+919876543214",
      facebook: "tilu.behera",
      instagram: "tilu.behera",
      category: "committee"
    },
    {
      id: 6,
      name: "ଶ୍ରୀ. ପ୍ରକାଶ ଦଳେଇ",
      role: "Cultural Secretary",
      roleOdia: "ସାଂସ୍କୃତିକ ସମ୍ପାଦକ",
      /* image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop", */
      image: "",
      icon: Music,
      experience: "5+ years cultural events",
      phone: "+919876543215",
      whatsapp: "+919876543215",
      facebook: "prakash.dalei",
      instagram: "prakash.dalei",
      category: "committee"
    },
    {
      id: 7,
      name: "ଶ୍ରୀ. ରାଜେଶ ମହାପାତ୍ର",
      role: "Member",
      roleOdia: "ସଦସ୍ୟ",
      /* image: "https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop", */
      image: "",
      icon: UserPlus,
      experience: "3+ years community service",
      phone: "+919876543216",
      whatsapp: "+919876543216",
      facebook: "rajesh.mahapatra",
      instagram: "rajesh.mahapatra",
      category: "member"
    },
    {
      id: 8,
      name: "ଶ୍ରୀ. ସୁରେଶ ପ୍ରଧାନ",
      role: "Member",
      roleOdia: "ସଦସ୍ୟ",
      /* image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop", */
      image: "",
      icon: UserPlus,
      experience: "2+ years volunteering",
      phone: "+919876543217",
      whatsapp: "+919876543217",
      facebook: "suresh.pradhan",
      instagram: "suresh.pradhan",
      category: "member"
    },
    {
      id: 9,
      name: "ଶ୍ରୀ. ଅନିଲ ପଟ୍ଟନାୟକ",
      role: "Member",
      roleOdia: "ସଦସ୍ୟ",
      /* image: "https://images.pexels.com/photos/3785090/pexels-photo-3785090.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop", */
      image: "",
      icon: UserPlus,
      experience: "4+ years event management",
      phone: "+919876543218",
      whatsapp: "+919876543218",
      facebook: "anil.pattnaik",
      instagram: "anil.pattnaik",
      category: "member"
    }
  ];

  const [members, setMembers] = useState(defaultMembers);

  // Fetch live members from backend dynamically
  useEffect(() => {
    fetch(`${BASE_URL}/api/members/all`)
      .then(res => res.json())
      .then(result => {
        if (result?.data && result.data.length > 0) {
          const backendList = result.data.map(m => ({
            ...m,
            roleOdia: m.roleOdia || ROLE_ODIA_MAP[m.role] || (
              m.role === 'President' ? 'ସଭାପତି' :
              m.role === 'Secretary' ? 'ସମ୍ପାଦକ' :
              m.role === 'Vice-President' ? 'ଉପ-ସଭାପତି' :
              m.role === 'Treasurer' ? 'କୋଷାଧ୍ୟକ୍ଷ' :
              m.role === 'Puja Secretary' ? 'ପୂଜା ସମ୍ପାଦକ' :
              m.role === 'Assistant Secretary' ? 'ସହ-ସମ୍ପାଦକ' :
              m.role === 'Sport Secretary' ? 'କ୍ରୀଡ଼ା ସମ୍ପାଦକ' :
              m.role === 'Cultural Secretary' ? 'ସାଂସ୍କୃତିକ ସମ୍ପାଦକ' : 'ସଦସ୍ୟ'
            ),
            icon: m.role.toLowerCase().includes('president') ? Crown :
                  m.role.toLowerCase().includes('secretary') ? BookOpen :
                  m.role.toLowerCase().includes('treasurer') ? Coins :
                  m.role.toLowerCase().includes('sport') ? Trophy :
                  m.role.toLowerCase().includes('culture') ? Music : UserPlus
          }));
          setMembers(backendList);
        }
      })
      .catch(err => console.log('Using default member list'));
  }, []);

  const formatInstagramUrl = (handle) => {
    if (!handle) return '';
    if (handle.startsWith('http://') || handle.startsWith('https://')) return handle;
    return `https://instagram.com/${handle.replace('@', '').trim()}`;
  };

  // Filter members by search and category
  const filtered = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.phone.includes(searchTerm);
    const matchesCat = selectedCategory === 'all' || member.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const categories = [
    { id: 'all', label: 'ସମସ୍ତ ସଦସ୍ୟ' },
    { id: 'president', label: 'ସଭାପତି' },
    { id: 'secretary', label: 'ସମ୍ପାଦକ' },
    { id: 'committee', label: 'କମିଟି ସଦସ୍ୟ' },
    { id: 'member', label: 'ସାଧାରଣ ସଦସ୍ୟ' }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F0] pt-24 sm:pt-28 pb-16">
      
      {/* Top Garland Banner */}
      <MarigoldGarland />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        
        {/* Navigation Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/')}
            className="btn-cartoon-white text-xs sm:text-sm py-2 px-4 inline-flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ମୁଖ୍ୟ ପୃଷ୍ଠାକୁ ଫେରନ୍ତୁ (Back to Home)</span>
          </button>
        </div>

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-block mb-3">
            <StickerBadge text="ସମସ୍ତ ସଦସ୍ୟ ତାଲିକା" color="amber" rotate="-rotate-1" />
          </div>

          <h1 className="heading-font text-3xl sm:text-5xl font-black text-[#2B231D] mb-3">
            ଆମର କ୍ଲବ୍ ସଦସ୍ୟଗଣ
          </h1>

          <div className="w-24 h-2 bg-amber-400 rounded-full border-2 border-[#2B231D] mx-auto mb-4 shadow-cartoon-sm"></div>

          <p className="font-cartoon text-stone-700 max-w-2xl mx-auto text-sm sm:text-base font-semibold">
            ଗୋପବନ୍ଧୁ ପଠାଗାରର ପ୍ରତ୍ୟେକ ସଦସ୍ୟଙ୍କ ନିସ୍ୱାର୍ଥପର ସେବା ଓ ସହଯୋଗ ଆମ ଗ୍ରାମର ଉନ୍ନତିର ମୂଳଦୁଆ।
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="card-cartoon bg-white p-5 mb-8 shadow-cartoon flex flex-col md:flex-row gap-4 items-center justify-between">
          
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="ନାମ, ପଦବୀ କିମ୍ବା ଫୋନ୍ ନମ୍ବର ଖୋଜନ୍ତୁ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border-2 border-[#2B231D] rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto font-cartoon">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-400 text-stone-900 border-[#2B231D] shadow-cartoon-sm'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-[#2B231D]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map(member => {
            const IconComponent = member.icon || UserPlus;
            const instaUrl = formatInstagramUrl(member.instagram);
            return (
              <div
                key={member._id || member.id}
                className="card-cartoon bg-white p-5 sm:p-6 hover:-translate-y-1.5 hover:shadow-cartoon-lg transition-all duration-300 relative group overflow-hidden"
              >
                <div className="flex items-start space-x-4">
                  {/* Photo Frame - Requirement 5: Placeholder frame */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl border-2.5 border-[#2B231D] overflow-hidden bg-amber-50 shadow-cartoon-sm group-hover:scale-102 transition-transform flex items-center justify-center">
                      {/* <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      /> */}
                      {member.image && member.image.startsWith("http") && !member.image.includes("pexels.com") ? (
                        <img 
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <MemberPhotoPlaceholder role={member.role} />
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="heading-font text-base sm:text-xl font-bold text-[#2B231D] truncate leading-tight">
                      {member.name}
                    </h3>

                    <div className="inline-block mt-1">
                      <span className="text-[11px] sm:text-xs font-bold px-2 py-0.5 rounded-md border border-[#2B231D] bg-amber-300 text-stone-900 shadow-xs">
                        {member.role} {member.roleOdia ? `(${member.roleOdia})` : ''}
                      </span>
                    </div>

                    <div className="flex items-center text-stone-600 text-xs font-bold mt-2">
                      <PiSuitcaseSimpleBold className="w-3.5 h-3.5 mr-1 text-amber-700 flex-shrink-0" />
                      <span className="truncate">{member.experience || 'Community Leader'}</span>
                    </div>

                    {/* Requirement 6: Social Media with Instagram replacing email */}
                    <div className="flex items-center space-x-1.5 sm:space-x-2 mt-3 pt-1">
                      <a
                        href={`tel:${member.phone}`}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 text-emerald-800 border-1.5 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center hover:bg-emerald-200 transition-colors"
                        title="Call"
                      >
                        <FaPhone className="w-3 h-3" />
                      </a>

                      {member.whatsapp && (
                        <a
                          href={`https://wa.me/${member.whatsapp.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 text-emerald-800 border-1.5 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center hover:bg-emerald-200 transition-colors"
                          title="WhatsApp"
                        >
                          <FaWhatsapp className="w-3.5 h-3.5" />
                        </a>
                      )}

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

                      {/* Requirement 6: Instagram profile link in new tab */}
                      {instaUrl && (
                        <a
                          href={instaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-pink-100 text-pink-700 border-1.5 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center hover:bg-pink-200 transition-colors"
                          title="Instagram Profile"
                        >
                          <FaInstagram className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default AllMembersPage;
