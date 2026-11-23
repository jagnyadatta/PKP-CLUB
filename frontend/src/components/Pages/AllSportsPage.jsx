import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Users, MapPin, Trophy, Award, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/constant';
import { CricketIcon, StickerBadge, JhotiCorner, DiyaIcon } from '../Cartoon/CartoonDoodles';
import { SportsPhotoPlaceholder } from '../Cartoon/EmptyPhotoPlaceholder';
import MarigoldGarland from '../Cartoon/MarigoldGarland';

const AllSportsPage = () => {
  const navigate = useNavigate();
  const [selectedSport, setSelectedSport] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  // Preserved sports data verbatim
  const defaultSportsEvents = [
    {
      id: 1,
      name: "Annual Cricket Tournament 2024",
      /* image: "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", */
      image: "",
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
      /* image: "https://images.pexels.com/photos/2485471/pexels-photo-2485471.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", */
      image: "",
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
      /* image: "https://images.pexels.com/photos/2485479/pexels-photo-2485479.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", */
      image: "",
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
      /* image: "https://images.pexels.com/photos/345092/pexels-photo-345092.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", */
      image: "",
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
      /* image: "https://images.pexels.com/photos/345092/pexels-photo-345092.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", */
      image: "",
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
    }
  ];

  const [sportsEvents, setSportsEvents] = useState(defaultSportsEvents);

  // Requirement 4: Live sync
  useEffect(() => {
    fetch(`${BASE_URL}/api/programs?type=sport`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data && data.data.length > 0) {
          const mapped = data.data.map(item => ({
            ...item,
            sport: item.category?.toLowerCase() || item.sport || "cricket"
          }));
          setSportsEvents(mapped);
        }
      })
      .catch(() => {});
  }, []);

  const sports = [
    { id: 'all', name: 'ସମସ୍ତ ଖେଳ' },
    { id: 'cricket', name: 'କ୍ରିକେଟ୍' },
    { id: 'volleyball', name: 'ଭଲିବଲ୍' }
  ];

  const filteredEvents = sportsEvents.filter(event => {
    const matchesSport = selectedSport === 'all' || event.sport === selectedSport;
    const matchesYear = selectedYear === 'all' || event.year === selectedYear;
    return matchesSport && matchesYear;
  });

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
            <StickerBadge text="କ୍ରୀଡ଼ା ପ୍ରତିଯୋଗିତା" color="clay" rotate="-rotate-1" />
          </div>

          <h1 className="heading-font text-3xl sm:text-5xl font-black text-[#2B231D] mb-3">
            ସମସ୍ତ କ୍ରୀଡ଼ା ଟୁର୍ଣ୍ଣାମେଣ୍ଟ
          </h1>

          <div className="w-24 h-2 bg-amber-400 rounded-full border-2 border-[#2B231D] mx-auto mb-4 shadow-cartoon-sm"></div>

          <p className="font-cartoon text-stone-700 max-w-2xl mx-auto text-sm sm:text-base font-semibold">
            ମା ବରୁଣାଇ ମୈଦାନ ଓ ସ୍ଥାନୀୟ ଷ୍ଟାଡିୟମରେ ଅନୁଷ୍ଠିତ ବାର୍ଷିକ କ୍ରିକେଟ୍ ଓ ଭଲିବଲ୍ ପ୍ରତିଯୋଗିତାର ଇତିହାସ ଓ ଫଳାଫଳ।
          </p>
        </div>

        {/* Sports Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10 font-cartoon">
          {sports.map(sport => (
            <button
              key={sport.id}
              onClick={() => setSelectedSport(sport.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border-2 transition-all cursor-pointer ${
                selectedSport === sport.id
                  ? 'bg-amber-400 text-stone-900 border-[#2B231D] shadow-cartoon-sm -translate-y-0.5'
                  : 'bg-white text-stone-700 border-[#2B231D]/20 hover:border-[#2B231D]'
              }`}
            >
              {sport.name}
            </button>
          ))}
        </div>

        {/* Sports Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredEvents.map(event => (
            <div
              key={event._id || event.id}
              className="card-cartoon bg-white overflow-hidden group hover:-translate-y-2 hover:shadow-cartoon-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo Frame in Cartoon Border - Requirement 5: Placeholder frame, comments preserved */}
              <div className="relative h-48 overflow-hidden border-b-2.5 border-[#2B231D] bg-emerald-50 flex items-center justify-center">
                {/* <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-all duration-500"
                /> */}
                {event.image && event.image.startsWith("http") && !event.image.includes("pexels.com") ? (
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-all duration-500"
                  />
                ) : (
                  <SportsPhotoPlaceholder sport={event.sport} />
                )}
                
                <div className="absolute top-3 left-3 bg-amber-400 text-stone-900 px-3 py-1 rounded-xl text-xs font-bold border-2 border-[#2B231D] shadow-cartoon-sm">
                  {event.sport === 'cricket' ? 'କ୍ରିକେଟ୍' : 'ଭଲିବଲ୍'}
                </div>

                <div className="absolute top-3 right-3 bg-white/95 text-stone-900 px-3 py-1 rounded-xl text-xs font-bold border-2 border-[#2B231D] shadow-cartoon-sm">
                  {event.year}
                </div>
              </div>

              {/* Details */}
              <div className="p-5 font-cartoon flex flex-col justify-between flex-1">
                <div>
                  <h3 className="heading-font text-xl font-black text-stone-900 mb-2">
                    {event.name}
                  </h3>

                  <div className="space-y-1.5 text-xs font-bold text-stone-700 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-amber-700" />
                      <span>{event.teams}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#E06D53]" />
                      <span>{event.venue || event.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{event.date}</span>
                    </div>
                  </div>

                  {event.manOfMatch && (
                    <div className="mb-3 text-xs bg-amber-50 p-2 rounded-lg border border-amber-200 font-bold text-amber-900">
                      ⭐ ମ୍ୟାନ୍ ଅଫ୍ ଦି ମ୍ୟାଚ୍: {event.manOfMatch}
                    </div>
                  )}
                </div>

                {/* Match Result */}
                <div className="bg-amber-100 rounded-xl p-2.5 border-2 border-[#2B231D] shadow-cartoon-sm flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-amber-700" />
                    <p className="font-odia text-stone-900 font-bold text-xs sm:text-sm">
                      {event.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AllSportsPage;
