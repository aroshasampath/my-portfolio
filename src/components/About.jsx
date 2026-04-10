import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="border-b border-cyan-500/10 py-20">
      <div className="section-container grid items-center gap-10 lg:grid-cols-2">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 font-semibold text-cyan-400">About Me</p>

          <h2 className="mb-6 text-3xl font-bold leading-snug md:text-4xl">
            Passionate about building{" "}
            <span className="text-cyan-400 glow-text">secure digital systems</span>{" "}
            and modern user experiences
          </h2>

          <p className="text-slate-400 leading-7">
            A dedicated undergraduate focused on cyber security, continuous learning,
            and building practical skills for real-world challenges.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="cyber-border rounded-3xl bg-slate-900/80 p-8 backdrop-blur-md glow-box"
        >
          <p className="leading-8 text-slate-300">
            I am currently pursuing a{" "}
            <span className="text-cyan-400 font-medium">
              BSc (Hons) in Information Technology
            </span>{" "}
            at{" "}
            <span className="text-green-400 font-medium">SLIIT</span>, specializing in{" "}
            <span className="text-cyan-400 font-medium">Cyber Security</span>. 
            I am passionate about protecting digital systems, learning secure 
            development practices, and building a strong foundation in modern 
            cyber security concepts.
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            My interests include{" "}
            <span className="text-green-400">ethical hacking</span>,{" "}
            <span className="text-green-400">network security</span>,{" "}
            <span className="text-green-400">vulnerability assessment</span>, and{" "}
            <span className="text-green-400">secure software development</span>. 
            Through academic learning, hands-on practice, and personal projects, 
            I am continuously improving my technical and problem-solving skills.
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            My goal is to grow into a{" "}
            <span className="text-cyan-400 font-semibold">
              capable cyber security professional
            </span>{" "}
            who contributes to building safer and more secure digital environments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;