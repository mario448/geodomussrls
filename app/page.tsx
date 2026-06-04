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
  { value: "Progettazione", label: "Definiamo casa, fotovoltaico, biomassa, priorita tecniche e capitolato prima di iniziare." },
  { value: "Realizzazione", label: "Coordiniamo cantiere, installazioni, forniture, verifiche e consegna degli interventi." },
  { value: "Un solo referente", label: "Il cliente non deve inseguire progettista, impresa e installatori separati." }
];

const risks = [
  "Progettista, impresa edile e installatori che non lavorano sulla stessa sequenza tecnica",
  "Casa in legno realizzata senza predisporre davvero fotovoltaico e locale tecnico",
  "Fotovoltaico aggiunto dopo, con passaggi, quadri e accumulo gestiti come varianti",
  "Biomassa scelta quando spazi, canna fumaria e fabbisogno non sono stati previsti in progetto"
];

const offerTable = [
  ["Analisi preliminare", "Edificio, consumi, obiettivi, budget indicativo", "Bollette, foto, planimetrie, vincoli locali", "Quadro iniziale di fattibilita e dati mancanti"],
  ["Progettazione", "Sequenza tecnica tra casa, impianti e priorita", "Progettisti, fornitori, installatori e pratiche", "Schema di intervento e capitolato leggibile"],
  ["Casa in legno", "Involucro, layout, comfort, predisposizioni impiantistiche", "Struttura, tetto, serramenti, impianti e tempi di cantiere", "Progetto coerente con energia e riscaldamento"],
  ["Fotovoltaico", "Dimensionamento, copertura, autoconsumo e accumulo", "Passaggi, quadri, inverter, vincoli e monitoraggio", "Impianto dimensionato sui consumi reali"],
  ["Biomassa", "Fabbisogno termico, locale tecnico, deposito e gestione", "Canna fumaria, accessi, manutenzione e integrazione", "Soluzione termica compatibile con edificio e uso"],
  ["Pratiche e documentazione", "Documenti tecnici disponibili e necessari", "Permessi, incentivi, schede impianto e dati catastali", "Elenco documenti e responsabilita definite"],
  ["Cantiere", "Sequenza operativa e priorita degli interventi", "Forniture, installazioni, controlli e varianti", "Cronoprogramma tecnico condiviso"],
  ["Collaudo e assistenza", "Funzionamento impianti e documentazione finale", "Verifiche, consegna documenti, manutenzione futura", "Sistema consegnato con riferimenti chiari"]
];

const technicalCards = [
  {
    title: "Tetto verificato",
    text: "Analizziamo orientamento, superficie utile, ombre, inclinazione e possibilita di installazione prima di parlare di potenza dell'impianto.",
    image: "/images/home-fotovoltaico-tetto-geodomus.jpg"
  },
  {
    title: "Locale tecnico valutato",
    text: "Verifichiamo spazi, accessi, ventilazione, deposito combustibile, canna fumaria e compatibilita con gli impianti esistenti.",
    image: "/images/home-biomassa-locale-geodomus.jpg"
  },
  {
    title: "Consumi analizzati",
    text: "Partiamo da bollette, abitudini d'uso, fabbisogno termico e profilo elettrico. Senza dati, il preventivo e solo una supposizione.",
    image: "/images/villa-geodomus-hero.jpg"
  },
  {
    title: "Soluzione dimensionata",
    text: "Proponiamo componenti e priorita in base al sistema complessivo: edificio, energia, riscaldamento, budget e tempi.",
    image: "/images/villa-geodomus-hero-v2.jpg"
  }
];

const avoidTable = [
  ["Fotovoltaico deciso dopo il progetto del tetto", "Varianti, canaline visibili, costi extra", "Predisposizione tecnica prima del cantiere"],
  ["Biomassa scelta tardi", "Locale tecnico inadatto o costi aggiuntivi", "Verifica spazi, canna fumaria e deposito prima del preventivo"],
  ["Preventivi separati", "Nessuno risponde del sistema completo", "Capitolato integrato e responsabilita definite"],
  ["Impianto sovradimensionato", "Spesa inutile e ritorno economico piu debole", "Dimensionamento su consumi e fabbisogni reali"],
  ["Cliente senza dati tecnici", "Decisioni a sensazione", "Raccolta bollette, foto, planimetrie e obiettivi"]
];

