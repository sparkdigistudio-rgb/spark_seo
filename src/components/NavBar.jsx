import { useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <nav>
                {/* Wordmark */}
                <a href="#hero" className="nav-wordmark">
                    Spark<span>.</span>
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
