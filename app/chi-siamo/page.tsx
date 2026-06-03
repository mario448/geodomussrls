import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { FadeIn } from "@/components/Motion";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Chi siamo",
  description:
    "GeoDomus srls e una realta del Friuli Venezia Giulia specializzata in case in legno, fotovoltaico e riscaldamento a biomassa.",
  path: "/chi-siamo",
  keywords: ["GeoDomus srls", "abitazioni sostenibili Udine", "efficienza energetica FVG"]
});

const values = ["Competenza", "Sostenibilita", "Serieta", "Innovazione", "Radicamento nel territorio"];

export default function AboutPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Chi siamo" }]} />
      <section className="px-5 pb-16 pt-10 lg:px-8">
        <FadeIn className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">GeoDomus srls</p>
          <h1 className="mt-5 max-w-5xl text-6xl font-semibold tracking-tight md:text-8xl">Tecnica, territorio e sostenibilita.</h1>
          <p className="mt-7 max-w-4xl text-xl leading-9 text-graphite/65">
            GeoDomus srls e una realta del Friuli Venezia Giulia specializzata in soluzioni per abitazioni sostenibili, efficienti e progettate per durare. Opera principalmente a Udine e provincia, offrendo consulenza e realizzazione per case prefabbricate in legno, impianti fotovoltaici e sistemi di riscaldamento a biomassa.
          </p>
        </FadeIn>
      </section>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-5">
          {values.map((value) => (
            <FadeIn key={value} className="rounded-lg border border-graphite/10 bg-warm p-6">
              <p className="text-xl font-semibold">{value}</p>
            </FadeIn>
          ))}
        </div>
      </section>
      <CTA title="Hai un terreno, una casa o un progetto da valutare?" text="GeoDomus porta competenza tecnica e conoscenza locale dentro ogni scelta." />
    </main>
  );
}
