import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../tina/__generated__/client";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <NavBar />

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

      <Footer />
    </div>
  );
};

export default BlogList;