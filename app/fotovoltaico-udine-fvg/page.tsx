import { ServicePage } from "@/components/ServicePage";
import { faqs } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Impianti fotovoltaici a Udine e in FVG",
  description:
    "Impianti fotovoltaici a Udine e in Friuli Venezia Giulia per abitazioni e aziende: autoconsumo, accumulo e integrazione energetica.",
  path: "/fotovoltaico-udine-fvg",
  keywords: ["impianti fotovoltaici Udine", "fotovoltaico FVG", "installazione pannelli solari Udine", "energia solare Friuli Venezia Giulia"]
});

export default function SolarPage() {
  return (
    <ServicePage
      path="/fotovoltaico-udine-fvg"
      title="Impianti fotovoltaici"
      eyebrow="Energia solare / FVG"
      intro="Il fotovoltaico conviene solo se e dimensionato sui tuoi consumi reali."
      description="Impianti fotovoltaici a Udine e in Friuli Venezia Giulia."
      image="/images/fotovoltaico-geodomus.jpg"
      imageAlt="Impianto fotovoltaico integrato sul tetto di una casa sostenibile"
      points={["Riduzione delle bollette", "Autoconsumo intelligente", "Accumulo energetico", "Integrazione con pompe di calore o biomassa", "Soluzioni per abitazioni e aziende", "Monitoraggio delle prestazioni"]}
      problemTitle="Un impianto non va scelto partendo dal numero di pannelli."
      problemText="Un impianto non va scelto partendo dal numero di pannelli, ma da consumi, autoconsumo, esposizione, accumulo, abitudini e obiettivi futuri."
      whenMakesSense={["Hai consumi elettrici rilevanti e misurabili", "Il tetto ha esposizione e superficie coerenti", "Puoi aumentare autoconsumo o programmare alcuni carichi", "Vuoi valutare accumulo, pompa di calore o carichi futuri con ordine"]}
      whenNotSense={["Consumi bassi", "Tetto molto ombreggiato", "Scarso autoconsumo", "Impianto elettrico non adeguato", "Altri interventi energetici piu urgenti"]}
      checks={["Bollette ultimi 12 mesi", "Consumi diurni e serali", "Orientamento e inclinazione tetto", "Ombreggiamenti", "Superficie disponibile", "Stato dell'impianto elettrico", "Presenza o previsione di pompa di calore", "Auto elettrica o carichi programmabili", "Accumulo", "Vincoli locali"]}
      mistakes={["Dimensionare solo sulla superficie disponibile", "Ignorare le fasce orarie di consumo", "Aggiungere accumulo senza verificarne l'uso reale", "Trascurare ombre, vincoli o stato della copertura", "Confrontare preventivi con potenze e componenti non equivalenti"]}
      process={["Analisi consumi e profilo energetico", "Verifica copertura, orientamento e ombre", "Dimensionamento impianto e accumulo", "Installazione e collaudo", "Monitoraggio e assistenza"]}
      faqs={faqs.solar}
      cta="Fai controllare il dimensionamento prima di comprare un impianto"
    />
  );
}
