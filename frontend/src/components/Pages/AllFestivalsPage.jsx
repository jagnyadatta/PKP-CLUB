import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Star, Sparkles, MapPin, Users, Clock, ChevronRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/constant';
import { StickerBadge, JhotiCorner, DiyaIcon } from '../Cartoon/CartoonDoodles';
import { FestivalPhotoPlaceholder } from '../Cartoon/EmptyPhotoPlaceholder';
import MarigoldGarland from '../Cartoon/MarigoldGarland';

const AllFestivalsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModal, setActiveModal] = useState(null);

  // Default festivals list preserved verbatim
  const defaultFestivals = [
    {
      id: 1,
      name: "ପଞ୍ଚୁଦୋଳ ଯାତ୍ରା",
      /* image: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", */
      image: "",
      date: "ମାର୍ଚ୍ଚ ୧୫-୨୦, ୨୦୨୪",
      description: "ପାରମ୍ପାରିକ ପଞ୍ଚୁଦୋଳ ଯାତ୍ରା ଉତ୍ସବ ଓ ଭକ୍ତିଭାବପୂର୍ଣ୍ଣ ଆୟୋଜନ",
      location: "ମୁଖ୍ୟ ମନ୍ଦିର ପ୍ରାଙ୍ଗଣ",
      duration: "୬ ଦିନ",
      participants: "୫୦୦+",
      category: "religious",
      highlights: ["ରଥଯାତ୍ରା", "ଭକ୍ତିଗୀତ", "ପ୍ରସାଦ ବିତରଣ", "ସାଂସ୍କୃତିକ କାର୍ଯ୍ୟକ୍ରମ"],
    },
    {
      id: 2,
      name: "ମା' ଗଜଲକ୍ଷ୍ମୀ ପୂଜା",
      /* image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", */
      image: "",
      date: "ଜୁନ ୧୦-୧୨, ୨୦୨୪",
      description: "ଧାର୍ମିକ ପୂଜା ଓ ସାମୁଦାୟିକ ଭୋଜି ଅନୁଷ୍ଠାନ",
      location: "ଗଜଲକ୍ଷ୍ମୀ ମନ୍ଦିର",
      duration: "୩ ଦିନ",
      participants: "୩୦୦+",
      category: "religious",
      highlights: ["ବିଶେଷ ପୂଜା", "ସାମୁଦାୟିକ ଭୋଜି", "ଆରତୀ", "ପ୍ରସାଦ"],
    },
    {
      id: 3,
      name: "ଦଣ୍ଡନାଚ ପର୍ବ",
      /* image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", */
      image: "",
      date: "ସେପ୍ଟେମ୍ବର ୫-୭, ୨୦୨୪",
      description: "ପାରମ୍ପାରିକ ନୃତ୍ୟ ଓ ସାଂସ୍କୃତିକ ପ୍ରଦର୍ଶନୀ",
      location: "ସମୁଦାୟ ଭବନ",
      duration: "୩ ଦିନ",
      participants: "୪୦୦+",
      category: "cultural",
      highlights: ["ଦଣ୍ଡନାଚ", "ପାରମ୍ପାରିକ ନୃତ୍ୟ", "ସଙ୍ଗୀତ", "ପ୍ରଦର୍ଶନୀ"],
    },
    {
      id: 4,
      name: "ବାର୍ଷିକ ପୁରସ୍କାର ସମାରୋହ",
      /* image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", */
      image: "",
      date: "ଡିସେମ୍ବର ୨୦, ୨୦୨୪",
      description: "ଉତ୍କୃଷ୍ଟ କ୍ଷେତ୍ରରେ ଅସାଧାରଣ ପ୍ରଦର୍ଶନ ପାଇଁ ପୁରସ୍କୃତ",
      location: "ସମୁଦାୟ ହଲ୍",
      duration: "୧ ଦିନ",
      participants: "୨୦୦+",
      category: "award",
      highlights: ["ପୁରସ୍କାର ବିତରଣ", "ସାଂସ୍କୃତିକ କାର୍ଯ୍ୟକ୍ରମ", "ଭୋଜି"],
    },
    {
      id: 5,
      name: "ନୂଆବର୍ଷ ଉତ୍ସବ",
      /* image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", */
      image: "",
      date: "ଜାନୁଆରୀ ୧, ୨୦୨୫",
      description: "ନୂତନ ବର୍ଷକୁ ସ୍ୱାଗତ ଜଣାଇବା ଉତ୍ସବ",
      location: "ସମୁଦାୟ ମୈଦାନ",
      duration: "୧ ଦିନ",
      participants: "୬୦୦+",
      category: "celebration",
      highlights: ["ସାଂସ୍କୃତିକ କାର୍ଯ୍ୟକ୍ରମ", "ଖେଳ", "ଭୋଜି", "ଆତସବାଜୀ"],
    },
    {
      id: 6,
      name: "ରଥଯାତ୍ରା",
      /* image: "https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", */
      image: "",
      date: "ଜୁଲାଇ ୧୫-୧୭, ୨୦୨୪",
      description: "ପାରମ୍ପାରିକ ରଥଯାତ୍ରା ଉତ୍ସବ",
      location: "ମୁଖ୍ୟ ରାସ୍ତା",
      duration: "୩ ଦିନ",
      participants: "୧୦୦୦+",
      category: "religious",
      highlights: ["ରଥ ଟାଣା", "ଭକ୍ତିଗୀତ", "ପ୍ରସାଦ"],
    },
    {
      id: 7,
      name: "ସାଂସ୍କୃତିକ ସଂଧ୍ୟା",
      /* image: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", */
      image: "",
      date: "ଅକ୍ଟୋବର ୧୦, ୨୦୨୪",
      description: "ସାଂସ୍କୃତିକ କାର୍ଯ୍ୟକ୍ରମ ଓ ପ୍ରଦର୍ଶନୀ",
      location: "ସମୁଦାୟ ଭବନ",
      duration: "୧ ଦିନ",
      participants: "୩୫୦+",
      category: "cultural",
      highlights: ["ନୃତ୍ୟ", "ସଙ୍ଗୀତ", "ନାଟକ", "କବିତା"],
    },
    {
      id: 8,
      name: "ଖେଳ ପ୍ରତିଯୋଗିତା",
      /* image: "https://images.pexels.com/photos/2485478/pexels-photo-2485478.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", */
      image: "",
      date: "ନଭେମ୍ବର ୧୨-୧୫, ୨୦୨୪",
      description: "ବାର୍ଷିକ ଖେଳ ପ୍ରତିଯୋଗିତା",
      location: "ସ୍ଥାନୀୟ ମୈଦାନ",
      duration: "୪ ଦିନ",
      participants: "୫୦୦+",
      category: "sports",
      highlights: ["କ୍ରିକେଟ", "ଫୁଟବଲ", "ଖୋ-ଖୋ", "ଦୌଡ଼"],
    }
  ];

  const [festivals, setFestivals] = useState(defaultFestivals);

  // Requirement 4: Live database sync
  useEffect(() => {
    fetch(`${BASE_URL}/api/programs?type=festival`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data && data.data.length > 0) {
          setFestivals(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const categories = [
    { id: 'all', name: 'ସମସ୍ତ ପର୍ବ' },
    { id: 'religious', name: 'ଧାର୍ମିକ' },
    { id: 'cultural', name: 'ସାଂସ୍କୃତିକ' },
    { id: 'sports', name: 'ଖେଳ' },
    { id: 'celebration', name: 'ଉତ୍ସବ' },
    { id: 'award', name: 'ପୁରସ୍କାର' }
  ];

  const filteredFestivals = selectedCategory === 'all' 
    ? festivals 
    : festivals.filter(f => f.category === selectedCategory);

  const FestivalCard = ({ festival }) => (
    <div className="card-cartoon bg-white overflow-hidden group hover:-translate-y-2 hover:shadow-cartoon-lg transition-all duration-300 flex flex-col justify-between">
      
      {/* Photo Frame in Cartoon Border - Requirement 5: Placeholder frame, comments preserved */}
      <div className="relative h-48 sm:h-56 overflow-hidden border-b-2.5 border-[#2B231D] bg-amber-100 flex items-center justify-center">
        {/* <img 
          src={festival.image}
          alt={festival.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-all duration-500"
        /> */}
        {festival.image && festival.image.startsWith("http") && !festival.image.includes("pexels.com") ? (
          <img 
            src={festival.image}
            alt={festival.name}
            className="w-full h-full object-cover group-hover:scale-108 transition-all duration-500"
          />
        ) : (
          <FestivalPhotoPlaceholder name={festival.name} />
        )}
        
        {/* Date badge */}
        <div className="absolute top-3 right-3 bg-white/95 rounded-xl px-3 py-1 border-2 border-[#2B231D] shadow-cartoon-sm">
          <div className="flex items-center text-stone-900 text-xs sm:text-sm font-bold">
            <Calendar className="w-3.5 h-3.5 mr-1.5 text-amber-600" />
            {festival.date}
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3 bg-amber-400 text-stone-900 rounded-xl px-2.5 py-0.5 text-xs font-bold border-2 border-[#2B231D] shadow-cartoon-sm">
          {categories.find(cat => cat.id === festival.category)?.name || festival.category || "ସାଂସ୍କୃତିକ"}
        </div>
      </div>

      {/* Details */}
      <div className="p-5 flex-1 flex flex-col justify-between font-cartoon">
        <div>
          <h3 className="heading-font text-xl sm:text-2xl font-black text-[#2B231D] mb-2 group-hover:text-amber-800 transition-colors">
            {festival.name}
          </h3>
          <p className="text-sm text-stone-700 leading-relaxed font-semibold mb-3">
            {festival.description}
          </p>

          <div className="space-y-1.5 text-xs font-bold text-stone-600 mb-3">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E06D53]" />
              <span>{festival.location || "ପାଇକରାପୁର ମୁଖ୍ୟ ପ୍ରାଙ୍ଗଣ"}</span>
            </div>
            {festival.duration && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-700" />
                <span>ସମୟାବଧି: {festival.duration}</span>
              </div>
            )}
            {festival.participants && (
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-emerald-700" />
                <span>ଭାଗିଦାରୀ: {festival.participants}</span>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => setActiveModal(festival)}
          className="w-full btn-cartoon-white text-xs font-bold py-2 mt-2 flex items-center justify-center gap-1 cursor-pointer"
        >
          <span>ବିସ୍ତୃତ ବିବରଣୀ (Details)</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAF7F0] pt-24 sm:pt-28 pb-16">
      
      {/* Top Garland */}
      <MarigoldGarland />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        
        {/* Back Button */}
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
            <StickerBadge text="ସାଂସ୍କୃତିକ କାର୍ଯ୍ୟକ୍ରମ ଓ ପର୍ବ" color="amber" rotate="rotate-1" />
          </div>

          <h1 className="heading-font text-3xl sm:text-5xl font-black text-[#2B231D] mb-3">
            ସମସ୍ତ ପର୍ବପର୍ବାଣି ଓ ଉତ୍ସବ
          </h1>

          <div className="w-24 h-2 bg-amber-400 rounded-full border-2 border-[#2B231D] mx-auto mb-4 shadow-cartoon-sm"></div>

          <p className="font-cartoon text-stone-700 max-w-2xl mx-auto text-sm sm:text-base font-semibold">
            ପାଇକରାପୁର ଗୋପବନ୍ଧୁ ପଠାଗାର ପକ୍ଷରୁ ବର୍ଷସାରା ଆୟୋଜିତ ବିଭିନ୍ନ ଧାର୍ମିକ, ସାଂସ୍କୃତିକ ଓ କ୍ରୀଡ଼ା ଉତ୍ସବର ସମ୍ପୂର୍ଣ୍ଣ ତାଲିକା।
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10 font-cartoon">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border-2 transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-amber-400 text-stone-900 border-[#2B231D] shadow-cartoon-sm -translate-y-0.5'
                  : 'bg-white text-stone-700 border-[#2B231D]/20 hover:border-[#2B231D]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Festival Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFestivals.map(festival => (
            <FestivalCard key={festival._id || festival.id} festival={festival} />
          ))}
        </div>

      </div>

      {/* Modal for Details */}
      {activeModal && (
        <div className="fixed inset-0 bg-[#2B231D]/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-[#FFFDF7] rounded-3xl border-3 border-[#2B231D] p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-[8px_8px_0px_#2B231D] font-cartoon">
            <div className="flex items-center justify-between pb-3 border-b-2 border-stone-200 mb-4">
              <h3 className="heading-font text-2xl font-black text-stone-900">
                {activeModal.name}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-lg border border-[#2B231D] hover:bg-stone-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-44 rounded-2xl border-2 border-[#2B231D] overflow-hidden mb-4 bg-amber-50 flex items-center justify-center">
              {activeModal.image && activeModal.image.startsWith("http") && !activeModal.image.includes("pexels.com") ? (
                <img src={activeModal.image} alt={activeModal.name} className="w-full h-full object-cover" />
              ) : (
                <FestivalPhotoPlaceholder name={activeModal.name} />
              )}
            </div>

            <p className="text-stone-800 text-sm font-semibold mb-4 leading-relaxed">
              {activeModal.description}
            </p>

            <div className="bg-white p-4 rounded-xl border-2 border-[#2B231D] text-xs font-bold text-stone-700 space-y-1.5 mb-5 shadow-xs">
              <p>📅 ତାରିଖ: {activeModal.date}</p>
              <p>📍 ସ୍ଥାନ: {activeModal.location || "ପାଇକରାପୁର"}</p>
              {activeModal.duration && <p>⏳ ସମୟାବଧି: {activeModal.duration}</p>}
              {activeModal.participants && <p>👥 ଭାଗିଦାରୀ: {activeModal.participants}</p>}
            </div>

            {activeModal.highlights && activeModal.highlights.length > 0 && (
              <div className="mb-5">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wide mb-2">
                  ପ୍ରମୁଖ ଆକର୍ଷଣ (Highlights):
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModal.highlights.map((h, i) => (
                    <span key={i} className="bg-amber-100 text-stone-900 px-2.5 py-1 rounded-lg border border-[#2B231D] text-xs font-bold">
                      ✦ {h}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => setActiveModal(null)}
              className="w-full btn-cartoon-amber text-xs sm:text-sm font-bold py-2.5 cursor-pointer"
            >
              ବନ୍ଦ କରନ୍ତୁ (Close)
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default AllFestivalsPage;
