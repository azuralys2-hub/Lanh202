import React from 'react';

export type SheldonMood = 'explaining' | 'smug' | 'bazinga' | 'disappointed' | 'neutral';

interface SheldonAvatarProps {
  mood: SheldonMood;
  isSpeaking?: boolean;
}

export const SheldonAvatar: React.FC<SheldonAvatarProps> = ({ mood, isSpeaking = false }) => {
  return (
    <div className="relative w-32 h-40 sm:w-36 sm:h-44 flex flex-col items-center justify-end select-none">
      {/* Name Tag / Badge on podium */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-900 font-bold text-[10px] tracking-widest uppercase px-2 py-0.5 rounded shadow z-20 whitespace-nowrap border border-amber-600">
        Dr. Sheldon Cooper
      </div>

      <svg
        viewBox="0 0 160 200"
        className="w-full h-full drop-shadow-md overflow-visible"
        aria-label="Tiến sĩ Sheldon Cooper"
      >
        {/* Long sleeve undershirt (Dark Blue) */}
        <path d="M 35 155 L 20 195 L 45 195 L 50 165 Z" fill="#1e293b" />
        <path d="M 125 155 L 140 195 L 115 195 L 110 165 Z" fill="#1e293b" />

        {/* Torso: The Iconic Red Flash Tee */}
        <path
          d="M 40 145 Q 80 140 120 145 L 132 200 L 28 200 Z"
          fill="#dc2626"
          stroke="#b91c1c"
          strokeWidth="1.5"
        />

        {/* Flash Emblem / Lightning Bolt on Chest */}
        <circle cx="80" cy="172" r="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        <polygon
          points="83,162 73,173 81,173 76,183 88,171 80,171"
          fill="#eab308"
          stroke="#ca8a04"
          strokeWidth="0.8"
        />

        {/* Neck */}
        <rect x="71" y="118" width="18" height="28" fill="#fbd38d" rx="4" />
        {/* Collar line */}
        <path d="M 68 143 Q 80 152 92 143" fill="none" stroke="#991b1b" strokeWidth="2.5" />

        {/* Ears */}
        <circle cx="48" cy="85" r="7" fill="#f6ad55" />
        <circle cx="112" cy="85" r="7" fill="#f6ad55" />

        {/* Head Base */}
        <ellipse cx="80" cy="82" rx="33" ry="40" fill="#fbd38d" />

        {/* Hair: Sheldon's signature neat side-part dark brown hair */}
        <path
          d="M 45 80 C 42 50, 60 38, 85 38 C 115 38, 120 56, 116 80 C 116 72, 110 52, 95 50 C 75 48, 55 58, 48 78 Z"
          fill="#3e2723"
        />
        {/* Hair front sweep */}
        <path
          d="M 48 65 C 60 52, 90 50, 114 62 C 105 58, 70 54, 52 68 Z"
          fill="#271815"
        />

        {/* Eyebrows */}
        {mood === 'smug' ? (
          <>
            {/* Raised right eyebrow */}
            <path d="M 58 69 Q 67 63 74 68" fill="none" stroke="#271815" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 86 63 Q 95 56 104 64" fill="none" stroke="#271815" strokeWidth="2.5" strokeLinecap="round" />
          </>
        ) : mood === 'disappointed' ? (
          <>
            {/* Furrowed judgmental brows */}
            <path d="M 58 66 Q 66 71 73 68" fill="none" stroke="#271815" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 87 68 Q 94 71 102 66" fill="none" stroke="#271815" strokeWidth="2.5" strokeLinecap="round" />
          </>
        ) : mood === 'bazinga' ? (
          <>
            {/* High joyful arched brows */}
            <path d="M 58 63 Q 66 57 74 62" fill="none" stroke="#271815" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 86 62 Q 94 57 102 63" fill="none" stroke="#271815" strokeWidth="2.5" strokeLinecap="round" />
          </>
        ) : (
          <>
            {/* Intellectually focused brows */}
            <path d="M 58 66 Q 66 63 74 66" fill="none" stroke="#271815" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 86 66 Q 94 63 102 66" fill="none" stroke="#271815" strokeWidth="2.5" strokeLinecap="round" />
          </>
        )}

        {/* Eyes */}
        {mood === 'bazinga' ? (
          <>
            {/* Wide sparkling triumphant eyes */}
            <ellipse cx="66" cy="79" rx="5" ry="6" fill="#ffffff" />
            <circle cx="66" cy="79" r="3.2" fill="#2d3748" />
            <circle cx="67.5" cy="77.5" r="1.2" fill="#ffffff" />

            <ellipse cx="94" cy="79" rx="5" ry="6" fill="#ffffff" />
            <circle cx="94" cy="79" r="3.2" fill="#2d3748" />
            <circle cx="95.5" cy="77.5" r="1.2" fill="#ffffff" />
          </>
        ) : mood === 'disappointed' ? (
          <>
            {/* Half-lidded skepticism */}
            <ellipse cx="66" cy="80" rx="5" ry="4" fill="#ffffff" />
            <circle cx="66" cy="81" r="2.8" fill="#2d3748" />
            <path d="M 61 78 Q 66 76 71 78" fill="#fbd38d" />

            <ellipse cx="94" cy="80" rx="5" ry="4" fill="#ffffff" />
            <circle cx="94" cy="81" r="2.8" fill="#2d3748" />
            <path d="M 89 78 Q 94 76 99 78" fill="#fbd38d" />
          </>
        ) : (
          <>
            {/* Attentive observant eyes */}
            <ellipse cx="66" cy="79" rx="5" ry="5.5" fill="#ffffff" />
            <circle cx="66" cy="79" r="3" fill="#2d3748" />
            <circle cx="67" cy="78" r="1" fill="#ffffff" />

            <ellipse cx="94" cy="79" rx="5" ry="5.5" fill="#ffffff" />
            <circle cx="94" cy="79" r="3" fill="#2d3748" />
            <circle cx="95" cy="78" r="1" fill="#ffffff" />
          </>
        )}

        {/* Nose: Neat straight nose */}
        <path d="M 80 77 L 78 93 L 83 93" fill="none" stroke="#e2a061" strokeWidth="2" strokeLinecap="round" />

        {/* Mouth */}
        {mood === 'bazinga' ? (
          /* Broad iconic Bazinga grin */
          <path
            d="M 68 100 Q 80 114 92 100 Q 80 106 68 100 Z"
            fill="#ffffff"
            stroke="#c53030"
            strokeWidth="1.5"
          />
        ) : mood === 'smug' ? (
          /* Knowing crooked half-smile */
          <path
            d="M 70 104 Q 78 105 88 99"
            fill="none"
            stroke="#9b2c2c"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ) : mood === 'disappointed' ? (
          /* Downturned disapproving mouth */
          <path
            d="M 69 105 Q 80 99 91 105"
            fill="none"
            stroke="#9b2c2c"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ) : isSpeaking ? (
          /* Animated speaking oval mouth */
          <ellipse
            cx="80"
            cy="104"
            rx="5.5"
            ry="4.5"
            fill="#742a2a"
            className="animate-pulse"
          />
        ) : (
          /* Composed slight smile */
          <path
            d="M 72 103 Q 80 106 88 103"
            fill="none"
            stroke="#9b2c2c"
            strokeWidth="2"
            strokeLinecap="round"
          />
        )}
      </svg>
    </div>
  );
};
