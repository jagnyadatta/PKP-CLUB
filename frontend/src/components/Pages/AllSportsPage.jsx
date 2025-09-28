// components/AllSportsPage.jsx
import React, { useState } from 'react';
import { ArrowLeft, Calendar, Users, MapPin, Trophy, Award, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AllSportsPage = () => {
  const navigate = useNavigate();
  const [selectedSport, setSelectedSport] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  // Extended sports data with more details
  const allSportsEvents = [
    // Cricket Events
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
      gallery: [
        "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg",
        "https://images.pexels.com/photos/2485478/pexels-photo-2485478.jpeg"
      ]
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
      gallery: [
        "https://images.pexels.com/photos/2485471/pexels-photo-2485471.jpeg"
      ]
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
      gallery: [
        "https://images.pexels.com/photos/2485479/pexels-photo-2485479.jpeg"
      ]
    },

    // Volleyball Events
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
      gallery: [
        "https://images.pexels.com/photos/345092/pexels-photo-345092.jpeg"
      ]
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
      gallery: [
        "https://images.pexels.com/photos/345092/pexels-photo-345092.jpeg"
      ]
    },

    // Football Events
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
      gallery: [
        "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg"
      ]
    },

    // Kabaddi Events
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
      gallery: [    
        "https://images.pexels.com/photos/8639881/pexels-photo-8639881.jpeg"
      ]
    }
  ];

  // Sport categories
  const sportCategories = [
    { id: 'all', name: 'ସମସ୍ତ ଖେଳ', icon: Trophy, count: allSportsEvents.length },
    { id: 'cricket', name: 'କ୍ରିକେଟ୍', icon: Award, count: allSportsEvents.filter(e => e.sport === 'cricket').length },
    { id: 'volleyball', name: 'ଭଲିବଲ୍', icon: Award, count: allSportsEvents.filter(e => e.sport === 'volleyball').length }
  ];

  // Years available
  const years = [
    { id: 'all', name: 'ସମସ୍ତ ବର୍ଷ' },
    { id: '2024', name: '୨୦୨୪' },
    { id: '2023', name: '୨୦୨୩' },
    { id: '2022', name: '୨୦୨୨' }
  ];

  // Filter events based on selections
  const filteredEvents = allSportsEvents.filter(event => {
    const sportMatch = selectedSport === 'all' || event.sport === selectedSport;
    const yearMatch = selectedYear === 'all' || event.year === selectedYear;
    return sportMatch && yearMatch;
  });

  const SportsCard = ({ event }) => {
    const sportConfig = {
      cricket: { color: 'sky', name: 'କ୍ରିକେଟ୍' },
      volleyball: { color: 'green', name: 'ଭଲିବଲ୍' },
    };

    const config = sportConfig[event.sport] || { color: 'gray', name: event.sport };

    return (
      <div className={`bg-white rounded-2xl shadow-[0_10px_30px_rgba(14,165,233,0.15)] hover:shadow-[0_20px_50px_rgba(14,165,233,0.25)] transition-all duration-300 overflow-hidden group border border-${config.color}-100`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className={`absolute top-4 left-4 bg-${config.color}-500 text-white px-3 py-1 rounded-full text-sm font-semibold`}>
            {config.name}
          </div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-600 px-3 py-1 rounded-full text-sm font-bold">
            {event.year}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-700 transition-colors duration-300">
            {event.name}
          </h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-600">
              <Users className="w-4 h-4 mr-2 text-sky-500" />
              <span className="font-medium">{event.teams}</span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2 text-sky-500" />
              <span>{event.venue}</span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-2 text-sky-500" />
              <span>{event.date}</span>
            </div>

            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2 text-sky-500" />
              <span>{event.time}</span>
            </div>
          </div>
          
          {/* Result Section */}
          <div className={`bg-${config.color}-50 rounded-lg p-3 border border-${config.color}-200 mb-3`}>
            <p className={`text-${config.color}-700 font-semibold text-sm mb-1`}>ଫଳାଫଳ: {event.result}</p>
            <p className={`text-${config.color}-600 text-xs`}>ମ୍ୟାଚ୍ ବିଜେତା: {event.winner}</p>
          </div>

          {/* Man of the Match */}
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-3 border border-yellow-200">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-500 mr-2" />
              <span className="text-yellow-700 text-sm font-semibold">ମ୍ୟାଚ୍ ସର୍ବଶ୍ରେଷ୍ଠ: {event.manOfMatch}</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-3">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">ମୁଖ୍ୟ ଆକର୍ଷଣ:</h4>
            <div className="flex flex-wrap gap-1">
              {event.highlights.slice(0, 2).map((highlight, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                  {highlight}
                </span>
              ))}
              {event.highlights.length > 2 && (
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                  +{event.highlights.length - 2} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-sky-50 py-8 mt-12 sm:mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-0">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-sky-600 hover:text-sky-700 transition-colors duration-200 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back</span>
          </button>
          
          <div className="text-center flex-1 mx-4">
            <h1 className="text-md sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent">
              ସମସ୍ତ କ୍ରୀଡ଼ା ଘଟଣା
            </h1>
            <p className="text-gray-600 text-xs sm:text-base mt-2">
              ଆମ ସମୁଦାୟର ସମସ୍ତ ଖେଳ ପ୍ରତିଯୋଗିତା ଓ ମ୍ୟାଚ୍
            </p>
          </div>
          
          {/* <div className="w-20"></div> Spacer for balance */}
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sport Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">ଖେଳ ପ୍ରକାର:</label>
              <div className="flex flex-wrap gap-2">
                {sportCategories.map((sport) => (
                  <button
                    key={sport.id}
                    onClick={() => setSelectedSport(sport.id)}
                    className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 font-semibold text-sm ${
                      selectedSport === sport.id
                        ? 'bg-sky-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-sky-50 hover:text-sky-600'
                    }`}
                  >
                    <sport.icon className="w-4 h-4 mr-2" />
                    {sport.name} ({sport.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Year Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">ବର୍ଷ:</label>
              <div className="flex flex-wrap gap-2">
                {years.map((year) => (
                  <button
                    key={year.id}
                    onClick={() => setSelectedYear(year.id)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 font-semibold text-sm ${
                      selectedYear === year.id
                        ? 'bg-green-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600'
                    }`}
                  >
                    {year.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-2 shadow-lg">
            <Trophy className="w-5 h-5 text-sky-500" />
            <span className="font-semibold text-gray-700">
              ମୋଟ {filteredEvents.length} ଟି ମ୍ୟାଚ୍ ମିଳିଲା
            </span>
          </div>
        </div>

        {/* Sports Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredEvents.map((event) => (
            <SportsCard key={event.id} event={event} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
              <Trophy className="w-16 h-16 text-sky-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-700 mb-2">କୌଣସି ମ୍ୟାଚ୍ ମିଳିଲା ନାହିଁ</h3>
              <p className="text-gray-600">ବର୍ତ୍ତମାନ ଏହି ବର୍ଗରେ କୌଣସି ମ୍ୟାଚ୍ ନାହିଁ।</p>
            </div>
          </div>
        )}

        {/* Sports Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="bg-white rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-sky-600 mb-1">
              {allSportsEvents.length}
            </div>
            <div className="text-sm text-gray-600">ମୋଟ ମ୍ୟାଚ୍</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {sportCategories.find(s => s.id === 'cricket')?.count || 0}
            </div>
            <div className="text-sm text-gray-600">କ୍ରିକେଟ୍ ମ୍ୟାଚ୍</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {sportCategories.find(s => s.id === 'volleyball')?.count || 0}
            </div>
            <div className="text-sm text-gray-600">ଭଲିବଲ୍ ମ୍ୟାଚ୍</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-orange-600 mb-1">
              {new Set(allSportsEvents.map(e => e.year)).size}
            </div>
            <div className="text-sm text-gray-600">ସକ୍ରିୟ ବର୍ଷ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSportsPage;