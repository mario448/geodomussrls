import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FadeIn } from "@/components/Motion";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Richiedi una verifica tecnica preliminare",
  description:
    "Invia a GeoDomus srls i dati minimi su edificio, consumi e obiettivi per valutare case in legno, fotovoltaico, biomassa e soluzioni integrate in FVG.",
  path: "/contatti",
  keywords: ["GeoDomus srls contatti", "verifica tecnica preliminare", "case in legno Udine", "fotovoltaico Udine", "biomassa Udine"]
});

const nextSteps = [
  "Ti ricontattiamo per chiarire obiettivo e contesto",
  "Raccogliamo bollette, foto, planimetrie o dati disponibili",
  "Valutiamo priorita, vincoli e fattibilita",
  "Se serve, fissiamo un sopralluogo",
  "Ti proponiamo una soluzione tecnica coerente"
];

const documents = [
  "Bollette elettriche ultimi 12 mesi",
  "Consumi riscaldamento",
  "Foto tetto o locale tecnico",
  "Planimetria",
  "Dati caldaia o generatore esistente",
  "Progetto nuova costruzione, se disponibile"
];

export default function ContactPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Contatti" }]} />
      <section className="px-5 pb-20 pt-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Contatti</p>
            <h1 className="mt-5 text-6xl font-semibold tracking-tight md:text-8xl">Richiedi una verifica tecnica preliminare</h1>
            <p className="mt-6 text-xl leading-9 text-graphite/65">
              Non partire da un preventivo generico. Inviaci i dati minimi e capiamo quale intervento ha senso per il tuo edificio.
            </p>
            <div className="mt-8 grid gap-3 text-graphite/65">
              <p>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
                <span className="block text-sm text-graphite/50">[DA COMPLETARE: es. "Lun-Ven 9:00-18:00"]</span>
              </p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href="https://wa.me/39XXXXXXXXXX">Scrivici su WhatsApp [DA COMPLETARE: numero WhatsApp Business]</a>
              <p>{site.address}</p>
              <p>Area servita: Udine, provincia di Udine, Friuli Venezia Giulia.</p>
            </div>
          </FadeIn>
          <FadeIn>
            <form className="grid gap-4 rounded-lg bg-white p-6 shadow-soft">
              <label className="grid gap-2 text-sm text-graphite/60">Nome e cognome<input required name="name" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite" /></label>
              <label className="grid gap-2 text-sm text-graphite/60">Email<input required type="email" name="email" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite" /></label>
              <label className="grid gap-2 text-sm text-graphite/60">Telefono<input name="phone" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite" /></label>
              <label className="grid gap-2 text-sm text-graphite/60">Comune<input name="city" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite" /></label>
              <label className="grid gap-2 text-sm text-graphite/60">Tipo di edificio<select name="buildingType" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite"><option>Nuova costruzione</option><option>Casa esistente</option><option>Azienda agricola</option><option>Struttura ricettiva</option><option>Altro</option></select></label>
              <label className="grid gap-2 text-sm text-graphite/60">Obiettivo principale<select name="goal" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite"><option>Costruire casa</option><option>Ridurre bollette</option><option>Installare fotovoltaico</option><option>Valutare biomassa</option><option>Integrare piu soluzioni</option><option>Capire da dove partire</option></select></label>
              <label className="grid gap-2 text-sm text-graphite/60">Spesa elettrica mensile indicativa<input name="monthlyElectricCost" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite" /></label>
              <label className="grid gap-2 text-sm text-graphite/60">Spesa riscaldamento annua indicativa<input name="yearlyHeatingCost" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite" /></label>
              <label className="grid gap-2 text-sm text-graphite/60">Hai bollette, foto o planimetrie disponibili?<select name="documentsAvailable" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite"><option>Si</option><option>No</option></select></label>
              <label className="grid gap-2 text-sm text-graphite/60">Messaggio<textarea required name="message" rows={5} className="rounded-md border border-graphite/10 p-4 text-graphite" /></label>
              <p className="text-sm leading-6 text-graphite/55">Piu dati fornisci, piu utile sara la prima risposta. Non proponiamo pacchetti standard senza capire edificio, consumi e obiettivi.</p>
              <button type="submit" className="min-h-12 rounded-md bg-graphite px-6 font-semibold text-white">Invia richiesta di verifica</button>
              <p className="text-sm leading-6 text-graphite/55">Dopo l'invio ti ricontatteremo entro 1 giorno lavorativo per fissare un primo colloquio telefonico gratuito di 20 minuti.</p>
            </form>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Dopo l'invio</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Cosa succede dopo l'invio</h2>
            <div className="mt-10 grid gap-3">
              {nextSteps.map((step, index) => (
                <div key={step} className="rounded-lg border border-graphite/10 bg-warm p-5">
                  <span className="text-sm font-semibold text-timber">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-2 text-xl font-semibold">{step}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn className="rounded-lg border border-graphite/10 bg-warm p-7 shadow-soft">
            <h2 className="text-3xl font-semibold tracking-tight">Documenti utili da preparare</h2>
            <div className="mt-6 grid gap-3">
              {documents.map((item) => (
                <p key={item} className="rounded-md bg-white p-4 font-semibold text-graphite/72">{item}</p>
              ))}
            </div>
            <p className="mt-8 leading-8 text-graphite/65">
              Non proponiamo interventi standard senza dati. Se una soluzione non e prioritaria o non ha senso nel tuo caso, va esclusa o rimandata.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
