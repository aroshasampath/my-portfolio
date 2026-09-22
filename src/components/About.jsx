import { motion } from "framer-motion";
import { FaGraduationCap, FaShieldAlt, FaCodeBranch } from "react-icons/fa";

function About() {
  const highlights = [
    {
      icon: <FaShieldAlt className="text-cyan-400 text-lg" />,
      title: "Defensive & Offensive Security",
      desc: "Ethical hacking, penetration testing, and vulnerability mitigation.",
    },
    {
      icon: <FaCodeBranch className="text-green-400 text-lg" />,
      title: "Secure Full-Stack Web Development",
      desc: "Modern React and MERN stack systems with robust authentication.",
    },
    {
      icon: <FaGraduationCap className="text-cyan-400 text-lg" />,
      title: "Continuous Academic Growth",
      desc: "BSc (Hons) in Information Technology specializing in Cyber Security at SLIIT.",
    },
  ];

  return (
    <section id="about" aria-label="About Arosha Sampath" className="relative border-b border-cyan-500/10 py-24 bg-slate-950">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">About Me</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
            Passionate about building{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
              secure digital systems
            </span>
          </h2>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-12">
          
          {/* LEFT: Highlight Cards */}
          <div className="space-y-4 lg:col-span-5">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-cyan-500/15 bg-slate-900/60 p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-900/90"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-slate-950 transition duration-300 group-hover:scale-105 group-hover:border-cyan-400">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white transition group-hover:text-cyan-400">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Detailed Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="cyber-border glow-box rounded-3xl bg-slate-900/80 p-7 sm:p-9 backdrop-blur-md lg:col-span-7"
          >
            <div className="mb-6 flex items-center justify-between border-b border-cyan-500/15 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Undergraduate Journey</h3>
                <p className="text-xs text-cyan-400 font-medium">SLIIT • Cyber Security Specialization</p>
              </div>
              <span className="rounded-full border border-green-400/30 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                Active Student
              </span>
            </div>

            <p className="leading-relaxed text-slate-300">
              I am currently pursuing a{" "}
              <strong className="text-cyan-400 font-semibold">
                BSc (Hons) in Information Technology
              </strong>{" "}
              at <strong className="text-green-400 font-semibold">SLIIT</strong>, specializing in{" "}
              <strong className="text-cyan-400 font-semibold">Cyber Security</strong>. 
              My passion revolves around safeguarding digital architectures, learning secure development practices, and applying cybersecurity fundamentals to real-world software.
            </p>

            <p className="mt-4 leading-relaxed text-slate-300">
              My technical interests include{" "}
              <span className="text-green-400 font-medium">ethical hacking</span>,{" "}
              <span className="text-green-400 font-medium">network defense</span>,{" "}
              <span className="text-green-400 font-medium">vulnerability assessment</span>, and{" "}
              <span className="text-green-400 font-medium">secure software development</span>. 
              Through university coursework, self-driven research, and hands-on lab projects, I continuously refine both my technical acumen and critical problem-solving skills.
            </p>

            <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-4">
              <p className="text-sm font-medium text-slate-300">
                <span className="text-cyan-400 font-bold">Goal:</span> To evolve into an industry-ready cyber security professional capable of protecting mission-critical assets and designing resilient infrastructure.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;