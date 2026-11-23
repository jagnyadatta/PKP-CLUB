import React from 'react';

/**
 * Traditional Clay Diya (ମାଟି ଦୀପ) with dancing cartoon flame
 */
export const DiyaIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Diya Clay Base */}
    <path
      d="M6 28C6 37 14 42 24 42C34 42 42 37 42 28C42 27 38 27 36 28C32 30 28 31 24 31C20 31 16 30 12 28C10 27 6 27 6 28Z"
      fill="#C85A32"
      stroke="#2B231D"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Diya Rim */}
    <ellipse cx="24" cy="28" rx="18" ry="4" fill="#E06D53" stroke="#2B231D" strokeWidth="2.5" />
    {/* Dancing Flame */}
    <path
      d="M24 6C24 6 18 16 18 22C18 25.5 20.7 28 24 28C27.3 28 30 25.5 30 22C30 16 24 6 24 6Z"
      fill="#FBBF24"
      stroke="#2B231D"
      strokeWidth="2.5"
    />
    <path
      d="M24 13C24 13 21 18 21 21C21 23 22.3 24.5 24 24.5C25.7 24.5 27 23 27 21C27 18 24 13 24 13Z"
      fill="#F59E0B"
    />
  </svg>
);

/**
 * Cartoon Stacked Books (ପୁସ୍ତକ ସଂଗ୍ରହ) with cute bookmark ribbon
 */
export const BooksIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bottom Book */}
    <rect x="6" y="32" width="36" height="10" rx="3" fill="#0284C7" stroke="#2B231D" strokeWidth="2.5" />
    <path d="M12 36H36" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" />
    
    {/* Middle Book */}
    <rect x="8" y="22" width="32" height="9" rx="3" fill="#16A34A" stroke="#2B231D" strokeWidth="2.5" />
    <path d="M14 26H34" stroke="#DCFCE7" strokeWidth="2" strokeLinecap="round" />
    
    {/* Top Book */}
    <rect x="11" y="12" width="26" height="9" rx="3" fill="#E06D53" stroke="#2B231D" strokeWidth="2.5" />
    {/* Bookmark ribbon */}
    <path d="M22 6V16L25 14L28 16V6" fill="#FBBF24" stroke="#2B231D" strokeWidth="2" />
  </svg>
);

/**
 * Cartoon Cricket Bat & Ball (କ୍ରିକେଟ୍ ବ୍ୟାଟ୍ ଓ ବଲ୍)
 */
export const CricketIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bat Handle */}
    <rect x="33" y="6" width="4" height="12" rx="2" fill="#FDE68A" stroke="#2B231D" strokeWidth="2.5" transform="rotate(35 33 6)" />
    {/* Bat Blade */}
    <rect x="12" y="18" width="10" height="24" rx="3" fill="#D97706" stroke="#2B231D" strokeWidth="2.5" transform="rotate(-35 12 18)" />
    {/* Red Cricket Ball with white seam */}
    <circle cx="36" cy="36" r="7" fill="#DC2626" stroke="#2B231D" strokeWidth="2.5" />
    <path d="M31 36C33 34 39 34 41 36" stroke="#FFF" strokeWidth="1.5" strokeDasharray="2,2" />
  </svg>
);

/**
 * Traditional Dholak / Drum (ମର୍ଦ୍ଦଳ / ଢୋଲକ) for Danda Nacha & festivals
 */
export const DholakIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Drum Body */}
    <ellipse cx="24" cy="24" rx="14" ry="18" fill="#B45309" stroke="#2B231D" strokeWidth="2.5" transform="rotate(45 24 24)" />
    {/* Tightening Ropes */}
    <path d="M12 16L32 36M16 12L36 32M14 28L28 14M20 34L34 20" stroke="#FBBF24" strokeWidth="2" />
    {/* Left Head */}
    <ellipse cx="14" cy="14" rx="5" ry="8" fill="#FEF3C7" stroke="#2B231D" strokeWidth="2.5" transform="rotate(45 14 14)" />
    {/* Right Head */}
    <ellipse cx="34" cy="34" rx="5" ry="8" fill="#FEF3C7" stroke="#2B231D" strokeWidth="2.5" transform="rotate(45 34 34)" />
  </svg>
);

