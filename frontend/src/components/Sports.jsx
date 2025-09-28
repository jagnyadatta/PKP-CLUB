import React from "react";
import { ChevronRight, Calendar, Users, MapPin } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Sports = () => {
  const navigate = useNavigate();
  const cricketMatches = [
    {
      id: 1,
      name: "Annual Cricket Tournament 2024",
      image: "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      year: "2024",
      teams: "ପାଇକରାପୁର vs ବ୍ରାହ୍ମଣଦେଓ",
      venue: "ମା ବରୁଣାଇ ମୈଦାନ",
      date: "ମାର୍ଚ୍ଚ ୧୫, ୨୦୨୪",
      result: "ପାଇକରାପୁର ବିଜୟୀ"
    },
    {
      id: 2,
      name: "Cricket Championship 2023",
      image: "https://images.pexels.com/photos/2485471/pexels-photo-2485471.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
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
      image: "https://images.pexels.com/photos/345092/pexels-photo-345092.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      year: "2024",
      teams: "ପାଇକରାପୁର-A vs ପାଇକରାପୁର-B",
      venue: "ଇନଡୋର ଷ୍ଟାଡିୟମ",
      date: "ଫେବୃଆରୀ ୨୮, ୨୦୨୪",
      result: "ପାଇକରାପୁର-A ବିଜୟୀ"
    }
  ];

  const SportsCard = ({ match, sportType }) => (
    <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(14,165,233,0.15)] hover:shadow-[0_20px_50px_rgba(14,165,233,0.25)] transition-all duration-300 overflow-hidden group border border-sky-100">
      <div className="relative h-48 overflow-hidden">
        <img
          src={match.image}
          alt={match.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {sportType}
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-sky-600 px-3 py-1 rounded-full text-sm font-bold">
          {match.year}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-700 transition-colors duration-300">
          {match.name}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2 text-sky-500" />
            <span className="font-medium">{match.teams}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-sky-500" />
            <span>{match.venue}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-sky-500" />
            <span>{match.date}</span>
          </div>
        </div>
        
        <div className="bg-sky-50 rounded-lg p-3 border border-sky-200">
          <p className="text-sky-700 font-semibold text-sm">ଫଳାଫଳ: {match.result}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent mb-6 p-2">
            ଆମର କ୍ରୀଡ଼ା
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            କ୍ରିକେଟ୍ ଓ ଭଲିବଲ୍ ଖେଳରେ ଆମର ଉତ୍କୃଷ୍ଟ ପ୍ରଦର୍ଶନ ଏବଂ ବାର୍ଷିକ ପ୍ରତିଯୋଗିତା
          </p>
        </div>

        {/* Cricket Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">କ୍ରିକେଟ୍ ମ୍ୟାଚସବୁ</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full mx-auto"></div>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {cricketMatches.map((match) => (
              <SportsCard key={match.id} match={match} sportType="କ୍ରିକେଟ୍" />
            ))}
          </div>

          {/* Mobile Grid */}
          <div className="md:hidden grid grid-cols-1 gap-6 mb-8">
            {cricketMatches.slice(0, 2).map((match) => (
              <SportsCard key={match.id} match={match} sportType="କ୍ରିକେଟ୍" />
            ))}
          </div>
        </div>

        {/* Volleyball Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">ଭଲିବଲ୍ ମ୍ୟାଚସବୁ</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto"></div>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {volleyballMatches.map((match) => (
              <SportsCard key={match.id} match={match} sportType="ଭଲିବଲ୍" />
            ))}
          </div>

          {/* Mobile Grid */}
          <div className="md:hidden grid grid-cols-1 gap-6 mb-8">
            {volleyballMatches.slice(0, 2).map((match) => (
              <SportsCard key={match.id} match={match} sportType="ଭଲିବଲ୍" />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button onClick={() => navigate('/all-sports')} className="group bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center space-x-2 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <span>ସମସ୍ତ ମ୍ୟାଚ ଦେଖନ୍ତୁ</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sports;