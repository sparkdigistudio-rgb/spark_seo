import { navLinks } from "../constants";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer id="footer">
            <div className="footer-inner">
                {/* Logo + tagline */}
                <div className="footer-brand">
                    <a href="#hero">
                        <img src="/spark-logo.png" alt="Spark Digital & SEO" className="footer-logo" />
                    </a>
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
                                <a href={href}>{label}</a>
                            </li>
                        ))}
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
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
