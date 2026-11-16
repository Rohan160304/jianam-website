
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

  return (
    <div className="jmf-page">
      <section className="jmf-hero">
        <div className="jmf-glow jmf-glow-one" />
        <div className="jmf-glow jmf-glow-two" />

        <div className="jmf-early-badge">
          <Star size={17} />
          <strong>EARLY BIRD</strong>
          <strong>BOOKINGS</strong>
          <span>COMING SOON</span>
          <div>★ ★ ★</div>
        </div>

        <div className="jmf-hero-content">
          <div className="jmf-brand-mark">
            <Sparkles size={25} />
            <span>THE BIGGEST JAIN MUSIC CELEBRATION</span>
          </div>

          <h1>JAIN-Z<br />TOMORROWLAND</h1>

          <p className="jmf-tagline">
            A GRAND NEVER-SEEN-BEFORE<br />
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
            <div className="jmf-stage-arch">
              <span>ॐ</span>
              <Sparkles size={45} />
            </div>
            <div className="jmf-stage-lights" />
          </div>

          <h2>Three Days of Music, Devotion & Togetherness</h2>
          <p className="jmf-description">
            Be part of an extraordinary celebration that brings the Jain
            community together on a grand scale and could create history.
          </p>

          <div className="jmf-countdown">
            <div className="jmf-countdown-label">
              THE<br />COUNTDOWN<br />BEGINS
            </div>
            {[
              ["Days", timeLeft.days],
              ["Hours", timeLeft.hours],
              ["Minutes", timeLeft.minutes],
              ["Seconds", timeLeft.seconds],
            ].map(([label, value]) => (
              <div className="jmf-countdown-item" key={label}>
                <strong>{String(value).padStart(2, "0")}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <button className="jmf-primary-button" onClick={scrollToPasses}>
            BOOK YOUR PASS <ArrowRight size={21} />
          </button>
        </div>
      </section>

      <section className="jmf-highlights">
        <div className="jmf-highlight-card">
          <Sparkles />
          <h3>Iconic Grand Stage</h3>
          <p>A breathtaking stage experience unlike anything seen before in the Jain community.</p>
        </div>
        <div className="jmf-highlight-card">
          <Mic2 />
          <h3>Top Singers Lineup</h3>
          <p>A fantastic lineup of popular singers and performers. Artists to be announced soon.</p>
        </div>
        <div className="jmf-highlight-card">
          <CalendarDays />
          <h3>3 Days of Celebration</h3>
          <p>Three unforgettable days filled with music, energy and togetherness.</p>
        </div>
        <div className="jmf-highlight-card">
          <BedDouble />
          <h3>Comfortable Stay</h3>
          <p>Well-planned accommodation for a relaxed and memorable experience.</p>
        </div>
        <div className="jmf-highlight-card">
          <Utensils />
          <h3>Lunch & Choviyar</h3>
          <p>Pure Jain meals with lunch and choviyar for all attendees.</p>
        </div>
      </section>

      <section className="jmf-lineup">
        <div>
          <span>THE</span>
          <h2>STAR LINEUP</h2>
          <div className="jmf-stars">★ ★ ★</div>
        </div>
        <div className="jmf-lineup-art">
          <Mic2 size={75} />
          <Mic2 size={95} />
          <Mic2 size={65} />
        </div>
        <div className="jmf-lineup-coming">
          LINEUP REVEAL<br />COMING SOON
        </div>
      </section>

      <section className="jmf-details">
        <div className="jmf-stay-card">
          <div className="jmf-palitana-art">
            <span>PALITANA</span>
          </div>
          <h2>Stay · Food · Experience</h2>
          <div className="jmf-stay-features">
            <span><BedDouble /> Accommodation<br /><small>As per selected pass</small></span>
            <span><Utensils /> Lunch & Choviyar</span>
            <span><Star /> 3-Day Event Access</span>
          </div>
        </div>

        <div className="jmf-passes" id="jmf-passes">
          <h2>EARLY BIRD PASSES</h2>
          <p><strong>Limited Period Offer</strong></p>
          <p>Available from January 2027 to March 2027</p>

          <div className="jmf-pass-options">
            <div className="jmf-pass-card">
              <Users size={25} />
              <strong>4 Sharing</strong>
              <h3>₹3,999</h3>
              <span>Per Person</span>
              <button onClick={() => window.alert("Early bird bookings are coming soon!")}>
                Coming Soon
              </button>
            </div>

            <div className="jmf-pass-card">
              <Crown size={25} />
              <strong>Premium Pass</strong>
              <h3>₹4,999</h3>
              <span>Per Person</span>
              <button onClick={() => window.alert("Early bird bookings are coming soon!")}>
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="jmf-footer-banner">
        <HandHeart size={35} />
        <h2>LET’S CREATE JAIN HISTORY</h2>
        <p>Come together for a once-in-a-lifetime celebration in Palitana.</p>
      </section>
    </div>
  );
}
