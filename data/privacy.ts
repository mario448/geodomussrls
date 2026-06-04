import { site } from "@/data/site";

export const privacyContacts = {
  controller: site.name,
  address: site.address,
  email: site.privacyEmail
};

export const privacyTreatments = [
  {
    title: "Richieste di contatto e valutazione tecnica",
    data: "Nome, cognome, email, telefono, comune, tipo di progetto, stato del progetto, budget indicativo, tempi, messaggio e informazioni tecniche inviate volontariamente.",
    purpose: "Rispondere alla richiesta, valutare il contesto tecnico, organizzare eventuali sopralluoghi e formulare un primo percorso operativo.",
    legalBasis: "Esecuzione di misure precontrattuali richieste dall'interessato e legittimo interesse a gestire correttamente la relazione commerciale.",
    retention: "Fino a 24 mesi dall'ultimo contatto, salvo obblighi di legge, contenziosi o successiva relazione contrattuale."
  },
  {
    title: "Gestione clienti, preventivi, contratti e cantiere",
    data: "Dati anagrafici e di contatto, dati fiscali e amministrativi, informazioni su immobili, consumi, documenti tecnici, pratiche, preventivi, ordini, pagamenti e comunicazioni operative.",
    purpose: "Gestire preventivi, incarichi, contratti, pratiche tecniche, forniture, realizzazione degli interventi, assistenza e adempimenti amministrativi.",
    legalBasis: "Esecuzione del contratto o di misure precontrattuali, obblighi di legge e legittimo interesse alla tutela dei diritti.",
    retention: "Per la durata del rapporto e, per i documenti amministrativi e contabili, fino a 10 anni o per il diverso termine previsto dalla normativa applicabile."
  },
  {
    title: "Navigazione del sito",
    data: "Dati tecnici necessari al funzionamento del sito, come indirizzi IP trattati dai sistemi di hosting, log tecnici, identificativi di sessione e preferenze cookie.",
    purpose: "Rendere disponibile il sito, mantenerlo sicuro, prevenire abusi e ricordare le preferenze privacy espresse dall'utente.",
    legalBasis: "Legittimo interesse del titolare alla sicurezza e al funzionamento del sito; per i cookie tecnici non e richiesto il consenso.",
    retention: "Per il tempo strettamente necessario alla gestione tecnica e di sicurezza del sito; le preferenze cookie possono essere conservate fino a 6 mesi."
  },
  {
    title: "Newsletter, marketing o comunicazioni promozionali",
    data: "Email, nome, preferenze e dati necessari alla gestione dell'iscrizione, solo se l'utente presta un consenso specifico.",
    purpose: "Inviare aggiornamenti, comunicazioni commerciali o contenuti promozionali relativi ai servizi GeoDomus.",
    legalBasis: "Consenso libero, specifico, informato e revocabile in qualsiasi momento.",
    retention: "Fino alla revoca del consenso o, in assenza di interazioni, per un massimo di 24 mesi."
  }
];

export const cookieCategories = [
  {
    name: "Cookie tecnici e preferenze privacy",
    status: "Sempre attivi",
    description:
      "Servono a far funzionare il sito, garantire la sicurezza, memorizzare la scelta espressa nel banner cookie e fornire servizi richiesti dall'utente.",
    consent: "Non richiedono consenso preventivo.",
    examples: "Preferenza cookie salvata nel browser dell'utente."
  },
  {
    name: "Cookie statistici",
    status: "Non attivi al momento",
    description:
      "Potrebbero essere usati in futuro per misurare visite e pagine consultate. Se non configurati in forma anonima e aggregata, saranno attivati solo dopo consenso.",
    consent: "Richiedono consenso se permettono identificazione, tracciamento o condivisione con terze parti non anonimizzata.",
    examples: "Strumenti analytics, se installati in futuro."
  },
  {
    name: "Cookie marketing e profilazione",
    status: "Non attivi al momento",
    description:
      "Potrebbero essere usati per pubblicita personalizzata, remarketing, pixel o integrazioni social con finalita promozionali.",
    consent: "Richiedono sempre consenso preventivo e revocabile.",
    examples: "Pixel pubblicitari o strumenti di remarketing, se installati in futuro."
  }
];
