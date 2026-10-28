
import {
  ArrowRight,
  Bell,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Compass,
  GraduationCap,
  Heart,
  HeartHandshake,
  Home,
  Landmark,
  MapPin,
  MessageCircle,
  Music2,
  Play,
  QrCode,
  ShieldCheck,
  Sparkles,
  Users,
  Utensils,
  Wallet,
  Waves,
} from "lucide-react";
import "./Features.css";

const features = [
  {
    title: "Monk Tracking",
    description:
      "Live location and travel updates of Jain monks for safety and seva.",
    icon: MapPin,
    color: "saffron",
  },
  {
    title: "Temple Management",
    description:
      "Manage temples, rituals, announcements, and daily activities.",
    icon: Landmark,
    color: "blue",
  },
  {
    title: "Dharamshala",
    description: "Find, manage and book dharamshala stays easily.",
    icon: Building2,
    color: "green",
  },
  {
    title: "Bhojanshala",
    description: "Locate bhojanshalas and seva meals in your area.",
    icon: Utensils,
    color: "orange",
  },
  {
    title: "Community Feed",
    description: "Stay updated with community news, updates and stories.",
    icon: Users,
    color: "purple",
  },
  {
    title: "Events",
    description: "Discover and participate in events happening near you.",
    icon: CalendarDays,
    color: "pink",
  },
  {
    title: "Learning",
    description: "Access Jain knowledge, scriptures, courses and more.",
    icon: BookOpen,
    color: "blue",
  },
  {
    title: "Pathshala",
    description: "A digital learning hub for kids and students of all ages.",
    icon: GraduationCap,
    color: "green",
  },
  {
    title: "Jain Music",
    description: "Enjoy devotional music, stotras, bhajans and spiritual podcasts.",
    icon: Music2,
    color: "orange",
  },
  {
    title: "Reels",
    description: "Explore short spiritual videos and inspirational content.",
    icon: Play,
    color: "pink",
  },
  {
    title: "Volunteer",
    description: "Connect with seva opportunities and volunteer with purpose.",
    icon: HeartHandshake,
    color: "green",
  },
  {
    title: "Donations",
    description: "Support temples, initiatives and causes with transparent giving.",
    icon: Wallet,
    color: "saffron",
  },
  {
    title: "Jobs",
    description: "Find job opportunities within the Jain community.",
    icon: BriefcaseBusiness,
    color: "blue",
  },
  {
    title: "Property",
    description: "Buy, sell or rent properties within the community.",
    icon: Home,
    color: "purple",
  },
  {
    title: "Matrimony",
    description: "A trusted Jain matrimonial platform for meaningful bonds.",
    icon: Heart,
    color: "pink",
  },
  {
    title: "Nearby Derasar",
    description: "Find nearby Derasars and get directions instantly.",
    icon: Compass,
    color: "orange",
  },
  {
    title: "Community Chat",
    description: "Connect in real time with community members.",
    icon: MessageCircle,
    color: "blue",
  },
  {
    title: "Bookings",
    description: "Book rooms, halls, facilities and seva services.",
    icon: CheckCircle2,
    color: "green",
  },
  {
    title: "Digital Passes",
    description: "Generate and manage digital passes for events and entry.",
    icon: QrCode,
    color: "purple",
  },
  {
    title: "Pilgrimage",
    description: "Explore and plan your sacred Jain yatra journeys.",
    icon: Sparkles,
    color: "saffron",
  },
  {
    title: "Tours",
    description: "Discover and book spiritual tours and group journeys.",
    icon: Compass,
    color: "green",
  },
];

