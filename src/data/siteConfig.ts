export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  location: string;
  navItems: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: "ZoMi Media",
  tagline: "AI-videorundturer & Säsongsförvandling för Fastighetsmäklare",
  description: "Vi förvandlar stillbilder till levande, cinematiska videorundturer och ändrar årstider från snö till sommarsol för mäklare och bostadsannonser.",
  url: "https://zomimedia.se",
  email: "kontakt@zomimedia.se",
  phone: "+46 70 123 45 67",
  location: "Stockholm, Sverige",
  navItems: [
    { label: "Hem", href: "/" },
    { label: "Tjänster & Kontakt", href: "/tjanster" },
    { label: "Portfolio", href: "/portfolio" },
  ],
};
