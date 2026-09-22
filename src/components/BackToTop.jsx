import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top of page"
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/40 bg-slate-900/90 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.25)] backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800 hover:text-white hover:scale-110 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <FaArrowUp className="text-sm" />
    </button>
  );
}

export default BackToTop;