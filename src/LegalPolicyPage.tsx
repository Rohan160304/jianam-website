
import "./LegalPolicyPage.css";
import "./LegalPolicyPage.css";

export const legalPolicyRoutes: Record<string, string> = {
  "Privacy Policy": "/legal/privacy-policy",
  "Terms & Conditions": "/legal/terms-conditions",
  "Community Guidelines": "/legal/community-guidelines",
  "Content Reporting Policy": "/legal/content-reporting-policy",
  "Data Retention Policy": "/legal/data-retention-policy",
  "Donation Policy": "/legal/donation-policy",
  "Cookie Policy": "/legal/cookie-policy",
};

const policyContent: Record<
  string,
  {
    title: string;
    intro: string;
    sections: { heading: string; text: string }[];
  }
> = {
  "privacy-policy": {
    title: "Privacy Policy",
    intro:
      "Your privacy matters to JiNANAM. This policy explains how personal information may be collected, used, stored, and protected when you use our website and services.",
    sections: [
      {
        heading: "1. Information We Collect",
        text: "Information may include your name, email address, contact details, account information, and information you choose to share through our services.",
      },
      {
        heading: "2. How We Use Information",
        text: "Information may be used to provide and improve JiNANAM services, manage accounts, communicate important updates, respond to enquiries, and maintain platform security.",
      },
      {
        heading: "3. Information Sharing",
        text: "Personal information should only be shared with authorized service providers or other parties where necessary for providing services, complying with legal obligations, or with your consent.",
      },
      {
        heading: "4. Data Security",
        text: "JiNANAM aims to use appropriate technical and organizational safeguards to protect personal information against unauthorized access, loss, misuse, or disclosure.",
      },
      {
        heading: "5. Your Privacy Rights",
        text: "You may request access to, correction of, or deletion of your personal information, subject to applicable laws and legitimate retention requirements.",
      },
      {
        heading: "6. Contact Us",
        text: "For privacy-related questions or requests, please contact the JiNANAM support team through the Contact page.",
      },
    ],
  },

  "terms-conditions": {
    title: "Terms & Conditions",
    intro:
      "Welcome to JiNANAM. These terms explain the conditions for accessing and using the JiNANAM website, applications, and related services.",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        text: "By accessing or using JiNANAM, you agree to follow the applicable terms and policies. Please do not use the services if you do not agree with these terms.",
      },
      {
        heading: "2. User Accounts",
        text: "Users are responsible for providing accurate information, maintaining the confidentiality of their login credentials, and activities carried out through their accounts.",
      },
      {
        heading: "3. Acceptable Use",
        text: "Users must not misuse the platform, violate applicable laws, upload harmful content, impersonate others, or interfere with the proper functioning of JiNANAM.",
      },
      {
        heading: "4. User Content",
        text: "Users are responsible for the content they submit, upload, or share. Content must respect the rights, privacy, and dignity of others.",
      },
      {
        heading: "5. Platform Availability",
        text: "JiNANAM may update, modify, suspend, or discontinue features when necessary for maintenance, security, or operational reasons.",
      },
      {
        heading: "6. Changes to Terms",
        text: "These terms may be updated from time to time. Updated versions should be published on this page with their effective date.",
      },
    ],
  },

  "community-guidelines": {
    title: "Community Guidelines",
    intro:
      "JiNANAM brings Jain families, temples, monks, and organizations together. These guidelines help maintain a respectful, safe, and welcoming community.",
    sections: [
      {
        heading: "1. Respect Everyone",
        text: "Treat all community members with kindness, dignity, and respect. Harassment, bullying, threats, and abusive behaviour are not acceptable.",
      },
      {
        heading: "2. Respect Jain Values",
        text: "Share information and participate in discussions with sensitivity toward Jain traditions, beliefs, practices, and cultural values.",
      },
      {
        heading: "3. Share Appropriate Content",
        text: "Post genuine, relevant, and respectful information. Avoid misleading, offensive, harmful, or inappropriate material.",
      },
      {
        heading: "4. Protect Personal Information",
        text: "Do not share another person's private information, photographs, or contact details without appropriate permission.",
      },
      {
        heading: "5. No Spam or Misuse",
        text: "Avoid spam, fraudulent promotions, impersonation, misleading advertisements, or unauthorized commercial activities.",
      },
      {
        heading: "6. Report Violations",
        text: "If you notice content or behaviour that violates these guidelines, use the available reporting options to notify the JiNANAM team.",
      },
    ],
  },

  "content-reporting-policy": {
    title: "Content Reporting Policy",
    intro:
      "JiNANAM encourages users to report content that may be harmful, inappropriate, misleading, abusive, or inconsistent with our community guidelines.",
    sections: [
      {
        heading: "1. What Can Be Reported?",
        text: "Users may report harassment, hate speech, impersonation, misleading information, inappropriate images, spam, privacy violations, and other concerning content.",
      },
      {
        heading: "2. How to Submit a Report",
        text: "Use the available reporting feature or contact the JiNANAM support team. Include the relevant content details and explain why you believe it should be reviewed.",
      },
      {
        heading: "3. Review Process",
        text: "Reported content should be reviewed by the appropriate team. Additional information may be requested when necessary to understand the concern.",
      },
      {
        heading: "4. Possible Actions",
        text: "Depending on the findings, actions may include removing content, restricting access, issuing warnings, or taking action against accounts in accordance with applicable policies.",
      },
      {
        heading: "5. Misuse of Reporting",
        text: "False, malicious, or deliberately misleading reports may be reviewed as misuse of the reporting system.",
      },
      {
        heading: "6. Follow-up",
        text: "Users may contact the JiNANAM support team for questions about the reporting process.",
      },
    ],
  },

  "data-retention-policy": {
    title: "Data Retention Policy",
    intro:
      "This policy explains how JiNANAM should manage and retain information associated with user accounts and platform activities.",
    sections: [
      {
        heading: "1. Purpose of Data Retention",
        text: "Information may be retained when necessary to provide services, maintain records, protect platform security, resolve disputes, and meet legal obligations.",
      },
      {
        heading: "2. Retention Period",
        text: "Information should only be retained for as long as required for its intended purpose or as required by applicable laws and regulations.",
      },
      {
        heading: "3. Account Information",
        text: "Account-related information may be retained while an account is active and for an appropriate period after account closure, where legally or operationally necessary.",
      },
      {
        heading: "4. Deletion of Information",
        text: "When information is no longer required, it should be securely deleted or anonymized according to applicable retention and deletion procedures.",
      },
      {
        heading: "5. Legal Requirements",
        text: "Certain information may need to be retained to comply with legal requirements, resolve disputes, or protect legitimate interests.",
      },
      {
        heading: "6. Data Requests",
        text: "Users may contact JiNANAM to ask questions or submit requests regarding their personal information and account deletion.",
      },
    ],
  },

  "donation-policy": {
    title: "Donation Policy",
    intro:
      "JiNANAM aims to support transparent and responsible donation-related activities that help Jain communities, charitable initiatives, and organizations.",
    sections: [
      {
        heading: "1. Purpose of Donations",
        text: "Donations may support charitable, religious, educational, cultural, and community initiatives presented through the platform.",
      },
      {
        heading: "2. Donation Information",
        text: "Before making a donation, users should review the beneficiary details, stated purpose, amount, and other relevant information.",
      },
      {
        heading: "3. Payment Processing",
        text: "Where online payments are supported, transactions should be processed through the designated payment service provider and subject to its applicable terms.",
      },
      {
        heading: "4. Receipts and Records",
        text: "Donation confirmations or receipts should be provided where supported by the donation process and applicable requirements.",
      },
      {
        heading: "5. Refunds and Cancellations",
        text: "Refund eligibility and cancellation procedures should be clearly communicated before a donation is completed. Applicable rules may depend on the beneficiary and payment provider.",
      },
      {
        heading: "6. Transparency",
        text: "Donation-related information should be presented accurately. Users should be able to identify the intended beneficiary and purpose before proceeding.",
      },
    ],
  },

  "cookie-policy": {
    title: "Cookie Policy",
    intro:
      "This Cookie Policy explains how cookies and similar technologies may be used when visitors access the JiNANAM website.",
    sections: [
      {
        heading: "1. What Are Cookies?",
        text: "Cookies are small text files stored on your device by websites. They can help websites remember preferences and understand how visitors use their services.",
      },
      {
        heading: "2. Essential Cookies",
        text: "Essential cookies may be used to support basic website functions, security, and navigation.",
      },
      {
        heading: "3. Preference Cookies",
        text: "Preference cookies may remember settings such as language or other choices to improve the browsing experience.",
      },
      {
        heading: "4. Analytics Cookies",
        text: "If analytics tools are used, cookies may help understand website traffic and usage patterns so that the website can be improved.",
      },
      {
        heading: "5. Managing Cookies",
        text: "Visitors can manage or delete cookies through their browser settings. Disabling certain cookies may affect some website features.",
      },
      {
        heading: "6. Policy Updates",
        text: "This policy may be updated when website technologies or cookie practices change.",
      },
    ],
  },
};

