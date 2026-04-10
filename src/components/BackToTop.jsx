import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 rounded-full border border-cyan-500/30 bg-slate-900 p-4 text-cyan-400 shadow-lg transition ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTop;