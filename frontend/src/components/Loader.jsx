import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Sparkles } from "lucide-react";
import { DiyaIcon } from './Cartoon/CartoonDoodles';

/**
 * 2D Cartoon Handcrafted Loader for Gopabandhu Pathagara
 * Features an authentic illustrated portrait medallion, rotating marigold petal ring,
 * and preserved welcome message.
 */
const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-[#FAF7F0] z-50 flex items-center justify-center overflow-hidden p-4">
      
      {/* 2D Background Cartoon Halftone Dots */}
      <div className="absolute inset-0 comic-dots pointer-events-none"></div>

      {/* Floating 2D Decorative Badges */}
      <div className="absolute top-12 left-10 w-16 h-16 rounded-2xl bg-amber-200 border-2.5 border-[#2B231D] shadow-cartoon rotate-12 animate-float-slow hidden sm:flex items-center justify-center">
        <DiyaIcon className="w-8 h-8" />
      </div>
      <div className="absolute bottom-16 right-12 w-14 h-14 rounded-2xl bg-emerald-200 border-2.5 border-[#2B231D] shadow-cartoon -rotate-6 animate-wiggle hidden sm:flex items-center justify-center">
        <Sparkles className="w-6 h-6 text-emerald-800" />
      </div>

      {/* Main Loader Medallion Card */}
      <div className="relative z-10 card-cartoon bg-[#FFFDF7] p-8 sm:p-12 max-w-lg w-full text-center shadow-[8px_8px_0px_#2B231D] animate-fadeIn">
        
        {/* Cartoon Portrait Medallion */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            {/* Marigold Garland Ring Effect */}
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-amber-300 border-4 border-[#2B231D] shadow-cartoon flex items-center justify-center p-2 relative overflow-hidden group">
              <img
                src="/Gopabndhu-Das.png"
                alt="Utkala Mani Gopabandhu Das"
                className="w-full h-full rounded-full object-cover border-2 border-[#2B231D] bg-white"
              />
            </div>

            {/* Corner Diya Badge */}
            <div className="absolute -bottom-2 -right-2 bg-amber-400 p-2 rounded-2xl border-2 border-[#2B231D] shadow-cartoon-sm animate-bounce-gentle">
              <DiyaIcon className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Welcome Text in Odia and English */}
        <div className="space-y-2 mb-6">
          <span className="inline-block px-3.5 py-1 bg-amber-100 text-stone-900 border-2 border-[#2B231D] rounded-full text-xs sm:text-sm font-bold shadow-cartoon-sm -rotate-1 mb-2">
            Welcome to
          </span>

          <h2 className="heading-font text-3xl sm:text-5xl font-black text-[#2B231D] leading-tight">
            ଗୋପବନ୍ଧୁ ପଠାଗାର
          </h2>

          {/* Location Badge */}
          <div className="flex items-center justify-center text-amber-900 font-bold text-base sm:text-lg gap-1.5 mt-2">
            <div className="bg-amber-200 rounded-full p-1 border border-[#2B231D]">
              <MapPin className="w-4 h-4" />
            </div>
            <span>ପାଇକରାପୁର, ପୁରୀ</span>
          </div>

          {/* Established Tag */}
          <div className="flex items-center justify-center text-stone-700 font-bold text-xs sm:text-sm gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-amber-700" />
            <span>Established 1985 (ସ୍ଥାପିତ ୧୯୫୫)</span>
          </div>
        </div>

        {/* Preserved Odia Description */}
        <p className="font-cartoon text-xs sm:text-sm text-stone-700 leading-relaxed max-w-sm mx-auto font-semibold mb-6 bg-amber-50 p-3 rounded-xl border border-[#2B231D]/20">
          ସମୁଦାୟର ସେବା ଓ ସଂଗଠନ - ଏକତା, ସମର୍ପଣ ଓ ସହଯୋଗରେ ଉନ୍ନତିର ପଥରେ
        </p>

        {/* Cartoon Bouncing Loading Pills */}
        <div className="flex justify-center items-center space-x-2">
          <div className="w-3.5 h-3.5 bg-amber-400 border-1.5 border-[#2B231D] rounded-full animate-bounce"></div>
          <div className="w-3.5 h-3.5 bg-[#E06D53] border-1.5 border-[#2B231D] rounded-full animate-bounce" style={{ animationDelay: "0.15s" }}></div>
          <div className="w-3.5 h-3.5 bg-emerald-400 border-1.5 border-[#2B231D] rounded-full animate-bounce" style={{ animationDelay: "0.3s" }}></div>
        </div>

      </div>
    </div>
  );
};

export default Loader;
