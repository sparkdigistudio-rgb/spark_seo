import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const skills = [
  { label: "SEO", pct: 95 },
  { label: "Website Development", pct: 90 },
  { label: "Website Design", pct: 92 },
  { label: "Graphic Design", pct: 85 },
  { label: "Photo Editing", pct: 90 },
];

const team = [
  {
    role: "Web Designers",
    icon: "🎨",
    desc: "Our team of skilled website designers creates visually stunning websites that not only align with your brand's image but also provide a seamless user experience. We understand the importance of first impressions and strive to design websites that captivate your audience and drive conversions.",
  },
  {
    role: "Web Developers",
    icon: "💻",
    desc: "Our web developers are experts at crafting functional and user-friendly websites with responsive web design. At Spark Digital & SEO, we understand the importance of a positive user experience and ensure that your website is easy to navigate, loads quickly, and is compatible with all devices.",
  },
  {
    role: "Content Writers",
    icon: "✍️",
    desc: "We wouldn't get far without our talented content writers, who create engaging and informative content that aligns with your business goals and helps you generate organic leads. We specialize in crafting persuasive blog posts, articles, social media content, and other marketing materials.",
  },
  {
    role: "SEO Specialists",
    icon: "🔍",
    desc: "Our SEO experts optimize your website and content to improve your visibility in search engine results. We utilize a variety of strategies, including blog posts, articles, Google My Business listings, social media posts, and more, to help you attract organic traffic and generate leads.",
  },
  {
    role: "Graphic Designers",
    icon: "🖌️",
    desc: "The graphic designer team creates visually stunning designs that capture your brand's essence. From logo design to branding services, company profiles, and more, we offer a wide range of graphic design services to enhance your brand's image and make a lasting impression.",
  },
  {
    role: "Photo Editors",
    icon: "📷",
    desc: "Our photo editors are skilled at retouching, toning, and light control in various types of photography, including fashion, product, food, architectural, and interior photography. We can help you enhance the quality and impact of your images and create stunning works of art.",
  },
];

const pillars = [
  {
    label: "Our Vision",
    text: "To be the leading digital design studio renowned for our innovative and creative solutions that help businesses thrive in the digital age.",
  },
  {
    label: "Our Mission",
    text: "To deliver exceptional digital experiences that captivate audiences, drive results, and help our clients reach their target markets.",
  },
  {
    label: "Our Values",
    text: "At Spark Digital & SEO, we believe in the power of creativity, collaboration, and excellence.",
  },
];

const About = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const section = skillsRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.querySelectorAll(".about-skill-bar").forEach((bar) => {
            bar.style.animationPlayState = "running";
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="about-page">
      <NavBar />

      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <p className="hero-eyebrow">About Us</p>
          <h1 className="about-hero-title">
            A Passion For<br />
            <span className="about-hero-accent">Digital Design Solutions</span>
          </h1>
          <p className="about-hero-sub">What Makes Us Awesome?</p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="about-intro">
        <div className="about-container">
          <div className="about-intro-text">
            <p>
              You may have noticed that our world is suddenly dominated by AI-generated content. We stand
              out by offering digital solutions and SEO services that are <strong>created by humans for humans</strong>.
              No machine can come close to the potential of the human brain, and we believe in the power of
              creativity as well as the importance of personalized service. That's why, unlike mass-production
              agencies churning out multiple projects at lightning speed, we carefully select a limited number
              of clients at a time to ensure each project receives our undivided attention.
            </p>
            <p>
              At our creative agency, we've got a team of experienced and talented professionals who are
              passionate about helping businesses stand out from the crowd. We go beyond cookie-cutter designs
              to create unique and innovative solutions that capture your brand's essence and really resonate
              with your target audience.
            </p>
            <p>
              By giving you a creative edge, our sincere and professional advice, and putting our all into
              your project, we help you differentiate yourself in a world that's saturated with generic content.
            </p>
          </div>
        </div>
      </section>

      {/* ── Vision / Mission / Values ── */}
      <section className="about-pillars">
        <div className="about-container">
          <div className="about-pillars-grid">
            {pillars.map((p) => (
              <div key={p.label} className="about-pillar-card">
                <h3 className="about-pillar-label">{p.label}</h3>
                <p className="about-pillar-text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="about-team">
        <div className="about-container">
          <p className="hero-eyebrow" style={{ textAlign: "center", marginBottom: "12px" }}>The People Behind The Work</p>
          <h2 className="about-section-title" style={{ textAlign: "center", marginBottom: "48px" }}>
            Our Team Is Made Up Of
          </h2>
          <div className="about-team-grid">
            {team.map((member) => (
              <div key={member.role} className="about-team-card">
                <div className="about-team-icon">{member.icon}</div>
                <h3 className="about-team-role">{member.role}</h3>
                <p className="about-team-desc">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills Infographic ── */}
      <section className="about-skills" ref={skillsRef}>
        <div className="about-container">
          <h2 className="about-section-title" style={{ textAlign: "center", marginBottom: "48px" }}>
            Our Expertise
          </h2>
          <div className="about-skills-wrap">
            {skills.map((s) => (
              <div key={s.label} className="about-skill-row">
                <div className="about-skill-header">
                  <span className="about-skill-label">{s.label}</span>
                  <span className="about-skill-badge">{s.pct}%</span>
                </div>
                <div className="about-skill-track">
                  <div
                    className="about-skill-bar"
                    style={{ "--skill-pct": `${s.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="about-story">
        <div className="about-container">
          <div className="about-story-inner">
            <div className="about-story-text">
              <p className="hero-eyebrow" style={{ marginBottom: "12px" }}>Our Story</p>
              <h2 className="about-section-title" style={{ marginBottom: "28px" }}>
                Where It All Began
              </h2>
              <p>
                We're a UK-based woman-owned and operated digital design studio with a passion for all
                things artistic. In a world that often lacks beauty, we're here to add a touch of magic
                to the digital realm. We believe that your online presence should be something you can
                truly brag about.
              </p>
              <p>
                With experience in SEO services, graphic design, digital marketing services, professional
                photo editing, and content writing, I've always dreamed of creating something truly unique.
                It's time to put my passion and talent to good use and offer a niche clientele exceptional
                digital artistry.
              </p>
              <p className="about-story-sig">— Sherry K.</p>
            </div>
            <div className="about-story-badge">
              <div className="about-story-badge-inner">
                <span className="about-story-badge-icon">✦</span>
                <span className="about-story-badge-line">UK-Based</span>
                <span className="about-story-badge-line">Woman-Owned</span>
                <span className="about-story-badge-line">& Operated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-inner">
          <p className="cta-eyebrow">Let's Work Together</p>
          <h2 className="cta-heading">
            Want To Know More?<br />
            <span className="cta-heading-accent">Get In Touch With Us Today</span>
          </h2>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-btn-primary">Get a Quote</Link>
            <a href="/#packages" className="cta-btn-secondary">Check Our Packages</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
