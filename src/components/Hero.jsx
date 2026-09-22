import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight, FaShieldAlt, FaAward, FaGraduationCap } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import profileImg from "../assets/profile.jpg";

function Hero() {
  const stats = [
    { label: "Certifications", value: "7+", icon: <FaAward className="text-cyan-400" /> },
    { label: "Featured Projects", value: "3+", icon: <FaShieldAlt className="text-green-400" /> },
    { label: "University", value: "SLIIT", icon: <FaGraduationCap className="text-cyan-400" /> },
  ];

  return (
    <section
      id="home"
      aria-label="Introduction and Summary"
      className="relative flex min-h-[calc(100vh-60px)] flex-col justify-center overflow-hidden border-b border-cyan-500/10 bg-slate-950 pt-12 pb-16"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 noise-overlay pointer-events-none"></div>
      <div className="absolute top-20 left-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-green-400/10 blur-3xl pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* LEFT: Introduction & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:col-span-7 lg:text-left"
          >
            {/* Live Availability Badge */}
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-green-400/30 bg-slate-900/90 px-4 py-1.5 text-xs font-semibold tracking-wide text-green-400 shadow-[0_0_15px_rgba(74,222,128,0.15)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
              </span>
              <span>Available for Opportunities &amp; Internships</span>
            </div>

            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Cyber Security Student &amp; Developer
            </p>

            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-green-400 bg-clip-text text-transparent glow-text">
                Arosha Sampath
              </span>
            </h1>

            {/* Typewriter text */}
            <div className="mb-6 flex min-h-[44px] items-center justify-center text-xl font-semibold text-white sm:text-2xl md:text-3xl lg:justify-start">
              <span className="text-slate-400 mr-2.5">Focus:</span>
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
                className="text-green-400 font-bold"
              />
            </div>

            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
              Passionate about cybersecurity defense, vulnerability assessment, and developing resilient full-stack applications. Dedicated to continuous learning and building secure digital architectures.
            </p>

            {/* Action Buttons */}
            <div className="mb-10 flex flex-wrap justify-center gap-3.5 lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 px-6 py-3 font-semibold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-200 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:scale-[1.02]"
              >
                <span>View Projects</span>
                <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-cyan-500/30 bg-slate-900/80 px-6 py-3 font-semibold text-cyan-400 backdrop-blur-md transition-all duration-200 hover:border-cyan-400 hover:bg-slate-800/90"
              >
                Contact Me
              </a>

              <a
                href="/aroshasampathpremathilaka_cv.pdf"
                download
                aria-label="Download Arosha Sampath CV (PDF)"
                className="inline-flex items-center gap-2 rounded-xl border border-green-400/30 bg-slate-900/80 px-5 py-3 font-semibold text-green-400 backdrop-blur-md transition-all duration-200 hover:border-green-400 hover:bg-slate-800/90"
              >
                <FaDownload className="text-sm" />
                <span>CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 text-xl text-slate-400 lg:justify-start">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Connect:</span>
              <a
                href="https://github.com/aroshasampath"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Arosha Sampath on GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-slate-900/80 transition-all duration-200 hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/aroshasampath"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Arosha Sampath on LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-slate-900/80 transition-all duration-200 hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:sampatharosha5@gmail.com"
                aria-label="Send email to Arosha Sampath"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-slate-900/80 transition-all duration-200 hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]"
              >
                <HiOutlineMail />
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Profile Portrait Card with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto flex items-center justify-center lg:col-span-5"
          >
            {/* Ambient Backlight */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-teal-500/10 to-green-500/20 blur-2xl opacity-70"></div>

            {/* Outer Cyber Card Frame */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] rounded-3xl border border-cyan-500/30 bg-slate-900/70 p-3.5 shadow-2xl backdrop-blur-xl">
              
              {/* Photo Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-950">
                <img
                  src={profileImg}
                  alt="Arosha Sampath - Cyber Security Specialist &amp; Full-Stack Developer"
                  className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  loading="eager"
                />
                
                {/* Subtle Gradient Shade at Bottom of Photo */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

                <div className="absolute bottom-3 inset-x-3 text-center">
                  <p className="text-base font-bold text-white tracking-wide">Arosha Sampath</p>
                  <p className="text-xs text-cyan-400 font-medium">BSc (Hons) IT • Cyber Security</p>
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 rounded-xl border border-cyan-400/40 bg-slate-900/95 px-3 py-2 text-xs font-semibold text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.25)] backdrop-blur-md"
              >
                <div className="flex items-center gap-1.5">
                  <FaShieldAlt className="text-green-400 text-sm" />
                  <span>Cyber Security</span>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Left */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-3 -left-3 rounded-xl border border-green-400/40 bg-slate-900/95 px-3 py-2 text-xs font-semibold text-green-300 shadow-[0_0_15px_rgba(74,222,128,0.2)] backdrop-blur-md"
              >
                <div className="flex items-center gap-1.5">
                  <FaAward className="text-cyan-400 text-sm" />
                  <span>CEH Certified</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-3 gap-3 rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-4 sm:p-6 backdrop-blur-md md:gap-6"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center">
              <div className="mb-1.5 flex items-center gap-1.5 text-xl sm:text-2xl font-extrabold text-white">
                {stat.icon}
                <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;