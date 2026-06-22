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

  const heroRef    = useFadeIn(0);
  const aboutRef   = useFadeIn(0);
  const skillsRef  = useFadeIn(0);
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
            👋 Available for Freelance Work
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold mt-2 text-slate-900 hero-name">
            Sagar Chotaliya
          </h1>

          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600 mt-4 min-h-[2.5rem]">
            <Typewriter
              words={["PHP Backend Developer", "Full Stack Developer", "React Developer", "Freelancer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            I build modern, fast, and scalable web applications — from robust PHP backends
            to clean React frontends. Passionate about turning ideas into real products.
          </p>

          <div className="flex gap-8 mt-8 justify-center lg:justify-start">
            <StatCard target={3} suffix="+" label="Years Experience" />
            <StatCard target={10} suffix="+" label="Projects Built" />
            <StatCard target={12} suffix="+" label="Technologies" />
          </div>

          <div className="flex gap-4 mt-8 justify-center lg:justify-start flex-wrap">
            <a href="#contact" className="btn-primary">Hire Me</a>
            <a href="/Sagar_Chotaliya_CV.pdf" download className="btn-outline">Download CV</a>
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

          <p className="section-eyebrow">Get to know me</p>
          <h2 className="section-title">About Me</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-9 mb-6">
                Hi, I'm <span className="font-semibold text-slate-800">Sagar Chotaliya</span> — a
                passionate <span className="font-semibold text-slate-800">Full Stack Developer</span> from{" "}
                <span className="font-semibold text-slate-800">Surat, Gujarat</span>.
                I love building robust, scalable web applications — from powerful backends to clean,
                user-friendly interfaces.
              </p>

              <p className="text-lg text-gray-600 leading-9 mb-6">
                I have <strong>3+ years of hands-on experience in PHP backend development</strong>,
                working with <strong>CodeIgniter, MySQL, REST APIs, JWT, and server-side architecture</strong>.
                I've built and maintained production-grade systems that handle real-world complexity.
              </p>

              <p className="text-lg text-gray-600 leading-9 mb-6">
                On the frontend, I bring <strong>1+ year of React.js experience</strong> — crafting
                dynamic UIs using <strong>React, JavaScript, Redux Toolkit, TanStack Query,
                and Formik</strong>. I care deeply about writing maintainable code and delivering
                pixel-perfect experiences.
              </p>

              <p className="text-lg text-gray-600 leading-9">
                My goal is to keep growing as a <strong>Full Stack Developer</strong>, bridging
                the gap between backend logic and frontend finesse — and building products that
                make a real impact.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-gray-400">Name:</span><span className="ml-2 font-semibold text-slate-800">Sagar Chotaliya</span></div>
                <div><span className="text-gray-400">Location:</span><span className="ml-2 font-semibold text-slate-800">Surat, Gujarat, India</span></div>
                <div><span className="text-gray-400">Email:</span><span className="ml-2 font-semibold text-blue-600">schotaliya52@gmail.com</span></div>
                <div><span className="text-gray-400">Status:</span><span className="ml-2 font-semibold text-green-600">✅ Open to Work</span></div>
              </div>
            </div>

            {/* Timeline Cards — manual, no map() */}
            <div className="space-y-5">

              <div className="timeline-card border-l-4 border-blue-600 bg-blue-50 hover:shadow-lg p-5 rounded-xl transition">
                <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-1">Education</p>
                <h3 className="text-lg font-bold text-slate-800">Bachelor of Computer Applications (BCA)</h3>
                <p className="text-gray-600 mt-1">MKBU, Bhavnagar</p>
                <p className="text-sm text-gray-400 mt-1">2021 – 2023</p>
              </div>

              <div className="timeline-card border-l-4 border-indigo-600 bg-indigo-50 hover:shadow-lg p-5 rounded-xl transition">
                <p className="text-xs font-semibold text-indigo-500 uppercase tracking-widest mb-1">Job</p>
                <h3 className="text-lg font-bold text-slate-800">PHP Backend Developer</h3>
                <p className="text-gray-600 mt-1">Shopno eCommerce PVT. LTD, Surat</p>
                <p className="text-sm text-gray-400 mt-1">July 2023 – Present</p>
              </div>

              <div className="timeline-card border-l-4 border-green-600 bg-green-50 hover:shadow-lg p-5 rounded-xl transition">
                <p className="text-xs font-semibold text-green-500 uppercase tracking-widest mb-1">Freelance</p>
                <h3 className="text-lg font-bold text-slate-800">React Developer (Freelance)</h3>
                <p className="text-gray-600 mt-1">Remote – multiple clients</p>
                <p className="text-sm text-gray-400 mt-1">2026 – Present</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" className="py-24 bg-gray-50 px-10">
        <div ref={skillsRef} className="fade-in max-w-5xl mx-auto">

          <p className="section-eyebrow">What I work with</p>
          <h2 className="section-title">My Skills</h2>

          <div className="grid lg:grid-cols-2 gap-12 mt-12">

            <div className="grid grid-cols-2 gap-8">

              <div>
                <h3 className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-4 pb-2 border-b border-slate-200">Frontend</h3>
                <SkillBar name="React.js" level={75} />
                <SkillBar name="JavaScript" level={78} />
                <SkillBar name="Tailwind CSS" level={80} />
                <SkillBar name="Redux Toolkit" level={70} />
                <SkillBar name="TanStack Query" level={65} />
              </div>

              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-4 pb-2 border-b border-slate-200">Backend</h3>
                  <SkillBar name="PHP" level={90} />
                  <SkillBar name="CodeIgniter" level={88} />
                  <SkillBar name="REST API" level={85} />
                  <SkillBar name="JWT Auth" level={82} />
                  <SkillBar name="MySQL" level={85} />
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

          <p className="section-eyebrow">Things I've built</p>
          <h2 className="section-title">Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            <div className="project-card">
              <div className="badge badge-green">PHP + Full Stack</div>
              <h3 className="text-2xl font-bold text-slate-800 mt-3">Library Management System</h3>
              <p className="mt-4 text-gray-600 leading-7 flex-1">
                Complete digital library solution for JD Gabani Library. Handles book issuing & receiving
                with automatic late fee calculation, member management, and real-time availability tracking.
                Generates detailed reports and receipts for every transaction.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["PHP", "CodeIgniter", "MySQL", "REST API", "Bootstrap"].map((t) => (
                  <span key={t} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <div className="flex gap-4 mt-6 text-sm font-semibold">
                <a href="https://github.com/Sagar-Chotaliya393" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition"><FaGithub /> Code</a>
                <a href="https://jdgabanilibrary.com/" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition"><FaExternalLinkAlt size={12} /> Live Demo</a>
              </div>
            </div>

            <div className="project-card">
              <div className="badge badge-blue">eCommerce + API</div>
              <h3 className="text-2xl font-bold text-slate-800 mt-3">Mokonut eCommerce Platform</h3>
              <p className="mt-4 text-gray-600 leading-7 flex-1">
                Full-featured eCommerce website with online payment gateway integration for seamless
                order placement. Connected with Shiprocket for automated order fulfillment and shipping.
                Complete REST API for mobile app with order tracking, receipts, and delivery management.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["PHP", "CodeIgniter", "MySQL", "Payment Gateway", "Shiprocket API", "REST API"].map((t) => (
                  <span key={t} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <div className="flex gap-4 mt-6 text-sm font-semibold">
                <a href="https://github.com/Sagar-Chotaliya393" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition"><FaGithub /> Code</a>
                <a href="https://mokonut.com/" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition"><FaExternalLinkAlt size={12} /> Live Demo</a>
              </div>
            </div>

            <div className="project-card">
              <div className="badge badge-purple">React App</div>
              <h3 className="text-2xl font-bold text-slate-800 mt-3">Profile & User Management</h3>
              <p className="mt-4 text-gray-600 leading-7 flex-1">
                React application featuring a personal profile page and a full user management module.
                Includes a user listing with individual detail views, routing between pages, and clean
                component architecture — actively in development.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["React", "React Router", "JavaScript", "Tailwind CSS"].map((t) => (
                  <span key={t} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{t}</span>
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
              View More Projects
              <FaArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 to-slate-100 px-6">
        <div ref={contactRef} className="fade-in max-w-4xl mx-auto">

          <p className="section-eyebrow">Let's work together</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-12">
            Have a project idea or want to work together? Feel free to reach out!
          </p>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="space-y-5">

              <div className="contact-info-card">
                <div className="bg-blue-100 text-blue-600 rounded-xl p-3 text-2xl"><FaEnvelope /></div>
                <div>
                  <p className="font-semibold text-slate-800">Email</p>
                  <a href="mailto:schotaliya52@gmail.com" className="text-blue-600 hover:underline">schotaliya52@gmail.com</a>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="bg-blue-100 text-blue-600 rounded-xl p-3 text-2xl"><FaPhone /></div>
                <div>
                  <p className="font-semibold text-slate-800">WhatsApp</p>
                  <a href="tel:+917990881893" className="text-blue-600 hover:underline">+91 79908 81893</a>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="bg-blue-100 text-blue-600 rounded-xl p-3 text-2xl"><FaMapMarkerAlt /></div>
                <div>
                  <p className="font-semibold text-slate-800">Location</p>
                  <p className="text-gray-600">Surat, Gujarat, India</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="bg-blue-100 text-blue-600 rounded-xl p-3 text-2xl"><FaLinkedin /></div>
                <div>
                  <p className="font-semibold text-slate-800">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/sagar-chotaliya-b48a862a3/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/sagar-chotaliya</a>
                </div>
              </div>

            </div>

            <div className="bg-white shadow-xl rounded-3xl p-8">
              <form className="space-y-5">
                <div className="input-group">
                  <label className="block mb-2 font-medium text-slate-700">Name</label>
                  <input type="text" placeholder="Your full name" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition input-field" />
                </div>
                <div className="input-group">
                  <label className="block mb-2 font-medium text-slate-700">Email</label>
                  <input type="email" placeholder="your@email.com" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition input-field" />
                </div>
                <div className="input-group">
                  <label className="block mb-2 font-medium text-slate-700">Subject</label>
                  <input type="text" placeholder="What's this about?" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition input-field" />
                </div>
                <div className="input-group">
                  <label className="block mb-2 font-medium text-slate-700">Message</label>
                  <textarea rows="4" placeholder="Tell me about your project..." className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition resize-none input-field" />
                </div>
                <button type="submit" className="btn-submit w-full">Send Message 🚀</button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default Main;