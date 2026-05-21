import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../../tina/__generated__/client";
import { navLinks } from "../constants";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.queries
      .post({ relativePath: `${slug}.mdx` })
      .then((res) => {
        setPost(res.data.post);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="bp-loading">
        <div className="bp-spinner" />
        <p>Loading article…</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="bp-error">
        <p className="bp-error-code">404</p>
        <h1>Article not found</h1>
        <Link to="/" className="bp-back-btn">← Back to home</Link>
      </div>
    );
  }

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

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
              <li key={label}>
                <a href={`/${href}`}>{label}</a>
              </li>
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
          <Link to="/" className="bp-breadcrumb">← Back to Insights</Link>
          {post.category && <span className="bp-category">{post.category}</span>}
          <h1 className="bp-title">{post.title}</h1>
          {post.excerpt && <p className="bp-excerpt">{post.excerpt}</p>}
          <div className="bp-meta">
            {formattedDate && <span className="bp-date">{formattedDate}</span>}
            <span className="bp-divider">·</span>
            <span className="bp-brand">Spark Digital & SEO</span>
          </div>
        </div>
      </div>

      {/* ── Article body ────────────────────────── */}
      <main className="bp-main">
        <article className="bp-article">

          {/* Cover image inside article for natural spacing */}
          {post.coverImage && (
            <img src={post.coverImage} alt={post.title} className="bp-cover" />
          )}

          <div className="bp-body">
            {post.body?.children
              ?.filter((block) => {
                // drop empty paragraphs
                if (block.type === "p") {
                  const text = block.children?.map((n) => n.text ?? "").join("").trim();
                  return text.length > 0;
                }
                return true;
              })
              .map((block, i) => renderBlock(block, i))}
          </div>

          {/* ── CTA ─────────────────────────────── */}
          <div className="bp-cta">
            <p className="bp-cta-eyebrow">Spark Digital & SEO</p>
            <p className="bp-cta-heading">Ready to grow your business online?</p>
            <a
              href="/"
              className="neon-btn"
              onClick={(e) => {
                e.preventDefault();
                sessionStorage.setItem("scrollTo", "packages");
                window.location.href = "/";
              }}
            >See Our Packages</a>
          </div>

          <div className="bp-end">
            <Link to="/" className="bp-back-link">← Back to all articles</Link>
          </div>
        </article>
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

/* ── MDX block renderer ───────────────────────────────────── */
function renderBlock(block, key) {
  switch (block.type) {
    case "h1": return <h1 key={key}>{renderInline(block.children)}</h1>;
    case "h2": return <h2 key={key}>{renderInline(block.children)}</h2>;
    case "h3": return <h3 key={key}>{renderInline(block.children)}</h3>;
    case "h4": return <h4 key={key}>{renderInline(block.children)}</h4>;
    case "p":  return <p  key={key}>{renderInline(block.children)}</p>;
    case "hr": return <hr key={key} />;
    case "img":
    case "image": {
      const imgSrc = block.url || block.src || block.href || "";
      return (
        <figure key={key} className="bp-body-figure">
          <img src={imgSrc} alt={block.alt || block.title || ""} className="bp-body-img" />
          {block.caption && <figcaption className="bp-body-caption">{block.caption}</figcaption>}
        </figure>
      );
    }
    case "blockquote":
      return (
        <blockquote key={key}>
          {block.children?.map((c, i) => renderBlock(c, i))}
        </blockquote>
      );
    case "ul":
      return (
        <ul key={key}>
          {block.children?.map((li, i) => (
            <li key={i}>{renderInline(li.children?.[0]?.children ?? li.children)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={key}>
          {block.children?.map((li, i) => (
            <li key={i}>{renderInline(li.children?.[0]?.children ?? li.children)}</li>
          ))}
        </ol>
      );
    default: return null;
  }
}

function renderInline(nodes) {
  if (!nodes) return null;
  return nodes.map((node, i) => {
    if (!node) return null;
    // Images can end up as inline nodes in some Tina AST versions
    if (node.type === "img" || node.type === "image") {
      const src = node.url || node.src || "";
      return <img key={i} src={src} alt={node.alt || ""} className="bp-body-img" style={{ display: "block", margin: "1.5rem 0" }} />;
    }
    if (node.type === "a")    return <a key={i} href={node.url} target="_blank" rel="noopener noreferrer">{renderInline(node.children)}</a>;
    if (node.type === "code") return <code key={i}>{node.value ?? node.text}</code>;
    if (node.bold && node.italic) return <strong key={i}><em>{node.text}</em></strong>;
    if (node.bold)   return <strong key={i}>{node.text}</strong>;
    if (node.italic) return <em key={i}>{node.text}</em>;
    if (node.code)   return <code key={i}>{node.text}</code>;
    return node.text ?? null;
  });
}

export default BlogPost;
