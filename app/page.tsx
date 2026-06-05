import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { HomeLeadForm } from "@/components/HomeLeadForm";
import { FadeIn } from "@/components/Motion";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { localBusinessJsonLd, site } from "@/data/site";
import { faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "GeoDomus | Progettazione e realizzazione energia FVG",
  description:
    "Studio tecnico e impresa edile per case in legno, fotovoltaico e biomasse a Udine e Gorizia. Valutazione preliminare GeoDomus.",
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
    href: "/case-prefabbricate-legno-udine",
    image: "/images/home-cantiere-legno-geodomus.jpg",
    alt: "Cantiere di casa prefabbricata in legno per progetto GeoDomus a Udine e Gorizia"
  },
  {
    title: "Impianti fotovoltaici e sistemi di accumulo",
    text: "Dimensioniamo impianti fotovoltaici in FVG partendo da consumi, orientamento, ombre, potenza disponibile e profilo di autoconsumo. Valutiamo kWp, inverter, accumulo, quadri, passaggi e monitoraggio, così l'impianto lavora con l'edificio invece di essere aggiunto come accessorio.",
    href: "/fotovoltaico-udine-fvg",
    image: "/images/home-fotovoltaico-tetto-geodomus.jpg",
    alt: "Tetto con impianto fotovoltaico per abitazione efficiente in Friuli Venezia Giulia"
  },
  {
    title: "Sistemi di riscaldamento a biomasse",
    text: "Valutiamo caldaie a biomasse a pellet o cippato per abitazioni, aziende agricole e strutture ricettive. Prima della macchina verifichiamo fabbisogno termico, deposito combustibile, canna fumaria, accessi, manutenzione e integrazione con fotovoltaico e accumulo termico.",
    href: "/riscaldamento-biomassa-udine",
    image: "/images/home-biomassa-locale-geodomus.jpg",
    alt: "Locale tecnico con impianto a biomasse pellet o cippato in provincia di Udine"
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
    text: "Quando struttura, impianti e pratiche autorizzative vengono decisi separatamente, le varianti arrivano tardi e il cliente paga raccordi, ritardi e incompatibilità."
  },
  {
    title: "Risultati misurabili, non promesse decorative",
    text: "Partiamo da trasmittanza, orientamento, fabbisogno termico, kWp installabili, consumi e vincoli locali. I casi studio verranno pubblicati solo con dati autorizzati e confrontabili."
  }
];

const guarantees = [
  {
    title: "Costo bloccato sulle voci contrattualizzate",
    text: "Le lavorazioni incluse nel capitolato firmato non cambiano prezzo senza approvazione scritta. Restano escluse variazioni richieste dal cliente, imprevisti non rilevabili prima delle indagini, prescrizioni degli enti e modifiche normative."
  },
  {
    title: "Cronoprogramma con responsabilità definite",
    text: "Ogni fase ha responsabile, dipendenze e documenti di avanzamento. I ritardi imputabili a GeoDomus vengono gestiti secondo condizioni contrattuali esplicite; ritardi di enti, forniture o varianti vengono separati."
  },
  {
    title: "Ingegnerizzazione impiantistica integrata",
    text: "Struttura in legno, impianto termico, fotovoltaico, accumulo e isolamento nascono nello stesso progetto per ridurre ponti termici, sprechi e incompatibilità tecniche."
  }
];

const trustBeforeData = [
  "Non vendiamo impianti standard prima di leggere edificio, consumi e vincoli.",
  "Non facciamo preventivi seri senza sopralluogo o dati minimi verificabili.",
  "Separiamo sempre consulenza, progettazione, fornitura, posa e assistenza.",
  "Ti diciamo anche quando non conviene procedere o quando un intervento va rimandato.",
  "Ogni proposta deve indicare cosa è compreso, escluso, verificato e da approfondire.",
  "Prima della firma servono capitolato, responsabilità, cronoprogramma e condizioni."
];

const preliminaryOutputs = [
  "schema delle criticità tecniche",
  "ordine corretto degli interventi",
  "stima investimento per fasce",
  "documenti mancanti",
  "decisione: procedere, rimandare o escludere"
];

