import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Footer() {

  const location = useLocation();
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="footer-grid-pattern" />

      <div className="footer-inner">

        {/* Top CTA strip */}

        {
          location.pathname === '/' ?
            (
              <div className="footer-cta">
                <div>
                  <p className="footer-cta-eyebrow">Got something in mind?</p>
                  <h3 className="footer-cta-title">Let's build it together.</h3>
                </div>
                <a href="#contact" className="footer-cta-btn">
                  Start a conversation
                </a>
              </div>
            ) : null
        }


        <div className="footer-divider" />

        {/* Main Grid — Brand + Nav + Contact */}
        <div className="footer-main-grid">

          {/* Brand */}
          <div className="footer-brand">
            <h2 className="footer-logo">
              Sagar<span>.dev</span>
            </h2>
            <p className="footer-tagline">
              I'm a Surat-based developer who enjoys the unglamorous parts of
              the job too — fixing that one API bug at midnight, refactoring
              messy code, shipping things that actually work. Always up for
              a good project.
            </p>
            <div className="footer-socials">
              <a href="https://github.com/Sagar-Chotaliya393" target="_blank" rel="noreferrer"
                className="footer-social-icon" aria-label="GitHub">
                <FaGithub size={17} />
              </a>
              <a href="https://www.linkedin.com/in/sagar-chotaliya-b48a862a3/" target="_blank" rel="noreferrer"
                className="footer-social-icon" aria-label="LinkedIn">
                <FaLinkedin size={17} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"
                className="footer-social-icon footer-social-icon--insta" aria-label="Instagram">
                <FaInstagram size={17} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-list">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/forms" className="footer-link" style={{ display: "none"}}>
                  Forms Playground
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Reach Me</h4>
            <ul className="footer-list">
              <li>
                <a href="tel:+917990881893" className="footer-link footer-link--break">
                  +91 79908 81893
                </a>
              </li>
              <li>
                <a href="mailto:schotaliya52@gmail.com" className="footer-link footer-link--break">
                  schotaliya52@gmail.com
                </a>
              </li>
              <li className="footer-static">
                <FaMapMarkerAlt size={11} />
                Surat, Gujarat, India
              </li>
            </ul>

            <div className="footer-status">
              <span className="footer-dot" />
              Currently open to freelance work
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Sagar Chotaliya. Designed and coded by yours truly, line by line.
          </p>

          {
            location.pathname === '/' ?
              (
                <a href="#home" className="footer-back-top" aria-label="Back to top">
                  <FaArrowUp size={12} />
                  Back to top
                </a>
              ) : null
          }

        </div>

      </div>
    </footer>
  );
}

export default Footer;