import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, Calendar, Star, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Festivals = () => {
  const navigate = useNavigate();
  const festivals = [
    {
      id: 1,
      name: "ପଞ୍ଚୁଦୋଳ ଯାତ୍ରା",
      image: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      date: "ମାର୍ଚ୍ଚ ୨୦୨୪",
      description: "ପାରମ୍ପାରିକ ପଞ୍ଚୁଦୋଳ ଯାତ୍ରା ଉତ୍ସବ ଓ ଭକ୍ତିଭାବପୂର୍ଣ୍ଣ ଆୟୋଜନ"
    },
    {
      id: 2,
      name: "ମା' ଗଜଲକ୍ଷ୍ମୀ ପୂଜା",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      date: "ଜୁନ ୨୦୨୪",
      description: "ଧାର୍ମିକ ପୂଜା ଓ ସାମୁଦାୟିକ ଭୋଜି ଅନୁଷ୍ଠାନ"
    },
    {
      id: 3,
      name: "ଦଣ୍ଡନାଚ ପର୍ବ",
      image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      date: "ସେପ୍ଟେମ୍ବର ୨୦୨୪",
      description: "ପାରମ୍ପାରିକ ନୃତ୍ୟ ଓ ସାଂସ୍କୃତିକ ପ୍ରଦର୍ଶନୀ"
    },
    {
      id: 4,
      name: "ବାର୍ଷିକ ପୁରସ୍କାର ସମାରୋହ",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      date: "ଡିସେମ୍ବର ୨୦୨୪",
      description: "ଉତ୍କୃଷ୍ଟ କ୍ଷେତ୍ରରେ ଅସାଧାରଣ ପ୍ରଦର୍ଶନ ପାଇଁ ପୁରସ୍କୃତ"
    },
    {
      id: 5,
      name: "ନୂଆବର୍ଷ ଉତ୍ସବ",
      image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      date: "ଜାନୁଆରୀ ୨୦୨୫",
      description: "ନୂତନ ବର୍ଷକୁ ସ୍ୱାଗତ ଜଣାଇବା ଉତ୍ସବ"
    }
  ];

  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll functionality for desktop
  useEffect(() => {
    if (isMobile || !scrollContainerRef.current) return;

    const scrollContainer = scrollContainerRef.current;
    let scrollInterval;
    let isPaused = false;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && scrollContainer) {
          const scrollWidth = scrollContainer.scrollWidth;
          const clientWidth = scrollContainer.clientWidth;
          const maxScrollLeft = scrollWidth - clientWidth;
          
          if (scrollContainer.scrollLeft >= maxScrollLeft - 10) {
            // If at the end, scroll back to start
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
            setCurrentIndex(0);
          } else {
            // Scroll to next card
            const cardWidth = 320; // Approximate card width + gap
            const nextScrollLeft = Math.min(
              scrollContainer.scrollLeft + cardWidth,
              maxScrollLeft
            );
            scrollContainer.scrollTo({ left: nextScrollLeft, behavior: 'smooth' });
            setCurrentIndex(Math.floor(nextScrollLeft / cardWidth));
          }
        }
      }, 3000); // Scroll every 3 seconds
    };

    // Pause auto-scroll on hover
    const pauseScroll = () => {
      isPaused = true;
    };

    const resumeScroll = () => {
      isPaused = false;
    };

    startAutoScroll();
    scrollContainer.addEventListener('mouseenter', pauseScroll);
    scrollContainer.addEventListener('mouseleave', resumeScroll);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', pauseScroll);
      scrollContainer.removeEventListener('mouseleave', resumeScroll);
    };
  }, [isMobile]);

  // Manual scroll handling to update current index
  useEffect(() => {
    if (isMobile || !scrollContainerRef.current) return;

    const scrollContainer = scrollContainerRef.current;
    
    const handleScroll = () => {
      const cardWidth = 320; // Approximate card width + gap
      const newIndex = Math.floor(scrollContainer.scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const FestivalCard = ({ festival }) => (
    <div 
      className="bg-gradient-to-br from-white via-sky-25 to-sky-50
                 rounded-2xl sm:rounded-3xl border border-sky-100
                 shadow-[0_10px_30px_rgba(14,165,233,0.1)] sm:shadow-[0_20px_60px_rgba(14,165,233,0.15)]
                 hover:shadow-[0_20px_40px_rgba(14,165,233,0.25)] sm:hover:shadow-[0_30px_80px_rgba(14,165,233,0.25)]
                 transform hover:-translate-y-2 hover:scale-105
                 transition-all duration-500 ease-out overflow-hidden group
                 backdrop-blur-sm relative w-full"
      style={{ perspective: '1200px' }}
    >
      {/* Gradient overlay on card */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
        <img 
          src={festival.image}
          alt={festival.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        
        {/* Enhanced date badge */}
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg border border-white/20">
          <div className="flex items-center text-sky-600 text-xs sm:text-sm font-bold">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            {festival.date}
          </div>
        </div>
        
        {/* Star decoration */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 text-sky-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Star className="w-4 h-4 sm:w-6 sm:h-6 fill-current" />
        </div>
      </div>
      
      <div className="p-4 sm:p-6 sm:pb-8 relative">
        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-sky-700 transition-colors duration-300">
          {festival.name}
        </h3>
        <p className="text-xs sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {festival.description}
        </p>
        
        {/* Hover indicator */}
        <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-br from-sky-50 via-white to-sky-100 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-sky-200/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-sky-300/20 rounded-full blur-2xl animate-float-delayed"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-sky-400/25 rounded-full blur-lg animate-float"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent mb-6">
            ଆମର ପର୍ବପର୍ବାଣି
          </h2>
          <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ପଞ୍ଚୁଦୋଳ ଯାତ୍ରା, ମା' ଗଜଲକ୍ଷ୍ମୀ ପୂଜା ଓ ଦଣ୍ଡନାଚ ପର୍ବମାନଙ୍କ ମାଧ୍ୟମରେ ଆମ ସମୁଦାୟର ସଂସ୍କୃତି ଓ ଏକତାକୁ ଆମେ ଉଦ୍‌ଜାପନ କରୁଛୁ।
          </p>
        </div>

        {/* Desktop: Horizontal Auto-Scroll Container */}
        {!isMobile ? (
          <div className="mb-12 relative">
            {/* Gradient overlays for fade effect */}
            <div className="absolute -left-8 top-0 bottom-0 w-20 bg-gradient-to-r from-sky-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute -right-8 top-0 bottom-0 w-20 bg-gradient-to-l from-sky-50 to-transparent z-10 pointer-events-none"></div>
            
            {/* Scroll container with hidden scrollbar */}
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide pb-6 -mx-4 px-4 cursor-grab active:cursor-grabbing"
            >
              <div className="flex space-x-6 min-w-max">
                {festivals.map((festival) => (
                  <div key={festival.id} className="flex-shrink-0 w-80 sm:w-96">
                    <FestivalCard festival={festival} />
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {festivals.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-sky-600 w-8' 
                      : 'bg-sky-300 hover:bg-sky-400'
                  }`}
                  onClick={() => {
                    if (scrollContainerRef.current) {
                      const cardWidth = 320;
                      scrollContainerRef.current.scrollTo({
                        left: index * cardWidth,
                        behavior: 'smooth'
                      });
                    }
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          // Mobile: Grid Layout
          <div className="mb-12">
            <div className="grid grid-cols-1 gap-6 sm:gap-8">
              {festivals.map((festival) => (
                <div key={festival.id} className="w-full">
                  <FestivalCard festival={festival} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced View All Button */}
        <div className="text-center">
          <button onClick={() => navigate('/all-festivals')} className="group bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 
                           text-white px-6 py-3 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl transition-all duration-300 
                           inline-flex items-center space-x-2 text-base sm:text-lg font-semibold
                           shadow-[0_8px_25px_rgba(14,165,233,0.3)] hover:shadow-[0_12px_35px_rgba(14,165,233,0.4)]
                           transform hover:-translate-y-1 hover:scale-105
                           border border-sky-400/20">
            <span>ସମସ୍ତ ପର୍ବ ଦେଖନ୍ତୁ</span>
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Enhanced animations and styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-20px) rotate(-1deg); }
          75% { transform: translateY(-10px) rotate(1deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(-1deg); }
          50% { transform: translateY(-30px) rotate(1deg); }
          75% { transform: translateY(-15px) rotate(-1deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: -2s;
        }
        
        /* Custom sky colors */
        .sky-25 {
          background-color: rgb(248 250 252);
        }
      `}</style>
    </section>
  );
};

export default Festivals;