const feasibilityItems = [
  "lettura del contesto: edificio, terreno, tetto, consumi o fabbisogno",
  "prima lista di vincoli tecnici, urbanistici e impiantistici da verificare",
  "ordine consigliato degli interventi: cosa fare subito, cosa rimandare, cosa evitare",
  "documenti e foto necessari per passare a sopralluogo, progetto o preventivo analitico"
];

const nextSteps = [
  {
    title: "1. Invii dati minimi",
    text: "Comune, obiettivo, foto, bollette se disponibili, stato dell'immobile o del terreno."
  },
  {
    title: "2. Facciamo una prima lettura tecnica",
    text: "Individuiamo vincoli, priorità, dati mancanti e interventi che rischiano di essere prematuri."
  },
  {
    title: "3. Decidiamo il passo utile",
    text: "Sopralluogo, raccolta documenti, studio preliminare o stop tecnico se l'intervento non conviene."
  }
];

const comparisonRows = [
  ["Preventivo", "Prezzo rapido su ipotesi incomplete", "Capitolato con incluso, escluso e dati da verificare"],
  ["Responsabilità", "Cliente che coordina tecnico, impresa e installatori", "Un percorso unico tra progetto, pratiche, posa e collaudo"],
  ["Impianti", "Fotovoltaico, biomassa e involucro scelti separatamente", "Dimensionamento integrato su consumi, tetto, calore e cantiere"],
  ["Rischio", "Varianti e incompatibilità scoperte dopo la firma", "Criticità dichiarate prima di impegnare budget importante"]
];

const comparisonVisuals = [
  {
    src: "/images/case-legno-geodomus.jpg",
    alt: "Casa prefabbricata in legno in Friuli Venezia Giulia progettata con impianti integrati",
    label: "Casa e involucro"
  },
  {
    src: "/images/fotovoltaico-geodomus.jpg",
    alt: "Impianto fotovoltaico su abitazione a Udine dimensionato su consumi reali",
    label: "Produzione elettrica"
  },
  {
    src: "/images/biomassa-geodomus.jpg",
    alt: "Sistema di riscaldamento a biomassa per abitazione efficiente in FVG",
    label: "Calore e biomassa"
  }
];

const targetBlocks = [
  {
    target: "Famiglie che vogliono costruire",
    problem: "Terreno disponibile, ma troppe decisioni scollegate tra casa in legno, impianti, pratiche e budget.",
    output: "Capitolato integrato casa-impianti-cantiere con priorità tecniche, vincoli da verificare e ordine corretto delle scelte.",
    cta: "Verifica se il progetto è pronto",
    href: "/case-prefabbricate-legno-udine"
  },
  {
    target: "Proprietari che riqualificano",
    problem: "Bollette alte, preventivi non confrontabili e dubbio su cosa fare prima: tetto, cappotto, fotovoltaico o generatore.",
    output: "Sequenza tecnica tra involucro, tetto, fotovoltaico e calore, con stima per fasce e criticità da controllare.",
    cta: "Ordina gli interventi",
    href: "/soluzioni-integrate"
  },
  {
    target: "Aziende agricole e agriturismi",
    problem: "Consumi stagionali elevati, superfici utili, biomassa disponibile e necessità di non fermare l'attività.",
    output: "Analisi di consumi, superfici, deposito, continuità operativa e fabbisogni termici prima di scegliere impianto o cantiere.",
    cta: "Valuta progetto aziendale",
    href: "/energia-aziende-agricole-agriturismi-fvg"
  }
];

