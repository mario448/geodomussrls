import { LocalLandingPage } from "@/components/LocalLandingPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Riqualificazione energetica Udine",
  description: "Riqualificazione energetica a Udine: fotovoltaico, isolamento, biomassa, consumi e interventi in ordine tecnico corretto.",
  path: "/riqualificazione-energetica-udine",
  keywords: ["riqualificazione energetica Udine", "efficientamento energetico Udine", "ridurre bollette Udine", "ristrutturazione energetica Udine"]
});

export default function EnergyRetrofitUdinePage() {
  return (
    <LocalLandingPage
      path="/riqualificazione-energetica-udine"
      eyebrow="Riqualificazione energetica / Udine"
      serviceName="Riqualificazione energetica Udine"
      title="Riqualificazione energetica a Udine: prima l'ordine corretto, poi gli interventi."
      intro="Bollette alte non significano automaticamente fotovoltaico, biomassa o cappotto. GeoDomus analizza edificio, consumi, tetto, generatore e budget per decidere cosa fare prima, cosa rimandare e cosa evitare."
      description="Riqualificazione energetica a Udine con diagnosi, fotovoltaico, biomassa, isolamento e progetto integrato."
      image="/images/home-fotovoltaico-tetto-geodomus.jpg"
      imageAlt="Riqualificazione energetica a Udine con tetto fotovoltaico e verifica consumi"
      problems={["Interventi scelti perché visibili, non perché prioritari", "Fotovoltaico installato prima di capire consumi e involucro", "Generatore sostituito senza calcolare fabbisogno", "Preventivi non confrontabili per inclusioni diverse"]}
      checks={["Bollette e profilo consumi", "Tetto, ombre e copertura", "Serramenti, involucro e dispersioni", "Generatore, locale tecnico e canna fumaria", "Possibili fasi operative"]}
      outputs={["sequenza degli interventi", "criticità da verificare", "stima per fasce", "documenti utili per sopralluogo o progetto"]}
      links={[{ label: "Fotovoltaico Udine e FVG", href: "/fotovoltaico-udine-fvg" }, { label: "Riscaldamento biomassa Udine", href: "/riscaldamento-biomassa-udine" }, { label: "Soluzioni integrate", href: "/soluzioni-integrate" }]}
      faqs={[
        { question: "Da cosa partire per riqualificare casa a Udine?", answer: "Da consumi, involucro, tetto, generatore e obiettivi. Senza dati si rischia di partire dall'intervento sbagliato." },
        { question: "Conviene prima fotovoltaico o isolamento?", answer: "Dipende dal caso. La verifica serve a capire quale intervento riduce più rischio e sprechi nel tuo edificio." },
        { question: "GeoDomus segue anche i lavori?", answer: "Sì, coordiniamo progettazione, pratiche, cantiere, impianti e collaudo." }
      ]}
      cta="Verifica fattibilità riqualificazione a Udine"
    />
  );
}
