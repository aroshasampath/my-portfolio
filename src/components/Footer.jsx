function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 md:flex-row">
        <p>© Developed by Arosha Sampath. All rights reserved.</p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/aroshasampath"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aroshasampath"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-400"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sampatharosha5@gmail.com"
            className="transition hover:text-cyan-400"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;