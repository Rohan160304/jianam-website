
import {
  Users,
  Settings,
  MapPinned,
  ShieldCheck,
  UserRound,
  Building2,
  CalendarDays,
  Bell,
  HeartHandshake,
  ClipboardCheck,
  Navigation,
  UserCheck,
  ArrowRight,
  CheckCircle2,
  Smartphone,
} from "lucide-react";

import "./4appinfo.css";

const apps = [
  {
    id: "member",
    number: "01",
    name: "JiNANAM Member",
    tagline: "Your Community. Always Connected.",
    description:
      "The JiNANAM Member App brings the Jain community closer by providing members with easy access to spiritual resources, community services, and everyday Jain activities. Stay connected with temples, organizations, events, and people wherever you are.",
    image:
      "/images/Jinanam%20Materials/splash%20screen/Member%20screen/JPEG/member-logo1.jpg",
    icon: Users,
    color: "member",
    features: [
      {
        icon: Building2,
        title: "Discover Organizations",
        description:
          "Explore temples, dharamshalas, sthanaks, Jain centers, and bhojanshalas.",
      },
      {
        icon: CalendarDays,
        title: "Events & Activities",
        description:
          "Stay updated with community events, programs, and activities.",
      },
      {
        icon: Bell,
        title: "Community Updates",
        description:
          "Receive important announcements, news, and notifications.",
      },
      {
        icon: HeartHandshake,
        title: "Connect & Participate",
        description:
          "Engage with Jain communities and participate in seva activities.",
      },
    ],
  },
  {
    id: "admin",
    number: "02",
    name: "JiNANAM Admin",
    tagline: "Manage Your Organization. Simplify Operations.",
    description:
      "The JiNANAM Admin App helps authorized administrators manage their organizations and community operations from one platform. It provides tools to coordinate members, manage activities, and keep organizational information organized.",
    image:
      "/images/Jinanam%20Materials/splash%20screen/Admin%20screen/JPEG/Jinanam Admin logo V6.jpg",
    icon: Settings,
    color: "admin",
    features: [
      {
        icon: Building2,
        title: "Organization Management",
        description:
          "Manage organization details, facilities, and important information.",
      },
      {
        icon: UserRound,
        title: "Member & Staff Management",
        description:
          "Manage member records, staff details, and assigned responsibilities.",
      },
      {
        icon: CalendarDays,
        title: "Events & Activities",
        description:
          "Coordinate organizational events, programs, and activities.",
      },
      {
        icon: ClipboardCheck,
        title: "Administrative Operations",
        description:
          "Access management tools to support daily organizational work.",
      },
    ],
  },
  {
    id: "tracking",
    number: "03",
    name: "JiNANAM Tracking",
    tagline: "Stay Informed. Stay Connected.",
    description:
      "The JiNANAM Tracking App is designed to support authorized tracking and coordination activities. It helps users access relevant location and movement information, making it easier to improve visibility and coordinate assigned responsibilities.",
    image:
      "/images/Jinanam%20Materials/splash%20screen/Tracking%20Screen/JPEG/tracking-logo1.jpg",
    icon: MapPinned,
    color: "tracking",
    features: [
      {
        icon: Navigation,
        title: "Location Tracking",
        description:
          "Support location-based tracking for authorized activities.",
      },
      {
        icon: MapPinned,
        title: "Location Visibility",
        description:
          "View relevant location information to support coordination.",
      },
      {
        icon: Users,
        title: "Better Coordination",
        description:
          "Help authorized teams stay informed about assigned activities.",
      },
      {
        icon: Bell,
        title: "Tracking Updates",
        description:
          "Stay updated with relevant tracking and activity information.",
      },
    ],
  },
  {
    id: "security",
    number: "04",
    name: "JiNANAM Security",
    tagline: "Safer Premises. Smarter Visitor Management.",
    description:
      "The JiNANAM Security App supports security staff and organizations in managing visitor activities. It helps maintain organized visitor records and supports entry verification and check-in and check-out processes.",
    image:
      "/images/Jinanam%20Materials/splash%20screen/Security%20screen/JPEG/security-logo1.jpg",
    icon: ShieldCheck,
    color: "security",
    features: [
      {
        icon: UserCheck,
        title: "Visitor Management",
        description:
          "Record and manage visitor information at the premises.",
      },
      {
        icon: ClipboardCheck,
        title: "Entry Verification",
        description:
          "Support visitor verification and entry procedures.",
      },
      {
        icon: CheckCircle2,
        title: "Check-in & Check-out",
        description:
          "Maintain organized records of visitor entry and exit.",
      },
      {
        icon: ShieldCheck,
        title: "Security Coordination",
        description:
          "Help security staff manage visitor activities more efficiently.",
      },
    ],
  },
];