function LegalPolicyPage() {
  const slug = window.location.pathname
    .replace(/\/+$/, "")
    .split("/")
    .pop() || "";

  const policy = policyContent[slug];

  if (!policy) {
    return (
      <main className="legal-policy-page">
        <div className="legal-policy-container">
          <h1>Page Not Found</h1>
          <p>The requested policy page could not be found.</p>
          <a href="/">Return to Home</a>
        </div>
      </main>
    );
  }

  return (
    <main className="legal-policy-page">
      <div className="legal-policy-container">

        <a href="/" className="legal-back-link">
          ← Back to Home
        </a>

        <div className="legal-policy-header">
          <span className="legal-eyebrow">JiNANAM • LEGAL INFORMATION</span>
          <h1>{policy.title}</h1>
          <p>{policy.intro}</p>
        </div>

        <div className="legal-policy-content">
          {policy.sections.map((section) => (
            <section className="legal-policy-section" key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.text}</p>
            </section>
          ))}
        </div>

        <div className="legal-policy-footer">
          <p>
            If you have any questions regarding this policy,
            please contact the JiNANAM team.
          </p>
          <a href="/contact" className="legal-contact-button">
            Contact Us
          </a>
        </div>

      </div>
    </main>
  );
}

export default LegalPolicyPage;
