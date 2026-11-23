import React from 'react';
import { User, Camera, Calendar, Trophy, Heart, Sparkles, Image as ImageIcon } from 'lucide-react';
import { CricketIcon, DiyaIcon } from './CartoonDoodles';

/**
 * 2D Cartoon Style Empty Photo Placeholders
 * Used across the website to keep clean empty photo frames without using random or stock photos.
 * Preserves space for future admin uploads.
 */

export const MemberPhotoPlaceholder = ({ className = "w-full h-full", role = "Member" }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center bg-amber-50/90 text-stone-700 select-none border-2 border-dashed border-[#2B231D]/40 rounded-2xl p-2 text-center overflow-hidden group ${className}`}>
      {/* Cartoon background subtle pattern */}
      <div className="w-12 h-12 rounded-full bg-amber-200/80 border-2 border-[#2B231D] flex items-center justify-center shadow-cartoon-sm mb-1 group-hover:scale-105 transition-transform">
        <User className="w-6 h-6 text-stone-800" />
      </div>
      <span className="font-odia text-[11px] font-bold text-stone-800 leading-tight">
        ଫଟୋ ସ୍ଥାନ
      </span>
      <span className="font-cartoon text-[9px] text-amber-900/80 font-bold">
        (Photo Placeholder)
      </span>
    </div>
  );
};

export const FestivalPhotoPlaceholder = ({ className = "w-full h-full", name = "" }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center bg-amber-50/90 text-stone-700 select-none border-2 border-dashed border-[#2B231D]/40 rounded-xl p-4 text-center overflow-hidden group ${className}`}>
      <div className="w-14 h-14 rounded-2xl bg-amber-300 border-2 border-[#2B231D] flex items-center justify-center shadow-cartoon-sm mb-2 group-hover:rotate-6 transition-transform">
        <DiyaIcon className="w-8 h-8 text-stone-900" />
      </div>
      <span className="font-odia text-xs sm:text-sm font-bold text-stone-900 leading-tight">
        ଉତ୍ସବ ଫଟୋ ସ୍ଥାନ
      </span>
      <span className="font-cartoon text-[10px] sm:text-xs text-amber-800 font-bold mt-0.5">
        (Festival Image Placeholder)
      </span>
    </div>
  );
};

export const SportsPhotoPlaceholder = ({ className = "w-full h-full", sport = "sports" }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center bg-emerald-50/90 text-stone-700 select-none border-2 border-dashed border-[#2B231D]/40 rounded-xl p-4 text-center overflow-hidden group ${className}`}>
      <div className="w-14 h-14 rounded-2xl bg-emerald-300 border-2 border-[#2B231D] flex items-center justify-center shadow-cartoon-sm mb-2 group-hover:-rotate-6 transition-transform">
        <CricketIcon className="w-8 h-8 text-stone-900" />
      </div>
      <span className="font-odia text-xs sm:text-sm font-bold text-stone-900 leading-tight">
        କ୍ରୀଡ଼ା ଫଟୋ ସ୍ଥାନ
      </span>
      <span className="font-cartoon text-[10px] sm:text-xs text-emerald-800 font-bold mt-0.5">
        (Sports Image Placeholder)
      </span>
    </div>
  );
};

export const ServicePhotoPlaceholder = ({ className = "w-full h-full" }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center bg-rose-50/90 text-stone-700 select-none border-2 border-dashed border-[#2B231D]/40 rounded-xl p-4 text-center overflow-hidden group ${className}`}>
      <div className="w-14 h-14 rounded-2xl bg-rose-300 border-2 border-[#2B231D] flex items-center justify-center shadow-cartoon-sm mb-2 group-hover:scale-105 transition-transform">
        <Heart className="w-7 h-7 text-stone-900 fill-rose-500" />
      </div>
      <span className="font-odia text-xs sm:text-sm font-bold text-stone-900 leading-tight">
        ସେବା କାର୍ଯ୍ୟ ଫଟୋ ସ୍ଥାନ
      </span>
      <span className="font-cartoon text-[10px] sm:text-xs text-rose-800 font-bold mt-0.5">
        (Service Image Placeholder)
      </span>
    </div>
  );
};

export default MemberPhotoPlaceholder;
