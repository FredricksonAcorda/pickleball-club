import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ArrowDown, ArrowUpRight, Calendar, Clock, MapPin, Menu, Plus, ShieldCheck, Trophy, Users, X } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import doublesMatchImg from './images/1.webp';
import paddleRenderImg from './images/2.webp';
import actionVolleyImg from './images/3.webp';
import paddlesCourtImg from './images/4.webp';
import courtClubHero from './images/5.jpg';

/* Custom pickleball icon mark */
const mark = (className = '') => (
  <svg className={className} width="36" height="36" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="4" />
    <circle cx="26" cy="25" r="2.5" fill="currentColor" />
    <circle cx="38" cy="25" r="2.5" fill="currentColor" />
    <circle cx="32" cy="33" r="2.5" fill="currentColor" />
    <circle cx="24" cy="39" r="2" fill="currentColor" />
    <circle cx="40" cy="39" r="2" fill="currentColor" />
    <circle cx="32" cy="43" r="2" fill="currentColor" />
  </svg>
);

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Rally home">
        {mark('header-mark')}
        <span className="wordmark-text">rally<span>.</span></span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#courts">Courts</a>
        <a href="#features">Club Features</a>
        <a href="#questions">FAQ</a>
      </nav>
      <a className="nav-cta" href="#book-court">
        Book Court <ArrowUpRight size={15} aria-hidden="true" />
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav id="mobile-nav" className={`mobile-nav ${open ? 'is-open' : ''}`} aria-label="Mobile navigation" inert={!open}>
        <a href="#courts" onClick={() => setOpen(false)}>Courts</a>
        <a href="#features" onClick={() => setOpen(false)}>Club Features</a>
        <a href="#book-court" onClick={() => setOpen(false)}>Live Booking</a>
        <a href="#questions" onClick={() => setOpen(false)}>FAQ</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img
        className="hero-poster"
        src={courtClubHero}
        alt="Championship-grade indoor pickleball court with crisp lighting"
      />
      <Header />
      <div className="hero-heading">
        <h1 id="hero-title">
          Reserve your court.<br />
          <em>Own every rally</em>
        </h1>
        <p className="hero-eyebrow">Championship surfaces &middot; Instant access</p>
      </div>
      <div className="hero-copy">
        <p className="hero-description">
          A dedicated club designed for pickleball enthusiasts. Precision multi-layered cushioned courts, glare-free LED lighting, and effortless on-demand booking.
        </p>
        <div className="hero-actions">
          <span>Courts available today from 6:00 AM to 11:00 PM</span>
          <a className="button button-light" href="#book-court">
            Reserve a Court <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
      <a className="hero-scroll" href="#courts">
        Scroll to explore <ArrowDown size={15} aria-hidden="true" />
      </a>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about" id="courts" aria-labelledby="about-title">
      <div className="about-top" data-reveal>
        <p>Built exclusively for pickleball players, from beginners to tournament regulars.</p>
        <h2 id="about-title">
          The game moves fast. <em>Your booking should too</em>
        </h2>
        <div className="about-actions">
          <a href="#book-court" className="round-link round-link-dark">
            <span><Plus size={16} /></span> Book a slot
          </a>
          <a href="#features" className="round-link round-link-muted">
            <span><ArrowDown size={16} /></span> Club amenities
          </a>
        </div>
      </div>
      <div className="about-divider" aria-hidden="true">
        <span></span>
      </div>
      <div className="about-bottom" data-reveal>
        <div className="about-signature">
          {mark('brand-mark')}
          <span>Rally Club<br />Championship Play</span>
        </div>
        <p>
          No converted tennis lines or bad bounces. Enjoy competition-spec acrylic courts, high-contrast tournament balls, automated score consoles, and a welcoming community ready for open play.
        </p>
      </div>
    </section>
  );
}

const features = [
  {
    title: 'Instant online court reservation',
    description: 'Lock in your preferred 60- or 90-minute slot in three taps. Invite hitting partners directly to split the court fee automatically with digital check-in.',
    poster: paddlesCourtImg
  },
  {
    title: 'DUPR leagues & daily open play',
    description: 'Level up your game with skill-matched round robins, ladder leagues, and morning king-of-the-court sessions managed by our on-site club pros.',
    poster: doublesMatchImg
  },
  {
    title: 'Pro gear rental & social lounge',
    description: 'Test the latest carbon fiber paddles from leading brands, purchase court-grip shoes, or unwind post-match with cold brews and healthy recovery snacks.',
    poster: paddleRenderImg
  },
];

function FeatureVideo({ poster, title, className = '' }: { poster: string; title: string; className?: string; src?: string }) {
  return (
    <div className={`feature-media ${className}`}>
      <img src={poster} alt={title} loading="lazy" />
    </div>
  );
}

