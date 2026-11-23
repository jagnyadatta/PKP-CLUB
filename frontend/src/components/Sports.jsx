import React from "react";
import { ChevronRight, Calendar, Users, MapPin, Trophy, Award } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { CricketIcon, StickerBadge, JhotiCorner } from './Cartoon/CartoonDoodles';

const Sports = () => {
  const navigate = useNavigate();

  const cricketMatches = [
    {
      id: 1,
      name: "Annual Cricket Tournament 2024",
      image: "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      year: "2024",
      teams: "ପାଇକରାପୁର vs ବ୍ରାହ୍ମଣଦେଓ",
      venue: "ମା ବରୁଣାଇ ମୈଦାନ",
      date: "ମାର୍ଚ୍ଚ ୧୫, ୨୦୨୪",
      result: "ପାଇକରାପୁର ବିଜୟୀ"
    },
    {
      id: 2,
      name: "Cricket Championship 2023",
      image: "https://images.pexels.com/photos/2485471/pexels-photo-2485471.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      year: "2023",
      teams: "ଡିଆକୁଦା vs ସୁବଳୟା",
      venue: "ମା ବରୁଣାଇ ମୈଦାନ",
      date: "ଡିସେମ୍ବର ୫, ୨୦୨୩",
      result: "ସୁବଳୟା ବିଜୟୀ"
    }
  ];

  const volleyballMatches = [
    {
      id: 1,
      name: "Volleyball Premier League 2024",
      image: "https://images.pexels.com/photos/345092/pexels-photo-345092.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      year: "2024",
      teams: "ପାଇକରାପୁର-A vs ପାଇକରାପୁର-B",
      venue: "ଇନଡୋର ଷ୍ଟାଡିୟମ",
      date: "ଫେବୃଆରୀ ୨୮, ୨୦୨୪",
      result: "ପାଇକରାପୁର-A ବିଜୟୀ"
    }
  ];

  const SportsCard = ({ match, sportType }) => (
    <div className="card-cartoon bg-white overflow-hidden group hover:-translate-y-2 hover:shadow-cartoon-lg transition-all duration-300">
      
      {/* Match Cover Image with 2D Cartoon Border */}
      <div className="relative h-48 sm:h-52 overflow-hidden border-b-2.5 border-[#2B231D]">
        <img
          src={match.image}
          alt={match.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-all duration-500"
        />
        
        {/* Sport Type Badge */}
        <div className="absolute top-3 left-3 bg-amber-400 text-stone-900 px-3 py-1 rounded-xl text-xs sm:text-sm font-bold border-2 border-[#2B231D] shadow-cartoon-sm">
          {sportType}
        </div>

        {/* Year Badge */}
        <div className="absolute top-3 right-3 bg-white/95 text-stone-900 px-3 py-1 rounded-xl text-xs sm:text-sm font-bold border-2 border-[#2B231D] shadow-cartoon-sm">
          {match.year}
        </div>
      </div>
      
      {/* Details */}
      <div className="p-5 sm:p-6">
        <h3 className="heading-font text-xl sm:text-2xl font-black text-[#2B231D] mb-3 group-hover:text-amber-800 transition-colors">
          {match.name}
        </h3>
        
        <div className="space-y-2.5 mb-4 text-xs sm:text-sm font-bold text-stone-700">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2 text-amber-700 flex-shrink-0" />
            <span className="font-semibold text-stone-900">{match.teams}</span>
          </div>
          
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-[#E06D53] flex-shrink-0" />
            <span>{match.venue}</span>
          </div>
          
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-emerald-700 flex-shrink-0" />
            <span>{match.date}</span>
          </div>
        </div>
        
        {/* Match Result Banner with Cartoon Stamp Style */}
        <div className="bg-amber-100 rounded-xl p-3 border-2 border-[#2B231D] shadow-cartoon-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-700" />
            <p className="font-odia text-stone-900 font-bold text-sm sm:text-base">
              ଫଳାଫଳ: {match.result}
            </p>
          </div>
          <span className="text-[10px] bg-emerald-500 text-white font-bold px-2 py-0.5 rounded border border-[#2B231D]">
            ସମାପ୍ତ
          </span>
        </div>
      </div>
    </div>
  );

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
            <StickerBadge text="ଯୁବ ଉତ୍ସାହ ଓ ପ୍ରତିଯୋଗିତା" color="clay" rotate="-rotate-1" />
          </div>

          <h2 className="heading-font text-3xl sm:text-5xl md:text-6xl font-black text-[#2B231D] mb-4">
            ଆମର କ୍ରୀଡ଼ା
          </h2>

          <div className="w-24 sm:w-32 h-2.5 bg-amber-400 rounded-full border-2 border-[#2B231D] mx-auto mb-5 shadow-cartoon-sm"></div>

          <p className="font-cartoon text-base sm:text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
            କ୍ରିକେଟ୍ ଓ ଭଲିବଲ୍ ଖେଳରେ ଆମର ଉତ୍କୃଷ୍ଟ ପ୍ରଦର୍ଶନ ଏବଂ ବାର୍ଷିକ ପ୍ରତିଯୋଗିତା
          </p>
        </div>

        {/* Cricket Section */}
        <div className="mb-14">
          <div className="flex items-center justify-center gap-2 mb-8">
            <CricketIcon className="w-7 h-7 sm:w-8 sm:h-8" />
            <h3 className="heading-font text-2xl sm:text-3xl font-black text-[#2B231D]">
              କ୍ରିକେଟ୍ ମ୍ୟାଚସବୁ
            </h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {cricketMatches.map((match) => (
              <SportsCard key={match.id} match={match} sportType="କ୍ରିକେଟ୍" />
            ))}
          </div>
        </div>

        {/* Volleyball Section */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Trophy className="w-6 h-6 text-emerald-600" />
            <h3 className="heading-font text-2xl sm:text-3xl font-black text-[#2B231D]">
              ଭଲିବଲ୍ ମ୍ୟାଚସବୁ
            </h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {volleyballMatches.map((match) => (
              <SportsCard key={match.id} match={match} sportType="ଭଲିବଲ୍" />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button 
            onClick={() => navigate('/all-sports')} 
            className="btn-cartoon-amber text-base sm:text-lg"
          >
            <span>ସମସ୍ତ ମ୍ୟାଚ ଦେଖନ୍ତୁ</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Sports;
