import { ServicePage } from "@/components/ServicePage";
import { pageMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "Il fotovoltaico conviene per un'azienda agricola in FVG?",
    answer:
      "Può convenire quando consumi elettrici, superfici disponibili e profilo di autoconsumo sono coerenti. Prima di proporre un impianto verifichiamo bollette, potenze, tetti, terreni, ombre, vincoli e uso stagionale."
  },
  {
    question: "La biomassa agricola può ridurre i costi di riscaldamento?",
    answer:
      "Sì, ma solo se disponibilità di combustibile, deposito, accessi, canna fumaria, manutenzione e fabbisogno termico sono compatibili. La biomassa va progettata come sistema, non scelta solo per il prezzo del combustibile."
  },
  {
    question: "Potete seguire anche magazzini, stalle e strutture ricettive?",
    answer:
      "GeoDomus valuta interventi su abitazioni aziendali, agriturismi, magazzini, locali tecnici, coperture produttive e fabbricati rurali, coordinando progettazione, pratiche, cantiere e impianti."
  }
];

export const metadata = pageMetadata({
  title: "Energia per aziende agricole e agriturismi FVG",
  description:
    "Fotovoltaico, biomassa e riqualificazione per aziende agricole e agriturismi in FVG. Analisi consumi, progetto e realizzazione.",
  path: "/energia-aziende-agricole-agriturismi-fvg",
  keywords: [
    "fotovoltaico aziende agricole FVG",
    "biomassa aziende agricole Udine",
    "energia agriturismi Friuli Venezia Giulia",
    "riqualificazione energetica aziende agricole Udine",
    "impianti fotovoltaici agriturismi Gorizia"
  ]
});

export default function FarmEnergyPage() {
  return (
    <ServicePage
      path="/energia-aziende-agricole-agriturismi-fvg"
      title="Energia per aziende agricole e agriturismi"
      eyebrow="Aziende agricole / Agriturismi / FVG"
      intro="Consumi stagionali, superfici disponibili e continuità operativa vanno progettati insieme."
      description="Fotovoltaico, biomassa e riqualificazione energetica per aziende agricole, agriturismi e fabbricati rurali in Friuli Venezia Giulia."
      image="/images/home-area-fvg-geodomus.jpg"
      imageAlt="Azienda agricola e contesto rurale in Friuli Venezia Giulia per progetto energetico GeoDomus"
      points={[
        "Fotovoltaico su coperture produttive o superfici disponibili",
        "Valutazione di biomassa, pellet o cippato in base al fabbisogno",
        "Analisi consumi elettrici e termici per fasce e stagioni",
        "Interventi su agriturismi, magazzini, stalle e locali tecnici",
        "Pratiche, coordinamento lavori e collaudo finale",
        "Progetto per ridurre fermo attività e varianti in cantiere"
      ]}
      problemTitle="Un'azienda agricola non consuma energia come una casa."
      problemText="Stagionalità, celle frigo, pompe, cucine, camere, laboratori, essiccazione, riscaldamento e biomassa disponibile cambiano completamente il progetto. Per questo partiamo da dati reali e non da pacchetti standard."
      whenMakesSense={[
        "Hai bollette elettriche o termiche rilevanti",
        "Disponi di coperture, terreni o fabbricati da valutare",
        "Hai scarti o filiere locali potenzialmente utilizzabili come biomassa",
        "Vuoi coordinare lavori edili, impianti e pratiche senza fermare l'attività"
      ]}
      whenNotSense={[
        "Consumi non documentati o troppo variabili",
        "Coperture non idonee o con vincoli non chiariti",
        "Deposito combustibile insufficiente",
        "Impossibilità di gestire manutenzione e logistica della biomassa",
        "Priorità edilizie più urgenti da risolvere prima degli impianti"
      ]}
      checks={[
        "Bollette elettriche e termiche degli ultimi 12 mesi",
        "Picchi stagionali e carichi produttivi",
        "Coperture, orientamento, ombre e superfici utili",
        "Locale tecnico, deposito e accesso mezzi",
        "Canna fumaria e sicurezza antincendio",
        "Continuità operativa durante il cantiere",
        "Vincoli rurali, paesaggistici o comunali",
        "Integrazione con strutture esistenti e future espansioni"
      ]}
      mistakes={[
        "Progettare il fotovoltaico senza leggere i carichi produttivi",
        "Scegliere biomassa senza deposito e logistica combustibile",
        "Trascurare i periodi in cui l'attività non può fermarsi",
        "Valutare tetto e impianto senza pratiche e vincoli locali",
        "Confrontare preventivi senza stessa potenza, componenti e opere incluse"
      ]}
      process={[
        "Raccolta dati energetici e produttivi",
        "Sopralluogo su coperture, locali tecnici e accessi",
        "Schema tecnico con priorità, vincoli e fasi",
        "Progettazione, pratiche e coordinamento lavori",
        "Collaudo, documentazione e assistenza post-intervento"
      ]}
      faqs={faqs}
      cta="Richiedi una valutazione energetica aziendale"
    />
  );
}
