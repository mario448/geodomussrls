import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { FadeIn } from "@/components/Motion";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { services } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "GeoDomus srls | Case in legno, fotovoltaico e biomassa a Udine",
  description:
    "GeoDomus srls progetta case prefabbricate in legno, impianti fotovoltaici e riscaldamento a biomassa a Udine, provincia di Udine e Friuli Venezia Giulia.",
  path: "/",
  keywords: [
    "GeoDomus srls",
    "case prefabbricate in legno Udine",
    "case in legno Friuli Venezia Giulia",
    "case prefabbricate FVG",
    "fotovoltaico Udine",
    "impianti fotovoltaici FVG",
    "riscaldamento a biomassa Udine",
    "caldaie a pellet Friuli Venezia Giulia",
    "abitazioni sostenibili Udine",
    "efficienza energetica FVG",
    "calcolatore risparmio energetico",
    "risparmio bolletta fotovoltaico Udine"
  ]
});

const steps = ["Analisi esigenze", "Sopralluogo", "Progettazione tecnica", "Realizzazione", "Assistenza post-intervento"];
const benefits = ["Efficienza energetica", "Comfort abitativo", "Riduzione dei consumi", "Materiali sostenibili", "Soluzioni integrate", "Presenza locale in FVG"];
const proofPoints = [
  { value: "FVG", label: "Consulenza locale su Udine, provincia e aree limitrofe" },
  { value: "3", label: "Ambiti integrati: casa in legno, fotovoltaico, biomassa" },
  { value: "1", label: "Metodo tecnico per ridurre dispersioni, sprechi e costi futuri" }
];
const audiences = ["Famiglie che vogliono costruire casa", "Proprietari di terreni edificabili", "Aziende agricole", "Strutture ricettive", "Piccoli imprenditori", "Chi vuole riqualificare un immobile"];
const geoAreas = [
  "Udine",
  "Tavagnacco",
  "Campoformido",
  "Pasian di Prato",
  "Codroipo",
  "Cividale del Friuli",
  "San Daniele del Friuli",
  "Gemona",
  "Pordenone",
  "Gorizia",
  "Trieste",
  "Friuli Venezia Giulia"
];
const seoBlocks = [
  {
    title: "Case prefabbricate in legno a Udine",
    text:
      "GeoDomus supporta chi cerca case prefabbricate in legno a Udine e in Friuli Venezia Giulia con un approccio tecnico: analisi del terreno, comfort abitativo, prestazioni dell'involucro, personalizzazione architettonica e integrazione degli impianti. Una casa in legno progettata bene riduce dispersioni, migliora il comfort termico e acustico e rende piu prevedibili tempi e qualita del cantiere."
  },
  {
    title: "Fotovoltaico e autoconsumo in FVG",
    text:
      "Per impianti fotovoltaici a Udine e in FVG, GeoDomus valuta consumi reali, esposizione della copertura, possibilita di accumulo e integrazione con abitazioni efficienti. L'obiettivo non e installare piu pannelli possibile, ma dimensionare una soluzione solare utile, sostenibile e coerente con il modo in cui la casa o l'azienda utilizza energia."
  },
  {
    title: "Riscaldamento a biomassa e caldaie a pellet",
    text:
      "Il riscaldamento a biomassa a Udine puo essere una scelta concreta per abitazioni, aziende agricole e strutture ricettive. Pellet, legna e cippato richiedono spazi, gestione e potenze diverse: GeoDomus aiuta a scegliere e integrare il sistema piu adatto con involucro, deposito combustibile, locale tecnico e obiettivi di risparmio energetico."
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden bg-graphite px-5 pt-28 text-white lg:px-8">
        <Image
          src="/images/villa-geodomus-hero-v3.jpg"
          alt="Villa moderna in legno con pannelli fotovoltaici in Friuli Venezia Giulia"
          fill
          priority
          quality={82}
          sizes="100vw"
          className="object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 bg-graphite/24" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-end pb-10">
          <FadeIn className="max-w-4xl rounded-lg border border-white/20 bg-graphite/72 p-5 shadow-[0_32px_90px_rgba(0,0,0,.38)] backdrop-blur-sm sm:p-7 lg:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#f2bd83]">GeoDomus srls / Udine e Friuli Venezia Giulia</p>
            <h1 className="mt-5 max-w-4xl text-6xl font-semibold tracking-tight text-white md:text-8xl lg:text-9xl lg:max-w-5xl">
              Costruire casa. Produrre energia. Vivere meglio.
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-white">
              Case prefabbricate in legno, impianti fotovoltaici e riscaldamento a biomassa progettati come un unico sistema per abitazioni sostenibili a Udine, provincia di Udine e Friuli Venezia Giulia.
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-white/86">
              Un interlocutore locale per chi vuole costruire una casa efficiente, ridurre i consumi, valorizzare un terreno o riqualificare un immobile con soluzioni energetiche concrete.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contatti" className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 font-bold text-graphite shadow-lg shadow-black/25">
                Richiedi una consulenza
              </Link>
              <Link href="#calcolatore-risparmio" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/45 bg-white/16 px-6 font-bold text-white backdrop-blur">
                Calcola il risparmio
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point.value} className="rounded-lg border border-white/24 bg-black/30 p-4">
                  <strong className="block text-2xl tracking-tight text-[#f2bd83]">{point.value}</strong>
                  <span className="mt-1 block text-sm font-medium leading-5 text-white/90">{point.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 max-w-sm rounded-lg border border-white/24 bg-black/30 p-4">
              <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#f2bd83]">Sistema integrato</p>
              <p className="mt-2 text-lg font-semibold leading-tight text-white">Casa in legno + fotovoltaico + biomassa, progettati insieme.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <FadeIn className="mx-auto max-w-7xl border-y border-graphite/10 py-14">
          <p className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight text-graphite md:text-5xl">
            Soluzioni sostenibili per abitazioni efficienti, confortevoli e indipendenti dal punto di vista energetico.
          </p>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-graphite/62">
            GeoDomus nasce per chi non vuole acquistare singoli prodotti scollegati, ma un progetto abitativo ed energetico coerente: casa prefabbricata in legno, produzione solare, accumulo, riscaldamento sostenibile e assistenza tecnica sul territorio.
          </p>
        </FadeIn>
      </section>

      <section id="soluzioni" className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Tre sistemi, un unico progetto</p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight lg:text-7xl">La casa e l'energia nascono insieme.</h2>
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
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-4 leading-7 text-graphite/65">{service.description}</p>
                  <p className="mt-4 text-sm leading-6 text-graphite/50">
                    {service.keywords.join(" / ")}
                  </p>
                  <Link href={service.href} className="mt-7 inline-flex font-semibold text-forest">
                    Approfondisci
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <SavingsCalculator />

      <section className="bg-graphite px-5 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-timber">Metodo</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Dal progetto alla realizzazione.</h2>
            <p className="mt-6 max-w-xl leading-8 text-white/60">
              Ogni intervento parte da dati reali: esigenze della famiglia, caratteristiche del terreno, consumi, esposizione, vincoli locali e obiettivi di comfort. Solo dopo si definiscono tecnologie, materiali e priorita.
            </p>
          </FadeIn>
          <div className="grid gap-3">
            {steps.map((step, index) => (
              <FadeIn key={step} className="grid gap-4 rounded-lg border border-white/10 bg-white/[.04] p-5 sm:grid-cols-[80px_1fr]">
                <span className="text-sm font-semibold text-timber">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-2xl font-semibold tracking-tight">{step}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Per chi lavoriamo</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Soluzioni per costruire, riqualificare e diventare piu autonomi.</h2>
          </FadeIn>
          <div className="grid gap-3 md:grid-cols-2">
            {audiences.map((audience) => (
              <FadeIn key={audience} className="rounded-lg border border-graphite/10 bg-white p-6 shadow-soft">
                <p className="text-xl font-semibold tracking-tight">{audience}</p>
                <p className="mt-3 leading-7 text-graphite/60">
                  Consulenza su prestazioni energetiche, budget, tempi e integrazione tra edificio e impianti.
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Vantaggi</p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight lg:text-7xl">Meno spreco, piu controllo, piu comfort.</h2>
          </FadeIn>
          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <FadeIn key={benefit} className="rounded-lg border border-graphite/10 bg-white p-6">
                <p className="text-xl font-semibold">{benefit}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone/55 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Approfondimento SEO</p>
            <h2 className="mt-4 max-w-5xl text-5xl font-semibold tracking-tight lg:text-7xl">Abitazioni sostenibili a Udine: piu efficienza, meno dipendenza energetica.</h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {seoBlocks.map((block) => (
              <FadeIn key={block.title} className="rounded-lg bg-white p-7 shadow-soft">
                <h3 className="text-2xl font-semibold tracking-tight">{block.title}</h3>
                <p className="mt-5 leading-8 text-graphite/65">{block.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">SEO GEO / Area servita</p>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight lg:text-7xl">Operiamo a Udine e in Friuli Venezia Giulia.</h2>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-graphite/65">
              GeoDomus srls lavora con privati, famiglie, imprese agricole, strutture ricettive e piccoli imprenditori a Udine, in provincia di Udine e nelle aree di Pordenone, Gorizia, Trieste e del Friuli Venezia Giulia. La consulenza locale permette di leggere clima, vincoli, terreni, coperture e abitudini di consumo prima di proporre una casa in legno, un impianto fotovoltaico o un sistema a biomassa.
            </p>
            <p className="mt-5 max-w-4xl leading-8 text-graphite/60">
              Se cerchi case prefabbricate in legno a Udine, fotovoltaico in FVG, caldaie a pellet in Friuli Venezia Giulia o una soluzione integrata per ridurre i consumi della tua abitazione, GeoDomus parte da una valutazione concreta del contesto locale.
            </p>
          </FadeIn>
          <FadeIn className="rounded-lg border border-graphite/10 bg-warm p-6">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Comuni e zone</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {geoAreas.map((area) => (
                <span key={area} className="rounded-md border border-graphite/10 bg-white px-3 py-2 text-sm font-semibold text-graphite/70">
                  {area}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CTA title="Vuoi costruire o riqualificare in modo intelligente?" text="Partiamo da obiettivi, consumi e contesto reale a Udine o in Friuli Venezia Giulia. Poi definiamo una soluzione tecnica sostenibile, efficiente e misurabile." />
    </main>
  );
}
