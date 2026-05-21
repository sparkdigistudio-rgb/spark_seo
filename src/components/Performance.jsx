import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { performanceImages } from "../constants/index.js";
import { useMediaQuery } from "react-responsive";

const Performance = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(
    () => {
      const images = gsap.utils.toArray(".perf-img");
      if (!images.length) return;

      // Initial state
      gsap.set(images, {
        opacity: 0,
        y: 80,
        scale: 0.85,
        rotation: 3,
      });

      if (isMobile) {
        gsap.to(images, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          stagger: 0.08,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        });
        return;
      }

      // Desktop - Beautiful masonry stagger
      gsap.to(images, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        stagger: {
          grid: [2, 4],        // Creates masonry-like wave
          from: "random",      // or "center", "edges", "top"
          amount: 1.2,
        },
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 70%",
          end: "bottom 20%",
          scrub: false,        // One-time reveal (feels premium)
        },
      });

      // Optional: Subtle hover lift
      images.forEach((img) => {
        img.addEventListener("mouseenter", () => {
          gsap.to(img, {
            y: -12,
            scale: 1.04,
            rotation: 0,
            duration: 0.4,
            ease: "power2.out",
            zIndex: 10,
          });
        });

        img.addEventListener("mouseleave", () => {
          gsap.to(img, {
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "power2.out",
            zIndex: 1,
          });
        });
      });
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  return (
    <section id="performance" ref={sectionRef} className="relative pt-4 pb-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16 lg:mb-20">
          <p className="hero-eyebrow mb-4">Portfolio</p>
          <h2 className="font-semibold text-4xl lg:text-6xl" style={{color: 'var(--text-primary)'}}>
            What We've Built
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div
          ref={gridRef}
          className="perf-grid"
        >
          {performanceImages.map((item, index) => (
            <div key={index} className="perf-item">
              <img
                src={item.src}
                className="perf-img w-full rounded-3xl shadow-xl"
                alt={item.alt || `Project ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="content mt-20 text-center max-w-xl mx-auto px-4">
          <p className="lg:text-xl leading-relaxed" style={{color: 'var(--text-muted)'}}>
            Every project is scoped, designed, and built from scratch.{" "}
            <span style={{color: 'var(--text-primary)'}}>No themes. No shortcuts. Just work that holds up.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Performance;