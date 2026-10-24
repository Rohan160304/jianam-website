import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Eye,
  Flag,
  Globe2,
  GraduationCap,
  HandHeart,
  Heart,
  Landmark,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import "./AboutUs.css";

const groups = [
  {
    title: "Temples",
    subtitle: "Sacred places",
    icon: Landmark,
    color: "orange",
  },
  {
    title: "Monks",
    subtitle: "Guiding lights",
    icon: HandHeart,
    color: "gold",
  },
  {
    title: "Families",
    subtitle: "Stronger together",
    icon: Users,
    color: "orange",
  },
  {
    title: "Youth",
    subtitle: "Future leaders",
    icon: GraduationCap,
    color: "green",
  },
  {
    title: "Volunteers",
    subtitle: "Selfless service",
    icon: HandHeart,
    color: "orange",
  },
  {
    title: "Global Network",
    subtitle: "Worldwide unity",
    icon: Globe2,
    color: "purple",
  },
];

const journey = [
  {
    year: "2023",
    title: "Foundation",
    description:
      "JiNANAM Foundation was established with a simple yet powerful vision.",
    icon: Flag,
    color: "blue",
  },
  {
    year: "2024",
    title: "Vision",
    description:
      "We defined our vision of a unified global Jain digital ecosystem.",
    icon: Eye,
    color: "green",
  },
  {
    year: "2024",
    title: "Mission",
    description:
      "We launched our mission to connect, empower, and preserve.",
    icon: Target,
    color: "orange",
  },
  {
    year: "2024",
    title: "Technology",
    description:
      "We built the technology that brings communities together.",
    icon: Building2,
    color: "purple",
  },
  {
    year: "2025",
    title: "Community",
    description:
      "Thousands joined our hands and the network grew globally.",
    icon: Users,
    color: "coral",
  },
  {
    year: "Beyond",
    title: "Future",
    description:
      "Continuing our journey towards a better, united and empowered future.",
    icon: Sparkles,
    color: "blue",
  },
];

const impact = [
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
    number: "500+",
    label: "Cities Connected",
    icon: Building2,
    color: "teal",
  },
  {
    number: "100+",
    label: "Countries Reached",
    icon: Globe2,
    color: "blue",
  },
  {
    number: "Countless",
    label: "Lives Impacted",
    icon: Heart,
    color: "gold",
  },
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "Build",
    years: "2023 - 2024",
    description:
      "Strengthening the platform foundation and core community modules.",
    color: "green",
    completed: true,
  },
  {
    phase: "Phase 2",
    title: "Connect",
    years: "2024 - 2025",
    description:
      "Expanding connectivity with global communities and organizations.",
    color: "coral",
    completed: true,
  },
  {
    phase: "Phase 3",
    title: "Empower",
    years: "2025 - 2026",
    description:
      "Empowering youth, volunteers and leaders with digital tools and opportunities.",
    color: "purple",
    completed: true,
  },
  {
    phase: "Phase 4",
    title: "Evolve",
    years: "2026 & Beyond",
    description:
      "Continuously evolving with technology for a better tomorrow.",
    color: "blue",
    completed: false,
  },
];

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



function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-inner">
        <div className="about-hero-copy">
          <span className="about-eyebrow">ABOUT JINANAM FOUNDATION</span>

          <h1>
            Building the Future
            <br />
            of <span>Jain Communities.</span>
          </h1>

          <p>
            JiNANAM Foundation is a global digital ecosystem dedicated to
            connecting, empowering, and preserving Jain values, heritage, and
            way of life.
          </p>

          <div className="about-hero-buttons">
            <button
              className="about-button about-primary-button about-large-button"
              onClick={() =>
                document
                  .getElementById("mission")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Our Mission
              <ArrowRight size={17} />
            </button>

            <button
              className="about-button about-outline-button about-large-button"
              onClick={() =>
                (window.location.href = "/#features")
              }
            >
              Explore Platform
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="about-trust">
            <span>Trusted by thousands across the world</span>

            <div className="about-trust-row">
              <div className="about-mini-avatars">
                <span>R</span>
                <span>J</span>
                <span>A</span>
                <span>M</span>
                <span>P</span>
              </div>

              <div>
                <strong>5M+</strong>
                <small>Global Community</small>
              </div>
            </div>
          </div>
        </div>

        <div className="about-hero-image">
          <div className="hero-image-glow" />

          <img
            src="/images/A1.png"
            alt="Jain community, monks and families"
          />

          <div className="hero-decoration decoration-one" />
          <div className="hero-decoration decoration-two" />
          <div className="hero-decoration decoration-three" />
        </div>
      </div>
    </section>
  );
}