const homeFaqs = [
  {
    question: "GeoDomus è una nuova società: perché dovrei fidarmi?",
    answer:
      "Perché non chiediamo fiducia sulla parola. Prima della firma mettiamo nero su bianco dati verificati, capitolato, inclusioni, esclusioni, responsabilità, cronoprogramma e condizioni contrattuali."
  },
  {
    question: "Fate progettazione e realizzazione o solo consulenza?",
    answer:
      "GeoDomus unisce studio tecnico e impresa edile: seguiamo diagnosi, progettazione, pratiche, direzione tecnica, realizzazione, coordinamento impianti e collaudo finale."
  },
  {
    question: "Potete dirmi subito quanto costa?",
    answer:
      "Possiamo dare fasce indicative solo dopo dati minimi. Un preventivo serio richiede edificio, consumi, obiettivi, vincoli, foto, documenti e sopralluogo quando necessario."
  },
  {
    question: "Cosa succede se l'intervento non conviene?",
    answer:
      "Lo diciamo prima. La verifica di fattibilità serve anche a escludere interventi deboli, rimandare fasi non mature o correggere l'ordine delle priorità."
  }
];

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    localBusinessJsonLd,
    {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      inLanguage: "it-IT",
      potentialAction: {
        "@type": "ContactAction",
        target: `${site.url}/contatti`,
        name: "Richiedi verifica di fattibilità casa energia"
      }
    },
    serviceJsonLd("Case prefabbricate in legno e impianti integrati in FVG", site.description, "/"),
    faqJsonLd(homeFaqs)
  ]
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
              Progettiamo e realizziamo case in legno, fotovoltaico e biomassa in FVG.
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-white">
              GeoDomus è studio tecnico e impresa edile: un unico referente per diagnosi, pratiche, progettazione, cantiere, impianti e collaudo tra Udine e Gorizia.
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-white/86">
              Prima verifichiamo se l'intervento ha senso. Poi trasformiamo casa, energia e lavori in un progetto realizzabile, con responsabilità chiare.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contatti" className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 font-bold text-graphite shadow-lg shadow-black/25">
                Verifica se il progetto è fattibile
              </Link>
              <Link href="#diagnostica" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/45 bg-white/16 px-6 font-bold text-white backdrop-blur">
                Fai la diagnostica veloce
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
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Perché fidarsi prima dei dati</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Non ti vendiamo un impianto. Ti aiutiamo a non sbagliare investimento.</h2>
          </FadeIn>
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {trustBeforeData.map((item) => (
              <FadeIn key={item} className="rounded-lg border border-graphite/10 bg-warm p-5 font-semibold leading-7 text-graphite/72">
                {item}
              </FadeIn>
            ))}
          </div>
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

      <section className="bg-stone/55 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Output concreto</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Cosa ricevi dopo la verifica di fattibilità.</h2>
          </FadeIn>
          <div className="grid gap-3 md:grid-cols-2">
            {preliminaryOutputs.map((item) => (
              <FadeIn key={item} className="rounded-lg bg-white p-5 text-xl font-semibold shadow-soft">
                {item}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-graphite px-5 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-timber">Offerta d'ingresso</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Verifica di fattibilità casa + energia.</h2>
            <p className="mt-6 text-lg leading-8 text-white/68">
              È il primo passo per capire se conviene costruire, riqualificare o installare impianti. Non è una promessa di risparmio: è una lettura tecnica per evitare investimenti sbagliati.
            </p>
            <Link href="/contatti" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 font-bold text-graphite">
              Richiedi verifica di fattibilità
            </Link>
          </FadeIn>
          <div className="grid gap-4">
            <FadeIn className="relative min-h-[280px] overflow-hidden rounded-lg border border-white/10 bg-white/[.05] shadow-[0_26px_70px_rgba(0,0,0,.25)]">
              <Image
                src="/images/home-area-fvg-geodomus.jpg"
                alt="Contesto abitativo in Friuli Venezia Giulia per verifica di fattibilità casa energia GeoDomus"
                fill
                quality={78}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/82 via-graphite/10 to-transparent" aria-hidden="true" />
              <p className="absolute bottom-5 left-5 right-5 text-xl font-semibold tracking-tight text-white">
                La verifica parte da territorio, vincoli, edificio, consumi e obiettivo economico.
              </p>
            </FadeIn>
            {feasibilityItems.map((item) => (
              <FadeIn key={item} className="rounded-lg border border-white/10 bg-white/[.05] p-5 font-semibold leading-7 text-white/78">
                {item}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Dopo il contatto</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Cosa succede quando richiedi la verifica.</h2>
          </FadeIn>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {nextSteps.map((step) => (
              <FadeIn key={step.title} className="rounded-lg border border-graphite/10 bg-warm p-6">
                <h3 className="text-2xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-4 leading-7 text-graphite/65">{step.text}</p>
              </FadeIn>
            ))}
          </div>
          <Link href="/contatti" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-graphite px-6 font-bold text-white">
            Invia i dati per la verifica
          </Link>
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
              <FadeIn key={service.title} className="overflow-hidden rounded-lg border border-graphite/10 bg-white shadow-soft">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    quality={78}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-4 leading-7 text-graphite/65">{service.text}</p>
                  <Link href={service.href} className="mt-6 inline-flex min-h-11 items-center rounded-md bg-graphite px-4 text-sm font-bold text-white">
                    Approfondisci
                  </Link>
                </div>
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
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Il rischio non è spendere troppo. È spendere nell'ordine sbagliato.</h2>
            <p className="mt-6 text-lg leading-8 text-graphite/65">
              Il nostro lavoro è evitare scelte scollegate che generano varianti, ritardi e costi non previsti.
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

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Confronto pratico</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">GeoDomus vs fornitori separati.</h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {comparisonVisuals.map((image) => (
              <FadeIn key={image.src} className="relative min-h-[260px] overflow-hidden rounded-lg bg-graphite shadow-soft">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  quality={76}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/72 via-graphite/12 to-transparent" aria-hidden="true" />
                <p className="absolute bottom-4 left-4 right-4 text-xl font-semibold tracking-tight text-white">{image.label}</p>
              </FadeIn>
            ))}
          </div>
          <div className="mt-6 overflow-hidden rounded-lg border border-graphite/10 bg-white shadow-soft">
            <div className="grid bg-graphite text-sm font-bold uppercase tracking-[.14em] text-white md:grid-cols-[.55fr_1fr_1fr]">
              <p className="p-5">Tema</p>
              <p className="border-t border-white/10 p-5 md:border-l md:border-t-0">Fornitori separati</p>
              <p className="border-t border-white/10 p-5 md:border-l md:border-t-0">Metodo GeoDomus</p>
            </div>
            {comparisonRows.map(([topic, separated, geodomus]) => (
              <div key={topic} className="grid border-t border-graphite/10 md:grid-cols-[.55fr_1fr_1fr]">
                <p className="p-5 text-xl font-semibold">{topic}</p>
                <p className="border-t border-graphite/10 p-5 leading-7 text-graphite/58 md:border-l md:border-t-0">{separated}</p>
                <p className="border-t border-graphite/10 bg-warm p-5 font-semibold leading-7 text-graphite md:border-l md:border-t-0">{geodomus}</p>
              </div>
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

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Percorsi verticali</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Problemi diversi, analisi diverse.</h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {targetBlocks.map(({ target, problem, output, cta, href }) => (
              <FadeIn key={target} className="rounded-lg border border-graphite/10 bg-warm p-6">
                <h3 className="text-2xl font-semibold tracking-tight">{target}</h3>
                <p className="mt-5 text-xs font-bold uppercase tracking-[.14em] text-timber">Problema</p>
                <p className="mt-2 leading-7 text-graphite/65">{problem}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-[.14em] text-forest">Output GeoDomus</p>
                <p className="mt-2 leading-7 text-graphite/65">{output}</p>
                <Link href={href} className="mt-6 inline-flex min-h-11 items-center rounded-md bg-graphite px-4 text-sm font-bold text-white">
                  {cta}
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Domande prima del contatto</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Le obiezioni vere vanno chiarite prima della telefonata.</h2>
            <p className="mt-6 text-lg leading-8 text-graphite/65">
              Se hai dubbi su esperienza, costi, tempi o convenienza dell'intervento, è normale. La verifica di fattibilità serve proprio a ridurre rischio e decisioni prese al buio.
            </p>
          </FadeIn>
          <div className="grid gap-4">
            {homeFaqs.map((faq) => (
              <FadeIn key={faq.question} className="rounded-lg border border-graphite/10 bg-warm p-6">
                <h3 className="text-2xl font-semibold tracking-tight">{faq.question}</h3>
                <p className="mt-3 leading-8 text-graphite/65">{faq.answer}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <SavingsCalculator />

      <CTA
        title="Hai già un terreno, un edificio, bollette alte o preventivi separati?"
        text="Richiedi la verifica di fattibilità GeoDomus. Ti diciamo quali dati mancano, quali criticità valutare e quale percorso tecnico seguire prima di impegnarti economicamente."
        buttonText="Verifica se il progetto è fattibile"
      />
    </main>
  );
}
