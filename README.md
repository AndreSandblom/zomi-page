# ZoMi Media – Minimalistisk Presentationshemsida

En modern, snabb och 100% statisk presentationswebbplats byggd med **Astro**, **TypeScript** och **vanlig CSS (Vanilla CSS)**. Webbplatsen är skräddarsydd för fastighetsmäklare och sätter AI-transformationen (stillbild till rörlig videorundtur & säsongsbyten som snö till sommarsol) i direkt visuellt fokus.

---

## 🚀 Teknisk Stack

- **Framework:** [Astro v5](https://astro.build/) (`output: 'static'`)
- **Språk:** TypeScript
- **Styling:** Ren CSS (CSS Custom Properties, Scoped CSS, noll externa ramverk)
- **Byggmål:** Ren statisk export till `dist/` för hosting på **one.com**

---

## 📁 Sidstruktur

1. **Hem (`/`)**
   - **Hero:** Direkt demonstration av AI-videorundtur från en stillbild (med 16:9 och 9:16 formatväxlare).
   - **Säsongsbyte Showcase:** Interaktiv dragbar slider (Snö till Sol, Dag till Golden Hour, Tomt rum till Homestaging).
   - **Kort tjänsteöversikt & CTA:** Snabb väg till tjänster och kontakt.
2. **Tjänster & Kontakt (`/tjanster`)**
   - Utförlig presentation av AI-Videorundturer, Säsongsbyten och Virtuell Staging.
   - 3-stegsguide ("Hur det fungerar").
   - Specifikationer för Hemnet och 9:16 Reels.
   - **Integrerat kontaktformulär** för förfrågningar och gratis testprov.
3. **Portfolio (`/portfolio`)**
   - Minimalistiskt showcase-galleri med kategorifiltrering och före/efter-jämförelser.

---

## 🛠️ Lokal Utveckling & Byggkommandon

```bash
# 1. Installera beroenden
npm install

# 2. Starta lokal utvecklingsserver (öppna http://localhost:4321)
npm run dev

# 3. Kontrollera TypeScript och typer
npm run check

# 4. Bygg för produktion (skapar dist/-mappen)
npm run build

# 5. Förhandsgranska produktionsbygget lokalt
npm run preview
```

---

## 🌐 Guide: Publicering / Hosting på one.com

Eftersom webbplatsen är helt statisk (`output: 'static'`) behövs ingen Node.js-server på webbhotellet. Webbplatsen kan laddas upp direkt till one.com på följande enkla sätt:

### Alternativ 1: Via one.com File Manager (Webbläsaren)
1. Kör `npm run build` i projektmappen.
2. Öppna mappen `dist/` som skapades.
3. Logga in på kontrollpanelen på [one.com](https://www.one.com).
4. Klicka på **File Manager** (Filhanteraren).
5. Gå till rotkatalogen för din domän (ofta `/www` eller direkt i roten).
6. Ladda upp **alla filer och mappar som ligger inuti `dist/`** (inklusive `index.html`, undermapparna `tjanster/`, `portfolio/`, `_astro/`, `assets/`, etc.).

### Alternativ 2: Via SFTP / FTP (t.ex. FileZilla eller Cyberduck)
1. Kör `npm run build`.
2. Anslut till ditt one.com-webbhotell via SFTP:
   - **Värd / Host:** `ssh.dindomän.se` (eller `ftp.dindomän.se`)
   - **Användarnamn:** Ditt FTP-användarnamn från one.com
   - **Lösenord:** Ditt FTP-lösenord
   - **Port:** `22` för SFTP (eller `21` för FTP)
3. Navigera till din webbplatsrotmapp på servern (vanligtvis `httpdocs`, `public_html` eller `www`).
4. Markera alla filer inuti `dist/`-mappen och ladda upp dem.

---

## ✏️ Så uppdaterar du texter och innehåll

All data är typad och samlad i `src/data/` för att göra det så enkelt som möjligt att ändra texter och projekt utan att röra layoutkoden:

- **Företagsinfo & Navigation:** [`src/data/siteConfig.ts`](file:///c:/Users/Tina%20T/AndreKodning/ZoMi_Media/src/data/siteConfig.ts)
- **Tjänster & Process:** [`src/data/services.ts`](file:///c:/Users/Tina%20T/AndreKodning/ZoMi_Media/src/data/services.ts)
- **Portfolio & Case:** [`src/data/portfolioItems.ts`](file:///c:/Users/Tina%20T/AndreKodning/ZoMi_Media/src/data/portfolioItems.ts)
- **Bilder & Videor:** Läggs i [`public/assets/`](file:///c:/Users/Tina%20T/AndreKodning/ZoMi_Media/public/assets/)
