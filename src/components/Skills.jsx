import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaShieldAlt,
  FaTools,
  FaBrain,
  FaReact,
  FaPython,
  FaJava,
  FaDatabase,
  FaLinux,
  FaGitAlt,
  FaGithub,
  FaBug,
  FaNetworkWired,
  FaLock,
  FaUserSecret,
  FaTerminal,
  FaLightbulb,
  FaClock,
  FaUsers,
  FaComments,
  FaGraduationCap,
} from "react-icons/fa";
import { SiSplunk } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skillGroups = [
  {
    id: "security",
    title: "Cyber Security",
    icon: <FaShieldAlt className="text-cyan-400" />,
    skills: [
      { name: "Ethical Hacking", icon: <FaUserSecret className="text-green-400" /> },
      { name: "Web Security", icon: <FaLock className="text-cyan-400" /> },
      { name: "Network Security", icon: <FaNetworkWired className="text-teal-400" /> },
      { name: "Vulnerability Assessment", icon: <FaBug className="text-emerald-400" /> },
      { name: "Penetration Testing", icon: <FaShieldAlt className="text-cyan-400" /> },
      { name: "Linux Security", icon: <FaLinux className="text-green-400" /> },
    ],
  },
  {
    id: "programming",
    title: "Programming & Web",
    icon: <FaCode className="text-green-400" />,
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Python", icon: <FaPython className="text-teal-400" /> },
      { name: "MERN Full Stack", icon: <FaCode className="text-green-400" /> },
      { name: "SQL", icon: <FaDatabase className="text-cyan-400" /> },
      { name: "Java", icon: <FaJava className="text-teal-400" /> },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: <FaTools className="text-cyan-400" />,
    skills: [
      { name: "Linux", icon: <FaLinux className="text-green-400" /> },
      { name: "Splunk", icon: <SiSplunk className="text-cyan-400" /> },
      { name: "Git", icon: <FaGitAlt className="text-teal-400" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "VS Code", icon: <VscCode className="text-cyan-400" /> },
      { name: "Terminal / Bash", icon: <FaTerminal className="text-green-400" /> },
    ],
  },
  {
    id: "professional",
    title: "Professional Strengths",
    icon: <FaBrain className="text-green-400" />,
    skills: [
      { name: "Problem Solving", icon: <FaLightbulb className="text-cyan-400" /> },
      { name: "Time Management", icon: <FaClock className="text-teal-400" /> },
      { name: "Teamwork", icon: <FaUsers className="text-green-400" /> },
      { name: "Communication", icon: <FaComments className="text-cyan-400" /> },
      { name: "Critical Thinking", icon: <FaBrain className="text-teal-400" /> },
      { name: "Continuous Learning", icon: <FaGraduationCap className="text-green-400" /> },
    ],
  },
];

const categories = [
  { label: "All Skills", value: "all" },
  { label: "Cyber Security", value: "security" },
  { label: "Programming", value: "programming" },
  { label: "Tools", value: "tools" },
  { label: "Professional", value: "professional" },
];

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredGroups = selectedCategory === "all"
    ? skillGroups
    : skillGroups.filter((g) => g.id === selectedCategory);

  return (
    <section id="skills" aria-label="Skills and Technical Toolkit" className="border-b border-cyan-500/10 py-24 bg-slate-950">
      <div className="section-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">Expertise</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
              Technical strengths &amp;{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
                toolkit
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400 leading-relaxed">
            Practical skills spanning cyber defense, application development, industry security software, and collaborative methodologies.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat.value
                  ? "bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.35)] scale-105"
                  : "border border-cyan-500/20 bg-slate-900/70 text-slate-300 hover:border-cyan-400/50 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <AnimatePresence>
            {filteredGroups.map((group) => (
              <motion.div
                layout
                key={group.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="cyber-border glow-box flex flex-col justify-between rounded-3xl bg-slate-900/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div>
                  {/* Category Header */}
                  <div className="mb-6 flex items-center gap-3 border-b border-cyan-500/15 pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-slate-950 text-xl">
                      {group.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {group.title}
                    </h3>
                  </div>

                  {/* Individual Skills with Icons */}
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="group/pill inline-flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-slate-950/80 px-3.5 py-2 text-xs font-medium text-slate-300 transition-all duration-200 hover:border-cyan-400 hover:bg-slate-900 hover:text-white hover:scale-[1.03]"
                      >
                        <span className="text-sm transition-transform duration-200 group-hover/pill:scale-110">
                          {skill.icon}
                        </span>
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;