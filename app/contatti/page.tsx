import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FadeIn } from "@/components/Motion";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contatti",
  description:
    "Contatta GeoDomus srls per una consulenza su case prefabbricate in legno, fotovoltaico e biomassa a Udine e in FVG.",
  path: "/contatti",
  keywords: ["GeoDomus srls contatti", "case in legno Udine", "fotovoltaico Udine", "biomassa Udine"]
});

export default function ContactPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Contatti" }]} />
      <section className="px-5 pb-20 pt-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Contatti</p>
            <h1 className="mt-5 text-6xl font-semibold tracking-tight md:text-8xl">Richiedi una consulenza personalizzata.</h1>
            <div className="mt-8 grid gap-3 text-graphite/65">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <p>{site.address}</p>
              <p>Area servita: Udine, provincia di Udine, Friuli Venezia Giulia.</p>
            </div>
          </FadeIn>
          <FadeIn>
            <form className="grid gap-4 rounded-lg bg-white p-6 shadow-soft">
              <label className="grid gap-2 text-sm text-graphite/60">Nome<input required name="name" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite" /></label>
              <label className="grid gap-2 text-sm text-graphite/60">Email<input required type="email" name="email" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite" /></label>
              <label className="grid gap-2 text-sm text-graphite/60">Telefono<input name="phone" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite" /></label>
              <label className="grid gap-2 text-sm text-graphite/60">Comune<input name="city" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite" /></label>
              <label className="grid gap-2 text-sm text-graphite/60">Servizio di interesse<select name="service" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite"><option>Case prefabbricate in legno</option><option>Impianti fotovoltaici</option><option>Riscaldamento a biomassa</option><option>Soluzioni integrate</option></select></label>
              <label className="grid gap-2 text-sm text-graphite/60">Messaggio<textarea required name="message" rows={5} className="rounded-md border border-graphite/10 p-4 text-graphite" /></label>
              <button type="submit" className="min-h-12 rounded-md bg-graphite px-6 font-semibold text-white">Richiedi una consulenza personalizzata</button>
            </form>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
