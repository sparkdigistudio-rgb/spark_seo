import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../tina/__generated__/client";
import { navLinks } from "../constants";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.queries.postConnection().then((res) => {
      const edges = res.data?.postConnection?.edges || [];
      const sorted = edges
        .map((e) => e.node)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
      setPosts(sorted);
      setLoading(false);
    });
  }, []);

  const formatDate = (iso) => {
    if (!iso) return "";
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getSlug = (post) =>
    post._sys?.filename || post.id?.split("/").pop()?.replace(".mdx", "") || "#";

  return (
    <div className="bp-page">

      {/* ── Navbar ──────────────────────────────── */}
      <header className="bp-header">
        <nav className="bp-nav">
          <a href="/" className="nav-logo">
            <img src="/spark-logo.png" alt="Spark Digital & SEO" />
          </a>
          <ul className="nav-links-desktop">
            {navLinks.map(({ label, href }) => (
              <li key={label}><a href={`/${href}`}>{label}</a></li>
            ))}
          </ul>
          <button
            className="nav-hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={menuOpen ? "open" : ""} />
            <span className={menuOpen ? "open" : ""} />
            <span className={menuOpen ? "open" : ""} />
          </button>
        </nav>
        <div className={`nav-mobile-drawer ${menuOpen ? "nav-mobile-drawer--open" : ""}`}>
          <ul>
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={`/${href}`} onClick={() => setMenuOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────── */}
      <div className="bp-hero">
        <div className="bp-hero-inner">
          <Link to="/" className="bp-breadcrumb">← Back to home</Link>
          <span className="bp-category">From The Blog</span>
          <h1 className="bp-title">Insights &amp; Updates</h1>
          <p className="bp-excerpt">
            Practical advice on SEO, web design, and growing your business online.
          </p>
        </div>
      </div>

      {/* ── Post list ───────────────────────────── */}
      <main className="bl-main">
        {loading ? (
          <div className="bl-loading">
            <div className="bp-spinner" />
          </div>
        ) : posts.length === 0 ? (
          <p className="bl-empty">No posts yet — check back soon.</p>
        ) : (
          <div className="bl-grid">
            {posts.map((post) => {
              const slug = getSlug(post);
              return (
                <Link to={`/blog/${slug}`} key={post.id} className="bl-card">
                  {post.coverImage ? (
                    <div className="bl-card-img-wrap">
                      <img src={post.coverImage} alt={post.title} className="bl-card-img" />
                    </div>
                  ) : (
                    <div className="bl-card-img-placeholder" />
                  )}
                  <div className="bl-card-body">
                    {post.category && (
                      <span className="bl-card-category">{post.category}</span>
                    )}
                    <h2 className="bl-card-title">{post.title}</h2>
                    {post.excerpt && (
                      <p className="bl-card-excerpt">{post.excerpt}</p>
                    )}
                    <div className="bl-card-footer">
                      <span className="bl-card-date">{formatDate(post.date)}</span>
                      <span className="bl-card-read">Read article →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>

      {/* ── Footer ──────────────────────────────── */}
      <footer id="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="/"><img src="/spark-logo.png" alt="Spark Digital & SEO" className="footer-logo" /></a>
            <p className="footer-tagline">Helping businesses get noticed, remembered, and trusted online.</p>
          </div>
          <nav className="footer-nav">
            <p className="footer-nav-heading">Navigation</p>
            <ul>
              {navLinks.map(({ label, href }) => (
                <li key={label}><a href={`/${href}`}>{label}</a></li>
              ))}
            </ul>
          </nav>
          <div className="footer-contact">
            <p className="footer-nav-heading">Get In Touch</p>
            <ul>
              <li><a href="mailto:connect@sparkdigistudio.com">connect@sparkdigistudio.com</a></li>
              <li><a href="tel:+447985390098">+44 798 539 0098</a></li>
              <li>Monday – Friday, 9 am – 6 pm</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Spark Digital & SEO. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default BlogList;
