
import { useState, type FormEvent } from "react";
import AboutUs from "./AboutUs";
import FeaturesPage from "./Features";
import CommunityPage from "./community";
import EventPage from "./Events";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Globe2,
  HandHeart,
  Heart,
  House,
  Mail,
  MapPin,
  Menu,
  Moon,
  Music,
  ShieldCheck,
  Sun,
  Users,
  X,
  Building2,
  Gift,
  GraduationCap,
  Landmark,
  Smartphone,
  Sparkles,
  Compass,
  Bell,
  CircleUserRound,
  Search,
  Download,
  Play,
} from "lucide-react";
import "./App.css";

const features = [
  { name: "Monk Tracking", description: "Live tracking & safety", icon: Compass, color: "blue" },
  { name: "Temple Management", description: "Digital temple operations", icon: Landmark, color: "orange" },
  { name: "Community Feed", description: "Updates & announcements", icon: Users, color: "green" },
  { name: "Jain Music", description: "Bhakti & devotional", icon: Music, color: "purple" },
  { name: "Learning", description: "Knowledge & scriptures", icon: BookOpen, color: "violet" },
  { name: "Pathshala", description: "Kids' learning hub", icon: GraduationCap, color: "coral" },
  { name: "Volunteer", description: "Seva & volunteering", icon: HandHeart, color: "green" },
  { name: "Donations", description: "Secure & transparent", icon: Gift, color: "orange" },
  { name: "Jobs", description: "Find & post jobs", icon: BriefcaseBusiness, color: "teal" },
  { name: "Visitor Management", description: "Visit and crowd Management", icon: House, color: "purple" },
  { name: "Matrimony", description: "Jain matrimonial", icon: Heart, color: "coral" },
  { name: "Events", description: "Events & gatherings", icon: CalendarDays, color: "teal" },
  { name: "Tours & Yatras", description: "Pilgrimage & tours", icon: Building2, color: "violet" },
];

const communityNodes = [
  { label: "Temple", icon: Landmark, className: "node-temple" },
  { label: "Monk", icon: HandHeart, className: "node-monk" },
  { label: "Family", icon: Users, className: "node-family" },
  { label: "Music", icon: Music, className: "node-music" },
  { label: "Learning", icon: BookOpen, className: "node-learning" },
  { label: "Events", icon: CalendarDays, className: "node-events" },
  { label: "Jobs", icon: BriefcaseBusiness, className: "node-jobs" },
  { label: "Matrimony", icon: Heart, className: "node-matrimony" },
  { label: "Visitor Management", icon: House, className: "node-property" },
  { label: "Volunteer", icon: HandHeart, className: "node-volunteer" },
  { label: "Donations", icon: Gift, className: "node-donations" },
];

const testimonials = [
  {
    name: "Temple Trustees",
    quote: "JiNANAM has transformed how we share temple updates and connect with devotees.",
    initials: "TT",
  },
  {
    name: "Community Leaders",
    quote: "A powerful platform that brings our community and generations closer together.",
    initials: "CL",
  },
  {
    name: "Families",
    quote: "Everything we need for our Jain lifestyle is now beautifully and easily in one app.",
    initials: "FA",
  },
  {
    name: "Youth",
    quote: "An amazing platform for learning, connecting and growing as Jain youth.",
    initials: "YO",
  },
];

const navItems = [
  "Home",
  "About",
  "Features",
  "Community",
  "Events",
  "Resources",
  "Contact",
];

