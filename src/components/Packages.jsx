import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WEB_PACKAGES = [
  {
    eyebrow: "Web Design & Dev",
    title: "Website Design & Development",
    description:
      "A fully custom website built from scratch around your brand. Fast, clean, and designed to make the right impression from day one.",
    price: "£250",
    priceNote: "starting from",
    cta: "Get Started",
    featured: false,
    slug: "web",
  },
  {
    eyebrow: "SEO",
    title: "Website Optimisation",
    description:
      "More organic visitors, without the guesswork. We handle the technical and on-page SEO so your site gets found by the people looking for you.",
    price: "£99",
    priceNote: "starting from",
    cta: "Get Started",
    featured: true,
    slug: "seo",
  },
  {
    eyebrow: "Social Media",
    title: "Social Media Management",
    description:
      "Consistent, on-brand presence across your social channels — managed for you, so you can focus on running your business.",
    price: "£350",
    priceNote: "starting from",
    cta: "Get Started",
    featured: false,
    slug: "social",
  },
];

const SEO_PACKAGES = [
  {
    eyebrow: "Basic SEO",
    title: "The SEO Starter Pack",
    description:
      "Perfect for businesses just getting started with SEO. We lay the foundations — on-page optimisation, keyword research, and a solid content strategy to get you noticed.",
    price: "£299",
    priceNote: "per month",
    cta: "Get Started",
    featured: false,
    slug: "seo-basic",
  },
  {
    eyebrow: "Standard SEO",
    title: "The Growth Engine",
    description:
      "Designed for growing businesses ready to compete. A comprehensive SEO strategy covering technical SEO, content creation, and link building to drive consistent organic growth.",
    price: "£499",
    priceNote: "per month",
    cta: "Get Started",
    featured: false,
    slug: "seo-standard",
  },
  {
    eyebrow: "Advanced SEO",
    title: "The Business Booster",
    description:
      "For businesses serious about dominating their niche. In-depth audits, advanced content strategy, authority building, and monthly reporting to keep you ahead of the competition.",
    price: "£699",
    priceNote: "per month",
    cta: "Get Started",
    featured: true,
    slug: "seo-advanced",
  },
  {
    eyebrow: "Professional SEO",
    title: "The Performance Package",
    description:
      "A full-service SEO solution for established businesses. Comprehensive on-page and off-page SEO, dedicated account management, and a data-driven approach to maximise ROI.",
    price: "£999",
    priceNote: "per month",
    cta: "Get Started",
    featured: false,
    slug: "seo-professional",
  },
  {
    eyebrow: "Platinum SEO",
    title: "The E-commerce Powerhouse",
    description:
      "The ultimate SEO package for e-commerce businesses. Product page optimisation, conversion-focused content, technical SEO, and aggressive link building to drive sales at scale.",
    price: "£1,499",
    priceNote: "per month",
    cta: "Get Started",
    featured: false,
    slug: "seo-platinum",
  },
];

