import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  BookMarked,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  GraduationCap,
  Heart,
  Landmark,
  Library,
  Music,
  Newspaper,
  Play,
  Search,
  Send,
  Sparkles,
  Users,
  Video,
} from "lucide-react";
import "./Resources.css";

const featuredCategories = [
  {
    icon: <BookOpen size={18} />,
    title: "Jain Books & Scriptures",
    description: "Digital library of Jain literature.",
    image: "/images/b.png",
  },
  {
    icon: <GraduationCap size={18} />,
    title: "Pravachans & Discourses",
    description: "Watch and learn from Jain monks and scholars.",
    image: "/images/m.png",
  },
  {
    icon: <Music size={18} />,
    title: "Jain Music",
    description: "Stavans, Bhakti, Bhajans, Instrumentals.",
    image: "/images/m1.png",
  },
  {
    icon: <Library size={18} />,
    title: "Pathshala Learning",
    description: "Learning resources for students and teachers.",
    image: "/images/p.png",
  },
  {
    icon: <Newspaper size={18} />,
    title: "Articles & Blogs",
    description: "Modern Jain lifestyle, philosophy, health, and community.",
    image: "/images/a.png",
  },
  {
    icon: <Video size={18} />,
    title: "Educational Videos",
    description: "Spiritual documentaries and educational content.",
    image: "/images/v.png",
  },
  {
    icon: <Download size={18} />,
    title: "Downloads",
    description: "PDFs, brochures, wallpapers, calendars, event kits.",
    image: "/images/d.png",
  },
  {
    icon: <Users size={18} />,
    title: "Kids Learning",
    description: "Interactive stories, cartoons, quizzes, and Jain values.",
    image: "/images/k.png",
  },
];

const latestResources = [
  {
    tag: "Featured Book",
    title: "Tattvarth Sutra",
    subtitle: "With Detailed Commentary",
    author: "By Acharya Umasvami",
    image: "/images/T2.jpg",
    type: "book",
  },
  {
    tag: "Featured Video",
    title: "Life & Teachings of Mahavir Swami",
    subtitle: "",
    author: "",
    image: "/images/teachings.jpg",
    type: "video",
  },
  {
    tag: "Latest Article",
    title: "Non-Violence in Modern Lifestyle",
    subtitle: "",
    author: "By Dr. Hemlata Shah",
    image: "/images/non-violence.jpg",
    type: "article",
  },
  {
    tag: "Trending Pravachan",
    title: "Antarmukhata and Shanti",
    subtitle: "",
    author: "Muni Shri Pramansagar Ji",
    image: "/images/aathmamukta.jpg",
    type: "video",
  },
  {
    tag: "Popular Stavan",
    title: "Logassa Sutra",
    subtitle: "Traditional Stavan",
    author: "",
    image: "/images/yoga.jpg",
    type: "audio",
  },
  {
    tag: "Editor's Pick",
    title: "Power of Forgiveness",
    subtitle: "Transform Your Life",
    author: "",
    image: "/images/power.jpg",
    type: "article",
  },
  {
    tag: "Recently Added",
    title: "Jain Temples",
    subtitle: "Architectural Glory",
    author: "Photo Gallery",
    image: "/images/Temple.png",
    type: "gallery",
  },
];

const communityResources = [
  {
    icon: <Landmark size={22} />,
    title: "Temple Resources",
    count: "42 Resources",
  },
  {
    icon: <Heart size={22} />,
    title: "Volunteer Guides",
    count: "28 Resources",
  },
  {
    icon: <Sparkles size={22} />,
    title: "Festival Kits",
    count: "36 Resources",
  },
  {
    icon: <FileText size={22} />,
    title: "Community Documents",
    count: "52 Resources",
  },
  {
    icon: <BookMarked size={22} />,
    title: "Educational Material",
    count: "68 Resources",
  },
  {
    icon: <Users size={22} />,
    title: "Research Papers",
    count: "24 Resources",
  },
];

const downloads = [
  {
    icon: <FileText size={23} />,
    title: "Annual Reports",
    subtitle: "2023–2024",
    size: "2.4 MB",
  },
  {
    icon: <BookOpen size={23} />,
    title: "Foundation Brochure",
    subtitle: "About JiNANAM",
    size: "5.8 MB",
  },
  {
    icon: <Library size={23} />,
    title: "Community Handbook",
    subtitle: "Complete Guide",
    size: "3.1 MB",
  },
  {
    icon: <CalendarDays size={23} />,
    title: "Festival Calendar",
    subtitle: "2025 Calendar",
    size: "8.2 MB",
  },
  {
    icon: <Heart size={23} />,
    title: "Volunteer Guide",
    subtitle: "Be a Change Maker",
    size: "4.5 MB",
  },
  {
    icon: <Landmark size={23} />,
    title: "Temple Management Guide",
    subtitle: "Administration",
    size: "3.7 MB",
  },
  {
    icon: <FileText size={23} />,
    title: "Digital Posters",
    subtitle: "High Resolution",
    size: "12.6 MB",
  },
  {
    icon: <CalendarDays size={23} />,
    title: "Event Resources",
    subtitle: "Planning Kits",
    size: "7.9 MB",
  },
];

