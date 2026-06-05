import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FadeIn } from "@/components/Motion";
import { blogPosts } from "@/data/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Guide tecniche GeoDomus",
  description:
    "Approfondimenti pratici su casa in legno, fotovoltaico, biomassa, costi, incentivi e scelte energetiche in Friuli Venezia Giulia.",
  path: "/blog",
  keywords: ["case prefabbricate FVG", "fotovoltaico Udine", "riscaldamento a biomassa Udine", "efficienza energetica FVG", "incentivi Friuli Venezia Giulia 2026", "contributi FVG fotovoltaico 2026"]
});

const categories = ["Case in legno", "Fotovoltaico", "Biomassa", "Soluzioni integrate", "Incentivi e normative", "Errori da evitare"];

const categoryImages = [
  { src: "/images/case-legno-geodomus.jpg", alt: "Guida case prefabbricate in legno Udine e bioedilizia FVG", label: "Case in legno" },
  { src: "/images/home-fotovoltaico-tetto-geodomus.jpg", alt: "Guida installazione impianti fotovoltaici FVG e incentivi regionali", label: "Fotovoltaico FVG" },
  { src: "/images/home-biomassa-locale-geodomus.jpg", alt: "Guida caldaie a biomasse Udine pellet cippato e locale tecnico", label: "Biomasse" }
];

const editorialPlan = [
  ["Casa in legno in Friuli: errori da evitare prima del progetto", "Terreno, orientamento, tetto, impianti e capitolato prima del modello estetico."],
  ["Fotovoltaico con accumulo: quando conviene davvero", "Consumi, autoconsumo, fasce orarie, batterie e casi in cui l'accumulo può aspettare."],
  ["Biomassa, pellet o pompa di calore: criteri pratici di scelta", "Spazio tecnico, gestione combustibile, fabbisogno termico, manutenzione e vincoli."],
  ["Quanto costa sbagliare l'ordine degli interventi in una riqualificazione", "Esempi di varianti, doppie lavorazioni, impianti sovradimensionati e priorità invertite."],
  ["General contractor energetico: cosa deve essere scritto nel contratto", "Responsabilità, capitolato, cronoprogramma, garanzie applicabili e gestione varianti."],
  ["Casa in legno e fotovoltaico: predisposizioni da fare prima del cantiere", "Passaggi cavi, quadro elettrico, orientamento tetto, accumulo e monitoraggio."],
  ["Preventivi fotovoltaico: perché confrontare solo i kWp è un errore", "Componenti, ombre, esposizione, profilo consumi, garanzie e costo reale dell'impianto."],
  ["Biomassa per aziende agricole: quando ha senso e quando no", "Disponibilità combustibile, spazi, fabbisogni, accessi, manutenzione e continuità d'uso."],
  ["Come capire se una casa esistente può diventare davvero efficiente", "Bollette, involucro, impianti, tetto, serramenti, umidita e interventi prioritari."],
  ["Fotovoltaico, biomassa e casa in legno: come evitare soluzioni scollegate", "Metodo per far dialogare edificio, energia elettrica, calore e budget."]
];

export default function BlogPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <section className="px-5 pb-20 pt-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Guide tecniche GeoDomus</p>
            <h1 className="mt-5 max-w-5xl text-6xl font-semibold tracking-tight md:text-8xl">Approfondimenti pratici per decidere meglio.</h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-graphite/65">
              Approfondimenti pratici su casa in legno, fotovoltaico, biomassa, costi, incentivi e scelte energetiche in Friuli Venezia Giulia.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map((category) => (
                <span key={category} className="rounded-md border border-graphite/10 bg-warm px-3 py-2 text-sm font-semibold text-graphite/65">
                  {category}
                </span>
              ))}
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {categoryImages.map((image) => (
              <FadeIn key={image.src} className="overflow-hidden rounded-lg border border-graphite/10 bg-white shadow-soft">
                <div className="relative aspect-[16/10]">
                  <Image src={image.src} alt={image.alt} fill quality={76} sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <p className="p-4 text-sm font-semibold leading-6 text-graphite/70">{image.label}</p>
              </FadeIn>
            ))}
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <FadeIn key={post.slug} className="rounded-lg border border-graphite/10 bg-white p-7 shadow-soft">
                <h2 className="text-2xl font-semibold tracking-tight">{post.title}</h2>
                <p className="mt-4 leading-7 text-graphite/65">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-7 inline-flex font-semibold text-forest">
                  Leggi articolo
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-stone/55 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Piano editoriale</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Prossime guide tecniche da pubblicare</h2>
            <p className="mt-6 text-lg leading-8 text-graphite/65">
              Non pubblichiamo articoli vuoti: questi sono i temi prioritari da trasformare in guide complete per chi deve decidere prima di firmare preventivi.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {editorialPlan.map(([title, outline]) => (
              <FadeIn key={title} className="rounded-lg border border-graphite/10 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 leading-7 text-graphite/65">{outline}</p>
              </FadeIn>
            ))}
          </div>
          <p className="mt-8 max-w-3xl leading-8 text-graphite/65">
            CTA standard per ogni articolo: hai un progetto simile? Inviaci comune, consumi, foto e obiettivi. Ti diremo quali dati servono per una prima valutazione tecnica.
          </p>
        </div>
      </section>
    </main>
  );
}
