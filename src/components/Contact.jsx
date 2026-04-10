import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatusMessage("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      setStatusMessage("Message sent successfully.");
      form.current.reset();

      setTimeout(() => {
        setStatusMessage("");
      }, 3000);
    } catch (error) {
      setIsSuccess(false);
      setStatusMessage("Failed to send message. Please try again.");

      setTimeout(() => {
        setStatusMessage("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <p className="mb-3 font-semibold text-cyan-400">Contact</p>
        <h2 className="mb-12 text-3xl font-bold md:text-4xl">
          Let’s connect and build secure digital experiences
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="cyber-border glow-box rounded-3xl bg-slate-900 p-7"
          >
            <h3 className="mb-5 text-2xl font-bold">Send Me a Message</h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl border border-cyan-500/20 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl border border-cyan-500/20 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full rounded-xl border border-cyan-500/20 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                required
                className="w-full rounded-xl border border-cyan-500/20 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {statusMessage && (
                <p
                  className={`pt-2 text-sm ${
                    isSuccess ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="cyber-border glow-box rounded-3xl bg-slate-900 p-7"
          >
            <h3 className="mb-3 text-2xl font-bold">Contact Information</h3>
            <p className="mb-6 text-slate-300">
              Reach out through email or connect with me on professional platforms.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:youremail@example.com"
                className="flex items-center gap-4 rounded-2xl border border-cyan-500/20 bg-slate-950 p-4 transition hover:border-cyan-400"
              >
                <HiOutlineMail className="text-2xl text-cyan-400" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-slate-300">youremail@example.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-cyan-500/20 bg-slate-950 p-4 transition hover:border-cyan-400"
              >
                <FaLinkedin className="text-2xl text-cyan-400" />
                <div>
                  <p className="font-semibold text-white">LinkedIn</p>
                  <p className="text-slate-300">linkedin.com/in/yourusername</p>
                </div>
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-cyan-500/20 bg-slate-950 p-4 transition hover:border-cyan-400"
              >
                <FaGithub className="text-2xl text-cyan-400" />
                <div>
                  <p className="font-semibold text-white">GitHub</p>
                  <p className="text-slate-300">github.com/yourusername</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;