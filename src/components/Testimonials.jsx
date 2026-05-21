import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TestiCard = ({ t, featured }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = t.quote.length > 180;
  const displayQuote = isLong && !expanded ? t.quote.slice(0, 180).trimEnd() + "…" : t.quote;

  return (
    <div className={`testi-card${featured ? " testi-card--featured" : ""}`}>
      <span className="testi-quote-mark">&ldquo;</span>
      <p className="testi-body">{displayQuote}</p>
      {isLong && (
        <button className="testi-expand" onClick={() => setExpanded(!expanded)}>
          <span>{expanded ? "Show less" : "Read more"}</span>
          <svg
            className={`testi-expand-icon${expanded ? " testi-expand-icon--up" : ""}`}
            width="12" height="12" viewBox="0 0 12 12" fill="none"
          >
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      <div className="testi-author">
        <span className="testi-name">{t.name}</span>
        {(t.role || t.company) && (
          <span className="testi-role">
            {[t.role, t.company].filter(Boolean).join(", ")}
          </span>
        )}
      </div>
    </div>
  );
};

const TESTIMONIALS = [
  {
    quote:
      "The site they built us looks better than anything we could have imagined. Clean, fast, and it actually converts. We saw a 40% jump in enquiries within the first month.",
    name: "Marcus Reid",
    role: "Director",
    company: "Reid Interiors",
  },
  {
    quote:
      "As a small boutique on the outskirts of London, I wanted to build my online visibility and attract organic customers. Working with the team at Spark Digital & SEO was a game-changer. The expertise, professional advice, and passion that they put into each project resulted in a beautiful website and ongoing SEO efforts. Their technically sound yet artistic and responsive web design and brilliantly executed SEO services helped me reach a wider audience and boost my sales. Within three months, I saw a significant increase in organic traffic and inquiries. I highly recommend their services!",
    name: "S. M. Harley",
    role: "",
    company: "",
  },
  {
    quote:
      "Handed them our socials and haven't had to think about it since. Consistent posts, proper branding, and our followers have tripled in three months.",
    name: "Danny Okafor",
    role: "Owner",
    company: "Okafor Fitness",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".testi-card", {
        opacity: 0,
        y: 60,
        stagger: 0.18,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="testimonials" ref={sectionRef} className="relative pt-12 pb-20 lg:pt-16 lg:pb-32">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16 lg:mb-20">
          <p className="hero-eyebrow mb-4">Client Words</p>
          <h2
            className="font-semibold text-4xl lg:text-5xl"
            style={{ color: "var(--text-on-dark)" }}
          >
            Don't take our word for it.
          </h2>
        </div>

        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <TestiCard key={i} t={t} featured={i === 1} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
