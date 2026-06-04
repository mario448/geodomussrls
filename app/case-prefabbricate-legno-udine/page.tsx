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
      intro="Una casa in legno non e solo una struttura. E un sistema edificio-impianti."
      description="Case prefabbricate in legno a Udine e in Friuli Venezia Giulia."
      image="/images/case-legno-geodomus.jpg"
      imageAlt="Dettaglio architettonico di una casa prefabbricata in legno in Friuli Venezia Giulia"
      points={["Bollette fino al 70% piu basse rispetto a una costruzione tradizionale non isolata", "Temperatura stabile estate e inverno, senza correnti e senza umidita - garantita dalla stratigrafia dell'involucro", "Autoconsumo energetico elevato: produci la maggior parte dell'energia che consumi direttamente in casa", "Legno certificato, materiali a bassa emissione e filiera verificata - una scelta che vale anche per il valore di rivendita", "Un solo interlocutore per casa, impianti e riscaldamento: nessuna incompatibilita tra sistemi, nessuna responsabilita divisa", "Siamo a Udine: sopralluogo reale prima di ogni proposta, assistenza post-intervento senza attese da call center"]}
      problemTitle="Le prestazioni reali dipendono da involucro, impianti e cantiere."
      problemText="Le prestazioni reali dipendono da involucro, stratigrafie, tenuta all'aria, comfort estivo, impianti e qualita del cantiere. Per questo GeoDomus non valuta la casa separatamente da fotovoltaico, generazione termica e fabbisogno energetico."
      whenMakesSense={["Vuoi costruire partendo da terreno, vincoli e obiettivi energetici", "Vuoi chiarire capitolato, tempi e prestazioni prima di confrontare offerte", "Vuoi coordinare involucro, fotovoltaico e sistema termico fin dal progetto", "Vuoi ridurre il rischio di varianti costose in fase avanzata"]}
      whenNotSense={["Il terreno o i vincoli non sono ancora verificati", "Il budget non tiene conto di fondazioni, finiture e impianti", "Si confrontano solo prezzi al mq senza capitolati equivalenti", "Il progetto architettonico e gia chiuso senza valutazione impiantistica"]}
      checks={["Terreno e vincoli", "Orientamento", "Superficie e layout", "Prestazioni energetiche desiderate", "Comfort estivo", "Impianti previsti", "Budget", "Tempi", "Priorita del cliente"]}
      mistakes={["Scegliere solo in base al prezzo al mq", "Non valutare comfort estivo e acustica", "Separare progetto architettonico e impianti", "Non chiarire cosa e incluso nel capitolato", "Confrontare preventivi non equivalenti"]}
      process={["Analisi del terreno, esigenze e budget", "Sopralluogo e verifica vincoli", "Progettazione tecnica e prestazionale", "Definizione materiali e impianti integrati", "Realizzazione e assistenza post-intervento"]}
      faqs={faqs.wood}
      cta="Valuta il tuo progetto di casa in legno"
    />
  );
}
