import "./Main.css";
import profile_image from "../../images/profile_image.jpeg";
import { FaGithub, FaLinkedin, FaInstagram, FaExternalLinkAlt, FaArrowRight, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* ─── Count Up Hook ─── */
function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          let start = 0;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started, target, duration]);

  return { count, ref };
}

/* ─── Fade In Hook ─── */
function useFadeIn(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

/* ─── Stat Card ─── */
function StatCard({ target, suffix = "+", label }) {
  const { count, ref } = useCountUp(target);
  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl font-bold text-blue-600">{count}{suffix}</p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
}

/* ─── Skill Bar ─── */
function SkillBar({ name, level }) {
  const ref = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          setTimeout(() => { barRef.current.style.width = level + "%"; }, 200);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-semibold text-slate-700">{name}</span>
        <span className="text-sm text-blue-600 font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div ref={barRef} className="h-full bg-blue-600 rounded-full skill-bar-fill" style={{ width: "0%" }} />
      </div>
    </div>
  );
}

/* ─── MAIN ─── */
function Main() {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroRef = useFadeIn(0);
  const aboutRef = useFadeIn(0);
  const skillsRef = useFadeIn(0);
  const projectRef = useFadeIn(0);
  const contactRef = useFadeIn(0);

  return (
    <main>

      {/* ─── SCROLL PROGRESS ─── */}
      <div className="scroll-progress-bar" style={{ width: `${scrollPct}%` }} />

      {/* ─── HOME ─── */}
      <section
        id="home"
        className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16 px-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      >
        <div ref={heroRef} className="fade-in relative">
          <div className="absolute inset-0 rounded-full bg-blue-200 blur-2xl opacity-40 scale-110" />
          <img
            src={profile_image}
            alt="Sagar Chotaliya"
            className="profile-img relative w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover border-8 border-blue-600 shadow-2xl"
          />
        </div>

        <div className="max-w-2xl text-center lg:text-left">

          <span className="badge-pulse inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            🚀 Open to Full-Time & Freelance Opportunities
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold mt-2 text-slate-900 hero-name">
            Sagar Chotaliya
          </h1>

          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600 mt-4 min-h-[2.5rem]">
            <Typewriter
              words={[
                "Full Stack Developer",
                "PHP Backend Developer",
                "React Developer",
                "Building Modern Web Applications",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            I'm a Full Stack Developer based in Surat with over 3 years of experience
            building web applications using PHP, CodeIgniter, React, and MySQL.
            I enjoy creating fast, reliable, and user-friendly applications while
            continuously learning new technologies and improving my development skills.
          </p>

          <div className="flex gap-8 mt-8 justify-center lg:justify-start">
            <StatCard target={3} suffix="+" label="Years of Experience" />
            <StatCard target={15} suffix="+" label="Projects Completed" />
            <StatCard target={10} suffix="+" label="Technologies Used" />
          </div>

          <div className="flex gap-4 mt-8 justify-center lg:justify-start flex-wrap">
            <a href="#contact" className="btn-primary">
              Let's Connect
            </a>

            <a href="/Sagar_Chotaliya_CV.pdf" download className="btn-outline">
              Download Resume
            </a>
          </div>

          <div className="flex gap-6 mt-8 text-4xl justify-center lg:justify-start">
            <a className="social-icon" href="https://github.com/Sagar-Chotaliya393" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a className="social-icon" href="https://www.linkedin.com/in/sagar-chotaliya-b48a862a3/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a className="social-icon instagram" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-24 px-10 bg-white">
        <div ref={aboutRef} className="fade-in max-w-6xl mx-auto">

          <p className="section-eyebrow">Who I Am</p>

          <h2 className="section-title">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-9 mb-6">
                Hello! I'm <span className="font-semibold text-slate-800">Sagar Chotaliya</span>, a
                <span className="font-semibold text-slate-800"> Full Stack Developer</span> based in
                Surat, Gujarat. I enjoy building web applications that are simple, secure, and easy to use.
                Over the past few years, I've worked on real-world projects ranging from backend systems
                to modern frontend applications.
              </p>

              <p className="text-lg text-gray-600 leading-9 mb-6">
                My professional journey started with
                <strong> PHP and CodeIgniter</strong>, where I gained hands-on experience developing REST APIs,
                authentication systems, payment gateway integrations, and database-driven applications.
                Working on production projects has helped me understand how scalable web applications are built.
              </p>

              <p className="text-lg text-gray-600 leading-9 mb-6">
                Along with backend development, I've developed a strong interest in
                <strong> React.js</strong>. I enjoy creating responsive user interfaces using
                React, Redux Toolkit, Context API, TanStack Query, and Tailwind CSS while keeping
                the code clean, reusable, and maintainable.
              </p>

              <p className="text-lg text-gray-600 leading-9">
                I'm always looking for opportunities to learn new technologies, solve challenging
                problems, and build applications that provide a great user experience. My goal is
                to grow as a Full Stack Developer and contribute to meaningful products.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5 text-sm">

                <div>
                  <span className="text-gray-400">Name</span>
                  <p className="font-semibold text-slate-800 mt-1">
                    Sagar Chotaliya
                  </p>
                </div>

                <div>
                  <span className="text-gray-400">Location</span>
                  <p className="font-semibold text-slate-800 mt-1">
                    Surat, Gujarat, India
                  </p>
                </div>

                <div>
                  <span className="text-gray-400">Experience</span>
                  <p className="font-semibold text-slate-800 mt-1">
                    3+ Years
                  </p>
                </div>

                <div>
                  <span className="text-gray-400">Availability</span>
                  <p className="font-semibold text-green-600 mt-1">
                    Open to Work
                  </p>
                </div>

              </div>

            </div>

            {/* Timeline Cards — manual, no map() */}
            <div className="space-y-5">

              <div className="timeline-card border-l-4 border-blue-600 bg-blue-50">

                <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                  Education
                </p>

                <h3 className="text-xl font-bold mt-2">
                  Bachelor of Computer Applications
                </h3>

                <p className="text-gray-600 mt-2">
                  Maharaja Krishnakumarsinhji Bhavnagar University
                </p>

                <p className="text-sm text-gray-400 mt-2">
                  2021 – 2023
                </p>

              </div>

              <div className="timeline-card border-l-4 border-indigo-600 bg-indigo-50">

                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">
                  Professional Experience
                </p>

                <h3 className="text-xl font-bold mt-2">
                  PHP Backend Developer
                </h3>

                <p className="text-gray-600 mt-2">
                  Shopno eCommerce Pvt. Ltd.
                </p>

                <p className="text-sm text-gray-400 mt-2">
                  July 2023 – Present
                </p>

              </div>

              <div className="timeline-card border-l-4 border-green-600 bg-green-50">

                <p className="text-xs font-semibold text-green-600 uppercase tracking-widest">
                  Current Focus
                </p>

                <h3 className="text-xl font-bold mt-2">
                  Full Stack Development
                </h3>

                <p className="text-gray-600 mt-2">
                  React.js, PHP, REST APIs, MySQL, Redux Toolkit & Modern Web Technologies
                </p>

                <p className="text-sm text-gray-400 mt-2">
                  Continuous Learning
                </p>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" className="py-24 bg-gray-50 px-10">
        <div ref={skillsRef} className="fade-in max-w-5xl mx-auto">

          <p className="section-eyebrow">Skills & Technologies</p>
          <h2 className="section-title">What I Work With</h2>

          <p className="max-w-3xl mx-auto text-center text-slate-600 leading-8 mb-16">
            Over the last few years I've worked on both backend and frontend
            development. My primary expertise is in PHP and React, along with
            modern tools used to build fast, scalable and maintainable web
            applications.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 mt-12">

            <div className="grid grid-cols-2 gap-8">

              <div>
                <h3 className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-4 pb-2 border-b border-slate-200">Frontend</h3>
                <SkillBar name="React.js" level={78} />
                <SkillBar name="JavaScript" level={80} />
                <SkillBar name="Tailwind CSS" level={80} />
                <SkillBar name="Redux Toolkit" level={70} />
                <SkillBar name="TanStack Query" level={68} />
                <SkillBar name="Formik" level={72} />
              </div>

              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-4 pb-2 border-b border-slate-200">Backend</h3>
                  <SkillBar name="PHP" level={90} />
                  <SkillBar name="CodeIgniter" level={88} />
                  <SkillBar name="REST API" level={85} />
                  <SkillBar name="JWT Auth" level={82} />
                  <SkillBar name="MySQL" level={84} />
                </div>
                <div>
                  <h3 className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-4 pb-2 border-b border-slate-200">Tools</h3>
                  <SkillBar name="Hostinger Server" level={90} />
                  <SkillBar name="VPS Server" level={95} />
                </div>
              </div>

            </div>

            <div>
              <h3 className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-4 pb-2 border-b border-slate-200">Technologies</h3>

              <div className="mb-5">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-300 mb-2">Frontend</p>
                <div className="flex flex-wrap gap-2">
                  {["HTML5", "CSS3", "Bootstrap", "JavaScript", "React.js", "Tailwind CSS", "Redux Toolkit", "Context API", "TanStack Query", "Formik", "Yup / Zod"].map((s) => (
                    <span key={s} className="skill-pill skill-pill--blue">{s}</span>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-300 mb-2">Backend</p>
                <div className="flex flex-wrap gap-2">
                  {["PHP", "CodeIgniter", "REST API", "JWT", "MySQL", "Apache", "Nginx", "Linux"].map((s) => (
                    <span key={s} className="skill-pill skill-pill--green">{s}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-300 mb-2">Tools</p>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "VS Code", "Postman"].map((s) => (
                    <span key={s} className="skill-pill skill-pill--amber">{s}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projects" className="py-24 px-10 bg-white">
        <div ref={projectRef} className="fade-in">

          <p className="section-eyebrow">Portfolio</p>

          <h2 className="section-title">
            Featured Projects
          </h2>

          <p className="max-w-3xl mx-auto text-center text-slate-600 leading-8 mb-14">
            Here are some of the projects I've worked on. These include real-world
            applications built using PHP, CodeIgniter, React.js, REST APIs, and MySQL,
            with a focus on performance, scalability, and user experience.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            <div className="project-card">
              <div className="badge badge-green">
                Full Stack Application
              </div>
              <h3 className="text-xl font-bold text-slate-900 leading-8 mt-3">Library Management System</h3>
              <p className="mt-4 text-gray-600 leading-7 flex-1">
                Developed a complete Library Management System for JD Gabani Library to
                digitize daily operations. The application manages book issuing, returns,
                member records, late fee calculations, and report generation, making the
                entire workflow faster and more organized.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {[
                  "PHP",
                  "CodeIgniter",
                  "MySQL",
                  "REST API",
                  "Bootstrap"
                ].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium text-gray-600 text-xs px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <div className="flex gap-4 mt-6 text-sm font-semibold">
                <a href="https://github.com/Sagar-Chotaliya393" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition"><FaGithub /> Code</a>
                <a href="https://jdgabanilibrary.com/" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition"><FaExternalLinkAlt size={12} /> Live Demo</a>
              </div>
            </div>

            <div className="project-card">
              <div className="badge badge-blue">
                eCommerce Platform
              </div>
              <h3 className="text-xl font-bold text-slate-900 leading-8 mt-3">Mokonut eCommerce Platform</h3>
              <p className="mt-4 text-gray-600 leading-7 flex-1">
                Contributed to the backend development of the Mokonut eCommerce platform.
                Implemented REST APIs, payment gateway integration, Shiprocket shipping,
                order management, and backend features that support both the website and
                mobile application.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["PHP", "CodeIgniter", "MySQL", "Payment Gateway", "Shiprocket API", "REST API"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium text-gray-600 text-xs px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <div className="flex gap-4 mt-6 text-sm font-semibold">
                <a href="https://github.com/Sagar-Chotaliya393" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition"><FaGithub /> Code</a>
                <a href="https://mokonut.com/" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition"><FaExternalLinkAlt size={12} /> Live Demo</a>
              </div>
            </div>

            <div className="project-card">
              <div className="badge badge-purple">
                React Project
              </div>
              <h3 className="text-xl font-bold text-slate-900 leading-8 mt-3">React User Management Dashboard</h3>
              <p className="mt-4 text-gray-600 leading-7 flex-1">
                Built a React application with user management features, routing,
                reusable components, and API integration. The project demonstrates modern
                React development practices using Context API, Redux Toolkit,
                TanStack Query, and responsive UI design.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["React", "React Router", "JavaScript", "Tailwind CSS"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium text-gray-600 text-xs px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <div className="flex gap-4 mt-6 text-sm font-semibold">
                <a href="https://github.com/Sagar-Chotaliya393" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition"><FaGithub /> Code</a>
                <a href="https://route-app-7kh5.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition"><FaExternalLinkAlt size={12} /> Live Demo</a>
              </div>
            </div>

          </div>

          <div className="flex justify-center mt-12">
            <Link to="/all-projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-slate-800 text-slate-800 font-semibold text-sm hover:bg-slate-800 hover:text-white transition-all duration-300"
            >
              Explore All Projects
              <FaArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* ─── CONTACT ─── */}
      {/* ─── CONTACT ─── */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-blue-50 via-white to-slate-100 px-6"
      >
        <div
          ref={contactRef}
          className="fade-in max-w-6xl mx-auto"
        >
          <p className="section-eyebrow">
            Contact
          </p>

          <h2 className="section-title">
            Let's Build Something Great Together
          </h2>

          <p className="max-w-2xl mx-auto text-center text-gray-600 leading-8 mb-14">
            Whether you're looking for a React Developer, PHP Backend Developer,
            or someone who can build a complete web application from scratch,
            I'd love to hear about your project.
            Feel free to reach out anytime — I'm always open to discussing new
            opportunities, freelance work, or exciting collaborations.
          </p>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* LEFT SIDE */}
            <div className="space-y-5">

              <div className="contact-info-card">
                <div className="bg-blue-100 text-blue-600 rounded-xl p-3 text-2xl">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="font-semibold text-slate-800">
                    Email
                  </p>

                  <a
                    href="mailto:schotaliya52@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    schotaliya52@gmail.com
                  </a>

                  <p className="text-sm text-gray-500 mt-1">
                    I'll usually reply within 24 hours.
                  </p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="bg-blue-100 text-blue-600 rounded-xl p-3 text-2xl">
                  <FaPhone />
                </div>

                <div>
                  <p className="font-semibold text-slate-800">
                    Phone / WhatsApp
                  </p>

                  <a
                    href="tel:+917990881893"
                    className="text-blue-600 hover:underline"
                  >
                    +91 79908 81893
                  </a>

                  <p className="text-sm text-gray-500 mt-1">
                    Available for quick discussions and project calls.
                  </p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="bg-blue-100 text-blue-600 rounded-xl p-3 text-2xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="font-semibold text-slate-800">
                    Location
                  </p>

                  <p className="text-gray-600">
                    Surat, Gujarat, India
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    Open to remote, freelance, and full-time opportunities.
                  </p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="bg-blue-100 text-blue-600 rounded-xl p-3 text-2xl">
                  <FaLinkedin />
                </div>

                <div>
                  <p className="font-semibold text-slate-800">
                    LinkedIn
                  </p>

                  <a
                    href="https://www.linkedin.com/in/sagar-chotaliya-b48a862a3/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    linkedin.com/in/sagar-chotaliya
                  </a>

                  <p className="text-sm text-gray-500 mt-1">
                    Let's connect professionally.
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Send Me a Message
              </h3>

              <p className="text-gray-600 mb-8 leading-7">
                Have an idea, project, or opportunity in mind?
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form className="space-y-5">

                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 input-field"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 input-field"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Let's discuss a project"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 input-field"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell me a little about your project..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none input-field"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-submit w-full"
                >
                  Send Message 🚀
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Main;