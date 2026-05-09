import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CYCLING_WORDS = ["Notice.", "Remember.", "Trust."];
const STEPS = ["Strategy", "Design", "Build", "Launch & SEO"];

const Hero = () => {
  const sectionRef = useRef(null);
  const cyclingRef = useRef(null);
  const processRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { opacity: 0, y: 16, duration: 0.6 })
        .from(".hero-word", { opacity: 0, y: 40, stagger: 0.1, duration: 0.7 }, "-=0.2")
        .from(".hero-sub", { opacity: 0, y: 20, duration: 0.6 }, "-=0.2")
        .from(".hero-ctas", { opacity: 0, y: 16, duration: 0.5 }, "-=0.2")
        .call(() => {
          const el = cyclingRef.current;
          if (!el) return;
          let index = 1;
          const cycle = () => {
            gsap.to(el, {
              opacity: 0, y: -12, duration: 0.3, ease: "power2.in",
              onComplete: () => {
                el.textContent = CYCLING_WORDS[index];
                index = (index + 1) % CYCLING_WORDS.length;
                gsap.fromTo(el, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
              },
            });
          };
          const timer = setTimeout(() => {
            cycle();
            const interval = setInterval(cycle, 1600);
            el._cycleInterval = interval;
          }, 1500);
          el._cycleTimer = timer;
        });

      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        gsap.set(".process-line-v", { scaleY: 0, transformOrigin: "top center" });
        gsap.set(".process-dot", { opacity: 0, scale: 0 });
        gsap.set(".process-label", { opacity: 0, x: -10 });
        gsap.to(".process-line-v", {
          scaleY: 1, duration: 1.4, ease: "power2.inOut",
          scrollTrigger: { trigger: processRef.current, start: "top 80%" },
        });
        gsap.to(".process-dot", {
          opacity: 1, scale: 1, stagger: 0.3, duration: 0.4, ease: "back.out(1.7)",
          scrollTrigger: { trigger: processRef.current, start: "top 80%" },
        });
        gsap.to(".process-label", {
          opacity: 1, x: 0, stagger: 0.3, duration: 0.4, ease: "power2.out",
          scrollTrigger: { trigger: processRef.current, start: "top 80%" },
        });
      } else {
        gsap.set(".process-line-h", { scaleX: 0, transformOrigin: "left center" });
        gsap.set(".process-dot", { opacity: 0, scale: 0 });
        gsap.set(".process-label", { opacity: 0, y: 10 });
        gsap.to(".process-line-h", {
          scaleX: 1, duration: 1.4, ease: "power2.inOut",
          scrollTrigger: { trigger: processRef.current, start: "top 85%" },
        });
        gsap.to(".process-dot", {
          opacity: 1, scale: 1, stagger: 0.3, duration: 0.4, ease: "back.out(1.7)",
          scrollTrigger: { trigger: processRef.current, start: "top 85%" },
        });
        gsap.to(".process-label", {
          opacity: 1, y: 0, stagger: 0.3, duration: 0.4, ease: "power2.out",
          scrollTrigger: { trigger: processRef.current, start: "top 85%" },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section id="hero" ref={sectionRef} className="min-h-screen flex-center relative pt-28 pb-6 lg:pb-16">
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full">

        <p className="hero-eyebrow">Spark Digital & SEO</p>

        <h1 className="font-bold mt-4">
          {"We Build".split(" ").map((word, i) => (
            <span key={i} className="hero-word inline-block mr-[0.25em]">{word}</span>
          ))}
          <br />
          {"Websites People".split(" ").map((word, i) => (
            <span key={i} className="hero-word inline-block mr-[0.25em]">{word}</span>
          ))}
          <br />
          <span ref={cyclingRef} className="hero-word hero-cycling-word gradient-text inline-block">
            Notice.
          </span>
        </h1>

        <p className="hero-sub mt-6 text-lg lg:text-xl max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
          From Pixels to Platform, We Design, Develop & Deliver
        </p>

        <div className="hero-ctas flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a href="#packages" className="neon-btn">See Our Packages</a>
        </div>

        {/* Process Strip */}
        <div ref={processRef} className="process-strip mt-10 lg:mt-16">

          {/* Desktop horizontal */}
          <div className="process-desktop">
            <div className="process-track">
              <div className="process-line-h" />
              {STEPS.map((step, i) => (
                <div key={i} className="process-step-desktop">
                  <div className="process-dot" />
                  <span className="process-label">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile vertical */}
          <div className="process-mobile">
            {STEPS.map((step, i) => (
              <div key={i} className="process-step-mobile">
                <div className="process-dot-col">
                  <div className="process-dot" />
                  {i < STEPS.length - 1 && <div className="process-line-v" />}
                </div>
                <span className="process-label">{step}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
