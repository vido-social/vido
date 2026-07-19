import { useMemo, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  CalendarClock,
  Check,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  EyeOff,
  FileText,
  Hammer,
  Images,
  MessageCircle,
  MousePointer2,
  PhoneCall,
  Receipt,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Upload,
  Video,
  Wrench,
  Zap,
} from 'lucide-react';
import './App.css';

const navItems = [
  { label: 'Ongelma', href: '#ongelma' },
  { label: 'Palvelu', href: '#palvelu' },
  { label: 'Prosessi', href: '#prosessi' },
  { label: 'Hinnoittelu', href: '#hinnoittelu' },
];

const problemCards = [
  {
    icon: Clock3,
    title: 'Ajanpuute',
    text: 'Työmaalla ehtii kuvata, mutta julkaisu jää aina illan viimeiseksi asiaksi.',
  },
  {
    icon: CalendarClock,
    title: 'Epäsäännöllisyys',
    text: 'Some herää hetkeksi ja hiljenee taas, vaikka laadukasta tekemistä olisi joka viikko.',
  },
  {
    icon: EyeOff,
    title: 'Näkymättömyys',
    text: 'Hyvä työ ei auta uusia asiakkaita löytämään teitä, jos sitä ei nähdä.',
  },
];

const processSteps = [
  {
    label: 'Liidi',
    icon: MousePointer2,
    description: 'Tunnistamme yrityksen tilanteen, kanavat ja tärkeimmät asiakasryhmät ennen ehdotusta.',
  },
  {
    label: 'Puhelu',
    icon: PhoneCall,
    description: '15 minuutin kartoituksessa selvitetään palvelualue, työnäytteet ja sisällön realistinen rytmi.',
  },
  {
    label: 'Tarjous',
    icon: FileText,
    description: 'Saat selkeän kuukausihinnan, sisällön määrän ja rajaukset ilman piilokuluja.',
  },
  {
    label: 'Onboard',
    icon: ClipboardCheck,
    description: 'Luomme WhatsApp-ohjeistuksen, kanavayhteydet ja hyväksyntämallin ensimmäistä kuukautta varten.',
  },
  {
    label: 'Kuvat',
    icon: Upload,
    description: 'Lähetät työmaakuvat ja lyhyet taustatiedot WhatsAppilla silloin kun niitä syntyy.',
  },
  {
    label: 'Tuotanto',
    icon: Sparkles,
    description: 'Viimeistelemme kuvat, kirjoitamme tekstit ja editoimme lyhyet videot kanavien formaatteihin.',
  },
  {
    label: 'OK',
    icon: Check,
    description: 'Hyväksyt julkaisut nopeasti. Korjaukset tehdään ennen ajastusta, jos jokin tekninen yksityiskohta vaatii tarkennusta.',
  },
  {
    label: 'Julkaisu',
    icon: Send,
    description: 'Julkaisut ajastetaan Facebookiin ja Instagramiin tasaisella rytmillä.',
  },
  {
    label: 'Raportti',
    icon: BarChart3,
    description: 'Saat tiiviin kuukausikoosteen näkyvyydestä, sisällöistä ja seuraavan kuukauden painopisteistä.',
  },
  {
    label: 'Lasku',
    icon: Receipt,
    description: 'Kiinteä kuukausilasku pitää ostamisen yksinkertaisena ja ennakoitavana.',
  },
];

const packageItems = [
  '12 julkaisua kuukaudessa',
  'Facebook- ja Instagram-tekstit',
  'Kuvien viimeistely',
  'Lyhytvideoiden editointi',
  'WhatsApp-välitteinen materiaaliohjaus',
  'Kuukausittainen raportti',
];

const exclusions = ['Maksettu mainonta', 'Kuvauspaikat', 'Kanavien ulkopuoliset kampanjasivut'];

