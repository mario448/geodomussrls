import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { FadeIn } from "@/components/Motion";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "GeoDomus | Bioedilizia e competenza tecnica FVG",
  description:
    "Studio tecnico per bioedilizia, case in legno, fotovoltaico e biomasse a Udine e Gorizia. Progettazione e cantiere integrati.",
  path: "/chi-siamo",
  keywords: ["GeoDomus srls", "bioedilizia Gorizia", "progettazione case passive", "case in legno Udine", "efficienza energetica FVG"]
});

const values = [
  {
    title: "Analisi climatica e geologica",
    text: "Prima di parlare di struttura valutiamo terreno, esposizione, zona climatica, vincoli urbanistici e condizioni reali del sito."
  },
  {
    title: "Progettazione strutturale e termotecnica",
    text: "Stratigrafie, trasmittanza, sfasamento, ponti termici, fotovoltaico e biomasse vengono calcolati come parti dello stesso edificio."
  },
  {
    title: "Posa della struttura in legno",
    text: "La qualità finale dipende dalla posa: tenuta all'aria, isolamento, dettagli di nodo, protezione dall'umidità e controllo di cantiere."
  },
  {
    title: "Installazione impianti e collaudo",
    text: "Fotovoltaico, accumulo, biomasse e certificazione energetica finale vengono gestiti dopo il progetto impiantistico, non come aggiunte."
  },
  {
    title: "Conoscenza del FVG",
    text: "Operiamo tra Udine, Gorizia e Friuli-Venezia Giulia, con attenzione a sismicità, clima, vincoli paesaggistici e incentivi locali."
  }
];

const aboutVisuals = [
  {
    src: "/images/home-area-fvg-geodomus.jpg",
    alt: "Territorio del Friuli Venezia Giulia per progetti di bioedilizia GeoDomus a Udine e Gorizia",
    label: "FVG: clima, vincoli e contesto locale"
  },
  {
    src: "/images/home-cantiere-legno-geodomus.jpg",
    alt: "Dettaglio tecnico di struttura in legno per casa prefabbricata in Friuli Venezia Giulia",
    label: "Controllo posa e dettagli di involucro"
  },
  {
    src: "/images/home-fotovoltaico-tetto-geodomus.jpg",
    alt: "Verifica del tetto per impianto fotovoltaico a Udine e Gorizia",
    label: "Tetto, orientamento e ombre"
  }
];

export default function AboutPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Chi siamo" }]} />
      <section className="px-5 pb-16 pt-10 lg:px-8">
        <FadeIn className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">GeoDomus srls</p>
          <h1 className="mt-5 max-w-5xl text-6xl font-semibold tracking-tight md:text-8xl">GeoDomus: progettazione e costruzione sostenibile in Friuli-Venezia Giulia.</h1>
          <p className="mt-7 max-w-4xl text-xl leading-9 text-graphite/65">
            Il mercato della bioedilizia è spesso diviso tra chi vende una struttura in legno a catalogo e chi installa impianti senza conoscere davvero la fisica dell'edificio. Il risultato sono case formalmente efficienti, ma con impianti dimensionati tardi, ponti termici non governati, locali tecnici sottovalutati e preventivi difficili da confrontare.
          </p>
          <p className="mt-5 max-w-4xl text-xl leading-9 text-graphite/65">
            GeoDomus nasce per unire studio tecnico, progettazione architettonica, calcolo termotecnico, gestione burocratica e maestranza edile. L'obiettivo è offrire edifici in legno nativamente efficienti, integrati con impianti fotovoltaici e sistemi a biomasse, progettati per il clima e la sismicità del Friuli-Venezia Giulia.
          </p>
          <p className="mt-5 max-w-4xl text-xl leading-9 text-graphite/65">
            Non presentiamo recensioni o cantieri storici non ancora appartenenti al brand. Costruiamo autorevolezza con metodo: analisi del sito, verifiche urbanistiche, stratigrafie leggibili, capitolati, cronoprogramma, collaudi e documentazione tecnica. L'esperienza dei singoli professionisti viene messa dentro un unico team operativo.
          </p>
        </FadeIn>
      </section>
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Team tecnico</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">L'esperienza dei singoli, la forza di un unico team.</h2>
          </FadeIn>
          <FadeIn className="rounded-lg border border-graphite/10 bg-white p-7 shadow-soft">
            <p className="text-lg leading-8 text-graphite/65">
              GeoDomus è in fase di costituzione, ma nasce dal background di professionisti che hanno lavorato su progettazione strutturale, gestione cantieri, pratiche autorizzative locali, valutazioni energetiche e coordinamento tecnico. I dettagli nominativi, le abilitazioni e le certificazioni verranno pubblicati appena formalizzati e verificabili. Fino ad allora preferiamo dichiarare solo ciò che possiamo sostenere: processo, competenza tecnica e responsabilità scritte.
            </p>
          </FadeIn>
        </div>
      </section>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-5">
          {values.map((value) => (
            <FadeIn key={value.title} className="rounded-lg border border-graphite/10 bg-warm p-6">
              <p className="text-xl font-semibold">{value.title}</p>
              <p className="mt-3 text-sm leading-6 text-graphite/62">{value.text}</p>
            </FadeIn>
          ))}
        </div>
      </section>
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">E-E-A-T visivo</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Competenza tecnica significa guardare il posto, non solo il render.</h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {aboutVisuals.map((image) => (
              <FadeIn key={image.src} className="overflow-hidden rounded-lg border border-graphite/10 bg-white shadow-soft">
                <div className="relative aspect-[4/3]">
                  <Image src={image.src} alt={image.alt} fill quality={76} sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <p className="p-4 text-sm font-semibold leading-6 text-graphite/70">{image.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Vuoi costruire in bioedilizia senza separare casa e impianti?" text="Partiamo da terreno, vincoli, clima, fabbisogno energetico e obiettivi prima di formulare una proposta." />
    </main>
  );
}
