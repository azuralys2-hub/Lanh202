import React, { useState } from 'react';
import { FlagQuestion, FLAGS_DATASET, SHELDON_APPROVAL_TIERS } from '../data/flagsData';
import { X, Search, BookOpen, Award, Check } from 'lucide-react';

interface VexillologyCodexModalProps {
  isOpen: boolean;
  onClose: () => void;
  answeredFlagsIds: string[];
  currentScore: number;
}

export const VexillologyCodexModal: React.FC<VexillologyCodexModalProps> = ({
  isOpen,
  onClose,
  answeredFlagsIds,
  currentScore,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFlag, setSelectedFlag] = useState<FlagQuestion | null>(FLAGS_DATASET[0]);

  if (!isOpen) return null;

  const filteredFlags = FLAGS_DATASET.filter((f) =>
    f.countryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.countryNameEn.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-stone-900 border-2 border-amber-600 rounded-2xl w-full max-w-4xl max-h-[90vh] shadow-2xl flex flex-col overflow-hidden text-stone-100">
        {/* Header */}
        <div className="bg-stone-950 px-6 py-4 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500 text-stone-950 rounded-lg">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-serif text-white">
                Sổ tay Kỳ học của Tiến sĩ Sheldon Cooper
              </h2>
              <div className="text-xs text-amber-400 font-mono">
                Bách khoa Toàn thư Vexillology Caltech
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1.5 rounded-lg hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body: Split view */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
          {/* Left: List of flags */}
          <div className="md:col-span-5 border-r border-stone-800 flex flex-col h-full overflow-hidden bg-stone-950/50">
            {/* Search */}
            <div className="p-3 border-b border-stone-800">
              <div className="relative">
                <Search className="w-4 h-4 text-stone-500 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Tìm quốc gia (VD: Nepal, Brazil)..."
                  className="w-full bg-stone-900 border border-stone-700 rounded-xl pl-9 pr-3 py-1.5 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto divide-y divide-stone-800/60 p-2 space-y-1">
              {filteredFlags.map((flag) => {
                const isDiscovered = answeredFlagsIds.includes(flag.id);
                const isSelected = selectedFlag?.id === flag.id;

                return (
                  <button
                    key={flag.id}
                    onClick={() => setSelectedFlag(flag)}
                    className={`w-full text-left p-2.5 rounded-xl flex items-center justify-between transition-all ${
                      isSelected
                        ? 'bg-amber-600/20 border border-amber-500/50 text-amber-200'
                        : 'hover:bg-stone-800/60 text-stone-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={flag.flagUrl}
                        alt={flag.countryName}
                        className="w-8 h-5 object-contain bg-stone-900 rounded border border-stone-700"
                        loading="lazy"
                      />
                      <div>
                        <div className="text-xs font-bold text-stone-100">{flag.countryName}</div>
                        <div className="text-[10px] text-stone-400 font-mono">{flag.countryNameEn}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isDiscovered && (
                        <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-500/40 px-1.5 py-0.5 rounded font-mono flex items-center gap-0.5">
                          <Check className="w-3 h-3" /> Đã gặp
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Flag Detail */}
          <div className="md:col-span-7 p-6 overflow-y-auto flex flex-col gap-4 bg-stone-900">
            {selectedFlag ? (
              <div className="space-y-4 text-left">
                <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-stone-950/80 rounded-xl border border-stone-800">
                  <div className="w-36 h-24 flex items-center justify-center p-2 bg-stone-900 rounded-lg border border-stone-700 flex-shrink-0">
                    <img
                      src={selectedFlag.flagUrl}
                      alt={selectedFlag.countryName}
                      className="max-h-full max-w-full object-contain drop-shadow"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                      Hồ sơ Kỳ học Quốc tế
                    </div>
                    <h3 className="text-xl font-bold font-serif text-white">
                      {selectedFlag.countryName} ({selectedFlag.countryNameEn})
                    </h3>
                    <div className="text-xs text-stone-400 font-mono mt-1">
                      Mã ISO: {selectedFlag.countryCode.toUpperCase()}
                    </div>
                  </div>
                </div>

                <div className="bg-stone-950/40 p-4 rounded-xl border border-stone-800 space-y-3 text-xs sm:text-sm">
                  <div>
                    <h4 className="font-bold text-amber-400 font-serif mb-1">Ý nghĩa & Thiết kế:</h4>
                    <p className="text-stone-300 leading-relaxed">{selectedFlag.vexillologyFact}</p>
                  </div>
                  <div className="pt-2 border-t border-stone-800">
                    <h4 className="font-bold text-amber-400 font-serif mb-1">Góc nhìn Khoa học của Sheldon:</h4>
                    <p className="text-stone-300 leading-relaxed italic">{selectedFlag.funFactSnippet}</p>
                  </div>
                  <div className="pt-2 border-t border-stone-800">
                    <h4 className="font-bold text-amber-400 font-serif mb-1">3 Manh mối tiêu biểu:</h4>
                    <ul className="list-disc list-inside space-y-1 text-stone-300 text-xs">
                      {selectedFlag.clues.map((c, idx) => (
                        <li key={idx}><strong className="text-stone-200">{c.level}:</strong> {c.hint}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-stone-500 my-auto py-12">
                Chọn một quốc kỳ từ danh sách để xem chi tiết kỳ học.
              </div>
            )}

            {/* Achievements Footer */}
            <div className="mt-auto pt-4 border-t border-stone-800">
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span className="flex items-center gap-1.5 font-medium text-amber-400">
                  <Award className="w-4 h-4" /> Tiến trình khám phá: {answeredFlagsIds.length}/{FLAGS_DATASET.length} quốc gia
                </span>
                <span>Điểm tích lũy: {currentScore} pts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
