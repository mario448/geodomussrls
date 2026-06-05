import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FadeIn } from "@/components/Motion";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Preventivo case in legno Udine | Contatti GeoDomus",
  description:
    "Avvia il progetto in bioedilizia a Udine e Gorizia. Contatta GeoDomus per case in legno, fotovoltaico, biomasse e fattibilità tecnica.",
  path: "/contatti",
  keywords: ["Preventivo case in legno Udine", "Contatti GeoDomus Gorizia", "bioedilizia Gorizia", "impianti fotovoltaici FVG", "caldaie a biomasse Udine"]
});

const nextSteps = [
  "Verifichiamo se parliamo di nuova costruzione, efficientamento o impianto specifico",
  "Raccogliamo terreno, planimetrie, bollette, foto, vincoli o dati disponibili",
  "Valutiamo fattibilità tecnica, urbanistica ed energetica",
  "Se serve, fissiamo un sopralluogo tecnico",
  "Ti indichiamo il prossimo passo: studio, progetto, computo o esclusione tecnica"
];

const documents = [
  "Dati del terreno edificabile, se disponibili",
  "Planimetria o progetto preliminare",
  "Bollette elettriche ultimi 12 mesi",
  "Consumi riscaldamento",
  "Foto tetto o locale tecnico",
  "Dati caldaia o generatore esistente",
  "Vincoli comunali o paesaggistici già noti"
];

export default function ContactPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Contatti" }]} />
      <section className="px-5 pb-20 pt-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Contatti</p>
            <h1 className="mt-5 text-6xl font-semibold tracking-tight md:text-8xl">Avvia il tuo progetto in bioedilizia a Udine e Gorizia</h1>
            <p className="mt-6 text-xl leading-9 text-graphite/65">
              Per stimare case prefabbricate in legno, impianti fotovoltaici e biomasse non usiamo listini standard. Serve una prima analisi tecnica del terreno o dell'immobile esistente: vincoli, consumi, orientamento, locale tecnico, budget e obiettivo energetico.
            </p>
            <div className="mt-8 grid gap-3 text-graphite/65">
              <p>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
                <span className="block text-sm text-graphite/50">[DA COMPLETARE: es. "Lun-Ven 9:00-18:00"]</span>
              </p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href="https://wa.me/39XXXXXXXXXX">Scrivici su WhatsApp [DA COMPLETARE: numero WhatsApp Business]</a>
              <p>{site.address}</p>
              <p>Area servita: Udine, Gorizia, province e Friuli-Venezia Giulia.</p>
            </div>
          </FadeIn>
          <FadeIn>
            <form className="grid gap-4 rounded-lg bg-white p-6 shadow-soft">
              <label className="grid gap-2 text-sm text-graphite/60">Nome e cognome<input required name="name" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite" /></label>
              <label className="grid gap-2 text-sm text-graphite/60">Email<input required type="email" name="email" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite" /></label>
              <label className="grid gap-2 text-sm text-graphite/60">Telefono<input name="phone" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite" /></label>
              <label className="grid gap-2 text-sm text-graphite/60">Comune<input name="city" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite" /></label>
              <label className="grid gap-2 text-sm text-graphite/60">Possiedi già il terreno edificabile?<select name="landAvailable" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite"><option>Si</option><option>No</option><option>Sto valutando l'acquisto</option><option>Non riguarda il mio caso</option></select></label>
              <label className="grid gap-2 text-sm text-graphite/60">Tipo di intervento<select name="projectType" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite"><option>Nuova costruzione in legno</option><option>Efficientamento energetico edificio esistente</option><option>Fotovoltaico e accumulo</option><option>Caldaia a biomasse</option><option>Soluzione integrata</option><option>Azienda agricola</option><option>Struttura ricettiva</option></select></label>
              <label className="grid gap-2 text-sm text-graphite/60">Interesse specifico<select name="specificInterest" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite"><option>Case in legno</option><option>Fotovoltaico</option><option>Biomasse</option><option>Casa + impianti integrati</option><option>Non so, voglio una diagnosi</option></select></label>
              <label className="grid gap-2 text-sm text-graphite/60">Stato attuale<select name="projectStatus" className="min-h-12 rounded-md border border-graphite/10 px-4 text-graphite"><option>Idea iniziale</option><option>Terreno disponibile</option><option>Progetto architettonico già avviato</option><option>Edificio esistente</option><option>Preventivi già ricevuti</option><option>Lavori già iniziati</option></select></label>
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
              <p className="text-sm leading-6 text-graphite/55">Più dati fornisci, più utile sara la prima risposta. Non proponiamo pacchetti standard senza capire terreno, edificio, consumi e obiettivi.</p>
              <button type="submit" className="min-h-12 rounded-md bg-graphite px-6 font-semibold text-white">Richiedi sopralluogo tecnico o studio di fattibilità</button>
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
            <h2 className="text-3xl font-semibold tracking-tight">Dati NAP e documenti utili</h2>
            <div className="mt-6 grid gap-3">
              {documents.map((item) => (
                <p key={item} className="rounded-md bg-white p-4 font-semibold text-graphite/72">{item}</p>
              ))}
            </div>
            <p className="mt-8 leading-8 text-graphite/65">
              Segnaposto NAP: GeoDomus srls in costituzione, ufficio Udine/Gorizia [DA COMPLETARE], telefono {site.phone}, email {site.email}, orari Lun-Ven 9:00-18:00 su appuntamento.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