function navigateToPage(path: string) {
  if (window.location.pathname !== path) {
    window.location.href = path;
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const currentPath = window.location.pathname;
  const isHomePage = currentPath === "/";
  const isAboutPage = currentPath === "/about";
  const isFeaturesPage = currentPath === "/features";
  const isCommunityPage = currentPath === "/community";
  const isEventsPage = currentPath === "/events";

  const goTo = (item: string) => {
    setMenuOpen(false);
    setLanguageOpen(false);

    const pageRoutes: Record<string, string> = {
      Home: "/",
      About: "/about",
      Features: "/features",
      Community: "/community",
      Events: "/events",
    };

    if (pageRoutes[item]) {
      navigateToPage(pageRoutes[item]);
      return;
    }

    const sectionId = item.toLowerCase();

    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className={`site-header ${dark ? "dark-mode" : ""}`}>
      <div className="navbar">
        <a
          className="brand"
          href="/"
          onClick={(event) => {
            event.preventDefault();
            goTo("Home");
          }}
        >
          <img src="/logo.png" alt="JiNANAM Foundation" />
        </a>

        <nav
          className={`desktop-nav ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const isActive =
              (item === "Home" && isHomePage) ||
              (item === "About" && isAboutPage) ||
              (item === "Features" && isFeaturesPage) ||
              (item === "Community" && isCommunityPage) ||
              (item === "Events" && isEventsPage);

            const href =
              item === "Home"
                ? "/"
                : item === "About"
                  ? "/about"
                  : item === "Features"
                    ? "/features"
                    : item === "Community"
                      ? "/community"
                      : item === "Events"
                        ? "/events"
                        : `/#${item.toLowerCase()}`;

            return (
              <a
                key={item}
                className={`nav-link ${isActive ? "active" : ""}`}
                href={href}
                aria-current={isActive ? "page" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  goTo(item);
                }}
              >
                {item}
              </a>
            );
          })}
        </nav>

        <div className="nav-actions">
          <button
            className="button button-outline login-button"
            onClick={() => goTo("Contact")}
          >
            Login
          </button>

          <button
            className="button button-primary signup-button"
            onClick={() => goTo("Contact")}
          >
            Sign Up
          </button>

          <div className="language-wrap">
            <button
              className="icon-button language-button"
              aria-label="Choose language"
              aria-expanded={languageOpen}
              onClick={() => setLanguageOpen(!languageOpen)}
            >
              <span>{language}</span>
              <ChevronDown size={14} />
            </button>

            {languageOpen && (
              <div className="language-menu">
                {["EN", "HI", "MR"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setLanguageOpen(false);
                    }}
                  >
                    {lang === "EN"
                      ? "English"
                      : lang === "HI"
                        ? "Hindi"
                        : "Marathi"}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="icon-button theme-button"
            aria-label="Toggle color theme"
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            className="mobile-menu-button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>
    </header>
  );
}

function EcosystemDiagram() {
  return (
    <div
      className="ecosystem-visual"
      aria-label="JiNANAM connects the Jain community"
    >
      <div className="ecosystem-orbit orbit-one" />
      <div className="ecosystem-orbit orbit-two" />

      <div className="ecosystem-lines">
        {communityNodes.map((node, index) => (
          <span
            key={node.label}
            className={`connector connector-${index + 1}`}
          />
        ))}
      </div>

      <div className="ecosystem-core">
        <img src="/logo.png" alt="JiNANAM Foundation" />
        <span>ONE COMMUNITY</span>
      </div>

      {communityNodes.map(({ label, icon: Icon, className }) => (
        <div key={label} className={`ecosystem-node ${className}`}>
          <div className="node-icon">
            <Icon size={25} strokeWidth={2.1} />
          </div>
          <span>{label}</span>
        </div>
      ))}

      <span className="float-dot dot-a" />
      <span className="float-dot dot-b" />
      <span className="float-dot dot-c" />
      <span className="float-dot dot-d" />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <div className="eyebrow">
          <span />
          ONE COMMUNITY. INFINITE POSSIBILITIES.
        </div>

        <h1>
          The Digital Home
          <br />
          for the Global
          <br />
          <span>Jain Community.</span>
        </h1>

        <p className="hero-description">
          Connecting Temples, Monks, Families, Pathshalas, Youth,
          Events, Donations, Learning and Community — all in one
          ecosystem.
        </p>

        <div className="hero-buttons">
          <a className="button button-primary button-large" href="/features">
            Explore Platform <ArrowRight size={18} />
          </a>

          <a className="button button-outline button-large" href="#download">
            <Download size={17} />
            Download App
          </a>
        </div>

        <div className="trust-row">
          <div className="avatar-stack" aria-hidden="true">
            {["R", "J", "A", "M", "P"].map((letter, index) => (
              <span key={letter} className={`avatar avatar-${index + 1}`}>
                {letter}
              </span>
            ))}
          </div>

          <div>
            <strong>5M+</strong>
            <span>Happy Users</span>
          </div>

          <p>Trusted by Jain families worldwide</p>
        </div>
      </div>

      <div className="hero-art">
        <div className="hero-art-glow" />
        <EcosystemDiagram />
      </div>
    </section>
  );
}

