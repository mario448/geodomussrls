import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { FadeIn } from "@/components/Motion";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { services, site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "GeoDomus srls | Case in legno, fotovoltaico e biomassa a Udine",
  description:
    "GeoDomus srls progetta case in legno, fotovoltaico e biomassa come sistema integrato per abitazioni efficienti a Udine e in Friuli Venezia Giulia.",
  path: "/",
  keywords: [
    "GeoDomus srls",
    "case in legno Udine",
    "case prefabbricate in legno Friuli Venezia Giulia",
    "fotovoltaico FVG",
    "impianti fotovoltaici Udine",
    "caldaia a pellet Friuli Venezia Giulia",
    "riscaldamento a biomassa Udine",
    "efficienza energetica FVG",
    "incentivi Friuli Venezia Giulia 2026"
  ]
});

const phoneHref = `tel:${site.phone.replace(/\s/g, "")}`;

const proofPoints = [
  { value: "Udine", label: "Sopralluoghi e consulenza locale in Friuli Venezia Giulia" },
  { value: "28", label: "progetti seguiti tra case efficienti e impianti energetici" },
  { value: "3", label: "ambiti coordinati: involucro, fotovoltaico, biomassa" }
];

const reasons = [
  {
    title: "Un unico interlocutore",
    metric: "1 referente",
    text: "Casa, impianto fotovoltaico e sistema termico vengono valutati insieme, evitando scelte scollegate e costi nascosti."
  },
  {
    title: "Progetto integrato",
    metric: "3 sistemi",
    text: "Involucro in legno, produzione solare e biomassa vengono dimensionati sui consumi reali e sul contesto dell'immobile."
  },
  {
    title: "Focus su efficienza reale",
    metric: "-35%",
    text: "Nei casi stimati, un progetto coordinato puo ridurre sensibilmente la spesa energetica rispetto a interventi separati."
  },
  {
    title: "Presenza locale in FVG",
    metric: "4 province",
    text: "Lavoriamo su Udine, Pordenone, Gorizia e Trieste leggendo clima, vincoli, coperture e abitudini di consumo locali."
  }
];

const visualStory = [
  {
    src: "/images/home-cantiere-legno-geodomus.jpg",
    alt: "Dettaglio di una casa in legno efficiente progettata per il clima del Friuli Venezia Giulia",
    label: "Involucro efficiente"
  },
  {
    src: "/images/home-fotovoltaico-tetto-geodomus.jpg",
    alt: "Pannelli fotovoltaici per abitazioni e aziende in Friuli Venezia Giulia",
    label: "Produzione solare"
  },
  {
    src: "/images/home-biomassa-locale-geodomus.jpg",
    alt: "Impianto a biomassa per riscaldamento sostenibile a Udine e in FVG",
    label: "Calore sostenibile"
  }
];

const steps = [
  { title: "Analisi iniziale", text: "Raccogliamo obiettivi, consumi, terreno, copertura, budget e vincoli dell'immobile." },
  { title: "Sopralluogo tecnico", text: "Verifichiamo spazi, orientamento, accessi, impianti esistenti e fattibilita degli interventi." },
  { title: "Progetto e priorita", text: "Definiamo cosa conviene fare prima: involucro, fotovoltaico, biomassa o soluzione integrata." },
  { title: "Realizzazione", text: "Coordiniamo scelte tecniche, forniture e installazione con attenzione a tempi e prestazioni." },
  { title: "Assistenza", text: "Restiamo disponibili per ottimizzazione, manutenzione e aggiornamento su incentivi disponibili." }
];

const faqs = [
  {
    question: "Quanto costa una casa in legno a Udine?",
    answer:
      "Il costo dipende da mq, terreno, fondazioni, finiture, impianti e prestazioni richieste. GeoDomus parte da una verifica tecnica per stimare il costo complessivo, non solo un prezzo al mq."
  },
  {
    question: "Quanto risparmio con il fotovoltaico in FVG?",
    answer:
      "Il risparmio dipende da consumi, autoconsumo, esposizione, accumulo e prezzo dell'energia. Una famiglia con consumi medi puo valutare il ritorno partendo da bollette e superficie utile del tetto."
  },
  {
    question: "La biomassa conviene ancora nel 2026?",
    answer:
      "Puo convenire quando l'edificio ha fabbisogno termico coerente, spazio tecnico e gestione del combustibile sostenibile. Pellet, legna e cippato vanno dimensionati caso per caso."
  },
  {
    question: "Quanto tempo serve per realizzare una casa in legno?",
    answer:
      "La fase di cantiere puo essere piu controllata rispetto all'edilizia tradizionale, ma prima servono analisi, autorizzazioni, progetto esecutivo e definizione impianti."
  },
  {
    question: "GeoDomus lavora anche fuori provincia di Udine?",
    answer:
      "Si. GeoDomus opera a Udine e in Friuli Venezia Giulia, con interventi anche nelle aree di Pordenone, Gorizia, Trieste e comuni limitrofi."
  },
  {
    question: "Gli incentivi FVG 2026 si possono usare per questi interventi?",
    answer:
      "Dipende dal bando, dal soggetto richiedente e dall'intervento. Prima di iniziare conviene verificare requisiti, scadenze, documenti e cumulabilita con bonus nazionali."
  }
];

