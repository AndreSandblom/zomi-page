export interface PortfolioItem {
  id: string;
  title: string;
  category: "video" | "season" | "staging";
  categoryLabel: string;
  propertyType: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  videoSrc?: string;
  type: "video-tour" | "season-slider" | "staging-comparison";
  aspectRatio?: "16/9" | "9/16" | "4/3";
  tags: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "penthouse-ostermalm",
    title: "Sekelskiftesvåning – Östermalm",
    category: "video",
    categoryLabel: "Videorundtur",
    propertyType: "Lägenhet, 4 rok / 125 kvm",
    description: "Från 6 stillbilder skapades en komplett 45-sekunders rörlig rundtur med eleganta dolly- och pan-rörelser genom vardagsrum, matsal och kök.",
    beforeImage: "/assets/images/penthouse-still.svg",
    afterImage: "/assets/images/penthouse-tour.svg",
    videoSrc: "/assets/images/penthouse-tour.svg",
    type: "video-tour",
    aspectRatio: "16/9",
    tags: ["Sekelskifte", "16:9 Webb", "Vardagsrum", "Kameraåkning"]
  },
  {
    id: "villa-djursholm",
    title: "Sekelskifteshus – Skärgård & Sommar",
    category: "season",
    categoryLabel: "Säsongsbyte",
    propertyType: "Fritidshus / Villa",
    description: "Fotograferad under snöig vinter. Förvandlades till en strålande sommardag med grönska, blommor och blå himmel.",
    beforeImage: "/assets/images/season-change-after1.png",
    afterImage: "/assets/images/season-change-before1.jpg",
    type: "season-slider",
    aspectRatio: "16/9",
    tags: ["Snö till Sol", "Exteriör", "Trädgård & Fasad", "Sommarsol"]
  },
  {
    id: "modern-kitchen",
    title: "Designkök – Södermalm",
    category: "video",
    categoryLabel: "Videorundtur (Reels)",
    propertyType: "Lägenhet, 2 rok / 62 kvm",
    description: "Vertikal 9:16-video skapad för Instagram Reels och TikTok direkt från en enda stillbild av köksön och ljusinsläppet.",
    beforeImage: "/assets/images/kitchen-still.svg",
    afterImage: "/assets/images/kitchen-video.svg",
    videoSrc: "/assets/images/kitchen-video.svg",
    type: "video-tour",
    aspectRatio: "9/16",
    tags: ["9:16 Vertikal", "Reels/TikTok", "Kök & Interiör"]
  },
  {
    id: "skargardshus-vaxholm",
    title: "Strandvilla & Pool – Golden Hour",
    category: "season",
    categoryLabel: "Skymning / Golden Hour",
    propertyType: "Exklusiv Villa vid Vattnet",
    description: "Dagsljusbild förvandlades till en stämningsfull skymningsvy med gyllene solnedgångsglöd och upplyst pool.",
    beforeImage: "/assets/images/golden-hour-before1.png",
    afterImage: "/assets/images/golden-hour-after1.png",
    type: "season-slider",
    aspectRatio: "16/9",
    tags: ["Skymningsljus", "Golden Hour", "Havsutsikt", "Pool"]
  },
  {
    id: "nyproduktion-vasastan",
    title: "Våning med Träbjälkar – Homestyling",
    category: "staging",
    categoryLabel: "Virtuell Homestaging",
    propertyType: "Etagevåning, 4 rok / 115 kvm",
    description: "Ett tomt rum med öppen trappa och träbjälkar inreddes digitalt med modern skandinavisk soffgrupp, matbord och belysning.",
    beforeImage: "/assets/images/home-styling-before1.png",
    afterImage: "/assets/images/home-styling-after1.png",
    type: "staging-comparison",
    aspectRatio: "16/9",
    tags: ["Homestaging", "Träbjälkar", "Skandinavisk design"]
  },
  {
    id: "terrass-kungsholmen",
    title: "Takvåning med Terrass – Kungsholmen",
    category: "video",
    categoryLabel: "Videorundtur",
    propertyType: "Takvåning, 3 rok / 92 kvm",
    description: "Svepande rörelse från vardagsrummet ut mot den soliga takterrassen med panoramavy över staden.",
    beforeImage: "/assets/images/terrace-still.svg",
    afterImage: "/assets/images/terrace-video.svg",
    videoSrc: "/assets/images/terrace-video.svg",
    type: "video-tour",
    aspectRatio: "16/9",
    tags: ["Takterrass", "16:9", "Panoramavy"]
  }
];
