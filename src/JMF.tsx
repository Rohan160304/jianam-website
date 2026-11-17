
import { useEffect, useState } from "react";
import {
  CalendarDays,
  MapPin,
  ArrowRight,
  UserRound,
  BedDouble,
  Utensils,
  Sparkles,
  HandHeart,
  Star,
  Users,
  Music,
  Heart,
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

          <p className="jmf-hero-eyebrow">
            A CELEBRATION LIKE NEVER BEFORE
          </p>

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

          <button
            className="jmf-primary-button"
            onClick={() => {
              window.location.href = "/book-your-pass";
            }}
          >
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

      {/* STAR LINEUP */}
      <section className="jmf-lineup">
        <div className="jmf-lineup-content">
          <span className="jmf-lineup-eyebrow">
            GET READY FOR THE SHOW
          </span>

          <h2>THE STAR LINEUP</h2>

          <div className="jmf-stars">★ ★ ★</div>

          <p>Exciting artists. Unforgettable performances.</p>
        </div>

        <div className="jmf-lineup-art">
          <div className="jmf-mic-circle jmf-mic-one">
            <UserRound size={42} strokeWidth={1.8} />
          </div>

          <div className="jmf-mic-circle jmf-mic-two">
            <UserRound size={60} strokeWidth={1.8} />
          </div>

          <div className="jmf-mic-circle jmf-mic-three">
            <UserRound size={36} strokeWidth={1.8} />
          </div>
        </div>

        <div className="jmf-lineup-coming">
          LINEUP REVEAL
          <strong>COMING SOON</strong>
        </div>
      </section>

      {/* STAY, FOOD & EXPERIENCE - THREE COLUMN LAYOUT */}
      <div className="jmf-info-grid">

        {/* STAY SECTION */}
        <section className="jmf-info-section" id="jmf-stay">
          <div className="jmf-info-card jmf-stay-card">
            <div className="jmf-info-icon">
              <BedDouble size={34} />
            </div>

            <span className="jmf-section-eyebrow">
              YOUR COMFORT MATTERS
            </span>

            <h2>STAY</h2>

            <p className="jmf-info-subtitle">
              A comfortable stay for a memorable celebration.
            </p>

            <div className="jmf-info-divider" />

            <p className="jmf-info-description">
              Enjoy a relaxed and convenient stay during the three-day
              celebration. Accommodation arrangements will be planned to
              provide attendees with a comfortable experience throughout
              the event.
            </p>

            <div className="jmf-info-points">
              <span>
                <BedDouble size={18} />
                Comfortable Accommodation
              </span>

              <span>
                <Users size={18} />
                Arrangements for Attendees
              </span>

              <span>
                <Heart size={18} />
                A Relaxed Stay Experience
              </span>
            </div>
          </div>
        </section>

        {/* FOOD SECTION */}
        <section
          className="jmf-info-section jmf-food-section"
          id="jmf-food"
        >
          <div className="jmf-info-card jmf-info-food-card">
            <div className="jmf-info-icon">
              <Utensils size={34} />
            </div>

            <span className="jmf-section-eyebrow">
              PURE JAIN HOSPITALITY
            </span>

            <h2>FOOD</h2>

            <p className="jmf-info-subtitle">
              Thoughtfully planned meals for everyone.
            </p>

            <div className="jmf-info-divider" />

            <p className="jmf-info-description">
              Enjoy pure Jain meals during the celebration, with food
              arrangements planned to make your experience comfortable
              and convenient.
            </p>

            <div className="jmf-info-points">
              <span>
                <Utensils size={18} />
                Pure Jain Food
              </span>

              <span>
                <Heart size={18} />
                Lunch Arrangements
              </span>

              <span>
                <Sparkles size={18} />
                Choviyar Arrangements
              </span>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section
          className="jmf-info-section jmf-experience-section"
          id="jmf-experience"
        >
          <div className="jmf-info-card jmf-info-exp-card">
            <div className="jmf-info-icon">
              <Sparkles size={34} />
            </div>

            <span className="jmf-section-eyebrow">
              THREE DAYS TO REMEMBER
            </span>

            <h2>EXPERIENCE</h2>

            <p className="jmf-info-subtitle">
              Music, devotion and togetherness on a grand scale.
            </p>

            <div className="jmf-info-divider" />

            <p className="jmf-info-description">
              Experience an extraordinary Jain music celebration featuring
              a grand stage, exciting performances and three days of
              unforgettable moments with the Jain community.
            </p>

            <div className="jmf-info-points">
              <span>
                <Music size={18} />
                Grand Music Celebration
              </span>

              <span>
                <UserRound size={36} strokeWidth={1.8} />
                Exciting Artists & Performances
              </span>

              <span>
                <Users size={18} />
                Three Days of Togetherness
              </span>
            </div>
          </div>
        </section>
      </div>

      

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
