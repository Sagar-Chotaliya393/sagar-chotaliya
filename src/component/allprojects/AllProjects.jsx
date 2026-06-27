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
          <p className="ap-eyebrow">
            My Work
          </p>

          <h1 className="ap-title">
            Projects I've Worked On
          </h1>

          <p className="ap-subtitle">
            Here's a collection of projects I've built while working professionally
            and while learning new technologies. Each one helped me improve my skills
            and solve real-world problems.
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
              A complete library management system built for JD Gabani Library. It
              helps librarians manage books, members, issue/return records, and late
              fees from one place. The main goal was to make everyday library work
              faster, simpler, and more organized.
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
              An eCommerce platform developed for a real business with online payments,
              order management, and Shiprocket integration. I also built REST APIs so
              the mobile application could work seamlessly with the same backend.
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
              A React project I built while learning modern React concepts. It includes
              user management, routing, reusable components, and a clean project
              structure. I keep adding new features as I learn more.
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
              A secure REST API built with PHP and CodeIgniter for a mobile
              application. It handles authentication, user roles, and structured API
              responses, making it easy for the frontend team to integrate.
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
              <button>
                Live Demo
              </button>
            </div>
          </div>

          {/* 6 */}
          <div className="ap-card ap-card--blue">
            <div className="ap-card-top-bar" />
            <div className="ap-badge ap-badge--blue">React + Redux</div>
            <h2 className="ap-card-title">Shopping Cart App</h2>
            <p className="ap-card-desc">
              A shopping cart application created to practice modern React tools like
              Redux Toolkit and TanStack Query. Users can browse products, manage their
              cart, and experience smooth state management throughout the app.
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
              <button>
                Live Demo
              </button>
            </div>
          </div>

          {/* 7 */}
          <div className="ap-card ap-card--purple">
            <div className="ap-card-top-bar" />
            <div className="ap-badge ap-badge--purple">React App</div>
            <h2 className="ap-card-title">Weather Dashboard</h2>
            <p className="ap-card-desc">
              A simple weather dashboard that displays live weather information using
              the OpenWeather API. Users can search for any city and instantly view
              temperature, humidity, and forecast details.
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
              <button>
                Live Demo
              </button>
            </div>
          </div>

          {/* 8 */}
          <div className="ap-card ap-card--amber">
            <div className="ap-card-top-bar" />
            <div className="ap-badge ap-badge--amber">PHP + Full Stack</div>
            <h2 className="ap-card-title">School Management System</h2>
            <p className="ap-card-desc">
              A complete school management system designed to simplify daily academic
              operations. It includes attendance, student records, fee management,
              report cards, and separate dashboards for different users.
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
              <button>
                Live Demo
              </button>
            </div>
          </div>

          {/* 9 */}
          <div className="ap-card ap-card--blue">
            <div className="ap-card-top-bar" />
            <div className="ap-badge ap-badge--blue">React + Formik</div>
            <h2 className="ap-card-title">Multi-Step Form App</h2>
            <p className="ap-card-desc">
              A multi-step registration form built with Formik and Yup. It focuses on
              providing a smooth user experience with real-time validation, progress
              tracking, and clean form navigation.
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
              <button>
                Live Demo
              </button>
            </div>
          </div>

          {/* 10 */}
          <div className="ap-card ap-card--green">
            <div className="ap-card-top-bar" />
            <div className="ap-badge ap-badge--green">PHP Backend</div>
            <h2 className="ap-card-title">Invoice Generator System</h2>
            <p className="ap-card-desc">
              An invoice management system that allows businesses to create and manage
              professional invoices. It supports PDF generation, GST calculations, and
              customer records to simplify billing tasks.
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
              <button>
                Live Demo
              </button>
            </div>
          </div>

          {/* 11 */}
          <div className="ap-card ap-card--purple">
            <div className="ap-card-top-bar" />
            <div className="ap-badge ap-badge--purple">React App</div>
            <h2 className="ap-card-title">Task Manager (To-Do App)</h2>
            <p className="ap-card-desc">
              A productivity app for managing daily tasks with categories, priorities,
              and status filters. The project helped me improve my understanding of
              React state management and reusable component design.
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
              <button>
                Live Demo
              </button>
            </div>
          </div>

          {/* 12 */}
          <div className="ap-card ap-card--amber">
            <div className="ap-card-top-bar" />
            <div className="ap-badge ap-badge--amber">PHP + API</div>
            <h2 className="ap-card-title">Inventory Management System</h2>
            <p className="ap-card-desc">
              An inventory management system built to keep track of products, stock,
              suppliers, and purchase records. It helps businesses stay organized and
              avoid running out of important inventory.
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
              <button>
                Live Demo
              </button>
            </div>
          </div>

          {/* 13 */}
          <div className="ap-card ap-card--blue">
            <div className="ap-card-top-bar" />
            <div className="ap-badge ap-badge--blue">React + Context</div>
            <h2 className="ap-card-title">Blog Platform UI</h2>
            <p className="ap-card-desc">
              A clean blog interface developed with React featuring post listings,
              category filters, and detailed article pages. The project focuses on a
              smooth reading experience and reusable UI components.
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
              <button>
                Live Demo
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default AllProjects;