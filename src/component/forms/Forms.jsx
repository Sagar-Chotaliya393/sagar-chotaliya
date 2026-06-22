import "./Forms.css";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaFileAlt, FaCheckCircle, FaDatabase, FaBan, FaMagic, FaShieldAlt } from "react-icons/fa";

function Forms() {
  return (
    <div className="af-page">

      {/* ── HERO HEADER ── */}
      <div className="af-hero">
        <div className="af-hero-bg" />
        <div className="af-hero-content">
          <Link to="/" className="af-back-btn">
            <FaArrowLeft size={13} />
            Back to Home
          </Link>
          <p className="af-eyebrow">Practice & examples</p>
          <h1 className="af-title">Forms</h1>
          <p className="af-subtitle">
            A small collection of form patterns — from plain inputs
            to validated fields and data persistence examples.
          </p>
          <div className="af-stats">
            <div className="af-stat"><span>6</span><p>Form Types</p></div>
            <div className="af-stat-divider" />
            <div className="af-stat"><span>React</span><p>Built With</p></div>
          </div>
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="af-container">
        <div className="af-grid">

          {/* 1 */}
          <Link to="/forms/simple" className="af-card af-card--green">
            <div className="af-card-top-bar" />
            <div className="af-card-icon af-icon--green">
              <FaFileAlt />
            </div>
            <div className="af-badge af-badge--green">No Validation</div>
            <h2 className="af-card-title">Simple Form</h2>
            <p className="af-card-desc">
              A basic form with plain input fields. No validation, no
              storage — just a clean starting point for collecting input.
            </p>
          </Link>

          {/* 2 */}
          <Link to="/forms/validation" className="af-card af-card--blue">
            <div className="af-card-top-bar" />
            <div className="af-card-icon af-icon--blue">
              <FaCheckCircle />
            </div>
            <div className="af-badge af-badge--blue">With Validation</div>
            <h2 className="af-card-title">Validation Form</h2>
            <p className="af-card-desc">
              Validates required fields, email format, and length before
              allowing submission, with clear inline error messages.
            </p>
          </Link>

          {/* 3 */}
          <Link to="/forms/data-store" className="af-card af-card--purple">
            <div className="af-card-top-bar" />
            <div className="af-card-icon af-icon--purple">
              <FaDatabase />
            </div>
            <div className="af-badge af-badge--purple">Data Saved</div>
            <h2 className="af-card-title">Data Store Form</h2>
            <p className="af-card-desc">
              Submitted data is saved — to local state, localStorage, or
              a backend — and can be viewed again after submission.
            </p>
          </Link>

          {/* 4 */}
          <Link to="/forms/no-store" className="af-card af-card--amber">
            <div className="af-card-top-bar" />
            <div className="af-card-icon af-icon--amber">
              <FaBan />
            </div>
            <div className="af-badge af-badge--amber">Not Saved</div>
            <h2 className="af-card-title">Data Not Store Form</h2>
            <p className="af-card-desc">
              Collects input and submits it, but nothing is persisted
              afterward — useful for one-off or stateless actions.
            </p>
          </Link>

          {/* 5 */}
          <Link to="/forms/formik-yup" className="af-card af-card--pink">
            <div className="af-card-top-bar" />
            <div className="af-card-icon af-icon--pink">
              <FaMagic />
            </div>
            <div className="af-badge af-badge--pink">Formik + Yup</div>
            <h2 className="af-card-title">Formik & Yup Validation</h2>
            <p className="af-card-desc">
              Form state managed with Formik and validated using a Yup
              schema — covering required fields, email format, and
              minimum length rules with inline error messages.
            </p>
          </Link>

          {/* 6 */}
          <Link to="/forms/zod" className="af-card af-card--teal">
            <div className="af-card-top-bar" />
            <div className="af-card-icon af-icon--teal">
              <FaShieldAlt />
            </div>
            <div className="af-badge af-badge--teal">Zod Validation</div>
            <h2 className="af-card-title">Zod Validation Form</h2>
            <p className="af-card-desc">
              Form input parsed and validated through a type-safe Zod
              schema, demonstrating schema-first validation with clear,
              structured error handling.
            </p>
          </Link>

        </div>
      </div>

    </div>
  );
}

export default Forms;