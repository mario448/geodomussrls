import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { FadeIn } from "@/components/Motion";
import { services } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "GeoDomus srls | Costruire casa, produrre energia, vivere meglio",
  description:
    "GeoDomus srls realizza case prefabbricate in legno, impianti fotovoltaici e riscaldamento a biomassa a Udine e in Friuli Venezia Giulia.",
  path: "/",
  keywords: [
    "GeoDomus srls",
    "case prefabbricate in legno Udine",
    "fotovoltaico Udine",
    "riscaldamento a biomassa Udine",
    "efficienza energetica FVG"
  ]
});

const steps = ["Analisi esigenze", "Sopralluogo", "Progettazione tecnica", "Realizzazione", "Assistenza post-intervento"];
const benefits = ["Efficienza energetica", "Comfort abitativo", "Riduzione dei consumi", "Materiali sostenibili", "Soluzioni integrate", "Presenza locale in FVG"];

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden bg-warm px-5 pt-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.92fr_1.08fr] lg:items-end">
          <FadeIn className="z-10 pb-10">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">GeoDomus srls / Friuli Venezia Giulia</p>
            <h1 className="mt-5 max-w-4xl text-6xl font-semibold tracking-tight text-graphite md:text-8xl lg:text-9xl">
              Costruire casa. Produrre energia. Vivere meglio.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite/65">
              GeoDomus realizza soluzioni integrate per case prefabbricate in legno, impianti fotovoltaici e riscaldamento a biomassa in Friuli Venezia Giulia, con focus su Udine e provincia.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contatti" className="inline-flex min-h-12 items-center justify-center rounded-md bg-graphite px-6 font-semibold text-white">
                Richiedi una consulenza
              </Link>
              <Link href="#soluzioni" className="inline-flex min-h-12 items-center justify-center rounded-md border border-graphite/15 px-6 font-semibold text-graphite">
                Scopri le soluzioni
              </Link>
            </div>
          </FadeIn>
          <FadeIn className="relative min-h-[430px] overflow-hidden rounded-lg shadow-soft lg:min-h-[680px]">
            <Image
              src="/images/geodomus-hero.jpg"
              alt="Casa prefabbricata in legno con pannelli fotovoltaici in Friuli Venezia Giulia"
              fill
              priority
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite/25 to-transparent" />
          </FadeIn>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <FadeIn className="mx-auto max-w-7xl border-y border-graphite/10 py-14">
          <p className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight text-graphite md:text-5xl">
            Soluzioni sostenibili per abitazioni efficienti, confortevoli e indipendenti dal punto di vista energetico.
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
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-4 leading-7 text-graphite/65">{service.description}</p>
                  <Link href={service.href} className="mt-7 inline-flex font-semibold text-forest">
                    Approfondisci
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-graphite px-5 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-timber">Metodo</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Dal progetto alla realizzazione.</h2>
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

      <section className="bg-white px-5 py-20 lg:px-8">
        <FadeIn className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Presenza locale</p>
          <h2 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight lg:text-7xl">Operiamo a Udine e in Friuli Venezia Giulia.</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-graphite/65">
            GeoDomus srls lavora con privati, famiglie, imprese agricole, strutture ricettive e piccoli imprenditori a Udine, in provincia di Udine e nelle aree di Pordenone, Gorizia, Trieste e del Friuli Venezia Giulia. La consulenza locale permette di leggere clima, vincoli, terreni, coperture e abitudini di consumo prima di proporre una casa in legno, un impianto fotovoltaico o un sistema a biomassa.
          </p>
        </FadeIn>
      </section>

      <CTA title="Vuoi costruire o riqualificare in modo intelligente?" text="Partiamo da obiettivi, consumi e contesto reale. Poi definiamo una soluzione tecnica sostenibile, efficiente e misurabile." />
    </main>
  );
}
