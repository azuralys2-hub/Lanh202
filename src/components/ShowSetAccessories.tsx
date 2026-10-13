import React from 'react';
import { Sparkles, Flag, Volume2, VolumeX, HelpCircle, Eye, EyeOff } from 'lucide-react';
import { SHELDON_APPROVAL_TIERS } from '../data/flagsData';

interface ShowHeaderProps {
  score: number;
  streak: number;
  roundNumber: number;
  totalAnswered: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  mysteryFlagMode: boolean;
  onToggleMysteryMode: () => void;
  onTriggerBazinga: () => void;
  onOpenCodex: () => void;
}

export const ShowHeader: React.FC<ShowHeaderProps> = ({
  score,
  streak,
  roundNumber,
  soundEnabled,
  onToggleSound,
  mysteryFlagMode,
  onToggleMysteryMode,
  onTriggerBazinga,
  onOpenCodex,
}) => {
  // Current tier based on score
  const currentTier = [...SHELDON_APPROVAL_TIERS]
    .reverse()
    .find(t => score >= t.minScore) || SHELDON_APPROVAL_TIERS[0];

  return (
    <header className="w-full bg-stone-900 border-b-4 border-amber-600 shadow-xl text-stone-100">
      {/* Top Banner Ribbon */}
      <div className="bg-gradient-to-r from-red-800 via-amber-700 to-red-800 py-1 px-4 text-center border-b border-amber-500/40 flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-200">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
          <span className="text-red-300 font-mono tracking-widest text-[11px]">REC · LIVE WEBCAST</span>
        </div>
        <div className="hidden md:flex items-center gap-3 text-amber-100/90 text-xs font-serif italic normal-case">
          <span>&quot;Dr. Sheldon Cooper & Dr. Amy Farrah Fowler Present&quot;</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSound}
            className="flex items-center gap-1 text-[11px] bg-stone-900/60 hover:bg-stone-900 px-2 py-0.5 rounded border border-amber-500/30 transition-colors"
            title={soundEnabled ? "Tắt âm thanh" : "Bật âm thanh hiệu ứng & giọng nói"}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-amber-400" /> : <VolumeX className="w-3.5 h-3.5 text-stone-400" />}
            <span>{soundEnabled ? "Âm thanh: Bật" : "Âm thanh: Tắt"}</span>
          </button>
        </div>
      </div>

      {/* Main Show Title Board */}
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo and Show Name */}
        <div className="flex items-center gap-3 sm:gap-4 text-left">
          <div className="relative p-2.5 bg-amber-500 text-stone-950 rounded-xl shadow-lg border-2 border-amber-300 transform -rotate-1 flex-shrink-0">
            <Flag className="w-7 h-7 sm:w-8 sm:h-8" />
            <span className="absolute -top-1 -right-1 text-[9px] font-black bg-red-600 text-white px-1 rounded-sm">FWF</span>
          </div>
          <div>
            <div className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-amber-400 font-bold">
              Caltech Vexillological Society
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white font-serif drop-shadow">
              Sheldon Cooper&apos;s <span className="text-amber-400 italic">Fun with Flags</span>
            </h1>
            <div className="text-xs text-stone-300 flex items-center gap-2 mt-0.5">
              <span>Tập #{roundNumber}</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Đố vui Kỳ học Bác học</span>
            </div>
          </div>
        </div>

        {/* Center / Right Control Panel: Score, Tier, Bazinga */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4 w-full md:w-auto">
          {/* Score & Streak Block */}
          <div className="bg-stone-800/90 border border-stone-700 rounded-xl px-4 py-2 flex items-center gap-4 shadow-inner">
            <div className="text-center">
              <div className="text-[10px] uppercase font-mono tracking-wider text-stone-400">Điểm số</div>
              <div className="text-2xl font-black text-amber-400 tabular-nums">
                {score} <span className="text-xs font-normal text-amber-300/70">pts</span>
              </div>
            </div>
            <div className="w-px h-8 bg-stone-700" />
            <div className="text-center">
              <div className="text-[10px] uppercase font-mono tracking-wider text-stone-400">Chuỗi đúng</div>
              <div className="text-2xl font-black text-emerald-400 tabular-nums">
                {streak} {streak >= 3 ? '🔥' : ''}
              </div>
            </div>
          </div>

          {/* Sheldon's Approval Level Pill */}
          <div className="bg-stone-800/90 border border-amber-600/40 rounded-xl px-3.5 py-2 flex items-center gap-2.5">
            <span className="text-2xl">{currentTier.icon}</span>
            <div className="text-left">
              <div className="text-[10px] uppercase font-mono tracking-wider text-amber-400 font-bold">
                Cấp độ Trí tuệ
              </div>
              <div className="text-xs sm:text-sm font-semibold text-stone-100 max-w-[150px] sm:max-w-[180px] truncate" title={currentTier.title}>
                {currentTier.title}
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Toggle Blur Flag button */}
            <button
              onClick={onToggleMysteryMode}
              className={`p-2 rounded-lg border text-xs font-medium transition-all flex items-center gap-1.5 ${
                mysteryFlagMode
                  ? 'bg-amber-600/20 border-amber-500 text-amber-300 hover:bg-amber-600/30'
                  : 'bg-stone-800 border-stone-700 text-stone-300 hover:bg-stone-700'
              }`}
              title={mysteryFlagMode ? "Đang che mờ cờ (đoán hoàn toàn bằng manh mối)" : "Đang mở cờ (nhìn cờ + đọc manh mối)"}
            >
              {mysteryFlagMode ? <EyeOff className="w-4 h-4 text-amber-400" /> : <Eye className="w-4 h-4 text-stone-400" />}
              <span className="hidden sm:inline">{mysteryFlagMode ? "Che cờ" : "Hiện cờ"}</span>
            </button>

            {/* BAZINGA Button! */}
            <button
              onClick={onTriggerBazinga}
              className="bg-gradient-to-b from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-black text-xs uppercase tracking-widest px-3 py-2 rounded-lg shadow-md border-b-2 border-red-900 active:translate-y-0.5 transition-all flex items-center gap-1"
              title="Nhấn để nghe một câu đùa Vexillology từ Sheldon!"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>BAZINGA!</span>
            </button>

            {/* Codex Library */}
            <button
              onClick={onOpenCodex}
              className="bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-300 p-2 rounded-lg text-xs transition-colors"
              title="Mở Sổ tay Kỳ học của Sheldon"
            >
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