const valueProps = [
  {
    icon: Wrench,
    title: 'Toimialafokus',
    text: 'Rakennus, remontti, LVI, sähkö ja talotekniikka ilman yleistoimistojen geneeristä kulmaa.',
  },
  {
    icon: MessageCircle,
    title: 'Vaivattomuus',
    text: 'Asiakkaalta alle 5 minuuttia kuukaudessa: kuvat WhatsAppiin, loput meiltä.',
  },
  {
    icon: ShieldCheck,
    title: 'Aitous',
    text: 'Omat työmaat, omat tekijät ja oikeat työnäytteet. Ei kuvapankkifiilistä.',
  },
];

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const ActiveIcon = processSteps[activeStep].icon;

  const monthlyImpact = useMemo(
    () => [
      { label: 'Julkaisua / kk', value: '12' },
      { label: 'Asiakkaan työ', value: '< 5 min' },
      { label: 'Kanavat', value: 'FB + IG' },
    ],
    [],
  );

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="VIDO Social etusivulle">
          <span className="brand-mark">V</span>
          <span>VIDO Social</span>
        </a>
        <nav className="nav-links" aria-label="Päänavigaatio">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="mailto:info@vidosocial.com?subject=Tarjouspyynt%C3%B6%20VIDO%20Social">
          Pyydä tarjous
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </header>

      <main id="top">
        <section className="hero-section section-band" aria-labelledby="hero-title">
          <div className="industrial-grid" aria-hidden="true" />
          <div className="section-inner hero-layout">
            <div className="hero-copy">
              <div className="eyebrow">
                <Zap size={16} aria-hidden="true" />
                WhatsAppista valmiiksi someksi
              </div>
              <h1 id="hero-title">VIDO Social - Työmailta näkyväksi.</h1>
              <p className="hero-lead">
                Te teette työn. Me teemme siitä näkyvää. Sinä lähetät kuvat WhatsAppilla.
                Me teemme niistä valmiit julkaisut.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="mailto:info@vidosocial.com?subject=15%20min%20kartoitus">
                  Varaa maksuton 15 minuutin kartoitus
                  <ArrowRight size={20} aria-hidden="true" />
                </a>
                <a className="secondary-button" href="#prosessi">
                  Aloitetaan
                  <ChevronRight size={18} aria-hidden="true" />
                </a>
              </div>
              <div className="metric-strip" aria-label="Palvelun avainluvut">
                {monthlyImpact.map((item) => (
                  <div key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <figure className="hero-visual">
              <img src="/vido-workflow.png" alt="VIDO Socialin WhatsAppista julkaisuiksi etenevä sisältöprosessi" />
              <figcaption>
                <span>Työmaakuva</span>
                <ArrowRight size={16} aria-hidden="true" />
                <span>Valmis julkaisu</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section-band problem-section" id="ongelma" aria-labelledby="problem-title">
          <div className="section-inner">
            <div className="section-kicker">01 / Ongelma</div>
            <div className="section-heading-row">
              <h2 id="problem-title">Kuulostaako tutulta?</h2>
              <p>
                Kiireen vuoksi työmaakuvia ei koskaan julkaista. Hyvä työ ei auta uusia asiakkaita
                löytämään teitä, jos sitä ei nähdä.
              </p>
            </div>
            <div className="problem-grid">
              {problemCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article className="problem-card" key={card.title}>
                    <div className="icon-box">
                      <Icon size={24} aria-hidden="true" />
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-band solution-section" id="palvelu" aria-labelledby="solution-title">
          <div className="section-inner solution-layout">
            <div className="phone-model" aria-label="WhatsApp-mallin esimerkki">
              <div className="phone-header">
                <span>VIDO / Työmaa</span>
                <span>online</span>
              </div>
              <div className="chat-stack">
                <div className="chat-bubble client">
                  <Images size={18} aria-hidden="true" />
                  6 kuvaa saneerauskohteesta
                </div>
                <div className="chat-bubble client">Asiakas halusi siistin teknisen tilan.</div>
                <div className="chat-bubble agency">Teen tästä ennen/jälkeen-julkaisun ja reelsin.</div>
                <div className="chat-bubble agency">
                  <Video size={18} aria-hidden="true" />
                  Valmis luonnos hyväksyttäväksi
                </div>
              </div>
            </div>

            <div className="solution-copy">
              <div className="section-kicker">02 / Palvelu</div>
              <h2 id="solution-title">Raakamateriaali sisään. Asiantunteva näkyvyys ulos.</h2>
              <p>
                VIDO Social muuttaa työmaiden kuvat, lyhyet videot ja taustatiedot julkaisuiksi,
                jotka näyttävät työn laadun siellä missä uudet asiakkaat jo vertailevat toimijoita.
              </p>
              <div className="solution-list">
                <div>
                  <Hammer size={20} aria-hidden="true" />
                  <span>Työn laatu pysyy sisällön pääroolissa.</span>
                </div>
                <div>
                  <MessageCircle size={20} aria-hidden="true" />
                  <span>Materiaalin lähetys toimii WhatsAppilla.</span>
                </div>
                <div>
                  <Rocket size={20} aria-hidden="true" />
                  <span>Facebook ja Instagram pysyvät aktiivisina kuukausi kerrallaan.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-band process-section" id="prosessi" aria-labelledby="process-title">
          <div className="section-inner">
            <div className="section-kicker">03 / Prosessi</div>
            <div className="section-heading-row">
              <h2 id="process-title">Toimitusprosessin 10 vaihetta.</h2>
              <p>
                Klikkaa vaihetta ja näe, mitä tapahtuu. Malli on rakennettu pitämään yrittäjän
                oma työ mahdollisimman pienenä.
              </p>
            </div>

            <div className="process-dashboard">
              <div className="timeline-controls" role="tablist" aria-label="Toimitusprosessin vaiheet">
                {processSteps.map((step, index) => {
                  const StepIcon = step.icon;
                  const selected = activeStep === index;
                  return (
                    <button
                      className={selected ? 'timeline-step active' : 'timeline-step'}
                      key={step.label}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-controls="process-panel"
                      onClick={() => setActiveStep(index)}
                    >
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <StepIcon size={18} aria-hidden="true" />
                      <strong>{step.label}</strong>
                    </button>
                  );
                })}
              </div>

              <article className="process-detail" id="process-panel" role="tabpanel">
                <div className="detail-icon">
                  <ActiveIcon size={32} aria-hidden="true" />
                </div>
                <span>Vaihe {activeStep + 1} / 10</span>
                <h3>{processSteps[activeStep].label}</h3>
                <p>{processSteps[activeStep].description}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-band pricing-section" id="hinnoittelu" aria-labelledby="pricing-title">
          <div className="section-inner">
            <div className="section-kicker">04 / Hinnoittelu</div>
            <div className="section-heading-row">
              <h2 id="pricing-title">Selkeä ja kiinteä hinnoittelu.</h2>
              <p>
                Yksi kuukauspaketti aktiivisen näkyvyyden rakentamiseen ilman raskasta sisältöpalaveria.
              </p>
            </div>

            <div className="pricing-grid">
              <article className="pricing-card featured">
                <div className="package-topline">
                  <span>Kasvu-paketti</span>
                  <strong>590 € / kuukausi</strong>
                  <small>ALV 0%</small>
                </div>
                <p>Sisältää 12 julkaisua kuukaudessa, tekstit, kuvien viimeistelyn ja videoeditoinnin.</p>
                <ul>
                  {packageItems.map((item) => (
                    <li key={item}>
                      <Check size={18} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a className="primary-button full-width" href="mailto:info@vidosocial.com?subject=Tarjouspyynt%C3%B6%20Kasvu-paketista">
                  Pyydä tarjous
                  <ArrowRight size={20} aria-hidden="true" />
                </a>
              </article>

              <div className="comparison-matrix" aria-label="Hinnoittelun vertailu">
                <div className="matrix-row matrix-head">
                  <span>Vertailukohta</span>
                  <strong>500 € / kk</strong>
                </div>
                <div className="matrix-row">
                  <span>Julkaisumäärä</span>
                  <strong>Rajattu tai tapauskohtainen</strong>
                </div>
                <div className="matrix-row">
                  <span>VIDO Social</span>
                  <strong>12 julkaisua + editointi</strong>
                </div>
                <div className="matrix-row">
                  <span>Ei sisällä</span>
                  <strong>{exclusions.join(', ')}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-band value-section" aria-labelledby="value-title">
          <div className="section-inner">
            <div className="section-heading-row compact">
              <h2 id="value-title">Miksi VIDO Social?</h2>
              <p>Kolme asiaa, jotka pitävät sisällön uskottavana ja ostamisen yksinkertaisena.</p>
            </div>
            <div className="value-grid">
              {valueProps.map((value) => {
                const Icon = value.icon;
                return (
                  <article className="value-tile" key={value.title}>
                    <Icon size={26} aria-hidden="true" />
                    <h3>{value.title}</h3>
                    <p>{value.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="final-callout section-band" aria-labelledby="final-title">
          <div className="section-inner final-layout">
            <div>
              <div className="section-kicker">05 / Seuraava askel</div>
              <h2 id="final-title">Aloitetaanko?</h2>
              <p>
                Ensimmäisen 30 päivän tavoite on saada työmaiden parhaat näytöt säännölliseksi,
                uskottavaksi Facebook- ja Instagram-näkyvyydeksi ilman että yrittäjän kalenteri tukkeutuu.
              </p>
            </div>
            <a className="primary-button oversized" href="mailto:info@vidosocial.com?subject=15%20min%20kartoitus">
              Varaa maksuton 15 minuutin kartoitus
              <ArrowRight size={22} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>VIDO Social</span>
        <span>Työmailta näkyväksi.</span>
      </footer>
    </div>
  );
}

export default App;