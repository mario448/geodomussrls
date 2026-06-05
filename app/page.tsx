import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { HomeLeadForm } from "@/components/HomeLeadForm";
import { FadeIn } from "@/components/Motion";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "GeoDomus | Case in legno e impianti FVG",
  description:
    "Case in legno, fotovoltaico e biomasse a Udine e Gorizia. Studio tecnico, posa e collaudo con GeoDomus.",
  path: "/",
  keywords: [
    "GeoDomus srls",
    "Case prefabbricate in legno Udine",
    "Bioedilizia Gorizia",
    "Installazione impianti fotovoltaici FVG",
    "Caldaie a biomasse Udine",
    "Case in legno chiavi in mano Friuli",
    "Progettazione case passive",
    "Incentivi fotovoltaico FVG",
    "Costruzioni edili Gorizia",
    "incentivi Friuli Venezia Giulia 2026"
  ]
});

const proofPoints = [
  { value: "Diagnosi", label: "Partiamo da consumi, edificio, tetto, riscaldamento e obiettivi reali." },
  { value: "Progetto", label: "Mettiamo in ordine fotovoltaico, biomassa, isolamento, casa e cantiere." },
  { value: "Realizzazione", label: "Coordiniamo fornitori, installazioni, verifiche, collaudo e assistenza." }
];

const serviceCards = [
  {
    title: "Case prefabbricate in legno chiavi in mano",
    text: "Progettiamo e posiamo case in legno ad alte prestazioni, con stratigrafie pensate per isolamento, sfasamento estivo, tenuta all'aria e classificazione sismica coerente con il Friuli. La struttura non arriva da sola: fondazioni, predisposizioni impiantistiche, involucro e capitolato vengono coordinati prima del cantiere.",
    href: "/case-prefabbricate-legno-udine"
  },
  {
    title: "Impianti fotovoltaici e sistemi di accumulo",
    text: "Dimensioniamo impianti fotovoltaici in FVG partendo da consumi, orientamento, ombre, potenza disponibile e profilo di autoconsumo. Valutiamo kWp, inverter, accumulo, quadri, passaggi e monitoraggio, così l'impianto lavora con l'edificio invece di essere aggiunto come accessorio.",
    href: "/fotovoltaico-udine-fvg"
  },
  {
    title: "Sistemi di riscaldamento a biomasse",
    text: "Valutiamo caldaie a biomasse a pellet o cippato per abitazioni, aziende agricole e strutture ricettive. Prima della macchina verifichiamo fabbisogno termico, deposito combustibile, canna fumaria, accessi, manutenzione e integrazione con fotovoltaico e accumulo termico.",
    href: "/riscaldamento-biomassa-udine"
  }
];

const risks = [
  "Tetto progettato senza verificare kWp, passaggi, inverter e accumulo",
  "Caldaia a biomasse scelta senza deposito, canna fumaria e fabbisogno termico",
  "Struttura in legno separata da impianti elettrici e termici",
  "Cliente costretto a coordinare studio tecnico, produttore, impresa e installatori"
];

const trustCards = [
  {
    title: "Professionisti coordinati, non fornitori isolati",
    text: "GeoDomus nasce per mettere nello stesso tavolo studio tecnico, progettazione architettonica, calcolo energetico, struttura in legno, fotovoltaico, biomasse e cantiere."
  },
  {
    title: "Metodo nato dai problemi reali dei cantieri",
    text: "Quando struttura, impianti e pratiche autorizzative vengono decisi separatamente, le varianti arrivano tardi e il cliente paga raccordi, ritardi e incompatibilita."
  },
  {
    title: "Risultati misurabili, non promesse decorative",
    text: "Partiamo da trasmittanza, orientamento, fabbisogno termico, kWp installabili, consumi e vincoli locali. I casi studio verranno pubblicati solo con dati autorizzati e confrontabili."
  }
];

const guarantees = [
  {
    title: "Costo di costruzione bloccato",
    text: "Le lavorazioni previste vengono definite in capitolato e preventivo approvato. Nessuna variante in corso d'opera sulle voci già contrattualizzate senza approvazione scritta del cliente."
  },
  {
    title: "Rispetto del cronoprogramma",
    text: "Il percorso può includere tempi di consegna, dipendenze autorizzative e penali contrattuali per ritardi imputabili a GeoDomus. Il cantiere viene gestito su fasi, non a improvvisazione."
  },
  {
    title: "Ingegnerizzazione impiantistica integrata",
    text: "Struttura in legno, impianto termico, fotovoltaico, accumulo e isolamento nascono nello stesso progetto per ridurre ponti termici, sprechi e incompatibilita tecniche."
  }
];

