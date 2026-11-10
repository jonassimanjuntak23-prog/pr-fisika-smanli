import React, { useState, useEffect, useCallback } from 'react';
import { QUESTIONS_DATA } from './data/questionsData';
import { UserAnswerState } from './types/physics';
import { QuestionCard } from './components/QuestionCard';
import { NavigationSidebar } from './components/NavigationSidebar';
import { OriginalDocumentModal } from './components/OriginalDocumentModal';
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  BookOpen,
  FileText,
  Zap,
  Info,
  CheckCircle,
} from 'lucide-react';

const STORAGE_KEY = 'fisika_sman5_answers_v1';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswerState>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [isDocModalOpen, setIsDocModalOpen] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'multiple_choice' | 'essay' | 'hots'>('all');

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userAnswers));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [userAnswers]);

  // Scroll to top when switching questions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex]);

  const currentQuestion = QUESTIONS_DATA[currentIndex];

  const handleSelectOption = useCallback((key: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        selectedKey: key,
        isSubmitted: false,
      },
    }));
  }, [currentQuestion.id]);

  const handleSubmitAnswer = useCallback(() => {
    const currentState = userAnswers[currentQuestion.id];
    if (!currentState?.selectedKey) return;

    const isCorrect = currentState.selectedKey === currentQuestion.correctKey;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        ...currentState,
        isSubmitted: true,
        isCorrect,
      },
    }));
  }, [currentQuestion, userAnswers]);

  const handleResetProgress = () => {
    if (window.confirm('Apakah Anda yakin ingin mengatur ulang seluruh progres latihan soal ini?')) {
      setUserAnswers({});
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is in an input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        return;
      }
      if (e.key === 'ArrowRight' && currentIndex < QUESTIONS_DATA.length - 1) {
        setCurrentIndex((i) => i + 1);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex((i) => i - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-800 flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo & School Branding */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-800 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
              <Zap className="w-5 h-5 fill-amber-300 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-slate-900 text-base md:text-lg tracking-tight">
                  Fisika Interaktif
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200/60">
                  Kelas XII SMA/MA
                </span>
              </div>
              <p className="text-xs text-slate-500 line-clamp-1">
                PR SMAN 5 (Bu Irma) — Listrik Arus Searah (19 Soal Lengkap)
              </p>
            </div>
          </div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDocModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-600" />
              <span className="hidden sm:inline">Lihat Scan Asli</span>
            </button>

            <button
              onClick={handleResetProgress}
              title="Reset Progres Latihan"
              className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Active Question & Solution (8 cols on large screens) */}
          <div className="lg:col-span-8 space-y-6">
            <QuestionCard
              question={currentQuestion}
              answerState={userAnswers[currentQuestion.id]}
              onSelectOption={handleSelectOption}
              onSubmitAnswer={handleSubmitAnswer}
            />

            {/* Bottom Question Navigation Controls */}
            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200/90 shadow-2xs">
              <button
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  currentIndex === 0
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800 cursor-pointer active:scale-95'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Soal Sebelumnya
              </button>

              <span className="text-xs font-bold text-slate-500 font-mono">
                {currentIndex + 1} / {QUESTIONS_DATA.length}
              </span>

              <button
                onClick={() => setCurrentIndex((prev) => Math.min(QUESTIONS_DATA.length - 1, prev + 1))}
                disabled={currentIndex === QUESTIONS_DATA.length - 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  currentIndex === QUESTIONS_DATA.length - 1
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-xs cursor-pointer active:scale-95'
                }`}
              >
                Soal Berikutnya
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Navigation Sidebar & Statistics (4 cols) */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <NavigationSidebar
              questions={QUESTIONS_DATA}
              currentIndex={currentIndex}
              userAnswers={userAnswers}
              onSelectQuestion={(idx) => setCurrentIndex(idx)}
              onOpenOriginalDoc={() => setIsDocModalOpen(true)}
              activeFilter={activeFilter}
              onFilterChange={(f) => setActiveFilter(f)}
            />

            {/* Textbook Study Tips Card */}
            <div className="bg-gradient-to-br from-indigo-50 to-slate-50 rounded-2xl border border-indigo-100 p-5 space-y-3">
              <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs uppercase tracking-wider">
                <Info className="w-4 h-4 text-indigo-600" />
                <span>Petunjuk Belajar Mandiri:</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <span className="text-indigo-500 font-bold">1.</span>
                  <span>
                    Cobalah menjawab soal terlebih dahulu sebelum membuka pembahasan untuk menguji pemahaman konsep Anda.
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-indigo-500 font-bold">2.</span>
                  <span>
                    Gunakan <strong>Narator Audio TTS</strong> untuk mendengarkan pelafalan rumus dan alur berpikir yang runut.
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-indigo-500 font-bold">3.</span>
                  <span>
                    Klik tombol <strong>Scan Asli PR</strong> untuk mencocokkan teks soal dan skema gambar dengan naskah fotokopi asli.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>
            Aplikasi Pembelajaran Digital Interaktif • PR Fisika SMAN 5 (Bu Irma) • Kurikulum Merdeka SMA Kelas XII
          </p>
          <p className="text-slate-400">
            Materi: Listrik Arus Searah (Hukum Ohm, Kirchhoff, Jembatan Wheatstone, Daya & Energi)
          </p>
        </div>
      </footer>

      {/* Modal for viewing the 3 full-page PDF scans */}
      <OriginalDocumentModal
        isOpen={isDocModalOpen}
        onClose={() => setIsDocModalOpen(false)}
        initialPage={currentQuestion.pageNumber}
      />
    </div>
  );
}
