/**
 * Web Speech API helper tailored for Indonesian physics textbook reading
 */

export interface VoiceOption {
  voice: SpeechSynthesisVoice;
  name: string;
  lang: string;
  isIndonesian: boolean;
}

export type TtsState = 'stopped' | 'playing' | 'paused';

class TtsManager {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private state: TtsState = 'stopped';
  private rate: number = 1.0;
  private pitch: number = 1.0;
  private selectedVoice: SpeechSynthesisVoice | null = null;
  private onStateChangeCallbacks: Set<(state: TtsState) => void> = new Set();
  private onBoundaryCallbacks: Set<(charIndex: number, textLength: number) => void> = new Set();
  private voicesLoaded: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => {
          this.initVoices();
        };
      }
    }
  }

  private initVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    if (voices.length > 0) {
      this.voicesLoaded = true;
      // Prefer Indonesian voices (id-ID or id)
      const idVoice = voices.find(v => v.lang.startsWith('id') || v.lang.includes('ID') || v.name.toLowerCase().includes('indonesia'));
      if (idVoice && !this.selectedVoice) {
        this.selectedVoice = idVoice;
      }
    }
  }

  public getAvailableVoices(): VoiceOption[] {
    if (!this.synth) return [];
    const voices = this.synth.getVoices();
    return voices.map(v => ({
      voice: v,
      name: v.name,
      lang: v.lang,
      isIndonesian: v.lang.startsWith('id') || v.name.toLowerCase().includes('indonesia'),
    }));
  }

  public setVoice(voice: SpeechSynthesisVoice) {
    this.selectedVoice = voice;
  }

  public setRate(newRate: number) {
    this.rate = Math.max(0.5, Math.min(2.0, newRate));
    if (this.state === 'playing') {
      // Re-trigger with new rate seamlessly if needed
    }
  }

  public getRate(): number {
    return this.rate;
  }

  public getState(): TtsState {
    return this.state;
  }

  public subscribeState(cb: (state: TtsState) => void): () => void {
    this.onStateChangeCallbacks.add(cb);
    cb(this.state);
    return () => this.onStateChangeCallbacks.delete(cb);
  }

  public subscribeBoundary(cb: (charIndex: number, textLength: number) => void): () => void {
    this.onBoundaryCallbacks.add(cb);
    return () => this.onBoundaryCallbacks.delete(cb);
  }

  private notifyState(state: TtsState) {
    this.state = state;
    this.onStateChangeCallbacks.forEach(cb => cb(state));
  }

  /**
   * Preprocesses text to make physics equations and numbers sound natural in Indonesian
   */
  public cleanPhysicsTextForSpeech(rawText: string): string {
    return rawText
      .replace(/Ω/g, ' Ohm ')
      .replace(/(\d+)\s*V\b/g, '$1 Volt')
      .replace(/(\d+)\s*W\b/g, '$1 Watt')
      .replace(/(\d+)\s*A\b/g, '$1 Ampere')
      .replace(/(\d+)\s*J\b/g, '$1 Joule')
      .replace(/(\d+)\s*kJ\b/g, '$1 kilo Joule')
      .replace(/(\d+)\s*mAh\b/g, '$1 mili Ampere jam')
      .replace(/(\d+)\s*mm²\b/g, '$1 milimeter persegi')
      .replace(/(\d+)\s*m²\b/g, '$1 meter persegi')
      .replace(/(\d+)\s*°C\b/g, '$1 derajat Celsius')
      .replace(/10\^([0-9\-]+)/g, 'sepuluh pangkat $1')
      .replace(/10⁻⁸/g, 'sepuluh pangkat minus delapan')
      .replace(/10⁻⁶/g, 'sepuluh pangkat minus enam')
      .replace(/10⁻³/g, 'sepuluh pangkat minus tiga')
      .replace(/10⁵/g, 'sepuluh pangkat lima')
      .replace(/10⁴/g, 'sepuluh pangkat empat')
      .replace(/×/g, ' dikali ')
      .replace(/\//g, ' dibagi ')
      .replace(/ΔT/g, ' delta T ')
      .replace(/ε/g, ' gaya gerak listrik epsilon ')
      .replace(/Σ/g, ' sigma ')
      .replace(/R₁/g, ' R satu ')
      .replace(/R₂/g, ' R dua ')
      .replace(/R₃/g, ' R tiga ')
      .replace(/R₄/g, ' R empat ')
      .replace(/R₅/g, ' R lima ')
      .replace(/E₁/g, ' E satu ')
      .replace(/E₂/g, ' E dua ')
      .replace(/E₃/g, ' E tiga ')
      .replace(/r₁/g, ' r satu ')
      .replace(/r₂/g, ' r dua ')
      .replace(/\+/g, ' ditambah ')
      .replace(/=/g, ' sama dengan ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  public speak(text: string) {
    if (!this.synth) return;

    this.stop();

    const spokenText = this.cleanPhysicsTextForSpeech(text);
    const utterance = new SpeechSynthesisUtterance(spokenText);

    // Apply voice
    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
      utterance.lang = this.selectedVoice.lang;
    } else {
      utterance.lang = 'id-ID';
    }

    utterance.rate = this.rate;
    utterance.pitch = this.pitch;

    utterance.onstart = () => {
      this.notifyState('playing');
    };

    utterance.onpause = () => {
      this.notifyState('paused');
    };

    utterance.onresume = () => {
      this.notifyState('playing');
    };

    utterance.onend = () => {
      this.notifyState('stopped');
      this.currentUtterance = null;
    };

    utterance.onerror = (e) => {
      console.warn('TTS utterance error:', e);
      this.notifyState('stopped');
      this.currentUtterance = null;
    };

    utterance.onboundary = (e) => {
      this.onBoundaryCallbacks.forEach(cb => cb(e.charIndex, spokenText.length));
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public pause() {
    if (this.synth && this.state === 'playing') {
      this.synth.pause();
      this.notifyState('paused');
    }
  }

  public resume() {
    if (this.synth && this.state === 'paused') {
      this.synth.resume();
      this.notifyState('playing');
    }
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
      this.notifyState('stopped');
      this.currentUtterance = null;
    }
  }
}

export const tts = new TtsManager();
