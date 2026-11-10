import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateParallel,
  calculateSeries,
  calculateWheatstoneBalance,
  calculateCurrent,
  calculateVoltageDrop,
  calculatePower,
  calculatePowerFromVoltage,
  calculateEnergyJoules,
  convertJoulesToCalories,
  calculateWireResistance,
  calculateWaterHeatingDeltaT,
  calculatePowerBankEnergy,
  calculateLampCurrentRatios,
} from './physicsCalculations';

test('calculateParallel: dua resistor 20 ohm paralel menghasilkan 10 ohm (Soal 16)', () => {
  const rp = calculateParallel([20, 20]);
  assert.equal(rp, 10);
});

test('calculateParallel: tiga resistor 6, 6, 3 ohm paralel menghasilkan 1.5 ohm (Soal 19)', () => {
  const rp = calculateParallel([6, 6, 3]);
  assert.equal(rp, 1.5);
});

test('calculateSeries: total resistor luar Soal 16', () => {
  const rLuar = calculateSeries([8, 10, 5]);
  assert.equal(rLuar, 23);
});

test('calculateWheatstoneBalance: kondisi jembatan seimbang untuk R1=10, R_BL=20, R_BR=20', () => {
  const r3 = calculateWheatstoneBalance(10, 20, 20);
  assert.equal(r3, 10);
});

test('Soal 18: rasio arus sebelum dan sesudah penggantian R1', () => {
  const rTotal1 = calculateSeries([3, 5, 10]); // 18
  const rTotal2 = calculateSeries([15, 5, 10]); // 30
  const ratio = rTotal2 / rTotal1;
  assert.equal(Math.round(ratio * 100) / 100, Math.round((5 / 3) * 100) / 100);
});

test('Soal 19: daya pada R4 sebesar 2.43 Watt', () => {
  const vParalel = 2.7; // Volt
  const p4 = calculatePowerFromVoltage(vParalel, 3);
  assert.equal(Math.round(p4 * 100) / 100, 2.43);
});

test('Soal 24: resistor tambahan untuk alat 100W/25V pada sumber 125V adalah 25 ohm seri', () => {
  const vSource = 125;
  const vDevice = 25;
  const pDevice = 100;
  const iDevice = pDevice / vDevice; // 4 A
  const vDrop = vSource - vDevice; // 100 V
  const rAdditional = vDrop / iDevice; // 25 ohm
  assert.equal(rAdditional, 25);
});

test('Soal 25: energi setrika 80W/220V pada 110V selama 10 menit menghasilkan 12 kJ', () => {
  const r = (220 * 220) / 80; // 605 ohm
  const pActual = (110 * 110) / r; // 20 W
  const energyJ = calculateEnergyJoules(pActual, 10 * 60); // 12000 J
  assert.equal(energyJ, 12000);
});

test('Soal 26: energi power bank 30.000 mAh 5V adalah 5.40 x 10^5 Joule', () => {
  const energy = calculatePowerBankEnergy(30000, 5);
  assert.equal(energy, 540000);
});

test('Soal 27: kuat arus 3 lampu paralel 15W/12V dengan aki 12V dan hambatan dalam 1.8 ohm adalah 2.4 A', () => {
  const rLamp = (12 * 12) / 15; // 9.6 ohm
  const rp = calculateParallel([rLamp, rLamp, rLamp]); // 3.2 ohm
  const rTotal = rp + 1.8; // 5.0 ohm
  const current = calculateCurrent(12, rTotal);
  assert.equal(current, 2.4);
});

test('Soal 28: hambatan total dua lampu 60W/120V dan 40W/120V seri adalah 600 ohm', () => {
  const rA = (120 * 120) / 60; // 240 ohm
  const rB = (120 * 120) / 40; // 360 ohm
  assert.equal(calculateSeries([rA, rB]), 600);
});

test('Soal 29: suhu akhir air dengan kompor listrik 20 ohm pada 110V selama 7 menit adalah 80.5 C', () => {
  const p = (110 * 110) / 20; // 605 W
  const w = calculateEnergyJoules(p, 7 * 60); // 254100 J
  const deltaT = calculateWaterHeatingDeltaT(w, 1, 4200); // 60.5 C
  const tAkhir = 20 + deltaT;
  assert.equal(tAkhir, 80.5);
});

test('Soal 30: V_BC = 8 V dan W_AD = 2160 J', () => {
  const rLuar = calculateSeries([3, 4, 2]); // 9 ohm
  const rTotal = rLuar + 1; // 10 ohm
  const i = calculateCurrent(20, rTotal); // 2 A
  const vBC = calculateVoltageDrop(i, 4); // 8 V
  const wAD = calculateEnergyJoules(i * 9 * i, 60); // 2160 J
  assert.equal(vBC, 8);
  assert.equal(wAD, 2160);
});

test('Soal B.1: hambatan kawat perak dan platina', () => {
  // Perak: L=2, A=0.5e-6, rho=1.6e-8
  const rPerak = calculateWireResistance(1.6e-8, 2, 0.5e-6);
  // Platina: L=0.48, A=0.1e-6, rho=4e-8
  const rPlatina = calculateWireResistance(4e-8, 0.48, 0.1e-6);
  assert.equal(Math.round(rPerak * 1000) / 1000, 0.064);
  assert.equal(Math.round(rPlatina * 1000) / 1000, 0.192);
  const rTotal = rPerak + rPlatina;
  assert.equal(Math.round(rTotal * 1000) / 1000, 0.256);
});

test('Soal 17: rasio kuat arus lampu A, B, C, D', () => {
  const { iA_ratio, iB_ratio, iC_ratio, iD_ratio } = calculateLampCurrentRatios();
  assert.ok(iA_ratio > iB_ratio);
  assert.ok(iB_ratio > iC_ratio);
  assert.equal(iC_ratio, iD_ratio);
});