const learningPaths = [
  {
    icon: <BookOpen size={21} />,
    title: "Learning Journey",
    text: "Choose your path",
  },
  {
    icon: <GraduationCap size={21} />,
    title: "Beginner",
    text: "Start learning",
  },
  {
    icon: <BookMarked size={21} />,
    title: "Intermediate",
    text: "Deepen knowledge",
  },
  {
    icon: <Library size={21} />,
    title: "Advanced",
    text: "In-depth studies",
  },
  {
    icon: <Heart size={21} />,
    title: "Kids",
    text: "Fun & learn",
  },
  {
    icon: <Users size={21} />,
    title: "Youth",
    text: "Grow & inspire",
  },
  {
    icon: <Users size={21} />,
    title: "Families",
    text: "Together we learn",
  },
  {
    icon: <GraduationCap size={21} />,
    title: "Teachers",
    text: "Teach & guide",
  },
  {
    icon: <Heart size={21} />,
    title: "Volunteers",
    text: "Serve & uplift",
  },
];

const filters = [
  { label: "All", icon: <Library size={14} /> },
  { label: "Books", icon: <BookOpen size={14} /> },
  { label: "Articles", icon: <FileText size={14} /> },
  { label: "Pravachans", icon: <MicIcon /> },
  { label: "Stavans", icon: <Music size={14} /> },
  { label: "Stotras", icon: <Sparkles size={14} /> },
  { label: "Videos", icon: <Play size={14} /> },
  { label: "Downloads", icon: <Download size={14} /> },
  { label: "Research", icon: <BookMarked size={14} /> },
  { label: "Children", icon: <Users size={14} /> },
  { label: "Youth", icon: <Users size={14} /> },
  { label: "Pathshala", icon: <GraduationCap size={14} /> },
  { label: "Community Guides", icon: <Users size={14} /> },
];

function MicIcon() {
  return <span className="resource-mic-icon">●</span>;
}

