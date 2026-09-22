import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaCopy, FaCheck, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = "aroshasampath2004@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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
      setStatusMessage("Message sent successfully! I will get back to you soon.");
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
      }, 6000);
    }
  };

  return (
    <section id="contact" aria-label="Contact Information and Form" className="py-24 bg-slate-950">
      <div className="section-container">

        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">Get in Touch</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
            Let’s discuss{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
              opportunities &amp; security
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Have a project, internship opportunity, or question? Feel free to reach out directly or send a message below.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid gap-10 lg:grid-cols-12 items-start">

          {/* LEFT: Quick Contact & Copy Email Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-5 lg:col-span-5"
          >
            {/* Direct Email Card with 1-Click Copy */}
            <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/80 p-6 backdrop-blur-md">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-slate-950 text-cyan-400">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Direct Email</h3>
                  <p className="text-xs text-slate-400">Click below to copy</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 rounded-xl border border-cyan-500/20 bg-slate-950 px-4 py-3">
                <span className="truncate text-xs sm:text-sm font-mono text-cyan-300">{emailAddress}</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="flex shrink-0 items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-cyan-400 transition hover:border-cyan-400 hover:bg-slate-800"
                >
                  {copied ? (
                    <>
                      <FaCheck className="text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* University & Location Card */}
            <div className="rounded-3xl border border-cyan-500/15 bg-slate-900/60 p-6 backdrop-blur-md">
              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-slate-950 text-green-400">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Location &amp; University</h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Sri Lanka • SLIIT (Sri Lanka Institute of Information Technology)
                  </p>
                  <p className="mt-2 text-xs text-green-400 font-medium">
                    ● Available for Remote &amp; On-Site Roles
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="rounded-2xl border border-cyan-500/10 bg-slate-900/40 p-4 text-xs text-slate-400">
              ⚡ <strong className="text-slate-200">Fast Response:</strong> All messages are delivered to my primary inbox and responded to promptly.
            </div>
          </motion.div>

          {/* RIGHT: Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="cyber-border glow-box rounded-3xl bg-slate-900/80 p-7 sm:p-9 backdrop-blur-md lg:col-span-7"
          >
            <h3 className="mb-6 text-xl font-bold text-white">Send Me a Direct Message</h3>

            <form ref={form} onSubmit={sendEmail} aria-label="Contact form" className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold text-slate-300">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="e.g. John Doe"
                    autoComplete="name"
                    aria-label="Your Name"
                    required
                    className="w-full rounded-xl border border-cyan-500/20 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold text-slate-300">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="from_email"
                    placeholder="e.g. john@example.com"
                    autoComplete="email"
                    aria-label="Your Email"
                    required
                    className="w-full rounded-xl border border-cyan-500/20 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="mb-1.5 block text-xs font-semibold text-slate-300">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="e.g. Internship Opportunity / Project Collaboration"
                  aria-label="Subject"
                  required
                  className="w-full rounded-xl border border-cyan-500/20 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold text-slate-300">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows="5"
                  name="message"
                  placeholder="Write your message here..."
                  aria-label="Your Message"
                  required
                  className="w-full rounded-xl border border-cyan-500/20 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  aria-label="Send email message"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 px-8 py-3.5 font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-200 hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <FaPaperPlane className="text-xs" />
                  <span>{loading ? "Sending Message..." : "Send Message"}</span>
                </button>
              </div>

              {statusMessage && (
                <div
                  className={`mt-3 rounded-xl border p-3.5 text-center text-xs font-semibold ${isSuccess
                      ? "border-green-400/30 bg-green-500/10 text-green-400"
                      : "border-red-400/30 bg-red-500/10 text-red-400"
                    }`}
                >
                  {statusMessage}
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;