import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const sectionRef = useRef(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    import("../../tina/__generated__/client").then(({ client }) => {
      client.queries.postConnection().then((res) => {
        const edges = res.data?.postConnection?.edges || [];
        const sorted = edges
          .map((e) => e.node)
          .sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(sorted);
      });
    });
  }, []);

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

  const formatDate = (iso) => {
    if (!iso) return "";
    return new Date(iso).toLocaleDateString("en-GB", {
      month: "short",
      year: "numeric",
    });
  };

  const getSlug = (post) =>
    post._sys?.filename || post.id?.split("/").pop()?.replace(".mdx", "") || "#";

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
          <a href="/blog" className="blog-view-all">
            View all posts <span className="blog-arrow">→</span>
          </a>
        </div>

        {/* Row list — latest 3 only */}
        <div className="blog-list">
          {posts.slice(0, 3).map((post) => (
            <a key={post.id} href={`/blog/${getSlug(post)}`} className="blog-row">
              <span className="blog-row__title">{post.title}</span>
              <span className="blog-row__meta">
                <span className="blog-row__date">{formatDate(post.date)}</span>
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
