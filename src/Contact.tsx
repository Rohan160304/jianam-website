
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Handshake,
  CheckCircle2,
} from "lucide-react";
import "./Contact.css";

const contactDetails = [
  {
    icon: MapPin,
    title: "Our Location",
    lines: ["Mulund", "Mumbai, Maharashtra", "India"],
    color: "orange",
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 8693838281", "India"],
    color: "blue",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["Hello@jinanam.org", "We usually reply within 24 hours"],
    color: "green",
  },
  {
    icon: Clock3,
    title: "Office Hours",
    lines: ["Monday – Saturday", "9:00 AM – 6:00 PM"],
    color: "purple",
  },
];

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setStatus("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Please complete your name, email, and message.");
      return;
    }

    setStatus(
      "Your details are validated. Please connect the contact form to an email service or backend to deliver your message."
    );
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <div className="contact-hero-image">
            <img
              src="/images/c1.png"
              alt="Connect with the JiNANAM Foundation community"
            />
            <div className="contact-image-caption">
              <span className="contact-caption-icon">
                <Handshake size={21} />
              </span>
              <div>
                <strong>One Community. Infinite Possibilities.</strong>
                <span>Let's make a difference together.</span>
              </div>
            </div>
          </div>

          <div className="contact-hero-copy">
            <span className="contact-eyebrow">
              <span className="contact-eyebrow-dot" />
              GET IN TOUCH
            </span>

            <h1>
              Let's Build the
              <br />
              Future <span>Together.</span>
            </h1>

            <p>
              We'd love to hear from you. Connect with us for collaborations,
              support, partnerships or any general inquiries.
            </p>

            <a href="#contact-form" className="contact-primary-button">
              Get in Touch <ArrowRight size={18} />
            </a>

            <div className="contact-hero-note">
              <MessageCircle size={18} />
              <span>We're here to help you connect with our community.</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="contact-form-section contact-container"
        id="contact-form"
      >
        <div className="contact-form-heading">
          <span className="contact-eyebrow">WE'RE LISTENING</span>
          <h2>Send Us a Message</h2>
          <p>
            Have a question or an idea? Fill in the details below and let's
            start a conversation.
          </p>
        </div>

        <div className="contact-form-layout">
          <div className="contact-form-aside">
            <div className="contact-aside-icon">
              <Mail size={31} />
            </div>
            <h3>We'd love to hear from you.</h3>
            <p>
              Whether you're interested in a partnership, need assistance, or
              want to learn more about JiNANAM, we're happy to connect.
            </p>

            <div className="contact-aside-divider" />

            <div className="contact-aside-item">
              <CheckCircle2 size={19} />
              <span>Collaboration and partnerships</span>
            </div>
            <div className="contact-aside-item">
              <CheckCircle2 size={19} />
              <span>Community support and inquiries</span>
            </div>
            <div className="contact-aside-item">
              <CheckCircle2 size={19} />
              <span>Ideas to make a positive impact</span>
            </div>

            <div className="contact-aside-decoration">
              <Globe2 size={108} strokeWidth={0.8} />
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field-grid">
              <div className="contact-field">
                <label htmlFor="contact-name">Name *</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email *</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-phone">Phone</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-organization">Organization</label>
                <input
                  id="contact-organization"
                  name="organization"
                  type="text"
                  placeholder="Enter your organization"
                  value={form.organization}
                  onChange={handleChange}
                  autoComplete="organization"
                />
              </div>

              <div className="contact-field contact-field-full">
                <label htmlFor="contact-subject">Subject *</label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Community Support">Community Support</option>
                  <option value="Feedback">Feedback or Suggestions</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="contact-field contact-field-full">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Write your message here..."
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="contact-submit-button">
              Send Message <Send size={17} />
            </button>

            {status && (
              <p className="contact-form-status" role="status">
                {status}
              </p>
            )}

            <p className="contact-form-note">
              Our team will respond to you as soon as possible.
            </p>
          </form>
        </div>
      </section>

      <section className="contact-details-section">
        <div className="contact-container">
          <div className="contact-details-heading">
            <span className="contact-eyebrow">LET'S CONNECT</span>
            <h2>Connect With JiNANAM Foundation</h2>
            <p>
              We're always happy to hear from our community. Reach out to us
              through any of the channels below.
            </p>
          </div>

          <div className="contact-details-grid">
            {contactDetails.map(
              ({ icon: Icon, title, lines, color }) => (
                <article className="contact-detail-card" key={title}>
                  <div className={`contact-detail-icon ${color}`}>
                    <Icon size={24} />
                  </div>
                  <h3>{title}</h3>
                  {lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </article>
              )
            )}
          </div>

          <div className="contact-website-strip">
            <div className="contact-website-icon">
              <Globe2 size={23} />
            </div>
            <div>
              <strong>Visit our website</strong>
              <p>Explore more about our community and initiatives.</p>
            </div>
            <a
              href="https://www.jinanam.org"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit JiNANAM website"
            >
              www.JiNANAM.org <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="contact-map-section contact-container">
        <div className="contact-map-heading">
          <div>
            <span className="contact-eyebrow">FIND US</span>
            <h2>Our Location</h2>
            <p>Mulund, Mumbai, Maharashtra, India</p>
          </div>

          <a
            className="contact-map-link"
            href="https://www.google.com/maps/dir/?api=1&destination=19.170778,72.956722"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="contact-map-frame">
          <iframe
            title="JiNANAM Foundation location in Mulund, Mumbai"
            src="https://maps.google.com/maps?q=19.170778,72.956722&z=15&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <p className="contact-map-caption">
          <MapPin size={16} />
          Mulund, Mumbai, Maharashtra, India
        </p>
      </section>

      <section className="contact-impact-section">
        <div className="contact-impact-inner contact-container">
          <div className="contact-impact-copy">
            <span className="contact-eyebrow">MAKE A DIFFERENCE</span>
            <h2>
              Let's Create a
              <br />
              <span>Positive Impact</span> Together.
            </h2>
            <p>
              Whether you want to collaborate, support or learn more about our
              initiatives — we're just a message away.
            </p>
            <a
              href="#contact-form"
              className="contact-primary-button"
              onClick={() => {
                setStatus("");
              }}
            >
              Partner With Us <ArrowRight size={18} />
            </a>
          </div>

          <div className="contact-impact-image">
            <img
              src="/images/c2.png"
              alt="Working together to build a united Jain community"
              loading="lazy"
            />
            <div className="contact-impact-badge">
              <Handshake size={22} />
              <span>United by values. Connected by purpose.</span>
            </div>
          </div>
        </div>
      </section>
      <button
        className="about-back-top"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </main>
  );
}

export default ContactPage;
