import "./Header.css";
import { useEffect, useState, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Header() {

  const location = useLocation();
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    const sections = document.querySelectorAll("section[id]");
    let current = "home";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 150) {
        current = section.getAttribute("id");
      }
    });
    setActive(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>

      <Link to="/" className="logo" aria-label="Go to top">
        Sagar<span>.dev</span>
      </Link>

      {/* Desktop Nav */}

      {
        location.pathname === '/' ?
          (
            <nav className="nav-links" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={active === link.id ? "active" : ""}
                  aria-current={active === link.id ? "page" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          ) : null
      }


      {/* Mobile Hamburger */}

      {
        location.pathname === '/' ?
          (<button
            className="hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>) : null
      }


      {/* Mobile Menu Overlay */}

      {
        location.pathname === '/' ?
          (
            <div
              className={`mobile-overlay ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
          ) : null
      }


      {/* Mobile Menu */}
      {
        location.pathname === "/" && (
          <nav
            className={`mobile-menu ${menuOpen ? "open" : ""}`}
            aria-label="Mobile navigation"
            aria-hidden={!menuOpen}
          >
            <button
              className="mobile-menu-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              tabIndex={menuOpen ? 0 : -1}
            >
              <FaTimes />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={active === link.id ? "active" : ""}
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )
      }

    </header>
  );
}

export default Header;