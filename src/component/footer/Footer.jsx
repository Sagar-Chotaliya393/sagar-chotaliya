import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-14 px-10">
      <div className="max-w-5xl mx-auto">

        {/* Top Grid — Brand + Nav + Contact */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Sagar<span className="text-blue-500">.dev</span>
            </h2>
            <p className="text-slate-400 text-sm leading-7 mb-5">
              Full Stack Developer building modern web apps — from PHP backends to React frontends.
            </p>
            <div className="flex gap-3">
              <a href="https://github.com/Sagar-Chotaliya393" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-blue-500 hover:text-blue-500 transition">
                <FaGithub size={16} />
              </a>
              <a href="https://www.linkedin.com/in/sagar-chotaliya-b48a862a3/" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-blue-500 hover:text-blue-500 transition">
                <FaLinkedin size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-pink-500 hover:text-pink-500 transition">
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-slate-500 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`}
                    className="text-sm text-slate-400 hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}

              <li>
                <Link to="/forms">
                  Forms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-slate-500 mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+917990881893"
                  className="text-sm text-slate-400 hover:text-white transition break-all">
                  +91 79908 81893
                </a>
              </li>
              <li>
                <a href="mailto:schotaliya52@gmail.com"
                  className="text-sm text-slate-400 hover:text-white transition break-all">
                  schotaliya52@gmail.com
                </a>
              </li>
              <li className="text-sm text-slate-400">Surat, Gujarat</li>
              <li className="text-sm text-blue-500">Available for freelance</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mt-6">
          <p className="text-xs text-slate-500">
            © 2026 Sagar Chotaliya. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-2">
            Built with
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500" />
            React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;