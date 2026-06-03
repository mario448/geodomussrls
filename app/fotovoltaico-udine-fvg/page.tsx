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
      intro="Un impianto fotovoltaico ben progettato non nasce dal numero di pannelli, ma dai consumi reali, dall'esposizione, dalla copertura e dagli obiettivi di indipendenza energetica."
      description="Impianti fotovoltaici a Udine e in Friuli Venezia Giulia."
      image="/images/fotovoltaico-geodomus.jpg"
      imageAlt="Impianto fotovoltaico integrato sul tetto di una casa sostenibile"
      points={["Riduzione delle bollette", "Autoconsumo intelligente", "Accumulo energetico", "Integrazione con pompe di calore o biomassa", "Soluzioni per abitazioni e aziende", "Monitoraggio delle prestazioni"]}
      process={["Analisi consumi e profilo energetico", "Verifica copertura, orientamento e ombre", "Dimensionamento impianto e accumulo", "Installazione e collaudo", "Monitoraggio e assistenza"]}
      faqs={faqs.solar}
      cta="Vuoi valutare un impianto fotovoltaico a Udine?"
    />
  );
}
