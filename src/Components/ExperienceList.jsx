import { useEffect, useRef, useState } from "react";
import { useAnimationFrame } from "framer-motion";

const ITEMS = [
  "UI/UX Designer",
  "Web Developer",
  "App Developer",
  "Content Writer",
  "Video Editor",
  "Photographer",
  "Motion Designer",
  "Brand Strategist",
];

const RADIUS = window.innerWidth >= 768 ? 270 : 160; // orbit radius in px

const SPEED = 0.012; // radians per frame (~40s full rotation)

export default function ExperienceList() {
  const angleRef = useRef(0);
  const [angles, setAngles] = useState(() =>
    ITEMS.map((_, i) => (i / ITEMS.length) * Math.PI * 2),
  );

  useAnimationFrame(() => {
    angleRef.current += SPEED * 0.3;
    setAngles(
      ITEMS.map((_, i) => (i / ITEMS.length) * Math.PI * 2 + angleRef.current),
    );
  });

  // Front item = closest to bottom (angle ≈ π/2)
  const frontIndex = angles.reduce((closest, angle, i) => {
    const normalized = ((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    const frontNorm =
      (((Math.PI / 2) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    const dist = Math.abs(normalized - frontNorm);
    const minDist = Math.min(dist, Math.PI * 2 - dist);
    const prevNorm =
      ((angles[closest] % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    const prevDist = Math.abs(prevNorm - frontNorm);
    const prevMinDist = Math.min(prevDist, Math.PI * 2 - prevDist);
    return minDist < prevMinDist ? i : closest;
  }, 0);

  return (
    <div className="relative" id="experience">
      <style>
        {` .text-reveal {
          color: rgba(182, 182, 182, 0.2);
          background: linear-gradient(to right, #b6b6b6, #b6b6b6) no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          background-size: 0%;
          animation: reveal linear forwards;
          animation-timeline: view();
          animation-range: entry 100% cover 50%;
        }

        @keyframes reveal {
          to {
            background-size: 100%;
          }
        }`}
      </style>
      <div className="flex flex-col justify-center items-center py-10 lg:mt-40">
        <h1 className="text-reveal text-4xl lg:text-6xl text-[#b6b6b6] font-semibold font-[outfit]">
          Experienced Sectors !!
        </h1>
      </div>
      <div className="relative w-full h-[60vh] lg:h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* Subtle radial vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        {/* Orbit ring — decorative */}
        <div
          className="absolute rounded-full border border-white/5"
          style={{ width: RADIUS * 2, height: RADIUS * 2 }}
        />

        {/* Center text */}
        <div className="absolute z-10 flex flex-col items-center select-none">
          <span
            className="text-5xl md:text-7xl font-bold tracking-tight"
            style={{ color: "#ffffff", fontFamily: "outfit, sans-serif" }}
          >
            I build
          </span>
          <span
            className="mt-1 text-sm tracking-[0.3em] uppercase"
            style={{ color: "#b6b6b6", fontFamily: "outfit, sans-serif" }}
          >
            & create
          </span>
        </div>

        {/* Orbiting items */}
        {ITEMS.map((label, i) => {
          const angle = angles[i];
          const x = Math.cos(angle) * RADIUS;
          const y = Math.sin(angle) * RADIUS;
          const isFront = i === frontIndex;

          // Depth cue: items at bottom feel "closer"
          const sinVal = (Math.sin(angle) + 1) / 2; // 0 to 1
          const opacity = isFront ? 1 : 0.18 + sinVal * 1;
          const scale = isFront ? 1.15 : 0.75 + sinVal * 0.2;
          const zIndex = Math.round(sinVal * 10);

          return (
            <div
              key={label}
              className="absolute flex items-center justify-center"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                zIndex,
                opacity,
                scale,
                transition: "opacity 0.15s ease, scale 0.15s ease",
              }}
            >
              <div
                className="px-4 py-2 rounded-full whitespace-nowrap text-sm md:text-xl font-medium tracking-wide"
                style={{
                  fontFamily: "outfit, sans-serif",
                  color: isFront ? "#ffffff" : "#b6b6b6",
                  boxShadow: isFront
                    ? "0 0 24px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.1)"
                    : "none",
                  transition: "all 0.2s ease",
                }}
              >
                {label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
