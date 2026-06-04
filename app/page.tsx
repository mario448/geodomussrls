import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { FadeIn } from "@/components/Motion";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { site } from "@/data/site";
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

const proofPoints = [
  { value: "Consulenza tecnica", label: "Analisi iniziale di edificio, consumi, obiettivi e vincoli prima di proporre soluzioni." },
  { value: "Progetto coordinato", label: "Casa, fotovoltaico e biomassa valutati insieme per evitare scelte scollegate." },
  { value: "Realizzazione", label: "Percorso seguito fino alla fase operativa, con coordinamento tecnico degli interventi." }
];

const risks = [
  "Fotovoltaico dimensionato senza analisi dei consumi",
  "Generatore termico scelto senza valutare involucro e fabbisogno",
  "Casa in legno progettata senza integrare davvero gli impianti",
  "Preventivi separati difficili da confrontare"
];

const offerCards = [
  {
    title: "Casa in legno",
    text: "Analisi preliminare, valutazione del progetto, coordinamento tecnico e impostazione delle scelte energetiche prima della realizzazione.",
    href: "/case-prefabbricate-legno-udine",
    image: "/images/case-legno-geodomus.jpg",
    alt: "Dettaglio di casa prefabbricata in legno"
  },
  {
    title: "Fotovoltaico",
    text: "Analisi bollette, verifica copertura, dimensionamento impianto, accumulo, autoconsumo, realizzazione e ritorno dell'investimento.",
    href: "/fotovoltaico-udine-fvg",
    image: "/images/fotovoltaico-geodomus.jpg",
    alt: "Pannelli fotovoltaici su copertura"
  },
  {
    title: "Biomassa",
    text: "Valutazione del fabbisogno termico, spazio tecnico, disponibilita del combustibile, manutenzione, realizzazione e compatibilita con l'edificio.",
    href: "/riscaldamento-biomassa-udine",
    image: "/images/biomassa-geodomus.jpg",
    alt: "Locale tecnico per impianto a biomassa"
  },
  {
    title: "Soluzioni integrate",
    text: "Regia unica tra consulenza, progetto, involucro, produzione elettrica, generazione termica e realizzazione.",
    href: "/soluzioni-integrate",
    image: "/images/villa-geodomus-hero-v2.jpg",
    alt: "Abitazione moderna con sistemi energetici integrati"
  }
];

const paths = [
  {
    title: "Sto costruendo casa",
    text: "Ti aiutiamo a impostare involucro, impianti e produzione energetica prima che le scelte diventino costose da correggere.",
    cta: "Valuta nuova costruzione"
  },
  {
    title: "Ho gia una casa",
    text: "Analizziamo consumi, tetto, impianto termico e priorita. Non sempre conviene partire dal fotovoltaico.",
    cta: "Analizza la mia abitazione"
  },
  {
    title: "Ho un'azienda agricola o struttura ricettiva",
    text: "Verifichiamo consumi elettrici, fabbisogno termico, biomassa disponibile, superfici e ritorno dell'investimento.",
    cta: "Richiedi valutazione aziendale"
  }
];

const completePath = [
  {
    title: "Consulenza preliminare",
    text: "Raccogliamo dati, obiettivi e vincoli tecnici per capire da dove partire e cosa evitare."
  },
  {
    title: "Progettazione e coordinamento",
    text: "Mettiamo in relazione casa, fotovoltaico, biomassa, budget e sequenza degli interventi."
  },
  {
    title: "Realizzazione operativa",
    text: "Seguiamo il passaggio dalla valutazione alla realizzazione, coordinando fornitori, progettisti e installatori coinvolti."
  },
  {
    title: "Assistenza e continuita",
    text: "Restiamo il riferimento tecnico per aggiornamenti, manutenzione, ottimizzazioni e successive fasi di intervento."
  }
];

