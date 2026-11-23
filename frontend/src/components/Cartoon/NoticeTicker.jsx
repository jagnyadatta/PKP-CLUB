import React, { useState } from 'react';
import { Bell, Sparkles, X, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { DiyaIcon } from './CartoonDoodles';

/**
 * Handcrafted 2D Cartoon Community Notice Board (ସୂଚନା ଫଳକ)
 * Keeps the village community informed with lively animations and sticky note details.
 */
export const NoticeTicker = () => {
  const [activeNotice, setActiveNotice] = useState(null);

  const notices = [
    {
      id: 1,
      tag: "ବିଶେଷ ସୂଚନା",
      badgeColor: "bg-red-500 text-white",
      text: "ପଞ୍ଚୁଦୋଳ ଯାତ୍ରା ୨୦୨୫ ପାଇଁ ପ୍ରାରମ୍ଭିକ କମିଟି ବୈଠକ ଆସନ୍ତା ରବିବାର ସନ୍ଧ୍ୟା ୬ ଟାରେ କ୍ଲବ୍ ପ୍ରାଙ୍ଗଣରେ ଅନୁଷ୍ଠିତ ହେବ।",
      date: "ରବିବାର ସନ୍ଧ୍ୟା ୬:୦୦",
      venue: "ପଠାଗାର ସଭାଗୃହ",
      details: "ପାଇକରାପୁର ଗ୍ରାମର ସମସ୍ତ ମାନ୍ୟଗଣ୍ୟ ସଦସ୍ୟ ଓ ଯୁବବନ୍ଧୁମାନଙ୍କୁ ସମୟୋଚିତ ଉପସ୍ଥିତି ପାଇଁ ବିନମ୍ର ନିବେଦନ କରାଯାଉଛି।"
    },
    {
      id: 2,
      tag: "ପାଠାଗାର",
      badgeColor: "bg-amber-400 text-stone-900",
      text: "ଗୋପବନ୍ଧୁ ପଠାଗାରରେ ନୂତନ ଓଡ଼ିଆ ସାହିତ୍ୟ ଓ ପ୍ରତିଯୋଗିତାମୂଳକ ପୁସ୍ତକ ସଂଗ୍ରହ ଉପଲବ୍ଧ ହୋଇଛି। ପ୍ରତିଦିନ ସନ୍ଧ୍ୟା ୫-୮ ଖୋଲା।",
      date: "ପ୍ରତିଦିନ ସନ୍ଧ୍ୟା ୫:୦୦ - ୮:୦୦",
      venue: "ପଠାଗାର କକ୍ଷ",
      details: "ଛାତ୍ରଛାତ୍ରୀ ଓ ଗ୍ରାମବାସୀଙ୍କ ପାଇଁ ପଠନ କକ୍ଷ ସୁବିଧା ସମ୍ପୂର୍ଣ୍ଣ ନିଃଶୁଳ୍କ।"
    },
    {
      id: 3,
      tag: "କ୍ରୀଡ଼ା",
      badgeColor: "bg-emerald-500 text-white",
      text: "ବାର୍ଷିକ କ୍ରିକେଟ୍ ଟୁର୍ଣ୍ଣାମେଣ୍ଟ ୨୦୨୫ ପାଇଁ ଟିମ୍ ରେଜିଷ୍ଟ୍ରେସନ୍ ଆରମ୍ଭ ହୋଇଛି। ଯୁବ ସଦସ୍ୟମାନେ ଯୋଗାଯୋଗ କରନ୍ତୁ।",
      date: "ଶୀଘ୍ର ତାରିଖ ଘୋଷଣା",
      venue: "ମା ବରୁଣାଇ ମୈଦାନ",
      details: "ସ୍ପୋର୍ଟସ୍ ସେକ୍ରେଟାରୀ ଶ୍ରୀ. ଟିଲୁ ବେହେରାଙ୍କ ସହ ଅଧିକ ବିବରଣୀ ପାଇଁ ସମ୍ପର୍କ କରନ୍ତୁ।"
    }
  ];

  return (
    <>
      {/* Top Banner Ribbon */}
      <div className="bg-[#FEF3C7] border-b-2 sm:border-b-3 border-[#2B231D] relative z-40 overflow-hidden py-1.5 px-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm font-bold text-stone-900">
          
          {/* Badge Label */}
          <div className="flex items-center gap-1.5 flex-shrink-0 bg-[#E06D53] text-white px-2.5 py-1 rounded-full border-2 border-[#2B231D] shadow-cartoon-sm -rotate-1 mr-3">
            <Bell className="w-3.5 h-3.5 animate-bounce" />
            <span className="font-odia text-xs sm:text-sm">ସୂଚନା ଫଳକ:</span>
          </div>

          {/* Marquee ticker */}
          <div className="flex-1 overflow-hidden relative">
            <div className="flex space-x-8 whitespace-nowrap animate-marquee">
              {notices.map((n) => (
                <button
                  key={n.id}
                  onClick={() => setActiveNotice(n)}
                  className="inline-flex items-center space-x-2 text-stone-800 hover:text-amber-700 transition-colors cursor-pointer group"
                >
                  <span className={`px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-bold border border-[#2B231D] ${n.badgeColor}`}>
                    {n.tag}
                  </span>
                  <span className="font-medium underline decoration-dashed decoration-amber-400 group-hover:decoration-amber-600">
                    {n.text}
                  </span>
                  <span className="text-amber-600 font-extrabold">✦</span>
                </button>
              ))}
            </div>
          </div>

          {/* Established Paikarapur Tag */}
          <div className="hidden lg:flex items-center gap-1 flex-shrink-0 pl-3 border-l-2 border-[#2B231D]/20 text-xs font-bold text-stone-700">
            <DiyaIcon className="w-4 h-4" />
            <span>ପାଇକରାପୁର, ପୁରୀ (ସ୍ଥାପିତ ୧୯୫୫)</span>
          </div>
        </div>
      </div>

      {/* Notice Detail Modal */}
      {activeNotice && (
        <div className="fixed inset-0 bg-[#2B231D]/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-[#FFFDF7] border-3 sm:border-4 border-[#2B231D] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-[8px_8px_0px_#2B231D] relative">
            {/* Cartoon Pushpin Top */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 bg-red-500 rounded-full border-2 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setActiveNotice(null)}
              className="absolute top-4 right-4 bg-amber-200 hover:bg-amber-300 border-2 border-[#2B231D] rounded-full p-1.5 transition-colors shadow-cartoon-sm"
            >
              <X className="w-4 h-4 text-stone-900" />
            </button>

            {/* Header */}
            <div className="mt-2 mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border-2 border-[#2B231D] shadow-cartoon-sm mb-2 ${activeNotice.badgeColor}`}>
                {activeNotice.tag}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#2B231D] leading-snug">
                {activeNotice.text}
              </h3>
            </div>

            {/* Body */}
            <div className="bg-[#FEF3C7] border-2 border-[#2B231D] rounded-2xl p-4 mb-5 text-sm sm:text-base text-stone-800 leading-relaxed">
              <p>{activeNotice.details}</p>
              <div className="mt-3 pt-3 border-t border-[#2B231D]/20 flex flex-wrap gap-4 text-xs font-bold text-stone-700">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-700" />
                  {activeNotice.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-700" />
                  {activeNotice.venue}
                </span>
              </div>
            </div>

            {/* Action */}
            <button
              onClick={() => setActiveNotice(null)}
              className="w-full btn-cartoon-amber text-sm font-bold"
            >
              ଧନ୍ୟବାଦ (ବନ୍ଦ କରନ୍ତୁ)
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NoticeTicker;
