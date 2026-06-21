import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { navLinks } from "../constants";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const renderLink = (href, label, onClick) => {
        if (href.startsWith("/#")) {
            const id = href.slice(2);
            const handleHashClick = (e) => {
                e.preventDefault();
                if (location.pathname === "/") {
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                } else {
                    sessionStorage.setItem("scrollTo", id);
                    navigate("/");
                }
                onClick?.();
            };
            return <a href={href} onClick={handleHashClick}>{label}</a>;
        }
        if (href.startsWith("/")) {
            return <Link to={href} onClick={onClick}>{label}</Link>;
        }
        return <a href={href} onClick={onClick}>{label}</a>;
    };

    return (
        <header className={scrolled ? "scrolled" : ""}>
            <nav>
                {/* Logo */}
                <Link to="/" className="nav-logo">
                    <img src="/spark-logo.png" alt="Spark Digital & SEO" />
                </Link>

                {/* Desktop links */}
                <ul className="nav-links-desktop">
                    {navLinks.map(({ label, href }) => (
                        <li key={label}>
                            {renderLink(href, label)}
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
                            {renderLink(href, label, () => setMenuOpen(false))}
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default NavBar;
