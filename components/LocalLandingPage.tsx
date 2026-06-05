import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { FadeIn } from "@/components/Motion";
import { faqJsonLd, serviceJsonLd } from "@/lib/seo";

type LocalLandingPageProps = {
  path: string;
  eyebrow: string;
  title: string;
  intro: string;
  serviceName: string;
  description: string;
  image: string;
  imageAlt: string;
  problems: string[];
  checks: string[];
  outputs: string[];
  links: { label: string; href: string }[];
  faqs: { question: string; answer: string }[];
  cta: string;
};

export function LocalLandingPage(props: LocalLandingPageProps) {
  return (
    <main>
      <JsonLd data={serviceJsonLd(props.serviceName, props.description, props.path)} />
      <JsonLd data={faqJsonLd(props.faqs)} />
      <Breadcrumbs items={[{ label: props.serviceName }]} />

      <section className="px-5 pb-16 pt-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">{props.eyebrow}</p>
            <h1 className="mt-5 text-6xl font-semibold tracking-tight md:text-8xl">{props.title}</h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-graphite/65">{props.intro}</p>
            <Link href="/contatti" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-graphite px-6 font-bold text-white">
              {props.cta}
            </Link>
          </FadeIn>
          <FadeIn className="relative min-h-[360px] overflow-hidden rounded-lg shadow-soft lg:min-h-[540px]">
            <Image src={props.image} alt={props.imageAlt} fill priority quality={80} sizes="(min-width: 1024px) 54vw, 100vw" className="object-cover" />
          </FadeIn>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.82fr_1.18fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Problemi locali</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Cosa va chiarito prima di chiedere preventivi.</h2>
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
            {props.problems.map((item) => (
              <FadeIn key={item} className="rounded-lg border border-graphite/10 bg-warm p-6">
                <p className="text-xl font-semibold leading-7">{item}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone/55 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Verifiche GeoDomus</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Cosa controlliamo.</h2>
            <div className="mt-10 grid gap-3">
              {props.checks.map((item) => (
                <p key={item} className="rounded-lg bg-white p-5 text-xl font-semibold shadow-soft">{item}</p>
              ))}
            </div>
          </FadeIn>
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Output</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Cosa ricevi.</h2>
            <div className="mt-10 grid gap-3">
              {props.outputs.map((item) => (
                <p key={item} className="rounded-lg bg-white p-5 text-xl font-semibold shadow-soft">{item}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Approfondisci</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Pagine collegate.</h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {props.links.map((link) => (
              <FadeIn key={link.href} className="rounded-lg border border-graphite/10 bg-white p-6 shadow-soft">
                <Link href={link.href} className="text-2xl font-semibold tracking-tight hover:text-forest">{link.label}</Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="text-5xl font-semibold tracking-tight lg:text-7xl">FAQ</h2>
          </FadeIn>
          <div className="mt-10 grid gap-4">
            {props.faqs.map((faq) => (
              <FadeIn key={faq.question} className="rounded-lg bg-warm p-6 shadow-soft">
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-graphite/65">{faq.answer}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTA title={props.cta} text="Invia comune, obiettivo, foto e dati disponibili. Ti diciamo quali informazioni mancano e quale percorso tecnico ha senso prima di impegnare budget." />
    </main>
  );
}
