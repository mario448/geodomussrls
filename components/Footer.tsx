import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-graphite px-5 py-14 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_.7fr_.7fr_.6fr]">
          <div>
            <p className="text-4xl font-semibold tracking-tight lg:text-7xl">GeoDomus srls</p>
            <p className="mt-5 max-w-xl text-white/60">
              GeoDomus srls in costituzione. Studio tecnico e impresa specializzata in bioedilizia, case in legno, fotovoltaico e biomasse in Friuli-Venezia Giulia.
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
            <Link href="/case-prefabbricate-legno-udine" className="hover:text-white">
              Costruire casa
            </Link>
            <Link href="/soluzioni-integrate" className="hover:text-white">
              Riqualificare
            </Link>
            <Link href="/fotovoltaico-udine-fvg" className="hover:text-white">
              Ridurre bollette
            </Link>
            <Link href="/blog" className="hover:text-white">
              Guide
            </Link>
          </div>
          <div className="grid gap-3 text-sm text-white/65">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-timber">Privacy</p>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy policy
            </Link>
            <Link href="/cookie-policy" className="hover:text-white">
              Cookie policy
            </Link>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-between gap-3 text-xs text-white/40">
          <span>© 2026 GeoDomus srls in costituzione</span>
          <span>Area operativa prioritaria: Udine, Gorizia, province e FVG · P.IVA/REA/sede legale [DA COMPLETARE] · Informazioni soggette ad aggiornamento societario</span>
        </div>
      </div>
    </footer>
  );
}
