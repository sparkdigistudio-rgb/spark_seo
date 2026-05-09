import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
      "We were invisible on Google before Spark. Now we're ranking for the searches that matter. It's not magic — they just actually know what they're doing.",
    name: "Priya Nair",
    role: "Founder",
    company: "Nair Legal",
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
    <section id="testimonials" ref={sectionRef} className="relative pb-20 lg:pb-32">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16 lg:mb-20">
          <p className="hero-eyebrow mb-4">Client Words</p>
          <h2
            className="font-semibold text-4xl lg:text-5xl"
            style={{ color: "var(--text-primary)" }}
          >
            Don't take our word for it.
          </h2>
        </div>

        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={`testi-card${i === 1 ? " testi-card--featured" : ""}`}>
              <span className="testi-quote-mark">&ldquo;</span>
              <p className="testi-body">{t.quote}</p>
              <div className="testi-author">
                <span className="testi-name">{t.name}</span>
                <span className="testi-role">
                  {t.role}, {t.company}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
