import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const POSTS = [
  {
    category: "SEO",
    title: "Why Most Small Business Websites Fail (And How to Fix Yours)",
    date: "May 2026",
    href: "#",
  },
  {
    category: "Design",
    title: "5 SEO Mistakes That Are Quietly Costing You Customers",
    date: "Apr 2026",
    href: "#",
  },
  {
    category: "Strategy",
    title: "What Does a Website Actually Cost in 2026?",
    date: "Apr 2026",
    href: "#",
  },
  {
    category: "Social Media",
    title: "How to Build a Brand Presence on Social Without Burning Out",
    date: "Mar 2026",
    href: "#",
  },
];

const Blog = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".blog-row", {
        opacity: 0,
        y: 32,
        stagger: 0.12,
        duration: 0.75,
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
    <section id="blog" ref={sectionRef} className="relative pt-12 pb-20 lg:pt-16 lg:pb-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-end justify-between mb-12 lg:mb-16 gap-4 flex-wrap">
          <div>
            <p className="hero-eyebrow mb-4">From The Blog</p>
            <h2
              className="font-semibold text-4xl lg:text-5xl"
              style={{ color: "#ffffff" }}
            >
              Insights &amp; Updates
            </h2>
          </div>
          <a href="#" className="blog-view-all">
            View all posts <span className="blog-arrow">→</span>
          </a>
        </div>

        {/* Row list */}
        <div className="blog-list">
          {POSTS.map((post, i) => (
            <a key={i} href={post.href} className="blog-row">
              <span className="blog-row__title">{post.title}</span>
              <span className="blog-row__meta">
                <span className="blog-row__date">{post.date}</span>
                <span className="blog-row__read">Read <span className="blog-arrow">→</span></span>
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
