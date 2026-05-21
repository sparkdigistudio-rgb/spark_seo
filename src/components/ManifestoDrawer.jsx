import { useState } from "react";

const ManifestoDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sticky tab */}
      <button
        className={`manifesto-tab${open ? " manifesto-tab--open" : ""}`}
        onClick={() => setOpen(true)}
        aria-label="Open our philosophy"
      >
        <span className="manifesto-tab-text">Our Philosophy</span>
      </button>

      {/* Backdrop */}
      {open && (
        <div className="manifesto-backdrop" onClick={() => setOpen(false)} />
      )}

      {/* Drawer */}
      <div className={`manifesto-drawer${open ? " manifesto-drawer--open" : ""}`}>
        <button className="manifesto-close" onClick={() => setOpen(false)} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="manifesto-content">
          <p className="manifesto-eyebrow">What Drives Us</p>
          <h2 className="manifesto-title">
            Where Passion<br />
            <span className="manifesto-accent">Meets Creativity</span>
          </h2>
          <p className="manifesto-subtitle">Exquisite Digital Solutions &amp; Works Of Art</p>

          <div className="manifesto-divider" />

          <p className="manifesto-body">
            Our passion lies in putting together bespoke and exquisite designs and digital solutions
            that get our clients the desired results while aligning with their goals. We're driven by
            the desire to help our clients realise their visions for perfection and bring them to life
            through innovative design and cutting-edge techniques, as well as a passion for nothing
            short of extraordinary.
          </p>

          <p className="manifesto-body">
            What's passion without creativity? At Spark Digital Studio &amp; SEO, we believe in pushing
            boundaries and thinking outside the box to create works of art that are truly unique and
            impactful digital experiences. Our team of talented website designers, developers, and
            content writers are dedicated to bringing your ideas to life with a touch of artistry and
            innovation.
          </p>

          <div className="manifesto-sig">✦ Spark Digital Studio &amp; SEO</div>
        </div>
      </div>
    </>
  );
};

export default ManifestoDrawer;
