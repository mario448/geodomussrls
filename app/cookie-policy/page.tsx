import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FadeIn } from "@/components/Motion";
import { cookieCategories, privacyContacts } from "@/data/privacy";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cookie policy",
  description: "Informativa cookie di GeoDomus srls con categorie, finalita, consenso e gestione delle preferenze.",
  path: "/cookie-policy",
  keywords: ["cookie policy GeoDomus", "cookie GDPR", "preferenze cookie"]
});

export default function CookiePolicyPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Cookie policy" }]} />
      <section className="px-5 pb-20 pt-10 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Informativa cookie</p>
            <h1 className="mt-5 text-6xl font-semibold tracking-tight md:text-8xl">Cookie policy</h1>
            <p className="mt-6 text-lg leading-8 text-graphite/65">
              Questa pagina spiega quali cookie e strumenti simili possono essere usati sul sito GeoDomus, con quali finalita e come gestire il consenso.
            </p>
            <p className="mt-4 text-sm font-semibold text-graphite/55">Ultimo aggiornamento: 4 giugno 2026.</p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <FadeIn>
            <h2 className="text-4xl font-semibold tracking-tight">Cosa sono i cookie</h2>
            <p className="mt-6 leading-8 text-graphite/65">
              I cookie sono piccoli file o identificatori che un sito puo salvare sul dispositivo dell'utente. Alcuni sono necessari per il funzionamento del sito, altri possono essere usati per statistiche, marketing o profilazione e richiedono consenso preventivo quando non sono strettamente necessari.
            </p>
          </FadeIn>
          <FadeIn className="rounded-lg bg-warm p-6">
            <h2 className="text-3xl font-semibold tracking-tight">Stato attuale del sito</h2>
            <p className="mt-5 leading-8 text-graphite/65">
              Al momento il sito e configurato in modo prudente: non risultano installati Google Analytics, Meta Pixel, sistemi di remarketing o altri strumenti di profilazione. Il banner consente comunque di registrare e modificare le preferenze in caso di attivazioni future.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Categorie</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">Cookie e strumenti simili</h2>
          </FadeIn>
          <div className="mt-12 overflow-hidden rounded-lg border border-graphite/10 bg-white shadow-soft">
            <div className="grid bg-graphite text-sm font-bold uppercase tracking-[.14em] text-white md:grid-cols-[.7fr_.45fr_1fr_1fr]">
              <p className="p-5">Categoria</p>
              <p className="border-t border-white/10 p-5 md:border-l md:border-t-0">Stato</p>
              <p className="border-t border-white/10 p-5 md:border-l md:border-t-0">Finalita</p>
              <p className="border-t border-white/10 p-5 md:border-l md:border-t-0">Consenso</p>
            </div>
            {cookieCategories.map((category) => (
              <div key={category.name} className="grid border-t border-graphite/10 md:grid-cols-[.7fr_.45fr_1fr_1fr]">
                <div className="p-5">
                  <h3 className="text-xl font-semibold tracking-tight">{category.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-graphite/55">{category.examples}</p>
                </div>
                <p className="border-t border-graphite/10 p-5 font-semibold text-forest md:border-l md:border-t-0">{category.status}</p>
                <p className="border-t border-graphite/10 p-5 leading-7 text-graphite/65 md:border-l md:border-t-0">{category.description}</p>
                <p className="border-t border-graphite/10 p-5 leading-7 text-graphite/65 md:border-l md:border-t-0">{category.consent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone/55 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <FadeIn>
            <h2 className="text-4xl font-semibold tracking-tight">Come gestire il consenso</h2>
            <p className="mt-6 leading-8 text-graphite/65">
              Puoi accettare tutti i cookie, rifiutare quelli non necessari o personalizzare le preferenze dal banner. Dopo la scelta, puoi riaprire il pannello con il pulsante "Preferenze privacy" visibile sul sito.
            </p>
          </FadeIn>
          <FadeIn>
            <h2 className="text-4xl font-semibold tracking-tight">Durata della scelta</h2>
            <p className="mt-6 leading-8 text-graphite/65">
              La preferenza viene salvata nel browser dell'utente. Il banner potra essere riproposto se cambiano le condizioni del trattamento, se vengono aggiunte nuove terze parti o quando sia opportuno rinnovare la scelta.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeIn className="rounded-lg bg-graphite p-8 text-white shadow-soft">
            <h2 className="text-4xl font-semibold tracking-tight">Contatti privacy</h2>
            <p className="mt-5 leading-8 text-white/68">
              Per domande su cookie, preferenze o trattamento dei dati personali puoi scrivere a{" "}
              <a className="font-semibold text-white underline underline-offset-4" href={`mailto:${privacyContacts.email}`}>
                {privacyContacts.email}
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
