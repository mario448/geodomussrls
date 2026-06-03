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
      intro="La biomassa e una scelta concreta quando l'impianto viene dimensionato sul fabbisogno reale e integrato con l'involucro, lo stoccaggio e le abitudini di utilizzo."
      description="Riscaldamento a biomassa a Udine e in Friuli Venezia Giulia."
      image="/images/biomassa-geodomus.jpg"
      imageAlt="Locale tecnico moderno con sistema di riscaldamento a biomassa e deposito pellet"
      points={["Pellet, legna e cippato", "Riduzione dei costi di esercizio", "Soluzione per abitazioni e aziende agricole", "Adatto a strutture ricettive", "Integrazione con fotovoltaico", "Valutazione locale e tecnica"]}
      process={["Analisi fabbisogno termico", "Scelta combustibile e generatore", "Verifica locale tecnico e deposito", "Installazione impianto", "Assistenza e manutenzione"]}
      faqs={faqs.biomass}
      cta="Vuoi un sistema a biomassa progettato correttamente?"
    />
  );
}
