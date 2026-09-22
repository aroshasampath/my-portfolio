import { useState, useEffect } from "react";
import { FaShieldAlt } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Certifications", href: "#certifications", id: "certifications" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }

      // Determine active section based on scroll offset
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Scroll Progress Bar */}
      <div
        className="h-[3px] bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 transition-all duration-150 ease-out shadow-[0_0_8px_rgba(34,211,238,0.8)]"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
      />

      <nav aria-label="Main Navigation" className="border-b border-cyan-500/20 bg-slate-950/85 backdrop-blur-xl">
        <div className="section-container flex items-center justify-between py-3.5">
          <a
            href="#home"
            aria-label="Arosha Sampath Portfolio Home"
            className="group flex items-center gap-2.5 text-xl font-bold text-cyan-400 md:text-2xl transition"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-slate-900/90 text-green-400 transition duration-300 group-hover:scale-105 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              <FaShieldAlt className="text-lg" />
            </div>
            <span className="glow-text tracking-wide font-extrabold text-white group-hover:text-cyan-400 transition">
              asp<span className="text-cyan-400">.</span>
            </span>
          </a>

          <ul className="hidden items-center gap-2 text-sm text-slate-300 font-medium md:flex">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`relative rounded-lg px-3.5 py-1.5 transition-all duration-200 ${
                      isActive
                        ? "text-cyan-400 font-semibold bg-cyan-950/40 border border-cyan-500/30 shadow-[0_0_12px_rgba(34,211,238,0.15)]"
                        : "text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-slate-900/80 text-2xl text-cyan-400 transition hover:border-cyan-400 hover:bg-slate-800 md:hidden"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {open && (
          <div aria-label="Mobile Navigation" className="border-t border-cyan-500/20 bg-slate-950/95 backdrop-blur-2xl md:hidden">
            <div className="section-container flex flex-col gap-2 py-4">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-cyan-950/60 text-cyan-400 border border-cyan-500/30"
                        : "text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;