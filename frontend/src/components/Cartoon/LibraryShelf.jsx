import React from 'react';
import { BookOpen, Sparkles, Heart, Star, Bookmark } from 'lucide-react';
import { BooksIcon, StickerBadge, JhotiCorner } from './CartoonDoodles';

/**
 * 2D Cartoon Virtual Bookshelf (ଗୋପବନ୍ଧୁ ପାଠାଗାର ପୁସ୍ତକ ସଂଗ୍ରହ)
 * Celebrates the foundational library spirit of Gopabandhu Pathagara established in 1955.
 */
export const LibraryShelf = () => {
  const books = [
    {
      id: 1,
      title: "ବନ୍ଦୀର ଆତ୍ମକଥା",
      author: "ଉତ୍କଳମଣି ଗୋପବନ୍ଧୁ ଦାସ",
      category: "କାବ୍ୟ ଓ ଦେଶାତ୍ମବୋଧ",
      color: "from-amber-400 to-amber-500 border-amber-800",
      description: "ଜେଲ୍ ଜୀବନର ଅନୁଭବ ଓ ଦେଶମାତୃକା ପ୍ରତି ଅଗାଧ ଭଲପାଇବାର ଅମର କାବ୍ୟ।"
    },
    {
      id: 2,
      title: "ଧର୍ମପଦ",
      author: "ଉତ୍କଳମଣି ଗୋପବନ୍ଧୁ ଦାସ",
      category: "ଓଡ଼ିଆ ଗୌରବ ଗାଥା",
      color: "from-emerald-400 to-emerald-500 border-emerald-800",
      description: "କୋଣାର୍କ ମନ୍ଦିର ନିର୍ମାଣ ଓ ବାରଶହ ବଢ଼େଇଙ୍କ ଜୀବନ ରକ୍ଷା ପାଇଁ ୧୨ ବର୍ଷର ବାଳକର ଆତ୍ମବଳିଦାନ।"
    },
    {
      id: 3,
      title: "କାରାକବିତା",
      author: "ଉତ୍କଳମଣି ଗୋପବନ୍ଧୁ ଦାସ",
      category: "କବିତା ସଂଗ୍ରହ",
      color: "from-rose-400 to-rose-500 border-rose-800",
      description: "ସମାଜ ସଂସ୍କାର ଓ ସାଧାରଣ ଜନତାଙ୍କ ପାଇଁ ଲେଖାଯାଇଥିବା ହୃଦୟସ୍ପର୍ଶୀ କବିତାବଳୀ।"
    },
    {
      id: 4,
      title: "ଶ୍ରୀମଦ୍ ଭାଗବତ",
      author: "ଅତିବଡ଼ୀ ଜଗନ୍ନାଥ ଦାସ",
      category: "ଆଧ୍ୟାତ୍ମିକ ସାହିତ୍ୟ",
      color: "from-sky-400 to-sky-500 border-sky-800",
      description: "ଓଡ଼ିଶାର ଘରେ ଘରେ ପୂଜିତ ଭାଗବତ ଟୁଙ୍ଗି ପରମ୍ପରାର ଅମୂଲ୍ୟ ଗ୍ରନ୍ଥ।"
    },
    {
      id: 5,
      title: "ପଞ୍ଚତନ୍ତ୍ର କାହାଣୀ",
      author: "ନୀତିକଥା ସଂଗ୍ରହ",
      category: "ଶିଶୁ ସାହିତ୍ୟ",
      color: "from-purple-400 to-purple-500 border-purple-800",
      description: "ପାଇକରାପୁର ଗ୍ରାମର ଛାତ୍ରଛାତ୍ରୀଙ୍କ ନୈତିକ ଶିକ୍ଷା ଓ ମୂଲ୍ୟବୋଧ ବିକାଶ ପାଇଁ ସୁନ୍ଦର କାହାଣୀ।"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF7] border-b-3 sm:border-b-4 border-[#2B231D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-block mb-3">
            <StickerBadge text="ଜ୍ଞାନ ଓ ସଂସ୍କୃତିର ଆଲୋକ" color="amber" rotate="-rotate-1" />
          </div>

          <div className="flex items-center justify-center gap-3 mb-3">
            <BooksIcon className="w-10 h-10 sm:w-12 sm:h-12" />
            <h2 className="heading-font text-3xl sm:text-5xl md:text-6xl font-black text-[#2B231D]">
              ପାଠାଗାର ପୁସ୍ତକ ସଂଗ୍ରହ
            </h2>
          </div>

          <div className="w-24 sm:w-32 h-2.5 bg-amber-400 rounded-full border-2 border-[#2B231D] mx-auto mb-5 shadow-cartoon-sm"></div>

          <p className="font-cartoon text-base sm:text-xl text-stone-700 max-w-2xl mx-auto leading-relaxed">
            ୧୯୫୫ ମସିହାରୁ ଆରମ୍ଭ ହୋଇଥିବା ଆମ ଗ୍ରାମ୍ୟ ପାଠାଗାରରେ ଉତ୍କଳମଣି ଗୋପବନ୍ଧୁ ଦାସଙ୍କ ସାହିତ୍ୟ ଓ ଜ୍ଞାନବର୍ଦ୍ଧକ ପୁସ୍ତକାବଳୀ।
          </p>
        </div>

        {/* 2D Cartoon Bookshelf Rack */}
        <div className="bg-[#FAF7F0] border-3 sm:border-4 border-[#2B231D] rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_#2B231D] relative">
          
          {/* Books Shelf Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 items-end pb-4">
            {books.map((b, i) => (
              <div
                key={b.id}
                className="group cursor-pointer transform hover:-translate-y-3 transition-all duration-300"
              >
                {/* Book Spine / Cover */}
                <div
                  className={`bg-gradient-to-br ${b.color} border-3 border-[#2B231D] rounded-2xl p-4 sm:p-5 h-72 sm:h-80 flex flex-col justify-between shadow-cartoon relative overflow-hidden group-hover:shadow-cartoon-lg`}
                >
                  {/* Spine Ribs */}
                  <div className="absolute top-0 bottom-0 left-2 w-1.5 bg-black/15"></div>
                  <div className="absolute top-2 right-2 text-stone-900/60">
                    <Bookmark className="w-4 h-4 fill-current" />
                  </div>

                  {/* Category Tag */}
                  <div>
                    <span className="bg-white/90 text-stone-900 text-[10px] font-bold px-2 py-0.5 rounded-md border border-[#2B231D] inline-block mb-3">
                      {b.category}
                    </span>
                    <h3 className="heading-font text-xl sm:text-2xl font-black text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] leading-snug">
                      {b.title}
                    </h3>
                  </div>

                  {/* Author & Info */}
                  <div className="border-t border-black/20 pt-2">
                    <p className="text-xs font-bold text-white drop-shadow-sm mb-1">
                      {b.author}
                    </p>
                    <p className="text-[11px] text-white/90 line-clamp-3 leading-tight font-medium">
                      {b.description}
                    </p>
                  </div>
                </div>

                {/* Book Base Plate */}
                <div className="h-2 bg-[#2B231D] rounded-full mx-2 mt-1"></div>
              </div>
            ))}
          </div>

          {/* Wooden Shelf Bar */}
          <div className="w-full h-5 bg-[#8C381B] border-3 border-[#2B231D] rounded-xl shadow-cartoon-sm mt-2 relative">
            <div className="absolute inset-x-0 top-1 h-1 bg-amber-300/30"></div>
          </div>

          {/* Reading Room Details Banner */}
          <div className="mt-8 bg-amber-100 border-2 border-[#2B231D] rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl border-2 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h4 className="font-odia font-bold text-lg text-stone-900">
                  ନିଃଶୁଳ୍କ ପାଠାଗାର ପଠନ ସୁବିଧା
                </h4>
                <p className="font-cartoon text-xs sm:text-sm text-stone-700">
                  ପ୍ରତିଦିନ ସନ୍ଧ୍ୟା ୫:୦୦ ରୁ ୮:୦୦ ପର୍ଯ୍ୟନ୍ତ ଗ୍ରାମର ଛାତ୍ରଛାତ୍ରୀ ଓ ଯୁବବନ୍ଧୁଙ୍କ ପାଇଁ ଖୋଲା ରହେ।
                </p>
              </div>
            </div>

            <div className="flex-shrink-0">
              <span className="btn-cartoon-amber text-xs sm:text-sm font-bold cursor-default">
                ସମସ୍ତଙ୍କ ପାଇଁ ଉନ୍ମୁକ୍ତ
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LibraryShelf;
