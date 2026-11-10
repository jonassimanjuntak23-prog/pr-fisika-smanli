/**
 * Pure physics calculation functions for Direct Current (Listrik Arus Searah)
 */

/**
 * Menghitung hambatan pengganti rangkaian paralel
 */
export function calculateParallel(resistors: number[]): number {
  if (resistors.length === 0) return 0;
  if (resistors.some(r => r <= 0)) throw new Error('Resistor value must be positive');
  const sumInv = resistors.reduce((acc, r) => acc + (1 / r), 0);
  return 1 / sumInv;
}

/**
 * Menghitung hambatan pengganti rangkaian seri
 */
export function calculateSeries(resistors: number[]): number {
  return resistors.reduce((sum, r) => sum + r, 0);
}

/**
 * Menghitung nilai R3 agar Jembatan Wheatstone seimbang:
 * R1 * R_bawah_kanan = R_bawah_kiri * R3
 * => R3 = (R1 * R_bawah_kanan) / R_bawah_kiri
 */
export function calculateWheatstoneBalance(
  rTopLeft: number,
  rBottomLeft: number,
  rBottomRight: number
): number {
  if (rBottomLeft <= 0) throw new Error('Bottom left resistor must be positive');
  return (rTopLeft * rBottomRight) / rBottomLeft;
}

/**
 * Hukum Ohm: I = V / R
 */
export function calculateCurrent(voltage: number, totalResistance: number): number {
  if (totalResistance <= 0) throw new Error('Resistance must be positive');
  return voltage / totalResistance;
}

/**
 * Beda potensial: V = I * R
 */
export function calculateVoltageDrop(current: number, resistance: number): number {
  return current * resistance;
}

/**
 * Daya listrik: P = I^2 * R
 */
export function calculatePower(current: number, resistance: number): number {
  return current * current * resistance;
}

/**
 * Daya listrik: P = V^2 / R
 */
export function calculatePowerFromVoltage(voltage: number, resistance: number): number {
  if (resistance <= 0) throw new Error('Resistance must be positive');
  return (voltage * voltage) / resistance;
}

/**
 * Energi listrik: W = P * t (Joule)
 */
export function calculateEnergyJoules(power: number, timeSeconds: number): number {
  return power * timeSeconds;
}

/**
 * Konversi Joule ke kalori
 * 1 kalori = 4,2 J (atau 1 J = 0,24 kal)
 */
export function convertJoulesToCalories(joules: number, standardFactor: number = 4.2): number {
  return joules / standardFactor;
}

/**
 * Hambatan kawat konduktor: R = rho * (L / A)
 * rho: ohm meter
 * L: meter
 * A: meter persegi (m^2)
 */
export function calculateWireResistance(resistivity: number, length: number, areaSquareMeters: number): number {
  if (areaSquareMeters <= 0) throw new Error('Cross-sectional area must be positive');
  return resistivity * (length / areaSquareMeters);
}

/**
 * Menghitung kenaikan suhu air dari energi listrik (Asas Black):
 * Q = m * c * Delta_T => Delta_T = Q / (m * c)
 */
export function calculateWaterHeatingDeltaT(
  energyJoules: number,
  massKg: number,
  specificHeatJPerKgC: number = 4200
): number {
  if (massKg <= 0 || specificHeatJPerKgC <= 0) throw new Error('Mass and specific heat must be positive');
  return energyJoules / (massKg * specificHeatJPerKgC);
}

/**
 * Energi power bank (Joule): W = Q * V
 * Q = kapasitas (mAh) * 10^-3 * 3600 (Coulomb)
 */
export function calculatePowerBankEnergy(capacityMilliampHours: number, voltage: number): number {
  const chargeCoulombs = (capacityMilliampHours / 1000) * 3600;
  return chargeCoulombs * voltage;
}

/**
 * Perhitungan rangkaian lampu A, B, C, D (Soal 17):
 * R_A = R
 * R_B = R
 * R_C = R, R_D = R (seri: R_CD = 2R)
 * Cabang B dan CD paralel:
 * I_B : I_CD = 2 : 1
 */
export function calculateLampCurrentRatios(): {
  iA_ratio: number;
  iB_ratio: number;
  iC_ratio: number;
  iD_ratio: number;
} {
  const iTotal = 1.0;
  const iB = (2 / 3) * iTotal;
  const iC = (1 / 3) * iTotal;
  const iD = (1 / 3) * iTotal;
  return {
    iA_ratio: iTotal,
    iB_ratio: iB,
    iC_ratio: iC,
    iD_ratio: iD,
  };
}
