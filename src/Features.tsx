import {
  Users,
  MapPin,
  Landmark,
  BookOpen,
  Heart,
  HeartHandshake,
  CalendarDays,
  Utensils,
  ArrowRight,
  Bell,
  MessageCircle,
  ChevronRight,
  Sparkles,
  Home,
  Compass,
  Route,
  ShieldAlert,
  Building2,
  MapPinned,
  Newspaper,
  Vote,
  Megaphone,
  Armchair,
  BedDouble,
  BriefcaseBusiness,
  CreditCard,
  Gift,
  ShieldCheck,
  UserRound,
  Wallet,
  Waves,
  Music,
  Video,
  Clock3,
} from "lucide-react";

import "./Features.css";

const featureCategories = [
  {
    category: "Monk & Sadhvi Management",
    description:
      "Stay connected with Jain monks and sadhvis through tracking, profiles and seva services.",
    features: [
      {
        number: "01",
        title: "Monk & Sadhvi Profiles",
        description:
          "Explore profiles and important information about Jain monks and sadhvis.",
        icon: Users,
        color: "saffron",
      },
      {
        number: "02",
        title: "Live Monk Tracking",
        description:
          "View live location and travel updates of Jain monks for safety and seva.",
        icon: MapPin,
        color: "blue",
      },
      {
        number: "03",
        title: "Vihar Seva",
        description:
          "Coordinate and support vihar seva activities for Jain monks and sadhvis.",
        icon: HeartHandshake,
        color: "green",
      },
      {
        number: "04",
        title: "99 Tour Tracking",
        description:
          "Follow important location and travel updates during 99 Yatra tours.",
        icon: Route,
        color: "orange",
      },
      {
        number: "05",
        title: "Monk SOS & Emergency Alerts",
        description:
          "Support emergency communication with alerts for authorized users.",
        icon: ShieldAlert,
        color: "pink",
      },
    ],
  },
  {
    category: "Religious Places & Facilities",
    description:
      "Discover Jain religious places, facilities and essential services near you.",
    features: [
      {
        number: "06",
        title: "Temple Directory",
        description:
          "Discover Jain temples and access their important information.",
        icon: Landmark,
        color: "saffron",
      },
      {
        number: "07",
        title: "Dharamshala Directory",
        description:
          "Find dharamshalas and explore available accommodation facilities.",
        icon: Building2,
        color: "blue",
      },
      {
        number: "08",
        title: "Jain Centers",
        description:
          "Explore Jain centers and connect with local Jain organizations.",
        icon: Users,
        color: "green",
      },
      {
        number: "09",
        title: "Sthanak Directory",
        description:
          "Find Sthanaks and access their location and organization details.",
        icon: Landmark,
        color: "orange",
      },
      {
        number: "10",
        title: "Bhojanshala Directory",
        description:
          "Locate Jain bhojanshalas and find information about meal facilities.",
        icon: Utensils,
        color: "pink",
      },
      {
        number: "11",
        title: "Nearby Jain Places",
        description:
          "Discover nearby temples, dharamshalas and other Jain places.",
        icon: MapPinned,
        color: "purple",
      },
    ],
  },
  {
    category: "Community & Engagement",
    description:
      "Stay informed, participate in activities and connect with the Jain community.",
    features: [
      {
        number: "12",
        title: "Community Feed",
        description:
          "Stay updated with community posts, stories and shared information.",
        icon: Newspaper,
        color: "saffron",
      },
      {
        number: "13",
        title: "Community Pages",
        description:
          "Explore dedicated pages for Jain organizations and communities.",
        icon: Users,
        color: "blue",
      },
      {
        number: "14",
        title: "Polls",
        description:
          "Participate in community polls and share your opinions.",
        icon: Vote,
        color: "green",
      },
      {
        number: "15",
        title: "Announcements",
        description:
          "Receive important announcements and updates from organizations.",
        icon: Megaphone,
        color: "orange",
      },
      {
        number: "16",
        title: "News & Updates",
        description:
          "Stay informed about Jain community news and important updates.",
        icon: Newspaper,
        color: "pink",
      },
      {
        number: "17",
        title: "Events",
        description:
          "Discover upcoming religious, cultural and community events.",
        icon: CalendarDays,
        color: "purple",
      },
      {
        number: "18",
        title: "Tours & Yatras",
        description:
          "Explore spiritual tours and plan Jain pilgrimage journeys.",
        icon: Route,
        color: "blue",
      },
      {
        number: "19",
        title: "99 Tours",
        description:
          "Discover and follow organized 99 Yatra pilgrimage tours.",
        icon: MapPin,
        color: "saffron",
      },
    ],
  },
  {
    category: "Seva & Community Management",
    description:
      "Make community operations easier through digital management and seva services.",
    features: [
      {
        number: "20",
        title: "Volunteer Management",
        description:
          "Connect volunteers with seva opportunities and manage participation.",
        icon: HeartHandshake,
        color: "green",
      },
      {
        number: "21",
        title: "Staff Management",
        description:
          "Manage staff members, responsibilities and organizational access.",
        icon: BriefcaseBusiness,
        color: "blue",
      },
      {
        number: "22",
        title: "Visitor Management",
        description:
          "Manage visitor entries, check-ins and check-outs at organizations.",
        icon: UserRound,
        color: "orange",
      },
      {
        number: "23",
        title: "Donations",
        description:
          "Support temples, community initiatives and seva causes through donations.",
        icon: Wallet,
        color: "saffron",
      },
      {
        number: "24",
        title: "Offers & Benefits",
        description:
          "Discover offers, benefits and services available within the community.",
        icon: Gift,
        color: "purple",
      },
    ],
  },
  {
    category: "Digital Services",
    description:
      "Access convenient digital services for bookings, identification and facilities.",
    features: [
      {
        number: "25",
        title: "Dharamshala Booking",
        description:
          "Submit booking requests and manage dharamshala accommodation.",
        icon: BedDouble,
        color: "blue",
      },
      {
        number: "26",
        title: "Digital ID Card",
        description:
          "Access your digital identification card through the platform.",
        icon: CreditCard,
        color: "green",
      },
      {
        number: "27",
        title: "Doli Booking",
        description:
          "Access doli booking services for pilgrimage and travel assistance.",
        icon: Armchair,
        color: "orange",
      },
    ],
  },
];


