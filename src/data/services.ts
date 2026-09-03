export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string[];
  features: string[];
  icon: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "video-tours",
    title: "AI-Videorundturer från Stillbilder",
    badge: "Huvudtjänst",
    shortDesc: "Förvandla era befintliga mäklarbilder till mjuka, cinematiska videorundturer som fångar spekulanternas intresse direkt.",
    fullDesc: [
      "Genom avancerade AI-modeller genererar vi jämna, naturliga kamerarörelser genom bostadens alla rum baserat uteslutande på stillbilder.",
      "Ni slipper boka dyra och tidskrävande videoteam på plats. Ladda bara upp era vanliga högupplösta mäklarfoton, så levererar vi färdiga rundturer i både 16:9 (Hemnet & mäklarwebb) och 9:16 (Instagram Reels & TikTok)."
    ],
    features: [
      "Jämna kamerarörelser (dolly, pan, tilt & zoom)",
      "Leverans i både 16:9 och 9:16 vertikalt format",
      "Färgkorrigering och subtil bakgrundsmusik/ljudeffekter",
      "3-5x högre engagemang på sociala medier och bostadsportaler"
    ],
    icon: "video"
  },
  {
    id: "season-transform",
    title: "Säsongs- & Miljöbyte (Snö till Sol)",
    badge: "Visuell Magi",
    shortDesc: "Sälj sommaridyllen mitt i vintern. Vi förvandlar snöiga trädgårdar och gråmulna fasader till strålande sommardagar med frodig grönska.",
    fullDesc: [
      "Bostadsförsäljning ska inte behöva vänta på rätt väder eller årstid. Med vår AI-miljöförvandling byter vi snötäckta tomter och grå himmel mot solsken, grönt gräs, lummiga träd och inbjudande poolområden.",
      "Vi kan även skapa exklusiva skymningsbilder (Twilight / Golden Hour) med varm interiörbelysning och magiskt kvällsljus som sticker ut i flödet."
    ],
    features: [
      "Snö och slask förvandlas till sommargrönska och sol",
      "Byte av grå himmel till solig blå himmel med naturliga skuggor",
      "Skymning & Golden Hour-förvandling med tända fönster",
      "100% fotorealistiskt och naturligt resultat"
    ],
    icon: "sun"
  },
  {
    id: "virtual-staging",
    title: "Virtuell AI-Homestaging & Förbättring",
    badge: "Inredning",
    shortDesc: "Ge tomma rum liv och modern skandinavisk design, eller rensa bort rörig inredning digitalt.",
    fullDesc: [
      "Hjälp köparna att se bostadens fulla potential. Vi möblerar tomma lägenheter med moderna skandinaviska möbler i rätt proportioner och ljussättning.",
      "Perfekt för nyproduktion, dödsbon eller renoveringsobjekt där fysisk homestaging är för dyrt eller opraktiskt."
    ],
    features: [
      "Valbar inredningsstil (Skandinavisk, Modern, Klassisk m.fl.)",
      "Naturlig skuggning och korrekta rumsproportioner",
      "Digital avpersonifiering & borttagning av oönskade föremål",
      "Kostnadseffektivt alternativ till fysisk staging"
    ],
    icon: "home"
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Skicka in era mäklarbilder",
    description: "Ladda upp era befintliga stillbilder via vårt enkla formulär eller skicka en länk till objektet."
  },
  {
    number: "02",
    title: "AI-generering & Efterbearbetning",
    description: "Våra AI-modeller skapar rörliga kamerarörelser, säsongsanpassar och kvalitetssäkras för fotorealism."
  },
  {
    number: "03",
    title: "Leverans inom 24–48 timmar",
    description: "Ni får färdiga videor och bilder i rätt upplösning, redo för Hemnet, mäklarsystem och sociala medier."
  }
];
