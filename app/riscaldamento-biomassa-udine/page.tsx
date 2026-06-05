import { ServicePage } from "@/components/ServicePage";
import { faqs } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Riscaldamento a biomassa a Udine e in FVG",
  description:
    "Sistemi di riscaldamento a biomassa a Udine e in Friuli Venezia Giulia: pellet, legna, cippato e integrazione con abitazioni efficienti.",
  path: "/riscaldamento-biomassa-udine",
  keywords: ["riscaldamento a biomassa Udine", "caldaie a pellet FVG", "impianti biomassa Friuli Venezia Giulia", "riscaldamento sostenibile Udine"]
});

export default function BiomassPage() {
  return (
    <ServicePage
      path="/riscaldamento-biomassa-udine"
      title="Riscaldamento a biomassa"
      eyebrow="Pellet / Legna / Cippato"
      intro="La biomassa ha senso solo se spazio, fabbisogno e gestione sono coerenti."
      description="Riscaldamento a biomassa a Udine e in Friuli Venezia Giulia."
      image="/images/biomassa-geodomus.jpg"
      imageAlt="Locale tecnico moderno con sistema di riscaldamento a biomassa e deposito pellet in provincia di Udine"
      points={["Pellet, legna e cippato", "Riduzione dei costi di esercizio", "Soluzione per abitazioni e aziende agricole", "Adatto a strutture ricettive", "Integrazione con fotovoltaico", "Valutazione locale e tecnica"]}
      problemTitle="Una caldaia o stufa a biomassa richiede compatibilità tecnica."
      problemText="Una caldaia o stufa a biomassa può ridurre la dipendenza da altre fonti, ma va valutata con attenzione: servono spazio tecnico, combustibile adeguato, manutenzione, canna fumaria e compatibilità con l'edificio."
      whenMakesSense={["Hai fabbisogno termico coerente e misurabile", "Hai spazio tecnico e deposito combustibile", "Puoi gestire manutenzione e rifornimento", "Vuoi integrare biomassa con fotovoltaico o altri sistemi"]}
      whenNotSense={["Spazi tecnici insufficienti", "Scarsa disponibilità o gestione combustibile", "Necessità di automazione totale", "Edificio con fabbisogno molto basso", "Vincoli tecnici o logistici"]}
      checks={["Fabbisogno termico", "Superficie riscaldata", "Tipo edificio", "Spazio per generatore e accumulo", "Spazio per pellet o legna", "Canna fumaria", "Manutenzione", "Abitudini d'uso", "Possibile integrazione con fotovoltaico o altri impianti"]}
      mistakes={["Scegliere la potenza senza calcolo del fabbisogno", "Ignorare deposito, accessi e rifornimento", "Non verificare canna fumaria e locale tecnico", "Sottovalutare manutenzione e gestione combustibile", "Valutare la biomassa senza guardare involucro e consumi"]}
      process={["Analisi fabbisogno termico", "Scelta combustibile e generatore", "Verifica locale tecnico e deposito", "Installazione impianto", "Assistenza e manutenzione"]}
      faqs={faqs.biomass}
      cta="Valuta se la biomassa ha senso nel tuo edificio"
    />
  );
}
