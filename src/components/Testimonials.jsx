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
      "Spark Digital created custom social media posts for us which were far from generic, tailored to what we do, and in line with our philosophy and brand image.",
    name: "Advocate My Meds",
    role: "",
    company: "",
  },
  {
    quote:
      "Spark Digital’s blog content does something increasingly rare; it reads like it was actually written by a human.The research holds, the brand voice stays intact, and copy comes back rarely needing rework. Since their team has become a fixture in our content strategy, organic traffic has grown consistently. What ties it together is that the writing has rhythm, a point of view, and arguments that build rather than accumulate. In a content landscape where AI-generated copy is the default, that's no longer a small distinction.",
    name: "One Homes",
    role: "",
    company: "",
  },
  {
    quote:
      "Spark Digitial put up with my back and forth and made these beautiful custom posts for my IG that resonated with my readers and engaged my followers. I couldn’t be happier.",
    name: "The Happiness Guide",
    role: "",
    company: "",
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
