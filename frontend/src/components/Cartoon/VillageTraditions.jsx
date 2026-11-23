import React, { useState } from 'react';
import { Sparkles, Calendar, MapPin, Users, Heart, Music, Flame } from 'lucide-react';
import { DholakIcon, DiyaIcon, StickerBadge, JhotiCorner } from './CartoonDoodles';

/**
 * Authentic Village Traditions Showcase (ପାଇକରାପୁର ସାଂସ୍କୃତିକ ଐତିହ୍ୟ)
 * Celebrating Panchudola Yatra, Maa Gajalaxmi Puja, and Danda Nacha with 2D cartoon folk visuals.
 */
export const VillageTraditions = () => {
  const [activeTab, setActiveTab] = useState(0);

  const traditions = [
    {
      id: "panchudola",
      title: "ପଞ୍ଚୁଦୋଳ ଯାତ୍ରା",
      englishTitle: "Panchudola Yatra",
      badge: "ପ୍ରମୁଖ ଗ୍ରାମୀଣ ମହୋତ୍ସବ",
      color: "border-amber-400 bg-amber-50",
      themeColor: "#F59E0B",
      tagline: "ଗ୍ରାମବାସୀଙ୍କ ମହାମିଳନ, ରଥ ପରିକ୍ରମା ଓ ହରିବୋଲ ଧ୍ୱନି",
      image: "",
      schedule: "ଫାଲ୍ଗୁନ / ମାର୍ଚ୍ଚ ମାସରେ ୬ ଦିନ ବ୍ୟାପୀ",
      venue: "ପାଇକରାପୁର ମୁଖ୍ୟ ମେଳଣ ପଡ଼ିଆ",
      highlights: [
        "ପାରମ୍ପାରିକ ବିମାନ ଓ ରଥ ପରିକ୍ରମା",
        "ସାର୍ବଜନୀନ ପ୍ରସାଦ ସେବନ ଓ ଭୋଜି",
        "ରାତ୍ରୀକାଳୀନ ଭଜନ ସନ୍ଧ୍ୟା ଓ ନାଟକ",
        "ଆଖପାଖ ୧୦ଟି ଗ୍ରାମର ଏକତ୍ରୀକରଣ"
      ],
      description:
        "ପଞ୍ଚୁଦୋଳ ଯାତ୍ରା ପାଇକରାପୁର ଗ୍ରାମର ସବୁଠାରୁ ଆନନ୍ଦଦାୟକ ଓ ପୁରାତନ ମହୋତ୍ସବ। ଏହି ଦିନରେ ଗ୍ରାମର ସମସ୍ତ ପରିବାର ଏକତ୍ର ହୋଇ ଭାଇଚାରା ଓ ଉତ୍ସବର ମଜା ନିଅନ୍ତି। ଗୋପବନ୍ଧୁ ପଠାଗାରର ସ୍ୱେଚ୍ଛାସେବୀମାନେ ଯାତ୍ରା ସମୟରେ ଶୃଙ୍ଖଳା, ପାନୀୟ ଜଳ ବ୍ୟବସ୍ଥା ଓ ଅତିଥି ସେବାରେ ସମ୍ପୂର୍ଣ୍ଣ ସହଯୋଗ କରନ୍ତି।"
    },
    {
      id: "gajalaxmi",
      title: "ମା' ଗଜଲକ୍ଷ୍ମୀ ପୂଜା",
      englishTitle: "Maa Gajalaxmi Puja",
      badge: "ପବିତ୍ର ଆଧ୍ୟାତ୍ମିକ ଉତ୍ସବ",
      color: "border-rose-400 bg-rose-50",
      themeColor: "#E11D48",
      tagline: "ସମୃଦ୍ଧି, ଶାନ୍ତି ଓ ଭକ୍ତିର ପବିତ୍ର ପୂଜାର୍ଚ୍ଚନା",
      image: "",
      schedule: "କୁମାର ପୂର୍ଣ୍ଣିମା / ଅକ୍ଟୋବର - ଜୁନ୍",
      venue: "ଗଜଲକ୍ଷ୍ମୀ ମନ୍ଦିର ପ୍ରାଙ୍ଗଣ",
      highlights: [
        "ଆଲୋକ ସଜ୍ଜା ଓ ମନୋରମ ତୋରଣ",
        "ମା'ଙ୍କ ବିଶେଷ ସନ୍ଧ୍ୟା ଆଳତୀ",
        "ସାମୁଦାୟିକ ଭୋଜି ଓ ମହାପ୍ରସାଦ",
        "ମହିଳା ଓ ଶିଶୁମାନଙ୍କ ସାଂସ୍କୃତିକ ପ୍ରତିଯୋଗିତା"
      ],
      description:
        "ମା' ଗଜଲକ୍ଷ୍ମୀ ପୂଜା ଅବସରରେ ପାଇକରାପୁର ଆଲୋକ ଓ ମଙ୍ଗଳ ଧ୍ୱନିରେ ଝଲସି ଉଠେ। କ୍ଲବ୍ ତରଫରୁ ଏହି ପବିତ୍ର ଅବସରରେ ସାମାଜିକ ଭୋଜିର ଆୟୋଜନ କରାଯାଏ, ଯେଉଁଥିରେ ସମସ୍ତ ଗ୍ରାମବାସୀ ଏକତ୍ର ବସି ମହାପ୍ରସାଦ ଗ୍ରହଣ କରନ୍ତି।"
    },
    {
      id: "dandanacha",
      title: "ଦଣ୍ଡନାଚ ପର୍ବ",
      englishTitle: "Danda Nacha Parba",
      badge: "ଓଡ଼ିଶାର ପ୍ରାଚୀନ ଲୋକକଳା",
      color: "border-emerald-400 bg-emerald-50",
      themeColor: "#059669",
      tagline: "ଧୂଳି ଦଣ୍ଡ, ପାଣି ଦଣ୍ଡ ଓ ପାରମ୍ପାରିକ ନୃତ୍ୟ ପ୍ରଦର୍ଶନ",
      image: "",
      schedule: "ଚୈତ୍ର / ବୈଶାଖ ପର୍ବ ସମୟରେ",
      venue: "ଗ୍ରାମ ଦାଣ୍ଡ ଓ କ୍ଲବ୍ ମଞ୍ଚ",
      highlights: [
        "ଧୂଳି ଦଣ୍ଡ ଓ ପାଣି ଦଣ୍ଡ ପ୍ରଦର୍ଶନ",
        "ଢୋଲକ ଓ ମାହୁରୀର ପାରମ୍ପାରିକ ତାଳ",
        "ଶିବ-ଗୌରୀ ଆରାଧନା ଓ ବ୍ରତ",
        "ପ୍ରାଚୀନ ଓଡ଼ିଆ ଲୋକକଳାର ସଂରକ୍ଷଣ"
      ],
      description:
        "ଦଣ୍ଡନାଚ ଓଡ଼ିଶାର ଏକ ଅତି ପୁରାତନ ଲୋକନୃତ୍ୟ ଓ ତପସ୍ୟାମୂଳକ ପର୍ବ। ପାଇକରାପୁର ଗ୍ରାମରେ ଏହି ପରମ୍ପରା ପିଢ଼ି ପରେ ପିଢ଼ି ବଞ୍ଚି ରହିଛି। କ୍ଲବ୍‌ର ଯୁବକମାନେ ଏହି ପାରମ୍ପାରିକ ଲୋକନୃତ୍ୟକୁ ଉତ୍ସାହର ସହ ପରିଚାଳନା କରନ୍ତି।"
    }
  ];

  const current = traditions[activeTab];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-3">
            <StickerBadge text="ପାଇକରାପୁରର ହୃଦସ୍ପନ୍ଦନ" color="clay" rotate="rotate-2" />
          </div>

          <h2 className="heading-font text-3xl sm:text-5xl md:text-6xl font-black text-[#2B231D] mb-4">
            ଆମ ଗାଁର ପାରମ୍ପାରିକ ପର୍ବ ଓ ସଂସ୍କୃତି
          </h2>

          <div className="w-24 sm:w-32 h-2.5 bg-[#E06D53] rounded-full border-2 border-[#2B231D] mx-auto mb-5 shadow-cartoon-sm"></div>

          <p className="font-cartoon text-base sm:text-xl text-stone-700 max-w-2xl mx-auto leading-relaxed">
            ପଞ୍ଚୁଦୋଳ ଯାତ୍ରା, ମା' ଗଜଲକ୍ଷ୍ମୀ ପୂଜା ଓ ଦଣ୍ଡନାଚ ପରି ଗୌରବମୟ ଲୋକ ପରମ୍ପରା ଆମ ସଂଘର ପ୍ରକୃତ ପରିଚୟ।
          </p>
        </div>

        {/* 2D Cartoon Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          {traditions.map((t, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(index)}
                className={`font-odia font-bold text-base sm:text-xl px-5 sm:px-7 py-3 rounded-2xl border-3 border-[#2B231D] transition-all duration-200 cursor-pointer ${isActive
                  ? "bg-amber-400 text-stone-900 shadow-cartoon -translate-y-1 scale-102"
                  : "bg-white text-stone-700 hover:bg-amber-100 shadow-cartoon-sm"
                  }`}
              >
                ★ {t.title}
              </button>
            );
          })}
        </div>

        {/* Featured Tradition Showcase Card */}
        <div className="card-cartoon p-6 sm:p-10 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Image Column with 2D Cartoon Frame */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Comic Drop Shadow Frame */}
                <div className="absolute inset-0 bg-[#2B231D] rounded-3xl translate-x-2 translate-y-2"></div>
                <div className="relative rounded-3xl border-3 border-[#2B231D] overflow-hidden bg-amber-100">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-amber-400 text-stone-900 font-bold text-xs sm:text-sm px-3 py-1 rounded-full border-2 border-[#2B231D] shadow-cartoon-sm">
                      {current.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Info Badges */}
              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50 border-2 border-[#2B231D] text-xs sm:text-sm font-bold text-stone-800">
                  <Calendar className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>{current.schedule}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50 border-2 border-[#2B231D] text-xs sm:text-sm font-bold text-stone-800">
                  <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{current.venue}</span>
                </div>
              </div>
            </div>

            {/* Description & Highlights Column */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-300 inline-block mb-2">
                  {current.englishTitle}
                </span>
                <h3 className="heading-font text-3xl sm:text-4xl md:text-5xl font-black text-[#2B231D]">
                  {current.title}
                </h3>
                <p className="font-cartoon text-base sm:text-lg text-amber-800 font-semibold mt-1">
                  "{current.tagline}"
                </p>
              </div>

              <p className="font-cartoon text-sm sm:text-base text-stone-700 leading-relaxed">
                {current.description}
              </p>

              {/* Highlights List */}
              <div className="bg-[#FAF7F0] rounded-2xl border-2 border-[#2B231D] p-4 sm:p-5">
                <h4 className="font-odia font-bold text-base sm:text-lg text-stone-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  ପ୍ରମୁଖ ଆକର୍ଷଣ ଓ କାର୍ଯ୍ୟକ୍ରମ:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl border border-[#2B231D] px-3 py-2 text-xs sm:text-sm font-bold text-stone-800 flex items-center gap-2 shadow-cartoon-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-amber-400 border border-[#2B231D]"></span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community spirit banner */}
              <div className="p-3.5 rounded-xl bg-amber-100 border-2 border-[#2B231D] flex items-center gap-3 text-xs sm:text-sm font-bold text-stone-800">
                <Heart className="w-5 h-5 text-red-500 flex-shrink-0 animate-pulse" />
                <span>ଗୋପବନ୍ଧୁ ପଠାଗାରର ପ୍ରତ୍ୟେକ ସଦସ୍ୟ ଏହି ଉତ୍ସବର ସଫଳତାରେ ସର୍ବଦା ନିୟୋଜିତ।</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default VillageTraditions;
