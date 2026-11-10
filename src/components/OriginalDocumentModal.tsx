import React, { useState } from 'react';
import { X, FileText, Download, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface OriginalDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPage?: number;
}

export const OriginalDocumentModal: React.FC<OriginalDocumentModalProps> = ({
  isOpen,
  onClose,
  initialPage = 1,
}) => {
  const [activePage, setActivePage] = useState<number>(initialPage);
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);

  if (!isOpen) return null;

  const pageImageSrc = `/pages/page_${activePage}.jpg`;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 md:p-6"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-5xl h-[92vh] flex flex-col overflow-hidden shadow-2xl relative text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-slate-800/90 border-b border-slate-700 gap-3">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-bold text-sm md:text-base text-slate-100">
                Arsip Scan Asli Dokumen: PR_SMAN5_BU_IRMA.pdf
              </h3>
              <p className="text-xs text-slate-400">
                Fisika SMA/MA Kelas 12 — Bab Listrik Arus Searah
              </p>
            </div>
          </div>

          {/* Page switch tabs */}
          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-700">
            {[1, 2, 3].map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => {
                  setActivePage(pageNum);
                  setZoomLevel(1.0);
                }}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activePage === pageNum
                    ? 'bg-amber-400 text-slate-950 shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Halaman {pageNum}
              </button>
            ))}
          </div>

          {/* Actions & Zoom */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-slate-950 rounded-lg p-0.5 border border-slate-700">
              <button
                onClick={() => setZoomLevel((z) => Math.max(0.6, z - 0.2))}
                title="Perkecil"
                className="p-1.5 text-slate-300 hover:text-white rounded"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="px-2 text-xs font-mono text-slate-300">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.2))}
                title="Perbesar"
                className="p-1.5 text-slate-300 hover:text-white rounded"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(1.0)}
                title="Reset Ukuran"
                className="p-1.5 text-slate-400 hover:text-white rounded ml-0.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <a
              href="/assets/aistudio/PR_SMAN5_BU_IRMA_9d0cf2b3.pdf"
              download
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-xs font-medium rounded-lg text-white transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Unduh PDF
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Canvas */}
        <div className="flex-1 overflow-auto p-4 md:p-8 flex justify-center items-start bg-slate-950">
          <div
            className="transition-transform duration-200 origin-top shadow-2xl rounded-lg overflow-hidden border border-slate-800 bg-white"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src={pageImageSrc}
              alt={`Scan Asli Halaman ${activePage}`}
              className="max-w-3xl w-full h-auto block select-none"
            />
          </div>
        </div>

        {/* Footer info banner */}
        <div className="px-5 py-2.5 bg-slate-800 text-xs text-slate-300 border-t border-slate-700 flex items-center justify-between">
          <span>
            Halaman {activePage} dari 3 • Menampilkan Soal Asli: {activePage === 1 ? 'No. 15 s.d. 19' : activePage === 2 ? 'No. 20 s.d. 26' : 'No. 27 s.d. 30 & Bagian B (Essay 1 - 3)'}
          </span>
          <span className="text-amber-400 text-[11px] font-medium">
            100% Salinan Utuh Tanpa Perubahan Angka atau Redaksi
          </span>
        </div>
      </div>
    </div>
  );
};
