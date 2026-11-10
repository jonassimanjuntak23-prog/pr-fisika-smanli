import React from 'react';
import { ExplanationData } from '../types/physics';
import { MathView } from './MathView';
import {
  BookOpen,
  CheckCircle2,
  FileCheck,
  HelpCircle,
  Lightbulb,
  ListOrdered,
  XCircle,
  Award,
} from 'lucide-react';

interface ExplanationPanelProps {
  explanation: ExplanationData;
  correctKey: string;
  isEssay?: boolean;
}

export const ExplanationPanel: React.FC<ExplanationPanelProps> = ({
  explanation,
  correctKey,
  isEssay = false,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 px-6 py-4 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-xs">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-base md:text-lg tracking-tight">
              Pembahasan Komprehensif Berstandar Buku Teks
            </h3>
            <p className="text-xs text-emerald-100">
              Disusun sistematis dengan prinsip ilmiah, penurunan rumus, dan analisis mendalam
            </p>
          </div>
        </div>

        {!isEssay && (
          <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-400/40 px-3.5 py-1.5 rounded-xl shadow-xs">
            <span className="text-xs text-emerald-200 font-medium">Kunci Jawaban:</span>
            <span className="text-sm font-extrabold text-amber-300 uppercase px-2 py-0.5 bg-emerald-900 rounded-md">
              Pilihan {correctKey.toUpperCase()}
            </span>
          </div>
        )}
      </div>

      <div className="p-6 md:p-8 space-y-7 divide-y divide-slate-100">
        {/* 1. Identifikasi Informasi Penting */}
        <section className="space-y-2">
          <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm tracking-wide">
            <FileCheck className="w-4 h-4" />
            <h4>1. IDENTIFIKASI INFORMASI PENTING DARI STIMULUS</h4>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed pl-6 border-l-2 border-indigo-200">
            {explanation.identifikasi}
          </p>
        </section>

        {/* 2. Diketahui & Ditanyakan */}
        <section className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-800 font-bold text-sm tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <h4>Besaran yang Diketahui</h4>
            </div>
            <ul className="space-y-1.5 text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              {explanation.diketahui.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-800 font-bold text-sm tracking-wide">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <h4>Hal yang Ditanyakan</h4>
            </div>
            <div className="text-sm text-slate-700 bg-amber-50/60 p-4 rounded-xl border border-amber-200/80 leading-relaxed font-medium">
              {explanation.ditanyakan}
            </div>
          </div>
        </section>

        {/* 3. Konsep atau Prinsip Ilmiah */}
        <section className="pt-6 space-y-2">
          <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm tracking-wide">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <h4>2. KONSEP ATAU PRINSIP ILMIAH YANG DIGUNAKAN</h4>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
            {explanation.konsep}
          </p>
        </section>

        {/* 4. Rumus Relevan & Keterangan Simbol */}
        {explanation.rumus.length > 0 && (
          <section className="pt-6 space-y-4">
            <div className="flex items-center gap-2 text-slate-800 font-bold text-sm tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <h4>3. RUMUS RELEVAN BESERTA KETERANGAN SIMBOL & SATUAN</h4>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {explanation.rumus.map((r, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/80 border border-slate-200 rounded-xl p-4 space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="font-semibold text-xs text-slate-700 uppercase tracking-wider">
                      {r.label}
                    </span>
                    <span className="text-[11px] text-slate-500 italic">{r.description}</span>
                  </div>

                  {/* Math block */}
                  <div className="bg-white py-2 px-3 rounded-lg border border-slate-200 shadow-2xs">
                    <MathView math={r.latex} block={true} />
                  </div>

                  {/* Symbols legend */}
                  {r.symbols && r.symbols.length > 0 && (
                    <div className="text-xs space-y-1 text-slate-600 pt-1">
                      <span className="font-bold text-[11px] text-slate-500 uppercase tracking-wider block">
                        Keterangan:
                      </span>
                      {r.symbols.map((sym, sIdx) => (
                        <div key={sIdx} className="flex items-center justify-between text-[11px]">
                          <span className="font-semibold text-indigo-700 font-mono">
                            {sym.symbol} = {sym.name}
                          </span>
                          <span className="text-slate-500 font-mono">[{sym.unit}]</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. Proses Penyelesaian Bertahap & Sistematis */}
        <section className="pt-6 space-y-4">
          <div className="flex items-center gap-2 text-slate-800 font-bold text-sm tracking-wide">
            <ListOrdered className="w-4 h-4 text-indigo-600" />
            <h4>4. PROSES PENYELESAIAN SECARA BERTAHAP & SISTEMATIS</h4>
          </div>

          <div className="space-y-4">
            {explanation.langkahPenyelesaian.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs relative pl-5 hover:border-indigo-300 transition-colors"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600 rounded-l-xl" />
                <h5 className="font-bold text-xs text-indigo-900 mb-1.5 uppercase tracking-wide">
                  {step.tahap}
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line mb-2">
                  {step.penjelasan}
                </p>
                {step.latex && (
                  <div className="bg-slate-50 py-2.5 px-4 rounded-lg border border-slate-200/80 my-2">
                    <MathView math={step.latex} block={true} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 6. Analisis Mengapa Jawaban Benar */}
        <section className="pt-6 space-y-2">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm tracking-wide">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <h4>5. ANALISIS MENGAPA JAWABAN TERSEBUT BENAR</h4>
          </div>
          <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-xl text-sm text-emerald-950 leading-relaxed">
            {explanation.analisisJawabanBenar}
          </div>
        </section>

        {/* 7. Penjelasan Mengapa Pilihan Lain Kurang Tepat */}
        {explanation.analisisPilihanLain && explanation.analisisPilihanLain.length > 0 && (
          <section className="pt-6 space-y-3">
            <div className="flex items-center gap-2 text-rose-800 font-bold text-sm tracking-wide">
              <XCircle className="w-4 h-4 text-rose-600" />
              <h4>6. ANALISIS MENGAPA PILIHAN JAWABAN LAINNYA KURANG TEPAT</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {explanation.analisisPilihanLain.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-rose-50/50 border border-rose-200/70 p-3 rounded-xl text-xs space-y-1"
                >
                  <span className="font-bold text-rose-700 uppercase">
                    Pilihan ({p.opsi.toUpperCase()}):
                  </span>
                  <p className="text-slate-700 leading-relaxed">{p.alasan}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 8. Kesimpulan Akhir */}
        <section className="pt-6 space-y-2">
          <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm tracking-wide">
            <Award className="w-4 h-4 text-indigo-600" />
            <h4>KESIMPULAN AKHIR</h4>
          </div>
          <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-4 rounded-xl shadow-md font-medium text-sm leading-relaxed border border-indigo-800/50">
            {explanation.kesimpulan}
          </div>
        </section>
      </div>
    </div>
  );
};
