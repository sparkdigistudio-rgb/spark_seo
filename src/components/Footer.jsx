import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer id="footer">
            <div className="footer-inner">
                {/* Logo + tagline */}
                <div className="footer-brand">
                    <Link to="/">
                        <img src="/spark-logo.png" alt="Spark Digital & SEO" className="footer-logo" />
                    </Link>
                    <p className="footer-tagline">
                        Helping businesses get noticed, remembered, and trusted online.
                    </p>
                </div>

                {/* Nav links */}
                <nav className="footer-nav">
                    <p className="footer-nav-heading">Navigation</p>
                    <ul>
                        {navLinks.map(({ label, href }) => (
                            <li key={label}>
                                {href.startsWith("/") ? <Link to={href}>{label}</Link> : <a href={href}>{label}</a>}
                            </li>
                        ))}
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </nav>

                {/* Contact */}
                <div className="footer-contact">
                    <p className="footer-nav-heading">Get In Touch</p>
                    <ul>
                        <li>
                            <a href="mailto:connect@sparkdigistudio.com">connect@sparkdigistudio.com</a>
                        </li>
                        <li>
                            <a href="tel:+447985390098">+44 798 539 0098</a>
                        </li>
                        <li>Monday – Friday, 9 am – 6 pm</li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
                <p>© {year} Spark Digital & SEO. All rights reserved.</p>
                <div className="footer-bottom-links">
                    <a
                        href="https://www.linkedin.com/company/spark-digital-studio-seo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                        aria-label="LinkedIn"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
