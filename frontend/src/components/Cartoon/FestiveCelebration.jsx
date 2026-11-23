import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

/**
 * Interactive Celebratory Confetti & Marigold Petal Shower
 * A playful visual delight for visitors exploring Gopabandhu Pathagara!
 */
export const FestiveCelebration = () => {
  const [active, setActive] = useState(false);
  const [particles, setParticles] = useState([]);

  const triggerCelebration = () => {
    setActive(true);
    const newParticles = [];
    const colors = ['#F59E0B', '#EF4444', '#10B981', '#3B82F6', '#FBBF24', '#EC4899', '#E06D53'];

    for (let i = 0; i < 40; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 16 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 2 + 2.5,
        delay: Math.random() * 0.4,
        rotate: Math.random() * 360,
        shape: Math.random() > 0.5 ? 'petal' : 'star'
      });
    }

    setParticles(newParticles);

    setTimeout(() => {
      setActive(false);
    }, 4000);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={triggerCelebration}
          className="bg-amber-400 hover:bg-amber-300 text-stone-900 border-3 border-[#2B231D] rounded-full p-3.5 shadow-cartoon hover:shadow-cartoon-lg hover:-translate-y-1 active:translate-x-1 active:translate-y-1 transition-all flex items-center gap-2 font-bold text-xs sm:text-sm cursor-pointer group"
          title="ଉତ୍ସବର ଶୁଭେଚ୍ଛା!"
        >
          <Sparkles className="w-5 h-5 text-stone-900 animate-spin-slow group-hover:scale-110" />
          <span className="hidden sm:inline font-odia font-bold">ଜୟ ଗୋପବନ୍ଧୁ! 🌸</span>
        </button>
      </div>

      {/* Confetti & Marigold Petals Falling Container */}
      {active && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute animate-petal-fall"
              style={{
                left: `${p.left}%`,
                top: `-20px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                transform: `rotate(${p.rotate}deg)`
              }}
            >
              {p.shape === 'petal' ? (
                // Marigold petal SVG
                <svg
                  width={p.size}
                  height={p.size * 1.5}
                  viewBox="0 0 24 36"
                  fill="none"
                >
                  <path
                    d="M12 0C18 10 24 22 12 36C0 22 6 10 12 0Z"
                    fill={p.color}
                    stroke="#2B231D"
                    strokeWidth="1.5"
                  />
                </svg>
              ) : (
                // Sparkle star
                <div
                  className="rounded-full border-2 border-[#2B231D]"
                  style={{
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    backgroundColor: p.color
                  }}
                />
              )}
            </div>
          ))}

          <style jsx>{`
            @keyframes petal-fall {
              0% {
                transform: translateY(0) rotate(0deg) scale(0.8);
                opacity: 1;
              }
              50% {
                transform: translateY(50vh) rotate(180deg) scale(1);
              }
              100% {
                transform: translateY(105vh) rotate(360deg) scale(0.6);
                opacity: 0;
              }
            }
            .animate-petal-fall {
              animation: petal-fall linear forwards;
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default FestiveCelebration;
