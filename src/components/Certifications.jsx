import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt, FaAward } from "react-icons/fa";

const certifications = [
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "Pearson",
    year: "2026 February 14",
    description:
      "Completed the Certified Ethical Hacker (CEH) specialization, gaining foundational knowledge in ethical hacking, security techniques, and cyber defense strategies.",
    skills: ["AI Security", "Cloud Computing", "Cryptography", "Encryption", "Network Security"],
    link: "https://coursera.org/share/c5ece3394c6b359b7f23724cf5f742f8",
  },
  {
    title: "Cybersecurity in the AI Era",
    issuer: "University of Maryland (Coursera)",
    year: "2026 January 16",
    description:
      "Completed a specialization focused on cybersecurity challenges in the AI era, covering governance, privacy, risk management, and protection of critical systems from both technical and policy perspectives.",
    skills: [
      "Cybersecurity",
      "AI Security",
      "Risk Management",
      "Privacy",
      "Critical Systems Protection",
    ],
    link: "https://coursera.org/share/9ce926cd4e36a7022b19c452a91cfaac",
  },
  {
    title: "CompTIA Security+ Certification (SY0-701): The Total Course",
    issuer: "Packt (Coursera)",
    year: "2026",
    description:
      "Completed an in-depth Security+ (SY0-701) course covering core cybersecurity domains including risk management, cryptography, secure network architecture, and incident response with hands-on practical labs.",
    skills: [
      "Cybersecurity Fundamentals",
      "Risk Management",
      "Cryptography",
      "Network Security",
      "Incident Response",
      "Cloud Security",
    ],
    link: "https://coursera.org/share/6f5b042a60b4393059b82c668e16ffdf",
  },
  {
    title: "ISC2 Essentials of Cloud Certificate",
    issuer: "ISC2 (Coursera)",
    year: "2026",
    description:
      "Gained foundational knowledge in cloud computing and cloud security, including secure cloud adoption, risk awareness, and best practices for protecting cloud-based systems.",
    skills: [
      "Cloud Computing",
      "Cloud Security",
      "Risk Awareness",
      "Secure Cloud Practices",
    ],
    link: "https://coursera.org/share/1f8c25b3cc4d4c1b6c57572b6e14eeb2",
  },
  {
    title: "Network Automation Engineering Fundamentals",
    issuer: "Cisco (Coursera)",
    year: "2026",
    description:
      "Learned the fundamentals of network automation including APIs, Ansible, and DevOps practices for managing and automating modern network infrastructures.",
    skills: ["Network Automation", "APIs", "Ansible", "DevOps", "NetDevOps"],
    link: "https://coursera.org/share/5e4e233c74e762ccf0d31ea854c5eb63",
  },
  {
    title: "Cyber Security: Security of AI",
    issuer: "Macquarie University (Coursera)",
    year: "2026",
    description:
      "Explored the security challenges of AI systems, including threats, vulnerabilities, and techniques for building secure and trustworthy AI applications.",
    skills: ["AI Security", "Cybersecurity", "Threat Analysis", "Secure AI Systems"],
    link: "https://coursera.org/share/ee814b664e97f0e54e8a675a0cc1f308",
  },
  {
    title: "Certified Information Systems Security Professional (CISSP)",
    issuer: "Infosec (Coursera)",
    year: "2026",
    description:
      "Covered core CISSP domains including security architecture, risk management, network security, and identity & access management.",
    skills: [
      "Security Architecture",
      "Risk Management",
      "Network Security",
      "IAM",
      "Security Operations",
    ],
    link: "https://coursera.org/share/5a593dcfdc662f6b1b25f54c813bea8c",
  },
];

function Certifications() {
  return (
    <section id="certifications" aria-label="Certifications and Milestones" className="border-b border-cyan-500/10 py-24 bg-slate-950">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">Credentials</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
              Professional{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
                certifications &amp; milestones
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-slate-900/80 px-4 py-2 text-xs font-semibold text-cyan-400">
            <FaAward className="text-green-400 text-sm" />
            <span>7 Specialized Certifications</span>
          </div>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: (index % 4) * 0.08 }}
              viewport={{ once: true }}
              className="group flex flex-col justify-between rounded-3xl border border-cyan-500/15 bg-slate-900/70 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/95 hover:shadow-[0_8px_25px_rgba(34,211,238,0.12)]"
            >
              <div>
                {/* Header row */}
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-slate-950 text-cyan-400 transition-transform duration-300 group-hover:scale-105 group-hover:border-cyan-400">
                      <FaCertificate className="text-lg" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white transition group-hover:text-cyan-400 leading-snug">
                        {cert.title}
                      </h3>
                      <p className="mt-0.5 text-xs font-semibold text-green-400">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-cyan-500/20 bg-slate-950 px-2.5 py-1 text-[11px] font-medium text-cyan-300">
                    {cert.year}
                  </span>
                </div>

                {/* Description */}
                <p className="mb-4 text-xs sm:text-sm leading-relaxed text-slate-300">
                  {cert.description}
                </p>

                {/* Skills Chips */}
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="rounded-lg border border-cyan-500/10 bg-slate-950/80 px-2 py-1 text-[11px] text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credential Link */}
              {cert.link && cert.link !== "#" && (
                <div className="border-t border-cyan-500/10 pt-3">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify ${cert.title} credential from ${cert.issuer}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 transition hover:text-cyan-300"
                  >
                    <span>Verify Credential</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              )}
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;