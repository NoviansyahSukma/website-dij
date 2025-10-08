import { useContext } from "react";
import { ShowContext } from "../contexts/ShowContext";

export default function Product() {
  const show = useContext(ShowContext);
  return (
    <section
      className={`w-full h-[200px] bg-sky-600 transition-all transform duration-1500 ease-in-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-100"
      }`}
    >
      <div className="text-2xl text-slate-600 font-bold">Product</div>
    </section>
  );
}
