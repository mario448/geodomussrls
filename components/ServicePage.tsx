import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { FadeIn } from "@/components/Motion";
import { faqJsonLd, serviceJsonLd } from "@/lib/seo";

export type ServicePageProps = {
  path: string;
  title: string;
  eyebrow: string;
  intro: string;
  description: string;
  image: string;
  imageAlt: string;
  points: string[];
  process: string[];
  problemTitle: string;
  problemText: string;
  whenMakesSense: string[];
  whenNotSense: string[];
  checks: string[];
  mistakes: string[];
  faqs: { question: string; answer: string }[];
  cta: string;
};

export function ServicePage(props: ServicePageProps) {
  const serviceVisuals = [
    { src: props.image, alt: props.imageAlt, label: props.title },
    { src: "/images/home-cantiere-legno-geodomus.jpg", alt: "Dettaglio di struttura e involucro in legno", label: "Cantiere e involucro" },
    { src: "/images/home-fotovoltaico-tetto-geodomus.jpg", alt: "Pannelli fotovoltaici su tetto efficiente", label: "Fotovoltaico integrato" },
    { src: "/images/home-biomassa-locale-geodomus.jpg", alt: "Locale tecnico con impianto a biomassa", label: "Biomassa e impianti" }
  ];

  return (
    <main>
      <JsonLd data={serviceJsonLd(props.title, props.description, props.path)} />
      <JsonLd data={faqJsonLd(props.faqs)} />
      <Breadcrumbs items={[{ label: props.title }]} />
      <section className="px-5 pb-16 pt-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">{props.eyebrow}</p>
            <h1 className="mt-5 text-6xl font-semibold tracking-tight text-graphite md:text-8xl">{props.title}</h1>
            <p className="text-xl leading-9 text-graphite/65">{props.intro}</p>
            <div className="mt-8">
              <Link href="/contatti" className="inline-flex min-h-12 items-center justify-center rounded-md bg-graphite px-6 font-semibold text-white">
                Richiedi una verifica tecnica preliminare
              </Link>
              <p className="mt-2 text-sm text-graphite/55">Partiamo da dati concreti prima di formulare ipotesi o preventivi.</p>
            </div>
          </FadeIn>
          <FadeIn className="relative min-h-[360px] overflow-hidden rounded-lg shadow-soft lg:min-h-[560px]">
            <Image
              src={props.image}
              alt={props.imageAlt}
              fill
              priority
              quality={80}
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
          </FadeIn>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {serviceVisuals.map((image) => (
            <FadeIn key={`${props.path}-${image.src}`} className="relative min-h-[240px] overflow-hidden rounded-lg bg-graphite shadow-soft">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={78}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/72 via-graphite/8 to-transparent" aria-hidden="true" />
              <p className="absolute bottom-4 left-4 right-4 text-xl font-semibold tracking-tight text-white">{image.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Problema specifico</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">{props.problemTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-graphite/65">{props.problemText}</p>
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
            {props.points.map((point) => (
              <FadeIn key={point} className="rounded-lg border border-graphite/10 bg-warm p-6">
                <p className="text-xl font-semibold">{point}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <FadeIn>
            <h2 className="text-5xl font-semibold tracking-tight lg:text-7xl">Quando ha senso</h2>
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
            {props.whenMakesSense.map((point) => (
              <FadeIn key={point} className="rounded-lg border border-graphite/10 bg-warm p-6">
                <p className="text-xl font-semibold">{point}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone/55 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Da verificare</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Quando puo non avere senso</h2>
            <div className="mt-10 grid gap-3">
              {props.whenNotSense.map((item) => (
                <p key={item} className="rounded-lg bg-white p-5 text-xl font-semibold shadow-soft">{item}</p>
              ))}
            </div>
          </FadeIn>
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Verifiche GeoDomus</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Cosa verifica GeoDomus</h2>
            <div className="mt-10 grid gap-3">
              {props.checks.map((item) => (
                <p key={item} className="rounded-lg bg-white p-5 text-xl font-semibold shadow-soft">{item}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Errori da evitare</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Decisioni che costano quando arrivano troppo presto.</h2>
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
            {props.mistakes.map((item) => (
              <FadeIn key={item} className="rounded-lg border border-graphite/10 bg-white p-6 shadow-soft">
                <p className="text-xl font-semibold">{item}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Processo operativo</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Dal primo dato alla posa.</h2>
          </FadeIn>
          <div className="grid gap-3">
            {props.process.map((item, index) => (
              <FadeIn key={item} className="rounded-lg border border-graphite/10 bg-white p-5">
                <span className="text-sm font-semibold text-timber">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-xl font-semibold">{item}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone/55 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="text-5xl font-semibold tracking-tight lg:text-7xl">FAQ</h2>
          </FadeIn>
          <div className="mt-10 grid gap-4">
            {props.faqs.map((faq) => (
              <FadeIn key={faq.question} className="rounded-lg bg-white p-6 shadow-soft">
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-graphite/65">{faq.answer}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <CTA title={props.cta} text="GeoDomus valuta esigenze, contesto e obiettivi energetici prima di proporre la soluzione piu adatta." />
    </main>
  );
}
