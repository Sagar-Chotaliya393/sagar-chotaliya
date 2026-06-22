import "./SimpleValidationForm.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle, FaPaperPlane, FaExclamationCircle } from "react-icons/fa";

function ValidationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
    alert(`Form submitted successfully!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="vf-page">

      {/* ── HERO HEADER ── */}
      <div className="vf-hero">
        <div className="vf-hero-bg" />
        <div className="vf-hero-content">
          <Link to="/forms" className="vf-back-btn">
            <FaArrowLeft size={13} />
            Back to Forms
          </Link>
          <div className="vf-hero-icon">
            <FaCheckCircle />
          </div>
          <p className="vf-eyebrow">With Validation</p>
          <h1 className="vf-title">Validation Form</h1>
          <p className="vf-subtitle">
            Validates required fields, email format, and length before
            allowing submission, with clear inline error messages.
          </p>
        </div>
      </div>

      {/* ── FORM CARD ── */}
      <div className="vf-container">
        <form className="vf-card" onSubmit={handleSubmit} noValidate>

          <div className="vf-input-group">
            <label className="vf-label" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              className={`vf-input ${errors.name ? "vf-input--error" : ""}`}
            />
            {errors.name && (
              <span className="vf-error"><FaExclamationCircle size={11} /> {errors.name}</span>
            )}
          </div>

          <div className="vf-input-group">
            <label className="vf-label" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className={`vf-input ${errors.email ? "vf-input--error" : ""}`}
            />
            {errors.email && (
              <span className="vf-error"><FaExclamationCircle size={11} /> {errors.email}</span>
            )}
          </div>

          <div className="vf-input-group">
            <label className="vf-label" htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="10-digit phone number"
              value={formData.phone}
              onChange={handleChange}
              className={`vf-input ${errors.phone ? "vf-input--error" : ""}`}
            />
            {errors.phone && (
              <span className="vf-error"><FaExclamationCircle size={11} /> {errors.phone}</span>
            )}
          </div>

          <div className="vf-input-group">
            <label className="vf-label" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write at least 10 characters..."
              value={formData.message}
              onChange={handleChange}
              className={`vf-input vf-textarea ${errors.message ? "vf-input--error" : ""}`}
            />
            {errors.message && (
              <span className="vf-error"><FaExclamationCircle size={11} /> {errors.message}</span>
            )}
          </div>

          <button type="submit" className="vf-submit-btn">
            Submit <FaPaperPlane size={13} />
          </button>

          {submitted && (
            <p className="vf-success">✅ Submitted successfully!</p>
          )}

        </form>
      </div>

    </div>
  );
}

export default ValidationForm;