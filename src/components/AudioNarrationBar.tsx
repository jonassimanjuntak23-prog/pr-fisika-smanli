import React, { useEffect, useState } from 'react';
import { Play, Pause, Square, Volume2, RotateCcw, FastForward, Settings2 } from 'lucide-react';
import { tts, TtsState, VoiceOption } from '../utils/speechSynthesis';

interface AudioNarrationBarProps {
  ttsScript: string;
  questionNumber: number | string;
  className?: string;
}

export const AudioNarrationBar: React.FC<AudioNarrationBarProps> = ({
  ttsScript,
  questionNumber,
  className = '',
}) => {
  const [ttsState, setTtsState] = useState<TtsState>('stopped');
  const [voices, setVoices] = useState<VoiceOption[]>([]);
  const [selectedVoiceName, setSelectedVoiceName] = useState<string>('');
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [spokenProgress, setSpokenProgress] = useState<number>(0);

  useEffect(() => {
    const unsubState = tts.subscribeState((state) => {
      setTtsState(state);
      if (state === 'stopped') {
        setSpokenProgress(0);
      }
    });

    const unsubBoundary = tts.subscribeBoundary((charIndex, textLength) => {
      if (textLength > 0) {
        setSpokenProgress(Math.min(100, Math.round((charIndex / textLength) * 100)));
      }
    });

    // Populate voices
    const updateVoiceList = () => {
      const available = tts.getAvailableVoices();
      setVoices(available);
      const idVoice = available.find((v) => v.isIndonesian);
      if (idVoice) {
        setSelectedVoiceName(idVoice.name);
      } else if (available.length > 0) {
        setSelectedVoiceName(available[0].name);
      }
    };

    updateVoiceList();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = updateVoiceList;
    }

    return () => {
      unsubState();
      unsubBoundary();
      tts.stop();
    };
  }, []);

  // When question changes, stop audio
  useEffect(() => {
    tts.stop();
    setSpokenProgress(0);
  }, [questionNumber, ttsScript]);

  const handlePlay = () => {
    tts.speak(ttsScript);
  };

  const handlePause = () => {
    tts.pause();
  };

  const handleResume = () => {
    tts.resume();
  };

  const handleStop = () => {
    tts.stop();
  };

  const handleRateChange = (rate: number) => {
    setSpeechRate(rate);
    tts.setRate(rate);
    if (ttsState === 'playing') {
      tts.speak(ttsScript);
    }
  };

  const handleVoiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.value;
    setSelectedVoiceName(name);
    const chosen = voices.find((v) => v.name === name);
    if (chosen) {
      tts.setVoice(chosen.voice);
      if (ttsState === 'playing') {
        tts.speak(ttsScript);
      }
    }
  };

  return (
    <div
      className={`bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-4 shadow-lg border border-indigo-700/40 relative overflow-hidden transition-all ${className}`}
    >
      {/* Background ambient glow */}
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 relative z-10">
        {/* Left: Indicator & Status */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                ttsState === 'playing'
                  ? 'bg-amber-400 text-slate-900 shadow-md shadow-amber-400/20 animate-pulse'
                  : 'bg-indigo-800/80 text-indigo-200'
              }`}
            >
              <Volume2 className="w-5 h-5" />
            </div>
            {ttsState === 'playing' && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
            )}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-bold text-amber-400">
                Narator Audio TTS
              </span>
              <span className="text-[10px] bg-indigo-950/80 px-2 py-0.5 rounded text-indigo-300 border border-indigo-700/50">
                Bahasa Indonesia
              </span>
            </div>
            <p className="text-xs text-slate-300 font-medium">
              {ttsState === 'playing'
                ? `Membacakan Soal #${questionNumber} & Pembahasan...`
                : ttsState === 'paused'
                ? 'Narasi terjeda'
                : `Dengarkan penjelasan lengkap Soal #${questionNumber}`}
            </p>
          </div>
        </div>

        {/* Center: Controls */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          {ttsState === 'stopped' ? (
            <button
              onClick={handlePlay}
              className="flex items-center gap-2 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all active:scale-95"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              Putar Narasi
            </button>
          ) : ttsState === 'playing' ? (
            <div className="flex items-center gap-2">
              <button
                onClick={handlePause}
                className="flex items-center gap-1.5 px-3 py-2 bg-indigo-700 hover:bg-indigo-600 text-white font-semibold text-xs rounded-xl transition-all"
              >
                <Pause className="w-4 h-4 fill-white" />
                Jeda
              </button>
              <button
                onClick={handleStop}
                className="flex items-center gap-1.5 px-3 py-2 bg-rose-600/90 hover:bg-rose-600 text-white font-semibold text-xs rounded-xl transition-all"
              >
                <Square className="w-3.5 h-3.5 fill-white" />
                Berhenti
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={handleResume}
                className="flex items-center gap-1.5 px-3 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-all"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                Lanjutkan
              </button>
              <button
                onClick={handleStop}
                className="flex items-center gap-1.5 px-3 py-2 bg-rose-600/90 hover:bg-rose-600 text-white font-semibold text-xs rounded-xl transition-all"
              >
                <Square className="w-3.5 h-3.5 fill-white" />
                Berhenti
              </button>
            </div>
          )}

          {/* Quick Repeat */}
          <button
            onClick={handlePlay}
            title="Ulangi dari Awal"
            className="p-2 rounded-xl bg-indigo-950/60 hover:bg-indigo-800 text-indigo-200 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Speed Preset Buttons */}
          <div className="flex items-center bg-indigo-950/80 rounded-xl p-0.5 border border-indigo-700/50">
            {[0.8, 1.0, 1.25, 1.5].map((speed) => (
              <button
                key={speed}
                onClick={() => handleRateChange(speed)}
                className={`px-2 py-1 text-[11px] font-semibold rounded-lg transition-all ${
                  speechRate === speed
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-indigo-300 hover:text-white'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>

          {/* Settings Toggle */}
          <button
            onClick={() => setShowSettings(!showSettings)}
            title="Pengaturan Suara TTS"
            className={`p-2 rounded-xl transition-colors ${
              showSettings
                ? 'bg-indigo-600 text-white'
                : 'bg-indigo-950/60 hover:bg-indigo-800 text-indigo-200'
            }`}
          >
            <Settings2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      {ttsState !== 'stopped' && (
        <div className="mt-3 w-full bg-indigo-950/80 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-amber-400 to-amber-300 h-full transition-all duration-300"
            style={{ width: `${Math.max(5, spokenProgress)}%` }}
          />
        </div>
      )}

      {/* Voice Settings drawer */}
      {showSettings && (
        <div className="mt-3 pt-3 border-t border-indigo-800/60 flex flex-wrap items-center gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-300">Pilihan Suara:</span>
            <select
              value={selectedVoiceName}
              onChange={handleVoiceChange}
              className="bg-indigo-950 border border-indigo-700 text-white text-xs rounded-lg px-2.5 py-1.5 focus:outline-hidden focus:ring-1 focus:ring-amber-400"
            >
              {voices.map((v) => (
                <option key={v.name} value={v.name}>
                  {v.name} ({v.lang}) {v.isIndonesian ? '★ [Indonesia]' : ''}
                </option>
              ))}
            </select>
          </div>
          <span className="text-[11px] text-indigo-300 italic">
            *Menggunakan Web Speech API peramban dengan pelafalan istilah fisika dan rumus terstandarisasi.
          </span>
        </div>
      )}
    </div>
  );
};
