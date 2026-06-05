import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FadeIn } from "@/components/Motion";
import { privacyContacts, privacyTreatments } from "@/data/privacy";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy policy",
  description: "Informativa sul trattamento dei dati personali di GeoDomus srls ai sensi degli articoli 12, 13 e 14 del GDPR.",
  path: "/privacy-policy",
  keywords: ["privacy policy GeoDomus", "GDPR", "informativa privacy"]
});

const rights = [
  "accesso ai dati personali",
  "rettifica dei dati inesatti",
  "cancellazione nei casi previsti",
  "limitazione del trattamento",
  "opposizione al trattamento",
  "portabilita dei dati, quando applicabile",
  "revoca del consenso, senza pregiudicare la liceità del trattamento precedente",
  "reclamo al Garante per la protezione dei dati personali"
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Privacy policy" }]} />
      <section className="px-5 pb-20 pt-10 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Informativa privacy</p>
            <h1 className="mt-5 text-6xl font-semibold tracking-tight md:text-8xl">Privacy policy</h1>
            <p className="mt-6 text-lg leading-8 text-graphite/65">
              Questa informativa descrive come {site.name} tratta i dati personali raccolti tramite il sito, il modulo contatti, le comunicazioni dirette e le attività precontrattuali o contrattuali.
            </p>
            <p className="mt-4 text-sm font-semibold text-graphite/55">Ultimo aggiornamento: 4 giugno 2026.</p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <FadeIn>
            <h2 className="text-4xl font-semibold tracking-tight">Titolare del trattamento</h2>
            <div className="mt-6 rounded-lg bg-warm p-6 leading-8 text-graphite/70">
              <p>
                <strong className="text-graphite">{privacyContacts.controller}</strong>
              </p>
              <p>{privacyContacts.address}</p>
              <p>
                Email privacy:{" "}
                <a className="font-semibold text-forest" href={`mailto:${privacyContacts.email}`}>
                  {privacyContacts.email}
                </a>
              </p>
              <p className="mt-4 text-sm leading-6 text-graphite/55">
                Il responsabile della protezione dei dati non è indicato perché, sulla base delle informazioni disponibili, non risulta nominato. Se verra nominato, questa pagina dovra essere aggiornata con i relativi contatti.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <h2 className="text-4xl font-semibold tracking-tight">Principi applicati</h2>
            <p className="mt-6 leading-8 text-graphite/65">
              I dati sono trattati secondo liceità, correttezza, trasparenza, minimizzazione, esattezza, limitazione della conservazione, integrità e riservatezza. GeoDomus raccoglie solo i dati necessari rispetto alle finalità dichiarate e non usa il sito per decisioni automatizzate o profilazione senza consenso.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Trattamenti</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Quali dati trattiamo e perché</h2>
          </FadeIn>
          <div className="mt-12 grid gap-4">
            {privacyTreatments.map((item) => (
              <FadeIn key={item.title} className="rounded-lg border border-graphite/10 bg-white p-6 shadow-soft">
                <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <p className="leading-7 text-graphite/65">
                    <strong className="block text-graphite">Dati trattati</strong>
                    {item.data}
                  </p>
                  <p className="leading-7 text-graphite/65">
                    <strong className="block text-graphite">Finalità</strong>
                    {item.purpose}
                  </p>
                  <p className="leading-7 text-graphite/65">
                    <strong className="block text-graphite">Base giuridica</strong>
                    {item.legalBasis}
                  </p>
                  <p className="leading-7 text-graphite/65">
                    <strong className="block text-graphite">Conservazione</strong>
                    {item.retention}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone/55 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <FadeIn>
            <h2 className="text-4xl font-semibold tracking-tight">Destinatari e responsabili</h2>
            <p className="mt-6 leading-8 text-graphite/65">
              I dati possono essere comunicati a fornitori tecnici, hosting provider, consulenti, professionisti, imprese, installatori, partner operativi, soggetti che gestiscono pratiche amministrative o tecniche, autorità e soggetti pubblici nei casi previsti dalla legge. Quando necessario, tali soggetti operano come responsabili del trattamento o autonomi titolari.
            </p>
          </FadeIn>
          <FadeIn>
            <h2 className="text-4xl font-semibold tracking-tight">Trasferimenti fuori dallo SEE</h2>
            <p className="mt-6 leading-8 text-graphite/65">
              Il sito non installa al momento strumenti di marketing o analytics di terze parti. Se in futuro saranno utilizzati servizi che comportano trasferimenti di dati fuori dallo Spazio Economico Europeo, GeoDomus dovra verificarne le garanzie applicabili, aggiornare questa informativa e, dove richiesto, acquisire il consenso.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <FadeIn>
            <h2 className="text-4xl font-semibold tracking-tight">Diritti dell'interessato</h2>
            <p className="mt-6 leading-8 text-graphite/65">
              Puoi esercitare i diritti previsti dagli articoli 15-22 GDPR scrivendo a{" "}
              <a className="font-semibold text-forest" href={`mailto:${privacyContacts.email}`}>
                {privacyContacts.email}
              </a>
              . La richiesta verra gestita nei termini previsti dalla normativa applicabile.
            </p>
          </FadeIn>
          <div className="grid gap-3 md:grid-cols-2">
            {rights.map((right) => (
              <FadeIn key={right} className="rounded-lg border border-graphite/10 bg-warm p-5 font-semibold text-graphite/75">
                {right}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-lg bg-graphite p-8 text-white shadow-soft">
          <h2 className="text-4xl font-semibold tracking-tight">Cookie e preferenze</h2>
          <p className="mt-5 leading-8 text-white/68">
            Le informazioni sui cookie, sulle categorie attive e sulla modifica delle preferenze sono disponibili nella cookie policy.
          </p>
          <Link href="/cookie-policy" className="mt-6 inline-flex min-h-12 items-center rounded-md bg-white px-6 font-semibold text-graphite">
            Leggi la cookie policy
          </Link>
        </div>
      </section>
    </main>
  );
}
