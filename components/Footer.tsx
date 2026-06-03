import Link from "next/link";
import { services, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-graphite px-5 py-14 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <p className="text-4xl font-semibold tracking-tight lg:text-7xl">GeoDomus srls</p>
            <p className="mt-5 max-w-xl text-white/60">
              Case in legno, fotovoltaico e biomassa progettati come un unico sistema abitativo ed energetico per il Friuli Venezia Giulia.
            </p>
          </div>
          <div className="grid gap-3 text-sm text-white/65">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-timber">Contatti</p>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.address}</span>
          </div>
          <div className="grid gap-3 text-sm text-white/65">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-timber">Soluzioni</p>
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="hover:text-white">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-between gap-3 text-xs text-white/40">
          <span>© 2026 GeoDomus srls</span>
          <span>Udine, provincia di Udine e Friuli Venezia Giulia</span>
        </div>
      </div>
    </footer>
  );
}
