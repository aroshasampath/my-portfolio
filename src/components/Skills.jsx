import { motion } from "framer-motion";
import { FaCode, FaShieldAlt, FaTools, FaBrain } from "react-icons/fa";

const skillGroups = [
  {
    title: "Programming",
    icon: <FaCode />,
    skills: ["MERN Full Stack", "React", "Python", "SQL", "Java"],
  },
  {
    title: "Cyber Security",
    icon: <FaShieldAlt />,
    skills: [
      "Ethical Hacking",
      "Web Security",
      "Network Security",
      "Vulnerability Assessment",
      "Linux Basics",
      "Penetration Testing",
    ],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    skills: ["Linux","Splunk", "Git", "GitHub", "VS Code"],
  },
  {
    title: "Professional Skills",
    icon: <FaBrain />,
    skills: [
      "Problem Solving",
      "Time Management",
      "Teamwork",
      "Communication",
      "Critical Thinking",
      "Continuous Learning",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="border-b border-cyan-500/10 py-20">
      <div className="section-container">
        <p className="mb-3 font-semibold text-cyan-400">Skills</p>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Technical strengths and security toolkit
        </h2>

        <p className="mb-12 max-w-2xl text-slate-400">
          A combination of development knowledge, cyber security practices,
          industry tools, and professional strengths.
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cyber-border glow-box rounded-3xl bg-slate-900/80 p-7 backdrop-blur-md transition duration-300 hover:-translate-y-2"
            >
              {/* TITLE */}
              <div className="mb-5 flex items-center gap-3 text-xl font-bold">
                <span className="text-green-400 text-lg">
                  {group.icon}
                </span>

                <h3 className="bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent tracking-wide">
                  {group.title}
                </h3>
              </div>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-cyan-500/20 bg-slate-950 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;