function Statistics() {
  const stats = [
    {
      number: "5M+",
      label: "Global Jain Community",
      icon: Users,
      color: "blue",
    },
    {
      number: "10,000+",
      label: "Temples & Tirths",
      icon: Landmark,
      color: "orange",
    },
    {
      number: "1000+",
      label: "Community Organizations",
      icon: Users,
      color: "green",
    },
    {
      number: "∞",
      label: "Infinite Possibilities",
      icon: Globe2,
      color: "gold",
    },
  ];

  return (
    <section
      className="stats-bar section-shell"
      aria-label="JiNANAM at a glance"
    >
      {stats.map(({ number, label, icon: Icon, color }) => (
        <div className="stat-card" key={label}>
          <div className={`stat-icon ${color}`}>
            <Icon size={26} />
          </div>
          <div>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function HomeFeatures() {
  return (
    <section
      className="features-section section-shell section-block"
      id="features"
    >
      <SectionHeading
        title="Everything You Need. All in One Place."
        description="Powerful features designed for every aspect of Jain life."
      />

      <div className="features-grid">
        {features.map(({ name, description, icon: Icon, color }) => (
          <a
            href={name === "Events" ? "/events" : "/features"}
            className="feature-card"
            key={name}
          >
            <div className={`feature-icon ${color}`}>
              <Icon size={27} strokeWidth={2.1} />
            </div>
            <h3>{name}</h3>
            <p>{description}</p>
            <span className="feature-arrow">
              <ArrowUpRight size={16} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function WhyJinANAM() {
  const values = [
    {
      title: "Connect",
      text: "Bringing together millions of Jain families, temples, monks, and organizations worldwide.",
      icon: Users,
      color: "blue",
    },
    {
      title: "Preserve",
      text: "Preserving our rich heritage, values, and traditions for future generations.",
      icon: ShieldCheck,
      color: "green",
    },
    {
      title: "Empower",
      text: "Empowering individuals and communities through technology, knowledge, and seva.",
      icon: HandHeart,
      color: "orange",
    },
  ];

  return (
    <section
      className="why-section section-shell section-block"
      id="about"
    >
      <div className="why-art">
        <div className="temple-image-wrap">
          <img
            src="/images/T1.jpg"
            alt="Jain temple and spiritual heritage"
          />
        </div>
        <div className="heritage-caption">
          <span className="heritage-mark">
            <Sparkles size={18} />
          </span>
          <p>
            Connected by faith.
            <br />
            <strong>United by values.</strong>
          </p>
        </div>
      </div>

      <div className="why-content">
        <SectionHeading
          title="Why JiNANAM?"
          description="Technology with a purpose. Community at heart."
        />

        <div className="values-grid">
          {values.map(({ title, text, icon: Icon, color }) => (
            <article className="value-card" key={title}>
              <div className={`value-icon ${color}`}>
                <Icon size={29} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a
                href="/community"
                onClick={(event) => {
                  event.preventDefault();
                  navigateToPage("/community");
                }}
              >
                Learn More <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorldMap() {
  const pins = [
    { label: "North America", className: "pin-one" },
    { label: "USA", className: "pin-two" },
    { label: "Europe", className: "pin-three" },
    { label: "India", className: "pin-four" },
    { label: "Africa", className: "pin-five" },
    { label: "Australia", className: "pin-six" },
    { label: "Asia", className: "pin-seven" },
  ];

  return (
    <div
      className="map-visual"
      aria-label="Illustration of Jain communities around the world"
    >
      <img
        src="/images/g.jpg"
        alt="World map illustrating the global Jain community"
      />
      <div className="map-overlay">
        {pins.map((pin) => (
          <span
            key={pin.label}
            className={`map-pin ${pin.className}`}
            title={pin.label}
          >
            <MapPin size={23} fill="currentColor" />
          </span>
        ))}
      </div>
      <div className="map-label">
        <Globe2 size={16} />
        One community, across the world
      </div>
    </div>
  );
}

function HomeCommunity() {
  const countries = [
    "India",
    "USA",
    "UK",
    "Canada",
    "Australia",
    "UAE",
    "Singapore",
    "Africa",
  ];

  return (
    <section
      className="community-section section-shell section-block"
      id="community"
    >
      <div className="community-intro">
        <span className="section-eyebrow">CONNECTED WORLDWIDE</span>
        <h2>
          A Global Ecosystem
          <br />
          United in Faith
        </h2>
        <p>JiNANAM connects Jain communities across the globe.</p>
        <ul className="country-list">
          {countries.map((country) => (
            <li key={country}>{country}</li>
          ))}
        </ul>
        <a
          className="button button-primary"
          href="/community"
          onClick={(event) => {
            event.preventDefault();
            navigateToPage("/community");
          }}
        >
          Explore Communities <ArrowRight size={17} />
        </a>
      </div>
      <WorldMap />
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);

  const visible = testimonials.map(
    (_, index) => testimonials[(index + active) % testimonials.length]
  );

  return (
    <section className="testimonials-section section-shell section-block">
      <div className="testimonial-heading">
        <div>
          <span className="section-eyebrow">REAL CONNECTIONS</span>
          <h2>
            Loved by Thousands
            <br />
            Across the World
          </h2>
        </div>
        <div className="carousel-controls">
          <button
            aria-label="Previous testimonials"
            onClick={() =>
              setActive(
                (active + testimonials.length - 1) % testimonials.length
              )
            }
          >
            <ChevronLeft size={19} />
          </button>
          <button
            aria-label="Next testimonials"
            onClick={() =>
              setActive((active + 1) % testimonials.length)
            }
          >
            <ChevronRight size={19} />
          </button>
        </div>
      </div>

      <div className="testimonials-grid">
        {visible.map((item, index) => (
          <article
            className="testimonial-card"
            key={`${item.name}-${index}`}
          >
            <span className="quote-mark">“</span>
            <div className="testimonial-person">
              <div className={`testimonial-avatar testimonial-avatar-${index}`}>
                {item.initials}
              </div>
              <strong>{item.name}</strong>
            </div>
            <p>{item.quote}</p>
            <div className="stars" aria-label="Five stars">
              ★★★★★
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FakeQrCode({
  variant,
}: {
  variant: "android" | "ios";
}) {
  return (
    <div
      className={`qr-code qr-${variant}`}
      aria-label={`${variant} QR code illustration`}
    >
      <div className="qr-finder finder-one">
        <span />
      </div>
      <div className="qr-finder finder-two">
        <span />
      </div>
      <div className="qr-finder finder-three">
        <span />
      </div>
      <div className="qr-pattern" />
      <span className="qr-center">
        {variant === "android" ? "▶" : "●"}
      </span>
    </div>
  );
}

function PhoneMockup({
  screen,
}: {
  screen: "welcome" | "app";
}) {
  return (
    <div className={`phone-frame phone-${screen}`}>
      <div className="phone-side-button" />
      <div className="phone-hardware">
        <div className="phone-island" />
        <div className="phone-status">
          <span>9:41</span>
          <span>● ▰ ▰</span>
        </div>

        {screen === "welcome" ? (
          <div className="phone-welcome-screen">
            <div className="phone-brand">
              <img src="/logo.png" alt="JiNANAM" />
            </div>
            <div className="phone-artwork">
              <div className="phone-sun" />
              <div className="phone-temple">
                <Landmark size={66} />
              </div>
            </div>
            <span className="phone-kicker">WELCOME TO</span>
            <h3>JiNANAM</h3>
            <p>
              One Community.
              <br />
              Infinite Possibilities.
            </p>
            <span className="phone-small-copy">
              Connecting Jain families everywhere.
            </span>
            <button type="button">
              Get Started <ArrowRight size={13} />
            </button>
          </div>
        ) : (
          <div className="phone-app-screen">
            <div className="app-greeting">
              <span>Namaste 🙏</span>
              <Bell size={17} />
            </div>
            <h4>Welcome to JiNANAM</h4>
            <div className="app-search">
              <Search size={13} />
              Search services
            </div>
            <div className="app-feature-grid">
              {features.slice(0, 8).map(({ name, icon: Icon, color }) => (
                <div className="app-feature" key={name}>
                  <span className={`app-feature-icon ${color}`}>
                    <Icon size={18} />
                  </span>
                  <small>{name}</small>
                </div>
              ))}
            </div>
            <div className="app-bottom-nav">
              <House size={16} />
              <Globe2 size={16} />
              <Heart size={16} />
              <CircleUserRound size={16} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DownloadSection() {
  return (
    <section
      className="download-section section-shell"
      id="download"
    >
      <div className="download-copy">
        <span className="download-eyebrow">
          <Smartphone size={15} />
          YOUR COMMUNITY, ON THE GO
        </span>
        <h2>
          Take JiNANAM
          <br />
          With You. Everywhere.
        </h2>
        <p>
          Download our app and stay connected anytime, anywhere.
        </p>

        <div className="store-buttons">
          <a
            href="#download"
            onClick={(event) => event.preventDefault()}
            className="store-button"
          >
            <Play size={24} fill="currentColor" />
            <span>
              <small>GET IT ON</small>
              <strong>Google Play</strong>
            </span>
          </a>
          <a
            href="#download"
            onClick={(event) => event.preventDefault()}
            className="store-button"
          >
            <span className="apple-symbol">●</span>
            <span>
              <small>Download on the</small>
              <strong>App Store</strong>
            </span>
          </a>
        </div>
      </div>

      <div className="phone-showcase">
        <PhoneMockup screen="welcome" />
        <PhoneMockup screen="app" />
      </div>

      <div className="scan-card">
        <h3>Scan to Download</h3>
        <p>Available on Android & iOS</p>
        <div className="qr-pair">
          <div className="qr-item">
            <FakeQrCode variant="android" />
            <span>Google Play</span>
          </div>
          <div className="qr-item">
            <FakeQrCode variant="ios" />
            <span>App Store</span>
          </div>
        </div>
        <span className="qr-note">Download links coming soon</span>
      </div>
    </section>
  );
}

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("Thank you for your interest!");
    setEmail("");
  };

  const groups = [
    {
      title: "Quick Links",
      links: [
        "Home",
        "About Us",
        "Features",
        "Community",
        "Events",
        "Resources",
        "Contact",
      ],
    },
    {
      title: "Our Services",
      links: [
        "Monk Tracking",
        "Temple Management",
        "Donations",
        "Pathshalas",
        "Learning",
        "Events",
        "Matrimony",
        "Jobs & Property",
      ],
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "Privacy Policy",
        "Terms of Service",
        "Community Guidelines",
        "FAQs",
      ],
    },
  ];

  const footerGo = (label: string) => {
    const pageRoutes: Record<string, string> = {
      Home: "/",
      "About Us": "/about",
      Features: "/features",
      Community: "/community",
      Events: "/events",
    };

    if (pageRoutes[label]) {
      navigateToPage(pageRoutes[label]);
      return;
    }

    if (label === "Resources") {
      navigateToPage("/features");
      return;
    }

    const known: Record<string, string> = {
      Contact: "contact",
    };

    const target = known[label];

    if (target) {
      if (window.location.pathname !== "/") {
        window.location.href = `/#${target}`;
        return;
      }

      document
        .getElementById(target)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main section-shell">
        <div className="footer-brand-column">
          <a
            className="footer-logo"
            href="/"
            onClick={(event) => {
              event.preventDefault();
              footerGo("Home");
            }}
          >
            <img src="/logo.png" alt="JiNANAM Foundation" />
          </a>

          <p>
            Building a united, empowered, and compassionate Jain community
            through technology and seva.
          </p>

          <div className="social-links">
            <a
              href="#contact"
              aria-label="Facebook"
              onClick={(event) => event.preventDefault()}
            >
              <span className="social-letter">f</span>
            </a>
            <a
              href="#contact"
              aria-label="Instagram"
              onClick={(event) => event.preventDefault()}
            >
              <span className="social-letter">◎</span>
            </a>
            <a
              href="#contact"
              aria-label="YouTube"
              onClick={(event) => event.preventDefault()}
            >
              <span className="social-letter">▶</span>
            </a>
            <a
              href="#contact"
              aria-label="LinkedIn"
              onClick={(event) => event.preventDefault()}
            >
              <span className="social-letter">in</span>
            </a>
          </div>
        </div>

        {groups.map((group) => (
          <div className="footer-links-column" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.links.map((link) => (
                <li key={link}>
                  <a
                    href={
                      link === "About Us"
                        ? "/about"
                        : link === "Features"
                          ? "/features"
                          : link === "Community"
                            ? "/community"
                            : link === "Events"
                              ? "/events"
                              : link === "Home"
                                ? "/"
                                : `#${link.toLowerCase().replaceAll(" ", "-")}`
                    }
                    onClick={(event) => {
                      event.preventDefault();
                      footerGo(link);
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-newsletter">
          <h3>Stay Updated</h3>
          <p>
            Subscribe to our newsletter for the latest updates.
          </p>

          <form onSubmit={handleSubscribe}>
            <label className="sr-only" htmlFor="newsletter-email">
              Your email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <button type="submit" aria-label="Subscribe">
              <ArrowRight size={18} />
            </button>
          </form>

          {message && (
            <span className="newsletter-message">{message}</span>
          )}
        </div>
      </div>

      <div className="footer-contact-strip section-shell">
        <span>
          <MapPin size={16} /> Mulund, Mumbai, Maharashtra, India
        </span>
        <span>
          <Globe2 size={16} /> www.JINANAM.org
        </span>
        <span>
          <Mail size={16} /> Hello@jinanam.org
        </span>
      </div>

      <div className="footer-bottom">
        <div className="section-shell footer-bottom-inner">
          <span>
            © 2025 JiNANAM Foundation. All rights reserved.
          </span>
          <span>
            One Community. Infinite Possibilities.
            <span className="india-flag">🇮🇳</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const currentPath = window.location.pathname;

  const isAboutPage = currentPath === "/about";
  const isFeaturesPage = currentPath === "/features";
  const isCommunityPage = currentPath === "/community";
  const isEventsPage = currentPath === "/events";

  return (
    <div className="app">
      <Navbar />

      <main>
        {isAboutPage ? (
          <AboutUs />
        ) : isFeaturesPage ? (
          <FeaturesPage />
        ) : isCommunityPage ? (
          <CommunityPage />
        ) : isEventsPage ? (
          <EventPage />
        ) : (
          <>
            <Hero />
            <Statistics />
            <HomeFeatures />
            <WhyJinANAM />
            <HomeCommunity />
            <Testimonials />
            <DownloadSection />
          </>
        )}
      </main>

      <Footer />

      {!isAboutPage &&
        !isFeaturesPage &&
        !isCommunityPage &&
        !isEventsPage && (
          <button
            className="back-to-top"
            aria-label="Back to top"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          >
            <ArrowDown size={19} />
          </button>
        )}
    </div>
  );
}

export default App;
