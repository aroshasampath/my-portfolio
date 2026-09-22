import { FaShieldAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <footer role="contentinfo" className="border-t border-cyan-500/15 bg-slate-950 py-10">
      <div className="section-container flex flex-col items-center justify-between gap-6 text-center text-sm text-slate-400 md:flex-row md:text-left">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-500/30 bg-slate-900 text-green-400 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
            <FaShieldAlt />
          </div>
          <div>
            <p className="font-semibold text-white">
              Arosha Sampath <span className="text-cyan-400">•</span> Portfolio
            </p>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Arosha Sampath. All rights reserved.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 text-xs font-medium">
          <a
            href="https://github.com/aroshasampath"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Arosha Sampath on GitHub"
            className="flex items-center gap-1.5 rounded-lg border border-cyan-500/20 bg-slate-900 px-3 py-1.5 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaGithub className="text-sm" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/aroshasampath"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Arosha Sampath on LinkedIn"
            className="flex items-center gap-1.5 rounded-lg border border-cyan-500/20 bg-slate-900 px-3 py-1.5 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaLinkedin className="text-sm" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:sampatharosha5@gmail.com"
            aria-label="Send email to Arosha Sampath"
            className="flex items-center gap-1.5 rounded-lg border border-cyan-500/20 bg-slate-900 px-3 py-1.5 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <HiOutlineMail className="text-sm" />
            <span>Email</span>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;