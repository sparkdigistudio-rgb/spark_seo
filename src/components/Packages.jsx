import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PACKAGES = [
  {
    eyebrow: "Web Design & Dev",
    title: "Website Design & Development",
    description:
      "A fully custom website built from scratch around your brand. Fast, clean, and designed to make the right impression from day one.",
    price: "£250",
    priceNote: "starting from",
    cta: "Get Started",
    featured: false,
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
  },
  {
    eyebrow: "Social Media",
    title: "Social Media Management",
    description:
      "Consistent, on-brand presence across your social channels  managed for you, so you can focus on running your business.",
    price: "£350",
    priceNote: "starting from",
    cta: "Get Started",
    featured: false,
  },
];

const Packages = () => {
  const sectionRef = useRef(null);

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

        <div className="text-center mb-6 lg:mb-16">
          <p className="hero-eyebrow mb-4">Packages</p>
          <h2 className="font-semibold text-4xl lg:text-5xl" style={{ color: "var(--text-primary)" }}>
            Simple, Honest Pricing
          </h2>
          <p className="mt-4 text-base lg:text-lg max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
            No hidden fees. No long-term lock-ins.
          </p>
        </div>

        <div className="pkg-grid">
          {PACKAGES.map((pkg, i) => (
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

              <a href="#" className={`pkg-cta ${pkg.featured ? "pkg-cta--featured" : ""}`}>
                {pkg.cta}
              </a>

            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-sm" style={{ color: "var(--text-muted)" }}>
          Need something bespoke?{" "}
          <a href="mailto:hello@spark.com" className="pkg-link">Let us talk.</a>
        </p>

      </div>
    </section>
  );
};

export default Packages;
