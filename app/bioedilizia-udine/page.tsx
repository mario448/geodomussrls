import { LocalLandingPage } from "@/components/LocalLandingPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Bioedilizia Udine | Case in legno e impianti",
  description: "Bioedilizia a Udine: progettazione e realizzazione di case in legno, involucro efficiente, fotovoltaico e biomassa.",
  path: "/bioedilizia-udine",
  keywords: ["bioedilizia Udine", "case in legno Udine", "costruzioni sostenibili Udine", "progettazione casa ecologica Udine"]
});

export default function BioediliziaUdinePage() {
  return (
    <LocalLandingPage
      path="/bioedilizia-udine"
      eyebrow="Bioedilizia / Udine"
      serviceName="Bioedilizia Udine"
      title="Bioedilizia a Udine: casa, impianti e cantiere nello stesso progetto."
      intro="La bioedilizia non è solo scelta dei materiali. Per GeoDomus significa progettare involucro, comfort estivo, consumi, fotovoltaico, biomassa, pratiche e posa come un sistema unico."
      description="Studio tecnico e impresa edile per bioedilizia a Udine con case in legno, fotovoltaico e biomassa integrati."
      image="/images/villa-geodomus-hero-v3.jpg"
      imageAlt="Bioedilizia a Udine con casa efficiente e progetto impiantistico integrato"
      problems={["Materiali scelti senza calcolo energetico", "Impianti aggiunti dopo il progetto", "Comfort estivo sottovalutato", "Capitolati non confrontabili tra fornitori"]}
      checks={["Orientamento e clima locale", "Trasmittanza, sfasamento e ponti termici", "Predisposizioni impiantistiche", "Fotovoltaico, accumulo e biomassa", "Sequenza corretta delle decisioni"]}
      outputs={["schema casa-impianti", "criticità energetiche", "priorità progettuali", "documenti per passare allo studio preliminare"]}
      links={[{ label: "Case prefabbricate in legno Udine", href: "/case-prefabbricate-legno-udine" }, { label: "Soluzioni integrate", href: "/soluzioni-integrate" }, { label: "Contatti", href: "/contatti" }]}
      faqs={[
        { question: "Cosa significa bioedilizia per GeoDomus?", answer: "Significa progettare materiali, involucro, impianti e cantiere come un sistema tecnico coerente, non scegliere singoli prodotti sostenibili." },
        { question: "Operate a Udine?", answer: "Sì, Udine e provincia sono area operativa prioritaria per GeoDomus." },
        { question: "Seguite anche la realizzazione?", answer: "Sì. GeoDomus unisce progettazione tecnica e realizzazione edile." }
      ]}
      cta="Verifica fattibilità bioedilizia a Udine"
    />
  );
}