const fitCriteria = {
  yes: [
    "vuoi costruire o riqualificare con una visione completa",
    "vuoi evitare fornitori scollegati",
    "vuoi capire l'ordine corretto degli interventi",
    "vuoi valutare impianti in funzione dell'edificio",
    "hai bisogno di un referente che coordini le decisioni tecniche",
    "sei disposto a condividere dati, bollette, foto, planimetrie e budget indicativo"
  ],
  no: [
    "cerchi solo il prezzo piu basso",
    "vuoi un preventivo immediato senza dati",
    "hai gia deciso tutto e vuoi solo posa",
    "non vuoi fare un'analisi preliminare",
    "vuoi confrontare offerte solo sul prezzo al kWp o sul costo al metro quadro"
  ]
};

const offerCards = [
  {
    title: "Casa in legno",
    text: "Progettiamo e realizziamo case prefabbricate in legno predisposte fin dall'inizio per impianti, comfort, isolamento e tempi di cantiere.",
    href: "/case-prefabbricate-legno-udine",
    image: "/images/case-legno-geodomus.jpg",
    alt: "Dettaglio di casa prefabbricata in legno"
  },
  {
    title: "Fotovoltaico",
    text: "Progettiamo e installiamo il fotovoltaico dentro la logica dell'edificio: copertura, passaggi, quadri, accumulo e autoconsumo.",
    href: "/fotovoltaico-udine-fvg",
    image: "/images/fotovoltaico-geodomus.jpg",
    alt: "Pannelli fotovoltaici su copertura"
  },
  {
    title: "Biomassa",
    text: "Dimensioniamo e realizziamo sistemi a biomassa valutando fabbisogno, deposito combustibile, locale tecnico, manutenzione e integrazione con la casa.",
    href: "/riscaldamento-biomassa-udine",
    image: "/images/biomassa-geodomus.jpg",
    alt: "Locale tecnico per impianto a biomassa"
  },
  {
    title: "Soluzioni integrate",
    text: "Un'unica regia tra progettazione, cantiere, involucro, produzione elettrica, generazione termica, installazione e collaudo.",
    href: "/soluzioni-integrate",
    image: "/images/villa-geodomus-hero-v2.jpg",
    alt: "Abitazione moderna con sistemi energetici integrati"
  }
];

const paths = [
  {
    title: "Famiglie che vogliono costruire",
    text: "Realizziamo il percorso completo: casa in legno, impianti integrati, fotovoltaico, biomassa e consegna coordinata.",
    cta: "Verifica il progetto casa"
  },
  {
    title: "Proprietari che riqualificano",
    text: "Coordiniamo interventi su involucro, tetto, impianti e priorita operative per evitare lavori scollegati.",
    cta: "Organizza gli interventi"
  },
  {
    title: "Aziende agricole e strutture ricettive",
    text: "Realizziamo soluzioni energetiche integrate valutando consumi, biomassa disponibile, superfici, continuita d'uso e cantiere.",
    cta: "Valuta il progetto aziendale"
  }
];

