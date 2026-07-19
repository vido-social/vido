# VIDO Social — Työmailta näkyväksi

Tämä on **VIDO Social** -palvelun virallinen verkkosivusto (Single Page Application). Sivusto on optimoitu rakennus-, remontti-, LVI-, sähkö- ja talotekniikka-alan yritysten B2B-markkinointiin. Sen tarkoituksena on muuttaa urakoitsijoiden WhatsAppilla lähettämät työmaakuvat ammattimaiseksi sosiaalisen median näkyvyydeksi ja ohjata prospektit suoraan yhteydenottoon.

## 🚀 Teknologiapino

* **Ydin:** React 18 & TypeScript


* **Kääntäjä ja kehitysympäristö:** Vite 5


* **Paketinhallinta:** pnpm


* **Kuvakkeet:** lucide-react


* **Fontit:** Fontsource (Inter & Urbanist)


* **Hosting:** Vercel



## 🛠️ Kehitys ja käynnistys

Varmista, että tietokoneellesi on asennettu `pnpm`.

1. **Asenna riippuvuudet:**
```bash
pnpm install

```


2. **Käynnistä paikallinen kehityspalvelin:**
```bash
pnpm dev

```


Palvelin käynnistyy oletuksena osoitteeseen `[http://127.0.0.1:5173](http://127.0.0.1:5173)`.


3. **Rakenna tuotantoversio (Build):**
```bash
pnpm build

```


Skripti tarkistaa TypeScript-tyypitykset (`tsc -b`) ja luo optimoidun tuotantopaketin `dist/`-kansioon.



## 📝 Operatiiviset ylläpito-ohjeet

Sivuston koodia ja sisältöä muokatessa on noudatettava seuraavia ehdottomia sääntöjä:

### 1. Merkistö ja enkoodaus (UTF-8)

* Kaikki tiedostot (`index.html`, `src/App.tsx`, `src/App.css`) on tallennettava **UTF-8**-muodossa.


* Väärä enkoodaus rikkoo suomen kielen ääkköset (`ä` ja `ö`), mikä tuhoaa sivuston hakukonenäkyvyyden (SEO) ja uskottavuuden.



### 2. Yhteystiedot ja linkit

* Kaikki sivuston toimintakehotteet (CTA) ja `mailto`-sähköpostilinkit on ohjattava viralliseen osoitteeseen: **`info@vidosocial.com`**.


* Villon sisäinen työsähköposti on `ville@vidosocial.com`. Vanhoja `.fi`- tai `.social`-päätteitä ei saa käyttää koodissa tai laskutuksessa.



### 3. Tuotteistus ja hinnoittelu

Sivuston hinnoittelutaulukon on oltava aina synkronoituna voimassa olevan myyntistrategian kanssa:

* **VIDO Startti (500 €):** Kertaprojekti aloittaville yrityksille (sisältää yhden sivun verkkosivuston ja 6 somejulkaisua).


* **VIDO Social (500 € / kk):** Jatkuva kuukausipalvelu (sisältää 12 julkaisua kuukaudessa, tekstit, kuvien viimeistelyn ja videoeditoinnin).


* **VIDO Growth (Sovitaan):** Kokonaisvaltainen markkinointi- ja myyntijärjestelmä.



## 🌐 Julkaisu ja hosting

* Sivusto on liitetty automaattiseen Vercel-hosting-alustaan.


* Asetukset, kuten uudelleenohjaukset ja virhesivut, määritetään tiedostossa `vercel.json`.


* Aina kun muutokset pusgetaan Git-repositorion päähaaraan (`main`), Vercel ajaa build-skriptin ja päivittää muutokset livenä osoitteeseen `[https://vidosocial.com](https://vidosocial.com)`.
