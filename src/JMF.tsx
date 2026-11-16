
import { useEffect, useState } from "react";
import {
  CalendarDays,
  MapPin,
  ArrowRight,
  Mic2,
  BedDouble,
  Utensils,
  Crown,
  Users,
  Star,
  Sparkles,
  HandHeart,
} from "lucide-react";
import "./JMF.css";

const EVENT_DATE = new Date("2027-12-24T00:00:00+05:30").getTime();

function getTimeLeft() {
  const difference = Math.max(0, EVENT_DATE - Date.now());

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function JMF() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const scrollToPasses = () => {
    document.getElementById("jmf-passes")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const countdownItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="jmf-page">
      {/* HERO SECTION */}
      <section className="jmf-hero">
        <div className="jmf-hero-decoration jmf-decoration-one" />
        <div className="jmf-hero-decoration jmf-decoration-two" />
        <div className="jmf-hero-decoration jmf-decoration-three" />

        <div className="jmf-early-badge">
          <Star size={16} />
          <strong>EARLY BIRD</strong>
          <strong>BOOKINGS</strong>
          <span>COMING SOON</span>
          <div>★ ★ ★</div>
        </div>

        <div className="jmf-hero-content">
          <div className="jmf-brand-mark">
            <Sparkles size={22} />
            <span>THE BIGGEST JAIN MUSIC CELEBRATION</span>
          </div>

          <p className="jmf-hero-eyebrow">A CELEBRATION LIKE NEVER BEFORE</p>

          <h1>
            JAIN-Z
            <span>TOMORROWLAND</span>
          </h1>

          <p className="jmf-tagline">
            A GRAND NEVER-SEEN-BEFORE
            <br />
            JAIN MUSIC CELEBRATION
          </p>

          <div className="jmf-event-info">
            <span>
              <CalendarDays size={19} />
              24 – 26 DECEMBER 2027
            </span>
            <span>
              <MapPin size={19} />
              PALITANA, GUJARAT, INDIA
            </span>
          </div>

          <div className="jmf-stage">
            <div className="jmf-stage-orbit jmf-orbit-one" />
            <div className="jmf-stage-orbit jmf-orbit-two" />

            <div className="jmf-stage-arch">
              <Sparkles size={38} />
            </div>

            <div className="jmf-stage-light jmf-stage-light-left" />
            <div className="jmf-stage-light jmf-stage-light-right" />
            <div className="jmf-stage-floor" />
          </div>

          <h2>Three Days of Music, Devotion & Togetherness</h2>

          <p className="jmf-description">
            Be part of an extraordinary celebration that brings the Jain
            community together on a grand scale and could create history.
          </p>

          <div className="jmf-countdown">
            <div className="jmf-countdown-label">
              THE
              <br />
              COUNTDOWN
              <br />
              BEGINS
            </div>

            {countdownItems.map(({ label, value }) => (
              <div className="jmf-countdown-item" key={label}>
                <strong>{String(value).padStart(2, "0")}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <button className="jmf-primary-button" onClick={scrollToPasses}>
            BOOK YOUR PASS
            <ArrowRight size={19} />
          </button>
        </div>

        <div className="jmf-hero-bottom">
          <span>CELEBRATE</span>
          <span className="jmf-bottom-star">✦</span>
          <span>CONNECT</span>
          <span className="jmf-bottom-star">✦</span>
          <span>CREATE HISTORY</span>
        </div>
      </section>

      {/* EVENT HIGHLIGHTS */}
      <section className="jmf-section jmf-highlights-section">
        <div className="jmf-section-heading">
          <span>THE EXPERIENCE</span>
          <h2>More Than Just Music</h2>
          <p>Everything coming together for an unforgettable celebration.</p>
        </div>

        <div className="jmf-highlights">
          <div className="jmf-highlight-card">
            <div className="jmf-highlight-icon">
              <Sparkles />
            </div>
            <h3>Iconic Grand Stage</h3>
            <p>
              A breathtaking stage experience unlike anything seen before in
              the Jain community.
            </p>
          </div>

          <div className="jmf-highlight-card">
            <div className="jmf-highlight-icon">
              <Mic2 />
            </div>
            <h3>Top Singers Lineup</h3>
            <p>
              A fantastic lineup of popular singers and performers. Artists to
              be announced soon.
            </p>
          </div>

          <div className="jmf-highlight-card">
            <div className="jmf-highlight-icon">
              <CalendarDays />
            </div>
            <h3>3 Days of Celebration</h3>
            <p>
              Three unforgettable days filled with music, energy and
              togetherness.
            </p>
          </div>

          <div className="jmf-highlight-card">
            <div className="jmf-highlight-icon">
              <BedDouble />
            </div>
            <h3>Comfortable Stay</h3>
            <p>
              Well-planned accommodation for a relaxed and memorable
              experience.
            </p>
          </div>

          <div className="jmf-highlight-card">
            <div className="jmf-highlight-icon">
              <Utensils />
            </div>
            <h3>Lunch & Choviyar</h3>
            <p>
              Pure Jain meals with lunch and choviyar for all attendees.
            </p>
          </div>
        </div>
      </section>

      {/* STAR LINEUP */}
      <section className="jmf-lineup">
        <div className="jmf-lineup-content">
          <span className="jmf-lineup-eyebrow">GET READY FOR THE SHOW</span>
          <h2>THE STAR LINEUP</h2>
          <div className="jmf-stars">★ ★ ★</div>
          <p>Exciting artists. Unforgettable performances.</p>
        </div>

        <div className="jmf-lineup-art">
          <div className="jmf-mic-circle jmf-mic-one">
            <Mic2 size={42} />
          </div>
          <div className="jmf-mic-circle jmf-mic-two">
            <Mic2 size={60} />
          </div>
          <div className="jmf-mic-circle jmf-mic-three">
            <Mic2 size={36} />
          </div>
        </div>

        <div className="jmf-lineup-coming">
          LINEUP REVEAL
          <strong>COMING SOON</strong>
        </div>
      </section>

      {/* STAY AND PASSES */}
      <section className="jmf-section jmf-details-section">
        <div className="jmf-section-heading">
          <span>PLAN YOUR EXPERIENCE</span>
          <h2>Your Celebration Awaits</h2>
          <p>Explore the stay arrangements and early bird pass options.</p>
        </div>

        <div className="jmf-details">
          <div className="jmf-stay-card">
            <div className="jmf-palitana-art">
              <div className="jmf-palitana-overlay">
                <span>YOUR DESTINATION</span>
                <strong>PALITANA</strong>
              </div>
            </div>

            <div className="jmf-stay-content">
              <span className="jmf-card-eyebrow">THREE DAYS TO REMEMBER</span>
              <h2>Stay · Food · Experience</h2>

              <div className="jmf-stay-features">
                <div>
                  <BedDouble />
                  <strong>Accommodation</strong>
                  <small>As per selected pass</small>
                </div>

                <div>
                  <Utensils />
                  <strong>Lunch & Choviyar</strong>
                </div>

                <div>
                  <Star />
                  <strong>3-Day Event Access</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="jmf-passes" id="jmf-passes">
            <div className="jmf-pass-heading">
              <span className="jmf-card-eyebrow">LIMITED PERIOD OFFER</span>
              <h2>EARLY BIRD PASSES</h2>
              <p>Available from January 2027 to March 2027</p>
            </div>

            <div className="jmf-pass-options">
              <div className="jmf-pass-card">
                <div className="jmf-pass-icon">
                  <Users size={24} />
                </div>
                <strong>4 Sharing</strong>
                <h3>₹3,999</h3>
                <span>Per Person</span>
                <button
                  onClick={() =>
                    window.alert("Early bird bookings are coming soon!")
                  }
                >
                  Coming Soon
                </button>
              </div>

              <div className="jmf-pass-card jmf-premium-pass">
                <div className="jmf-pass-popular">PREMIUM</div>
                <div className="jmf-pass-icon">
                  <Crown size={24} />
                </div>
                <strong>Premium Pass</strong>
                <h3>₹4,999</h3>
                <span>Per Person</span>
                <button
                  onClick={() =>
                    window.alert("Early bird bookings are coming soon!")
                  }
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL BANNER */}
      <section className="jmf-footer-banner">
        <div className="jmf-footer-decoration" />
        <HandHeart size={38} />
        <span>ONE COMMUNITY. ONE CELEBRATION.</span>
        <h2>LET’S CREATE JAIN HISTORY</h2>
        <p>
          Come together for a once-in-a-lifetime celebration in Palitana.
        </p>
      </section>
    </div>
  );
}