function PhoneMockup({
  variant,
}: {
  variant: "home" | "community" | "seva";
}) {
  return (
    <div className={`feature-phone feature-phone-${variant}`}>
      <div className="phone-side-button phone-side-left" />
      <div className="phone-frame">
        <div className="phone-screen">
          <div className="phone-status">
            <span>9:41</span>
            <span className="phone-status-icons">
              <span className="phone-signal">▮▮▮</span>
              <span className="phone-battery" />
            </span>
          </div>

          <div className="phone-island" />

          {variant === "home" && (
            <>
              <div className="phone-app-header">
                <div>
                  <span className="phone-eyebrow">NAMASTE</span>
                  <h4>Welcome to JiNANAM</h4>
                </div>
                <span className="phone-avatar">J</span>
              </div>

              <div className="phone-welcome-card">
                <span className="phone-card-tag">YOUR JAIN COMMUNITY</span>
                <h3>One community. Countless connections.</h3>
                <p>Discover your community, wherever you are.</p>
                <div className="phone-card-decoration">
                  <Landmark size={45} strokeWidth={1.2} />
                </div>
              </div>

              <div className="phone-section-heading">
                <strong>Explore JiNANAM</strong>
                <span>View all</span>
              </div>

              <div className="phone-shortcuts">
                <div>
                  <span className="shortcut-icon shortcut-saffron">
                    <MapPin size={17} />
                  </span>
                  <small>Monks</small>
                </div>
                <div>
                  <span className="shortcut-icon shortcut-blue">
                    <Landmark size={17} />
                  </span>
                  <small>Temples</small>
                </div>
                <div>
                  <span className="shortcut-icon shortcut-green">
                    <BookOpen size={17} />
                  </span>
                  <small>Learning</small>
                </div>
                <div>
                  <span className="shortcut-icon shortcut-pink">
                    <Heart size={17} />
                  </span>
                  <small>Seva</small>
                </div>
              </div>

              <div className="phone-mini-heading">Coming up</div>
              <div className="phone-event-card">
                <div className="phone-event-date">
                  <strong>18</strong>
                  <span>NOV</span>
                </div>
                <div>
                  <strong>Community Gathering</strong>
                  <small>Connect, learn and celebrate</small>
                </div>
              </div>
            </>
          )}

          {variant === "community" && (
            <>
              <div className="phone-app-header">
                <div>
                  <span className="phone-eyebrow">STAY CONNECTED</span>
                  <h4>Community Feed</h4>
                </div>
                <span className="phone-round-icon">
                  <Bell size={16} />
                </span>
              </div>

              <div className="phone-feed-card">
                <div className="phone-feed-user">
                  <span className="phone-feed-avatar">J</span>
                  <div>
                    <strong>Jain Community</strong>
                    <small>Community update · 2h ago</small>
                  </div>
                </div>
                <div className="phone-feed-art">
                  <div className="feed-art-sun" />
                  <Landmark size={64} strokeWidth={1.1} />
                  <span>FAITH · CULTURE · COMMUNITY</span>
                </div>
                <h4>Keeping our traditions alive</h4>
                <p>
                  Share meaningful moments, learn from one another and stay
                  connected with your Jain community.
                </p>
                <div className="phone-feed-actions">
                  <span>
                    <Heart size={14} /> Like
                  </span>
                  <span>
                    <MessageCircle size={14} /> Comment
                  </span>
                </div>
              </div>

              <div className="phone-mini-heading">Discover more</div>
              <div className="phone-community-row">
                <span className="community-row-icon">
                  <CalendarDays size={18} />
                </span>
                <div>
                  <strong>Upcoming events</strong>
                  <small>Find gatherings near you</small>
                </div>
                <ChevronRight size={16} />
              </div>
              <div className="phone-community-row">
                <span className="community-row-icon community-row-green">
                  <HeartHandshake size={18} />
                </span>
                <div>
                  <strong>Find seva opportunities</strong>
                  <small>Make a meaningful difference</small>
                </div>
                <ChevronRight size={16} />
              </div>
            </>
          )}

          {variant === "seva" && (
            <>
              <div className="phone-app-header">
                <div>
                  <span className="phone-eyebrow">MAKE A DIFFERENCE</span>
                  <h4>Seva & Giving</h4>
                </div>
                <span className="phone-avatar phone-avatar-green">
                  <HeartHandshake size={18} />
                </span>
              </div>

              <div className="phone-seva-card">
                <div className="phone-seva-art">
                  <div className="seva-art-circle">
                    <HeartHandshake size={46} strokeWidth={1.3} />
                  </div>
                  <Sparkles className="seva-sparkle" size={20} />
                </div>
                <span className="phone-card-tag">SMALL ACTS. BIG IMPACT.</span>
                <h3>Let your seva make a difference.</h3>
                <p>Find ways to support the causes closest to your heart.</p>
                <div className="phone-fake-button">
                  Explore opportunities <ArrowRight size={14} />
                </div>
              </div>

              <div className="phone-mini-heading">Ways to participate</div>
              <div className="phone-seva-list">
                <span className="seva-list-icon">
                  <Landmark size={18} />
                </span>
                <div>
                  <strong>Temple initiatives</strong>
                  <small>Support your local temple</small>
                </div>
                <ChevronRight size={16} />
              </div>
              <div className="phone-seva-list">
                <span className="seva-list-icon seva-list-orange">
                  <Utensils size={18} />
                </span>
                <div>
                  <strong>Food & community seva</strong>
                  <small>Help serve those in need</small>
                </div>
                <ChevronRight size={16} />
              </div>
              <div className="phone-seva-list">
                <span className="seva-list-icon seva-list-purple">
                  <BookOpen size={18} />
                </span>
                <div>
                  <strong>Education & learning</strong>
                  <small>Help knowledge reach everyone</small>
                </div>
                <ChevronRight size={16} />
              </div>
            </>
          )}

          <div className="phone-bottom-nav">
            <span className="phone-nav-active">
              <Home size={15} />
              <small>Home</small>
            </span>
            <span>
              <Compass size={15} />
              <small>Explore</small>
            </span>
            <span>
              <Users size={15} />
              <small>Community</small>
            </span>
            <span>
              <Heart size={15} />
              <small>Profile</small>
            </span>
          </div>
        </div>
      </div>
      <div className="phone-side-button phone-side-right" />
    </div>
  );
}

