import { LocalLandingPage } from "@/components/LocalLandingPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case prefabbricate in legno Gorizia",
  description: "Case prefabbricate in legno a Gorizia e provincia: progetto, pratiche, struttura, impianti fotovoltaici e biomassa integrati.",
  path: "/case-prefabbricate-legno-gorizia",
  keywords: ["case prefabbricate in legno Gorizia", "case in legno Gorizia", "bioedilizia Gorizia", "casa in legno chiavi in mano Gorizia"]
});

export default function WoodHomesGoriziaPage() {
  return (
    <LocalLandingPage
      path="/case-prefabbricate-legno-gorizia"
      eyebrow="Case in legno / Gorizia"
      serviceName="Case prefabbricate in legno Gorizia"
      title="Case prefabbricate in legno a Gorizia, progettate con impianti e cantiere."
      intro="GeoDomus valuta terreno, vincoli, struttura, involucro, fotovoltaico e riscaldamento prima di chiudere il capitolato. L'obiettivo è evitare una casa in legno scelta a catalogo e adattata tardi al contesto reale."
      description="Progettazione e realizzazione di case prefabbricate in legno a Gorizia e provincia con impianti integrati."
      image="/images/case-legno-geodomus.jpg"
      imageAlt="Casa prefabbricata in legno a Gorizia con progetto energetico integrato GeoDomus"
      problems={["Terreno non ancora verificato dal punto di vista urbanistico", "Progetto architettonico chiuso prima delle predisposizioni impiantistiche", "Tetto disegnato senza valutare fotovoltaico e ombre", "Preventivi confrontati solo sul prezzo al metro quadro"]}
      checks={["Fattibilità urbanistica e vincoli locali", "Orientamento, ombre e superficie utile per fotovoltaico", "Stratigrafie, sfasamento e comfort estivo", "Locale tecnico, biomassa e accumulo", "Capitolato con inclusioni ed esclusioni"]}
      outputs={["ordine delle verifiche prima della firma", "criticità tecniche da chiarire", "documenti mancanti", "percorso verso sopralluogo o studio preliminare"]}
      links={[{ label: "Case in legno Udine e FVG", href: "/case-prefabbricate-legno-udine" }, { label: "Soluzioni integrate", href: "/soluzioni-integrate" }, { label: "Contatti", href: "/contatti" }]}
      faqs={[
        { question: "Realizzate case in legno anche in provincia di Gorizia?", answer: "Sì, GeoDomus opera in Friuli Venezia Giulia e valuta progetti a Gorizia e provincia partendo da terreno, vincoli, obiettivi e fattibilità tecnica." },
        { question: "Quanto costa una casa in legno a Gorizia?", answer: "Dipende da terreno, superficie, fondazioni, prestazioni, impianti e finiture. Prima del prezzo serve un capitolato confrontabile." },
        { question: "Seguite anche fotovoltaico e biomassa?", answer: "Sì. Casa, fotovoltaico, accumulo e biomassa vengono valutati come parti dello stesso progetto." }
      ]}
      cta="Verifica fattibilità casa in legno a Gorizia"
    />
  );
}
