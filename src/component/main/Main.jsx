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


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // typing કરતી વખતે error clear કરો
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const whatsappNumber = "917990881893";

    const text = `*New Portfolio Inquiry*
―――――――――――――――――
*Name:* ${formData.name}
*Email:* ${formData.email}
*Message:* ${formData.message}
―――――――――――――――――
Portfolio: https://sagar-chotaliya.vercel.app/`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");

    setFormData({ name: "", email: "", message: "" });
    setErrors({ name: "", email: "", message: "" });
  };


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
        className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16 px-10 pt-32 lg:pt-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 pb-2"
      >

        {/* LEFT IMAGE */}
        <div ref={heroRef} className="fade-in relative">

          <div className="absolute inset-0 rounded-full bg-blue-200 blur-2xl opacity-40 scale-110" />

          <img
            src={profile_image}
            alt="Sagar Chotaliya"
            className="profile-img relative w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover border-8 border-blue-600 shadow-2xl"
          />

          {/* Floating Experience Badge */}
          <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-5 py-3 border">
            <p className="text-2xl font-bold text-blue-600">
              3+
            </p>
            <p className="text-xs text-gray-500">
              Years Experience
            </p>
          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div className="max-w-2xl text-center lg:text-left">

          <span className="badge-pulse inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            🚀 Available for Full-Time, Freelance & Remote Opportunities
          </span>

          <p className="text-lg text-slate-500 font-medium">
            Hi, I'm
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold mt-2 text-slate-900 hero-name">
            Sagar Chotaliya
          </h1>

          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600 mt-4 min-h-[2.5rem]">
            <Typewriter
              words={[
                "Full Stack Developer",
                "PHP & React Developer",
                "Backend API Developer",
                "Building Fast & Modern Web Apps",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            I'm a passionate Full Stack Developer from Surat, India, with
            <strong> 3+ years of experience </strong>
            building scalable web applications using PHP, CodeIgniter,
            React, and MySQL.
            I enjoy turning ideas into fast, reliable, and user-friendly
            digital experiences while continuously learning modern
            technologies and best development practices.
          </p>

          {/* TECH STACK */}

          <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">

            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
              ⚛ React
            </span>

            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
              🐘 PHP
            </span>

            <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">
              🗄 MySQL
            </span>

            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm">
              🚀 CodeIgniter
            </span>

            <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-sm">
              🔗 REST API
            </span>

          </div>

          {/* Availability */}

          <p className="mt-6 text-green-600 font-medium">
            🟢 Currently available for Full-Time, Freelance & Remote opportunities.
          </p>

          {/* Stats */}

          <div className="flex gap-8 mt-8 justify-center lg:justify-start">

            <StatCard
              target={3}
              suffix="+"
              label="Experience"
            />

            <StatCard
              target={15}
              suffix="+"
              label="Projects"
            />

            <StatCard
              target={10}
              suffix="+"
              label="Technologies"
            />

          </div>

          {/* Buttons */}

          <div className="flex gap-4 mt-8 justify-center lg:justify-start flex-wrap">

            <a
              href="#contact"
              className="btn-primary"
            >
              Get In Touch
            </a>

            <Link
              to="/all-projects"
              className="btn-outline"
            >
              View Projects
            </Link>

            <a
              href="/Sagar_Chotaliya_CV.pdf"
              download
              className="btn-outline"
            >
              Download Resume
            </a>

          </div>

          {/* Social */}

          <div className="mt-8">


            <div className="flex gap-6 text-4xl justify-center lg:justify-start">

              <a
                className="social-icon"
                href="https://github.com/Sagar-Chotaliya393"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                className="social-icon"
                href="https://www.linkedin.com/in/sagar-chotaliya-b48a862a3/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                className="social-icon instagram"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

            </div>

          </div>


        </div>

      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-24 px-10 bg-white">
        <div ref={aboutRef} className="fade-in max-w-6xl mx-auto">

          <p className="section-eyebrow">
            Get to Know Me
          </p>

          <h2 className="section-title">
            About Me
          </h2>

          <p className="max-w-3xl mx-auto text-center text-slate-600 leading-8 mb-16">
            I'm passionate about building web applications that are fast, reliable,
            and easy to use. I enjoy solving real-world problems through clean code,
            modern technologies, and continuous learning.
          </p>

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT SIDE */}
            <div>

              <p className="text-lg text-gray-600 leading-9 mb-6">
                Hi, I'm
                <span className="font-semibold text-slate-800">
                  {" "}Sagar Chotaliya
                </span>
                , a
                <span className="font-semibold text-slate-800">
                  {" "}Full Stack Developer
                </span>
                based in Surat, Gujarat.
                For the past few years, I've been building web applications using
                PHP, CodeIgniter, React, and MySQL. I enjoy creating solutions that
                are clean, secure, and easy for people to use.
              </p>

              <p className="text-lg text-gray-600 leading-9 mb-6">
                My journey started as a backend developer, where I worked on
                production-level applications including REST APIs, authentication,
                payment gateway integrations, shipping APIs, and database-driven
                systems. Working on real client projects has helped me understand
                how scalable applications are designed and maintained.
              </p>

              <p className="text-lg text-gray-600 leading-9 mb-6">
                As I continued growing, I developed a strong interest in frontend
                development with React. I enjoy building responsive interfaces using
                React, Redux Toolkit, Context API, TanStack Query, Formik, and
                Tailwind CSS while keeping the code reusable and easy to maintain.
              </p>

              <p className="text-lg text-gray-600 leading-9">
                Outside of work, I spend time learning new technologies, building
                personal projects, and improving my problem-solving skills. My goal
                is to become a well-rounded Full Stack Developer who can build
                complete, high-quality products from idea to deployment.
              </p>

              {/* Personal Details */}

              <div className="mt-10 grid grid-cols-2 gap-6 text-sm">

                <div>
                  <span className="text-gray-400">
                    👤 Name
                  </span>

                  <p className="font-semibold text-slate-800 mt-1">
                    Sagar Chotaliya
                  </p>
                </div>

                <div>
                  <span className="text-gray-400">
                    📍 Location
                  </span>

                  <p className="font-semibold text-slate-800 mt-1">
                    Surat, Gujarat, India
                  </p>
                </div>

                <div>
                  <span className="text-gray-400">
                    💼 Experience
                  </span>

                  <p className="font-semibold text-slate-800 mt-1">
                    3+ Years
                  </p>
                </div>

                <div>
                  <span className="text-gray-400">
                    🌱 Currently Learning
                  </span>

                  <p className="font-semibold text-slate-800 mt-1">
                    Advanced React & Next.js
                  </p>
                </div>

                <div>
                  <span className="text-gray-400">
                    🌍 Languages
                  </span>

                  <p className="font-semibold text-slate-800 mt-1">
                    Gujarati, Hindi & English
                  </p>
                </div>

                <div>
                  <span className="text-gray-400">
                    🟢 Availability
                  </span>

                  <p className="font-semibold text-green-600 mt-1">
                    Open to Full-Time & Freelance
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="space-y-5">

              <div className="timeline-card border-l-4 border-blue-600 bg-blue-50">

                <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                  🎓 Education
                </p>

                <h3 className="text-xl font-bold mt-2">
                  Bachelor of Computer Applications (BCA)
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
                  💼 Professional Experience
                </p>

                <h3 className="text-xl font-bold mt-2">
                  PHP Backend Developer
                </h3>

                <p className="text-gray-600 mt-2">
                  Shopno eCommerce Pvt. Ltd.
                </p>

                <p className="text-gray-600 mt-2">
                  Working on REST APIs, eCommerce solutions,
                  payment gateway integrations, Shiprocket API,
                  authentication systems, and backend architecture.
                </p>

                <p className="text-sm text-gray-400 mt-2">
                  July 2023 – Present
                </p>

              </div>

              <div className="timeline-card border-l-4 border-green-600 bg-green-50">

                <p className="text-xs font-semibold text-green-600 uppercase tracking-widest">
                  🚀 Current Focus
                </p>

                <h3 className="text-xl font-bold mt-2">
                  Full Stack Development
                </h3>

                <p className="text-gray-600 mt-2">
                  Building modern web applications using React,
                  PHP, CodeIgniter, MySQL, Redux Toolkit,
                  TanStack Query, and REST APIs while continuously
                  learning better development practices.
                </p>

              </div>

              <div className="timeline-card border-l-4 border-amber-500 bg-amber-50">

                <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest">
                  🎯 Career Goal
                </p>

                <h3 className="text-xl font-bold mt-2">
                  Keep Building & Keep Learning
                </h3>

                <p className="text-gray-600 mt-2">
                  I'm always looking for opportunities to work on
                  meaningful products, collaborate with great teams,
                  and grow as a Full Stack Developer while delivering
                  quality software that makes a real impact.
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
                <SkillBar name="⚛ React.js" level={78} />
                <SkillBar name="🟨 JavaScript" level={80} />
                <SkillBar name="🎨 Tailwind CSS" level={80} />
                <SkillBar name="🧩 Redux Toolkit" level={70} />
                <SkillBar name="⚡ TanStack Query" level={68} />
                <SkillBar name="📝 Formik" level={72} />
              </div>

              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-4 pb-2 border-b border-slate-200">Backend</h3>
                  <SkillBar name="🐘 PHP" level={90} />
                  <SkillBar name="⚡ CodeIgniter" level={88} />
                  <SkillBar name="🌐 REST API" level={85} />
                  <SkillBar name="🔐 JWT Auth" level={82} />
                  <SkillBar name="🗄 MySQL" level={84} />
                </div>
                <div>
                  <h3 className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-4 pb-2 border-b border-slate-200">Tools</h3>
                  <SkillBar name="☁️ Hostinger Server" level={90} />
                  <SkillBar name="🖥 VPS Server" level={95} />
                </div>
              </div>

            </div>

            <div>
              <h3 className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-4 pb-2 border-b border-slate-200">Technologies</h3>

              <div className="mb-5">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-300 mb-2">
                  Frontend
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "🌐 HTML5",
                    "🎨 CSS3",
                    "🅱 Bootstrap",
                    "🟨 JavaScript",
                    "⚛ React.js",
                    "💨 Tailwind CSS",
                    "🧩 Redux Toolkit",
                    "🔄 Context API",
                    "⚡ TanStack Query",
                    "📝 Formik",
                    "✔ Yup / Zod",
                  ].map((s) => (
                    <span key={s} className="skill-pill skill-pill--blue">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-300 mb-2">
                  Backend
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "🐘 PHP",
                    "⚡ CodeIgniter",
                    "🌐 REST API",
                    "🔐 JWT",
                    "🗄️ MySQL",
                    "🪶 Apache",
                    "🚀 Nginx",
                    "🐧 Linux",
                  ].map((s) => (
                    <span key={s} className="skill-pill skill-pill--green">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-300 mb-2">
                  Tools
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "🔀 Git",
                    "🐙 GitHub",
                    "💻 VS Code",
                    "📝 Sublime Text",
                    "📮 Postman",
                  ].map((s) => (
                    <span key={s} className="skill-pill skill-pill--amber">
                      {s}
                    </span>
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
            Let's Build Something Amazing Together
          </h2>

          <p className="max-w-3xl mx-auto text-center text-gray-600 leading-8 mb-16">
            Whether you have a project idea, a freelance opportunity, or you're looking
            for a Full Stack Developer, I'd love to hear from you. Feel free to reach
            out anytime—I'm always happy to connect, discuss new ideas, and explore
            exciting opportunities.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT SIDE */}

            <div>

              <h3 className="text-3xl font-bold text-slate-900">
                Let's Talk 👋
              </h3>

              <p className="text-gray-600 leading-8 mt-4 mb-8">
                Have a question or want to work together? You can reach me through
                any of the contact methods below. I'll do my best to respond as
                quickly as possible.
              </p>

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
                      Usually replies within 24 hours.
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
                      Available Monday – Saturday.
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
                      Open to Remote, Freelance & Full-Time opportunities.
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
                      linkedin.com/in/sagar-chotaliya-b48a862a3
                    </a>

                    <p className="text-sm text-gray-500 mt-1">
                      Let's connect professionally.
                    </p>
                  </div>
                </div>

              </div>

              {/* STATUS CARD */}

              <div className="mt-8 bg-blue-600 rounded-3xl p-6 text-white">

                <p className="text-sm uppercase tracking-widest text-blue-100">
                  Current Status
                </p>

                <h4 className="text-2xl font-bold mt-2">
                  Open to New Opportunities
                </h4>

                <p className="mt-3 leading-7 text-blue-100">
                  Currently available for Full-Time positions, Freelance projects,
                  Remote collaborations, and exciting web development opportunities.
                </p>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <h3 className="text-2xl font-bold text-slate-900">
                Send Me a Message
              </h3>

              <p className="text-gray-600 mt-2 mb-8 leading-7">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form className="space-y-6" onSubmit={handleFormSubmit} noValidate>

                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className={`w-full border rounded-xl px-4 py-3 input-field ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300"
                      }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleFormChange}
                    className={`w-full border rounded-xl px-4 py-3 input-field ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300"
                      }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={handleFormChange}
                    className={`w-full border rounded-xl px-4 py-3 resize-none input-field ${errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300"
                      }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-submit w-full"
                >
                  Send Inquiry 🚀
                </button>

                <p className="text-center text-sm text-gray-500">
                  I'll usually respond within 24 hours.
                </p>

              </form>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Main;