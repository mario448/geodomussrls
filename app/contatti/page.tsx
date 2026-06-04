import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FadeIn } from "@/components/Motion";
import Link from "next/link";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Raccontaci il progetto",
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
            <h1 className="mt-5 text-6xl font-semibold tracking-tight md:text-8xl">Raccontaci il progetto</h1>
            <p className="mt-6 text-xl leading-9 text-graphite/65">
              Non facciamo preventivi seri senza dati. Piu informazioni inserisci, piu la prima risposta sara utile. Se hai gia bollette, foto, planimetrie o preventivi, segnalalo nel messaggio.
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
              <label className="grid gap-2 text-sm text-graphite/60">Tipo di progetto<select name="projectType" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite"><option>Nuova casa in legno</option><option>Riqualificazione edificio</option><option>Fotovoltaico</option><option>Biomassa</option><option>Soluzione integrata</option><option>Azienda agricola</option><option>Struttura ricettiva</option></select></label>
              <label className="grid gap-2 text-sm text-graphite/60">Stato attuale<select name="projectStatus" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite"><option>Idea iniziale</option><option>Terreno disponibile</option><option>Progetto architettonico gia avviato</option><option>Edificio esistente</option><option>Preventivi gia ricevuti</option><option>Lavori gia iniziati</option></select></label>
              <label className="grid gap-2 text-sm text-graphite/60">Budget indicativo<select name="budget" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite"><option>Sotto 20.000 euro</option><option>20.000-50.000 euro</option><option>50.000-150.000 euro</option><option>Oltre 150.000 euro</option><option>Da definire</option></select></label>
              <label className="grid gap-2 text-sm text-graphite/60">Tempi previsti<select name="timing" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite"><option>Subito</option><option>Entro 3 mesi</option><option>Entro 6 mesi</option><option>Entro 12 mesi</option><option>Sto valutando</option></select></label>
              <label className="grid gap-2 text-sm text-graphite/60">Hai documenti disponibili?<select name="documentsAvailable" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite"><option>Bollette</option><option>Foto tetto</option><option>Planimetrie</option><option>Progetto tecnico</option><option>Preventivi ricevuti</option><option>Nessun documento</option></select></label>
              <label className="grid gap-2 text-sm text-graphite/60">Messaggio<textarea required name="message" rows={5} className="rounded-md border border-graphite/10 p-4 text-graphite" /></label>
              <label className="flex gap-3 text-sm leading-6 text-graphite/60">
                <input required type="checkbox" name="privacy" className="mt-1" />
                <span>
                  Ho letto la{" "}
                  <Link href="/privacy-policy" className="font-semibold text-forest underline underline-offset-4">
                    privacy policy
                  </Link>{" "}
                  e autorizzo il trattamento dei dati per essere ricontattato in merito alla richiesta inviata.
                </span>
              </label>
              <label className="flex gap-3 text-sm leading-6 text-graphite/60">
                <input type="checkbox" name="marketingConsent" className="mt-1" />
                <span>
                  Acconsento a ricevere comunicazioni informative o promozionali da GeoDomus. Il consenso e facoltativo e revocabile in qualsiasi momento.
                </span>
              </label>
              <p className="text-sm leading-6 text-graphite/55">Piu dati fornisci, piu utile sara la prima risposta. Non proponiamo pacchetti standard senza capire edificio, consumi e obiettivi.</p>
              <button type="submit" className="min-h-12 rounded-md bg-graphite px-6 font-semibold text-white">Invia richiesta di valutazione</button>
              <p className="text-sm leading-6 text-graphite/55">Richiesta ricevuta. Analizzeremo i dati inviati e ti ricontatteremo per indicarti il prossimo passo utile: raccolta documenti, sopralluogo, confronto tecnico o preventivo preliminare.</p>
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
