import React, { useState } from 'react';
import { QuestionItem, UserAnswerState } from '../types/physics';
import { CircuitViewer } from './CircuitViewer';
import { AudioNarrationBar } from './AudioNarrationBar';
import { ExplanationPanel } from './ExplanationPanel';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Flame,
  FileQuestion,
} from 'lucide-react';

interface QuestionCardProps {
  question: QuestionItem;
  answerState?: UserAnswerState;
  onSelectOption: (key: string) => void;
  onSubmitAnswer: () => void;
  onResetAnswer?: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answerState,
  onSelectOption,
  onSubmitAnswer,
}) => {
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const selectedKey = answerState?.selectedKey;
  const isSubmitted = answerState?.isSubmitted || false;
  const isCorrect = answerState?.isCorrect;

  const handleSubmit = () => {
    onSubmitAnswer();
    setShowExplanation(true);
    if (selectedKey === question.correctKey) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Audio narration bar at top of question */}
      <AudioNarrationBar
        ttsScript={question.ttsScript}
        questionNumber={question.number}
      />

      {/* Main Question Box */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 md:p-8 relative">
        {/* Badges Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-lg bg-indigo-600 text-white font-extrabold text-xs shadow-2xs">
              {question.section === 'A' ? `Soal Pilihan Ganda #${question.number}` : `Soal Essay #${question.number}`}
            </span>

            {question.isHots && (
              <span className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 border border-rose-200/80 font-bold text-xs flex items-center gap-1 shadow-2xs">
                <Flame className="w-3.5 h-3.5 text-rose-600 fill-rose-500" />
                HOTS (Tingkat Tinggi)
              </span>
            )}

            <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
              {question.topic}
            </span>
          </div>

          <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
            Dokumen Asli Hal. {question.pageNumber}
          </span>
        </div>

        {/* Question Title */}
        <h2 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight mb-4">
          {question.title}
        </h2>

        {/* Stimulus / Problem Text */}
        <div className="prose prose-slate max-w-none text-slate-800 text-sm md:text-base leading-relaxed mb-6 font-normal whitespace-pre-line">
          {question.stimulusText}
        </div>

        {/* Circuit Diagram if present */}
        {(question.diagramUrl || question.diagramSvgType) && (
          <CircuitViewer
            questionId={question.id}
            diagramUrl={question.diagramUrl}
            diagramSvgType={question.diagramSvgType}
            title={question.title}
            pageNumber={question.pageNumber}
          />
        )}

        {/* Question Prompt */}
        <div className="bg-indigo-50/60 border-l-4 border-indigo-600 p-4 rounded-r-xl mb-6">
          <p className="font-semibold text-indigo-950 text-sm md:text-base">
            {question.questionText}
          </p>
        </div>

        {/* Multiple Choice Options */}
        {question.type === 'multiple_choice' && question.options && (
          <div className="space-y-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
              Pilihan Jawaban (Klik untuk memilih):
            </span>
            <div className="grid grid-cols-1 gap-2.5">
              {question.options.map((option) => {
                const isSelected = selectedKey === option.key;
                const isOptionCorrect = option.key === question.correctKey;

                let stateClasses = 'bg-white border-slate-200 hover:border-indigo-400 hover:bg-slate-50/80 text-slate-800';
                if (isSelected && !isSubmitted) {
                  stateClasses = 'bg-indigo-50/80 border-indigo-600 text-indigo-950 shadow-xs ring-1 ring-indigo-600';
                } else if (isSubmitted) {
                  if (isOptionCorrect) {
                    stateClasses = 'bg-emerald-50/90 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/50 shadow-xs';
                  } else if (isSelected && !isOptionCorrect) {
                    stateClasses = 'bg-rose-50/90 border-rose-500 text-rose-950 ring-1 ring-rose-500/50';
                  } else {
                    stateClasses = 'bg-slate-50/60 border-slate-200/80 text-slate-500 opacity-70';
                  }
                }

                return (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => !isSubmitted && onSelectOption(option.key)}
                    disabled={isSubmitted}
                    className={`w-full flex items-start text-left p-3.5 rounded-xl border transition-all cursor-pointer ${stateClasses}`}
                  >
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs uppercase shrink-0 mr-3 transition-colors ${
                        isSelected && !isSubmitted
                          ? 'bg-indigo-600 text-white'
                          : isSubmitted && isOptionCorrect
                          ? 'bg-emerald-600 text-white'
                          : isSubmitted && isSelected && !isOptionCorrect
                          ? 'bg-rose-600 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {option.key}
                    </span>
                    <span className="text-sm font-medium pt-0.5 leading-relaxed">
                      {option.text}
                    </span>

                    {/* Result icon if submitted */}
                    {isSubmitted && isOptionCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-auto self-center" />
                    )}
                    {isSubmitted && isSelected && !isOptionCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-auto self-center" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Action button bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
          {question.type === 'multiple_choice' ? (
            <div className="flex items-center gap-2">
              {!isSubmitted ? (
                <button
                  onClick={handleSubmit}
                  disabled={!selectedKey}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold shadow-md transition-all flex items-center gap-2 ${
                    selectedKey
                      ? 'bg-indigo-600 hover:bg-indigo-500 text-white active:scale-95 cursor-pointer'
                      : 'bg-slate-200 text-slate-600 cursor-not-allowed'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  Cek Jawaban Saya
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <div
                    className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 ${
                      isCorrect
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Jawaban Tepat! Kunci: ({question.correctKey.toUpperCase()})
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-600" />
                        Kurang Tepat. Kunci yang Benar: ({question.correctKey.toUpperCase()})
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <FileQuestion className="w-4 h-4 text-indigo-600" />
                Soal Uraian / Essay Terstruktur
              </span>
            </div>
          )}

          {/* Toggle Explanation Button */}
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors ml-auto"
          >
            {showExplanation ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Sembunyikan Pembahasan
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                {isSubmitted || question.type === 'essay'
                  ? 'Buka Pembahasan Lengkap'
                  : 'Lihat Kunci & Pembahasan'}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Collapsible Explanation Section */}
      {showExplanation && (
        <ExplanationPanel
          explanation={question.explanation}
          correctKey={question.correctKey}
          isEssay={question.type === 'essay'}
        />
      )}
    </div>
  );
};
