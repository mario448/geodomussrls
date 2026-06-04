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
    problem: "Il rischio e progettare casa, tetto e impianti in momenti separati: poi arrivano varianti, costi extra e soluzioni energetiche adattate male.",
    solution: "Progettiamo e realizziamo case prefabbricate in legno gia predisposte per fotovoltaico, accumulo, biomassa, comfort estivo e consumi ridotti.",
    proof: [
      "Potenziale risparmio energetico da stimare su bollette, involucro, tetto e impianto termico",
      "Indipendenza energetica valutata prima del capitolato, non a cantiere avviato",
      "Portfolio GeoDomus in costruzione: nessun numero gonfiato, solo casi documentabili"
    ],
    cta: "Scopri il potenziale della tua abitazione"
  },
  {
    title: "Proprietari che riqualificano",
    problem: "Molti proprietari ricevono preventivi separati per cappotto, serramenti, fotovoltaico o caldaia e non sanno quale intervento fare prima.",
    solution: "Costruiamo una sequenza tecnica: diagnosi dei consumi, priorita su involucro e tetto, impianto fotovoltaico, accumulo, biomassa o sostituzione del generatore.",
    proof: [
      "Risparmio annuo stimabile prima del sopralluogo con dati di bolletta e riscaldamento",
      "Meno varianti: copertura, passaggi impiantistici e locale tecnico verificati prima",
      "Casi pubblicabili: in avvio, con risultati da inserire solo dopo autorizzazione"
    ],
    cta: "Metti in ordine i lavori da fare"
  },
  {
    title: "Aziende agricole e strutture ricettive",
    problem: "Aziende agricole, agriturismi e B&B hanno consumi piu alti, picchi stagionali, superfici disponibili e bisogno di continuita: un impianto standard spesso non basta.",
    solution: "Valutiamo fotovoltaico su coperture o aree idonee, biomassa dove ha senso, locali tecnici, accumulo, autoconsumo, pratiche e interventi su magazzini, stalle o strutture ricettive.",
    proof: [
      "Ammortamento da calcolare su consumi reali, incentivi disponibili e profilo orario",
      "Biomassa valutata solo se deposito, accessi, canna fumaria e gestione combustibile sono sostenibili",
      "Portfolio aziendale in costruzione: priorita a numeri verificabili, non promesse commerciali"
    ],
    cta: "Richiedi una proposta per la tua attivita"
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
  {
    title: "Analisi esigenze",
    duration: "1 confronto, circa 20-45 minuti",
    text: "Capiremo famiglia o attivita, budget, tempi, bollette, comfort desiderato, problemi attuali e dati gia disponibili.",
    deliverable: "Elenco dati mancanti e primo orientamento tecnico"
  },
  {
    title: "Sopralluogo e verifiche",
    duration: "1 uscita tecnica, se il progetto e coerente",
    text: "Verifichiamo tetto, ombre, accessi, locale tecnico, vincoli, spazi per biomassa, impianti esistenti e criticita di cantiere.",
    deliverable: "Report sintetico con priorita, criticita e foto"
  },
  {
    title: "Progettazione tecnica",
    duration: "Indicativamente 15-20 giorni dopo i dati completi",
    text: "Definiamo struttura, fotovoltaico, biomassa, accumulo, predisposizioni, pratiche, incentivi da verificare e sequenza dei lavori.",
    deliverable: "Schema tecnico, capitolato e preventivo leggibile"
  },
  {
    title: "Realizzazione",
    duration: "Tempi variabili per autorizzazioni e tipo di intervento",
    text: "Coordiniamo fornitori, cantiere, installazioni, controlli tecnici, allacci, collaudi e aggiornamenti operativi al cliente.",
    deliverable: "Intervento realizzato, impianti testati e documentazione finale"
  },
  {
    title: "Assistenza post-intervento",
    duration: "Dopo consegna",
    text: "Restiamo il riferimento per manutenzioni, anomalie, ottimizzazione consumi e dubbi sul funzionamento del sistema.",
    deliverable: "Un referente unico anche dopo il cantiere"
  }
];

const savingsScenarios = [
  {
    title: "Famiglia, casa o riqualificazione da 120 mq",
    before: "2.400-3.600 euro/anno tra elettricita e riscaldamento",
    after: "900-1.800 euro/anno in uno scenario integrato da verificare",
    saving: "Risparmio potenziale: 35-60%",
    investment: "Investimento: da stimare su progetto, involucro, impianti e incentivi disponibili",
    note: "Non promettiamo zero bollette: calcoliamo il potenziale su dati reali prima di far spendere soldi."
  },
  {
    title: "Azienda agricola o struttura ricettiva",
    before: "Consumi spesso concentrati su lavorazioni, celle, acqua calda, ospitalita o climatizzazione",
    after: "Fotovoltaico, accumulo e biomassa possono ridurre la dipendenza energetica se dimensionati sui carichi reali",
    saving: "Ritorno da calcolare su profilo orario, potenza, incentivi e autoconsumo",
    investment: "Investimento: variabile per kWp, pratiche, coperture, connessione e locale tecnico",
    note: "Il progetto parte da bollette e curve di consumo, non da un numero commerciale uguale per tutti."
  }
];

