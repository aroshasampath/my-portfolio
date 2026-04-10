import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Port Scanner",
    description:
      "A Python-based tool for scanning open ports and understanding active services on a target system.",
    tech: ["Python", "Sockets", "Networking"],
    github: "https://github.com/yourusername/port-scanner",
  },
 
  {
    title: "Secure Login UI",
    description:
      "A modern authentication interface with secure form structure and cyber-inspired front-end design.",
    tech: ["React", "Tailwind CSS", "UI Design"],
    github: "https://github.com/yourusername/secure-login-ui",
  },
];

function Projects() {
  return (
    <section id="projects" className="border-b border-cyan-500/10 py-20">
      <div className="section-container">
        <p className="mb-3 font-semibold text-cyan-400">Projects</p>
        <h2 className="mb-12 text-3xl font-bold md:text-4xl">
          Security-focused builds and practical learning projects
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cyber-border glow-box rounded-3xl bg-slate-900 p-7 transition hover:-translate-y-2"
            >
              <div className="mb-5 h-40 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/30"></div>

              <h3 className="mb-4 text-xl font-bold text-white">{project.title}</h3>

              <p className="mb-5 leading-7 text-slate-300">{project.description}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-cyan-500/20 bg-slate-950 px-3 py-1 text-sm text-cyan-400"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-medium text-green-400 transition hover:text-cyan-400"
              >
                <FaGithub />
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;