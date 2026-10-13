import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  FLAGS_DATASET,
  SHELDON_INTROS,
  SHELDON_BAZINGA_JOKES,
  FlagQuestion
} from './data/flagsData';
import { ShowHeader } from './components/ShowSetAccessories';
import { FlagQuestionStage } from './components/FlagQuestionStage';
import { VexillologyCodexModal } from './components/VexillologyCodexModal';
import { BazingaModal } from './components/BazingaModal';
import { playSound } from './utils/audio';
import { Sparkles, Trophy, RotateCcw, Clapperboard } from 'lucide-react';

export default function App() {
  // Game states
  const [questionsList, setQuestionsList] = useState<FlagQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [answeredIds, setAnsweredIds] = useState<string[]>([]);
  
  // Settings & Modals
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mysteryFlagMode, setMysteryFlagMode] = useState(false);
  const [isCodexOpen, setIsCodexOpen] = useState(false);
  const [isBazingaOpen, setIsBazingaOpen] = useState(false);
  const [currentJoke, setCurrentJoke] = useState('');
  const [showIntroCard, setShowIntroCard] = useState(true);

  // Shuffle question deck on initial load
  useEffect(() => {
    // Keep Nepal first as it's the most iconic Sheldon vexillology flag, then shuffle others!
    const nepal = FLAGS_DATASET[0];
    const others = [...FLAGS_DATASET.slice(1)].sort(() => Math.random() - 0.5);
    setQuestionsList([nepal, ...others]);
  }, []);

  const currentQuestion = useMemo(() => {
    if (questionsList.length === 0) return FLAGS_DATASET[0];
    return questionsList[currentIndex % questionsList.length];
  }, [questionsList, currentIndex]);

  // Handle user answer submission
  const handleAnswerSubmitted = useCallback((selected: string, isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 10);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }

    if (currentQuestion && !answeredIds.includes(currentQuestion.id)) {
      setAnsweredIds(prev => [...prev, currentQuestion.id]);
    }
  }, [currentQuestion, answeredIds]);

  // Next question handler
  const handleNextQuestion = useCallback(() => {
    if (soundEnabled) {
      playSound('whoosh');
    }
    setCurrentIndex(prev => prev + 1);
  }, [soundEnabled]);

  // Trigger Bazinga joke
  const handleTriggerBazinga = () => {
    const randomJoke = SHELDON_BAZINGA_JOKES[Math.floor(Math.random() * SHELDON_BAZINGA_JOKES.length)];
    setCurrentJoke(randomJoke);
    setIsBazingaOpen(true);
    if (soundEnabled) {
      playSound('bazinga');
    }
  };

  // Restart game
  const handleRestart = () => {
    const shuffled = [...FLAGS_DATASET].sort(() => Math.random() - 0.5);
    setQuestionsList(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setAnsweredIds([]);
    setShowIntroCard(true);
  };

  return (
    <div className="min-h-screen bg-[#1c1917] text-stone-100 flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Top Show Header */}
      <ShowHeader
        score={score}
        streak={streak}
        roundNumber={currentIndex + 1}
        totalAnswered={answeredIds.length}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(prev => !prev)}
        mysteryFlagMode={mysteryFlagMode}
        onToggleMysteryMode={() => setMysteryFlagMode(prev => !prev)}
        onTriggerBazinga={handleTriggerBazinga}
        onOpenCodex={() => setIsCodexOpen(true)}
      />

      {/* Main Studio Arena */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 flex flex-col gap-6 items-center">
        {/* Sheldon's Welcome Intro Banner on First Turn / Round 1 */}
        {showIntroCard && currentIndex === 0 && (
          <div className="w-full max-w-5xl bg-gradient-to-r from-amber-950/80 via-stone-900 to-amber-950/80 border-2 border-amber-500/60 rounded-2xl p-4 sm:p-5 shadow-2xl relative animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex flex-col md:flex-row items-center gap-4 text-left">
              <div className="p-3 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/40 flex-shrink-0">
                <Clapperboard className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center gap-2">
                  <span>Chào mừng đến với buổi phát sóng</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-stone-400">Tập khai mạc</span>
                </div>
                <h2 className="text-base sm:text-lg font-serif font-bold text-white mt-1">
                  &quot;Chào mừng các bạn đến với: Sheldon Cooper Vui cùng Quốc kỳ (Fun with Flags)!&quot;
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 mt-1 leading-relaxed">
                  {SHELDON_INTROS[0]}
                </p>
              </div>
              <button
                onClick={() => setShowIntroCard(false)}
                className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow whitespace-nowrap self-end md:self-center"
              >
                <span>Sẵn sàng! Vào câu hỏi #1</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* The Current Interactive Question Stage */}
        <FlagQuestionStage
          key={currentQuestion.id + currentIndex}
          question={currentQuestion}
          roundNumber={currentIndex + 1}
          totalQuestions={FLAGS_DATASET.length}
          soundEnabled={soundEnabled}
          mysteryFlagMode={mysteryFlagMode}
          onAnswerSubmitted={handleAnswerSubmitted}
          onNextQuestion={handleNextQuestion}
        />

        {/* Sitcom Set Footer / Studio Desk details */}
        <div className="w-full max-w-5xl mt-4 pt-4 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <div className="flex items-center gap-2">
            <span>© 2026 Caltech Vexillological Society & Dr. Sheldon Cooper</span>
            <span aria-hidden="true">·</span>
            <span>Recorded in Apartment 4A</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleRestart}
              className="text-stone-400 hover:text-amber-400 flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Chơi lại từ đầu</span>
            </button>
            <button
              onClick={() => setIsCodexOpen(true)}
              className="text-stone-400 hover:text-amber-400 flex items-center gap-1 transition-colors"
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Kho lưu trữ ({answeredIds.length}/{FLAGS_DATASET.length})</span>
            </button>
          </div>
        </div>
      </main>

      {/* Modals */}
      <VexillologyCodexModal
        isOpen={isCodexOpen}
        onClose={() => setIsCodexOpen(false)}
        answeredFlagsIds={answeredIds}
        currentScore={score}
      />

      <BazingaModal
        isOpen={isBazingaOpen}
        onClose={() => setIsBazingaOpen(false)}
        jokeText={currentJoke}
      />
    </div>
  );
}
