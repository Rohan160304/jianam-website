
import {
  ArrowLeft,
  Smartphone,
  Users,
  MapPinned,
  ShieldCheck,
  Settings,
} from "lucide-react";

import "./AppDownloads.css";

const apps = [
  {
    id: "member",
    name: "Member App",
    image: "/member.jpg",
    icon: Users,
    description:
      "Stay connected with the JiNANAM community. Access your profile, community updates, events, services, and important information in one place.",
    features: [
      "Manage your member profile",
      "Explore community services",
      "Receive important updates",
      "Connect with the Jain community",
    ],
  },
  {
    id: "tracking",
    name: "Tracking App",
    image: "/tracking.jpg",
    icon: MapPinned,
    description:
      "Stay informed about journeys and activities with tracking features designed to provide useful location and movement updates.",
    features: [
      "View tracking information",
      "Monitor journey updates",
      "Access relevant trip details",
      "Stay informed with updates",
    ],
  },
  {
    id: "security",
    name: "Security App",
    image: "/security.jpg",
    icon: ShieldCheck,
    description:
      "Support safer community operations with security-related information, visitor management, and access to relevant security activities.",
    features: [
      "Manage visitor information",
      "Support security operations",
      "Access relevant records",
      "Stay updated on activities",
    ],
  },
  {
    id: "admin",
    name: "Admin App",
    image: "/admin.jpg",
    icon: Settings,
    description:
      "A dedicated platform for administrators to manage organizational activities, access management features, and oversee community operations.",
    features: [
      "Manage organizational activities",
      "Access administration tools",
      "Manage staff and permissions",
      "Monitor platform activities",
    ],
  },
];

function AppDownloads() {
  return (
    <main className="app-downloads-page">
      <header className="app-downloads-header">
        <button
          type="button"
          className="app-back-button"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>

        <div className="app-downloads-heading">
          <span className="app-downloads-eyebrow">
            <Smartphone size={16} />
            JINANAM MOBILE APPLICATIONS
          </span>

          <h1>Explore Our Apps</h1>

          <p>
            Everything you need to stay connected, informed, and
            involved with the JiNANAM community.
          </p>
        </div>
      </header>

      <section className="app-downloads-grid">
        {apps.map((app) => {
          const AppIcon = app.icon;

          return (
            <article className="app-download-card" key={app.id}>
              <div className="app-download-image">
                <img src={app.image} alt={app.name} />
              </div>

              <div className="app-download-content">
                <div className="app-download-title">
                  <span className="app-download-icon">
                    <AppIcon size={22} />
                  </span>

                  <h2>{app.name}</h2>
                </div>

                <p className="app-download-description">
                  {app.description}
                </p>

                <ul className="app-download-features">
                  {app.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <div className="app-store-buttons">
  <a
    href="#"
    className="app-store-button"
    onClick={(event) => event.preventDefault()}
  >
    <img src="/images/play%20store.png" alt="Google Play" />
    <span>
      <small>GET IT ON</small>
      <strong>Google Play</strong>
    </span>
  </a>

  <a
    href="#"
    className="app-store-button"
    onClick={(event) => event.preventDefault()}
  >
    <img src="/images/app%20store.png" alt="App Store" />
    <span>
      <small>GET IT ON</small>
      <strong>App Store</strong>
    </span>
  </a>
</div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default AppDownloads;
