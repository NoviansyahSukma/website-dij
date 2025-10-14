import { useEffect, useRef, useState } from "react";
import { easeOut, motion as Motion } from "framer-motion";

export default function UpToDwon({ children }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const distanceFromTop = ref.current.getBoundingClientRect().top;

      // Cek apakah elemen berjarak 500px dari top viewport
      if (distanceFromTop <= 400 && !show) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // untuk kasus awal page load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  return (
    <Motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={show ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: easeOut }}
    >
      {children}
    </Motion.div>
  );
}
