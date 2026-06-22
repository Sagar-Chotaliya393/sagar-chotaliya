import "./SimpleForm.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaFileAlt, FaPaperPlane } from "react-icons/fa";

function SimpleForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No validation, no storage — just demonstrates plain submission
    alert(`Submitted!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="sf-page">

      {/* ── HERO HEADER ── */}
      <div className="sf-hero">
        <div className="sf-hero-bg" />
        <div className="sf-hero-content">
          <Link to="/forms" className="sf-back-btn">
            <FaArrowLeft size={13} />
            Back to Forms
          </Link>
          <div className="sf-hero-icon">
            <FaFileAlt />
          </div>
          <p className="sf-eyebrow">No Validation</p>
          <h1 className="sf-title">Simple Form</h1>
          <p className="sf-subtitle">
            A basic form with plain input fields. No validation, no
            storage — just a clean starting point for collecting input.
          </p>
        </div>
      </div>

      {/* ── FORM CARD ── */}
      <div className="sf-container">
        <form className="sf-card" onSubmit={handleSubmit}>

          <div className="sf-input-group">
            <label className="sf-label" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              className="sf-input"
            />
          </div>

          <div className="sf-input-group">
            <label className="sf-label" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className="sf-input"
            />
          </div>

          <div className="sf-input-group">
            <label className="sf-label" htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 00000 00000"
              value={formData.phone}
              onChange={handleChange}
              className="sf-input"
            />
          </div>

          <div className="sf-input-group">
            <label className="sf-label" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write something..."
              value={formData.message}
              onChange={handleChange}
              className="sf-input sf-textarea"
            />
          </div>

          <button type="submit" className="sf-submit-btn">
            Submit <FaPaperPlane size={13} />
          </button>

        </form>
      </div>

    </div>
  );
}

export default SimpleForm;