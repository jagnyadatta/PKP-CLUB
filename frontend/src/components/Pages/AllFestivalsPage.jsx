// components/AllFestivalsPage.jsx
import React, { useState } from 'react';
import { ArrowLeft, Calendar, Star, Sparkles, MapPin, Users, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AllFestivalsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Extended festival data with more details
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
      gallery: [
        "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg",
        "https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg",
        "https://images.pexels.com/photos/1576938/pexels-photo-1576938.jpeg"
      ]
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
      gallery: [
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
        "https://images.pexels.com/photos/1576939/pexels-photo-1576939.jpeg"
      ]
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
      gallery: [
        "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
        "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg"
      ]
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
      gallery: [
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
      ]
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
      gallery: [
        "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg",
        "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg"
      ]
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
      gallery: [
        "https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg"
      ]
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
      gallery: [
        "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg"
      ]
    },
    {
      id: 8,
      name: "ଖେଳ ପ୍ରତିଯୋଗିତା",
      image: "https://images.pexels.com/photos/2485478/pexels-photo-2485478.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      date: "ନଭେମ୍ବର ୧୨-୧୫, ୨୦୨୪",
      description:"ବାର୍ଷିକ ଖେଳ ପ୍ରତିଯୋଗିତା",
      location: "ସ୍ଥାନୀୟ ମୈଦାନ",
      duration: "୪ ଦିନ",
      participants: "୫୦୦+",
      category: "sports",
      highlights: ["କ୍ରିକେଟ", "ଫୁଟବଲ", "ଖୋ-ଖୋ", "ଦୌଡ଼"],
      gallery: [
        "https://images.pexels.com/photos/2485478/pexels-photo-2485478.jpeg"
      ]
    }
  ];

//   Category filter
  const categories = [
    { id: 'all', name: 'ସମସ୍ତ ପର୍ବ', count: allFestivals.length },
    { id: 'religious', name: 'ଧାର୍ମିକ', count: allFestivals.filter(f => f.category === 'religious').length },
    { id: 'cultural', name: 'ସାଂସ୍କୃତିକ', count: allFestivals.filter(f => f.category === 'cultural').length },
    { id: 'sports', name: 'ଖେଳ', count: allFestivals.filter(f => f.category === 'sports').length },
    { id: 'celebration', name: 'ଉତ୍ସବ', count: allFestivals.filter(f => f.category === 'celebration').length },
    { id: 'award', name: 'ପୁରସ୍କାର', count: allFestivals.filter(f => f.category === 'award').length }
  ];

  const filteredFestivals = allFestivals;

  const FestivalCard = ({ festival }) => (
    <div className="bg-gradient-to-br from-white via-sky-25 to-sky-50 rounded-2xl border border-sky-100 shadow-[0_10px_30px_rgba(14,165,233,0.1)] hover:shadow-[0_20px_40px_rgba(14,165,233,0.25)] transform hover:-translate-y-2 transition-all duration-500 overflow-hidden group">
      <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-2xl">
        <img 
          src={festival.image}
          alt={festival.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        
        {/* Date badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-xl px-3 py-1.5 shadow-lg">
          <div className="flex items-center text-sky-600 text-sm font-bold">
            <Calendar className="w-4 h-4 mr-2" />
            {festival.date}
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4 bg-sky-500/90 text-white rounded-xl px-3 py-1.5 text-sm font-semibold backdrop-blur-sm">
          {categories.find(cat => cat.id === festival.category)?.name}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-700 transition-colors duration-300">
          {festival.name}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {festival.description}
        </p>
        
        {/* Festival details */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-sky-500" />
            <span>{festival.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-sky-500" />
            <span>{festival.duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2 text-sky-500" />
            <span>{festival.participants}</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">ମୁଖ୍ୟ ଆକର୍ଷଣ:</h4>
          <div className="flex flex-wrap gap-2">
            {festival.highlights.slice(0, 3).map((highlight, index) => (
              <span key={index} className="bg-sky-100 text-sky-700 text-xs px-2 py-1 rounded-full">
                {highlight}
              </span>
            ))}
            {festival.highlights.length > 3 && (
              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                +{festival.highlights.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* View Details Button */}
        <button className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white py-2 rounded-lg transition-all duration-300 font-semibold group-hover:shadow-lg">
          ଅଧିକ ଜାଣନ୍ତୁ
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 py-8 mt-12 sm:mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-sky-600 hover:text-sky-700 transition-colors duration-200 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back</span>
          </button>
          
          {/* <div className="text-center flex-1 mx-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent">
              ସମସ୍ତ ପର୍ବପର୍ବାଣି
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              ଆମ ସମୁଦାୟର ସମସ୍ତ ଉତ୍ସବ ଓ କାର୍ଯ୍ୟକ୍ରମ
            </p>
          </div> */}
          
          <div className="w-20"></div> {/* Spacer for balance */}
        </div>

        {/* Category Filter */}
        {/* <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 font-semibold ${
                  selectedCategory === category.id
                    ? 'bg-sky-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-sky-50 hover:text-sky-600 shadow-sm'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div> */}

        {/* Festival Count */}
        {/* <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-2 shadow-lg">
            <Sparkles className="w-5 h-5 text-sky-500" />
            <span className="font-semibold text-gray-700">
              ମୋଟ {filteredFestivals.length} ଟି ପର୍ବ ମିଳିଲା
            </span>
          </div>
        </div> */}

        {/* Festivals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFestivals.map((festival) => (
            <FestivalCard key={festival.id} festival={festival} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredFestivals.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
              <Star className="w-16 h-16 text-sky-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-700 mb-2">କୌଣସି ପର୍ବ ମିଳିଲା ନାହିଁ</h3>
              <p className="text-gray-600">ବର୍ତ୍ତମାନ ଏହି ବର୍ଗରେ କୌଣସି ପର୍ବ ନାହିଁ।</p>
            </div>
          </div>
        )}

        {/* Total Festivals Summary */}
        <div className="text-center mt-12 bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto">
          <div className="text-3xl font-bold text-sky-600 mb-2">{allFestivals.length}</div>
          <div className="text-gray-600 font-semibold">ମୋଟ ପର୍ବ ସଂଖ୍ୟା</div>
          <p className="text-sm text-gray-500 mt-2">ବର୍ଷସାରା ଆୟୋଜିତ ହୁଏ</p>
        </div>
      </div>
    </div>
  );
};

export default AllFestivalsPage;