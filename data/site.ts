export const site = {
  name: "GeoDomus srls",
  url: "https://www.geodomussrls.it",
  phone: "+39 0432 184 620",
  email: "info@geodomussrls.it",
  address: "Via delle Energie 18, 33100 Udine UD",
  area: "Udine, provincia di Udine e Friuli Venezia Giulia",
  description:
    "GeoDomus srls realizza case prefabbricate in legno, impianti fotovoltaici e sistemi di riscaldamento a biomassa in Friuli Venezia Giulia.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/case-prefabbricate-legno-udine", label: "Case in legno" },
    { href: "/fotovoltaico-udine-fvg", label: "Fotovoltaico" },
    { href: "/riscaldamento-biomassa-udine", label: "Biomassa" },
    { href: "/soluzioni-integrate", label: "Soluzioni integrate" },
    { href: "/blog", label: "Blog" },
    { href: "/contatti", label: "Contatti" }
  ]
};

export const services = [
  {
    title: "Case prefabbricate in legno",
    href: "/case-prefabbricate-legno-udine",
    image: "/images/case-legno-geodomus.jpg",
    alt: "Dettaglio premium di una casa prefabbricata in legno GeoDomus",
    description:
      "Abitazioni efficienti, personalizzabili e progettate per comfort termico, acustico e tempi di realizzazione controllati.",
    keywords: ["case prefabbricate in legno Udine", "case in legno Friuli Venezia Giulia"]
  },
  {
    title: "Impianti fotovoltaici",
    href: "/fotovoltaico-udine-fvg",
    image: "/images/fotovoltaico-geodomus.jpg",
    alt: "Pannelli fotovoltaici integrati sul tetto di una casa sostenibile",
    description:
      "Sistemi solari per abitazioni e aziende con focus su autoconsumo, accumulo e integrazione energetica.",
    keywords: ["fotovoltaico Udine", "impianti fotovoltaici FVG"]
  },
  {
    title: "Riscaldamento a biomassa",
    href: "/riscaldamento-biomassa-udine",
    image: "/images/biomassa-geodomus.jpg",
    alt: "Locale tecnico con impianto moderno di riscaldamento a biomassa",
    description:
      "Caldaie e impianti a pellet, legna o cippato per ridurre dipendenza energetica e costi di esercizio.",
    keywords: ["riscaldamento a biomassa Udine", "caldaie a pellet Friuli Venezia Giulia"]
  }
];

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via delle Energie 18",
    addressLocality: "Udine",
    addressRegion: "Friuli Venezia Giulia",
    postalCode: "33100",
    addressCountry: "IT"
  },
  areaServed: [
    "Udine",
    "Provincia di Udine",
    "Pordenone",
    "Gorizia",
    "Trieste",
    "Friuli Venezia Giulia"
  ],
  description: site.description,
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description
    }
  }))
};

export const faqs = {
  wood: [
    {
      question: "Quanto tempo serve per realizzare una casa prefabbricata in legno?",
      answer:
        "I tempi dipendono da progettazione, autorizzazioni e livello di personalizzazione. La costruzione in legno consente fasi di cantiere più controllate e spesso più rapide rispetto a sistemi tradizionali."
    },
    {
      question: "Una casa in legno è adatta al clima del Friuli Venezia Giulia?",
      answer:
        "Si. Con stratigrafie corrette, isolamento continuo e progettazione attenta ai ponti termici, una casa in legno offre comfort invernale, protezione estiva e ottime prestazioni energetiche."
    },
    {
      question: "GeoDomus segue anche progettazione e personalizzazione?",
      answer:
        "GeoDomus affianca il cliente dalla prima analisi fino alla realizzazione, coordinando esigenze abitative, soluzioni tecniche, materiali e integrazione con impianti energetici."
    }
  ],
  solar: [
    {
      question: "Quando conviene installare un impianto fotovoltaico a Udine?",
      answer:
        "Conviene quando consumi elettrici, esposizione della copertura e profilo di utilizzo permettono un buon autoconsumo. La valutazione tecnica serve a dimensionare correttamente pannelli e accumulo."
    },
    {
      question: "Il fotovoltaico si può integrare con una casa in legno?",
      answer:
        "Si. Nelle abitazioni efficienti il fotovoltaico lavora bene con impianti a basso consumo, sistemi di accumulo e soluzioni di riscaldamento progettate in modo integrato."
    },
    {
      question: "GeoDomus realizza impianti anche per aziende?",
      answer:
        "Si, GeoDomus valuta impianti fotovoltaici per abitazioni, piccole imprese, aziende agricole e strutture ricettive in Friuli Venezia Giulia."
    }
  ],
  biomass: [
    {
      question: "Che differenza c'è tra pellet, legna e cippato?",
      answer:
        "Sono combustibili legnosi con gestione, stoccaggio e resa differenti. Pellet e cippato sono adatti a sistemi automatizzati, mentre la legna richiede maggiore gestione manuale."
    },
    {
      question: "La biomassa è adatta a una casa efficiente?",
      answer:
        "Si, se l'impianto viene dimensionato sui reali fabbisogni dell'edificio. In case ben isolate, la biomassa può coprire il riscaldamento con consumi contenuti."
    },
    {
      question: "Serve uno spazio tecnico dedicato?",
      answer:
        "In molti casi si. La progettazione deve considerare locale tecnico, deposito combustibile, canna fumaria, accessibilità e manutenzione."
    }
  ]
};