const moments = [
  {
    title: 'The early morning grind',
    scene: 'Court 01 &middot; 7:00 AM Open Play',
    description: 'Start your day with high-energy warm-up drills, fresh balls, and automated ball machine court rentals.',
    poster: paddlesCourtImg,
    shape: 'portrait'
  },
  {
    title: 'The after-work doubles clash',
    scene: 'Center Court &middot; 6:30 PM Prime Time',
    description: 'Unwind under high-lumen, glare-shielded floodlights with sound-dampened acoustic wall dividers.',
    poster: actionVolleyImg,
    shape: 'portrait'
  },
  {
    title: 'Weekend social scrambles & mixers',
    scene: 'Pavilion Courts &middot; Saturday Morning Mixers',
    description: 'Bring friends or drop in solo for fast-paced round-robin rotations, live DJ sets, and pro equipment clinics.',
    poster: doublesMatchImg,
    shape: 'landscape'
  },
];

function MomentsSection() {
  return (
    <div className="moments" aria-labelledby="moments-title">
      <div className="moments-heading" data-reveal>
        <p className="section-kicker">On the court</p>
        <h2 id="moments-title">Pickleball sessions built for every style</h2>
        <p>Whether you are dialing in your third-shot drop or hosting a social company tournament, there is a slot waiting for you.</p>
      </div>
      <div className="moments-grid">
        {moments.map((moment, index) => (
          <article className={`moment-card moment-${moment.shape}`} key={moment.title} data-reveal>
            <div className="moment-media-wrap">
              <FeatureVideo
                poster={moment.poster}
                title={moment.scene}
                className={`moment-media moment-media-${moment.shape}`}
              />
            </div>
            <div className="moment-copy">
              <span>0{index + 1} / 03</span>
              <h3>{moment.title}</h3>
              <p>{moment.description}</p>
              <small>{moment.scene}</small>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function FeaturesSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.feature-card');
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
      });
    }, { rootMargin: '-22% 0px -32% 0px', threshold: 0.12 });
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="features" id="features" aria-labelledby="features-title">
      <div className="features-layout">
        <div className="features-side">
          <div>
            <p className="section-kicker">Club facilities</p>
            <h2 id="features-title">Engineered for clean, uninterrupted play</h2>
          </div>
          <nav className="feature-nav" aria-label="Feature sections">
            {features.map((feature, index) => (
              <button
                key={feature.title}
                type="button"
                className={active === index ? 'active' : ''}
                onClick={() => document.getElementById(`feature-${index + 1}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              >
                <span>0{index + 1}</span>
                {feature.title}
              </button>
            ))}
          </nav>
          <div className="feature-side-bottom">
            <p>Court access includes complimentary locker rooms, paddle rentals, and chilled electrolyte refilling stations.</p>
            <a href="#book-court" className="button button-light">
              Reserve a Court <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="feature-list">
          {features.map((feature, index) => (
            <article className="feature-card" id={`feature-${index + 1}`} key={feature.title} data-index={index} data-reveal>
              <div className="feature-card-top">
                {mark('feature-mark')}
                <span>0{index + 1} / 03</span>
              </div>
              <h3>{feature.title}</h3>
              <FeatureVideo poster={feature.poster} title={feature.title} />
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
      <MomentsSection />
    </section>
  );
}

const courtTypes = [
  {
    name: 'Indoor Pro Cushion',
    tag: 'Climate Controlled',
    details: '8-layer acrylic cushioned surface. Tournament LED lines, sound-dampened acoustic barriers, and digital scoreboard.',
    price: '$45 / hr',
    availability: 'Next slot: Today, 3:00 PM',
    image: courtClubHero
  },
  {
    name: 'Covered Open-Air',
    tag: 'Fresh Breeze & Shade',
    details: 'All-weather covered outdoor championship courts with UV-filtering roof and perimeter wind screening.',
    price: '$35 / hr',
    availability: 'Next slot: Today, 4:30 PM',
    image: paddlesCourtImg
  },
  {
    name: 'Rooftop Social Court',
    tag: 'Skyline Views',
    details: 'Surrounded by the club lounge with dedicated spectator seating, cocktail service, and optional private coaching.',
    price: '$55 / hr',
    availability: 'Next slot: Today, 6:00 PM',
    image: actionVolleyImg
  },
];

function QuickBookingSection() {
  const [choice, setChoice] = useState<number | null>(0);
  const [duration, setDuration] = useState('60 min');
  const [confirmed, setConfirmed] = useState(false);

  return (
    <section className="check-in" id="book-court" aria-labelledby="booking-title">
      <div className="check-in-copy" data-reveal>
        <p className="section-kicker">Live court reservation</p>
        <h2 id="booking-title">Choose your court format</h2>
        <p>Pick a surface, select your match duration, and check instant availability. Guest passes and paddle rentals are available at checkout.</p>
        <p className="check-note">Free cancellations up to 12 hours before match start. No membership required for guest reservations.</p>
      </div>
      <div className="check-panel" data-reveal>
        <span className="check-panel-label">Select court style:</span>
        <div className="check-options" role="group" aria-label="Choose a court format">
          {courtTypes.map((item, index) => (
            <button
              className={choice === index ? 'selected' : ''}
              type="button"
              key={item.name}
              aria-pressed={choice === index}
              onClick={() => { setChoice(index); setConfirmed(false); }}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="check-response" aria-live="polite">
          {choice === null ? (
            <p>Select a court above to review availability and pricing.</p>
          ) : (
            <>
              <div style={{ borderRadius: '14px', overflow: 'hidden', height: '160px', marginBottom: '16px' }}>
                <img
                  src={courtTypes[choice].image}
                  alt={courtTypes[choice].name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 600 }}>{courtTypes[choice].tag}</span>
                <strong style={{ fontSize: '15px', color: '#173628' }}>{courtTypes[choice].price}</strong>
              </div>
              <p>{courtTypes[choice].details}</p>
              <div style={{ margin: '14px 0 10px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', color: '#2b503c' }}>
                <Clock size={16} /> <span>{courtTypes[choice].availability}</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                {['60 min', '90 min', '120 min'].map(dur => (
                  <button
                    key={dur}
                    type="button"
                    style={{
                      padding: '6px 12px',
                      borderRadius: '8px',
                      border: '1px solid #c2d9cb',
                      background: duration === dur ? '#1f4835' : '#fff',
                      color: duration === dur ? '#fff' : '#2b503c',
                      fontSize: '12px',
                      fontWeight: 500,
                      cursor: 'pointer'
                    }}
                    onClick={() => setDuration(dur)}
                  >
                    {dur}
                  </button>
                ))}
              </div>
              <div style={{ marginTop: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                <button
                  type="button"
                  style={{
                    background: '#1d4332',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '10px 18px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                  onClick={() => setConfirmed(true)}
                >
                  {confirmed ? 'Slot Held! Proceeding to Payment...' : `Book ${courtTypes[choice].name} (${duration})`}
                </button>
                <button
                  type="button"
                  style={{
                    background: 'none',
                    border: 'none',
                    textDecoration: 'underline',
                    color: '#345e49',
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                  onClick={() => { setChoice(null); setConfirmed(false); }}
                >
                  Reset
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: 'Do I need a club membership to book a court?',
    a: 'No. Rally welcomes both public guest bookings and club members. Non-members can book up to 5 days in advance, while members enjoy 14-day priority booking windows and discounted court rates.'
  },
  {
    q: 'Can I rent paddles and balls at the facility?',
    a: 'Yes. We stock pro-grade carbon fiber paddles (Selkirk, Joola, CRBN) for $5 per session. Tournament outdoor and indoor balls are provided complimentary with every court booking.'
  },
  {
    q: 'What is the court cancellation and rainout policy?',
    a: 'You may cancel or reschedule any court booking up to 12 hours prior to start time for a full credit refund. For covered outdoor courts impacted by severe winds, automatic rescheduling credits are issued.'
  },
  {
    q: 'Are coaching lessons and beginner clinics available?',
    a: 'Yes! Our certified IPTPA and PPR coaching staff offer 1-on-1 private lessons, group clinics, and beginner "Intro to Pickleball" 60-minute crash courses each week.'
  }
];

function QuestionsSection() {
  return (
    <section className="questions" id="questions" aria-labelledby="questions-title">
      <div className="questions-heading" data-reveal>
        <p className="section-kicker">Everything you need to know</p>
        <h2 id="questions-title">Frequently asked questions</h2>
      </div>
      <div className="question-list" data-reveal>
        {faqs.map(item => (
          <details key={item.q}>
            <summary>
              {item.q}
              <Plus size={19} aria-hidden="true" />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className="closing" aria-labelledby="closing-title">
      <div>
        <p className="section-kicker">Game on</p>
        <h2 id="closing-title">
          Grab your paddle. Your next match is <em>waiting on court</em>
        </h2>
      </div>
      <a href="#book-court" className="button button-light">
        Book a Court <ArrowUpRight size={17} aria-hidden="true" />
      </a>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.13 });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main>
        <Hero />
        <AboutSection />
        <FeaturesSection />
        <QuickBookingSection />
        <QuestionsSection />
        <ClosingSection />
      </main>
      <footer className="site-footer">
        <div className="footer-top">
          <a className="footer-brand" href="#top" aria-label="Rally home">
            {mark('footer-mark')}
            <span>rally<span>.</span></span>
          </a>
          <p>Championship courts, community open play, and seamless digital booking.</p>
          <nav aria-label="Footer navigation">
            <a href="#courts">Courts</a>
            <a href="#features">Club Features</a>
            <a href="#book-court">Bookings</a>
            <a href="#questions">FAQ</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>Open Daily 6:00 AM – 11:00 PM &middot; Equipment rental & locker rooms available on-site.</span>
          <a href="#book-court">
            Reserve Online <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </footer>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}