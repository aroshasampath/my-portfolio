import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-cyan-500/10 bg-slate-950"
    >
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="absolute inset-0 noise-overlay"></div>

      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-green-400/10 blur-3xl"></div>

      <div className="section-container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-slate-900/80 px-4 py-2 text-sm uppercase tracking-[0.25em] text-green-400 backdrop-blur-md">
            Cyber Security Student
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="text-cyan-400 glow-text">Arosha Sampath</span>
          </h1>

          <div className="mb-6 min-h-[56px] text-xl font-semibold text-white md:text-3xl">
            <TypeAnimation
              sequence={[
                "Ethical Hacking Enthusiast",
                1800,
                "Secure Web Developer",
                1800,
                "Network Security Learner",
                1800,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
              className="text-green-400"
            />
          </div>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            I’m passionate about cyber security, secure development, and building
            clean, reliable, and modern digital experiences with a strong focus on
            secure systems, continuous learning, and practical problem solving.
          </p>

          <div className="mb-10 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-cyan-500/30 bg-slate-900/80 px-6 py-3 font-semibold text-cyan-400 backdrop-blur-md transition hover:bg-slate-800"
            >
              Contact Me
            </a>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-green-400/30 bg-slate-900/80 px-6 py-3 font-semibold text-green-400 backdrop-blur-md transition hover:bg-slate-800"
            >
              <FaDownload />
              Download CV
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-2xl text-slate-400">
            <a
              href="https://github.com/aroshasampath"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/20 bg-slate-900/70 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/aroshasampath"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/20 bg-slate-900/70 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:sampatharosha5@gmail.com"
              aria-label="Email"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/20 bg-slate-900/70 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <HiOutlineMail />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;