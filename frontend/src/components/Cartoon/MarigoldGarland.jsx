import React from 'react';

/**
 * Handcrafted 2D Cartoon Marigold & Mango Leaf Garland (ତୋରଣ)
 * Traditional Odia festival decoration welcoming visitors warmly.
 */
export const MarigoldGarland = ({ className = "" }) => {
  return (
    <div className={`w-full overflow-hidden select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1200 64"
        preserveAspectRatio="none"
        className="w-full h-10 sm:h-14 block"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main hanging festive string */}
        <path
          d="M0,8 Q150,38 300,10 Q450,40 600,10 Q750,40 900,10 Q1050,40 1200,8"
          fill="none"
          stroke="#2B231D"
          strokeWidth="3"
          strokeDasharray="6,4"
        />

        {/* Mango Leaves & Marigold blossoms along the string */}
        {[
          { cx: 75, cy: 26, r: 14, color: "#F59E0B", leaf: true },
          { cx: 150, cy: 36, r: 17, color: "#EA580C", leaf: true },
          { cx: 225, cy: 26, r: 14, color: "#FBBF24", leaf: true },
          { cx: 300, cy: 12, r: 15, color: "#F59E0B", leaf: false },
          { cx: 375, cy: 28, r: 14, color: "#EA580C", leaf: true },
          { cx: 450, cy: 38, r: 17, color: "#FBBF24", leaf: true },
          { cx: 525, cy: 26, r: 14, color: "#F59E0B", leaf: true },
          { cx: 600, cy: 12, r: 16, color: "#EA580C", leaf: false },
          { cx: 675, cy: 28, r: 14, color: "#FBBF24", leaf: true },
          { cx: 750, cy: 38, r: 17, color: "#F59E0B", leaf: true },
          { cx: 825, cy: 26, r: 14, color: "#EA580C", leaf: true },
          { cx: 900, cy: 12, r: 15, color: "#FBBF24", leaf: false },
          { cx: 975, cy: 28, r: 14, color: "#F59E0B", leaf: true },
          { cx: 1050, cy: 38, r: 17, color: "#EA580C", leaf: true },
          { cx: 1125, cy: 26, r: 14, color: "#FBBF24", leaf: true },
        ].map((f, i) => (
          <g key={i}>
            {/* Green Mango leaf (ଆମ୍ବ ଡାଳ ପତ୍ର) */}
            {f.leaf && (
              <path
                d={`M${f.cx - 10},${f.cy - 12} Q${f.cx - 18},${f.cy + 14} ${f.cx - 2},${f.cy + 22} Q${f.cx + 2},${f.cy + 6} ${f.cx - 10},${f.cy - 12}`}
                fill="#16A34A"
                stroke="#2B231D"
                strokeWidth="2"
              />
            )}
            {/* Outer Marigold Petals */}
            <circle
              cx={f.cx}
              cy={f.cy}
              r={f.r}
              fill={f.color}
              stroke="#2B231D"
              strokeWidth="2.5"
            />
            {/* Inner flower core */}
            <circle
              cx={f.cx}
              cy={f.cy}
              r={f.r * 0.55}
              fill="#FEF08A"
              stroke="#2B231D"
              strokeWidth="1.5"
            />
            <circle
              cx={f.cx}
              cy={f.cy}
              r={f.r * 0.22}
              fill="#D97706"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default MarigoldGarland;