const comingSoonCategories = [
  {
    category: "Spiritual Learning & Entertainment",
    description:
      "Explore upcoming digital experiences for spiritual learning, music and inspirational content.",
    features: [
      {
        number: "01",
        title: "Jain Learning",
        description:
          "Explore Jain teachings, educational resources and spiritual knowledge.",
        icon: BookOpen,
      },
      {
        number: "02",
        title: "Jain Music",
        description:
          "Enjoy devotional music, Jain bhajans and spiritual audio content.",
        icon: Music,
      },
      {
        number: "03",
        title: "Spiritual Reels",
        description:
          "Discover short videos featuring Jain values, teachings and inspiration.",
        icon: Video,
      },
    ],
  },
  {
    category: "Community & Lifestyle",
    description:
      "Discover upcoming services designed to support important aspects of community life.",
    features: [
      {
        number: "04",
        title: "Matrimony",
        description:
          "Connect with the Jain community to explore meaningful matrimonial connections.",
        icon: Heart,
      },
      {
        number: "05",
        title: "Jobs & Careers",
        description:
          "Explore career opportunities and professional connections within the community.",
        icon: BriefcaseBusiness,
      },
      {
        number: "06",
        title: "Property",
        description:
          "Discover property-related opportunities and services within the community.",
        icon: Building2,
      },
    ],
  },
  {
    category: "Spiritual Activities",
    description:
      "More spiritual activity services and experiences are planned for the platform.",
    features: [
      {
        number: "07",
        title: "Varshitap",
        description:
          "Access information and updates related to Varshitap spiritual activities.",
        icon: Clock3,
      },
    ],
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
          {/* Status Bar */}
          <div className="phone-status">
            <span>9:41</span>
            <span className="phone-status-icons">
              <span className="phone-signal">▮▮▮</span>
              <span className="phone-battery" />
            </span>
          </div>

          <div className="phone-island" />

          {/* HOME SCREEN */}
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
                <span className="phone-card-tag">
                  YOUR JAIN COMMUNITY
                </span>

                <h3>One community. Countless connections.</h3>

                <p>
                  Discover your community, wherever you are.
                </p>

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

              <div className="phone-mini-heading">
                Coming up
              </div>

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

          {/* COMMUNITY SCREEN */}
          {variant === "community" && (
            <>
              <div className="phone-app-header">
                <div>
                  <span className="phone-eyebrow">
                    STAY CONNECTED
                  </span>
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
                  Share meaningful moments, learn from one another
                  and stay connected with your Jain community.
                </p>

                <div className="phone-feed-actions">
                  <span>
                    <Heart size={14} />
                    Like
                  </span>

                  <span>
                    <MessageCircle size={14} />
                    Comment
                  </span>
                </div>
              </div>

              <div className="phone-mini-heading">
                Discover more
              </div>

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

          {/* SEVA SCREEN */}
          {variant === "seva" && (
            <>
              <div className="phone-app-header">
                <div>
                  <span className="phone-eyebrow">
                    MAKE A DIFFERENCE
                  </span>
                  <h4>Seva & Giving</h4>
                </div>

                <span className="phone-avatar phone-avatar-green">
                  <HeartHandshake size={18} />
                </span>
              </div>

              <div className="phone-seva-card">
                <div className="phone-seva-art">
                  <div className="seva-art-circle">
                    <HeartHandshake
                      size={46}
                      strokeWidth={1.3}
                    />
                  </div>

                  <Sparkles
                    className="seva-sparkle"
                    size={20}
                  />
                </div>

                <span className="phone-card-tag">
                  SMALL ACTS. BIG IMPACT.
                </span>

                <h3>Let your seva make a difference.</h3>

                <p>
                  Find ways to support the causes closest to your
                  heart.
                </p>

                <div className="phone-fake-button">
                  Explore opportunities
                  <ArrowRight size={14} />
                </div>
              </div>

              <div className="phone-mini-heading">
                Ways to participate
              </div>

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

          {/* BOTTOM NAVIGATION */}
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

      {/* FEATURES CATALOG */}
      <section className="features-catalog" id="all-features">
        <div className="features-container">
          
<div className="features-section-heading">
  <span className="features-section-label">
    THE JINANAM ECOSYSTEM
  </span>

  <h2>
    One community.
    <br />
    <span>Many ways to connect.</span>
  </h2>

  <p>
    From spiritual learning to everyday community needs, explore
    services that bring Jain life closer together.
  </p>
</div>

{/* CURRENTLY AVAILABLE FEATURES */}
<div className="features-status-heading">
  <div>
    <span className="features-status-label available-label">
      <span className="status-dot" />
      AVAILABLE NOW
    </span>

    <h2>Currently Available</h2>

    <p>
      Explore the features and services currently available on JiNANAM.
    </p>
  </div>

  <span className="features-status-count">
    27 Features
  </span>
</div>

{featureCategories.map((cat) => (
  <div className="feature-category" key={cat.category}>
    <div className="feature-category-heading">
      <div>
        <h3>{cat.category}</h3>
        <p>{cat.description}</p>
      </div>

      <span className="feature-category-count">
        {String(cat.features.length).padStart(2, "0")} Features
      </span>
    </div>

    <div className="features-grid">
      {cat.features.map((feature) => {
        const Icon = feature.icon;

        return (
          <article
            className="feature-card"
            key={feature.number}
          >
            <div
              className={`feature-icon feature-icon-${feature.color}`}
            >
              <Icon size={24} strokeWidth={1.7} />
            </div>

            <span className="feature-card-number">
              {feature.number}
            </span>

            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        );
      })}
    </div>
  </div>
))}

{/* COMING SOON FEATURES */}
<div className="features-coming-soon-section">
  <div className="features-status-heading">
    <div>
      <span className="features-status-label coming-soon-label">
        <Clock3 size={14} />
        COMING SOON
      </span>

      <h2>More Features on the Way</h2>

      <p>
        We are working on more experiences to make JiNANAM
        even more useful for the Jain community.
      </p>
    </div>

    <span className="features-status-count coming-soon-count">
      07 Features
    </span>
  </div>

  {comingSoonCategories.map((cat) => (
    <div className="feature-category" key={cat.category}>
      <div className="feature-category-heading">
        <div>
          <h3>{cat.category}</h3>
          <p>{cat.description}</p>
        </div>

        <span className="feature-category-count">
          {String(cat.features.length).padStart(2, "0")} Features
        </span>
      </div>

      <div className="features-grid">
        {cat.features.map((feature) => {
          const Icon = feature.icon;

          return (
            <article
              className="feature-card feature-coming-soon-card"
              key={feature.number}
            >
              <div className="feature-coming-soon-top">
                <div className="feature-icon feature-icon-purple">
                  <Icon size={24} strokeWidth={1.7} />
                </div>

                <span className="coming-soon-badge">
                  <Clock3 size={12} />
                  Coming Soon
                </span>
              </div>

              <span className="feature-card-number">
                {feature.number}
              </span>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          );
        })}
      </div>
    </div>
  ))}
</div>
</div>
      </section>

      {/* PLATFORM SECTION */}
      <section className="features-platform" id="platform">
        <div className="features-platform-decoration platform-decoration-one" />
        <div className="features-platform-decoration platform-decoration-two" />

        <div className="features-container platform-layout">
          <div className="platform-copy">
            <span className="features-section-label">
              YOUR COMMUNITY, IN YOUR POCKET
            </span>

            <h2>
              One Community.
              <br />
              <span>Many Possibilities.</span>
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
                  <p>
                    Bring your community closer, wherever life takes you.
                  </p>
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
                  <p>
                    Keep Jain knowledge, traditions and values thriving.
                  </p>
                </div>
              </div>
            </div>

            <a
              className="features-primary-button platform-cta"
              href="/4appinfo"
            >
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

      {/* FINAL CTA */}
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