const gallery = [
  {
    src: "/images/villa-geodomus-hero-v3.jpg",
    alt: "Villa moderna efficiente con grandi vetrate",
    label: "Abitare efficiente"
  },
  {
    src: "/images/home-cantiere-legno-geodomus.jpg",
    alt: "Dettaglio di costruzione in legno",
    label: "Struttura e involucro"
  },
  {
    src: "/images/home-fotovoltaico-tetto-geodomus.jpg",
    alt: "Fotovoltaico installato su tetto",
    label: "Produzione elettrica"
  },
  {
    src: "/images/home-biomassa-locale-geodomus.jpg",
    alt: "Locale tecnico con sistema a biomassa",
    label: "Generazione termica"
  },
  {
    src: "/images/home-area-fvg-geodomus.jpg",
    alt: "Casa sostenibile in contesto verde",
    label: "Contesto locale"
  },
  {
    src: "/images/villa-geodomus-hero.jpg",
    alt: "Abitazione moderna usata come riferimento visivo",
    label: "Percorso completo"
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
  { title: "Dati", text: "Raccogliamo bollette, consumi, informazioni sull'edificio, tetto, impianti esistenti, budget e obiettivi." },
  { title: "Diagnosi", text: "Individuiamo criticita, priorita e vincoli: cosa conviene valutare subito, cosa puo aspettare, cosa potrebbe non avere senso." },
  { title: "Disegno tecnico", text: "Definiamo la configurazione tra involucro, fotovoltaico, accumulo, biomassa e altri impianti." },
  { title: "Decisione", text: "Costruiamo una sequenza di interventi: cosa fare ora, cosa fare dopo, cosa evitare." },
  { title: "Direzione", text: "Coordiniamo il percorso tecnico e operativo fino alla realizzazione con fornitori, progettisti e installatori coinvolti." }
];

const comparison = [
  ["Ogni fornitore vende il proprio pezzo", "Analisi unica di edificio, consumi e obiettivi"],
  ["Il fotovoltaico viene proposto prima di analizzare davvero i consumi", "Dimensionamento basato su dati reali"],
  ["L'impianto termico viene scelto senza valutare l'intero edificio", "Priorita tra interventi definite prima del preventivo finale"],
  ["I preventivi sono difficili da confrontare", "Casa e impianti ragionati come sistema"],
  ["Il cliente deve coordinare tutto da solo", "Un referente coordina il percorso tecnico"]
];

const faqs = [
  {
    question: "Fate preventivi senza sopralluogo?",
    answer:
      "Possiamo dare un ordine di grandezza, ma non un preventivo serio. Per fotovoltaico, biomassa e case in legno servono dati su consumi, copertura, edificio, accessi, vincoli e obiettivi. Un prezzo dato senza verifica e spesso inutile o fuorviante."
  },
  {
    question: "Devo fare tutto subito?",
    answer:
      "No. In molti casi conviene definire una strategia completa e realizzare gli interventi per fasi. La cosa importante e sapere prima quali scelte condizionano quelle successive."
  },
  {
    question: "Mi proponete sempre fotovoltaico, biomassa e casa in legno insieme?",
    answer:
      "No. L'obiettivo e capire cosa serve davvero. Se un intervento non e prioritario o non ha ritorno coerente, va escluso o rimandato."
  },
  {
    question: "Da cosa partite per valutare un progetto?",
    answer:
      "Partiamo da bollette, consumi, caratteristiche dell'edificio, tetto, impianti esistenti, obiettivi di comfort e budget indicativo."
  },
  {
    question: "Posso inviare bollette, foto o planimetrie?",
    answer:
      "Si. Sono dati utili per una prima valutazione tecnica. Piu informazioni concrete riceviamo, piu sensata sara la prima analisi."
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
        <div className="absolute inset-0 bg-graphite/34" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-end pb-10">
          <FadeIn className="max-w-4xl rounded-lg border border-white/20 bg-graphite/76 p-5 shadow-[0_32px_90px_rgba(0,0,0,.38)] backdrop-blur-sm sm:p-7 lg:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#f2bd83]">GeoDomus srls / Udine e Friuli Venezia Giulia</p>
            <h1 className="mt-5 max-w-5xl text-6xl font-semibold tracking-tight text-white md:text-8xl lg:text-9xl">
              Casa, fotovoltaico e biomassa progettati come un unico sistema.
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-white">
              Prima analizziamo edificio, consumi, tetto, impianti e budget. Poi definiamo quali interventi fare, in che ordine e con quali priorita.
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-white/86">
              Cosi eviti impianti sovradimensionati, costi nascosti e scelte energetiche scollegate.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div>
                <Link href="/contatti" className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 font-bold text-graphite shadow-lg shadow-black/25">
                  Richiedi una verifica tecnica preliminare
                </Link>
                <p className="mt-2 max-w-xl text-sm font-medium text-white/70">
                  Partiamo da dati concreti: bollette, edificio, obiettivi e vincoli tecnici. Nessun preventivo serio nasce senza analisi.
                </p>
              </div>
              <Link href="#metodo-geodomus" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/45 bg-white/16 px-6 font-bold text-white backdrop-blur">
                Scopri il metodo GeoDomus
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

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.82fr_1.18fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Problema</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Il rischio non e spendere troppo. E spendere nell'ordine sbagliato.</h2>
            <p className="mt-6 text-lg leading-8 text-graphite/65">
              Molti partono dal singolo intervento: prima il fotovoltaico, poi la caldaia, poi l'isolamento, poi magari una nuova costruzione. Il problema e che edificio, impianti e consumi si influenzano tra loro. Senza una strategia unica si rischia di installare componenti corretti singolarmente, ma inefficienti come sistema.
            </p>
            <Link href="/contatti" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-graphite px-6 font-bold text-white">
              Evita un investimento scollegato
            </Link>
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

      <section id="soluzioni" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Cosa fa GeoDomus</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Cosa puoi affidare a GeoDomus</h2>
            <p className="mt-5 text-lg leading-8 text-graphite/65">
              GeoDomus lavora su casa in legno, fotovoltaico, biomassa e priorita energetiche come parti dello stesso sistema tecnico.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {offerCards.map((card) => (
              <FadeIn key={card.title} className="overflow-hidden rounded-lg border border-graphite/10 bg-white shadow-soft">
                <div className="relative aspect-[4/3]">
                  <Image src={card.image} alt={card.alt} fill quality={76} sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-semibold tracking-tight">{card.title}</h3>
                  <p className="mt-4 leading-7 text-graphite/65">{card.text}</p>
                  <Link href={card.href} className="mt-6 inline-flex font-semibold text-forest">
                    Approfondisci
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
          <Link href="/contatti" className="mt-10 inline-flex min-h-12 items-center justify-center rounded-md bg-graphite px-6 font-bold text-white">
            Trova la soluzione adatta al tuo edificio
          </Link>
        </div>
      </section>

      <section className="bg-stone/55 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Percorsi</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Da dove parti?</h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {paths.map((path) => (
              <FadeIn key={path.title} className="rounded-lg border border-graphite/10 bg-white p-7 shadow-soft">
                <h3 className="text-2xl font-semibold tracking-tight">{path.title}</h3>
                <p className="mt-4 leading-7 text-graphite/65">{path.text}</p>
                <Link href="/contatti" className="mt-6 inline-flex min-h-11 items-center rounded-md border border-graphite/15 px-4 text-sm font-bold text-graphite">
                  {path.cta}
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo-geodomus" className="bg-graphite px-5 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-timber">Metodo GeoDomus 5D</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Un processo pensato per evitare interventi scollegati.</h2>
            <p className="mt-6 max-w-xl leading-8 text-white/65">
              Un processo pensato per evitare interventi scollegati e preventivi difficili da confrontare.
            </p>
            <Link href="/contatti" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 font-bold text-graphite">
              Scopri come lavoriamo
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

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Confronto</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Interventi separati vs approccio GeoDomus</h2>
          </FadeIn>
          <div className="mt-12 overflow-hidden rounded-lg border border-graphite/10 bg-white shadow-soft">
            <div className="grid bg-graphite text-white md:grid-cols-2">
              <p className="p-5 text-xl font-semibold">Approccio tradizionale</p>
              <p className="border-t border-white/10 p-5 text-xl font-semibold md:border-l md:border-t-0">Approccio GeoDomus</p>
            </div>
            {comparison.map(([traditional, geodomus]) => (
              <div key={traditional} className="grid border-t border-graphite/10 md:grid-cols-2">
                <p className="p-5 leading-7 text-graphite/65">{traditional}</p>
                <p className="border-t border-graphite/10 p-5 leading-7 font-semibold text-graphite md:border-l md:border-t-0">{geodomus}</p>
              </div>
            ))}
          </div>
          <Link href="/contatti" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-graphite px-6 font-bold text-white">
            Fai valutare il progetto prima di comprare singoli impianti
          </Link>
        </div>
      </section>

      <section className="bg-stone/55 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Percorso completo</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Dalla consulenza alla realizzazione.</h2>
            <p className="mt-5 text-lg leading-8 text-graphite/65">
              GeoDomus nasce per seguire l'intero percorso tecnico: prima l'analisi, poi il progetto, infine la realizzazione coordinata degli interventi.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {completePath.map((item) => (
              <FadeIn key={item.title} className="rounded-lg border border-graphite/10 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 leading-7 text-graphite/62">{item.text}</p>
              </FadeIn>
            ))}
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {visualStory.map((image) => (
              <FadeIn key={image.src} className="relative min-h-[260px] overflow-hidden rounded-lg bg-graphite">
                <Image src={image.src} alt={image.alt} fill quality={76} sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-graphite/10 to-transparent" aria-hidden="true" />
                <p className="absolute bottom-5 left-5 right-5 text-2xl font-semibold tracking-tight text-white">{image.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <SavingsCalculator />

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Visual tecnici</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Casa, energia e impianti nello stesso percorso.</h2>
            <p className="mt-5 text-lg leading-8 text-graphite/65">
              Le immagini sono riferimenti visivi coerenti con le aree di intervento GeoDomus: involucro, fotovoltaico, biomassa e gestione integrata.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((image) => (
              <FadeIn key={image.src} className="relative min-h-[300px] overflow-hidden rounded-lg bg-graphite shadow-soft">
                <Image src={image.src} alt={image.alt} fill quality={78} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/72 via-graphite/8 to-transparent" aria-hidden="true" />
                <p className="absolute bottom-5 left-5 right-5 text-2xl font-semibold tracking-tight text-white">{image.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Simulazione tecnica</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Simulazione tecnica su abitazione tipo</h2>
            <p className="mt-6 leading-8 text-graphite/65">
              Questo esempio non sostituisce una progettazione esecutiva. Serve a mostrare come GeoDomus ragiona su consumi, impianti e priorita di intervento.
            </p>
          </FadeIn>
          <FadeIn className="overflow-hidden rounded-lg border border-graphite/10 bg-white shadow-soft">
            <div className="relative aspect-[16/7]">
              <Image src="/images/villa-geodomus-hero-v2.jpg" alt="Esempio di villa moderna per progetto integrato casa ed energia" fill quality={76} sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6 lg:p-8">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.16em] text-forest">Contesto edificio</p>
                  <p className="mt-3 leading-7 text-graphite/65">Abitazione tipo in provincia di Udine, con tetto utile e impianto termico tradizionale da verificare sul posto.</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.16em] text-forest">Dati considerati</p>
                  <p className="mt-3 leading-7 text-graphite/65">Bolletta elettrica, spesa riscaldamento, superficie tetto, orientamento, abitudini e priorita del cliente.</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.16em] text-forest">Limiti della stima</p>
                  <p className="mt-3 leading-7 text-graphite/65">Il beneficio reale dipende da edificio, consumi, prezzi energia, incentivi disponibili e verifiche tecniche.</p>
                </div>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-4">
                {["Contesto edificio", "Ipotesi di intervento", "Priorita operative", "Stima da validare"].map((item) => (
                  <strong key={item} className="rounded-lg bg-warm p-4 text-center text-xl tracking-tight text-forest">
                    {item}
                  </strong>
                ))}
              </div>
              <Link href="/contatti" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-graphite px-6 font-bold text-white">
                Vuoi verificare se questa simulazione regge sul tuo edificio?
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Domande frequenti</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Cosa chiedono spesso i clienti?</h2>
            <p className="mt-6 leading-8 text-graphite/65">Risposte commerciali e tecniche per orientarti prima della verifica preliminare.</p>
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
              <Image src="/images/home-area-fvg-geodomus.jpg" alt="Casa sostenibile in legno per interventi a Udine e Friuli Venezia Giulia" fill quality={76} sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
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
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <p>{site.address}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTA
        title="Richiedi una verifica tecnica preliminare"
        text="Inviaci le informazioni essenziali sul tuo edificio o progetto. Ti aiuteremo a capire da quale intervento partire, quali dati servono e quali scelte evitare."
      />
    </main>
  );
}
