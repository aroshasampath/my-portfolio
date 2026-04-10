import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "Pearson",
    year: "2026 February 14",
    description:
      "Completed the Certified Ethical Hacker (CEH) specialization, gaining foundational knowledge in ethical hacking, security techniques, and cyber defense strategies.",
    skills: ["AI Security", "Cloud Computing", "Cryptography","Encryption", "Network Security"],
    link: "https://coursera.org/share/c5ece3394c6b359b7f23724cf5f742f8",
  },
  {
    title: "Cisco Networking Basics",
    issuer: "Cisco",
    year: "2024",
    description:
      "Learned core networking concepts including IP addressing, routing, switching, and basic network troubleshooting.",
    skills: ["Networking", "Routing", "Switching"],
    link: "#",
  },
  {
    title: "Google Cybersecurity Certificate",
    issuer: "Google",
    year: "2025",
    description:
      "Studied security operations, risk management, incident response, SIEM tools, and practical security foundations.",
    skills: ["SOC", "Risk Management", "Incident Response"],
    link: "#",
  },
  {
    title: "Hack The Box Labs",
    issuer: "Hack The Box",
    year: "2025",
    description:
      "Practiced real-world penetration testing workflows through labs covering reconnaissance, exploitation, and post-exploitation.",
    skills: ["Pentesting", "Recon", "Exploitation"],
    link: "#",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="border-b border-cyan-500/10 py-20">
      <div className="section-container">
        <p className="mb-3 font-semibold text-cyan-400">Certifications</p>
        <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">
          Learning milestones and cyber-security achievements
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-cyan-500/15 bg-slate-900 p-6 shadow-[0_0_30px_rgba(34,211,238,0.06)]"
            >
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-green-400/20 bg-slate-950 text-green-400">
                  <FaCertificate className="text-2xl" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                    <span className="rounded-full border border-cyan-500/20 px-3 py-1 text-xs text-cyan-400">
                      {cert.year}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-green-400">{cert.issuer}</p>
                </div>
              </div>

              <p className="mb-4 leading-7 text-slate-300">{cert.description}</p>

              <div className="mb-5 flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="rounded-full border border-cyan-500/20 bg-slate-950 px-3 py-1 text-xs text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {cert.link && cert.link !== "#" && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                >
                  View Credential
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;