"use client";

import { useMemo, useState } from "react";
import { site } from "@/data/site";

const currency = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0
});

const number = new Intl.NumberFormat("it-IT", {
  maximumFractionDigits: 0
});

const solutionFactors = {
  fotovoltaico: {
    label: "Fotovoltaico",
    electricSaving: 0.46,
    heatingSaving: 0,
    roofUse: 0.82
  },
  integrato: {
    label: "Fotovoltaico + accumulo",
    electricSaving: 0.64,
    heatingSaving: 0.08,
    roofUse: 0.9
  },
  completo: {
    label: "Casa efficiente + fotovoltaico + biomassa",
    electricSaving: 0.66,
    heatingSaving: 0.34,
    roofUse: 0.9
  }
};

type SolutionKey = keyof typeof solutionFactors;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function SavingsCalculator() {
  const [monthlyElectricBill, setMonthlyElectricBill] = useState(145);
  const [yearlyHeatingCost, setYearlyHeatingCost] = useState(1800);
  const [roofArea, setRoofArea] = useState(55);
  const [occupants, setOccupants] = useState(4);
  const [solution, setSolution] = useState<SolutionKey>("integrato");

  const estimate = useMemo(() => {
    const factors = solutionFactors[solution];
    const annualElectricCost = monthlyElectricBill * 12;
    const usefulRoof = roofArea * factors.roofUse;
    const kwp = clamp(usefulRoof / 6, 3, 12);
    const yearlyProduction = kwp * 1150;
    const electricSaving = Math.min(annualElectricCost * factors.electricSaving, yearlyProduction * 0.24);
    const heatingSaving = yearlyHeatingCost * factors.heatingSaving;
    const comfortBonus = solution === "completo" ? occupants * 95 : 0;
    const yearlySaving = electricSaving + heatingSaving + comfortBonus;
    const low = yearlySaving * 0.82;
    const high = yearlySaving * 1.18;
    const tenYears = yearlySaving * 10;

    return {
      annualElectricCost,
      kwp,
      yearlyProduction,
      electricSaving,
      heatingSaving,
      yearlySaving,
      low,
      high,
      tenYears
    };
  }, [monthlyElectricBill, occupants, roofArea, solution, yearlyHeatingCost]);

  const mailSubject = "Richiesta valutazione risparmio energetico";
  const mailBody = [
    "Buongiorno GeoDomus,",
    "",
    "vorrei una valutazione personalizzata partendo da questa stima:",
    `- Soluzione: ${solutionFactors[solution].label}`,
    `- Bolletta elettrica mensile: ${currency.format(monthlyElectricBill)}`,
    `- Spesa riscaldamento annua: ${currency.format(yearlyHeatingCost)}`,
    `- Superficie tetto indicativa: ${number.format(roofArea)} mq`,
    `- Persone in casa: ${occupants}`,
    `- Risparmio annuo stimato: ${currency.format(estimate.low)} - ${currency.format(estimate.high)}`,
    "",
    "Vorrei essere ricontattato per una consulenza."
  ].join("\n");

  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  return (
    <section id="calcolatore-risparmio" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Calcolatore risparmio energetico</p>
          <h2 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-graphite lg:text-7xl">
            Quanto puoi risparmiare con una casa piu efficiente?
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-graphite/65">
            Inserisci pochi dati indicativi su bollette, riscaldamento e copertura. Il calcolatore stima il possibile risparmio con fotovoltaico, accumulo, biomassa e riqualificazione energetica a Udine e in Friuli Venezia Giulia.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-graphite/10 bg-warm p-4">
              <strong className="block text-2xl tracking-tight text-forest">{number.format(estimate.kwp)} kWp</strong>
              <span className="mt-1 block text-sm leading-5 text-graphite/60">impianto fotovoltaico indicativo</span>
            </div>
            <div className="rounded-lg border border-graphite/10 bg-warm p-4">
              <strong className="block text-2xl tracking-tight text-forest">{number.format(estimate.yearlyProduction)} kWh</strong>
              <span className="mt-1 block text-sm leading-5 text-graphite/60">produzione annua stimata</span>
            </div>
            <div className="rounded-lg border border-graphite/10 bg-warm p-4">
              <strong className="block text-2xl tracking-tight text-forest">{currency.format(estimate.tenYears)}</strong>
              <span className="mt-1 block text-sm leading-5 text-graphite/60">potenziale su 10 anni</span>
            </div>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-graphite/48">
            Stima orientativa basata su valori medi. Una consulenza tecnica verifica esposizione, consumi reali, vincoli, incentivi disponibili e integrazione tra edificio e impianti.
          </p>
        </div>

        <div className="rounded-lg border border-graphite/10 bg-warm p-4 shadow-soft sm:p-6">
          <div className="grid gap-4">
            <label className="grid gap-2 text-sm font-semibold text-graphite/70">
              Bolletta elettrica mensile
              <div className="grid grid-cols-[1fr_96px] gap-3">
                <input
                  type="range"
                  min="50"
                  max="420"
                  step="5"
                  value={monthlyElectricBill}
                  onChange={(event) => setMonthlyElectricBill(Number(event.target.value))}
                  className="w-full accent-forest"
                />
                <input
                  type="number"
                  min="0"
                  value={monthlyElectricBill}
                  onChange={(event) => setMonthlyElectricBill(Number(event.target.value))}
                  className="min-h-11 rounded-md border border-graphite/10 bg-white px-3 text-right text-graphite"
                />
              </div>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-graphite/70">
              Spesa annua riscaldamento
              <div className="grid grid-cols-[1fr_112px] gap-3">
                <input
                  type="range"
                  min="500"
                  max="5200"
                  step="50"
                  value={yearlyHeatingCost}
                  onChange={(event) => setYearlyHeatingCost(Number(event.target.value))}
                  className="w-full accent-forest"
                />
                <input
                  type="number"
                  min="0"
                  value={yearlyHeatingCost}
                  onChange={(event) => setYearlyHeatingCost(Number(event.target.value))}
                  className="min-h-11 rounded-md border border-graphite/10 bg-white px-3 text-right text-graphite"
                />
              </div>
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-graphite/70">
                Tetto disponibile
                <input
                  type="number"
                  min="15"
                  max="140"
                  value={roofArea}
                  onChange={(event) => setRoofArea(Number(event.target.value))}
                  className="min-h-12 rounded-md border border-graphite/10 bg-white px-4 text-graphite"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-graphite/70">
                Persone in casa
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={occupants}
                  onChange={(event) => setOccupants(Number(event.target.value))}
                  className="min-h-12 rounded-md border border-graphite/10 bg-white px-4 text-graphite"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-semibold text-graphite/70">
              Soluzione da valutare
              <select
                value={solution}
                onChange={(event) => setSolution(event.target.value as SolutionKey)}
                className="min-h-12 rounded-md border border-graphite/10 bg-white px-4 text-graphite"
              >
                {Object.entries(solutionFactors).map(([key, item]) => (
                  <option key={key} value={key}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-6 rounded-lg bg-graphite p-5 text-white sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-timber">Risparmio annuo stimato</p>
            <p className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl">
              {currency.format(estimate.low)} - {currency.format(estimate.high)}
            </p>
            <div className="mt-5 grid gap-3 text-sm text-white/72 sm:grid-cols-2">
              <p>Energia elettrica: {currency.format(estimate.electricSaving)}/anno</p>
              <p>Riscaldamento: {currency.format(estimate.heatingSaving)}/anno</p>
            </div>
            <a
              href={mailHref}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-white px-5 text-center font-bold text-graphite sm:w-auto"
            >
              Ricevi una valutazione personalizzata
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
