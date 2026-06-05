"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { site } from "@/data/site";

const priorities = [
  {
    value: "Costruire una casa efficiente",
    label: "Costruire una casa efficiente",
    detail: "Progetto casa, tetto, impianti e predisposizioni prima del cantiere."
  },
  {
    value: "Ridurre le bollette della casa attuale",
    label: "Ridurre le bollette",
    detail: "Fotovoltaico, accumulo, isolamento e riscaldamento valutati insieme."
  },
  {
    value: "Fotovoltaico specifico",
    label: "Fotovoltaico",
    detail: "Tetto, ombre, autoconsumo e accumulo prima della potenza dell'impianto."
  },
  {
    value: "Riscaldamento con biomassa",
    label: "Biomassa",
    detail: "Fabbisogno, deposito, canna fumaria, accessi e gestione del combustibile."
  },
  {
    value: "Diagnosi completa",
    label: "Non so da dove partire",
    detail: "Prima capiamo il problema energetico, poi scegliamo cosa ha senso fare."
  }
];

const zones = ["Udine", "Pordenone", "Gorizia", "Trieste", "Altro comune FVG"];

function formatNumber(value: number) {
  return String(Math.round(value)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function HomeLeadForm() {
  const [step, setStep] = useState<"quiz" | "diagnosis">("quiz");
  const [priority, setPriority] = useState(priorities[1].value);
  const [monthlyBill, setMonthlyBill] = useState(145);
  const [heatingCost, setHeatingCost] = useState(1800);
  const [zone, setZone] = useState(zones[0]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const estimate = useMemo(() => {
    const annualEnergy = monthlyBill * 12 + heatingCost;
    const factor = priority.includes("Fotovoltaico") ? 0.34 : priority.includes("Biomassa") ? 0.28 : priority.includes("Costruire") ? 0.5 : 0.42;
    const yearlySaving = annualEnergy * factor;
    const low = yearlySaving * 0.82;
    const high = yearlySaving * 1.18;
    const investmentLow = priority.includes("Fotovoltaico") ? 12000 : priority.includes("Biomassa") ? 9000 : priority.includes("Costruire") ? 45000 : 18000;
    const investmentHigh = priority.includes("Fotovoltaico") ? 24000 : priority.includes("Biomassa") ? 22000 : priority.includes("Costruire") ? 90000 : 38000;
    const roiLow = investmentLow / Math.max(high, 1);
    const roiHigh = investmentHigh / Math.max(low, 1);

    return {
      low,
      high,
      investmentLow,
      investmentHigh,
      roiLow,
      roiHigh
    };
  }, [heatingCost, monthlyBill, priority]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    const body = [
      "Buongiorno GeoDomus,",
      "",
      "ho completato la diagnostica veloce sul sito e vorrei richiedere una verifica di fattibilità.",
      "",
      `Priorità: ${priority}`,
      `Bolletta elettrica mensile: ${monthlyBill} euro`,
      `Riscaldamento annuo: ${heatingCost} euro`,
      `Zona: ${zone}`,
      `Email: ${email}`,
      `Telefono: ${phone || "Non indicato"}`,
      "",
      `Risparmio stimato dal sito: ${formatNumber(estimate.low)}-${formatNumber(estimate.high)} euro/anno`,
      `Investimento indicativo: ${formatNumber(estimate.investmentLow)}-${formatNumber(estimate.investmentHigh)} euro`,
      "",
      "Vorrei capire se questi numeri sono realistici e qual è il prossimo passo tecnico corretto."
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Diagnostica veloce GeoDomus")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="rounded-lg bg-white p-5 shadow-soft lg:p-6">
      {step === "quiz" ? (
        <div className="grid gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.16em] text-forest">Quiz veloce</p>
            <h3 className="mt-2 text-3xl font-semibold tracking-tight">Qual è la tua priorità principale?</h3>
            <p className="mt-3 text-sm leading-6 text-graphite/58">45 secondi, nessun dato personale in questa fase.</p>
          </div>
          <div className="grid gap-2">
            {priorities.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setPriority(item.value)}
                className={`rounded-md border p-4 text-left transition ${priority === item.value ? "border-forest bg-warm text-graphite" : "border-graphite/10 bg-white text-graphite/70 hover:border-forest/50"}`}
              >
                <strong className="block">{item.label}</strong>
                <span className="mt-1 block text-sm leading-6 text-graphite/58">{item.detail}</span>
              </button>
            ))}
          </div>
          <button type="button" onClick={() => setStep("diagnosis")} className="min-h-12 rounded-md bg-forest px-6 py-4 text-base font-bold text-white shadow-soft">
            Fai la diagnostica veloce
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.16em] text-forest">Diagnostica veloce</p>
            <h3 className="mt-2 text-3xl font-semibold tracking-tight">Calcola un primo ordine di grandezza</h3>
            <p className="mt-3 text-sm leading-6 text-graphite/58">Priorità scelta: {priority}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-graphite/65">
              Bolletta elettrica mensile
              <input required type="number" min="0" value={monthlyBill} onChange={(event) => setMonthlyBill(Number(event.target.value))} className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite outline-none focus:border-forest" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-graphite/65">
              Riscaldamento annuo
              <input required type="number" min="0" value={heatingCost} onChange={(event) => setHeatingCost(Number(event.target.value))} className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite outline-none focus:border-forest" />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-graphite/65">
              Zona
              <select required value={zone} onChange={(event) => setZone(event.target.value)} className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite outline-none focus:border-forest">
                {zones.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-graphite/65">
              Email per ricevere il risultato
              <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite outline-none focus:border-forest" />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-semibold text-graphite/65">
            Telefono facoltativo
            <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite outline-none focus:border-forest" />
          </label>

          <div className="rounded-lg bg-graphite p-5 text-white">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-timber">Risultato immediato</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight">{formatNumber(estimate.low)}-{formatNumber(estimate.high)} euro/anno</p>
            <p className="mt-2 text-sm leading-6 text-white/68">Risparmio potenziale da verificare con sopralluogo, tetto, consumi reali e vincoli locali.</p>
            <div className="mt-4 grid gap-2 text-sm leading-6 text-white/72 sm:grid-cols-2">
              <p>Investimento indicativo: {formatNumber(estimate.investmentLow)}-{formatNumber(estimate.investmentHigh)} euro</p>
              <p>Ritorno indicativo: {estimate.roiLow.toFixed(1)}-{estimate.roiHigh.toFixed(1)} anni</p>
            </div>
          </div>

          <label className="flex gap-3 text-sm leading-6 text-graphite/60">
            <input required type="checkbox" className="mt-1" />
            <span>
              Ho letto la{" "}
              <Link href="/privacy-policy" className="font-semibold text-forest underline underline-offset-4">
                privacy policy
              </Link>{" "}
              e autorizzo il trattamento dei dati per essere ricontattato.
            </span>
          </label>
          <button type="submit" className="min-h-12 rounded-md bg-forest px-6 py-4 text-base font-bold text-white shadow-soft">
            Ricevi il risultato e verifica fattibilità
          </button>
          {submitted ? <p className="text-sm font-semibold leading-6 text-forest">Diagnostica preparata. Se il client email si apre, trovi già tutti i dati compilati.</p> : null}
          <button type="button" onClick={() => setStep("quiz")} className="text-left text-sm font-semibold text-graphite/55 underline underline-offset-4">
            Cambia priorità
          </button>
        </form>
      )}
    </div>
  );
}
