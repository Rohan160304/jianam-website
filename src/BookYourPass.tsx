
import { ArrowLeft, CalendarDays, Ticket } from "lucide-react";
import "./BookYourPass.css";

const passSections = [
  {
    title: "JANUARY – MARCH",
    subtitle: "Early Booking",
    passes: [
      { month: "January", price: "₹999" },
      { month: "February", price: "₹1,499" },
      { month: "March", price: "₹1,999" },
      { month: "March (Final)", price: "₹2,499" },
    ],
  },
  {
    title: "APRIL – JULY",
    subtitle: "Regular Booking",
    passes: [
      { month: "April", price: "₹2,999" },
      { month: "May", price: "₹3,499" },
      { month: "June", price: "₹3,999" },
      { month: "July", price: "₹4,499" },
    ],
  },
  {
    title: "AUGUST – NOVEMBER",
    subtitle: "Last Phase Booking",
    passes: [
      { month: "August", price: "₹4,999" },
      { month: "September", price: "₹5,499" },
      { month: "October", price: "₹5,999" },
      { month: "November", price: "₹6,499" },
    ],
  },
];

export default function BookYourPass() {
  return (
    <div className="byp-page">
      <header className="byp-header">
        <button
          className="byp-back-button"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>

        <span className="byp-eyebrow">JAIN-Z TOMORROWLAND</span>

        <h1>BOOK YOUR PASS</h1>

        <p>
          Choose your booking period and explore the available pass prices
          for the celebration.
        </p>
      </header>

      <main className="byp-content">
        {passSections.map((section, index) => (
          <section className="byp-section" key={section.title}>
            <div className="byp-section-heading">
              <div>
                <span className="byp-section-number">
                  SECTION 0{index + 1}
                </span>
                <h2>{section.title}</h2>
                <p>{section.subtitle}</p>
              </div>

              <CalendarDays size={32} />
            </div>

            <div className="byp-pass-grid">
              {section.passes.map((pass, passIndex) => (
                <div className="byp-pass-card" key={`${pass.month}-${passIndex}`}>
                  <div className="byp-pass-icon">
                    <Ticket size={25} />
                  </div>

                  <span className="byp-pass-label">BOOKING PERIOD</span>

                  <h3>{pass.month}</h3>

                  <div className="byp-pass-divider" />

                  <span className="byp-price-label">PASS PRICE</span>

                  <div className="byp-price">{pass.price}</div>

                  <span className="byp-dummy-note">
                    Dummy Price
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="byp-footer">
        <h2>BE PART OF THE CELEBRATION</h2>
        <p>Three days. One community. Unforgettable memories.</p>
      </footer>
    </div>
  );
}