const completePath = [
  {
    title: "Primo contatto",
    text: "Raccogliamo obiettivi, budget indicativo, contesto dell'edificio o del terreno e tempi desiderati."
  },
  {
    title: "Verifica tecnica",
    text: "Valutiamo fattibilita, accessi, vincoli, copertura, impianti esistenti e dati energetici disponibili."
  },
  {
    title: "Progetto esecutivo",
    text: "Definiamo casa, fotovoltaico, biomassa, materiali, impianti, priorita e cronoprogramma coerente."
  },
  {
    title: "Cantiere e consegna",
    text: "Coordiniamo realizzazione, installazione, collaudo e assistenza post-intervento con un unico referente."
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
  { title: "Dati e obiettivo", text: "Raccogliamo informazioni su terreno o edificio, consumi, budget indicativo, tempi, vincoli e aspettative." },
  { title: "Progettazione integrata", text: "Casa in legno, fotovoltaico e biomassa vengono progettati insieme, prima che il cantiere generi varianti costose." },
  { title: "Preventivo coerente", text: "Il cliente confronta una soluzione completa, non tre preventivi separati con responsabilita diverse." },
  { title: "Realizzazione coordinata", text: "GeoDomus coordina cantiere, forniture, installazioni e controlli tecnici secondo un cronoprogramma condiviso." },
  { title: "Collaudo e assistenza", text: "Verifichiamo impianti, funzionamento e documentazione finale, restando il riferimento unico dopo l'intervento." }
];

const comparison = [
  ["Ogni fornitore vende il proprio pezzo", "Una sola regia tra casa, fotovoltaico e biomassa"],
  ["Il progettista disegna e poi il cliente cerca chi realizza", "Il progetto nasce gia pensando a cantiere, impianti e installazioni"],
  ["Fotovoltaico e biomassa arrivano dopo come aggiunte", "Passaggi tecnici, locali, quadri e predisposizioni sono previsti prima"],
  ["I preventivi sono difficili da confrontare", "Il cliente valuta una soluzione completa e coerente"],
  ["Se qualcosa non funziona, le responsabilita si scaricano", "Un referente coordina qualita, tempi, verifiche e assistenza"]
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
              Progettiamo e realizziamo case efficienti, impianti e riqualificazioni.
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-white">
              GeoDomus segue progettazione e realizzazione di case in legno, fotovoltaico, biomassa e riqualificazione energetica in un unico percorso tecnico in Friuli Venezia Giulia.
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-white/86">
              Prima progettiamo il sistema casa-energia. Poi coordiniamo cantiere, installazioni, collaudo e assistenza.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div>
                <Link href="/contatti" className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 font-bold text-graphite shadow-lg shadow-black/25">
                  Richiedi una prima valutazione tecnica gratuita
                </Link>
                <p className="mt-2 max-w-xl text-sm font-medium text-white/70">
                  In 20 minuti capiamo se il progetto ha senso, quali dati servono e quali errori evitare prima di chiedere preventivi.
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

      <section className="bg-stone/55 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Cosa fa GeoDomus</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Progettazione e realizzazione nello stesso percorso tecnico.</h2>
            <p className="mt-6 text-lg leading-8 text-graphite/65">
              GeoDomus non consegna solo una consulenza e non vende solo singoli impianti. Progetta il sistema casa-energia e ne segue la realizzazione: struttura, fotovoltaico, biomassa, riqualificazione, cantiere, installazioni e collaudo.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Progettiamo il sistema",
                text: "Casa, tetto, impianti, consumi, biomassa e budget vengono letti insieme prima del capitolato."
              },
              {
                title: "Realizziamo gli interventi",
                text: "Il progetto non resta su carta: GeoDomus coordina cantiere, forniture, installazioni e verifiche operative."
              },
              {
                title: "Coordiniamo le parti tecniche",
                text: "Progettisti, impresa, installatori e pratiche vengono gestiti dentro una sequenza coerente."
              },
              {
                title: "Consegniamo un percorso chiaro",
                text: "Sai quali dati servono, cosa viene realizzato, quali passaggi sono critici e chi segue ogni fase."
              }
            ].map((item) => (
              <FadeIn key={item.title} className="rounded-lg border border-graphite/10 bg-white p-6 shadow-soft">
                <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-4 leading-7 text-graphite/65">{item.text}</p>
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 rounded-lg bg-graphite p-6 text-white shadow-soft lg:grid lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-10">
            <p className="text-2xl font-semibold tracking-tight">Prima progettiamo il sistema. Poi lo realizziamo.</p>
            <p className="mt-4 leading-8 text-white/68 lg:mt-0">
              Un impianto efficiente dentro un progetto sbagliato resta un costo. Per questo colleghiamo analisi, progetto, cantiere e installazioni nello stesso percorso.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Verifiche tecniche</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Dal sopralluogo alla soluzione tecnica</h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {technicalCards.map((card) => (
              <FadeIn key={card.title} className="overflow-hidden rounded-lg border border-graphite/10 bg-white shadow-soft">
                <div className="relative aspect-[4/3]">
                  <Image src={card.image} alt={card.title} fill quality={76} sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold tracking-tight">{card.title}</h3>
                  <p className="mt-4 leading-7 text-graphite/65">{card.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.82fr_1.18fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Problema</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Il rischio non e solo spendere troppo. E avere responsabilita divise.</h2>
            <p className="mt-6 text-lg leading-8 text-graphite/65">
              Molti percorsi partono con un progettista, poi un'impresa, poi un installatore fotovoltaico, poi un tecnico per il riscaldamento. Il problema e che edificio, impianti e consumi si influenzano tra loro. Se ogni parte lavora separata, il cliente resta in mezzo a preventivi, varianti e responsabilita difficili da gestire.
            </p>
            <Link href="/contatti" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-graphite px-6 font-bold text-white">
              Evita un cantiere frammentato
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

      <section className="bg-stone/55 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Per chi lavoriamo</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Realizziamo percorsi diversi, con la stessa regia integrata.</h2>
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
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-timber">Dal contatto alla consegna</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Il processo GeoDomus dal primo confronto al collaudo.</h2>
            <p className="mt-6 max-w-xl leading-8 text-white/65">
              Non e una consulenza che finisce con un PDF. E un percorso operativo: primo contatto, verifica tecnica, progetto integrato, cantiere, installazioni, collaudo e assistenza.
            </p>
            <Link href="/contatti" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 font-bold text-graphite">
              Prenota il primo confronto
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

      <section className="bg-stone/55 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Errori evitabili</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Cosa evitiamo concretamente</h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {avoidTable.slice(0, 3).map(([risk, consequence, prevention]) => (
              <FadeIn key={risk} className="rounded-lg border border-graphite/10 bg-white p-6 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-[.14em] text-forest">Rischio</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{risk}</h3>
                <p className="mt-4 leading-7 text-graphite/62">{consequence}</p>
                <p className="mt-5 rounded-md bg-warm p-4 font-semibold leading-7 text-forest">{prevention}</p>
              </FadeIn>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-graphite/65">
            Il nostro lavoro non e vendere il componente piu costoso. E evitare scelte scollegate che generano varianti, ritardi e costi non previsti.
          </p>
        </div>
      </section>

      <SavingsCalculator />

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Domande frequenti</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Cosa chiedono spesso i clienti?</h2>
            <p className="mt-6 leading-8 text-graphite/65">Risposte commerciali e tecniche per orientarti prima della verifica preliminare.</p>
          </FadeIn>
          <div className="grid gap-3">
            {faqs.slice(0, 3).map((faq) => (
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
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Progetti energetici e case in legno in Friuli Venezia Giulia</h2>
            <p className="mt-6 text-lg leading-8 text-graphite/65">
              Lavoriamo su progetti in provincia di Udine, Pordenone, Gorizia e Trieste, con particolare attenzione a clima, vincoli locali, caratteristiche degli edifici, disponibilita di spazio tecnico e integrazione tra involucro e impianti.
            </p>
            <Link href="/contatti" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-graphite px-6 font-bold text-white">
              Verifica il tuo progetto nel tuo comune
            </Link>
          </FadeIn>
          <FadeIn className="overflow-hidden rounded-lg border border-graphite/10 bg-white shadow-soft">
            <div className="relative aspect-[16/8]">
              <Image src="/images/home-area-fvg-geodomus.jpg" alt="Casa sostenibile in legno per interventi a Udine e Friuli Venezia Giulia" fill quality={76} sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Zone principali</p>
              <div className="mt-5 grid gap-3">
                {[
                  ["Udine e provincia", "Interventi su abitazioni, nuove costruzioni, riqualificazioni e impianti integrati per famiglie e proprietari di edifici esistenti."],
                  ["Aree rurali e agricole", "Soluzioni per aziende agricole, contesti con disponibilita di biomassa, spazi tecnici e fabbisogni energetici piu elevati."],
                  ["Strutture ricettive", "Valutazioni per agriturismi, B&B e strutture che devono controllare consumi, comfort e continuita di servizio."]
                ].map(([title, text]) => (
                  <div key={title} className="rounded-md border border-graphite/10 bg-warm p-4">
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-graphite/62">{text}</p>
                  </div>
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
        title="Hai gia un'idea, un terreno, un edificio o dei preventivi separati?"
        text="Inviaci i dati principali. Ti diciamo quali informazioni mancano, quali criticita valutare e quale percorso tecnico seguire prima di impegnarti economicamente."
      />
    </main>
  );
}