const SeoCarousel = () => {
  const [active, setActive] = useState(2); // start at middle (Advanced)
  const total = SEO_PACKAGES.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  // Returns position class: center, left1, left2, right1, right2
  const getPos = (i) => {
    const diff = ((i - active) % total + total) % total;
    if (diff === 0) return "center";
    if (diff === 1) return "right1";
    if (diff === 2) return "right2";
    if (diff === total - 1) return "left1";
    if (diff === total - 2) return "left2";
    return "hidden";
  };

  return (
    <div className="seo-carousel-wrap">
      {/* Intro text */}
      <p className="seo-carousel-intro">
        As a small, UK-based, woman-owned digital design studio, we understand that small businesses
        are the backbone of our economy. That's why we're here to help you thrive with our affordable SEO packages.
      </p>

      {/* Carousel */}
      <div className="seo-carousel">
        <button className="seo-carousel-btn seo-carousel-btn--prev" onClick={prev} aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="seo-carousel-track">
          {SEO_PACKAGES.map((pkg, i) => {
            const pos = getPos(i);
            return (
              <div
                key={pkg.slug}
                className={`seo-card seo-card--${pos}`}
                onClick={() => pos !== "center" && setActive(i)}
              >
                <p className={`pkg-eyebrow${pkg.featured ? " pkg-eyebrow--featured" : ""}`}>{pkg.eyebrow}</p>
                <h3 className="pkg-title">{pkg.title}</h3>
                <p className="pkg-desc">{pkg.description}</p>
                <div className="pkg-price-block">
                  <span className="pkg-price-note">{pkg.priceNote}</span>
                  <span className={`pkg-price${pkg.featured ? " pkg-price--featured" : ""}`}>{pkg.price}</span>
                </div>
                <a href={`/contact?package=${pkg.slug}`} className={`pkg-cta${pkg.featured ? " pkg-cta--featured" : ""}`}>
                  {pkg.cta}
                </a>
              </div>
            );
          })}
        </div>

        <button className="seo-carousel-btn seo-carousel-btn--next" onClick={next} aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="seo-carousel-dots">
        {SEO_PACKAGES.map((_, i) => (
          <button
            key={i}
            className={`seo-dot${i === active ? " seo-dot--active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Go to package ${i + 1}`}
          />
        ))}
      </div>

      {/* Save More strip */}
      <div className="seo-save-strip">
        <span className="seo-save-icon">✦</span>
        <div>
          <p className="seo-save-title">Save More, Achieve More</p>
          <p className="seo-save-text">
            Purchase quarterly, semi-annually, or annually to enjoy significant discounts on all our SEO packages.
          </p>
        </div>
        <a href="/contact" className="seo-save-btn">Ask About Discounts</a>
      </div>
    </div>
  );
};

const Packages = () => {
  const sectionRef = useRef(null);
  const [tab, setTab] = useState("web");

  useGSAP(
    () => {
      gsap.from(".pkg-card", {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="packages" ref={sectionRef} className="relative pt-0 pb-20 lg:pb-32">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-6 lg:mb-10">
          <p className="hero-eyebrow mb-4">Packages</p>
          <h2 className="font-semibold text-4xl lg:text-5xl" style={{ color: "var(--text-primary)" }}>
            Simple, Honest Pricing
          </h2>
          <p className="mt-4 text-base lg:text-lg max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
            No hidden fees. No long-term lock-ins.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="pkg-tabs">
          <button
            className={`pkg-tab${tab === "web" ? " pkg-tab--active" : ""}`}
            onClick={() => setTab("web")}
          >
            Web &amp; Design
          </button>
          <button
            className={`pkg-tab${tab === "seo" ? " pkg-tab--active" : ""}`}
            onClick={() => setTab("seo")}
          >
            SEO Packages
          </button>
        </div>

        {tab === "web" ? (
          <>
            <div className="pkg-grid">
              {WEB_PACKAGES.map((pkg, i) => (
                <div key={i} className={`pkg-card ${pkg.featured ? "pkg-card--featured" : ""}`}>
                  <p className={`pkg-eyebrow ${pkg.featured ? "pkg-eyebrow--featured" : ""}`}>
                    {pkg.eyebrow}
                  </p>
                  <h3 className="pkg-title">{pkg.title}</h3>
                  <p className="pkg-desc">{pkg.description}</p>
                  <div className="pkg-price-block">
                    <span className="pkg-price-note">{pkg.priceNote}</span>
                    <span className={`pkg-price ${pkg.featured ? "pkg-price--featured" : ""}`}>
                      {pkg.price}
                    </span>
                  </div>
                  <a href={`/contact?package=${pkg.slug}`} className={`pkg-cta ${pkg.featured ? "pkg-cta--featured" : ""}`}>
                    {pkg.cta}
                  </a>
                </div>
              ))}
            </div>
            <p className="text-center mt-12 text-sm" style={{ color: "var(--text-muted)" }}>
              Need something bespoke?{" "}
              <a href="/contact" className="pkg-link">Let us talk.</a>
            </p>
          </>
        ) : (
          <SeoCarousel />
        )}

      </div>
    </section>
  );
};

export default Packages;