export default function FourAppInfo() {
  return (
    <main className="four-app-page">
      <section className="four-app-hero">
        <div className="four-app-hero-glow four-app-glow-one" />
        <div className="four-app-hero-glow four-app-glow-two" />

        <div className="four-app-container four-app-hero-content">
          <div className="four-app-eyebrow">
            <Smartphone size={16} />
            THE JINANAM DIGITAL ECOSYSTEM
          </div>

          <h1>
            Four Powerful Apps.
            <span> One Connected Community.</span>
          </h1>

          <p>
            Discover the four dedicated JiNANAM applications designed to
            connect members, empower administrators, support tracking, and
            strengthen organizational security.
          </p>


          <div className="four-app-count">
            <span>04</span>
            <div>
              <strong>Dedicated Applications</strong>
              <small>One unified JiNANAM ecosystem</small>
            </div>
          </div>
        </div>
      </section>

      <section className="four-app-intro" id="jinanam-apps">
        <div className="four-app-container">
          <div className="four-app-section-heading">
            <span className="four-app-section-label">
              EXPLORE THE APPLICATIONS
            </span>
            <h2>
              Technology designed
              <span> for every role.</span>
            </h2>
            <p>
              Each JiNANAM app serves a dedicated purpose while contributing
              to a more connected, organized, and empowered Jain community.
            </p>
          </div>

          <div className="four-app-list">
            {apps.map((app) => {
              const AppIcon = app.icon;

              return (
                <article
                  className={`four-app-card four-app-${app.color}`}
                  id={`app-${app.id}`}
                  key={app.id}
                >
                  <div className="four-app-card-top">
                    <div className="four-app-logo-wrap">
                      <img
                        src={app.image}
                        alt={`${app.name} logo`}
                        className="four-app-logo"
                        loading="lazy"
                      />
                    </div>

                    <div className="four-app-card-heading">
                      <span className="four-app-number">
                        APPLICATION {app.number}
                      </span>
                      <h3>{app.name}</h3>
                      <h4>{app.tagline}</h4>
                    </div>

                    <div className="four-app-main-icon">
                      <AppIcon size={27} strokeWidth={1.7} />
                    </div>
                  </div>

                  <p className="four-app-description">
                    {app.description}
                  </p>

                  <div className="four-app-feature-heading">
                    <span>KEY FEATURES</span>
                    <span className="four-app-feature-line" />
                  </div>

                  <div className="four-app-feature-grid">
                    {app.features.map((feature) => {
                      const FeatureIcon = feature.icon;

                      return (
                        <div
                          className="four-app-feature"
                          key={feature.title}
                        >
                          <div className="four-app-feature-icon">
                            <FeatureIcon size={19} />
                          </div>

                          <div>
                            <h5>{feature.title}</h5>
                            <p>{feature.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="four-app-card-footer">
                    <span>
                      <CheckCircle2 size={16} />
                      Part of the JiNANAM ecosystem
                    </span>
                    <a href="#jinanam-apps" aria-label={`Back to ${app.name}`}>
                      <ArrowRight size={17} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="four-app-bottom-cta">
        <div className="four-app-container">
          <div className="four-app-cta-icon">
            <HeartHandshake size={28} />
          </div>
          <span>ONE ECOSYSTEM. MANY POSSIBILITIES.</span>
          <h2>
            Connected by Technology.
            <br />
            <strong>United by Community.</strong>
          </h2>
          <p>
            JiNANAM brings people, organizations, and community services
            together through one connected digital ecosystem.
          </p>
          <a href="#jinanam-apps">
            Explore the Four Apps <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <button
        className="four-app-back-top"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </main>
  );
}
