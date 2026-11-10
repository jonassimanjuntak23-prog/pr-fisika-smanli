export type QuestionType = 'multiple_choice' | 'essay';

export interface OptionItem {
  key: string; // 'a' | 'b' | 'c' | 'd' | 'e'
  text: string;
}

export interface FormulaItem {
  label: string;
  latex: string;
  description: string;
  symbols: { symbol: string; name: string; unit: string }[];
}

export interface ExplanationData {
  identifikasi: string;
  diketahui: string[];
  ditanyakan: string;
  konsep: string;
  rumus: FormulaItem[];
  langkahPenyelesaian: {
    tahap: string;
    penjelasan: string;
    latex?: string;
  }[];
  analisisJawabanBenar: string;
  analisisPilihanLain?: {
    opsi: string;
    alasan: string;
  }[];
  kesimpulan: string;
}

export interface QuestionItem {
  id: string; // 'q15', 'q16', ..., 'q30', 'qb1', 'qb2', 'qb3'
  number: number | string; // 15 or 'B.1'
  section: 'A' | 'B';
  type: QuestionType;
  isHots: boolean;
  topic: string;
  title: string;
  stimulusText?: string;
  questionText: string;
  diagramUrl?: string;
  diagramSvgType?: string;
  pageNumber: number;
  options?: OptionItem[];
  correctKey: string;
  explanation: ExplanationData;
  ttsScript: string;
}

export interface UserAnswerState {
  selectedKey?: string;
  isSubmitted: boolean;
  isCorrect?: boolean;
}
