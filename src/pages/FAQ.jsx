import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const faqs = [
  {
    category: "Digital Design",
    items: [
      {
        q: "What is the typical timeline for creating a website?",
        a: "While the average timeline is two weeks, we can often expedite the process depending on our current workload.",
      },
      {
        q: "What sets your digital design studio apart from others?",
        a: "We prioritise transparency, open communication, and a passion for creativity in all our projects.",
      },
      {
        q: "Why shouldn't I use AI for my digital design needs?",
        a: "While AI can be a helpful tool, it often leads to generic and unoriginal designs, especially when it comes to content writing. Our human touch ensures that your project stands out from the crowd.",
      },
    ],
  },
  {
    category: "Website Design & Development",
    items: [
      {
        q: "How long does it typically take to design and develop a website?",
        a: "The timeline varies depending on the complexity of the project, but we strive to complete most websites within two weeks.",
      },
      {
        q: "What is included in your website design and development packages?",
        a: "Our packages typically include website design, development, content creation, and basic SEO optimisation.",
      },
    ],
  },
  {
    category: "Graphic Design",
    items: [
      {
        q: "What types of graphic design services do you offer?",
        a: "We offer a wide range of graphic design services, including logo design, branding, social media graphics, print materials, and more.",
      },
      {
        q: "How long does it typically take to complete a graphic design project?",
        a: "The timeline for graphic design projects depends on the complexity of the design. We strive to complete most projects within a reasonable timeframe.",
      },
    ],
  },
  {
    category: "Photo Editing",
    items: [
      {
        q: "How many images can you edit per day?",
        a: "We can typically edit ten images per day, but this can be adjusted based on the complexity of the edits and your specific needs.",
      },
      {
        q: "What types of photo editing services do you offer?",
        a: "Our photo editing services include retouching, colour correction, cropping, and other enhancements.",
      },
    ],
  },
  {
    category: "Search Engine Optimisation (SEO)",
    items: [
      {
        q: "What SEO strategies do you use to improve website visibility?",
        a: "We employ a variety of SEO strategies, including on-page optimisation, off-page optimisation, and content marketing.",
      },
      {
        q: "How long does it typically take to see results from your SEO efforts?",
        a: "SEO results can vary, but we typically see improvements in organic traffic and improved search engine rankings within a few months.",
      },
    ],
  },
  {
    category: "Content Writing",
    items: [
      {
        q: "What types of content do you create?",
        a: "We create a variety of content, including blog posts, articles, social media posts, GMB posts, and website copy.",
      },
      {
        q: "How do you ensure that the content you create is relevant and engaging?",
        a: "We conduct thorough research and tailor our content to your target audience and industry.",
      },
    ],
  },
  {
    category: "General",
    items: [
      {
        q: "What are your payment terms?",
        a: "We require 100% upfront payment per month. We also offer discounted rates for advance payments of 3, 6, or 12 months in our complete SEO packages.",
      },
      {
        q: "How can I make a payment?",
        a: "You can make payments online through our platform using a debit or credit card or by transferring funds directly to our bank account.",
      },
    ],
  },
];

const AccordionItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " faq-item--open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="faq-icon">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="faq-answer"><p>{a}</p></div>}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="faq-page">
      <NavBar />

      {/* Hero */}
      <section className="faq-hero">
        <div className="faq-hero-inner">
          <p className="hero-eyebrow">Got Questions?</p>
          <h1 className="faq-hero-title">
            Frequently Asked<br />
            <span className="faq-hero-accent">Questions</span>
          </h1>
          <p className="faq-hero-sub">
            Everything you need to know about working with Spark Digital &amp; SEO.
          </p>
        </div>
      </section>

      {/* FAQ content */}
      <section className="faq-content">
        <div className="faq-container">
          {faqs.map((section) => (
            <div key={section.category} className="faq-section">
              <h2 className="faq-category">{section.category}</h2>
              <div className="faq-list">
                {section.items.map((item) => (
                  <AccordionItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <p className="cta-eyebrow">Still Have Questions?</p>
          <h2 className="cta-heading">
            We're Happy To Help<br />
            <span className="cta-heading-accent">Get In Touch Today</span>
          </h2>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-btn-primary">Contact Us</Link>
            <a href="/#packages" className="cta-btn-secondary">View Packages</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