function Resources() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");

  const filteredCategories = featuredCategories.filter((category) => {
    if (!searchTerm.trim()) return true;

    const text = `${category.title} ${category.description}`.toLowerCase();

    return text.includes(searchTerm.toLowerCase());
  });

  const handleSubscribe = () => {
    if (!email.trim()) return;
    setEmail("");
  };

  return (
    <div className="resources-page">
      {/* ================= NAVBAR ================= */}
      <header className="resources-navbar">
      </header>

      {/* ================= HERO ================= */}
      <section className="resources-hero">
        <div className="resources-hero-content">
          <div className="resources-eyebrow">
            KNOWLEDGE. SPIRITUALITY. COMMUNITY.
          </div>

          <h1>
            Jain Knowledge &amp;
            <br />
            <span>Resource</span> Center
          </h1>

          <p>
            Discover authentic Jain knowledge, educational content,
            community resources, spiritual guidance, and digital tools—all in
            one place.
          </p>

          <div className="resources-hero-buttons">
            <button className="primary-resource-btn">
              Explore Resources
              <ArrowRight size={16} />
            </button>

            <button className="secondary-resource-btn">
              Download Materials
              <Download size={15} />
            </button>
          </div>
        </div>

        <div className="resources-hero-image">
          <img
            src="/images/main image.png"
            alt="Jain Knowledge and Resources"
          />

          <div className="hero-floating-icon hero-icon-music">
            <Music size={19} />
          </div>

          <div className="hero-floating-icon hero-icon-video">
            <Play size={18} />
          </div>

          <div className="hero-floating-icon hero-icon-download">
            <Download size={18} />
          </div>

          <div className="hero-floating-icon hero-icon-book">
            <BookOpen size={18} />
          </div>
        </div>
      </section>

      {/* ================= SEARCH ================= */}
      <section className="resources-search-section">
        <div className="resources-search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search books, stavans, pravachans, articles, temples, events..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <span className="search-filter-icon">
            <Sparkles size={17} />
          </span>
        </div>

        <div className="resources-filter-list">
          {filters.map((filter) => (
            <button
              key={filter.label}
              className={`resource-filter ${
                activeFilter === filter.label ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.label)}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* ================= FEATURED CATEGORIES ================= */}
      <section className="resources-section">
        <div className="resources-section-heading">
          <h2>Featured Resource Categories</h2>
          <button className="view-all-btn">
            View All Categories
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="featured-resource-grid">
          {filteredCategories.map((category) => (
            <article className="featured-resource-card" key={category.title}>
              <div className="featured-resource-content">
                <div className="featured-category-title">
                  <span>{category.icon}</span>
                  <h3>{category.title}</h3>
                </div>

                <p>{category.description}</p>

                <button
                  className="small-arrow-btn"
                  aria-label={`Open ${category.title}`}
                >
                  <ArrowRight size={14} />
                </button>
              </div>

              <div className="featured-resource-image">
                <img src={category.image} alt={category.title} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= LATEST RESOURCES ================= */}
      <section className="resources-section latest-section">
        <div className="resources-section-heading">
          <h2>Latest Resources</h2>
          <button className="view-all-btn">
            View All
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="latest-resource-slider">
          <button className="slider-arrow left">
            <ChevronLeft size={17} />
          </button>

          <div className="latest-resource-grid">
            {latestResources.map((resource) => (
              <article className="latest-resource-card" key={resource.title}>
                <div className="latest-resource-image">
                  <img src={resource.image} alt={resource.title} />

                  <span className="resource-tag">{resource.tag}</span>

                  {(resource.type === "video" ||
                    resource.type === "audio") && (
                    <button className="resource-play-btn">
                      <Play size={13} fill="currentColor" />
                    </button>
                  )}
                </div>

                <div className="latest-resource-content">
                  <h3>{resource.title}</h3>

                  {resource.subtitle && <p>{resource.subtitle}</p>}

                  {resource.author && (
                    <span className="resource-author">{resource.author}</span>
                  )}
                </div>
              </article>
            ))}
          </div>

          <button className="slider-arrow right">
            <ChevronRight size={17} />
          </button>
        </div>
      </section>

      {/* ================= COMMUNITY RESOURCES ================= */}
      <section className="resources-section community-resource-section">
        <div className="resources-section-heading">
          <h2>Created by the Community, for the Community.</h2>
        </div>

        <div className="community-resource-grid">
          {communityResources.map((resource) => (
            <article className="community-resource-card" key={resource.title}>
              <div className="community-resource-icon">{resource.icon}</div>
              <h3>{resource.title}</h3>
              <p>{resource.count}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= FEATURED DOWNLOADS ================= */}
      <section className="resources-section downloads-section">
        <div className="resources-section-heading">
          <h2>Featured Downloads</h2>
          <button className="view-all-btn">
            View All Downloads
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="downloads-grid">
          {downloads.map((download) => (
            <article className="download-card" key={download.title}>
              <div className="download-icon">{download.icon}</div>

              <h3>{download.title}</h3>
              <p>{download.subtitle}</p>
              <span>{download.size}</span>

              <div className="download-actions">
                <button className="preview-btn">Preview</button>
                <button className="download-btn">
                  Download
                  <ArrowDown size={12} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= LEARNING HUB ================= */}
      <section className="resources-section learning-hub-section">
        <div className="learning-hub-heading">
          <h2>Learning Hub</h2>
          <p>Start your Jain knowledge journey today.</p>
        </div>

        <div className="learning-path-wrapper">
          <div className="learning-line"></div>

          <div className="learning-path-grid">
            {learningPaths.map((path) => (
              <article className="learning-path-card" key={path.title}>
                <div className="learning-path-icon">{path.icon}</div>
                <h3>{path.title}</h3>
                <p>{path.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STAY UPDATED ================= */}
      <section className="stay-updated-section">
        <div className="stay-updated-content">
          <div className="stay-updated-text">
            <h2>Stay Updated</h2>
            <p>
              Receive the latest Jain resources, events, educational content,
              and community updates.
            </p>
          </div>

          <form
            className="subscribe-form"
            onSubmit={(event) => {
              event.preventDefault();
              handleSubscribe();
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <button type="submit">
              Subscribe
              <Send size={14} />
            </button>
          </form>
        </div>

        <div className="stay-updated-image">
          <img src="/images/Jain temple.jpg" alt="Jain Temple" />
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="resources-footer">
        <div className="resources-footer-main">
          <div className="footer-brand-column">
            <div className="footer-contact">
            </div>
          </div>
          <div className="footer-about-column">
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Resources;