const leadMagnets = [
  ["Checklist pre-progetto", "I dati da raccogliere prima di chiedere preventivi: bollette, tetto, riscaldamento, vincoli, foto e documenti utili."],
  ["5 errori che fanno salire i costi", "Fotovoltaico deciso tardi, locale tecnico non previsto, biomassa senza deposito e preventivi non confrontabili."],
  ["Guida incentivi FVG 2026", "Una traccia per capire quali incentivi vanno verificati prima di firmare."],
  ["Schema ROI energetico", "Un modello semplice per confrontare investimento, risparmio annuo, tempi di ritorno e rischi tecnici."]
];

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: site.address,
  areaServed: ["Udine", "Provincia di Udine", "Pordenone", "Gorizia", "Trieste", "Friuli Venezia Giulia"],
  description: site.description
};

export default function HomePage() {
  return (
    <main>
      <JsonLd data={homeJsonLd} />

      <section className="relative min-h-screen overflow-hidden bg-graphite px-5 pt-28 text-white lg:px-8">
        <Image
          src="/images/villa-geodomus-hero-v3.jpg"
          alt="Casa efficiente con progetto energetico integrato"
          fill
          priority
          quality={82}
          sizes="100vw"
          className="object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 bg-graphite/42" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-end pb-10">
          <FadeIn className="max-w-4xl rounded-lg border border-white/20 bg-graphite/76 p-5 shadow-[0_32px_90px_rgba(0,0,0,.38)] backdrop-blur-sm sm:p-7 lg:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#f2bd83]">GeoDomus srls / Udine e Friuli Venezia Giulia</p>
            <h1 className="mt-5 max-w-5xl text-6xl font-semibold tracking-tight text-white md:text-8xl lg:text-9xl">
              Case prefabbricate in legno e indipendenza energetica in FVG.
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-white">
              Dallo studio tecnico e burocratico alla posa della struttura, fino al collaudo di fotovoltaico e biomasse: GeoDomus integra bioedilizia, impianti e cantiere tra Udine e Gorizia.
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-white/86">
              Il risultato: casa in legno chiavi in mano, impianti dimensionati prima del cantiere e meno rischio di varianti tecniche.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#diagnostica" className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 font-bold text-graphite shadow-lg shadow-black/25">
                Richiedi studio di fattibilità tecnico-economica
              </Link>
              <Link href="#metodo-geodomus" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/45 bg-white/16 px-6 font-bold text-white backdrop-blur">
                Vedi come evitiamo varianti
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point.value} className="rounded-lg border border-white/35 bg-white/82 p-4 text-graphite shadow-sm">
                  <strong className="block text-lg tracking-tight text-graphite">{point.value}</strong>
                  <span className="mt-1 block text-sm font-medium leading-5 text-graphite/58">{point.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="diagnostica" className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Diagnostica veloce</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Prima capiamo il problema. Poi parliamo di impianti.</h2>
            <p className="mt-6 text-lg leading-8 text-graphite/65">
              Non tutti devono comprare fotovoltaico, biomassa o isolamento. Rispondi a poche domande, ottieni un primo ordine di grandezza e capisci quale percorso tecnico ha senso nel tuo caso.
            </p>
          </FadeIn>
          <FadeIn>
            <HomeLeadForm />
          </FadeIn>
        </div>
      </section>

      <section className="bg-stone/55 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Cosa fa GeoDomus</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Struttura, involucro e impianti nello stesso progetto costruttivo.</h2>
            <p className="mt-6 text-lg leading-8 text-graphite/65">
              Una casa in legno performante non dipende solo dal materiale. Dipende da trasmittanza, sfasamento, tenuta all'aria, orientamento, fotovoltaico, accumulo, generazione termica e qualità della posa. GeoDomus coordina questi elementi prima del cantiere.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {serviceCards.map((service) => (
              <FadeIn key={service.title} className="rounded-lg border border-graphite/10 bg-white p-7 shadow-soft">
                <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-4 leading-7 text-graphite/65">{service.text}</p>
                <Link href={service.href} className="mt-6 inline-flex min-h-11 items-center rounded-md bg-graphite px-4 text-sm font-bold text-white">
                  Approfondisci
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Garanzie di cantiere</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">La certezza del risultato GeoDomus: protocolli rigidi e zero sorprese.</h2>
            <p className="mt-6 text-lg leading-8 text-graphite/65">
              In assenza di uno storico pubblico del brand, la fiducia deve stare nel contratto, nel metodo e nei controlli tecnici. Per questo lavoriamo con capitolati chiari, cronoprogrammi e verifiche impiantistiche integrate.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {guarantees.map((item) => (
              <FadeIn key={item.title} className="rounded-lg border border-graphite/10 bg-warm p-7 shadow-soft">
                <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-4 leading-8 text-graphite/65">{item.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.82fr_1.18fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Problema</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Il rischio non è spendere troppo. E spendere nell'ordine sbagliato.</h2>
            <p className="mt-6 text-lg leading-8 text-graphite/65">
              Il nostro lavoro e evitare scelte scollegate che generano varianti, ritardi e costi non previsti.
            </p>
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
            {risks.map((risk) => (
              <FadeIn key={risk} className="rounded-lg border border-graphite/10 bg-warm p-6">
                <p className="text-xl font-semibold tracking-tight">{risk}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone/55 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Chi siamo</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">GeoDomus coordina riqualificazioni energetiche complete in FVG.</h2>
            <p className="mt-6 text-lg leading-8 text-graphite/65">
              Siamo il referente che mette in ordine diagnosi, progetto, impianti, fornitori, cantiere e verifiche finali. Non vendiamo singoli prodotti come soluzioni universali.
            </p>
            <Link href="/chi-siamo" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-graphite px-6 font-bold text-white">
              Conosci GeoDomus
            </Link>
          </FadeIn>
          <div className="grid gap-4">
            {trustCards.map((card) => (
              <FadeIn key={card.title} className="rounded-lg border border-graphite/10 bg-white p-6 shadow-soft">
                <h3 className="text-2xl font-semibold tracking-tight">{card.title}</h3>
                <p className="mt-3 leading-7 text-graphite/65">{card.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Guide gratuite</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Non sei pronto per il sopralluogo? Parti da una guida.</h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {leadMagnets.map(([title, text]) => {
              const href = `mailto:${site.email}?subject=${encodeURIComponent("Richiesta guida - " + title)}&body=${encodeURIComponent(`Buongiorno GeoDomus,\n\nvorrei ricevere: ${title}.\n\nGrazie.`)}`;
              return (
                <FadeIn key={title} className="rounded-lg border border-graphite/10 bg-white p-6 shadow-soft">
                  <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                  <p className="mt-4 leading-7 text-graphite/65">{text}</p>
                  <a href={href} className="mt-6 inline-flex min-h-11 items-center rounded-md bg-graphite px-4 text-sm font-bold text-white">
                    Ricevi la guida
                  </a>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section id="metodo-geodomus" className="bg-graphite px-5 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-timber">Metodo</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Dal primo confronto al collaudo.</h2>
            <p className="mt-6 max-w-xl leading-8 text-white/65">
              Analisi esigenze, sopralluogo, progettazione tecnica, realizzazione coordinata e assistenza post-intervento.
            </p>
          </FadeIn>
          <div className="grid gap-3">
            {["Analisi esigenze", "Sopralluogo e verifiche", "Progettazione tecnica", "Realizzazione", "Assistenza post-intervento"].map((step, index) => (
              <FadeIn key={step} className="grid gap-4 rounded-lg border border-white/10 bg-white/[.04] p-5 sm:grid-cols-[80px_1fr]">
                <span className="text-sm font-semibold text-timber">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-2xl font-semibold tracking-tight">{step}</h3>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <SavingsCalculator />

      <CTA
        title="Hai già un'idea, un terreno, un edificio o dei preventivi separati?"
        text="Inviaci i dati principali. Ti diciamo quali informazioni mancano, quali criticità valutare e quale percorso tecnico seguire prima di impegnarti economicamente."
      />
    </main>
  );
}
