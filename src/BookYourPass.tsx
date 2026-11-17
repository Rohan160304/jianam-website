
import { ArrowLeft, ArrowRight, Ticket } from "lucide-react";
import "./BookYourPass.css";

const passSections = [
  {
    title: "Early Booking",
    passes: [
      { month: "4 Sharing Accommodation", price: "₹3500" },
      { month: "3 Sharing Accommodation", price: "₹4500" },
      { month: "2 Sharing Accommodation", price: "₹5500" },
    ],
  },
  {
    title: "Regular Booking",
    passes: [
      { month: "4 Sharing Accommodation", price: "₹4500" },
      { month: "3 Sharing Accommodation", price: "₹5500" },
      { month: "2 Sharing Accommodation", price: "₹6500" },
    ],
  },
  {
    title: "Last Phase Booking",
    passes: [
      { month: "4 Sharing Accommodation", price: "₹5500" },
      { month: "3 Sharing Accommodation", price: "₹6500" },
      { month: "2 Sharing Accommodation", price: "₹7500" },
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
        {passSections.map((section) => (
          <section className="byp-section" key={section.title}>
            <div className="byp-section-heading">
              <div>
                <h2>{section.title}</h2>
              </div>
            </div>

            <div className="byp-pass-grid">
              {section.passes.map((pass, passIndex) => (
                <div className="byp-pass-card" key={`${pass.month}-${passIndex}`}>
                  <div className="byp-pass-icon">
                    <Ticket size={25} />
                  </div>


                  <h3>{pass.month}</h3>

                  <div className="byp-pass-divider" />

                  <span className="byp-price-label">PASS PRICE</span>

                  <div className="byp-price">{pass.price}</div>

                  <button
  type="button"
  className="byp-book-now-button"
  onClick={() => {
    // Add booking action here
  }}
>
  Book Now
  <ArrowRight size={16} />
</button>
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
