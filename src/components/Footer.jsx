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
                    <div className="footer-socials">
                        <a href="https://x.com/sparkdigistudio" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="X / Twitter">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/sparkdigistudio" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                        <a href="https://www.linkedin.com/company/spark-digital-studio-seo/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                        <a href="https://www.facebook.com/share/1BmCwDDdLC/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                        <a href="https://www.threads.com/@sparkdigistudio" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Threads">
                            <svg width="16" height="16" viewBox="0 0 192 192" fill="currentColor"><path d="M141.537 88.988c-1.044-.498-2.1-.975-3.166-1.431-1.483-27.307-16.403-42.94-41.457-43.1h-.37c-14.985 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.347-10.548.077 0 .154 0 .231.001 8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.625-23.68-1.14-23.82 1.372-39.134 15.265-38.105 34.569.52 9.792 5.398 18.216 13.733 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.23-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.351-22.809-.169-40.059-7.484-51.275-21.742C35.248 124.356 29.82 105.072 29.617 80.39c.203-24.68 5.63-43.966 16.133-57.317C56.964 9.066 74.214 1.75 97.023 1.581c22.966.171 40.52 7.521 52.164 21.848 5.71 7.025 10.016 15.861 12.854 26.162l16.147-4.308c-3.44-12.591-8.853-23.572-16.219-32.668C148.012 4.487 126.178-4.924 98.044-5.12h-.131C69.837-4.919 48.248 4.528 33.744 22.965 20.838 39.372 14.18 62.201 13.956 90.818L13.948 91l.008.069c.225 28.617 6.882 51.447 19.789 67.853 14.504 18.437 36.094 27.885 64.17 28.078h.13c25.06-.173 42.655-6.708 57.149-21.189 18.963-18.945 18.392-42.692 12.142-57.27-4.484-10.454-13.033-18.946-24.723-24.553zM98.44 129.507c-10.44.588-21.286-4.098-21.821-14.135-.384-7.442 5.308-15.746 22.474-16.735 1.966-.113 3.895-.168 5.79-.168 6.235 0 12.068.606 17.371 1.765-1.978 24.702-13.58 28.713-23.814 29.273z"/></svg>
                        </a>
                    </div>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
