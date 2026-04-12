import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import portfolioImg from "../assets/portfolio.png";
import crystalBeautyImg from "../assets/crystal-beauty.png";

const projects = [
   {
    title: "Personal Portfolio Website",
    description:
        "A modern cyber-security themed portfolio website built using React and Tailwind CSS, featuring smooth animations, responsive design, and project showcases.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "UI/UX"],
    github: "https://github.com/aroshasampath/my-portfolio.git",
    image: portfolioImg,
  },

  {
    title: "Crystal Beauty | E-commerce platform",
    description:
      "Crystal Beauty is a MERN stack e-commerce application that allows users to browse products and place orders, with a secure authentication system and an admin panel for managing products, users, and orders.",
    tech: ["React", "Tailwind CSS", "UI Design", "MERN Stack", "JavaScript"],
    github: "https://github.com/aroshasampath/crystal-frontend.git",
    image: crystalBeautyImg,
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
              <div className="mb-5 h-40 overflow-hidden rounded-2xl border border-cyan-500/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

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