const benefitCards = [
  {
    title: "Bollette sotto controllo",
    before: "Preventivi separati e risparmio difficile da capire",
    after: "Stima preliminare con bollette, tetto, riscaldamento e consumi",
    result: "Sai se vale la pena approfondire prima di impegnarti"
  },
  {
    title: "Cantiere piu prevedibile",
    before: "Fotovoltaico e biomassa aggiunti dopo il progetto",
    after: "Predisposizioni, locale tecnico e passaggi definiti prima",
    result: "Meno varianti, meno ritardi, meno scarico di responsabilita"
  },
  {
    title: "Comfort reale",
    before: "Casa efficiente solo sulla carta",
    after: "Involucro, impianti e abitudini progettati insieme",
    result: "Temperatura piu stabile, consumi piu leggibili, gestione piu semplice"
  },
  {
    title: "Partner locale",
    before: "Fornitori distanti o scollegati tra loro",
    after: "Un referente in FVG per progetto, cantiere e assistenza",
    result: "Parli con chi conosce clima, vincoli e incentivi regionali"
  }
];

const trustCards = [
  {
    title: "Impresa nata per integrare le competenze",
    text: "GeoDomus e una realta appena formata con un obiettivo preciso: evitare che progettazione, casa, fotovoltaico, biomassa e cantiere restino scollegati."
  },
  {
    title: "Rete tecnica locale",
    text: "Lavoriamo con professionisti, imprese e installatori del territorio per costruire un percorso operativo vicino al cliente e verificabile sul posto."
  },
  {
    title: "Numeri solo quando sono documentabili",
    text: "Non gonfiamo case realizzate, certificazioni o recensioni. Pubblicheremo casi, foto e risultati energetici solo quando saranno autorizzati e misurabili."
  }
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
              Case in legno, fotovoltaico e biomassa in un unico progetto.
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-white">
              Meno bollette inutili, piu comfort e un cantiere coordinato: GeoDomus progetta e realizza il sistema casa-energia in Friuli Venezia Giulia.
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-white/86">
              Prima progettiamo il sistema casa-energia. Poi coordiniamo cantiere, installazioni, collaudo e assistenza.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div>
                <Link href="/contatti" className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 font-bold text-graphite shadow-lg shadow-black/25">
                  Valutazione gratuita del potenziale di risparmio
                </Link>
                <p className="mt-2 max-w-xl text-sm font-medium text-white/70">
                  Risposta entro 48 ore lavorative: capiamo se il progetto ha senso e quali dati servono.
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

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Valutazione gratuita</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Scopri il tuo potenziale di risparmio energetico</h2>
            <p className="mt-6 text-lg leading-8 text-graphite/65">
              In 60 secondi ci invii i dati minimi. Ti diciamo quali informazioni servono per valutare casa nuova, riqualificazione, azienda agricola, fotovoltaico o biomassa senza perdere tempo in preventivi generici.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Nessun impegno", "Risposta entro 48h", "Prima verifica gratuita"].map((item) => (
                <p key={item} className="rounded-md bg-warm p-4 text-sm font-bold text-graphite/72">
                  {item}
                </p>
              ))}
            </div>
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

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Quanto risparmi</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Numeri prima del preventivo: quanto puo valere un progetto integrato?</h2>
            <p className="mt-6 text-lg leading-8 text-graphite/65">
              Questi non sono risultati promessi. Sono scenari di orientamento per capire l'ordine di grandezza e decidere se fare una verifica tecnica su bollette, tetto, edificio, consumi e incentivi.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {savingsScenarios.map((scenario) => (
              <FadeIn key={scenario.title} className="rounded-lg border border-graphite/10 bg-warm p-6 shadow-soft">
                <h3 className="text-3xl font-semibold tracking-tight">{scenario.title}</h3>
                <div className="mt-6 grid gap-3">
                  <p className="rounded-md bg-white p-4 leading-7 text-graphite/68">
                    <strong className="block text-graphite">Prima</strong>
                    {scenario.before}
                  </p>
                  <p className="rounded-md bg-white p-4 leading-7 text-graphite/68">
                    <strong className="block text-graphite">Con progetto integrato</strong>
                    {scenario.after}
                  </p>
                  <p className="rounded-md bg-graphite p-4 text-xl font-semibold leading-7 text-white">{scenario.saving}</p>
                  <p className="rounded-md bg-white p-4 leading-7 text-graphite/68">
                    <strong className="block text-graphite">Investimento e ritorno</strong>
                    {scenario.investment}
                  </p>
                  <p className="text-sm font-semibold leading-6 text-graphite/55">{scenario.note}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <Link href="#calcolatore-risparmio" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-graphite px-6 font-bold text-white">
            Calcola il tuo scenario personale
          </Link>
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

      <section className="bg-stone/55 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Chi siamo</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">GeoDomus: una regia tecnica locale per casa ed energia.</h2>
            <p className="mt-6 text-lg leading-8 text-graphite/65">
              Non vendiamo singoli prodotti come se fossero soluzioni universali. Il nostro lavoro e trasformare un obiettivo abitativo o energetico in un percorso progettato, realizzato e seguito da un unico referente.
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

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Vantaggi concreti</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Quello che ottieni scegliendo GeoDomus</h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {benefitCards.map((benefit) => (
              <FadeIn key={benefit.title} className="rounded-lg border border-graphite/10 bg-warm p-6">
                <h3 className="text-2xl font-semibold tracking-tight">{benefit.title}</h3>
                <p className="mt-5 text-sm font-bold uppercase tracking-[.14em] text-timber">Prima</p>
                <p className="mt-2 leading-7 text-graphite/62">{benefit.before}</p>
                <p className="mt-5 text-sm font-bold uppercase tracking-[.14em] text-forest">Con GeoDomus</p>
                <p className="mt-2 leading-7 text-graphite/62">{benefit.after}</p>
                <p className="mt-5 rounded-md bg-white p-4 font-semibold leading-7 text-graphite">{benefit.result}</p>
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
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Ogni cliente ha un problema diverso. Il progetto parte da li.</h2>
            <p className="mt-6 text-lg leading-8 text-graphite/65">
              Una famiglia non decide come un'azienda agricola. Una riqualificazione non ha le stesse priorita di una nuova casa. Per questo GeoDomus separa problemi, numeri e percorso tecnico prima di proporre una soluzione.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {paths.map((path) => (
              <FadeIn key={path.title} className="rounded-lg border border-graphite/10 bg-white p-7 shadow-soft">
                <h3 className="text-2xl font-semibold tracking-tight">{path.title}</h3>
                <div className="mt-5 grid gap-4">
                  <div className="rounded-md bg-warm p-4">
                    <p className="text-xs font-bold uppercase tracking-[.14em] text-timber">Problema tipico</p>
                    <p className="mt-2 leading-7 text-graphite/68">{path.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.14em] text-forest">Soluzione GeoDomus</p>
                    <p className="mt-2 leading-7 text-graphite/68">{path.solution}</p>
                  </div>
                  <div className="grid gap-2">
                    {path.proof.map((item) => (
                      <p key={item} className="rounded-md border border-graphite/10 px-4 py-3 text-sm font-semibold leading-6 text-graphite/72">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <Link href="/contatti" className="mt-6 inline-flex min-h-11 items-center rounded-md bg-graphite px-4 text-sm font-bold text-white">
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
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-semibold tracking-tight">{step.title}</h3>
                    <span className="rounded-md bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[.12em] text-timber">{step.duration}</span>
                  </div>
                  <p className="mt-3 leading-7 text-white/62">{step.text}</p>
                  <p className="mt-4 rounded-md bg-white/[.06] p-3 text-sm font-semibold leading-6 text-white/72">Output: {step.deliverable}</p>
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
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Dove operiamo: Friuli Venezia Giulia e zone limitrofe</h2>
            <p className="mt-6 text-lg leading-8 text-graphite/65">
              Ufficio principale a Udine. Lavoriamo in FVG e valutiamo progetti nelle zone limitrofe quando distanza, sopralluoghi e assistenza restano gestibili.
            </p>
            <p className="mt-5 leading-8 text-graphite/62">
              Perche locale conta: conosciamo clima, coperture, vincoli paesaggistici, aree rurali, disponibilita di biomassa e incentivi regionali. Non sei seguito da un call center: parli con un referente vicino al cantiere.
            </p>
            <Link href="/contatti" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-graphite px-6 font-bold text-white">
              Verifica se il tuo comune e servito
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
                  ["Base operativa", "Udine e provincia"],
                  ["Raggio d'azione", "Friuli Venezia Giulia: Udine, Pordenone, Gorizia, Trieste e comuni limitrofi"],
                  ["Valutazione distanza", "Per ogni richiesta verifichiamo sopralluoghi, cantiere e assistenza prima di confermare l'intervento"]
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
