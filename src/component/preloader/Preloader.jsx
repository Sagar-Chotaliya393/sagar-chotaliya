import { useEffect, useState } from "react";
import "./Preloader.css";
import logo from "../../images/profile_image.jpeg";

function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 600);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      {/* Decorative background blobs to match hero gradient */}
      <div className="preloader-blob preloader-blob--top" />
      <div className="preloader-blob preloader-blob--bottom" />

      <div className="preloader-content">
        <div className="logo-wrapper">
          <div className="logo-glow" />
          <img src={logo} alt="Sagar.dev" className="preloader-logo" />
          <div className="logo-ring" />
        </div>

        <h2 className="preloader-text">
          Sagar<span>.dev</span>
        </h2>

        <p className="preloader-subtext">Loading experience...</p>

        <div className="preloader-dots">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export default Preloader;