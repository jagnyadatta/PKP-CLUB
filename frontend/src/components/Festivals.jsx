import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, ChevronLeft, Calendar, Star, Sparkles, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { StickerBadge, JhotiCorner } from './Cartoon/CartoonDoodles';

const Festivals = () => {
  const navigate = useNavigate();

  const festivals = [
    {
      id: 1,
      name: "ପଞ୍ଚୁଦୋଳ ଯାତ୍ରା",
      image: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      date: "ମାର୍ଚ୍ଚ ୨୦୨୪",
      tag: "ମହାମେଳଣ",
      badgeColor: "bg-amber-400 text-stone-900",
      description: "ପାରମ୍ପାରିକ ପଞ୍ଚୁଦୋଳ ଯାତ୍ରା ଉତ୍ସବ ଓ ଭକ୍ତିଭାବପୂର୍ଣ୍ଣ ଆୟୋଜନ"
    },
    {
      id: 2,
      name: "ମା' ଗଜଲକ୍ଷ୍ମୀ ପୂଜା",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      date: "ଜୁନ ୨୦୨୪",
      tag: "ଧାର୍ମିକ ପୂଜା",
      badgeColor: "bg-rose-400 text-white",
      description: "ଧାର୍ମିକ ପୂଜା ଓ ସାମୁଦାୟିକ ଭୋଜି ଅନୁଷ୍ଠାନ"
    },
    {
      id: 3,
      name: "ଦଣ୍ଡନାଚ ପର୍ବ",
      image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      date: "ସେପ୍ଟେମ୍ବର ୨୦୨୪",
      tag: "ଲୋକନୃତ୍ୟ",
      badgeColor: "bg-emerald-400 text-stone-900",
      description: "ପାରମ୍ପାରିକ ନୃତ୍ୟ ଓ ସାଂସ୍କୃତିକ ପ୍ରଦର୍ଶନୀ"
    },
    {
      id: 4,
      name: "ବାର୍ଷିକ ପୁରସ୍କାର ସମାରୋହ",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      date: "ଡିସେମ୍ବର ୨୦୨୪",
      tag: "ସମ୍ମାନ ସମାରୋହ",
      badgeColor: "bg-purple-400 text-white",
      description: "ଉତ୍କୃଷ୍ଟ କ୍ଷେତ୍ରରେ ଅସାଧାରଣ ପ୍ରଦର୍ଶନ ପାଇଁ ପୁରସ୍କୃତ"
    },
    {
      id: 5,
      name: "ନୂଆବର୍ଷ ଉତ୍ସବ",
      image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      date: "ଜାନୁଆରୀ ୨୦୨୫",
      tag: "ନୂତନ ଆଗମନ",
      badgeColor: "bg-sky-400 text-stone-900",
      description: "ନୂତନ ବର୍ଷକୁ ସ୍ୱାଗତ ଜଣାଇବା ଉତ୍ସବ"
    }
  ];

  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 340;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const FestivalCard = ({ festival }) => (
    <div className="card-cartoon bg-white overflow-hidden group hover:-translate-y-2 hover:shadow-cartoon-lg transition-all duration-300 h-full flex flex-col justify-between">
      
      {/* Image with 2D Cartoon Border & Badge */}
      <div className="relative h-48 sm:h-52 overflow-hidden border-b-2.5 border-[#2B231D] bg-amber-100">
        <img 
          src={festival.image}
          alt={festival.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-all duration-500"
        />
        
        {/* Date badge with cartoon stamp style */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs rounded-xl px-3 py-1 border-2 border-[#2B231D] shadow-cartoon-sm">
          <div className="flex items-center text-stone-900 text-xs sm:text-sm font-bold">
            <Calendar className="w-3.5 h-3.5 mr-1.5 text-amber-600" />
            {festival.date}
          </div>
        </div>

        {/* Festival Tag */}
        <div className="absolute top-3 left-3">
          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-lg border-1.5 border-[#2B231D] shadow-cartoon-sm ${festival.badgeColor}`}>
            ★ {festival.tag}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="heading-font text-xl sm:text-2xl font-black text-[#2B231D] mb-2 group-hover:text-amber-800 transition-colors">
            {festival.name}
          </h3>
          <p className="font-cartoon text-sm text-stone-700 leading-relaxed font-semibold">
            {festival.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t-2 border-stone-100 flex items-center justify-between">
          <span className="text-xs font-bold text-amber-700 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            ପାଇକରାପୁର ପରମ୍ପରା
          </span>
          <span className="text-stone-900 font-bold text-xs group-hover:translate-x-1 transition-transform inline-flex items-center">
            ଦେଖନ୍ତୁ →
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F0] border-b-3 sm:border-b-4 border-[#2B231D] relative overflow-hidden">
      
      {/* Decorative Traditional Corner */}
      <div className="absolute top-4 right-4 opacity-30 hidden sm:block">
        <JhotiCorner position="top-right" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-3">
            <StickerBadge text="ସାଂସ୍କୃତିକ ଆନନ୍ଦ ଉତ୍ସବ" color="amber" rotate="rotate-1" />
          </div>

          <h2 className="heading-font text-3xl sm:text-5xl md:text-6xl font-black text-[#2B231D] mb-4">
            ଆମର ପର୍ବପର୍ବାଣି
          </h2>

          <div className="w-24 sm:w-32 h-2.5 bg-amber-400 rounded-full border-2 border-[#2B231D] mx-auto mb-5 shadow-cartoon-sm"></div>

          <p className="font-cartoon text-base sm:text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
            ପଞ୍ଚୁଦୋଳ ଯାତ୍ରା, ମା' ଗଜଲକ୍ଷ୍ମୀ ପୂଜା ଓ ଦଣ୍ଡନାଚ ପର୍ବମାନଙ୍କ ମାଧ୍ୟମରେ ଆମ ସମୁଦାୟର ସଂସ୍କୃତି ଓ ଏକତାକୁ ଆମେ ଉଦ୍‌ଜାପନ କରୁଛୁ।
          </p>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-end space-x-2 mb-4">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-xl bg-white border-2 border-[#2B231D] shadow-cartoon-sm hover:bg-amber-100 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous Festival"
          >
            <ChevronLeft className="w-5 h-5 text-stone-900" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-xl bg-amber-400 border-2 border-[#2B231D] shadow-cartoon-sm hover:bg-amber-300 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next Festival"
          >
            <ChevronRight className="w-5 h-5 text-stone-900" />
          </button>
        </div>

        {/* Horizontal Scrollable Carousel Container */}
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-6 pt-2 px-1 cursor-grab active:cursor-grabbing snap-x"
        >
          {festivals.map((festival) => (
            <div 
              key={festival.id} 
              className="flex-shrink-0 w-80 sm:w-96 snap-start"
            >
              <FestivalCard festival={festival} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button 
            onClick={() => navigate('/all-festivals')} 
            className="btn-cartoon-amber text-base sm:text-lg"
          >
            <span>ସମସ୍ତ ପର୍ବ ଦେଖନ୍ତୁ</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Festivals;