export default function Features() {
  return (
    <div className="features-page">
      <section className="features-hero">
        <div className="features-hero-glow features-glow-one" />
        <div className="features-hero-glow features-glow-two" />

        <div className="features-container features-hero-content">
          <div className="features-eyebrow">
            <span className="eyebrow-line" />
            POWERING COMMUNITIES. ENRICHING LIVES.
            <span className="eyebrow-line" />
          </div>

          <div className="features-hero-emblem">
            <span className="emblem-ring">
              <Landmark size={29} strokeWidth={1.5} />
            </span>
          </div>

          <h1>
            Everything the Jain Community Needs.
            <span> One Platform.</span>
          </h1>

          <p className="features-hero-description">
            Discover powerful features designed to connect, serve, preserve and
            empower every Jain.
          </p>

          <a className="features-primary-button" href="#all-features">
            Explore Features <ArrowRight size={17} />
          </a>

          <div className="features-hero-note">
            <ShieldCheck size={16} />
            Built around community, culture and seva
          </div>
        </div>

        <div className="features-hero-bottom">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="features-catalog" id="all-features">
        <div className="features-container">
          <div className="features-section-heading">
            <span className="features-section-label">THE JINANAM ECOSYSTEM</span>
            <h2>
              One community.
              <br />
              <span>Many ways to connect.</span>
            </h2>
            <p>
              From spiritual learning to everyday community needs, find the
              services that bring Jain life closer together.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article
                  className="feature-card"
                  key={feature.title}
                  style={{ animationDelay: `${index * 35}ms` }}
                >
                  <div className={`feature-icon feature-icon-${feature.color}`}>
                    <Icon size={24} strokeWidth={1.7} />
                  </div>

                  <span className="feature-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>

                  <a
                    className="feature-learn-link"
                    href="#platform"
                    aria-label={`Learn more about ${feature.title}`}
                  >
                    Learn More <ArrowRight size={15} />
                  </a>
                </article>
              );
            })}
          </div>

          <div className="features-more-card">
            <div className="features-more-icon">
              <Sparkles size={24} />
            </div>
            <div>
              <span className="features-section-label">ALWAYS GROWING</span>
              <h3>And More</h3>
              <p>Many more features are coming to serve you better.</p>
            </div>
            <a href="#platform" className="features-more-link">
              Explore the platform <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="features-platform" id="platform">
        <div className="features-platform-decoration platform-decoration-one" />
        <div className="features-platform-decoration platform-decoration-two" />

        <div className="features-container platform-layout">
          <div className="platform-copy">
            <span className="features-section-label">
              YOUR COMMUNITY, IN YOUR POCKET
            </span>

            <h2>
              One Platform.
              <br />
              <span>Infinite Possibilities.</span>
            </h2>

            <p className="platform-description">
              JiNANAM brings every aspect of Jain life together to create a
              unified, empowered and connected community.
            </p>

            <div className="platform-benefits">
              <div className="platform-benefit">
                <span className="platform-benefit-icon">
                  <Users size={19} />
                </span>
                <div>
                  <h4>Stay connected</h4>
                  <p>Bring your community closer, wherever life takes you.</p>
                </div>
              </div>

              <div className="platform-benefit">
                <span className="platform-benefit-icon">
                  <HeartHandshake size={19} />
                </span>
                <div>
                  <h4>Serve with purpose</h4>
                  <p>Discover opportunities to give back through seva.</p>
                </div>
              </div>

              <div className="platform-benefit">
                <span className="platform-benefit-icon">
                  <BookOpen size={19} />
                </span>
                <div>
                  <h4>Preserve our heritage</h4>
                  <p>Keep Jain knowledge, traditions and values thriving.</p>
                </div>
              </div>
            </div>

            <a className="features-primary-button platform-cta" href="#all-features">
              Explore Platform <ArrowRight size={17} />
            </a>
          </div>

          <div
            className="platform-phones"
            aria-label="Illustrative JiNANAM mobile app prototypes"
          >
            <div className="platform-phone-backdrop" />
            <div className="platform-phone platform-phone-left">
              <PhoneMockup variant="community" />
            </div>
            <div className="platform-phone platform-phone-center">
              <PhoneMockup variant="home" />
            </div>
            <div className="platform-phone platform-phone-right">
              <PhoneMockup variant="seva" />
            </div>

            <div className="platform-floating-card">
              <span className="platform-floating-icon">
                <Heart size={17} fill="currentColor" />
              </span>
              <span>
                <strong>One community</strong>
                <small>Connected through seva</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="features-cta">
        <div className="features-cta-pattern" />
        <div className="features-container features-cta-content">
          <div className="features-cta-icon">
            <Waves size={25} />
          </div>

          <span className="features-section-label">
            CONNECT · EMPOWER · PRESERVE
          </span>

          <h2>
            Be Part of Something
            <span> Meaningful.</span>
          </h2>

          <p>
            Be part of a global movement to connect, empower and preserve Jain
            heritage.
          </p>

          <a className="features-cta-button" href="#all-features">
            Discover JiNANAM <ArrowRight size={17} />
          </a>

          <div className="features-cta-bottom-line" />
        </div>
      </section>
      <button
        className="about-back-top"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </div>
  );
}
