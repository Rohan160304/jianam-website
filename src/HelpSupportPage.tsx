
import "./HelpSupportPage.css";
import ContactPage from "./Contact";

export const helpSupportRoutes: Record<string, string> = {
  "Help Center": "/help-support/help-center",
  FAQs: "/help-support/faqs",
  "Contact Us": "/help-support/contact-us",
  "App Guide": "/help-support/app-guide",
};

type Section = {
  heading: string;
  content: string;
};

type HelpPage = {
  title: string;
  intro: string;
  sections: Section[];
};

const helpContent: Record<string, HelpPage> = {
  "help-center": {
    title: "Help Center",
    intro:
      "Welcome to the JiNANAM Help Center. Find guidance to understand the platform and get assistance while using its features.",
    sections: [
      {
        heading: "Getting Started",
        content:
          "Learn about JiNANAM, explore the available sections, and understand how to access the features relevant to your account.",
      },
      {
        heading: "Account Assistance",
        content:
          "For help with account access, profile information, login difficulties, or account-related questions, use the available support channels.",
      },
      {
        heading: "Using JiNANAM Features",
        content:
          "Explore the platform's features for community activities, events, resources, communication, and other available services.",
      },
      {
        heading: "Need More Help?",
        content:
          "If you cannot find the information you need, visit the Contact Us page or use Report an Issue to submit a concern.",
      },
    ],
  },

  faqs: {
    title: "Frequently Asked Questions",
    intro:
      "Find answers to common questions about using the JiNANAM platform.",
    sections: [
      {
        heading: "What is JiNANAM?",
        content:
          "JiNANAM is a digital platform designed to connect the Jain community and provide access to community-related information, activities, and services.",
      },
      {
        heading: "How can I access my account?",
        content:
          "Use the Member Login option to access your member account. If you experience login difficulties, contact the support team.",
      },
      {
        heading: "How can I update my profile?",
        content:
          "Log in to your account and look for the profile or account settings section to view the available profile management options.",
      },
      {
        heading: "Where can I find upcoming events?",
        content:
          "Visit the Events section to explore event-related information and available updates.",
      },
      {
        heading: "How can I report a problem?",
        content:
          "Select Report an Issue in the Help & Support section and submit the issue using the report form.",
      },
      {
        heading: "How can I get additional assistance?",
        content:
          "Visit the Contact Us page to reach the JiNANAM team through the contact form.",
      },
    ],
  },

  "app-guide": {
    title: "App Guide",
    intro:
      "This guide provides a basic introduction to navigating the JiNANAM platform and using its available sections.",
    sections: [
      {
        heading: "1. Home",
        content:
          "Visit the Home section to explore the platform's overview, highlights, and important information.",
      },
      {
        heading: "2. Member Login",
        content:
          "Select Member Login to access the member account and its available features.",
      },
      {
        heading: "3. Explore Features",
        content:
          "Browse the Features section to learn about the different services and tools available on JiNANAM.",
      },
      {
        heading: "4. Community",
        content:
          "Visit the Community section to explore community-related information and activities.",
      },
      {
        heading: "5. Events",
        content:
          "Use the Events section to view event-related information and updates.",
      },
      {
        heading: "6. Resources",
        content:
          "Explore the Resources section to find available information and useful materials.",
      },
      {
        heading: "7. Need Assistance?",
        content:
          "Visit Help & Support whenever you need guidance. You can also use Report an Issue to submit a problem.",
      },
    ],
  },
};

export default function HelpSupportPage() {
  const slug =
    window.location.pathname.split("/").filter(Boolean).pop() || "";

  // Display the existing Contact.tsx page for the Contact Us route.
  if (slug === "contact-us") {
    return <ContactPage />;
  }

  const page = helpContent[slug];

  if (!page) {
    return (
      <div className="help-support-page">
        <div className="help-support-container">
          <h1>Page Not Found</h1>
          <p>The requested Help & Support page could not be found.</p>
          <a href="/">Back to Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="help-support-page">
      <div className="help-support-container">
        <a className="help-support-back" href="/">
          ← Back to Home
        </a>

        <header className="help-support-header">
          <span className="help-support-eyebrow">
            JINANAM FOUNDATION
          </span>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </header>

        <div className="help-support-content">
          {page.sections.map((section) => (
            <section
              className="help-support-section"
              key={section.heading}
            >
              <h2>{section.heading}</h2>
              <p>{section.content}</p>
            </section>
          ))}
        </div>

        <div className="help-support-footer">
          <h2>Still Need Assistance?</h2>
          <p>We're here to help you with your questions and concerns.</p>
          <a
            className="help-support-contact"
            href="/help-support/contact-us"
          >
            Contact JiNANAM
          </a>
        </div>
      </div>
    </div>
  );
}