const geoAreas = ["Udine", "Tavagnacco", "Codroipo", "Cividale del Friuli", "San Daniele del Friuli", "Pordenone", "Gorizia", "Trieste", "Friuli Venezia Giulia"];

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: site.address,
    areaServed: geoAreas,
    description: site.description
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  }
];

export default function HomePage() {
  return (
    <main>
      <JsonLd data={homeJsonLd} />

      <section className="relative min-h-screen overflow-hidden bg-graphite px-5 pt-28 text-white lg:px-8">
        <Image
          src="/images/villa-geodomus-hero-v3.jpg"
          alt="Villa moderna efficiente con piscina, grandi vetrate e impianti energetici integrati"
          fill
          priority
          quality={82}
          sizes="100vw"
          className="object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 bg-graphite/28" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-end pb-10">
          <FadeIn className="max-w-4xl rounded-lg border border-white/20 bg-graphite/76 p-5 shadow-[0_32px_90px_rgba(0,0,0,.38)] backdrop-blur-sm sm:p-7 lg:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#f2bd83]">GeoDomus srls / Udine e Friuli Venezia Giulia</p>
            <h1 className="mt-5 max-w-5xl text-6xl font-semibold tracking-tight text-white md:text-8xl lg:text-9xl">
              Costruire casa. Produrre energia. Vivere meglio.
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-white">
              GeoDomus integra case in legno, fotovoltaico e riscaldamento a biomassa in un unico progetto tecnico per abitazioni efficienti a Udine e in FVG.
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-white/86">
              TL;DR: analizziamo terreno, consumi, copertura e obiettivi prima di proporre casa, impianti o riqualificazione. Meno scelte scollegate, piu controllo sui consumi futuri.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contatti" className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 font-bold text-graphite shadow-lg shadow-black/25">
                Richiedi una consulenza
              </Link>
              <a href={phoneHref} className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/45 bg-white/16 px-6 font-bold text-white backdrop-blur">
                Chiama ora {site.phone}
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point.value} className="rounded-lg border border-white/24 bg-black/30 p-4">
                  <strong className="block text-2xl tracking-tight text-[#f2bd83]">{point.value}</strong>
                  <span className="mt-1 block text-sm font-medium leading-5 text-white/90">{point.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="soluzioni" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Cosa fa GeoDomus</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Quali soluzioni puoi integrare nel tuo progetto?</h2>
            <p className="mt-5 text-lg leading-8 text-graphite/65">
              Risposta breve: casa in legno, fotovoltaico e biomassa funzionano meglio quando vengono progettati insieme, non acquistati come interventi separati.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {services.map((service) => (
              <FadeIn key={service.href} className="overflow-hidden rounded-lg border border-graphite/10 bg-white shadow-soft">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    quality={78}
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-4 leading-7 text-graphite/65">{service.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={service.href} className="inline-flex min-h-11 items-center rounded-md bg-graphite px-4 text-sm font-bold text-white">
                      Approfondisci
                    </Link>
                    <Link href="/contatti" className="inline-flex min-h-11 items-center rounded-md border border-graphite/15 px-4 text-sm font-bold text-graphite">
                      Parla con un tecnico
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone/55 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Perche sceglierci</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Perche scegliere GeoDomus in Friuli Venezia Giulia?</h2>
            <p className="mt-5 text-lg leading-8 text-graphite/65">
              Risposta breve: coordiniamo edificio e impianti partendo da dati pratici, non da pacchetti standard.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <FadeIn key={reason.title} className="rounded-lg border border-graphite/10 bg-white p-6 shadow-soft">
                <strong className="block text-3xl tracking-tight text-forest">{reason.metric}</strong>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{reason.title}</h3>
                <p className="mt-3 leading-7 text-graphite/62">{reason.text}</p>
              </FadeIn>
            ))}
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {visualStory.map((image) => (
              <FadeIn key={image.src} className="relative min-h-[260px] overflow-hidden rounded-lg bg-graphite">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  quality={76}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-graphite/10 to-transparent" aria-hidden="true" />
                <p className="absolute bottom-5 left-5 right-5 text-2xl font-semibold tracking-tight text-white">{image.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-graphite px-5 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-timber">Metodo</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Come lavoriamo prima di proporti una soluzione?</h2>
            <p className="mt-6 max-w-xl leading-8 text-white/65">
              Risposta breve: prima misuriamo e capiamo, poi scegliamo. Questo riduce sprechi, sovradimensionamenti e interventi poco coerenti.
            </p>
            <Link href="/contatti" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 font-bold text-graphite">
              Prenota una verifica
            </Link>
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
              <Image
                src="/images/villa-geodomus-hero.jpg"
                alt="Abitazione moderna ed efficiente usata come riferimento per analisi tecnica casa energia"
                fill
                quality={76}
                sizes="(min-width: 1024px) 32vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <div className="grid gap-3">
            {steps.map((step, index) => (
              <FadeIn key={step.title} className="grid gap-4 rounded-lg border border-white/10 bg-white/[.04] p-5 sm:grid-cols-[80px_1fr]">
                <span className="text-sm font-semibold text-timber">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 leading-7 text-white/62">{step.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <SavingsCalculator />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Caso studio stimato</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Che risultato puo dare un progetto integrato?</h2>
            <p className="mt-6 leading-8 text-graphite/65">
              Esempio realistico provvisorio: abitazione da 140 mq in provincia di Udine con bolletta elettrica media, riscaldamento tradizionale e tetto utile per fotovoltaico.
            </p>
          </FadeIn>
          <FadeIn className="overflow-hidden rounded-lg border border-graphite/10 bg-white shadow-soft">
            <div className="relative aspect-[16/7]">
              <Image
                src="/images/villa-geodomus-hero-v2.jpg"
                alt="Esempio di villa moderna per progetto integrato casa ed energia"
                fill
                quality={76}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 lg:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.16em] text-forest">Problema</p>
                <p className="mt-3 leading-7 text-graphite/65">Consumi elevati, impianto termico datato e nessuna produzione elettrica autonoma.</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[.16em] text-forest">Soluzione</p>
                <p className="mt-3 leading-7 text-graphite/65">6 kWp fotovoltaico, accumulo predisposto, caldaia a pellet e miglioramento dell'involucro.</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[.16em] text-forest">Risultato</p>
                <p className="mt-3 leading-7 text-graphite/65">Risparmio stimato tra 1.700 e 2.500 euro/anno, da validare con sopralluogo.</p>
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-4">
              {["140 mq", "6 kWp", "45 giorni", "-35% consumi"].map((item) => (
                <strong key={item} className="rounded-lg bg-warm p-4 text-center text-2xl tracking-tight text-forest">
                  {item}
                </strong>
              ))}
            </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Domande frequenti</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Cosa chiedono spesso i clienti?</h2>
            <p className="mt-6 leading-8 text-graphite/65">
              Risposte brevi e dirette per orientarti prima della consulenza tecnica.
            </p>
          </FadeIn>
          <div className="grid gap-3">
            {faqs.map((faq) => (
              <FadeIn key={faq.question} className="rounded-lg border border-graphite/10 bg-warm p-5">
                <h3 className="text-xl font-semibold tracking-tight">{faq.question}</h3>
                <p className="mt-3 leading-7 text-graphite/65">{faq.answer}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone/55 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Area servita</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Dove opera GeoDomus?</h2>
            <p className="mt-6 text-lg leading-8 text-graphite/65">
              GeoDomus lavora a Udine, in provincia di Udine e nelle principali aree del Friuli Venezia Giulia: Pordenone, Gorizia, Trieste e comuni limitrofi.
            </p>
            <p className="mt-5 leading-8 text-graphite/60">
              Il riferimento locale aiuta a valutare clima, esposizione, vincoli urbanistici, coperture e incentivi FVG 2026 prima di definire l'intervento.
            </p>
          </FadeIn>
          <FadeIn className="overflow-hidden rounded-lg border border-graphite/10 bg-white shadow-soft">
            <div className="relative aspect-[16/8]">
              <Image
                src="/images/home-area-fvg-geodomus.jpg"
                alt="Casa sostenibile in legno per interventi a Udine e Friuli Venezia Giulia"
                fill
                quality={76}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Zone principali</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {geoAreas.map((area) => (
                <span key={area} className="rounded-md border border-graphite/10 bg-warm px-3 py-2 text-sm font-semibold text-graphite/70">
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-6 grid gap-2 text-sm leading-6 text-graphite/62">
              <a href={phoneHref}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <p>{site.address}</p>
            </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTA title="Vuoi capire quale intervento conviene davvero?" text="Partiamo da consumi, edificio, tetto, budget e incentivi disponibili in Friuli Venezia Giulia. Poi definiamo una soluzione sostenibile e misurabile." />
    </main>
  );
}
