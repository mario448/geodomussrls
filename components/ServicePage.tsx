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
  faqs: { question: string; answer: string }[];
  cta: string;
};

export function ServicePage(props: ServicePageProps) {
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
            <Link href="/contatti" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-graphite px-6 font-semibold text-white">
              Richiedi una consulenza
            </Link>
          </FadeIn>
          <FadeIn className="relative min-h-[360px] overflow-hidden rounded-lg shadow-soft lg:min-h-[560px]">
            <Image
              src={props.image}
              alt={props.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
          </FadeIn>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <FadeIn>
            <h2 className="text-5xl font-semibold tracking-tight lg:text-7xl">Perche sceglierlo</h2>
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
