import React from 'react';
import { Sparkles, X, Volume2 } from 'lucide-react';
import { SheldonAvatar } from './SheldonAvatar';
import { speakText } from '../utils/audio';

interface BazingaModalProps {
  isOpen: boolean;
  onClose: () => void;
  jokeText: string;
}

export const BazingaModal: React.FC<BazingaModalProps> = ({
  isOpen,
  onClose,
  jokeText,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-stone-900 border-2 border-red-600 rounded-2xl w-full max-w-lg shadow-2xl p-6 relative overflow-hidden text-stone-100 flex flex-col items-center text-center">
        {/* Top comic flash banner */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 py-1.5 px-4 font-black tracking-widest text-xs uppercase text-stone-950 flex items-center justify-center gap-1.5 shadow">
          <Sparkles className="w-4 h-4" />
          <span>SHELDON COOPER&apos;S BAZINGA! CORNER</span>
          <Sparkles className="w-4 h-4" />
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-white p-1 rounded-lg hover:bg-stone-800 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mt-6 mb-2">
          <SheldonAvatar mood="bazinga" />
        </div>

        <div className="text-3xl font-black font-serif italic text-amber-400 tracking-wider mb-2 drop-shadow">
          BAZINGA!
        </div>

        <p className="text-sm sm:text-base text-stone-200 font-serif leading-relaxed px-2 italic my-3">
          &quot;{jokeText}&quot;
        </p>

        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={() => speakText(jokeText, true)}
            className="flex items-center gap-1.5 text-xs bg-stone-800 hover:bg-stone-700 text-amber-300 px-3 py-2 rounded-xl border border-stone-700 transition-colors"
          >
            <Volume2 className="w-4 h-4" />
            <span>Nghe Sheldon nói</span>
          </button>
          <button
            onClick={onClose}
            className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs px-5 py-2 rounded-xl transition-all shadow"
          >
            Tuyệt diệu! Trở lại đố vui
          </button>
        </div>
      </div>
    </div>
  );
};
