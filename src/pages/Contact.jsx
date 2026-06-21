import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { navLinks } from "../constants";
import { Nav } from "tinacms";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const PACKAGES = {
  web: {
    label: "Website Design & Development",
    description: "A fully custom website built around your brand.",
  },
  seo: {
    label: "Website Optimisation (SEO)",
    description: "More organic visitors, without the guesswork.",
  },
  social: {
    label: "Social Media Management",
    description: "Consistent, on-brand presence across your social channels.",
  },
  "seo-basic": {
    label: "Basic SEO — The SEO Starter Pack",
    description: "Perfect for businesses just getting started with SEO.",
  },
  "seo-standard": {
    label: "Standard SEO — The Growth Engine",
    description: "Designed for growing businesses ready to compete.",
  },
  "seo-advanced": {
    label: "Advanced SEO — The Business Booster",
    description: "For businesses serious about dominating their niche.",
  },
  "seo-professional": {
    label: "Professional SEO — The Performance Package",
    description: "A full-service SEO solution for established businesses.",
  },
  "seo-platinum": {
    label: "Platinum SEO — The E-commerce Powerhouse",
    description: "The ultimate SEO package for e-commerce businesses.",
  },
};

const WEB3FORMS_KEY = "005bd9d0-5924-4c95-96bb-31b2826f66d6";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const packageSlug = searchParams.get("package");
  const selectedPackage = PACKAGES[packageSlug] || null;

  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const subject = selectedPackage
      ? `Enquiry: ${selectedPackage.label}`
      : "General Enquiry — Spark Digital & SEO";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject,
          from_name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          package: selectedPackage ? selectedPackage.label : "Not specified",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bp-page">

      {/* ── Navbar ──────────────────────────────── */}
      <NavBar/>

      {/* ── Hero ────────────────────────────────── */}
      <div className="bp-hero">
        <div className="bp-hero-inner">
          <Link to="/" className="bp-breadcrumb">← Back to home</Link>
          <span className="bp-category">Get In Touch</span>
          <h1 className="bp-title">
            {selectedPackage ? `You're interested in ${selectedPackage.label}` : "Let's Talk"}
          </h1>
          <p className="bp-excerpt">
            {selectedPackage
              ? `Fill in the form below and we'll get back to you within one business day.`
              : "Have a question or want to discuss a project? We'd love to hear from you."}
          </p>
        </div>
      </div>

      {/* ── Content ─────────────────────────────── */}
      <main className="ct-main">
        <div className="ct-grid">

          {/* ── Form ────────────────────────────── */}
          <div className="ct-form-wrap">

            {/* Package badge */}
            {selectedPackage && (
              <div className="ct-package-badge">
                <div className="ct-package-badge-inner">
                  <div>
                    <p className="ct-package-label">{selectedPackage.label}</p>
                    <p className="ct-package-desc">{selectedPackage.description}</p>
                  </div>

                </div>
              </div>
            )}

            {status === "success" ? (
              <div className="ct-success">
                <div className="ct-success-icon">✓</div>
                <h2>Message sent!</h2>
                <p>We'll be in touch within one business day.</p>
                <Link to="/" className="neon-btn" style={{ display: "inline-block", marginTop: "1.5rem" }}>
                  Back to home
                </Link>
              </div>
            ) : (
              <form className="ct-form" onSubmit={handleSubmit}>
                <div className="ct-field">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="ct-field">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@yourbusiness.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="ct-field">
                  <label htmlFor="phone">Phone <span className="ct-optional">(optional)</span></label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+44 7700 000000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="ct-field">
                  <label htmlFor="message">Tell us about your business *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="What does your business do? What are you hoping to achieve?"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                {status === "error" && (
                  <p className="ct-error-msg">Something went wrong — please try again or email us directly.</p>
                )}

                <button type="submit" className="ct-submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send Enquiry →"}
                </button>
              </form>
            )}
          </div>

          {/* ── Sidebar ─────────────────────────── */}
          <aside className="ct-sidebar">
            <div className="ct-sidebar-card">
              <p className="ct-sidebar-heading">Prefer to talk?</p>
              <p className="ct-sidebar-text">
                Book a free 30-minute discovery call and we'll discuss your goals, answer questions, and see if we're a good fit.
              </p>
              <a
                href="https://calendly.com/sparkdigistudio/free-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="ct-calendly-btn"
              >
                Book a Free Call →
              </a>
            </div>

            <div className="ct-sidebar-card">
              <p className="ct-sidebar-heading">Contact details</p>
              <ul className="ct-sidebar-list">
                <li>
                  <a href="mailto:connect@sparkdigistudio.com">connect@sparkdigistudio.com</a>
                </li>
                <li>
                  <a href="tel:+447985390098">+44 798 539 0098</a>
                </li>
                <li>Monday – Friday, 9 am – 6 pm</li>
              </ul>
            </div>
          </aside>

        </div>
      </main>

      {/* ── Footer ──────────────────────────────── */}
      <Footer/>

    </div>
  );
};

export default Contact;
