import { motion } from "framer-motion";
import { FaGithub, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";
import portfolioImg from "../assets/portfolio.png";
import crystalBeautyImg from "../assets/crystal-beauty.png";
import cyberscanImg from "../assets/cyberscanImage.png";

const projects = [
  {
    title: "CyberScan Pro Vulnerability Scanner",
    badge: "Cyber Security",
    description:
      "A modern Python-based vulnerability assessment suite equipped with a GUI dashboard for proactive network and service reconnaissance.",
    highlights: [
      "Multi-threaded socket port scanning & banner grabbing",
      "HTTP security header analysis & CVE detection",
      "Automated TXT, CSV, HTML, & PDF report generation",
    ],
    tech: ["Python", "CustomTkinter", "Sockets", "Multi-threading", "ReportLab"],
    github: "https://github.com/aroshasampath/Python-based-vulnerability-scanner.git",
    image: cyberscanImg,
  },
  {
    title: "Personal Portfolio Website",
    badge: "Web Development",
    description:
      "A high-performance, cyber-themed portfolio engineered with React and Tailwind CSS, featuring smooth micro-animations and complete SEO optimization.",
    highlights: [
      "Responsive cyber-inspired aesthetic & glassmorphism",
      "Structured data JSON-LD schema & Open Graph support",
      "Interactive Framer Motion layouts and transitions",
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion", "SEO & UI/UX"],
    github: "https://github.com/aroshasampath/my-portfolio.git",
    image: portfolioImg,
  },
  {
    title: "Crystal Beauty E-Commerce Platform",
    badge: "Full-Stack MERN",
    description:
      "A full-stack e-commerce web application with customer shopping flows, role-based access control, and an administrative management portal.",
    highlights: [
      "Secure user authentication & session management",
      "Admin dashboard for product, user, and order control",
      "RESTful backend API architecture with MongoDB",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/aroshasampath/crystal-frontend.git",
    image: crystalBeautyImg,
  },
];

function Projects() {
  return (
    <section id="projects" aria-label="Featured Projects" className="border-b border-cyan-500/10 py-24 bg-slate-950">
      <div className="section-container">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">Portfolio</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
                security &amp; web projects
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400 leading-relaxed">
            Hands-on software solutions combining practical cybersecurity defense tools with responsive full-stack applications.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cyber-border glow-box flex flex-col justify-between rounded-3xl bg-slate-900/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)]"
            >
              <div>
                {/* Image Container with Zoom & Badge */}
                <div className="relative mb-5 h-48 overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-950">
                  <img
                    src={project.image}
                    alt={`${project.title} - Project Showcase by Arosha Sampath`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full border border-cyan-400/40 bg-slate-950/90 px-3 py-1 text-xs font-semibold text-cyan-400 backdrop-blur-md">
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-white transition group-hover:text-cyan-400">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="mb-5 space-y-1.5 border-t border-b border-cyan-500/10 py-3.5">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <FaCheckCircle className="mt-0.5 shrink-0 text-green-400" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="mb-6 flex flex-wrap gap-1.5">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="rounded-lg border border-cyan-500/15 bg-slate-950 px-2.5 py-1 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* GitHub CTA */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-green-400/30 bg-slate-950/80 py-2.5 text-sm font-semibold text-green-400 transition-all duration-200 hover:border-cyan-400 hover:bg-slate-900 hover:text-cyan-400"
                >
                  <FaGithub className="text-base" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;