import { ServicePage } from "@/components/ServicePage";
import { faqs } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case prefabbricate in legno Udine e Gorizia",
  description:
    "Case prefabbricate in legno a Udine e Gorizia: bioedilizia, comfort, sismo-resistenza, fotovoltaico, biomasse e autorizzazioni FVG.",
  path: "/case-prefabbricate-legno-udine",
  keywords: ["Case prefabbricate in legno Udine", "Bioedilizia Gorizia", "Case in legno chiavi in mano Friuli", "Progettazione case passive", "Costruzioni edili Gorizia"]
});

export default function WoodHomesPage() {
  return (
    <ServicePage
      path="/case-prefabbricate-legno-udine"
      title="Case prefabbricate in legno a Udine e Gorizia: comfort e autonomia energetica"
      eyebrow="Bioedilizia / Udine / Gorizia / FVG"
      intro="Edilizia in legno oggi significa struttura sismo-resistente, involucro ad alte prestazioni, tempi di cantiere controllati e impianti progettati prima della posa."
      description="Case prefabbricate in legno a Udine e Gorizia con progettazione, posa, fotovoltaico, biomasse e autorizzazioni FVG."
      image="/images/case-legno-geodomus.jpg"
      imageAlt="Dettaglio architettonico di una casa prefabbricata in legno in Friuli Venezia Giulia"
      points={[
        "Resistenza sismica: struttura leggera e progettata per le condizioni del Friuli-Venezia Giulia",
        "Isolamento invernale ed estivo: trasmittanza e sfasamento vengono definiti in stratigrafia, non dopo",
        "Tempi di cantiere più controllabili rispetto a molte costruzioni tradizionali, grazie a componenti prefabbricati",
        "Fotovoltaico e accumulo progettati su orientamento, tetto, consumi e passaggi impiantistici reali",
        "Riscaldamento a biomasse valutato su fabbisogno, locale tecnico, deposito, canna fumaria e gestione combustibile",
        "Studio tecnico interno per permessi comunali, vincoli paesaggistici, pratiche e incentivi FVG da verificare"
      ]}
      problemTitle="Una casa in legno non deve essere scelta a catalogo."
      problemText="Una casa prefabbricata in legno funziona quando struttura, involucro e impianti nascono insieme. Se fotovoltaico, biomasse, accumulo e locali tecnici vengono decisi dopo la progettazione architettonica, il rischio e adattare soluzioni costose a un edificio che non le aveva previste."
      whenMakesSense={["Hai un terreno o stai valutando un terreno tra Udine, Gorizia e FVG", "Vuoi una casa in legno chiavi in mano con impianti progettati insieme", "Vuoi valutare comfort estivo, sismo-resistenza e autonomia energetica prima del capitolato", "Vuoi capire permessi, vincoli, incentivi e costi prima di firmare con fornitori separati"]}
      whenNotSense={["Il terreno non è ancora verificato dal punto di vista urbanistico o geologico", "Il progetto architettonico e già chiuso senza predisposizioni impiantistiche", "Si confrontano offerte solo sul prezzo al metro quadro senza capitolato tecnico", "Il budget non considera fondazioni, impianti, finiture, pratiche e sistemazioni esterne"]}
      checks={["Studio climatico e geologico", "Fattibilità urbanistica", "Orientamento e ombre", "Classificazione sismica", "Trasmittanza e sfasamento", "kWp fotovoltaici installabili", "Locale tecnico biomasse", "Permessi comunali", "Incentivi e contributi FVG"]}
      mistakes={["Comprare una struttura in legno senza progetto energetico", "Aggiungere il fotovoltaico dopo la definizione del tetto", "Scegliere biomassa senza deposito e canna fumaria adeguati", "Ignorare comfort estivo e acustica", "Non verificare vincoli paesaggistici e autorizzazioni locali"]}
      process={["Analisi climatica, geologica e studio di fattibilità urbanistica", "Progettazione strutturale e calcolo termotecnico integrato", "Posa della struttura in legno con isolamento termico avanzato", "Installazione fotovoltaico, biomasse e sistemi di accumulo", "Certificazione energetica finale e assistenza post-consegna"]}
      faqs={faqs.wood}
      cta="Richiedi un incontro tecnico per lo studio del progetto"
    />
  );
}
