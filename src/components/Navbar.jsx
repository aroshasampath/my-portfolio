import { useState } from "react";
import { FaShieldAlt } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-cyan-500/20 bg-slate-950/80 backdrop-blur-xl">
      <div className="section-container flex items-center justify-between py-4">
        <a
          href="#home"
          className="flex items-center gap-2 text-xl font-bold text-cyan-400 md:text-2xl"
        >
          <FaShieldAlt className="text-green-400" />
          <span className="glow-text">Arosha.dev</span>
        </a>

        <ul className="hidden items-center gap-7 text-slate-300 font-medium md:flex">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="transition hover:text-cyan-400">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="text-3xl text-cyan-400 md:hidden"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {open && (
        <div className="border-t border-cyan-500/20 bg-slate-950 md:hidden">
          <div className="section-container flex flex-col gap-4 py-4 text-slate-300">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="transition hover:text-cyan-400"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;