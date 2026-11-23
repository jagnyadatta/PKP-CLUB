import React from 'react';
import { Calendar, Flag, BookOpen, Trophy, Sparkles, Heart } from 'lucide-react';
import { DiyaIcon, JhotiCorner, StickerBadge } from './CartoonDoodles';

/**
 * 2D Cartoon Interactive History & Heritage Timeline
 * Illustrating Gopabandhu Pathagara's journey from 1955 to the present day.
 */
export const TimelineSection = () => {
  const milestones = [
    {
      year: "୧୯୫୫",
      englishYear: "1955",
      title: "ପ୍ରତିଷ୍ଠା ଓ ଶୁଭାରମ୍ଭ",
      tag: "ଗୌରବମୟ ପ୍ରାରମ୍ଭ",
      color: "border-amber-400 bg-amber-50",
      accent: "bg-amber-400",
      description:
        "ପାଇକରାପୁର ଗ୍ରାମର ପ୍ରାଚୀନ ଓ ଉତ୍ସର୍ଗୀକୃତ ଯୁବଗଣଙ୍କ ଦ୍ୱାରା ଉତ୍କଳମଣି ଗୋପବନ୍ଧୁ ଦାସଙ୍କ ଆଦର୍ଶରେ ଗୋପବନ୍ଧୁ ପଠାଗାରର ଶୁଭ ସ୍ଥାପନା।",
      icon: DiyaIcon,
      highlight: "ଶିକ୍ଷା ଓ ସଚେତନତାର ପ୍ରଥମ ପଦକ୍ଷେପ"
    },
    {
      year: "୧୯୭୦ ଦଶକ",
      englishYear: "1970s",
      title: "ପାରମ୍ପାରିକ ପର୍ବପର୍ବାଣି ସଂଯୋଜନା",
      tag: "ସାଂସ୍କୃତିକ ଜାଗରଣ",
      color: "border-emerald-400 bg-emerald-50",
      accent: "bg-emerald-400",
      description:
        "ଗ୍ରାମର ସୁପ୍ରସିଦ୍ଧ ପଞ୍ଚୁଦୋଳ ଯାତ୍ରା, ମା' ଗଜଲକ୍ଷ୍ମୀ ପୂଜା ଏବଂ ଦଣ୍ଡନାଚ ମହୋତ୍ସବରେ କ୍ଲବ୍ ପକ୍ଷରୁ ସ୍ୱେଚ୍ଛାସେବୀ ଆୟୋଜନ ଆରମ୍ଭ।",
      icon: Sparkles,
      highlight: "ଏକତା ଓ ସାଂସ୍କୃତିକ ବନ୍ଧନ"
    },
    {
      year: "୧୯୮୫",
      englishYear: "1985",
      title: "ପାଠାଗାର ପୁସ୍ତକାଳୟ ଓ ଯୁବ ସଂଗଠନ",
      tag: "ଯୁବ ସଂଘର ବିକାଶ",
      color: "border-sky-400 bg-sky-50",
      accent: "bg-sky-400",
      description:
        "ଗ୍ରାମୀଣ ପାଠାଗାର ପୁସ୍ତକ ସଂଗ୍ରହର ବୃଦ୍ଧି, ଯୁବକ ସଂଘ ଗଠନ ଏବଂ ପ୍ରାଥମିକ ସେବା ପ୍ରକଳ୍ପ ସମୂହର ଶୁଭାରମ୍ଭ।",
      icon: BookOpen,
      highlight: "ପୁସ୍ତକାଳୟ ସେବା ଓ ନିଃଶୁଳ୍କ ପାଠାଗାର"
    },
    {
      year: "୧୯୯୫",
      englishYear: "1995",
      title: "ଔପଚାରିକ ପଞ୍ଜୀକରଣ ଓ ସମାଜସେବା",
      tag: "ସମାଜ ସଂଗଠନ",
      color: "border-orange-400 bg-orange-50",
      accent: "bg-orange-400",
      description:
        "ସଂଗଠନର ସୁଦୃଢ଼ ପଞ୍ଜୀକରଣ (୧୨୩୪/୧୯୯୫), ନିୟମିତ ଗ୍ରାମ ସଫାଈ, ପୋଖରୀ ସଂରକ୍ଷଣ, ଓ ରକ୍ତଦାନ ଅଭିଯାନର ବିସ୍ତାର।",
      icon: Flag,
      highlight: "୫୦୦+ ଗ୍ରାମୀଣ ପରିବାରକୁ ସହାୟତା"
    },
    {
      year: "୨୦୦୦ - ବର୍ତ୍ତମାନ",
      englishYear: "Present",
      title: "କ୍ରୀଡ଼ା, ସାଂସ୍କୃତିକ ଓ ଡିଜିଟାଲ୍ ଯାତ୍ରା",
      tag: "ଆଧୁନିକ ପ୍ରଗତି",
      color: "border-purple-400 bg-purple-50",
      accent: "bg-purple-400",
      description:
        "ମା ବରୁଣାଇ ମୈଦାନରେ ବାର୍ଷିକ କ୍ରିକେଟ୍ ଓ ଭଲିବଲ୍ ଟୁର୍ଣ୍ଣାମେଣ୍ଟ, ଯୁବ ପ୍ରତିଭା ବିକାଶ ଏବଂ ଡିଜିଟାଲ୍ ଯୋଗାଯୋଗରେ ଅଗ୍ରଗତି।",
      icon: Trophy,
      highlight: "ସଦା ସର୍ବଦା ଗ୍ରାମସେବାରେ ନିୟୋଜିତ"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF7] border-y-3 sm:border-y-4 border-[#2B231D] relative overflow-hidden">
      {/* Decorative Corner accents */}
      <div className="absolute top-3 left-3 opacity-40 hidden sm:block">
        <JhotiCorner position="top-left" />
      </div>
      <div className="absolute bottom-3 right-3 opacity-40 hidden sm:block">
        <JhotiCorner position="bottom-right" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <StickerBadge text="୧୯୫୫ ରୁ ଗୌରବମୟ ଐତିହ୍ୟ" color="amber" rotate="-rotate-2" />
          </div>
          
          <h2 className="heading-font text-3xl sm:text-5xl md:text-6xl font-black text-[#2B231D] mb-4">
            ଆମର ଇତିହାସ ଓ ସେବା ଯାତ୍ରା
          </h2>
          
          <div className="w-24 sm:w-32 h-2.5 bg-amber-400 rounded-full border-2 border-[#2B231D] mx-auto mb-5 shadow-cartoon-sm"></div>
          
          <p className="font-cartoon text-base sm:text-xl text-stone-700 max-w-2xl mx-auto leading-relaxed">
            ପାଇକରାପୁର ଗ୍ରାମରେ ୧୯୫୫ ମସିହାରୁ ଆରମ୍ଭ ହୋଇଥିବା ସେବା, ସଂସ୍କୃତି, କ୍ରୀଡ଼ା ଓ ଏକତାର ଏକ ପ୍ରେରଣାଦାୟୀ ଇତିହାସ।
          </p>
        </div>

        {/* 2D Cartoon Stepper Timeline */}
        <div className="relative">
          {/* Vertical Connecting Road Line on Desktop */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-3 bg-[#2B231D] rounded-full">
            {/* Dashed white center line */}
            <div className="w-1 h-full mx-auto border-r-2 border-dashed border-amber-300"></div>
          </div>

          <div className="space-y-10 sm:space-y-14">
            {milestones.map((m, idx) => {
              const isEven = idx % 2 === 0;
              const IconComp = m.icon;

              return (
                <div
                  key={m.year}
                  className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-10 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full lg:w-1/2">
                    <div
                      className={`card-cartoon p-6 sm:p-8 ${m.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-cartoon-lg`}
                    >
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-odia font-black text-xl sm:text-2xl text-[#2B231D] bg-white px-3.5 py-1 rounded-xl border-2 border-[#2B231D] shadow-cartoon-sm inline-block">
                          {m.year}
                        </span>
                        <span className="text-xs font-bold bg-white/90 text-stone-800 px-3 py-1 rounded-full border-2 border-[#2B231D]">
                          ★ {m.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="heading-font text-2xl sm:text-3xl font-black text-[#2B231D] mb-3">
                        {m.title}
                      </h3>

                      {/* Description */}
                      <p className="font-cartoon text-sm sm:text-base text-stone-800 leading-relaxed mb-4">
                        {m.description}
                      </p>

                      {/* Highlight stamp */}
                      <div className="bg-white/95 rounded-xl border-2 border-[#2B231D] p-3 text-xs sm:text-sm font-bold text-stone-800 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-[#2B231D]"></span>
                        <span>{m.highlight}</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Node Stamp on Timeline */}
                  <div className="flex-shrink-0 z-20">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-300 border-3 border-[#2B231D] shadow-cartoon flex items-center justify-center transform hover:rotate-12 transition-transform">
                      {typeof IconComp === "function" ? (
                        <IconComp className="w-7 h-7 sm:w-8 sm:h-8" />
                      ) : (
                        <Sparkles className="w-7 h-7 text-stone-900" />
                      )}
                    </div>
                  </div>

                  {/* Empty Spacer on opposite side for alternating layout */}
                  <div className="hidden lg:block lg:w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TimelineSection;
