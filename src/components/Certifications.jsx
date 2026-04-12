import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

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
    <section id="certifications" className="border-b border-cyan-500/10 py-20">
      <div className="section-container">
        <p className="mb-2 font-semibold text-cyan-400">Certifications</p>

        <h2 className="mb-10 text-3xl font-bold text-white md:text-4xl">
          Learning milestones and cyber-security achievements
        </h2>

        <div className="space-y-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cyan-500/15 bg-slate-900/80 p-5"
            >
              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-cyan-400">
                  <FaCertificate className="text-xl" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold leading-snug text-white">
                    {cert.title}
                  </h3>

                  <p className="mt-1 text-sm text-green-400">{cert.issuer}</p>
                  <p className="mt-1 text-xs text-cyan-400">{cert.year}</p>
                </div>
              </div>

              <p className="mb-4 text-sm leading-6 text-slate-300">
                {cert.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="rounded-md bg-slate-950 px-2.5 py-1 text-xs text-slate-300"
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
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300"
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