/**
 * Traditional Odia Jhoti / Chita (ଝୋଟି ଚିତା) Corner Folk Accent
 */
export const JhotiCorner = ({ className = "w-16 h-16", position = "top-left" }) => {
  const transform =
    position === "top-right"
      ? "scale(-1, 1)"
      : position === "bottom-left"
      ? "scale(1, -1)"
      : position === "bottom-right"
      ? "scale(-1, -1)"
      : "scale(1, 1)";

  return (
    <div className={`pointer-events-none select-none ${className}`} style={{ transform }}>
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
        <path d="M4 4C4 32 32 60 60 60" stroke="#C85A32" strokeWidth="2.5" strokeDasharray="4,4" />
        <path d="M4 14C14 24 24 34 34 44" stroke="#D97706" strokeWidth="2" />
        <circle cx="16" cy="16" r="4" fill="#F59E0B" stroke="#2B231D" strokeWidth="1.5" />
        <circle cx="30" cy="30" r="3" fill="#E06D53" stroke="#2B231D" strokeWidth="1.5" />
        <path d="M6 4C10 12 18 16 26 12" stroke="#16A34A" strokeWidth="2" />
      </svg>
    </div>
  );
};

/**
 * Cartoon Village Palm Tree (ତାଳ ଗଛ / ନଡ଼ିଆ ଗଛ)
 */
export const PalmTreeIcon = ({ className = "w-12 h-16" }) => (
  <svg viewBox="0 0 64 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Curved Trunk */}
    <path
      d="M30 76C29 60 35 40 32 28"
      stroke="#8C381B"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <path
      d="M30 76C29 60 35 40 32 28"
      stroke="#2B231D"
      strokeWidth="1.5"
      strokeDasharray="2,4"
    />
    {/* Fronds / Palm Leaves */}
    <path d="M32 28C20 18 8 24 4 32" stroke="#16A34A" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M32 28C32 14 22 6 12 8" stroke="#15803D" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M32 28C40 14 52 10 60 14" stroke="#16A34A" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M32 28C44 22 56 28 62 38" stroke="#15803D" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M32 28C30 14 34 6 36 2" stroke="#22C55E" strokeWidth="3.5" strokeLinecap="round" />
    {/* Coconuts */}
    <circle cx="30" cy="30" r="3.5" fill="#78350F" stroke="#2B231D" strokeWidth="1.5" />
    <circle cx="34" cy="31" r="3.5" fill="#78350F" stroke="#2B231D" strokeWidth="1.5" />
  </svg>
);

/**
 * 2D Cartoon Stamped Badge (ଷ୍ଟାମ୍ପ୍ ଚିହ୍ନ)
 */
export const StickerBadge = ({ text, color = "amber", rotate = "-rotate-2", className = "" }) => {
  const colorMap = {
    amber: "bg-amber-400 text-stone-900 border-[#2B231D]",
    green: "bg-emerald-400 text-stone-900 border-[#2B231D]",
    clay: "bg-[#E06D53] text-white border-[#2B231D]",
    sky: "bg-sky-400 text-stone-900 border-[#2B231D]",
    white: "bg-[#FFFDF7] text-stone-800 border-[#2B231D]",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 font-bold text-xs sm:text-sm rounded-full border-2 shadow-cartoon-sm ${rotate} ${colorMap[color] || colorMap.amber} ${className}`}
    >
      ★ {text}
    </span>
  );
};

export default {
  DiyaIcon,
  BooksIcon,
  CricketIcon,
  DholakIcon,
  JhotiCorner,
  PalmTreeIcon,
  StickerBadge
};
