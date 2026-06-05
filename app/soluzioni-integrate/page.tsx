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
  "Priorità degli interventi",
  "Soluzioni da escludere",
  "Possibili fasi operative",
  "Criticità tecniche",
  "Dati mancanti da raccogliere",
  "Indicazioni per confrontare preventivi"
];

const usefulFor = [
  "Chi costruisce casa",
  "Chi ristruttura",
  "Chi ha consumi energetici elevati",
  "Aziende agricole",
  "Strutture ricettive",
  "Chi vuole procedere per fasi senza sbagliare ordine"
];

const integratedGallery = [
  { src: "/images/villa-geodomus-hero-v3.jpg", alt: "Casa moderna efficiente", label: "Sistema abitativo" },
  { src: "/images/home-cantiere-legno-geodomus.jpg", alt: "Dettaglio struttura in legno", label: "Involucro" },
  { src: "/images/home-fotovoltaico-tetto-geodomus.jpg", alt: "Fotovoltaico su copertura", label: "Produzione elettrica" },
  { src: "/images/home-biomassa-locale-geodomus.jpg", alt: "Locale tecnico biomassa", label: "Generazione termica" }
];

export default function IntegratedPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Soluzioni integrate" }]} />
      <section className="px-5 pb-16 pt-10 lg:px-8">
        <FadeIn className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Sistema GeoDomus</p>
          <h1 className="mt-5 max-w-5xl text-6xl font-semibold tracking-tight md:text-8xl">Prima la strategia energetica. Poi gli impianti.</h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-graphite/65">
            Casa, fotovoltaico e biomassa non devono essere scelti come pezzi separati. GeoDomus costruisce una sequenza di interventi coerente con edificio, consumi, budget e obiettivi.
          </p>
          <Link href="/contatti" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-graphite px-6 font-semibold text-white">
            Richiedi una valutazione integrata
          </Link>
        </FadeIn>
      </section>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Per chi e utile</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Quando serve una regia unica prima dei preventivi.</h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {usefulFor.map((item) => (
            <FadeIn key={item} className="rounded-lg border border-graphite/10 bg-warm p-7 shadow-soft">
              <p className="text-2xl font-semibold tracking-tight">{item}</p>
            </FadeIn>
          ))}
          </div>
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
                quality={78}
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
      <section className="bg-stone/55 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Integrazione visiva</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Ogni scelta tecnica deve stare dentro lo stesso progetto.</h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {integratedGallery.map((image) => (
              <FadeIn key={image.src} className="relative min-h-[260px] overflow-hidden rounded-lg bg-graphite shadow-soft">
                <Image src={image.src} alt={image.alt} fill quality={78} sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/74 via-transparent to-transparent" aria-hidden="true" />
                <p className="absolute bottom-4 left-4 right-4 text-xl font-semibold tracking-tight text-white">{image.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Output tecnico</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Cosa produce una valutazione integrata</h2>
            <p className="mt-6 leading-8 text-graphite/65">
              Una valutazione integrata non serve a vendere tutto insieme. Serve a capire cosa fare, cosa rimandare e cosa evitare.
            </p>
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
            {modules.map((item) => (
              <FadeIn key={item} className="rounded-lg border border-graphite/10 bg-white p-6 shadow-soft">
                <p className="text-xl font-semibold">{item}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Richiedi una valutazione integrata" text="Analizziamo edificio, consumi, budget e obiettivi per costruire una sequenza tecnica coerente prima di acquistare singoli impianti." />
    </main>
  );
}
