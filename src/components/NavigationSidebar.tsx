import React, { useMemo } from 'react';
import { QuestionItem, UserAnswerState } from '../types/physics';
import {
  CheckCircle2,
  XCircle,
  FileText,
  Flame,
  Award,
  BookOpen,
  Filter,
} from 'lucide-react';

interface NavigationSidebarProps {
  questions: QuestionItem[];
  currentIndex: number;
  userAnswers: Record<string, UserAnswerState>;
  onSelectQuestion: (index: number) => void;
  onOpenOriginalDoc: () => void;
  activeFilter: 'all' | 'multiple_choice' | 'essay' | 'hots';
  onFilterChange: (filter: 'all' | 'multiple_choice' | 'essay' | 'hots') => void;
}

export const NavigationSidebar: React.FC<NavigationSidebarProps> = ({
  questions,
  currentIndex,
  userAnswers,
  onSelectQuestion,
  onOpenOriginalDoc,
  activeFilter,
  onFilterChange,
}) => {
  // Statistics
  const stats = useMemo(() => {
    const mcQuestions = questions.filter((q) => q.type === 'multiple_choice');
    let correctCount = 0;
    let submittedCount = 0;

    mcQuestions.forEach((q) => {
      const state = userAnswers[q.id];
      if (state?.isSubmitted) {
        submittedCount++;
        if (state.isCorrect) correctCount++;
      }
    });

    const completionRate = Math.round((submittedCount / mcQuestions.length) * 100);
    const scoreRate = submittedCount > 0 ? Math.round((correctCount / submittedCount) * 100) : 0;

    return {
      total: questions.length,
      mcCount: mcQuestions.length,
      submittedCount,
      correctCount,
      completionRate,
      scoreRate,
    };
  }, [questions, userAnswers]);

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      if (activeFilter === 'multiple_choice') return q.type === 'multiple_choice';
      if (activeFilter === 'essay') return q.type === 'essay';
      if (activeFilter === 'hots') return q.isHots;
      return true;
    });
  }, [questions, activeFilter]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-6">
      {/* Title & Origin Badge */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          <h3 className="font-extrabold text-slate-900 text-sm tracking-tight">
            Navigasi Soal PR Fisika
          </h3>
        </div>
        <p className="text-xs text-slate-500">
          SMAN 5 - Listrik Arus Searah Kelas 12
        </p>
      </div>

      {/* Progress & Score Widget */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
          <span>Progres Latihan:</span>
          <span className="text-indigo-600 font-mono">
            {stats.submittedCount} / {stats.mcCount} Soal ({stats.completionRate}%)
          </span>
        </div>
        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
          <div
            className="bg-indigo-600 h-full rounded-full transition-all duration-300"
            style={{ width: `${stats.completionRate}%` }}
          />
        </div>

        {stats.submittedCount > 0 && (
          <div className="flex items-center justify-between pt-1 border-t border-slate-200 text-xs">
            <span className="text-slate-600 flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              Skor Akurasi:
            </span>
            <span className="font-extrabold text-emerald-600 font-mono">
              {stats.correctCount} Benar ({stats.scoreRate}%)
            </span>
          </div>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-2">
          <Filter className="w-3.5 h-3.5 text-slate-400" />
          <span>Filter Soal:</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <button
            onClick={() => onFilterChange('all')}
            className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeFilter === 'all'
                ? 'bg-indigo-600 text-white shadow-2xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Semua ({questions.length})
          </button>
          <button
            onClick={() => onFilterChange('hots')}
            className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1 ${
              activeFilter === 'hots'
                ? 'bg-rose-600 text-white shadow-2xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Flame className="w-3 h-3 text-rose-500 fill-rose-500" />
            HOTS (8)
          </button>
          <button
            onClick={() => onFilterChange('multiple_choice')}
            className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeFilter === 'multiple_choice'
                ? 'bg-indigo-600 text-white shadow-2xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Pilgan (16)
          </button>
          <button
            onClick={() => onFilterChange('essay')}
            className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeFilter === 'essay'
                ? 'bg-indigo-600 text-white shadow-2xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Essay (3)
          </button>
        </div>
      </div>

      {/* Question Number Grid */}
      <div className="space-y-3">
        {/* Section A */}
        <div>
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
            Bagian A: Pilihan Ganda (15 - 30)
          </span>
          <div className="grid grid-cols-4 sm:grid-cols-4 gap-2">
            {questions
              .filter((q) => q.section === 'A')
              .map((q) => {
                const qIndex = questions.findIndex((item) => item.id === q.id);
                const isActive = currentIndex === qIndex;
                const state = userAnswers[q.id];
                const isSubmitted = state?.isSubmitted;
                const isCorrect = state?.isCorrect;

                let btnClass = 'bg-white border-slate-200 hover:bg-slate-100 text-slate-700';
                if (isActive) {
                  btnClass = 'bg-indigo-600 text-white border-indigo-700 shadow-sm ring-2 ring-indigo-400/50 font-bold';
                } else if (isSubmitted) {
                  btnClass = isCorrect
                    ? 'bg-emerald-50 border-emerald-400 text-emerald-800 font-bold'
                    : 'bg-rose-50 border-rose-400 text-rose-800 font-bold';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => onSelectQuestion(qIndex)}
                    className={`relative py-2.5 rounded-xl border text-xs flex flex-col items-center justify-center transition-all cursor-pointer ${btnClass}`}
                  >
                    <span className="font-mono text-xs">{q.number}</span>

                    {/* HOTS indicator dot */}
                    {q.isHots && (
                      <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-rose-500" />
                    )}

                    {/* Result icon */}
                    {isSubmitted && !isActive && (
                      <span className="absolute -bottom-1 -right-1">
                        {isCorrect ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                        ) : (
                          <XCircle className="w-3.5 h-3.5 text-rose-600 fill-rose-100" />
                        )}
                      </span>
                    )}
                  </button>
                );
              })}
          </div>
        </div>

        {/* Section B */}
        <div>
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
            Bagian B: Soal Essay (1, 2, 3)
          </span>
          <div className="grid grid-cols-3 gap-2">
            {questions
              .filter((q) => q.section === 'B')
              .map((q) => {
                const qIndex = questions.findIndex((item) => item.id === q.id);
                const isActive = currentIndex === qIndex;

                let btnClass = 'bg-white border-slate-200 hover:bg-slate-100 text-slate-700';
                if (isActive) {
                  btnClass = 'bg-indigo-600 text-white border-indigo-700 shadow-sm ring-2 ring-indigo-400/50 font-bold';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => onSelectQuestion(qIndex)}
                    className={`relative py-2.5 rounded-xl border text-xs flex flex-col items-center justify-center transition-all cursor-pointer ${btnClass}`}
                  >
                    <span className="font-mono text-xs font-bold">{q.number}</span>
                    {q.isHots && (
                      <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-rose-500" />
                    )}
                  </button>
                );
              })}
          </div>
        </div>
      </div>

      {/* Button to view raw PDF document */}
      <button
        onClick={onOpenOriginalDoc}
        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-indigo-200 bg-indigo-50/60 hover:bg-indigo-100 text-indigo-800 text-xs font-bold transition-all"
      >
        <FileText className="w-4 h-4 text-indigo-600" />
        Lihat Scan Asli (PDF 3 Hal)
      </button>
    </div>
  );
};
