import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={scrolled ? "scrolled" : ""}>
            <nav>
                {/* Logo */}
                <a href="#hero" className="nav-logo">
                    <img src="/spark-logo.png" alt="Spark Digital & SEO" />
                </a>

                {/* Desktop links */}
                <ul className="nav-links-desktop">
                    {navLinks.map(({ label, href }) => (
                        <li key={label}>
                            <a href={href}>{label}</a>
                        </li>
                    ))}
                </ul>

                {/* Mobile hamburger */}
                <button
                    className="nav-hamburger"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className={menuOpen ? "open" : ""}></span>
                    <span className={menuOpen ? "open" : ""}></span>
                    <span className={menuOpen ? "open" : ""}></span>
                </button>
            </nav>

            {/* Mobile menu drawer */}
            <div className={`nav-mobile-drawer ${menuOpen ? "nav-mobile-drawer--open" : ""}`}>
                <ul>
                    {navLinks.map(({ label, href }) => (
                        <li key={label}>
                            <a href={href} onClick={() => setMenuOpen(false)}>
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default NavBar;
