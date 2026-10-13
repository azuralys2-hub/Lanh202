import React, { useState, useEffect, useRef } from 'react';
import { FlagQuestion } from '../data/flagsData';
import { SheldonAvatar, SheldonMood } from './SheldonAvatar';
import { Sparkles, ArrowRight, Pause, Play, CheckCircle2, XCircle, Lightbulb, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSound, speakText } from '../utils/audio';

interface FlagQuestionStageProps {
  question: FlagQuestion;
  roundNumber: number;
  totalQuestions: number;
  soundEnabled: boolean;
  mysteryFlagMode: boolean;
  onAnswerSubmitted: (selectedOptionLetter: 'A' | 'B' | 'C' | 'D' | string, isCorrect: boolean) => void;
  onNextQuestion: () => void;
}

export const FlagQuestionStage: React.FC<FlagQuestionStageProps> = ({
  question,
  roundNumber,
  soundEnabled,
  mysteryFlagMode,
  onAnswerSubmitted,
  onNextQuestion,
}) => {
  // State
  const [selectedAnswer, setSelectedAnswer] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [customInputText, setCustomInputText] = useState('');
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [sheldonSpeech, setSheldonSpeech] = useState<string>('');
  const [sheldonMood, setSheldonMood] = useState<SheldonMood>('explaining');
  const [revealedClues, setRevealedClues] = useState<number[]>([0, 1, 2]); // reveal all 3 clues by default, or interactive
  const [countdown, setCountdown] = useState<number>(7);
  const [isPaused, setIsPaused] = useState(false);

  const countdownIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize or reset question
  useEffect(() => {
    setSelectedAnswer(null);
    setCustomInputText('');
    setHasAnswered(false);
    setIsAnswerCorrect(false);
    setCountdown(7);
    setIsPaused(false);
    setSheldonMood('explaining');

    // Sheldon's prompt to the user
    const introPrompt = `Nào, hãy quan sát 3 manh mối trên tấm bảng của tôi và cho tôi biết: Đây là quốc kỳ của quốc gia nào? Đừng đoán mò như Leonard chọn áo sơ mi nhé!`;
    setSheldonSpeech(introPrompt);

    if (soundEnabled) {
      playSound('whoosh');
    }
  }, [question, soundEnabled]);

  // Handle countdown timer after answering
  useEffect(() => {
    if (hasAnswered && !isPaused) {
      countdownIntervalRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownIntervalRef.current as NodeJS.Timeout);
            onNextQuestion();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
    }

    return () => {
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
    };
  }, [hasAnswered, isPaused, onNextQuestion]);

  // Handle Option Click
  const handleSelectOption = (option: { letter: 'A' | 'B' | 'C' | 'D'; text: string; isCorrect: boolean }) => {
    if (hasAnswered) return;

    const correct = option.isCorrect;
    setSelectedAnswer(option.letter);
    setHasAnswered(true);
    setIsAnswerCorrect(correct);

    if (correct) {
      setSheldonMood('bazinga');
      setSheldonSpeech(question.sheldonCorrectComment);
      if (soundEnabled) {
        playSound('correct');
        speakText(question.sheldonCorrectComment, true);
      }
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#dc2626', '#f59e0b', '#3b82f6', '#10b981'],
        });
      } catch (e) {
        console.warn(e);
      }
    } else {
      setSheldonMood('disappointed');
      setSheldonSpeech(question.sheldonIncorrectComment);
      if (soundEnabled) {
        playSound('wrong');
        speakText(question.sheldonIncorrectComment, true);
      }
    }

    onAnswerSubmitted(option.letter, correct);
  };

  // Handle text input submission (e.g. typing "A", "Nepal", "B", etc.)
  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hasAnswered || !customInputText.trim()) return;

    const query = customInputText.trim().toLowerCase();
    
    // Check if letter match
    let matchedOption = question.options.find(
      opt => opt.letter.toLowerCase() === query
    );

    // If not letter, check country name match
    if (!matchedOption) {
      matchedOption = question.options.find(
        opt => opt.text.toLowerCase().includes(query) || query.includes(opt.text.toLowerCase())
      );
    }

    if (matchedOption) {
      handleSelectOption(matchedOption);
    } else {
      // If user typed custom country name directly matching question
      const isCountryMatch = question.countryName.toLowerCase().includes(query) ||
        question.countryNameEn.toLowerCase().includes(query) ||
        query.includes(question.countryName.toLowerCase());

      const correct = isCountryMatch;
      setHasAnswered(true);
      setIsAnswerCorrect(correct);

      if (correct) {
        setSheldonMood('bazinga');
        setSheldonSpeech(question.sheldonCorrectComment);
        if (soundEnabled) {
          playSound('correct');
          speakText(question.sheldonCorrectComment, true);
        }
        try {
          confetti({ particleCount: 40, spread: 50, origin: { y: 0.6 } });
        } catch {
          // Ignore
        }
      } else {
        setSheldonMood('disappointed');
        setSheldonSpeech(`Bạn nhập "${customInputText}" sao? Sai hoàn toàn! Đây là quốc kỳ của ${question.countryName}! Ngay cả Sheldon Cooper 5 tuổi cũng không đưa ra câu trả lời thiếu cơ sở như vậy!`);
        if (soundEnabled) {
          playSound('wrong');
          speakText(`Sai rồi! Đáp án chính xác là ${question.countryName}!`, true);
        }
      }

      onAnswerSubmitted(customInputText, correct);
    }
  };

  // Quick read aloud button for Sheldon
  const handleReadSheldonSpeech = () => {
    if (sheldonSpeech) {
      speakText(sheldonSpeech, true);
    }
  };

  const AmyNote = [
    "Lưu ý từ Amy: 'Sheldon, nhớ cười nhẹ nhàng và đừng dùng phương trình vi phân để miêu tả cờ nhé.'",
    "Lưu ý từ Amy: 'Em đã chuẩn bị sẵn bánh quy hình cờ Thụy Sĩ trong giờ giải lao rồi đấy.'",
    "Lưu ý từ Amy: 'Sheldon, anh hứa là sẽ không đuổi người xem về lại trường mầm non mà.'",
  ][roundNumber % 3];

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-6">
      {/* Upper Section: Sheldon Presenter Desk & Live Dialogue */}
      <div className="bg-stone-900/90 border-2 border-amber-600/50 rounded-2xl p-4 sm:p-5 shadow-2xl relative overflow-hidden backdrop-blur-md">
        {/* Academic corkboard background feel */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 relative z-10">
          {/* Sheldon Cooper Character */}
          <div className="flex flex-col items-center flex-shrink-0">
            <SheldonAvatar mood={sheldonMood} isSpeaking={hasAnswered} />
            <div className="text-[10px] font-mono text-amber-300/80 mt-1 uppercase tracking-wider text-center">
              Chỉ số IQ: 187 · Vexillologist
            </div>
          </div>

          {/* Speech Bubble */}
          <div className="flex-1 w-full bg-stone-800/90 border-2 border-amber-500/40 rounded-2xl p-4 sm:p-5 relative shadow-lg text-left">
            {/* Bubble arrow pointing towards Sheldon */}
            <div className="hidden sm:block absolute -left-3 top-8 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-amber-500/40" />

            <div className="flex items-center justify-between pb-2 border-b border-stone-700 mb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs font-bold font-mono uppercase tracking-wider text-amber-400">
                  {hasAnswered ? (isAnswerCorrect ? "Phản hồi: Tán dương Bác học (Bazinga!)" : "Phản hồi: Phê bình Hàn lâm") : "Lời thoại từ Bác sĩ Cooper"}
                </span>
              </div>
              <button
                onClick={handleReadSheldonSpeech}
                className="text-stone-400 hover:text-amber-400 transition-colors p-1 rounded hover:bg-stone-700/50"
                title="Đọc lại lời thoại"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm sm:text-base text-stone-100 font-serif leading-relaxed italic">
              &quot;{sheldonSpeech}&quot;
            </p>

            {/* Amy's Note Sticky Note */}
            <div className="mt-3 pt-2.5 border-t border-dashed border-stone-700/70 flex items-start gap-2 text-xs text-amber-200/80 bg-amber-950/20 px-3 py-1.5 rounded-lg border border-amber-600/20 font-sans">
              <span className="text-amber-400 flex-shrink-0">📝</span>
              <span className="italic">{AmyNote}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Question Arena: The Flag & The 3 Clues */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left / Center: Flag Display & Technical specs */}
        <div className="lg:col-span-5 bg-stone-900/90 border border-stone-800 rounded-2xl p-5 shadow-xl flex flex-col items-center justify-between text-center relative">
          <div className="w-full flex items-center justify-between text-xs text-stone-400 mb-3 border-b border-stone-800 pb-2">
            <span className="font-mono tracking-wider uppercase text-amber-500 font-semibold">Hiện vật Quốc kỳ</span>
            <span className="text-[11px] font-mono bg-stone-800 px-2 py-0.5 rounded text-stone-300">
              Mã ISO: {question.countryCode.toUpperCase()}
            </span>
          </div>

          {/* The Flag Showcase Frame */}
          <div className="relative my-auto w-full max-w-[280px] sm:max-w-[320px] aspect-[3/2] flex items-center justify-center p-3 bg-stone-950/70 rounded-xl border-2 border-stone-700/80 shadow-2xl overflow-hidden group">
            {/* Subtle flagpole effect on left */}
            <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-amber-600 via-stone-400 to-stone-700 shadow-md z-10" />

            <img
              src={question.flagUrl}
              alt={`Quốc kỳ của ${question.countryName}`}
              className={`max-h-full max-w-full object-contain drop-shadow-xl transition-all duration-300 ${
                mysteryFlagMode && !hasAnswered
                  ? 'filter blur-md brightness-75 scale-95'
                  : 'filter blur-0 scale-100'
              }`}
              loading="eager"
            />

            {mysteryFlagMode && !hasAnswered && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-950/60 p-4 text-amber-300 backdrop-blur-xs">
                <span className="text-2xl mb-1">🕵️‍♂️</span>
                <span className="text-xs font-bold font-mono tracking-wider uppercase bg-stone-900/90 px-2.5 py-1 rounded border border-amber-500/40 text-center">
                  Chế độ Che Cờ Bí Mật
                </span>
                <span className="text-[10px] text-stone-400 mt-1">Dựa vào 3 manh mối để giải đố!</span>
              </div>
            )}
          </div>

          {/* Quick info under flag */}
          <div className="w-full mt-4 pt-3 border-t border-stone-800 text-xs text-stone-400 flex items-center justify-center gap-4">
            <span>Vexillology Standard</span>
            <span aria-hidden="true">·</span>
            <span>Tỷ lệ chuẩn quốc tế</span>
          </div>
        </div>

        {/* Right: 3 Clues Whiteboard */}
        <div className="lg:col-span-7 bg-stone-900/90 border border-stone-800 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-stone-800 mb-4">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-400" />
                <h2 className="text-base sm:text-lg font-bold text-stone-100 font-serif">
                  3 Manh Mối Kỳ Học (Từ Dễ Đến Khó)
                </h2>
              </div>
              <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/30">
                Caltech Exhibit
              </span>
            </div>

            {/* Clue 1, 2, 3 */}
            <div className="space-y-3">
              {question.clues.map((clue, index) => {
                const isRevealed = revealedClues.includes(index);
                return (
                  <div
                    key={index}
                    className={`rounded-xl p-3.5 border transition-all text-left ${
                      index === 0
                        ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-100'
                        : index === 1
                        ? 'bg-amber-950/20 border-amber-500/30 text-amber-100'
                        : 'bg-rose-950/20 border-rose-500/30 text-rose-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          index === 0 ? 'bg-emerald-500/20 text-emerald-300' :
                          index === 1 ? 'bg-amber-500/20 text-amber-300' :
                          'bg-rose-500/20 text-rose-300'
                        }`}>
                          Manh mối #{index + 1}: {clue.level}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-stone-200">
                      {clue.hint}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-400 text-left italic">
            * Hãy liên kết cả ba manh mối để chọn đáp án bên dưới hoặc gõ trực tiếp tên quốc gia!
          </div>
        </div>
      </div>

      {/* Answer Options & Free-Form Input */}
      <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-5 shadow-xl flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
          <div className="text-sm font-semibold text-stone-200 flex items-center gap-2">
            <span>Chọn 1 trong 4 đáp án (A, B, C, D) hoặc nhập câu trả lời:</span>
          </div>
          <div className="text-xs text-amber-400 font-mono">
            Mỗi câu trả lời đúng: +10 Điểm
          </div>
        </div>

        {/* 4 Choices Grid (A, B, C, D) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {question.options.map((option) => {
            const isSelected = selectedAnswer === option.letter;
            let buttonStyle = "bg-stone-800/80 hover:bg-stone-700/80 text-stone-200 border-stone-700";

            if (hasAnswered) {
              if (option.isCorrect) {
                buttonStyle = "bg-emerald-950/70 border-emerald-500 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.3)] ring-2 ring-emerald-500";
              } else if (isSelected && !option.isCorrect) {
                buttonStyle = "bg-red-950/70 border-red-500 text-red-200 ring-2 ring-red-500";
              } else {
                buttonStyle = "bg-stone-900/50 border-stone-800 text-stone-500 opacity-60";
              }
            }

            return (
              <button
                key={option.letter}
                onClick={() => handleSelectOption(option)}
                disabled={hasAnswered}
                className={`flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border text-left font-medium transition-all group active:scale-[0.99] disabled:cursor-not-allowed ${buttonStyle}`}
              >
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm flex-shrink-0 transition-colors ${
                  hasAnswered && option.isCorrect
                    ? 'bg-emerald-500 text-stone-950'
                    : hasAnswered && isSelected && !option.isCorrect
                    ? 'bg-red-500 text-white'
                    : 'bg-stone-700 group-hover:bg-amber-500 group-hover:text-stone-950 text-stone-200'
                }`}>
                  {option.letter}
                </span>
                <span className="text-sm sm:text-base font-semibold flex-1">
                  {option.text}
                </span>
                {hasAnswered && option.isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                )}
                {hasAnswered && isSelected && !option.isCorrect && (
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Free-form text input option */}
        {!hasAnswered && (
          <form onSubmit={handleCustomSubmit} className="flex items-center gap-2 mt-2 pt-3 border-t border-stone-800">
            <div className="relative flex-1">
              <input
                type="text"
                value={customInputText}
                onChange={(e) => setCustomInputText(e.target.value)}
                placeholder="Nhập A, B, C, D hoặc gõ trực tiếp tên quốc gia (VD: Nepal)..."
                className="w-full bg-stone-950 border border-stone-700 focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all font-sans"
              />
            </div>
            <button
              type="submit"
              disabled={!customInputText.trim()}
              className="bg-amber-600 hover:bg-amber-500 disabled:opacity-40 text-stone-950 font-bold px-4 py-2.5 rounded-xl text-sm transition-all whitespace-nowrap"
            >
              Gửi đáp án
            </button>
          </form>
        )}

        {/* Post-Answer Vexillology Breakdown & Auto Next Question Bar */}
        {hasAnswered && (
          <div className="mt-3 p-4 sm:p-5 bg-stone-950/80 rounded-xl border border-stone-700 flex flex-col gap-4 text-left animate-in fade-in duration-300">
            {/* Header of explanation */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                {isAnswerCorrect ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5 text-sm">
                    <CheckCircle2 className="w-5 h-5" /> Đáp án chính xác: {question.countryName} (+10 điểm)
                  </span>
                ) : (
                  <span className="text-red-400 font-bold flex items-center gap-1.5 text-sm">
                    <XCircle className="w-5 h-5" /> Tiếc quá! Đáp án đúng là: {question.countryName}
                  </span>
                )}
              </div>

              {/* Countdown & Next buttons */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="px-2.5 py-1 text-xs bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-lg border border-stone-700 flex items-center gap-1 transition-colors"
                  title={isPaused ? "Tiếp tục đếm ngược" : "Tạm dừng đếm ngược"}
                >
                  {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-400" /> : <Pause className="w-3.5 h-3.5 text-amber-400" />}
                  <span>{isPaused ? "Tiếp tục" : `Tự chuyển (${countdown}s)`}</span>
                </button>
                <button
                  onClick={onNextQuestion}
                  className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-4 py-1.5 rounded-lg text-xs flex items-center gap-1.5 shadow-md transition-all active:scale-95"
                >
                  <span>Câu tiếp theo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Vexillology deep explanation */}
            <div className="space-y-2 text-xs sm:text-sm text-stone-300">
              <p>
                <strong className="text-amber-400 font-serif">Ý nghĩa thiết kế & Kỳ học: </strong>
                {question.vexillologyFact}
              </p>
              <p>
                <strong className="text-amber-400 font-serif">Sự thật thú vị từ Sheldon: </strong>
                {question.funFactSnippet}
              </p>
            </div>

            {/* Countdown progress bar */}
            {!isPaused && (
              <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-amber-500 h-full transition-all duration-1000 ease-linear"
                  style={{ width: `${(countdown / 7) * 100}%` }}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
