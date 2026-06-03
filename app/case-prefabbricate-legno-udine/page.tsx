import { ServicePage } from "@/components/ServicePage";
import { faqs } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case prefabbricate in legno a Udine e FVG",
  description:
    "Case prefabbricate in legno a Udine e in Friuli Venezia Giulia: efficienza energetica, comfort, sostenibilita e tempi di realizzazione controllati.",
  path: "/case-prefabbricate-legno-udine",
  keywords: ["case prefabbricate in legno Udine", "case in legno FVG", "case prefabbricate Friuli Venezia Giulia", "costruire casa in legno Udine"]
});

export default function WoodHomesPage() {
  return (
    <ServicePage
      path="/case-prefabbricate-legno-udine"
      title="Case prefabbricate in legno"
      eyebrow="Udine / Friuli Venezia Giulia"
      intro="Costruire una casa in legno significa progettare comfort, efficienza e tempi certi fin dalle prime scelte tecniche. GeoDomus accompagna il cliente in un percorso premium, locale e concreto."
      description="Case prefabbricate in legno a Udine e in Friuli Venezia Giulia."
      image="/images/case-legno-geodomus.jpg"
      imageAlt="Dettaglio architettonico di una casa prefabbricata in legno in Friuli Venezia Giulia"
      points={["Efficienza energetica elevata", "Comfort termico e acustico", "Tempi di cantiere controllati", "Materiali sostenibili", "Personalizzazione architettonica", "Integrazione con fotovoltaico e biomassa"]}
      process={["Analisi del terreno, esigenze e budget", "Sopralluogo e verifica vincoli", "Progettazione tecnica e prestazionale", "Definizione materiali e impianti integrati", "Realizzazione e assistenza post-intervento"]}
      faqs={faqs.wood}
      cta="Vuoi costruire una casa in legno a Udine?"
    />
  );
}
