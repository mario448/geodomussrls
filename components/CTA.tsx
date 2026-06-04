import Link from "next/link";

export function CTA({ title, text }: { title: string; text: string }) {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-lg bg-graphite p-8 text-white shadow-soft lg:grid-cols-[1fr_auto] lg:items-end lg:p-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-timber">Consulenza GeoDomus</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight lg:text-6xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-white/65">{text}</p>
        </div>
        <div>
          <Link href="/contatti" className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 font-semibold text-graphite">
            Calcola il potenziale di risparmio
          </Link>
          <p className="mt-2 text-sm text-white/55">Prima risposta entro 48 ore lavorative.</p>
        </div>
      </div>
    </section>
  );
}
