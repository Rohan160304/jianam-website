
import React from "react";
import "./community.css";

/* =========================================
   COMMUNITY IMAGES
   Images are stored in public/images/
========================================= */

const image = (filename: string) => `/images/${filename}`;

/* =========================================
   COMMUNITY DATA
========================================= */

const communities = [
  {
    title: "Jainity",
    members: "1.2M+ Members",
    description:
      "A global community celebrating Jain identity, values, culture and everyday inspiration.",
    image: "Jain temple.jpg",
    action: "Visit Community",
    whatsapp: true,
  },
  {
    title: "Youth Groups",
    members: "850K+ Members",
    description:
      "Empowering young Jains to lead, innovate and create a positive impact in the world.",
    image: "Youth group.png",
    action: "Visit Community",
    whatsapp: true,
  },
  {
    title: "Women's Groups",
    members: "600K+ Members",
    description:
      "Stronger together! A community for women to connect, grow and uplift each other.",
    image: "Womens group.png",
    action: "Visit Community",
    whatsapp: true,
  },
  {
    title: "Temple Communities",
    members: "1M+ Members",
    description:
      "Stay connected with your temple activities, updates, seva opportunities and events.",
    image: "Temple.png",
    action: "Visit Community",
    whatsapp: true,
  },
  {
    title: "Volunteer Groups",
    members: "750K+ Members",
    description:
      "Serve selflessly, create impact and be the change in your community.",
    image: "Hands.png",
    action: "Visit Community",
    whatsapp: true,
  },
  {
    title: "Pathshala Groups",
    members: "450K+ Members",
    description:
      "Nurturing young minds with Jain knowledge, values, stories and life lessons.",
    image: "Pathashala.png",
    action: "Visit Community",
    whatsapp: true,
  },
  {
    title: "Bhakti & Music",
    members: "500K+ Members",
    description:
      "Spiritual melodies, bhajans, stotras and devotional music that touch the soul.",
    image: "Music clubs.png",
    action: "Visit Community",
    whatsapp: true,
  },
  {
    title: "Pilgrimage Groups",
    members: "350K+ Members",
    description:
      "Connect with yatris, share experiences and plan journeys to sacred places.",
    image: "pilgrimage group.png",
    action: "Visit Community",
    whatsapp: true,
  },
];

const statistics = [
  {
    value: "5M+",
    label: "Global Members",
    icon: "single.jpg",
  },
  {
    value: "1000+",
    label: "Active Communities",
    icon: "users.jpg",
  },
  {
    value: "75+",
    label: "Countries",
    icon: "Location.png",
  },
  {
    value: "50+",
    label: "Languages",
    icon: "L.png",
  },
];

/* =========================================
   WHATSAPP ICON
========================================= */

const WhatsAppIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="community-button-icon"
    fill="none"
  >
    <path
      d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.8Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path
      d="M8.4 7.8c.2-.4.4-.4.7-.4h.4c.2 0 .3.1.4.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.3 0 .6.5.9 1.2 1.5 2.1 1.9.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.2.3.4 0 .3-.2 1.1-.7 1.5-.5.4-1.1.6-1.8.4-1-.2-2.2-.7-3.5-1.9-1.1-1-1.8-2.3-2-3.2-.2-.9.1-1.7.5-2.1Z"
      fill="currentColor"
    />
  </svg>
);

/* =========================================
   COMMUNITY PAGE
========================================= */

