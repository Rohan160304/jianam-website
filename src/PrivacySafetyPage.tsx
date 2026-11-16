
import "./PrivacySafetyPage.css";

export const privacySafetyRoutes: Record<string, string> = {
  "Account & Data Deletion":
    "/privacy-safety/account-data-deletion",
  "Data Protection & Security":
    "/privacy-safety/data-protection-security",
  "Child Safety Standards":
    "/privacy-safety/child-safety-standards",
  "Grievance Redressal":
    "/privacy-safety/grievance-redressal",
};

const privacySafetyContent: Record<
  string,
  {
    title: string;
    intro: string;
    sections: { heading: string; text: string }[];
  }
> = {
  "account-data-deletion": {
    title: "Account & Data Deletion",
    intro:
      "JiNANAM respects your control over your account and personal information. This page explains how you can request account deletion and what happens to your information.",
    sections: [
      {
        heading: "1. Account Deletion",
        text: "Users may request deletion of their JiNANAM accounts through the available account settings or by contacting the support team.",
      },
      {
        heading: "2. How to Request Deletion",
        text: "Submit an account deletion request through the designated account deletion feature or contact JiNANAM support using your registered email address.",
      },
      {
        heading: "3. Information Deleted",
        text: "Personal account information and associated data will be deleted or anonymized where applicable, subject to legal obligations and legitimate retention requirements.",
      },
      {
        heading: "4. Information That May Be Retained",
        text: "Certain transaction records, security records, or information required by law may need to be retained for an appropriate period.",
      },
      {
        heading: "5. Deletion Processing",
        text: "Deletion requests should be reviewed and processed within the applicable legal and operational timelines. Additional verification may be required to protect your account.",
      },
      {
        heading: "6. Contact Support",
        text: "For help with account deletion, contact the JiNANAM support team through the Contact Us page.",
      },
    ],
  },

  "data-protection-security": {
    title: "Data Protection & Security",
    intro:
      "Protecting user information is important to JiNANAM. We aim to maintain appropriate safeguards to protect personal information and platform data.",
    sections: [
      {
        heading: "1. Data Protection",
        text: "JiNANAM aims to handle personal information responsibly and in accordance with applicable data protection laws and regulations.",
      },
      {
        heading: "2. Security Measures",
        text: "Appropriate technical and organizational measures may include access controls, authentication mechanisms, secure data transmission, and system monitoring.",
      },
      {
        heading: "3. Authorized Access",
        text: "Access to personal information should be limited to authorized personnel and service providers who require it for legitimate operational purposes.",
      },
      {
        heading: "4. Secure Communication",
        text: "Users should avoid sharing passwords, OTPs, or other confidential account credentials with anyone.",
      },
      {
        heading: "5. Security Concerns",
        text: "If you identify suspicious activity, unauthorized access, or a potential security issue, report it to the JiNANAM support team as soon as possible.",
      },
      {
        heading: "6. Continuous Improvement",
        text: "JiNANAM may periodically review and improve its security practices to address emerging risks and maintain platform safety.",
      },
    ],
  },

  "child-safety-standards": {
    title: "Child Safety Standards",
    intro:
      "JiNANAM is committed to maintaining a respectful and safe digital environment, particularly for children and young users who may interact with the platform.",
    sections: [
      {
        heading: "1. Child Safety Commitment",
        text: "JiNANAM does not tolerate child exploitation, abuse, grooming, sexual exploitation, or any content that places children at risk.",
      },
      {
        heading: "2. Prohibited Content",
        text: "Content involving child sexual abuse or exploitation, inappropriate interactions with minors, threats, or attempts to harm children is strictly prohibited.",
      },
      {
        heading: "3. Safe Interactions",
        text: "Users must communicate respectfully and must not use the platform to harass, exploit, threaten, manipulate, or approach children for harmful purposes.",
      },
      {
        heading: "4. Reporting Safety Concerns",
        text: "Users should promptly report suspected child exploitation, abuse, inappropriate content, or unsafe interactions through the available reporting options or by contacting JiNANAM.",
      },
      {
        heading: "5. Review and Action",
        text: "Reports involving child safety should receive appropriate priority. JiNANAM may restrict accounts, remove content, preserve relevant information, and escalate concerns to appropriate authorities where legally required.",
      },
      {
        heading: "6. Cooperation",
        text: "JiNANAM aims to cooperate with relevant authorities and follow applicable child protection laws and reporting requirements.",
      },
    ],
  },

  "grievance-redressal": {
    title: "Grievance Redressal",
    intro:
      "JiNANAM aims to provide a transparent process for users to raise complaints, report concerns, and seek assistance regarding the platform and its services.",
    sections: [
      {
        heading: "1. Purpose",
        text: "The grievance redressal process allows users to raise concerns regarding accounts, content, privacy, security, platform services, or other issues.",
      },
      {
        heading: "2. How to Submit a Grievance",
        text: "Users may submit their concerns through the Contact Us page, Report an Issue feature, or the designated grievance contact details published by JiNANAM.",
      },
      {
        heading: "3. Information to Include",
        text: "Please provide your name, registered email address, a clear description of the concern, and relevant supporting details. Avoid sharing passwords or OTPs.",
      },
      {
        heading: "4. Review Process",
        text: "The appropriate JiNANAM team should review the grievance, assess the information provided, and request additional details if required.",
      },
      {
        heading: "5. Resolution and Updates",
        text: "Users should receive an acknowledgement and appropriate updates regarding their grievance, subject to applicable timelines and procedures.",
      },
      {
        heading: "6. Escalation",
        text: "If a concern remains unresolved, users may escalate it through the officially published grievance contact or applicable legal channels.",
      },
    ],
  },
};

function PrivacySafetyPage() {
  const slug =
    window.location.pathname.replace(/\/+$/, "").split("/").pop() || "";

  const page = privacySafetyContent[slug];

  if (!page) {
    return (
      <main className="privacy-safety-page">
        <div className="privacy-safety-container">
          <h1>Page Not Found</h1>
          <p>The requested Privacy & Safety page could not be found.</p>
          <a href="/">Return to Home</a>
        </div>
      </main>
    );
  }

  return (
    <main className="privacy-safety-page">
      <div className="privacy-safety-container">
        <a href="/" className="privacy-safety-back">
          ← Back to Home
        </a>

        <div className="privacy-safety-header">
          <span className="privacy-safety-eyebrow">
            JiNANAM • PRIVACY & SAFETY
          </span>

          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>

        <div className="privacy-safety-content">
          {page.sections.map((section) => (
            <section
              className="privacy-safety-section"
              key={section.heading}
            >
              <h2>{section.heading}</h2>
              <p>{section.text}</p>
            </section>
          ))}
        </div>

        <div className="privacy-safety-footer">
          <p>
            Have questions or need assistance? Our team is here to help.
          </p>

          <a href="/contact" className="privacy-safety-contact">
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}

export default PrivacySafetyPage;
