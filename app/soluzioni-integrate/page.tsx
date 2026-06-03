import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { FadeIn } from "@/components/Motion";
import { services } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Soluzioni integrate per casa in legno, fotovoltaico e biomassa",
  description:
    "GeoDomus progetta sistemi abitativi ed energetici integrati: casa in legno, fotovoltaico e biomassa per indipendenza energetica e comfort.",
  path: "/soluzioni-integrate",
  keywords: ["abitazioni sostenibili Udine", "efficienza energetica FVG", "casa in legno fotovoltaico biomassa"]
});

const modules = [
  "Casa in legno + fotovoltaico + biomassa",
  "Indipendenza energetica progettata sui consumi reali",
  "Riduzione dei costi nel lungo periodo",
  "Comfort termico, acustico e gestionale",
  "Materiali sostenibili e impianti coordinati",
  "Progettazione su misura per Udine e FVG"
];

export default function IntegratedPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Soluzioni integrate" }]} />
      <section className="px-5 pb-16 pt-10 lg:px-8">
        <FadeIn className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Sistema GeoDomus</p>
          <h1 className="mt-5 max-w-5xl text-6xl font-semibold tracking-tight md:text-8xl">Non singoli prodotti. Un ecosistema abitativo.</h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-graphite/65">
            GeoDomus integra casa prefabbricata in legno, impianto fotovoltaico e riscaldamento a biomassa in un progetto coerente. L'obiettivo non e vendere componenti separati, ma creare una soluzione sostenibile, efficiente e facile da gestire nel tempo.
          </p>
        </FadeIn>
      </section>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((item) => (
            <FadeIn key={item} className="rounded-lg border border-graphite/10 bg-warm p-7 shadow-soft">
              <p className="text-2xl font-semibold tracking-tight">{item}</p>
            </FadeIn>
          ))}
        </div>
      </section>
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <FadeIn key={service.href} className="relative min-h-[280px] overflow-hidden rounded-lg shadow-soft">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/65 to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-2xl font-semibold tracking-tight text-white">
                {service.title}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>
      <section className="px-5 py-20 lg:px-8">
        <FadeIn className="mx-auto max-w-4xl prose-geodomus">
          <h2>Perche l'integrazione cambia il risultato</h2>
          <p>
            Una casa efficiente funziona meglio quando involucro, produzione elettrica, accumulo, generazione termica e abitudini di utilizzo vengono letti nello stesso momento. Una copertura puo ospitare fotovoltaico, ma il dimensionamento corretto dipende da consumi, esposizione e sistemi termici. Una caldaia a biomassa puo ridurre i costi, ma deve essere coerente con isolamento, distribuzione del calore e spazio tecnico.
          </p>
          <p>
            L'approccio integrato di GeoDomus permette di progettare soluzioni su misura per abitazioni, aziende agricole, strutture ricettive e piccoli imprenditori in Friuli Venezia Giulia. La consulenza parte da esigenze concrete: comfort, indipendenza energetica, budget, tempi, manutenzione e sostenibilita.
          </p>
          <Link href="/contatti">Parla con GeoDomus</Link>
        </FadeIn>
      </section>
      <CTA title="Vuoi progettare casa ed energia insieme?" text="Una soluzione integrata riduce errori, sovradimensionamenti e costi nascosti." />
    </main>
  );
}
