import React, { useState } from 'react';
import { ArrowLeft, Calendar, Star, Sparkles, MapPin, Users, Clock, ChevronRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { StickerBadge, JhotiCorner, DiyaIcon } from '../Cartoon/CartoonDoodles';
import MarigoldGarland from '../Cartoon/MarigoldGarland';

const AllFestivalsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModal, setActiveModal] = useState(null);

  // All 8 festivals with exact Odia details
  const allFestivals = [
    {
      id: 1,
      name: "ପଞ୍ଚୁଦୋଳ ଯାତ୍ରା",
      image: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
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
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
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
      image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
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
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
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
      image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
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
      image: "https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
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
      image: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
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
      image: "https://images.pexels.com/photos/2485478/pexels-photo-2485478.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      date: "ନଭେମ୍ବର ୧୨-୧୫, ୨୦୨୪",
      description: "ବାର୍ଷିକ ଖେଳ ପ୍ରତିଯୋଗିତା",
      location: "ସ୍ଥାନୀୟ ମୈଦାନ",
      duration: "୪ ଦିନ",
      participants: "୫୦୦+",
      category: "sports",
      highlights: ["କ୍ରିକେଟ", "ଫୁଟବଲ", "ଖୋ-ଖୋ", "ଦୌଡ଼"],
    }
  ];

  // Preserved Category filter tabs
  const categories = [
    { id: 'all', name: 'ସମସ୍ତ ପର୍ବ', count: allFestivals.length },
    { id: 'religious', name: 'ଧାର୍ମିକ', count: allFestivals.filter(f => f.category === 'religious').length },
    { id: 'cultural', name: 'ସାଂସ୍କୃତିକ', count: allFestivals.filter(f => f.category === 'cultural').length },
    { id: 'sports', name: 'ଖେଳ', count: allFestivals.filter(f => f.category === 'sports').length },
    { id: 'celebration', name: 'ଉତ୍ସବ', count: allFestivals.filter(f => f.category === 'celebration').length },
    { id: 'award', name: 'ପୁରସ୍କାର', count: allFestivals.filter(f => f.category === 'award').length }
  ];

  const filteredFestivals = selectedCategory === 'all' 
    ? allFestivals 
    : allFestivals.filter(f => f.category === selectedCategory);

  const FestivalCard = ({ festival }) => (
    <div className="card-cartoon bg-white overflow-hidden group hover:-translate-y-2 hover:shadow-cartoon-lg transition-all duration-300 flex flex-col justify-between">
      
      {/* Photo Frame in Cartoon Border */}
      <div className="relative h-48 sm:h-56 overflow-hidden border-b-2.5 border-[#2B231D] bg-amber-100">
        <img 
          src={festival.image}
          alt={festival.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-all duration-500"
        />
        
        {/* Date badge */}
        <div className="absolute top-3 right-3 bg-white/95 rounded-xl px-3 py-1 border-2 border-[#2B231D] shadow-cartoon-sm">
          <div className="flex items-center text-stone-900 text-xs sm:text-sm font-bold">
            <Calendar className="w-3.5 h-3.5 mr-1.5 text-amber-600" />
            {festival.date}
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3 bg-amber-400 text-stone-900 rounded-xl px-2.5 py-0.5 text-xs font-bold border-2 border-[#2B231D] shadow-cartoon-sm">
          {categories.find(cat => cat.id === festival.category)?.name}
        </div>
      </div>
      
      {/* Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="heading-font text-xl sm:text-2xl font-black text-[#2B231D] mb-2 group-hover:text-amber-800 transition-colors">
            {festival.name}
          </h3>
          <p className="font-cartoon text-sm text-stone-700 leading-relaxed font-semibold mb-4">
            {festival.description}
          </p>
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs font-bold text-stone-700 mb-4 bg-amber-50 p-3 rounded-xl border border-[#2B231D]">
            <div className="flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-[#E06D53]" />
              <span className="truncate">{festival.location}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-amber-700" />
              <span>{festival.duration}</span>
            </div>
            <div className="flex items-center col-span-2">
              <Users className="w-3.5 h-3.5 mr-1.5 text-emerald-700" />
              <span>ଅଂଶଗ୍ରହଣକାରୀ: {festival.participants}</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-4">
            <h4 className="font-odia text-xs font-bold text-stone-800 mb-2">ମୁଖ୍ୟ ଆକର୍ଷଣ:</h4>
            <div className="flex flex-wrap gap-1.5">
              {festival.highlights.map((highlight, index) => (
                <span key={index} className="bg-white text-stone-800 text-[11px] font-bold px-2 py-0.5 rounded-md border border-[#2B231D] shadow-xs">
                  ★ {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* View Details Button */}
        <button 
          onClick={() => setActiveModal(festival)}
          className="w-full btn-cartoon-amber text-xs sm:text-sm font-bold py-2.5 cursor-pointer"
        >
          ଅଧିକ ଜାଣନ୍ତୁ (View Details)
        </button>
      </div>
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
              ସମସ୍ତ ପର୍ବପର୍ବାଣି
            </h1>
            <p className="font-cartoon text-stone-700 text-sm sm:text-base font-bold mt-1">
              ଆମ ସମୁଦାୟର ସମସ୍ତ ଉତ୍ସବ ଓ କାର୍ଯ୍ୟକ୍ରମ
            </p>
          </div>

          <div className="w-28 hidden sm:block"></div>
        </div>

        {/* Category Filter Pills */}
        <div className="card-cartoon bg-white p-4 sm:p-5 mb-8 shadow-cartoon">
          <div className="flex flex-wrap gap-2.5 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border-2 transition-all cursor-pointer ${
                  selectedCategory === category.id
                    ? 'bg-amber-400 text-stone-900 border-[#2B231D] shadow-cartoon-sm'
                    : 'bg-[#FAF7F0] text-stone-700 border-[#2B231D]/30 hover:border-[#2B231D]'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Results Count Banner */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border-2 border-[#2B231D] shadow-cartoon-sm text-xs sm:text-sm font-bold text-stone-800">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>ମୋଟ {filteredFestivals.length} ଟି ପର୍ବ ମିଳିଲା</span>
          </span>
        </div>

        {/* Festivals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredFestivals.map((festival) => (
            <FestivalCard key={festival.id} festival={festival} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredFestivals.length === 0 && (
          <div className="text-center py-12 card-cartoon bg-white max-w-md mx-auto p-8 shadow-cartoon">
            <Star className="w-14 h-14 text-amber-400 mx-auto mb-3" />
            <h3 className="heading-font text-2xl font-bold text-stone-900 mb-2">କୌଣସି ପର୍ବ ମିଳିଲା ନାହିଁ</h3>
            <p className="font-cartoon text-stone-600 text-sm">ବର୍ତ୍ତମାନ ଏହି ବର୍ଗରେ କୌଣସି ପର୍ବ ନାହିଁ।</p>
          </div>
        )}

        {/* Total Festivals Summary Banner */}
        <div className="text-center card-cartoon bg-white p-6 max-w-md mx-auto shadow-cartoon">
          <div className="font-odia text-4xl sm:text-5xl font-black text-amber-700 mb-1">
            {allFestivals.length}
          </div>
          <div className="font-cartoon text-stone-800 font-bold text-base">
            ମୋଟ ପର୍ବ ସଂଖ୍ୟା
          </div>
          <p className="font-cartoon text-xs text-stone-600 font-semibold mt-1">
            ବର୍ଷସାରା ଆୟୋଜିତ ହୁଏ
          </p>
        </div>

      </div>

      {/* Festival Detail Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-[#2B231D]/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-[#FFFDF7] border-3 sm:border-4 border-[#2B231D] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-[8px_8px_0px_#2B231D] relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 bg-amber-200 hover:bg-amber-300 border-2 border-[#2B231D] rounded-full p-1.5 transition-colors shadow-cartoon-sm"
            >
              <X className="w-4 h-4 text-stone-900" />
            </button>

            <div className="rounded-2xl border-2 border-[#2B231D] overflow-hidden mb-4 h-48 bg-amber-100">
              <img src={activeModal.image} alt={activeModal.name} className="w-full h-full object-cover" />
            </div>

            <h3 className="heading-font text-2xl sm:text-3xl font-black text-[#2B231D] mb-1">
              {activeModal.name}
            </h3>
            <p className="font-cartoon text-xs font-bold text-amber-800 mb-3">
              {activeModal.date} • {activeModal.location}
            </p>

            <p className="font-cartoon text-stone-700 text-sm leading-relaxed mb-4">
              {activeModal.description}
            </p>

            <div className="bg-amber-100 rounded-xl p-3 border border-[#2B231D] mb-5">
              <h4 className="font-odia text-xs font-bold text-stone-900 mb-2">ମୁଖ୍ୟ ଆକର୍ଷଣ:</h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModal.highlights.map((h, i) => (
                  <span key={i} className="bg-white text-stone-800 text-xs font-bold px-2 py-0.5 rounded border border-[#2B231D]">
                    ★ {h}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setActiveModal(null)}
              className="w-full btn-cartoon-amber text-sm font-bold"
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
