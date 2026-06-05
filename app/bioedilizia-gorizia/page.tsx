import { LocalLandingPage } from "@/components/LocalLandingPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Bioedilizia Gorizia | Case in legno e impianti",
  description: "Bioedilizia a Gorizia: case in legno, involucro efficiente, fotovoltaico, biomassa, pratiche e cantiere coordinati.",
  path: "/bioedilizia-gorizia",
  keywords: ["bioedilizia Gorizia", "case in legno Gorizia", "costruzioni sostenibili Gorizia", "casa ecologica Gorizia"]
});

export default function BioediliziaGoriziaPage() {
  return (
    <LocalLandingPage
      path="/bioedilizia-gorizia"
      eyebrow="Bioedilizia / Gorizia"
      serviceName="Bioedilizia Gorizia"
      title="Bioedilizia a Gorizia con progettazione e realizzazione integrate."
      intro="GeoDomus valuta terreno, vincoli, clima, involucro, impianti e posa prima di proporre soluzioni. La bioedilizia funziona quando edificio ed energia vengono progettati insieme."
      description="Studio tecnico e impresa edile per bioedilizia a Gorizia con case in legno, fotovoltaico e biomassa."
      image="/images/home-cantiere-legno-geodomus.jpg"
      imageAlt="Cantiere di bioedilizia a Gorizia con struttura in legno e impianti integrati"
      problems={["Scelte di materiali non collegate agli impianti", "Locale tecnico e fotovoltaico decisi troppo tardi", "Vincoli locali non chiariti prima del capitolato", "Preventivi difficili da confrontare"]}
      checks={["Vincoli urbanistici e paesaggistici", "Stratigrafie e comfort", "Orientamento e produzione fotovoltaica", "Fabbisogno termico e biomassa", "Responsabilità di progetto e cantiere"]}
      outputs={["mappa delle verifiche", "ordine corretto delle scelte", "criticità prima della firma", "passo tecnico consigliato"]}
      links={[{ label: "Case in legno Gorizia", href: "/case-prefabbricate-legno-gorizia" }, { label: "Fotovoltaico Gorizia", href: "/fotovoltaico-gorizia" }, { label: "Contatti", href: "/contatti" }]}
      faqs={[
        { question: "GeoDomus segue bioedilizia a Gorizia?", answer: "Sì, valutiamo progetti a Gorizia e provincia con approccio integrato tra studio tecnico e impresa edile." },
        { question: "La bioedilizia costa sempre di più?", answer: "Non necessariamente. Il costo va letto sul ciclo complessivo: progetto, cantiere, consumi, manutenzione e qualità dell'involucro." },
        { question: "Posso partire solo con una verifica?", answer: "Sì. La verifica di fattibilità serve proprio a capire se e come procedere." }
      ]}
      cta="Verifica fattibilità bioedilizia a Gorizia"
    />
  );
}