const Community: React.FC = () => {
  const handleCommunityAction = (communityName: string) => {
    // Connect this action to the appropriate community page
    // or WhatsApp invitation URL when available.
    console.info(`Community selected: ${communityName}`);
  };

  return (
    <main className="community-page">
      {/* =====================================
          HERO SECTION
      ====================================== */}

      <section className="community-hero">
        <div className="community-hero-content">
          <span className="community-eyebrow">
            TOGETHER WE GROW
          </span>

          <h1>
            Communities that <span>Inspire.</span>
          </h1>

          <p className="community-hero-description">
            Discover, connect and collaborate with diverse Jain
            communities across the world. Together, we preserve our
            values, strengthen bonds and create a better tomorrow.
          </p>

          <div className="community-hero-stats">
            {statistics.slice(0, 2).map((stat) => (
              <div className="community-hero-stat" key={stat.label}>
                <img src={image(stat.icon)} alt="" />

                <div>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="community-hero-visual">
          <img
            className="community-hero-image"
            src={image("Jain temple.jpg")}
            alt="Jain temple representing the global Jain community"
          />

          <div className="community-hero-image-caption">
            <span className="community-caption-dot" />

            <div>
              <strong>One global family</strong>
              <span>Connected through shared values</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          COMMUNITY DIRECTORY
      ====================================== */}

      <section
        className="community-explore"
        id="explore-communities"
      >
        <div className="community-section-heading">
          <span className="community-eyebrow">
            FIND YOUR PEOPLE
          </span>

          <h2>Explore Our Communities</h2>

          <p>
            Find a community that aligns with your interests, values
            and spiritual journey.
          </p>
        </div>

        <div className="community-grid">
          {communities.map((community) => (
            <article
              className="community-card"
              key={community.title}
            >
              <div className="community-card-image-wrap">
                <img
                  className="community-card-image"
                  src={image(community.image)}
                  alt={community.title}
                  loading="lazy"
                />

                <span className="community-card-badge">
                  <span className="community-caption-dot" />
                  Community
                </span>
              </div>

              <div className="community-card-content">
                <div className="community-card-title-row">
                  <h3>{community.title}</h3>
                </div>

                <span className="community-member-count">
                  {community.members}
                </span>

                <p>{community.description}</p>

                <div className="community-card-actions">
                  {community.whatsapp && (
                    <button
                      className="community-button community-button-primary"
                      type="button"
                      onClick={() =>
                        handleCommunityAction(community.title)
                      }
                    >
                      <WhatsAppIcon />
                      Join WhatsApp
                    </button>
                  )}

                  <button
                    className="community-button community-button-secondary"
                    type="button"
                    onClick={() =>
                      handleCommunityAction(community.title)
                    }
                  >
                    {community.action}
                    <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================
          GLOBAL COMMUNITY IMPACT
      ====================================== */}

      <section className="community-impact">
        <div className="community-impact-intro">
          <span className="community-eyebrow">
            A WORLDWIDE CONNECTION
          </span>

          <h2>
            One Community.
            <br />
            <span>Infinite Possibilities.</span>
          </h2>

          <p>
            Different journeys, shared values. Be part of a global
            community that connects people through Jain culture,
            spirituality and seva.
          </p>
        </div>

        <div className="community-impact-stats">
          {statistics.map((stat) => (
            <div
              className="community-impact-stat"
              key={stat.label}
            >
              <div className="community-impact-icon">
                <img
                  src={image(stat.icon)}
                  alt=""
                  loading="lazy"
                />
              </div>

              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================
          CALL TO ACTION
      ====================================== */}

      <section className="community-cta">
        <div className="community-cta-content">
          <span className="community-eyebrow">
            YOUR COMMUNITY AWAITS
          </span>

          <h2>Start Your Community Journey Today</h2>

          <p>
            Join thousands of Jains across the globe who are connecting,
            growing and creating impact together.
          </p>

          <div className="community-cta-actions">
            <button
              className="community-button community-button-primary community-cta-primary"
              type="button"
              onClick={() =>
                handleCommunityAction("Create Community")
              }
            >
              Create Community
              <span aria-hidden="true">→</span>
            </button>

            <a
              className="community-button community-button-secondary community-cta-secondary"
              href="#explore-communities"
            >
              Explore Communities
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="community-cta-visual">
          <img
            src={image("Namaste.png")}
            alt="Namaste greeting representing the Jain community"
            loading="lazy"
          />
        </div>
        <button
        className="about-back-top"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
      </section>
    </main>
  );
};

export default Community;