function CommunityGroups() {
  return (
    <section className="about-groups">
      <div className="about-groups-inner">
        {groups.map(({ title, subtitle, icon: Icon, color }) => (
          <div className="about-group" key={title}>
            <div className={`about-group-icon ${color}`}>
              <Icon size={22} />
            </div>

            <div>
              <strong>{title}</strong>
              <span>{subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MissionVisionValues() {
  return (
    <section className="about-section about-mvv" id="mission">
      <div className="mvv-card">
        <div className="mvv-icon blue">
          <Target size={27} />
        </div>

        <span className="mvv-label">OUR MISSION</span>

        <p>
          To create a unified digital platform that connects Jain
          individuals, families, temples, monks, organizations, and communities
          worldwide â€” preserving our heritage while empowering future
          generations.
        </p>

        <a href="#journey">
          Learn More <ArrowRight size={14} />
        </a>
      </div>

      <div className="mvv-card">
        <div className="mvv-icon green">
          <Eye size={27} />
        </div>

        <span className="mvv-label">OUR VISION</span>

        <p>
          A world where every Jain, everywhere, is connected to their roots,
          culture, community, and values through the power of technology.
        </p>

        <a href="#journey">
          Learn More <ArrowRight size={14} />
        </a>
      </div>

      <div className="mvv-card">
        <div className="mvv-icon orange">
          <Sparkles size={27} />
        </div>

        <span className="mvv-label">OUR VALUES</span>

        <div className="values-list">
          <div>
            <strong>Ahimsa</strong>
            <span>Non-violence in thought, word & deed</span>
          </div>

          <div>
            <strong>Anekant</strong>
            <span>Embracing multiple perspectives</span>
          </div>

          <div>
            <strong>Seva</strong>
            <span>Selfless service to society</span>
          </div>

          <div>
            <strong>Integrity</strong>
            <span>Transparency in everything we do</span>
          </div>

          <div>
            <strong>Unity</strong>
            <span>One community, one purpose</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="about-section journey-section" id="journey">
      <div className="about-section-heading">
        <h2>Our Journey</h2>
        <p>From a simple idea to a global movement.</p>
      </div>

      <div className="journey-timeline">
        <div className="journey-line" />

        {journey.map(
          ({ year, title, description, icon: Icon, color }, index) => (
            <article className="journey-item" key={`${title}-${index}`}>
              <div className={`journey-icon ${color}`}>
                <Icon size={25} />
              </div>

              <strong>{title}</strong>
              <span className="journey-year">{year}</span>

              <p>{description}</p>
            </article>
          )
        )}
      </div>
    </section>
  );
}

function CommunityImpact() {
  return (
    <section className="about-section impact-section">
      <div className="impact-heading">
        <h2>Our Community Impact</h2>
        <p>Numbers that inspire us to do more.</p>
      </div>

      <div className="impact-grid">
        {impact.map(({ number, label, icon: Icon, color }) => (
          <div className="impact-card" key={label}>
            <div className={`impact-icon ${color}`}>
              <Icon size={22} />
            </div>

            <div>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FoundationNetwork() {
  return (
    <section className="about-section foundation-network">
      <div className="foundation-card">
        <h2>Meet the Foundation</h2>

        <p>
          A passionate team of volunteers, leaders, and technologists
          dedicated to serve the Jain community.
        </p>

        <div className="foundation-people">
          <div className="foundation-person person-one">
            <img src="/images/F1.jpg" alt="Foundation member" />
          </div>

          <div className="foundation-person person-two">
            <img src="/images/F2.jpg" alt="Foundation member" />
          </div>

          <div className="foundation-person person-three">
            <img src="/images/F3.jpg" alt="Foundation member" />
          </div>

          <div className="foundation-person person-four">
            <img src="/images/F4.jpg" alt="Foundation member" />
          </div>

          <div className="foundation-person person-five">
            <img src="/images/F5.jpg" alt="Foundation member" />
          </div>
        </div>

        <button
          className="about-button about-primary-button foundation-button"
          onClick={() => (window.location.href = "/#contact")}
        >
          Our Team <ArrowRight size={15} />
        </button>
      </div>

      <div className="network-card">
        <div className="network-heading">
          <h2>Global Jain Network</h2>
          <p>Uniting Jain communities across the globe.</p>
        </div>

        <div className="network-map">
          <div className="network-map-inner">
          <img
            src="/images/g.jpg"
            alt="World map outline showing the global Jain network"
            className="network-map-image"
          />

        <div className="network-map">
          <div className="map-dots map-dot-one" />
          <div className="map-dots map-dot-two" />
          <div className="map-dots map-dot-three" />
          <div className="map-dots map-dot-four" />
          <div className="map-dots map-dot-five" />
          <div className="map-dots map-dot-six" />

          <div className="map-continent map-north" />
          <div className="map-continent map-south" />
          <div className="map-continent map-europe" />
          <div className="map-continent map-africa" />
          <div className="map-continent map-asia" />
          <div className="map-continent map-australia" />
        </div>
      </div>
        <ul className="country-network-list">
          {countries.map((country, index) => (
            <li key={country}>
              <span className={`country-dot country-${index + 1}`} />
              {country}
            </li>
          ))}
        </ul>

        <span className="many-more">And many more...</span>
      </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section className="about-section roadmap-section">
      <div className="about-section-heading">
        <h2>Future Roadmap</h2>
        <p>Building the future with innovation, inclusivity and integrity.</p>
      </div>

      <div className="roadmap-grid">
        {roadmap.map(
          ({ phase, title, years, description, color, completed }) => (
            <article className="roadmap-card" key={phase}>
              <div className="roadmap-top">
                <div className={`roadmap-icon ${color}`}>
                  {completed ? (
                    <CheckCircle2 size={20} />
                  ) : (
                    <Sparkles size={20} />
                  )}
                </div>

                <div>
                  <span>{phase}</span>
                  <h3>{title}</h3>
                </div>
              </div>

              <p>{description}</p>

              <div className="roadmap-bottom">
                <span>{years}</span>
                <CheckCircle2
                  size={15}
                  className={completed ? "roadmap-check" : "roadmap-future"}
                />
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
}

function JoiningHandsBanner() {
  return (
    <section className="joining-banner">
      <div className="joining-content">
        <h2>
          Together, let's build a stronger,
          <br />
          united and empowered Jain world.
        </h2>

        <p>One Community. Infinite Possibilities.</p>
      </div>

      <div className="joining-hands">
        <div className="hands-glow" />
        <div className="hands-symbol">ðŸ™</div>
      </div>

      <button
        className="about-button joining-button"
        onClick={() => (window.location.href = "/#contact")}
      >
        Join Us Today
        <ArrowRight size={15} />
      </button>
    </section>
  );
}



export default function AboutUs() {
  return (
    <div className="about-page">
      

      <main>
        <AboutHero />
        <CommunityGroups />
        <MissionVisionValues />
        <Journey />
        <CommunityImpact />
        <FoundationNetwork />
        <Roadmap />
        <JoiningHandsBanner />
      </main>

      

      <button
        className="about-back-top"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        â†‘
      </button>
    </div>
  );
}
