import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <p className="cta-eyebrow">Ready to Grow?</p>
        <h2 className="cta-heading">
          Your Brand Could Be<br />
          <span className="cta-heading-accent">The Next Big Thing</span>
        </h2>
        <p className="cta-sub">We'll Get You Noticed</p>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-btn-primary">
            Get a Quote
          </Link>
          <a href="#packages" className="cta-btn-secondary">
            Check Our Packages
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
