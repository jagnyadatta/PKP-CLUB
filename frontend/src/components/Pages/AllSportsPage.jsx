import React, { useState } from 'react';
import { ArrowLeft, Calendar, Users, MapPin, Trophy, Award, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CricketIcon, StickerBadge, JhotiCorner, DiyaIcon } from '../Cartoon/CartoonDoodles';
import MarigoldGarland from '../Cartoon/MarigoldGarland';

const AllSportsPage = () => {
  const navigate = useNavigate();
  const [selectedSport, setSelectedSport] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  // Preserved sports data
  const allSportsEvents = [
    {
      id: 1,
      name: "Annual Cricket Tournament 2024",
      image: "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      year: "2024",
      sport: "cricket",
      teams: "ପାଇକରାପୁର vs ବ୍ରାହ୍ମଣଦେଓ",
      venue: "ମା ବରୁଣାଇ ମୈଦାନ",
      date: "ମାର୍ଚ୍ଚ ୧୫, ୨୦୨୪",
      time: "ପୂର୍ବାହ୍ନ ୯:୦୦",
      result: "ପାଇକରାପୁର ବିଜୟୀ (୫୮ ରନରେ)",
      winner: "ପାଇକରାପୁର ଟିମ୍",
      runnerUp: "ବ୍ରାହ୍ମଣଦେଓ ଟିମ୍",
      manOfMatch: "ଶ୍ରୀ. ରଜନୀକାନ୍ତ ଦଳେଇ",
      highlights: ["ରଜନୀକାନ୍ତଙ୍କ ୭୫ ରନ", "୩ ଉଇକେଟ୍ ନେଇ ଅମରେଶ", "ଶେଷ ଓଭରରେ ରୋମାଞ୍ଚକ ଜୟ"],
    },
    {
      id: 2,
      name: "Cricket Championship 2023",
      image: "https://images.pexels.com/photos/2485471/pexels-photo-2485471.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      year: "2023",
      sport: "cricket",
      teams: "ଡିଆକୁଦା vs ସୁବଳୟା",
      venue: "ମା ବରୁଣାଇ ମୈଦାନ",
      date: "ଡିସେମ୍ବର ୫, ୨୦୨୩",
      time: "ପୂର୍ବାହ୍ନ ୮:୩୦",
      result: "ସୁବଳୟା ବିଜୟୀ (୩ ଉଇକେଟରେ)",
      winner: "ସୁବଳୟା ଟିମ୍",
      runnerUp: "ଡିଆକୁଦା ଟିମ୍",
      manOfMatch: "ଶ୍ରୀ. ସୁରେଶ ପ୍ରଧାନ",
      highlights: ["ସୁରେଶଙ୍କ ୬୫ ରନ", "ଅଶୋକଙ୍କ ୪ ଉଇକେଟ୍", "ଟାଇଗର ଫିନିଶ୍"],
    },
    {
      id: 3,
      name: "Summer Cricket Cup 2022",
      image: "https://images.pexels.com/photos/2485479/pexels-photo-2485479.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      year: "2022",
      sport: "cricket",
      teams: "ପାଇକରାପୁର vs ଡିଆକୁଦା",
      venue: "ମା ବରୁଣାଇ ମୈଦାନ",
      date: "ଜୁନ ୨୦, ୨୦୨୨",
      time: "ପୂର୍ବାହ୍ନ ୯:୩୦",
      result: "ପାଇକରାପୁର ବିଜୟୀ (୨୮ ରନରେ)",
      winner: "ପାଇକରାପୁର ଟିମ୍",
      runnerUp: "ଡିଆକୁଦା ଟିମ୍",
      manOfMatch: "ଶ୍ରୀ. ଅଜୟ ଦଳେଇ",
      highlights: ["ଅଜୟଙ୍କ ୮୦ ରନ", "ସୁପରବ ବୋଲିଂ", "ରୋମାଞ୍ଚକ ଶେଷ"],
    },
    {
      id: 4,
      name: "Volleyball Premier League 2024",
      image: "https://images.pexels.com/photos/345092/pexels-photo-345092.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      year: "2024",
      sport: "volleyball",
      teams: "ପାଇକରାପୁର-A vs ପାଇକରାପୁର-B",
      venue: "ଇନଡୋର ଷ୍ଟାଡିୟମ",
      date: "ଫେବୃଆରୀ ୨୮, ୨୦୨୪",
      time: "ସନ୍ଧ୍ୟା ୫:୦୦",
      result: "ପାଇକରାପୁର-A ବିଜୟୀ (୩-୧ ସେଟରେ)",
      winner: "ପାଇକରାପୁର-A ଟିମ୍",
      runnerUp: "ପାଇକରାପୁର-B ଟିମ୍",
      manOfMatch: "ଶ୍ରୀ. ରୀତିକ ଦଳେଇ",
      highlights: ["ରୀତିକଙ୍କ ଶକ୍ତିଶାଳୀ ସ୍ମାସ", "ସୁଦୀପ୍ଙ୍କ ବ୍ଲକ", "ଚମତ୍କାର ରକ୍ଷଣ"],
    },
    {
      id: 5,
      name: "Volleyball Championship 2023",
      image: "https://images.pexels.com/photos/345092/pexels-photo-345092.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      year: "2023",
      sport: "volleyball",
      teams: "ଯୁବକ vs ଯୁବତୀ ଟିମ୍",
      venue: "ଇନଡୋର ଷ୍ଟାଡିୟମ",
      date: "ନଭେମ୍ବର ୧୫, ୨୦୨୩",
      time: "ସନ୍ଧ୍ୟା ୪:୩୦",
      result: "ଯୁବକ ଟିମ୍ ବିଜୟୀ (୩-୨ ସେଟରେ)",
      winner: "ଯୁବକ ଟିମ୍",
      runnerUp: "ଯୁବତୀ ଟିମ୍",
      manOfMatch: "ଶ୍ରୀ. ପ୍ରକାଶ ଦଳେଇ",
      highlights: ["୫ ସେଟର ରୋମାଞ୍ଚ", "ପ୍ରକାଶଙ୍କ ସ୍ପାଇକ", "ଶେଷ ବିନ୍ଦୁରେ ଜୟ"],
    },
    {
      id: 6,
      name: "volleyball Tournament 2024",
      image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      year: "2024",
      sport: "volleyball",
      teams: "ପାଇକରାପୁର vs ବ୍ରାହ୍ମଣଦେଓ",
      venue: "ସ୍ଥାନୀୟ ମୈଦାନ",
      date: "ଏପ୍ରିଲ ୧୦, ୨୦୨୪",
      time: "ପୂର୍ବାହ୍ନ ୮:୦୦",
      result: "ପାଇକରାପୁର ବିଜୟୀ (୨-୧ ଗୋଲରେ)",
      winner: "ପାଇକରାପୁର ଟିମ୍",
      runnerUp: "ବ୍ରାହ୍ମଣଦେଓ ଟିମ୍",
      manOfMatch: "ଶ୍ରୀ. ରାଜେଶ ମହାପାତ୍ର",
      highlights: ["ରାଜେଶଙ୍କ ୨ ଗୋଲ", "ଚମତ୍କାର ଗୋଲକୀପିଂ", "ଶେଷ ମିନିଟ୍ ଗୋଲ"],
    },
    {
      id: 7,
      name: "volleyball Competition 2023",
      image: "https://images.pexels.com/photos/8639881/pexels-photo-8639881.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      year: "2023",
      sport: "volleyball",
      teams: "ପାଇକରାପୁର vs ସୁବଳୟା",
      venue: "ସମୁଦାୟ ମୈଦାନ",
      date: "ଅଗଷ୍ଟ ୨୦, ୨୦୨୩",
      time: "ସନ୍ଧ୍ୟା ୬:୦୦",
      result: "ପାଇକରାପୁର ବିଜୟୀ (୩୫-୨୮ ପଏଣ୍ଟରେ)",
      winner: "ପାଇକରାପୁର ଟିମ୍",
      runnerUp: "ସୁବଳୟା ଟିମ୍",
      manOfMatch: "ଶ୍ରୀ. ଟିଲୁ ବେହେରା",
      highlights: ["ଟିଲୁଙ୍କ ୧୦ ପଏଣ୍ଟ", "ସୁପର ରେଡ୍", "ଶକ୍ତିଶାଳୀ ଡିଫେନ୍ସ"],
    }
  ];

  // Categories
  const sportCategories = [
    { id: 'all', name: 'ସମସ୍ତ ଖେଳ', icon: Trophy, count: allSportsEvents.length },
    { id: 'cricket', name: 'କ୍ରିକେଟ୍', icon: Award, count: allSportsEvents.filter(e => e.sport === 'cricket').length },
    { id: 'volleyball', name: 'ଭଲିବଲ୍', icon: Award, count: allSportsEvents.filter(e => e.sport === 'volleyball').length }
  ];

  const years = [
    { id: 'all', name: 'ସମସ୍ତ ବର୍ଷ' },
    { id: '2024', name: '୨୦୨୪' },
    { id: '2023', name: '୨୦୨୩' },
    { id: '2022', name: '୨୦୨୨' }
  ];

  const filteredEvents = allSportsEvents.filter(event => {
    const sportMatch = selectedSport === 'all' || event.sport === selectedSport;
    const yearMatch = selectedYear === 'all' || event.year === selectedYear;
    return sportMatch && yearMatch;
  });

  const SportsCard = ({ event }) => {
    const isCricket = event.sport === 'cricket';

    return (
      <div className="card-cartoon bg-white overflow-hidden group hover:-translate-y-2 hover:shadow-cartoon-lg transition-all duration-300">
        
        {/* Match Image Frame */}
        <div className="relative h-48 sm:h-56 overflow-hidden border-b-2.5 border-[#2B231D]">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover group-hover:scale-108 transition-all duration-500"
          />
          <div className="absolute top-3 left-3 bg-amber-400 text-stone-900 px-3 py-1 rounded-xl text-xs sm:text-sm font-bold border-2 border-[#2B231D] shadow-cartoon-sm">
            {isCricket ? 'କ୍ରିକେଟ୍' : 'ଭଲିବଲ୍'}
          </div>
          <div className="absolute top-3 right-3 bg-white/95 text-stone-900 px-3 py-1 rounded-xl text-xs sm:text-sm font-bold border-2 border-[#2B231D] shadow-cartoon-sm">
            {event.year}
          </div>
        </div>
        
        <div className="p-5 sm:p-6">
          <h3 className="heading-font text-xl sm:text-2xl font-black text-[#2B231D] mb-3 group-hover:text-amber-800 transition-colors">
            {event.name}
          </h3>
          
          <div className="space-y-2 mb-4 font-cartoon text-xs sm:text-sm font-bold text-stone-700">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-amber-700 flex-shrink-0" />
              <span className="text-stone-900">{event.teams}</span>
            </div>
            
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-[#E06D53] flex-shrink-0" />
              <span>{event.venue}</span>
            </div>
            
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-emerald-700 flex-shrink-0" />
              <span>{event.date}</span>
            </div>

            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-sky-700 flex-shrink-0" />
              <span>{event.time}</span>
            </div>
          </div>
          
          {/* Result Section */}
          <div className="bg-amber-100 rounded-xl p-3 border-2 border-[#2B231D] mb-3 shadow-cartoon-sm">
            <p className="font-odia text-stone-900 font-bold text-sm sm:text-base mb-1">
              ଫଳାଫଳ: {event.result}
            </p>
            <p className="font-cartoon text-stone-700 text-xs font-bold">
              ମ୍ୟାଚ୍ ବିଜେତା: {event.winner}
            </p>
          </div>

          {/* Man of the Match */}
          <div className="bg-amber-50 rounded-xl p-2.5 border border-[#2B231D] mb-3 flex items-center">
            <Star className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0 fill-current" />
            <span className="font-odia text-amber-900 text-xs sm:text-sm font-bold">
              ମ୍ୟାଚ୍ ସର୍ବଶ୍ରେଷ୍ଠ: {event.manOfMatch}
            </span>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="font-odia text-xs font-bold text-stone-800 mb-1.5">ମୁଖ୍ୟ ଆକର୍ଷଣ:</h4>
            <div className="flex flex-wrap gap-1">
              {event.highlights.map((highlight, index) => (
                <span key={index} className="bg-white text-stone-800 text-[11px] font-bold px-2 py-0.5 rounded border border-[#2B231D]">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

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
              ସମସ୍ତ କ୍ରୀଡ଼ା ଘଟଣା
            </h1>
            <p className="font-cartoon text-stone-700 text-sm sm:text-base font-bold mt-1">
              ଆମ ସମୁଦାୟର ସମସ୍ତ ଖେଳ ପ୍ରତିଯୋଗିତା ଓ ମ୍ୟାଚ୍
            </p>
          </div>

          <div className="w-28 hidden sm:block"></div>
        </div>

        {/* Filters Section with 2D Cartoon Style */}
        <div className="card-cartoon bg-white p-5 sm:p-6 mb-8 shadow-cartoon">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Sport Filter */}
            <div>
              <label className="block text-sm font-bold text-stone-800 mb-2 font-odia">
                ଖେଳ ପ୍ରକାର:
              </label>
              <div className="flex flex-wrap gap-2">
                {sportCategories.map((sport) => (
                  <button
                    key={sport.id}
                    onClick={() => setSelectedSport(sport.id)}
                    className={`flex items-center px-4 py-2 rounded-xl font-bold text-xs sm:text-sm border-2 transition-all cursor-pointer ${
                      selectedSport === sport.id
                        ? 'bg-amber-400 text-stone-900 border-[#2B231D] shadow-cartoon-sm'
                        : 'bg-[#FAF7F0] text-stone-700 border-[#2B231D]/30 hover:border-[#2B231D]'
                    }`}
                  >
                    <sport.icon className="w-4 h-4 mr-1.5" />
                    {sport.name} ({sport.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Year Filter */}
            <div>
              <label className="block text-sm font-bold text-stone-800 mb-2 font-odia">
                ବର୍ଷ:
              </label>
              <div className="flex flex-wrap gap-2">
                {years.map((year) => (
                  <button
                    key={year.id}
                    onClick={() => setSelectedYear(year.id)}
                    className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm border-2 transition-all cursor-pointer ${
                      selectedYear === year.id
                        ? 'bg-emerald-400 text-stone-900 border-[#2B231D] shadow-cartoon-sm'
                        : 'bg-[#FAF7F0] text-stone-700 border-[#2B231D]/30 hover:border-[#2B231D]'
                    }`}
                  >
                    {year.name}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Results Count Banner */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border-2 border-[#2B231D] shadow-cartoon-sm text-xs sm:text-sm font-bold text-stone-800">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>ମୋଟ {filteredEvents.length} ଟି ମ୍ୟାଚ୍ ମିଳିଲା</span>
          </span>
        </div>

        {/* Sports Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredEvents.map((event) => (
            <SportsCard key={event.id} event={event} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12 card-cartoon bg-white max-w-md mx-auto p-8 shadow-cartoon">
            <Trophy className="w-14 h-14 text-amber-400 mx-auto mb-3" />
            <h3 className="heading-font text-2xl font-bold text-stone-900 mb-2">କୌଣସି ମ୍ୟାଚ୍ ମିଳିଲା ନାହିଁ</h3>
            <p className="font-cartoon text-stone-600 text-sm">ବର୍ତ୍ତମାନ ଏହି ବର୍ଗରେ କୌଣସି ମ୍ୟାଚ୍ ନାହିଁ।</p>
          </div>
        )}

        {/* Sports Summary Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="card-cartoon bg-white p-4 text-center shadow-cartoon-sm">
            <div className="font-odia text-3xl font-black text-amber-700 mb-1">
              {allSportsEvents.length}
            </div>
            <div className="font-cartoon text-xs font-bold text-stone-600">ମୋଟ ମ୍ୟାଚ୍</div>
          </div>
          <div className="card-cartoon bg-white p-4 text-center shadow-cartoon-sm">
            <div className="font-odia text-3xl font-black text-emerald-700 mb-1">
              {sportCategories.find(s => s.id === 'cricket')?.count || 0}
            </div>
            <div className="font-cartoon text-xs font-bold text-stone-600">କ୍ରିକେଟ୍ ମ୍ୟାଚ୍</div>
          </div>
          <div className="card-cartoon bg-white p-4 text-center shadow-cartoon-sm">
            <div className="font-odia text-3xl font-black text-sky-700 mb-1">
              {sportCategories.find(s => s.id === 'volleyball')?.count || 0}
            </div>
            <div className="font-cartoon text-xs font-bold text-stone-600">ଭଲିବଲ୍ ମ୍ୟାଚ୍</div>
          </div>
          <div className="card-cartoon bg-white p-4 text-center shadow-cartoon-sm">
            <div className="font-odia text-3xl font-black text-purple-700 mb-1">
              {new Set(allSportsEvents.map(e => e.year)).size}
            </div>
            <div className="font-cartoon text-xs font-bold text-stone-600">ସକ୍ରିୟ ବର୍ଷ</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AllSportsPage;
