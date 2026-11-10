import React, { useState } from 'react';
import { Eye, FileText, Maximize2, ZoomIn, Info } from 'lucide-react';

interface CircuitViewerProps {
  questionId: string;
  diagramUrl?: string;
  diagramSvgType?: string;
  title: string;
  pageNumber: number;
}

export const CircuitViewer: React.FC<CircuitViewerProps> = ({
  questionId,
  diagramUrl,
  diagramSvgType,
  title,
  pageNumber,
}) => {
  const [viewMode, setViewMode] = useState<'svg' | 'scan'>('svg');
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // Render dedicated SVG schematic depending on diagramSvgType
  const renderSvgCircuit = () => {
    switch (diagramSvgType) {
      case 'bridge_wheatstone':
        // Soal 15: Arman's bridge
        return (
          <svg viewBox="0 0 520 260" className="w-full h-auto max-h-64 select-none">
            {/* Input wire */}
            <path d="M 20 130 L 70 130" stroke="#0284c7" strokeWidth="3" fill="none" />
            <circle cx="20" cy="130" r="4" fill="#0284c7" />
            
            {/* 40 ohm series resistor */}
            <rect x="70" y="115" width="60" height="30" rx="4" fill="#f8fafc" stroke="#334155" strokeWidth="2" />
            <text x="100" y="135" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">40 Ω</text>
            
            {/* Wire to node 1 */}
            <path d="M 130 130 L 170 130" stroke="#0284c7" strokeWidth="3" fill="none" />
            <circle cx="170" cy="130" r="5" fill="#0284c7" />

            {/* Branch up to R1 */}
            <path d="M 170 130 L 170 60 L 220 60" stroke="#0284c7" strokeWidth="3" fill="none" />
            <rect x="220" y="45" width="60" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="250" y="65" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">10 Ω (R₁)</text>

            {/* Wire between R1 and R3 */}
            <path d="M 280 60 L 320 60" stroke="#0284c7" strokeWidth="3" fill="none" />
            <circle cx="320" cy="60" r="5" fill="#2563eb" />

            {/* R3 (30 ohm) */}
            <rect x="320" y="45" width="60" height="30" rx="4" fill="#fef2f2" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 3" />
            <text x="350" y="65" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#b91c1c">30 Ω (R₃)</text>
            <path d="M 380 60 L 440 60 L 440 130" stroke="#0284c7" strokeWidth="3" fill="none" />

            {/* Branch down to R4 */}
            <path d="M 170 130 L 170 200 L 220 200" stroke="#0284c7" strokeWidth="3" fill="none" />
            <rect x="220" y="185" width="60" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="250" y="205" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">20 Ω (R₄)</text>

            {/* Wire between R4 and 20 ohm */}
            <path d="M 280 200 L 320 200" stroke="#0284c7" strokeWidth="3" fill="none" />
            <circle cx="320" cy="200" r="5" fill="#2563eb" />

            {/* Bottom right resistor (20 ohm) */}
            <rect x="320" y="185" width="60" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="350" y="205" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">20 Ω</text>
            <path d="M 380 200 L 440 200 L 440 130" stroke="#0284c7" strokeWidth="3" fill="none" />

            {/* Diagonal/Bridge R2 */}
            <path d="M 320 60 L 320 110" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />
            <rect x="290" y="110" width="60" height="30" rx="4" fill="#fffbeb" stroke="#d97706" strokeWidth="2" />
            <text x="320" y="130" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b45309">R₂</text>
            <path d="M 320 140 L 320 200" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />

            {/* Output terminal */}
            <circle cx="440" cy="130" r="5" fill="#0284c7" />
            <path d="M 440 130 L 490 130" stroke="#0284c7" strokeWidth="3" fill="none" />
            <circle cx="490" cy="130" r="4" fill="#0284c7" />

            {/* Badges/Callouts */}
            <rect x="390" y="15" width="120" height="24" rx="4" fill="#fee2e2" />
            <text x="450" y="31" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#991b1b">R₃ (30 Ω Kosong)</text>
          </svg>
        );

      case 'series_parallel_q16':
        // Soal 16: 8 ohm + (20 // 20) + 5 ohm
        return (
          <svg viewBox="0 0 520 200" className="w-full h-auto max-h-64 select-none">
            {/* Battery at top */}
            <path d="M 80 50 L 220 50" stroke="#334155" strokeWidth="2.5" fill="none" />
            <line x1="220" y1="35" x2="220" y2="65" stroke="#0f172a" strokeWidth="3" />
            <line x1="230" y1="42" x2="230" y2="58" stroke="#0f172a" strokeWidth="1.5" />
            <text x="225" y="25" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">E = 50 V, r = 2 Ω</text>
            <path d="M 230 50 L 440 50 L 440 140" stroke="#334155" strokeWidth="2.5" fill="none" />

            {/* Bottom path with resistors */}
            <path d="M 80 50 L 80 140 L 110 140" stroke="#334155" strokeWidth="2.5" fill="none" />
            {/* 8 ohm */}
            <rect x="110" y="125" width="55" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="137" y="145" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">8 Ω</text>
            <path d="M 165 140 L 195 140" stroke="#334155" strokeWidth="2.5" fill="none" />
            <circle cx="195" cy="140" r="4" fill="#2563eb" />

            {/* Parallel branch top (20 ohm) */}
            <path d="M 195 140 L 195 105 L 225 105" stroke="#334155" strokeWidth="2" fill="none" />
            <rect x="225" y="90" width="55" height="30" rx="4" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
            <text x="252" y="110" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#065f46">20 Ω</text>
            <path d="M 280 105 L 310 105 L 310 140" stroke="#334155" strokeWidth="2" fill="none" />

            {/* Parallel branch bottom (20 ohm) */}
            <path d="M 195 140 L 195 175 L 225 175" stroke="#334155" strokeWidth="2" fill="none" />
            <rect x="225" y="160" width="55" height="30" rx="4" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
            <text x="252" y="180" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#065f46">20 Ω</text>
            <path d="M 280 175 L 310 175 L 310 140" stroke="#334155" strokeWidth="2" fill="none" />
            <circle cx="310" cy="140" r="4" fill="#2563eb" />

            {/* Wire to 5 ohm */}
            <path d="M 310 140 L 340 140" stroke="#334155" strokeWidth="2.5" fill="none" />
            {/* 5 ohm */}
            <rect x="340" y="125" width="55" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="367" y="145" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">5 Ω</text>
            <path d="M 395 140 L 440 140" stroke="#334155" strokeWidth="2.5" fill="none" />

            {/* Labels */}
            <text x="137" y="175" textAnchor="middle" fontSize="11" fill="#64748b">V = 16 V</text>
            <text x="252" y="75" textAnchor="middle" fontSize="11" fill="#059669">V_p = 10 V (Terkecil)</text>
            <text x="367" y="175" textAnchor="middle" fontSize="11" fill="#64748b">V = 10 V (Terkecil)</text>
          </svg>
        );

      case 'lamps_abcd':
        // Soal 17: Lamps A, B, C, D
        return (
          <svg viewBox="0 0 520 240" className="w-full h-auto max-h-64 select-none">
            {/* Circuit source loop */}
            <path d="M 50 120 L 50 50 L 120 50" stroke="#475569" strokeWidth="2.5" fill="none" />
            {/* Lamp A (Main branch) */}
            <circle cx="150" cy="50" r="22" fill="#fef08a" stroke="#ca8a04" strokeWidth="3" />
            <text x="150" y="56" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#854d0e">A</text>
            <path d="M 172 50 L 240 50" stroke="#475569" strokeWidth="2.5" fill="none" />
            <circle cx="240" cy="50" r="5" fill="#2563eb" />

            {/* Branch 1: Lamp B */}
            <path d="M 240 50 L 240 120 L 290 120" stroke="#475569" strokeWidth="2.5" fill="none" />
            <circle cx="315" cy="120" r="20" fill="#fef9c3" stroke="#eab308" strokeWidth="2.5" />
            <text x="315" y="126" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#854d0e">B</text>
            <path d="M 335 120 L 440 120 L 440 50" stroke="#475569" strokeWidth="2.5" fill="none" />

            {/* Branch 2: Lamps C and D (Series) */}
            <path d="M 240 50 L 290 50" stroke="#475569" strokeWidth="2.5" fill="none" />
            <circle cx="315" cy="50" r="18" fill="#fefce8" stroke="#a16207" strokeWidth="2" />
            <text x="315" y="55" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#854d0e">C</text>
            <path d="M 333 50 L 365 50" stroke="#475569" strokeWidth="2" fill="none" />
            <circle cx="385" cy="50" r="18" fill="#fefce8" stroke="#a16207" strokeWidth="2" />
            <text x="385" y="55" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#854d0e">D</text>
            <path d="M 403 50 L 440 50" stroke="#475569" strokeWidth="2.5" fill="none" />

            {/* Return loop */}
            <circle cx="440" cy="50" r="5" fill="#2563eb" />
            <path d="M 440 50 L 480 50 L 480 190 L 50 190 L 50 120" stroke="#475569" strokeWidth="2.5" fill="none" />

            {/* Current indicators */}
            <text x="150" y="90" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ca8a04">I_total (Paling Terang!)</text>
            <text x="315" y="160" textAnchor="middle" fontSize="12" fill="#475569">I_B = 2/3 I_total</text>
            <text x="385" y="25" textAnchor="middle" fontSize="11" fill="#713f12">I_CD = 1/3 I_total (Paling Redup)</text>
          </svg>
        );

      case 'single_loop_q18':
        // Soal 18: R1, E1=9V, R2, E2=3V, R3
        return (
          <svg viewBox="0 0 500 200" className="w-full h-auto max-h-60 select-none">
            <path d="M 50 50 L 100 50" stroke="#334155" strokeWidth="2.5" fill="none" />
            <rect x="100" y="35" width="55" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="127" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">R₁=3/15Ω</text>
            
            <path d="M 155 50 L 220 50" stroke="#334155" strokeWidth="2.5" fill="none" />
            <line x1="220" y1="35" x2="220" y2="65" stroke="#0f172a" strokeWidth="3" />
            <line x1="228" y1="42" x2="228" y2="58" stroke="#0f172a" strokeWidth="1.5" />
            <text x="224" y="25" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">E₁ = 9V</text>

            <path d="M 228 50 L 290 50" stroke="#334155" strokeWidth="2.5" fill="none" />
            <rect x="290" y="35" width="55" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="317" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">R₂ = 5Ω</text>

            <path d="M 345 50 L 440 50 L 440 140 L 370 140" stroke="#334155" strokeWidth="2.5" fill="none" />
            
            <rect x="315" y="125" width="55" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="342" y="145" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">R₃ = 10Ω</text>

            <path d="M 315 140 L 250 140" stroke="#334155" strokeWidth="2.5" fill="none" />
            <line x1="250" y1="125" x2="250" y2="155" stroke="#0f172a" strokeWidth="3" />
            <line x1="242" y1="132" x2="242" y2="148" stroke="#0f172a" strokeWidth="1.5" />
            <text x="246" y="175" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">E₂ = 3V</text>

            <path d="M 242 140 L 50 140 L 50 50" stroke="#334155" strokeWidth="2.5" fill="none" />
          </svg>
        );

      case 'parallel_kirchhoff_q19':
        // Soal 19: R1=1.5, R2=6 // R3=6 // R4=3, E2=6V, E1=3V, R5=2
        return (
          <svg viewBox="0 0 520 220" className="w-full h-auto max-h-60 select-none">
            <path d="M 40 110 L 80 110" stroke="#334155" strokeWidth="2.5" fill="none" />
            <rect x="80" y="95" width="60" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="110" y="115" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">R₁ = 1,5 Ω</text>
            <path d="M 140 110 L 180 110" stroke="#334155" strokeWidth="2.5" fill="none" />
            <circle cx="180" cy="110" r="4" fill="#2563eb" />

            {/* Parallel 3 branches */}
            <path d="M 180 110 L 180 50 L 210 50" stroke="#334155" strokeWidth="2" fill="none" />
            <rect x="210" y="35" width="60" height="30" rx="4" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
            <text x="240" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">R₂ = 6 Ω</text>
            <path d="M 270 50 L 300 50 L 300 110" stroke="#334155" strokeWidth="2" fill="none" />

            <path d="M 180 110 L 210 110" stroke="#334155" strokeWidth="2" fill="none" />
            <rect x="210" y="95" width="60" height="30" rx="4" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
            <text x="240" y="115" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">R₃ = 6 Ω</text>
            <path d="M 270 110 L 300 110" stroke="#334155" strokeWidth="2" fill="none" />

            <path d="M 180 110 L 180 170 L 210 170" stroke="#334155" strokeWidth="2" fill="none" />
            <rect x="210" y="155" width="60" height="30" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
            <text x="240" y="175" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b45309">R₄ = 3 Ω</text>
            <path d="M 270 170 L 300 170 L 300 110" stroke="#334155" strokeWidth="2" fill="none" />
            <circle cx="300" cy="110" r="4" fill="#2563eb" />

            {/* Right battery E2=6V */}
            <path d="M 300 110 L 370 110" stroke="#334155" strokeWidth="2.5" fill="none" />
            <line x1="370" y1="95" x2="370" y2="125" stroke="#0f172a" strokeWidth="3" />
            <line x1="378" y1="102" x2="378" y2="118" stroke="#0f172a" strokeWidth="1.5" />
            <text x="374" y="85" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">E₂ = 6 V</text>
            <path d="M 378 110 L 440 110 L 440 200 L 290 200" stroke="#334155" strokeWidth="2.5" fill="none" />

            {/* Bottom loop with E1=3V and R5=2 */}
            <line x1="290" y1="188" x2="290" y2="212" stroke="#0f172a" strokeWidth="3" />
            <line x1="282" y1="193" x2="282" y2="207" stroke="#0f172a" strokeWidth="1.5" />
            <text x="286" y="180" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">E₁ = 3 V</text>
            <path d="M 282 200 L 230 200" stroke="#334155" strokeWidth="2.5" fill="none" />

            <rect x="170" y="185" width="60" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="200" y="205" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">R₅ = 2 Ω</text>
            <path d="M 170 200 L 40 200 L 40 110" stroke="#334155" strokeWidth="2.5" fill="none" />
          </svg>
        );

      case 'two_loop_q20':
        // Soal 20: Multiloop nodes A, B, C, D, E, F
        return (
          <svg viewBox="0 0 520 220" className="w-full h-auto max-h-60 select-none">
            {/* Top row: A to B has battery 6V, B to C has R3=200 */}
            <circle cx="80" cy="50" r="4" fill="#2563eb" />
            <text x="80" y="38" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">A</text>
            <path d="M 80 50 L 150 50" stroke="#334155" strokeWidth="2.5" fill="none" />
            <line x1="150" y1="35" x2="150" y2="65" stroke="#0f172a" strokeWidth="3" />
            <line x1="158" y1="42" x2="158" y2="58" stroke="#0f172a" strokeWidth="1.5" />
            <text x="154" y="28" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">6 V</text>
            <path d="M 158 50 L 240 50" stroke="#334155" strokeWidth="2.5" fill="none" />
            <circle cx="240" cy="50" r="4" fill="#2563eb" />
            <text x="240" y="38" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">B</text>

            <rect x="280" y="35" width="70" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="315" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">R₃ = 200 Ω</text>
            <path d="M 240 50 L 280 50" stroke="#334155" strokeWidth="2.5" fill="none" />
            <path d="M 350 50 L 420 50" stroke="#334155" strokeWidth="2.5" fill="none" />
            <circle cx="420" cy="50" r="4" fill="#2563eb" />
            <text x="420" y="38" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">C</text>

            {/* Vertical resistors: A to D has R1=100, B to E has R2=400, C to F has R4=200 */}
            <path d="M 80 50 L 80 80" stroke="#334155" strokeWidth="2.5" fill="none" />
            <rect x="45" y="80" width="70" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="80" y="100" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">R₁ = 100 Ω</text>
            <path d="M 80 110 L 80 170" stroke="#334155" strokeWidth="2.5" fill="none" />
            <circle cx="80" cy="170" r="4" fill="#2563eb" />
            <text x="80" y="190" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">D</text>

            <path d="M 240 50 L 240 80" stroke="#334155" strokeWidth="2.5" fill="none" />
            <rect x="205" y="80" width="70" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="240" y="100" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">R₂ = 400 Ω</text>
            <path d="M 240 110 L 240 170" stroke="#334155" strokeWidth="2.5" fill="none" />
            <circle cx="240" cy="170" r="4" fill="#2563eb" />
            <text x="240" y="190" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">E</text>

            <path d="M 420 50 L 420 80" stroke="#334155" strokeWidth="2.5" fill="none" />
            <rect x="385" y="80" width="70" height="30" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
            <text x="420" y="100" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#b45309">R₄ = 200 Ω</text>
            <path d="M 420 110 L 420 170" stroke="#334155" strokeWidth="2.5" fill="none" />
            <circle cx="420" cy="170" r="4" fill="#2563eb" />
            <text x="420" y="190" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">F</text>

            {/* Bottom row: D to E has 3V battery, E to F wire */}
            <path d="M 80 170 L 150 170" stroke="#334155" strokeWidth="2.5" fill="none" />
            <line x1="150" y1="155" x2="150" y2="185" stroke="#0f172a" strokeWidth="3" />
            <line x1="158" y1="162" x2="158" y2="178" stroke="#0f172a" strokeWidth="1.5" />
            <text x="154" y="202" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">3 V</text>
            <path d="M 158 170 L 240 170 L 420 170" stroke="#334155" strokeWidth="2.5" fill="none" />
          </svg>
        );

      case 'two_loop_q21':
        // Soal 21: Voltmeter on R2
        return (
          <svg viewBox="0 0 520 220" className="w-full h-auto max-h-60 select-none">
            <circle cx="80" cy="60" r="4" fill="#2563eb" />
            <text x="80" y="48" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">A</text>
            
            <rect x="130" y="45" width="60" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="160" y="65" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">R₂ = 2 Ω</text>
            <path d="M 80 60 L 130 60" stroke="#334155" strokeWidth="2.5" fill="none" />
            <path d="M 190 60 L 260 60" stroke="#334155" strokeWidth="2.5" fill="none" />

            {/* Voltmeter across R2 */}
            <path d="M 110 60 L 110 25 L 145 25" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
            <circle cx="160" cy="25" r="14" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.5" />
            <text x="160" y="30" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">V</text>
            <path d="M 175 25 L 210 25 L 210 60" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />

            <circle cx="260" cy="60" r="4" fill="#2563eb" />
            <text x="260" y="48" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">B</text>

            <path d="M 260 60 L 420 60" stroke="#334155" strokeWidth="2.5" fill="none" />
            <circle cx="420" cy="60" r="4" fill="#2563eb" />
            <text x="420" y="48" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">C</text>

            {/* Vertical: A-D R1=2, B-E R3=2, C-F 12V */}
            <rect x="50" y="95" width="60" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="80" y="115" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">R₁ = 2 Ω</text>
            <path d="M 80 60 L 80 95" stroke="#334155" strokeWidth="2.5" fill="none" />
            <path d="M 80 125 L 80 170" stroke="#334155" strokeWidth="2.5" fill="none" />
            <circle cx="80" cy="170" r="4" fill="#2563eb" />
            <text x="80" y="190" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">D</text>

            <rect x="230" y="95" width="60" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="260" y="115" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">R₃ = 2 Ω</text>
            <path d="M 260 60 L 260 95" stroke="#334155" strokeWidth="2.5" fill="none" />
            <path d="M 260 125 L 260 170" stroke="#334155" strokeWidth="2.5" fill="none" />
            <circle cx="260" cy="170" r="4" fill="#2563eb" />
            <text x="260" y="190" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">E</text>

            <path d="M 420 60 L 420 100" stroke="#334155" strokeWidth="2.5" fill="none" />
            <line x1="405" y1="100" x2="435" y2="100" stroke="#0f172a" strokeWidth="3" />
            <line x1="412" y1="108" x2="428" y2="108" stroke="#0f172a" strokeWidth="1.5" />
            <text x="445" y="108" textAnchor="start" fontSize="11" fontWeight="bold" fill="#0f172a">12 V</text>
            <path d="M 420 108 L 420 170" stroke="#334155" strokeWidth="2.5" fill="none" />
            <circle cx="420" cy="170" r="4" fill="#2563eb" />
            <text x="420" y="190" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">F</text>

            {/* Bottom D-E 12V, E-F R4=2 */}
            <path d="M 80 170 L 150 170" stroke="#334155" strokeWidth="2.5" fill="none" />
            <line x1="150" y1="155" x2="150" y2="185" stroke="#0f172a" strokeWidth="3" />
            <line x1="158" y1="162" x2="158" y2="178" stroke="#0f172a" strokeWidth="1.5" />
            <text x="154" y="202" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">12 V</text>
            <path d="M 158 170 L 260 170 L 310 170" stroke="#334155" strokeWidth="2.5" fill="none" />

            <rect x="310" y="155" width="60" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="340" y="175" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">R₄ = 2 Ω</text>
            <path d="M 370 170 L 420 170" stroke="#334155" strokeWidth="2.5" fill="none" />
          </svg>
        );

      case 'three_branch_ab_q23':
        // Soal 23: E1=12V, E2=6V, E3=18V across AB
        return (
          <svg viewBox="0 0 520 220" className="w-full h-auto max-h-60 select-none">
            {/* Node A and Node B */}
            <circle cx="100" cy="110" r="6" fill="#2563eb" />
            <text x="80" y="115" textAnchor="end" fontSize="14" fontWeight="bold" fill="#1e40af">Titik A</text>

            <circle cx="420" cy="110" r="6" fill="#2563eb" />
            <text x="440" y="115" textAnchor="start" fontSize="14" fontWeight="bold" fill="#1e40af">Titik B</text>

            {/* Top branch: E1=12V, R1=4, R2=4 */}
            <path d="M 100 110 L 100 45 L 150 45" stroke="#334155" strokeWidth="2.5" fill="none" />
            <line x1="150" y1="30" x2="150" y2="60" stroke="#0f172a" strokeWidth="3" />
            <line x1="158" y1="37" x2="158" y2="53" stroke="#0f172a" strokeWidth="1.5" />
            <text x="154" y="24" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">E₁ = 12 V</text>
            <path d="M 158 45 L 200 45" stroke="#334155" strokeWidth="2.5" fill="none" />
            <rect x="200" y="30" width="55" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="227" y="50" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">R₁ = 4 Ω</text>
            <path d="M 255 45 L 295 45" stroke="#334155" strokeWidth="2.5" fill="none" />
            <rect x="295" y="30" width="55" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="322" y="50" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">R₂ = 4 Ω</text>
            <path d="M 350 45 L 420 45 L 420 110" stroke="#334155" strokeWidth="2.5" fill="none" />

            {/* Middle branch: R3=4, E2=6V */}
            <path d="M 100 110 L 190 110" stroke="#334155" strokeWidth="2.5" fill="none" />
            <rect x="190" y="95" width="55" height="30" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
            <text x="217" y="115" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#b45309">R₃ = 4 Ω</text>
            <path d="M 245 110 L 300 110" stroke="#334155" strokeWidth="2.5" fill="none" />
            <line x1="300" y1="95" x2="300" y2="125" stroke="#0f172a" strokeWidth="3" />
            <line x1="308" y1="102" x2="308" y2="118" stroke="#0f172a" strokeWidth="1.5" />
            <text x="304" y="90" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">E₂ = 6 V</text>
            <path d="M 308 110 L 420 110" stroke="#334155" strokeWidth="2.5" fill="none" />

            {/* Bottom branch: R4=6, E3=18V, R5=6 */}
            <path d="M 100 110 L 100 175 L 140 175" stroke="#334155" strokeWidth="2.5" fill="none" />
            <rect x="140" y="160" width="55" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="167" y="180" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">R₄ = 6 Ω</text>
            <path d="M 195 175 L 245 175" stroke="#334155" strokeWidth="2.5" fill="none" />
            <line x1="245" y1="160" x2="245" y2="190" stroke="#0f172a" strokeWidth="3" />
            <line x1="253" y1="167" x2="253" y2="183" stroke="#0f172a" strokeWidth="1.5" />
            <text x="249" y="205" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">E₃ = 18 V</text>
            <path d="M 253 175 L 305 175" stroke="#334155" strokeWidth="2.5" fill="none" />
            <rect x="305" y="160" width="55" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="332" y="180" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">R₅ = 6 Ω</text>
            <path d="M 360 175 L 420 175 L 420 110" stroke="#334155" strokeWidth="2.5" fill="none" />
          </svg>
        );

      case 'bridge_network_qb2':
        // Soal B.2: 7-resistor bridge network
        return (
          <svg viewBox="0 0 520 220" className="w-full h-auto max-h-60 select-none">
            <circle cx="50" cy="110" r="5" fill="#2563eb" />
            <text x="50" y="95" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2563eb">A</text>
            
            {/* R1 = 8 ohm */}
            <path d="M 50 110 L 90 110" stroke="#334155" strokeWidth="2.5" fill="none" />
            <rect x="90" y="95" width="55" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="117" y="115" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">R₁ = 8 Ω</text>
            <path d="M 145 110 L 180 110" stroke="#334155" strokeWidth="2.5" fill="none" />
            <circle cx="180" cy="110" r="4" fill="#2563eb" />
            <text x="180" y="95" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">B</text>

            {/* Top arm R3=4 and R7=4 */}
            <path d="M 180 110 L 180 50 L 220 50" stroke="#334155" strokeWidth="2" fill="none" />
            <rect x="220" y="35" width="55" height="30" rx="4" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
            <text x="247" y="55" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">R₃ = 4 Ω</text>
            <path d="M 275 50 L 310 50" stroke="#334155" strokeWidth="2" fill="none" />
            <rect x="310" y="35" width="55" height="30" rx="4" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
            <text x="337" y="55" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">R₇ = 4 Ω</text>
            <path d="M 365 50 L 400 50 L 400 110" stroke="#334155" strokeWidth="2" fill="none" />

            {/* Bottom arm R2=4 and R6=4 */}
            <path d="M 180 110 L 180 170 L 220 170" stroke="#334155" strokeWidth="2" fill="none" />
            <rect x="220" y="155" width="55" height="30" rx="4" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
            <text x="247" y="175" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">R₂ = 4 Ω</text>
            <path d="M 275 170 L 310 170" stroke="#334155" strokeWidth="2" fill="none" />
            <rect x="310" y="155" width="55" height="30" rx="4" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
            <text x="337" y="175" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">R₆ = 4 Ω</text>
            <path d="M 365 170 L 400 170 L 400 110" stroke="#334155" strokeWidth="2" fill="none" />

            {/* Central Bridge R4=12 and R5=12 */}
            <path d="M 292 50 L 292 90" stroke="#d97706" strokeWidth="2" strokeDasharray="3 3" fill="none" />
            <rect x="267" y="90" width="50" height="24" rx="4" fill="#fffbeb" stroke="#d97706" strokeWidth="1.5" />
            <text x="292" y="106" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#b45309">12 Ω</text>
            <path d="M 292 114 L 292 170" stroke="#d97706" strokeWidth="2" strokeDasharray="3 3" fill="none" />

            {/* Node D */}
            <circle cx="400" cy="110" r="5" fill="#2563eb" />
            <text x="400" y="95" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2563eb">D</text>
            
            <path d="M 400 110 L 470 110" stroke="#334155" strokeWidth="2.5" fill="none" />
            <circle cx="470" cy="110" r="4" fill="#2563eb" />
            <text x="470" y="95" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">E</text>

            {/* 20V source notation */}
            <text x="260" y="210" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Sumber Tegangan: V = 20 Volt</text>
          </svg>
        );

      case 'meters_two_loop_qb3':
        // Soal B.3: Voltmeter across R1, Amperemeter on R5
        return (
          <svg viewBox="0 0 520 230" className="w-full h-auto max-h-64 select-none">
            {/* Voltmeter on R1 (left) */}
            <path d="M 70 80 L 70 40 L 105 40" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
            <circle cx="120" cy="40" r="14" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.5" />
            <text x="120" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">V</text>
            <path d="M 135 40 L 170 40 L 170 80" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />

            {/* R1 = 20 ohm */}
            <path d="M 50 80 L 90 80" stroke="#334155" strokeWidth="2.5" fill="none" />
            <rect x="90" y="65" width="60" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="120" y="85" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">R₁ = 20 Ω</text>
            <path d="M 150 80 L 220 80" stroke="#334155" strokeWidth="2.5" fill="none" />

            {/* R2 = 20 ohm */}
            <rect x="220" y="65" width="60" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="250" y="85" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">R₂ = 20 Ω</text>
            <path d="M 280 80 L 330 80" stroke="#334155" strokeWidth="2.5" fill="none" />
            <circle cx="330" cy="80" r="4" fill="#2563eb" />

            {/* Parallel R3=40 // R4=40 */}
            <path d="M 330 80 L 330 50 L 360 50" stroke="#334155" strokeWidth="2" fill="none" />
            <rect x="360" y="35" width="60" height="30" rx="4" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
            <text x="390" y="55" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">R₃ = 40 Ω</text>
            <path d="M 420 50 L 450 50 L 450 80" stroke="#334155" strokeWidth="2" fill="none" />

            <path d="M 330 80 L 330 110 L 360 110" stroke="#334155" strokeWidth="2" fill="none" />
            <rect x="360" y="95" width="60" height="30" rx="4" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
            <text x="390" y="115" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">R₄ = 40 Ω</text>
            <path d="M 420 110 L 450 110 L 450 80" stroke="#334155" strokeWidth="2" fill="none" />
            <circle cx="450" cy="80" r="4" fill="#2563eb" />

            {/* Right battery E2=9V, r2=0.5 */}
            <path d="M 450 80 L 490 80 L 490 180 L 430 180" stroke="#334155" strokeWidth="2.5" fill="none" />
            <line x1="430" y1="165" x2="430" y2="195" stroke="#0f172a" strokeWidth="3" />
            <line x1="422" y1="172" x2="422" y2="188" stroke="#0f172a" strokeWidth="1.5" />
            <text x="426" y="210" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">E₂ = 9V, r₂ = 0,5Ω</text>
            <path d="M 422 180 L 360 180" stroke="#334155" strokeWidth="2.5" fill="none" />

            {/* R5 = 20 ohm and Amperemeter */}
            <rect x="300" y="165" width="60" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="330" y="185" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">R₅ = 20 Ω</text>
            
            <path d="M 300 180 L 260 180" stroke="#334155" strokeWidth="2.5" fill="none" />
            <circle cx="240" cy="180" r="14" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="240" y="185" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">A</text>
            <path d="M 226 180 L 160 180" stroke="#334155" strokeWidth="2.5" fill="none" />

            {/* Left battery E1=6V, r1=0.5 */}
            <line x1="160" y1="165" x2="160" y2="195" stroke="#0f172a" strokeWidth="3" />
            <line x1="152" y1="172" x2="152" y2="188" stroke="#0f172a" strokeWidth="1.5" />
            <text x="156" y="210" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">E₁ = 6V, r₁ = 0,5Ω</text>
            <path d="M 152 180 L 50 180 L 50 80" stroke="#334155" strokeWidth="2.5" fill="none" />
          </svg>
        );

      case 'series_circuit_q30':
        // Soal 30: A-R1-B-R2-C-R3-D with battery 20V, r=1
        return (
          <svg viewBox="0 0 520 180" className="w-full h-auto max-h-56 select-none">
            <path d="M 40 60 L 70 60" stroke="#334155" strokeWidth="2.5" fill="none" />
            <circle cx="70" cy="60" r="4" fill="#2563eb" />
            <text x="70" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">A</text>

            <rect x="90" y="45" width="55" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="117" y="65" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">R₁ = 3 Ω</text>

            <path d="M 145 60 L 180 60" stroke="#334155" strokeWidth="2.5" fill="none" />
            <circle cx="180" cy="60" r="4" fill="#2563eb" />
            <text x="180" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">B</text>

            <rect x="200" y="45" width="55" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="227" y="65" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">R₂ = 4 Ω</text>

            <path d="M 255 60 L 290 60" stroke="#334155" strokeWidth="2.5" fill="none" />
            <circle cx="290" cy="60" r="4" fill="#2563eb" />
            <text x="290" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">C</text>

            <rect x="310" y="45" width="55" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <text x="337" y="65" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">R₃ = 2 Ω</text>

            <path d="M 365 60 L 400 60" stroke="#334155" strokeWidth="2.5" fill="none" />
            <circle cx="400" cy="60" r="4" fill="#2563eb" />
            <text x="400" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">D</text>

            <path d="M 400 60 L 450 60 L 450 130 L 280 130" stroke="#334155" strokeWidth="2.5" fill="none" />
            
            {/* Battery */}
            <line x1="280" y1="115" x2="280" y2="145" stroke="#0f172a" strokeWidth="3" />
            <line x1="270" y1="122" x2="270" y2="138" stroke="#0f172a" strokeWidth="1.5" />
            <text x="275" y="165" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">ε = 20 V, r = 1 Ω</text>

            <path d="M 270 130 L 40 130 L 40 60" stroke="#334155" strokeWidth="2.5" fill="none" />
          </svg>
        );

      default:
        // Generic fallback or diagramUrl direct view
        return null;
    }
  };

  const hasSvg = Boolean(diagramSvgType && renderSvgCircuit());

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-slate-200 gap-2">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-indigo-600" />
          <span className="text-xs font-bold text-slate-700 tracking-wide uppercase">
            Ilustrasi & Stimulus Visual
          </span>
          <span className="text-xs px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-mono">
            Hal. {pageNumber}
          </span>
        </div>

        {/* View toggle tabs if both svg and scan exist */}
        <div className="flex items-center gap-1.5">
          {hasSvg && (
            <button
              onClick={() => setViewMode('svg')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                viewMode === 'svg'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-100'
              }`}
            >
              Diagram Digital HD
            </button>
          )}

          {diagramUrl && (
            <button
              onClick={() => setViewMode('scan')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                viewMode === 'scan' || !hasSvg
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Scan Asli PR
            </button>
          )}

          <button
            onClick={() => setIsZoomOpen(true)}
            title="Perbesar Tampilan"
            className="p-1 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors ml-1"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main visual display area */}
      <div className="p-4 flex items-center justify-center bg-radial from-slate-50 to-white min-h-[180px]">
        {viewMode === 'svg' && hasSvg ? (
          <div className="w-full max-w-lg mx-auto py-2">
            {renderSvgCircuit()}
            <p className="text-center text-xs text-slate-400 mt-2 flex items-center justify-center gap-1">
              <Info className="w-3.5 h-3.5 text-indigo-400" />
              Diagram skematik presisi berbasis vektor SVG
            </p>
          </div>
        ) : (
          diagramUrl && (
            <div className="relative group max-w-md mx-auto">
              <img
                src={diagramUrl}
                alt={title}
                className="max-h-72 w-auto object-contain rounded-lg border border-slate-200 shadow-xs cursor-pointer group-hover:opacity-95 transition-all"
                onClick={() => setIsZoomOpen(true)}
              />
              <button
                onClick={() => setIsZoomOpen(true)}
                className="absolute inset-0 m-auto w-28 h-8 bg-slate-900/80 text-white text-xs font-medium rounded-full flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                Klik Zoom
              </button>
            </div>
          )
        )}
      </div>

      {/* Modal Zoom Preview */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-auto flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between w-full pb-3 border-b border-slate-200 mb-4">
              <h4 className="font-bold text-slate-800 text-sm">
                Detail Stimulus & Skema Rangkaian (Hal. {pageNumber})
              </h4>
              <button
                onClick={() => setIsZoomOpen(false)}
                className="text-xs font-semibold px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg"
              >
                Tutup (Esc)
              </button>
            </div>

            <div className="w-full flex flex-col items-center gap-4">
              {diagramUrl && (
                <div className="w-full text-center">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                    Scan Dokumen Asli Buku PR Fisika
                  </span>
                  <img
                    src={diagramUrl}
                    alt="Scan Asli"
                    className="max-h-[60vh] w-auto mx-auto object-contain rounded-lg border border-slate-300 shadow-md"
                  />
                </div>
              )}

              {hasSvg && (
                <div className="w-full border-t border-slate-100 pt-4 text-center">
                  <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider block mb-2">
                    Diagram Vektor HD
                  </span>
                  <div className="max-w-xl mx-auto">{renderSvgCircuit()}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
