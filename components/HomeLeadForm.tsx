"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { site } from "@/data/site";

const projectTypes = ["Casa nuova", "Riqualificazione", "Azienda agricola", "Struttura ricettiva", "Fotovoltaico", "Biomassa", "Altro"];

export function HomeLeadForm() {
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = [
      "Buongiorno GeoDomus,",
      "",
      "vorrei una valutazione gratuita del potenziale energetico.",
      "",
      `Nome e cognome: ${name}`,
      `Tipo di intervento: ${projectType}`,
      `Email: ${email}`,
      `Telefono: ${phone}`,
      "",
      "Vorrei capire quali dati servono e quale risparmio puo avere senso nel mio caso."
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Richiesta valutazione gratuita GeoDomus")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg bg-white p-5 shadow-soft lg:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-graphite/65">
          Nome e cognome
          <input required value={name} onChange={(event) => setName(event.target.value)} className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite outline-none focus:border-forest" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-graphite/65">
          Tipo di intervento
          <select required value={projectType} onChange={(event) => setProjectType(event.target.value)} className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite outline-none focus:border-forest">
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-graphite/65">
          Email
          <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite outline-none focus:border-forest" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-graphite/65">
          Telefono
          <input required type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite outline-none focus:border-forest" />
        </label>
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
        Richiedi valutazione gratuita
      </button>
      <p className="text-sm leading-6 text-graphite/50">I tuoi dati sono protetti. Li useremo solo per rispondere alla tua richiesta.</p>
    </form>
  );
}
