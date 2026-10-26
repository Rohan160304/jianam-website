
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Smartphone,
} from "lucide-react";
import "./Login.css";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(
      "Login is ready for authentication integration. No account has been signed in yet."
    );
  };

  const handleProviderClick = (provider: string) => {
    setMessage(
      `${provider} sign-in will be available after authentication is connected.`
    );
  };

  return (
    <main className="login-page">
      <div className="login-background" aria-hidden="true" />

      <div className="login-overlay" aria-hidden="true" />

      <div className="login-content">
        <section className="login-intro">
          <a className="login-brand" href="/" aria-label="JiNANAM home">
            <img src="/logo.png" alt="JiNANAM logo" />
            <span>JiNANAM</span>
          </a>

          <div className="login-intro-text">
            <span className="login-eyebrow">
              <span className="login-eyebrow-dot" />
              CONNECTING THE JAIN COMMUNITY
            </span>

            <h1>
              One Community.
              <br />
              <span>Infinite Possibilities.</span>
            </h1>

            <p>
              Connecting Temples, Monks, Families, Pathshalas, Youth, Events,
              Donations, Learning and Communities across the globe.
            </p>

            <div className="login-community-image">
              <img
                src="/images/Enter.png"
                alt="The JiNANAM community"
              />
            </div>

            <div className="login-community-caption">
              <span className="login-caption-line" />
              <span>ONE COMMUNITY · ONE CONNECTED WORLD</span>
            </div>
          </div>

          <p className="login-intro-footer">
            Rooted in Jain values. Connected across the world.
          </p>
        </section>

        <section className="login-form-section">
          <div className="login-card">
            <div className="login-card-heading">
              <div className="login-card-mark">
                <img src="/logo.png" alt="" />
              </div>

              <h2>Welcome Back</h2>
              <p>Continue your journey with JiNANAM</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="login-field">
                <label htmlFor="login-email">Email</label>

                <div className="login-input-wrap">
                  <Mail size={19} aria-hidden="true" />
                  <input
                    id="login-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="login-field">
                <label htmlFor="login-password">Password</label>

                <div className="login-input-wrap">
                  <LockKeyhole size={19} aria-hidden="true" />
                  <input
                    id="login-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />

                  <button
                    className="login-password-toggle"
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              <div className="login-form-options">
                <label className="login-remember">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                  />
                  <span className="login-custom-checkbox" />
                  <span>Remember Me</span>
                </label>

                <a
                  href="/forgot-password"
                  onClick={(event) => {
                    event.preventDefault();
                    setMessage("Password recovery will be available soon.");
                  }}
                >
                  Forgot Password?
                </a>
              </div>

              <button className="login-submit-button" type="submit">
                <span>Sign In</span>
                <ArrowRight size={19} />
              </button>
            </form>

            {message && (
              <p className="login-message" role="status">
                {message}
              </p>
            )}

            <div className="login-divider">
              <span />
              <p>OR CONTINUE WITH</p>
              <span />
            </div>

            <div className="login-social-buttons">
              <button
                type="button"
                className="login-social-button"
                onClick={() => handleProviderClick("Google")}
              >
                <svg
                  className="login-google-icon"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    fill="#4285F4"
                    d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M12.6 27.6a12 12 0 0 1 0-7.2v-5.3H5.8a20 20 0 0 0 0 17.8l6.8-5.3Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M24 12c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 5.9 29.5 4 24 4A20 20 0 0 0 5.8 15.1l6.8 5.3C14.2 15.6 18.7 12 24 12Z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

              <button
                type="button"
                className="login-social-button"
                onClick={() => handleProviderClick("Apple")}
              >
                <svg
                  className="login-apple-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M16.7 12.8c0-2.1 1.7-3.1 1.8-3.2a4 4 0 0 0-3.2-1.7c-1.3-.1-2.5.8-3.2.8-.6 0-1.7-.8-2.8-.8a4.2 4.2 0 0 0-3.6 2.2c-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.5 2.1 2.6 2 1-.1 1.4-.7 2.7-.7 1.2 0 1.6.7 2.7.7 1.1 0 1.8-1 2.5-2 .8-1.1 1.1-2.2 1.1-2.3-.1 0-1.7-.7-1.7-3.6ZM14.6 6.5c.6-.8 1-1.8.9-2.9-.9.1-2 .6-2.6 1.4-.6.7-1.1 1.8-1 2.8 1 .1 2-.5 2.7-1.3Z" />
                </svg>
                <span>Continue with Apple</span>
              </button>

              <button
                type="button"
                className="login-social-button"
                onClick={() => handleProviderClick("Mobile OTP")}
              >
                <Smartphone size={20} aria-hidden="true" />
                <span>Continue with Mobile OTP</span>
              </button>
            </div>

            <p className="login-create-account">
              Don&apos;t have an account? <a href="/signup">Create Account</a>
            </p>

            <div className="login-card-footer">
              <span>Made for the Jain community</span>
              <span>•</span>
              <a href="/">Back to Home</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
