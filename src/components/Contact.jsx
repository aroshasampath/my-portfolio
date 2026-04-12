
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (loading) return;
    if (!form.current) return;

    setLoading(true);
    setStatusMessage("");
    setIsSuccess(false);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are missing.");
      }

      await emailjs.sendForm(serviceId, templateId, form.current, {
        publicKey,
      });

      setIsSuccess(true);
      setStatusMessage("Message sent successfully.");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setIsSuccess(false);
      setStatusMessage(
        error?.text || error?.message || "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);

      setTimeout(() => {
        setStatusMessage("");
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-semibold text-cyan-400">Contact</p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Let’s connect and build secure digital experiences
          </h2>
          <p className="mb-12 text-slate-300">
            Have a project, collaboration, or opportunity in mind? Send me a message and I’ll get back to you soon.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl cyber-border glow-box rounded-3xl bg-slate-900 p-7 md:p-8"
        >
          <h3 className="mb-6 text-center text-2xl font-bold">Send Me a Message</h3>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
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

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>

            {statusMessage && (
              <p
                className={`pt-2 text-center text-sm ${
                  isSuccess ? "text-green-400" : "text-red-400"
                }`}
              >
                {statusMessage}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;