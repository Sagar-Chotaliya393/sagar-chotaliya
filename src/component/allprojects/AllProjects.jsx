import "./AllProjects.css";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

function AllProjects() {
  return (
    <div className="ap-page">

      {/* ── HERO HEADER ── */}
      <div className="ap-hero">
        <div className="ap-hero-bg" />
        <div className="ap-hero-content">
          <Link to="/" className="ap-back-btn">
            <FaArrowLeft size={13} />
            Back to Home
          </Link>
          <p className="ap-eyebrow">Things I've built</p>
          <h1 className="ap-title">All Projects</h1>
          <p className="ap-subtitle">
            A complete collection of my work — from robust PHP backends
            to clean React frontends and full-stack production systems.
          </p>
          <div className="ap-stats">
            <div className="ap-stat"><span>12</span><p>Projects</p></div>
            <div className="ap-stat-divider" />
            <div className="ap-stat"><span>3+</span><p>Years</p></div>
            <div className="ap-stat-divider" />
            <div className="ap-stat"><span>12+</span><p>Technologies</p></div>
          </div>
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="ap-container">
        <div className="ap-grid">

          {/* 1 */}
          <div className="ap-card ap-card--green">
            <div className="ap-card-top-bar" />
            <div className="ap-badge ap-badge--green">PHP + Full Stack</div>
            <h2 className="ap-card-title">Library Management System</h2>
            <p className="ap-card-desc">
              Complete digital library solution for JD Gabani Library. Handles
              book issuing & receiving with automatic late fee calculation,
              member management, and real-time availability tracking.
              Generates detailed reports and receipts for every transaction.
            </p>
            <div className="ap-tags">
              <span>PHP</span>
              <span>CodeIgniter</span>
              <span>MySQL</span>
              <span>REST API</span>
              <span>Bootstrap</span>
            </div>
            <div className="ap-card-links">
              <a href="https://github.com/Sagar-Chotaliya393" target="_blank" rel="noreferrer">
                <FaGithub /> Code
              </a>
              <a href="https://jdgabanilibrary.com/" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt size={11} /> Live Demo
              </a>
            </div>
          </div>

          {/* 2 */}
          <div className="ap-card ap-card--blue">
            <div className="ap-card-top-bar" />
            <div className="ap-badge ap-badge--blue">eCommerce + API</div>
            <h2 className="ap-card-title">Mokonut eCommerce Platform</h2>
            <p className="ap-card-desc">
              Full-featured eCommerce website with online payment gateway
              integration for seamless order placement. Connected with
              Shiprocket for automated order fulfillment. Complete REST API
              for mobile app with order tracking and delivery management.
            </p>
            <div className="ap-tags">
              <span>PHP</span>
              <span>CodeIgniter</span>
              <span>MySQL</span>
              <span>Payment Gateway</span>
              <span>Shiprocket API</span>
            </div>
            <div className="ap-card-links">
              <a href="https://github.com/Sagar-Chotaliya393" target="_blank" rel="noreferrer">
                <FaGithub /> Code
              </a>
              <a href="https://mokonut.com/" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt size={11} /> Live Demo
              </a>
            </div>
          </div>

          {/* 3 */}
          <div className="ap-card ap-card--purple">
            <div className="ap-card-top-bar" />
            <div className="ap-badge ap-badge--purple">React App</div>
            <h2 className="ap-card-title">Profile & User Management</h2>
            <p className="ap-card-desc">
              React application featuring a personal profile page and full
              user management module. Includes user listing with individual
              detail views, routing between pages, and clean component
              architecture — actively in development.
            </p>
            <div className="ap-tags">
              <span>React</span>
              <span>React Router</span>
              <span>JavaScript</span>
              <span>Tailwind CSS</span>
            </div>
            <div className="ap-card-links">
              <a href="https://github.com/Sagar-Chotaliya393" target="_blank" rel="noreferrer">
                <FaGithub /> Code
              </a>
              <a href="https://route-app-7kh5.vercel.app/" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt size={11} /> Live Demo
              </a>
            </div>
          </div>


          {/* 5 */}
          <div className="ap-card ap-card--green">
            <div className="ap-card-top-bar" />
            <div className="ap-badge ap-badge--green">PHP Backend</div>
            <h2 className="ap-card-title">REST API for Mobile App</h2>
            <p className="ap-card-desc">
              Scalable REST API built with PHP CodeIgniter to power a
              mobile application. Implements JWT-based authentication,
              role-based access control, and structured JSON responses
              for all endpoints.
            </p>
            <div className="ap-tags">
              <span>PHP</span>
              <span>CodeIgniter</span>
              <span>JWT</span>
              <span>MySQL</span>
              <span>Postman</span>
            </div>
            <div className="ap-card-links">
              <a href="https://github.com/Sagar-Chotaliya393" target="_blank" rel="noreferrer">
                <FaGithub /> Code
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt size={11} /> Live Demo
              </a>
            </div>
          </div>

          {/* 6 */}
          <div className="ap-card ap-card--blue">
            <div className="ap-card-top-bar" />
            <div className="ap-badge ap-badge--blue">React + Redux</div>
            <h2 className="ap-card-title">Shopping Cart App</h2>
            <p className="ap-card-desc">
              E-commerce UI built with React featuring a product listing,
              cart management, and checkout flow. State managed with Redux
              Toolkit and data fetching with TanStack Query for a smooth
              user experience.
            </p>
            <div className="ap-tags">
              <span>React</span>
              <span>Redux Toolkit</span>
              <span>TanStack Query</span>
              <span>Tailwind CSS</span>
            </div>
            <div className="ap-card-links">
              <a href="https://github.com/Sagar-Chotaliya393" target="_blank" rel="noreferrer">
                <FaGithub /> Code
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt size={11} /> Live Demo
              </a>
            </div>
          </div>

          {/* 7 */}
          <div className="ap-card ap-card--purple">
            <div className="ap-card-top-bar" />
            <div className="ap-badge ap-badge--purple">React App</div>
            <h2 className="ap-card-title">Weather Dashboard</h2>
            <p className="ap-card-desc">
              Live weather application using OpenWeatherMap API. Displays
              current weather, temperature, humidity, and 5-day forecast.
              Features city search, geolocation support, and a clean
              card-based UI.
            </p>
            <div className="ap-tags">
              <span>React</span>
              <span>OpenWeather API</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>
            <div className="ap-card-links">
              <a href="https://github.com/Sagar-Chotaliya393" target="_blank" rel="noreferrer">
                <FaGithub /> Code
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt size={11} /> Live Demo
              </a>
            </div>
          </div>

          {/* 8 */}
          <div className="ap-card ap-card--amber">
            <div className="ap-card-top-bar" />
            <div className="ap-badge ap-badge--amber">PHP + Full Stack</div>
            <h2 className="ap-card-title">School Management System</h2>
            <p className="ap-card-desc">
              Multi-role school management system with separate dashboards
              for admin, teachers, and students. Handles attendance, marks,
              fee records, timetables, and report card generation.
            </p>
            <div className="ap-tags">
              <span>PHP</span>
              <span>CodeIgniter</span>
              <span>MySQL</span>
              <span>Bootstrap</span>
            </div>
            <div className="ap-card-links">
              <a href="https://github.com/Sagar-Chotaliya393" target="_blank" rel="noreferrer">
                <FaGithub /> Code
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt size={11} /> Live Demo
              </a>
            </div>
          </div>

          {/* 9 */}
          <div className="ap-card ap-card--blue">
            <div className="ap-card-top-bar" />
            <div className="ap-badge ap-badge--blue">React + Formik</div>
            <h2 className="ap-card-title">Multi-Step Form App</h2>
            <p className="ap-card-desc">
              Complex multi-step registration form with real-time validation
              using Formik and Yup. Includes step progress indicator,
              field-level error messages, and a clean summary review
              screen before final submission.
            </p>
            <div className="ap-tags">
              <span>React</span>
              <span>Formik</span>
              <span>Yup</span>
              <span>Tailwind CSS</span>
            </div>
            <div className="ap-card-links">
              <a href="https://github.com/Sagar-Chotaliya393" target="_blank" rel="noreferrer">
                <FaGithub /> Code
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt size={11} /> Live Demo
              </a>
            </div>
          </div>

          {/* 10 */}
          <div className="ap-card ap-card--green">
            <div className="ap-card-top-bar" />
            <div className="ap-badge ap-badge--green">PHP Backend</div>
            <h2 className="ap-card-title">Invoice Generator System</h2>
            <p className="ap-card-desc">
              Business invoice generation system with client management,
              product/service listing, and PDF export. Supports GST
              calculations, discount logic, and email delivery of
              invoices directly to clients.
            </p>
            <div className="ap-tags">
              <span>PHP</span>
              <span>MySQL</span>
              <span>PDF Export</span>
              <span>Bootstrap</span>
            </div>
            <div className="ap-card-links">
              <a href="https://github.com/Sagar-Chotaliya393" target="_blank" rel="noreferrer">
                <FaGithub /> Code
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt size={11} /> Live Demo
              </a>
            </div>
          </div>

          {/* 11 */}
          <div className="ap-card ap-card--purple">
            <div className="ap-card-top-bar" />
            <div className="ap-badge ap-badge--purple">React App</div>
            <h2 className="ap-card-title">Task Manager (To-Do App)</h2>
            <p className="ap-card-desc">
              Productivity-focused task manager with categories, priority
              levels, and due dates. Features drag-and-drop task reordering,
              filter by status, and local storage persistence so tasks
              survive page refresh.
            </p>
            <div className="ap-tags">
              <span>React</span>
              <span>Context API</span>
              <span>JavaScript</span>
              <span>Tailwind CSS</span>
            </div>
            <div className="ap-card-links">
              <a href="https://github.com/Sagar-Chotaliya393" target="_blank" rel="noreferrer">
                <FaGithub /> Code
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt size={11} /> Live Demo
              </a>
            </div>
          </div>

          {/* 12 */}
          <div className="ap-card ap-card--amber">
            <div className="ap-card-top-bar" />
            <div className="ap-badge ap-badge--amber">PHP + API</div>
            <h2 className="ap-card-title">Inventory Management System</h2>
            <p className="ap-card-desc">
              Stock and inventory tracking system for small businesses.
              Manages products, suppliers, purchase orders, and stock
              levels. Sends low-stock alerts and generates monthly
              inventory reports automatically.
            </p>
            <div className="ap-tags">
              <span>PHP</span>
              <span>CodeIgniter</span>
              <span>MySQL</span>
              <span>REST API</span>
            </div>
            <div className="ap-card-links">
              <a href="https://github.com/Sagar-Chotaliya393" target="_blank" rel="noreferrer">
                <FaGithub /> Code
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt size={11} /> Live Demo
              </a>
            </div>
          </div>

          {/* 13 */}
          <div className="ap-card ap-card--blue">
            <div className="ap-card-top-bar" />
            <div className="ap-badge ap-badge--blue">React + Context</div>
            <h2 className="ap-card-title">Blog Platform UI</h2>
            <p className="ap-card-desc">
              Clean and minimal blog platform frontend with post listing,
              category filtering, single post detail view, and a rich
              text editor for writing. Implements lazy loading for images
              and skeleton screens while content loads.
            </p>
            <div className="ap-tags">
              <span>React</span>
              <span>Context API</span>
              <span>React Router</span>
              <span>Tailwind CSS</span>
            </div>
            <div className="ap-card-links">
              <a href="https://github.com/Sagar-Chotaliya393" target="_blank" rel="noreferrer">
                <FaGithub /> Code
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt size={11} /> Live Demo
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default AllProjects;