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
  { value: "Un solo referente", label: "Un percorso unico per casa, fotovoltaico e biomassa, senza responsabilita disperse tra fornitori diversi." },
  { value: "Progetto + cantiere", label: "Le scelte tecniche vengono pensate in funzione della realizzazione, non solo del disegno iniziale." },
  { value: "Chiavi in mano", label: "Dall'idea alla consegna: analisi, progetto, coordinamento operativo, installazione e collaudo." }
];

const risks = [
  "Progettista, impresa edile e installatori che non lavorano sulla stessa sequenza tecnica",
  "Casa in legno realizzata senza predisporre davvero fotovoltaico e locale tecnico",
  "Fotovoltaico aggiunto dopo, con passaggi, quadri e accumulo gestiti come varianti",
  "Biomassa scelta quando spazi, canna fumaria e fabbisogno non sono stati previsti in progetto"
];

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
    cta: "Avvia il progetto casa"
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
              Progettiamo, realizziamo e installiamo la tua casa green chiavi in mano.
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-white">
              Case in legno, fotovoltaico e biomassa in un unico percorso operativo: una sola regia, un solo referente, una sequenza tecnica coordinata dall'idea al cantiere.
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-white/86">
              Non devi cercare progettisti, imprese e installatori separati. GeoDomus coordina progettazione, realizzazione, installazione, collaudo e assistenza.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div>
                <Link href="/contatti" className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 font-bold text-graphite shadow-lg shadow-black/25">
                  Voglio iniziare il progetto chiavi in mano
                </Link>
                <p className="mt-2 max-w-xl text-sm font-medium text-white/70">
                  Primo confronto gratuito di 20 minuti per capire terreno, edificio, budget, obiettivi e prossimi passi.
                </p>
              </div>
              <Link href="#metodo-geodomus" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/45 bg-white/16 px-6 font-bold text-white backdrop-blur">
                Mostrami come funziona
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
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.78fr_1.22fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Impresa integrata</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Come funziona GeoDomus: una sola azienda, non dieci interlocutori.</h2>
            <p className="mt-6 text-lg leading-8 text-graphite/65">
              GeoDomus non si limita a consegnare una consulenza e lasciare al cliente il compito di cercare progettisti, imprese e installatori. Il valore e avere un unico percorso: progettazione, realizzazione, installazione e collaudo vengono coordinati dentro la stessa regia operativa.
            </p>
          </FadeIn>
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "Progettiamo quello che realizziamo",
                text: "Le scelte su struttura, impianti, passaggi tecnici, tetto e locale termico vengono pensate insieme, prima del cantiere."
              },
              {
                title: "Coordiniamo il cantiere",
                text: "Il cliente non deve rincorrere fornitori separati: GeoDomus mantiene la regia tecnica tra casa, fotovoltaico e biomassa."
              },
              {
                title: "Un riferimento unico",
                text: "Domande, varianti, verifiche e assistenza passano da un unico referente, riducendo scarichi di responsabilita e tempi morti."
              }
            ].map((item) => (
              <FadeIn key={item.title} className="rounded-lg border border-graphite/10 bg-warm p-6">
                <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-4 leading-7 text-graphite/65">{item.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { src: "/images/case-legno-geodomus.jpg", alt: "Casa in legno GeoDomus", label: "Struttura in legno" },
            { src: "/images/fotovoltaico-geodomus.jpg", alt: "Fotovoltaico integrato su tetto", label: "Tetto e fotovoltaico" },
            { src: "/images/biomassa-geodomus.jpg", alt: "Impianto a biomassa", label: "Locale tecnico" },
            { src: "/images/villa-geodomus-hero-v2.jpg", alt: "Abitazione efficiente chiavi in mano", label: "Consegna coordinata" }
          ].map((image) => (
            <FadeIn key={image.src} className="relative min-h-[250px] overflow-hidden rounded-lg bg-graphite shadow-soft">
              <Image src={image.src} alt={image.alt} fill quality={78} sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" aria-hidden="true" />
              <p className="absolute bottom-4 left-4 right-4 text-xl font-semibold tracking-tight text-white">{image.label}</p>
            </FadeIn>
          ))}
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

      <section id="soluzioni" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Cosa realizziamo</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Le tre cose che realizziamo e come le integriamo.</h2>
            <p className="mt-5 text-lg leading-8 text-graphite/65">
              Non sono tre servizi separati. Sono parti di un'unica soluzione in cui ogni scelta condiziona le altre: struttura, impianti, produzione elettrica, calore e gestione futura.
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
            Voglio vedere come integrare questi elementi nel mio progetto
          </Link>
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
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Il processo GeoDomus per arrivare al chiavi in mano.</h2>
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

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Contratto e garanzie</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Una regia contrattuale, non dieci responsabilita separate.</h2>
            <p className="mt-6 leading-8 text-graphite/65">
              Il valore di un percorso integrato non e solo tecnico. E anche contrattuale: cosa e incluso, chi risponde di cosa, quali fasi sono previste, quali garanzie si applicano e quali manutenzioni servono dopo la consegna devono essere chiari prima di iniziare.
            </p>
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Responsabilita operative definite prima del cantiere",
              "Capitolato leggibile: struttura, impianti, fotovoltaico, biomassa e finiture",
              "Cronoprogramma condiviso con fasi, vincoli e dipendenze tecniche",
              "Garanzie da indicare in contratto: [DA COMPLETARE: dettagli garanzie applicabili]",
              "Assistenza post-intervento: [DA COMPLETARE: modalita e durata]",
              "Un referente unico per comunicazioni, varianti e verifiche"
            ].map((item) => (
              <FadeIn key={item} className="rounded-lg border border-graphite/10 bg-warm p-6">
                <p className="text-xl font-semibold">{item}</p>
              </FadeIn>
            ))}
          </div>
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
        title="Pronto a iniziare il progetto chiavi in mano?"
        text="Inviaci le informazioni essenziali su terreno, edificio o riqualificazione. Ti ricontattiamo per capire fattibilita, percorso tecnico e prossimi passi operativi."
      />
    </main>
  );
}
