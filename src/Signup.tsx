import { useState, type FormEvent } from "react";
import "./Signup.css";

type RegistrationType =
  | "Jain Member"
  | "Non-Jain Member"
  | "Temple"
  | "Jain Center"
  | "Dharamshala"
  | "Volunteer";

const registrationTypes: RegistrationType[] = [
  "Jain Member",
  "Non-Jain Member",
  "Temple",
  "Jain Center",
  "Dharamshala",
  "Volunteer",
];

const languages = [
  "English",
  "Hindi",
  "Marathi",
  "Gujarati",
  "Rajasthani",
];

const communities = [
  "Sthanakvasi",
  "Terapanth",
  "Digambar",
  "Shwetambar",
  "Other",
];

function Signup() {
  const [step, setStep] = useState(1);

  const [registrationType, setRegistrationType] =
    useState<RegistrationType>("Jain Member");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    location: "",
    language: "English",
    community: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const updateField = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((previous) => previous + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((previous) => previous - 1);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert(
      `Registration submitted for ${
        formData.fullName || registrationType
      }.`
    );
  };

  return (
    <div className="signup-page">
      <div className="signup-background" />

      <div className="signup-overlay">
        <div className="signup-container">
          <div className="signup-intro">
            <span className="signup-eyebrow">
              WELCOME TO JINANAM
            </span>

            <h1>Join the JiNANAM Community.</h1>

            <p>
              Be a part of a global movement that connects, empowers
              and uplifts Jain communities across the world.
            </p>

            <div className="signup-image-wrapper" />
          </div>

          <div className="signup-card">
            <div className="signup-card-header">
              <div>
                <span className="signup-step-label">
                  STEP {step} OF 3
                </span>

                <h2>Create Your JiNANAM Account</h2>
              </div>

              <button
                type="button"
                className="signup-close"
                onClick={() => {
                  window.location.href = "/";
                }}
                aria-label="Close signup"
              >
                ×
              </button>
            </div>

            <div className="signup-progress">
              <div
                className={`signup-progress-step ${
                  step >= 1 ? "active" : ""
                }`}
              >
                <span>1</span>
                <p>Choose Type</p>
              </div>

              <div
                className={`signup-progress-line ${
                  step >= 2 ? "active" : ""
                }`}
              />

              <div
                className={`signup-progress-step ${
                  step >= 2 ? "active" : ""
                }`}
              >
                <span>2</span>
                <p>Your Details</p>
              </div>

              <div
                className={`signup-progress-line ${
                  step >= 3 ? "active" : ""
                }`}
              />

              <div
                className={`signup-progress-step ${
                  step >= 3 ? "active" : ""
                }`}
              >
                <span>3</span>
                <p>Community</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <section className="signup-step-content">
                  <div className="signup-section-heading">
                    <h3>I want to register as</h3>

                    <p>
                      Choose the option that best describes your
                      JiNANAM account.
                    </p>
                  </div>

                  <div className="registration-grid">
                    {registrationTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        className={`registration-option ${
                          registrationType === type
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          setRegistrationType(type)
                        }
                      >
                        <span className="registration-icon">
                          {type === "Jain Member" && "J"}
                          {type === "Non-Jain Member" && "N"}
                          {type === "Temple" && "T"}
                          {type === "Jain Center" && "C"}
                          {type === "Dharamshala" && "D"}
                          {type === "Volunteer" && "V"}
                        </span>

                        <span className="registration-text">
                          {type}
                        </span>

                        <span className="registration-radio">
                          {registrationType === type ? "✓" : ""}
                        </span>
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="signup-primary-button"
                    onClick={handleNext}
                  >
                    Continue
                    <span>→</span>
                  </button>

                  <p className="signup-login-text">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        window.location.href = "/login";
                      }}
                    >
                      Sign In
                    </button>
                  </p>
                </section>
              )}

              {step === 2 && (
                <section className="signup-step-content">
                  <div className="signup-section-heading">
                    <h3>Your Details</h3>

                    <p>
                      Enter your basic details to create your
                      JiNANAM account.
                    </p>
                  </div>

                  <div className="signup-form-grid">
                    <div className="signup-field signup-field-full">
                      <label htmlFor="fullName">
                        Full Name
                      </label>

                      <input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(event) =>
                          updateField(
                            "fullName",
                            event.target.value
                          )
                        }
                        required
                      />
                    </div>

                    <div className="signup-field">
                      <label htmlFor="email">
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(event) =>
                          updateField(
                            "email",
                            event.target.value
                          )
                        }
                        required
                      />
                    </div>

                    <div className="signup-field">
                      <label htmlFor="phone">
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(event) =>
                          updateField(
                            "phone",
                            event.target.value
                          )
                        }
                        required
                      />
                    </div>

                    <div className="signup-field">
                      <label htmlFor="password">
                        Password
                      </label>

                      <div className="password-input-wrapper">
                        <input
                          id="password"
                          type={
                            showPassword
                              ? "text"
                              : "password"
                          }
                          placeholder="Create a strong password"
                          value={formData.password}
                          onChange={(event) =>
                            updateField(
                              "password",
                              event.target.value
                            )
                          }
                          minLength={8}
                          required
                        />

                        <button
                          type="button"
                          className="password-toggle"
                          onClick={() =>
                            setShowPassword(
                              (previous) => !previous
                            )
                          }
                          aria-label={
                            showPassword
                              ? "Hide password"
                              : "Show password"
                          }
                        >
                          {showPassword ? "Hide" : "Show"}
                        </button>
                      </div>
                    </div>

                    <div className="signup-field">
                      <label htmlFor="location">
                        Location
                      </label>

                      <input
                        id="location"
                        type="text"
                        placeholder="Select your city / area"
                        value={formData.location}
                        onChange={(event) =>
                          updateField(
                            "location",
                            event.target.value
                          )
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="signup-actions">
                    <button
                      type="button"
                      className="signup-secondary-button"
                      onClick={handleBack}
                    >
                      ← Back
                    </button>

                    <button
                      type="button"
                      className="signup-primary-button"
                      onClick={handleNext}
                    >
                      Continue
                      <span>→</span>
                    </button>
                  </div>
                </section>
              )}

              {step === 3 && (
                <section className="signup-step-content">
                  <div className="signup-section-heading">
                    <h3>Community</h3>

                    <p>
                      Tell us a little more about your Jain
                      community and preferred language.
                    </p>
                  </div>

                  <div className="signup-form-grid">
                    <div className="signup-field">
                      <label htmlFor="language">
                        Preferred Language
                      </label>

                      <select
                        id="language"
                        value={formData.language}
                        onChange={(event) =>
                          updateField(
                            "language",
                            event.target.value
                          )
                        }
                      >
                        {languages.map((language) => (
                          <option
                            key={language}
                            value={language}
                          >
                            {language}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="signup-field">
                      <label htmlFor="community">
                        Select your community
                      </label>

                      <select
                        id="community"
                        value={formData.community}
                        onChange={(event) =>
                          updateField(
                            "community",
                            event.target.value
                          )
                        }
                        required
                      >
                        <option value="">
                          Select community
                        </option>

                        {communities.map((community) => (
                          <option
                            key={community}
                            value={community}
                          >
                            {community}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="signup-summary">
                    <div className="summary-item">
                      <span>Registration Type</span>
                      <strong>{registrationType}</strong>
                    </div>

                    <div className="summary-item">
                      <span>Name</span>
                      <strong>
                        {formData.fullName ||
                          "Not provided"}
                      </strong>
                    </div>

                    <div className="summary-item">
                      <span>Location</span>
                      <strong>
                        {formData.location ||
                          "Not provided"}
                      </strong>
                    </div>
                  </div>

                  <div className="signup-actions">
                    <button
                      type="button"
                      className="signup-secondary-button"
                      onClick={handleBack}
                    >
                      ← Back
                    </button>

                    <button
                      type="submit"
                      className="signup-primary-button"
                    >
                      Create Account
                      <span>✓</span>
                    </button>
                  </div>

                  <p className="signup-terms">
                    By creating an account, you agree to the
                    JiNANAM community terms and privacy policy.
                  </p>
                </section>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
