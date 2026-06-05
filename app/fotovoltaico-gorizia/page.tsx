import { LocalLandingPage } from "@/components/LocalLandingPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Impianti fotovoltaici Gorizia",
  description: "Impianti fotovoltaici a Gorizia per case, aziende e agriturismi: consumi, tetto, accumulo, pratiche e installazione.",
  path: "/fotovoltaico-gorizia",
  keywords: ["fotovoltaico Gorizia", "impianti fotovoltaici Gorizia", "installazione pannelli solari Gorizia", "fotovoltaico aziende agricole Gorizia"]
});

export default function SolarGoriziaPage() {
  return (
    <LocalLandingPage
      path="/fotovoltaico-gorizia"
      eyebrow="Fotovoltaico / Gorizia"
      serviceName="Impianti fotovoltaici Gorizia"
      title="Impianti fotovoltaici a Gorizia dimensionati sui consumi reali."
      intro="GeoDomus non parte dal numero di pannelli. Prima leggiamo bollette, tetto, ombre, potenza disponibile, autoconsumo e possibili carichi futuri, poi valutiamo impianto, accumulo e integrazione con il resto dell'edificio."
      description="Progettazione e installazione di impianti fotovoltaici a Gorizia con analisi consumi, accumulo e integrazione energetica."
      image="/images/fotovoltaico-geodomus.jpg"
      imageAlt="Impianto fotovoltaico a Gorizia su tetto residenziale con verifica ombre e accumulo"
      problems={["Tetto usato come unico criterio di dimensionamento", "Accumulo proposto senza profilo di autoconsumo", "Ombre e stato copertura non verificati", "Preventivi con potenze e componenti non confrontabili"]}
      checks={["Bollette ultimi 12 mesi", "Consumi diurni e serali", "Orientamento, inclinazione e ombre", "Stato impianto elettrico e copertura", "Accumulo, pompa di calore o carichi futuri"]}
      outputs={["range di potenza da valutare", "criticità del tetto", "documenti mancanti", "prossimo passo tecnico"]}
      links={[{ label: "Fotovoltaico Udine e FVG", href: "/fotovoltaico-udine-fvg" }, { label: "Aziende agricole e agriturismi", href: "/energia-aziende-agricole-agriturismi-fvg" }, { label: "Contatti", href: "/contatti" }]}
      faqs={[
        { question: "Installate fotovoltaico a Gorizia?", answer: "Sì, valutiamo impianti fotovoltaici a Gorizia e provincia per abitazioni, piccole imprese, aziende agricole e strutture ricettive." },
        { question: "Serve sempre la batteria?", answer: "No. L'accumulo ha senso solo se migliora l'autoconsumo rispetto al profilo reale dei consumi." },
        { question: "Potete confrontare preventivi già ricevuti?", answer: "Sì, ma solo se componenti, potenze, garanzie, posa e opere incluse vengono resi confrontabili." }
      ]}
      cta="Verifica fattibilità fotovoltaico a Gorizia"
    />
  );
}
