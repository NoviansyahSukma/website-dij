import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logo from "../assets/dij-font-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "Product", link: "about" },
    { id: 3, label: "Client", link: "product" },
    { id: 4, label: "Subscribe", link: "subscribe", different: true },
    { id: 5, label: "Contact", link: "contact" },
    { id: 6, label: "Speed Test", link: "#" },
  ];

  return (
    <>
      <nav className="w-full bg-slate-100 shadow-md px-4 py-3 md:py-5 lg:px-7">
        <div className="flex items-center justify-between max-w-6xl mx-auto relative">
          <div className="w-[140px] md:w-[200px] lg:w-[260px]">
            <img src={Logo} alt="logo dij" />
          </div>

          {/* Desktop menu */}
          <ul className="font-monserrat text-lg hidden xl:flex space-x-6 text-purple-900 font-semibold">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`hover:text-slate-400 focus:text-slate-300 ${
                  item.different ? "font-bold text-orange-500" : ""
                }`}
              >
                <Link to={`${item.link}`}>{item.label}</Link>
              </li>
            ))}
          </ul>

          {/* Toggle button for mobile */}
          <button
            className="xl:hidden text-purple-900 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <HiOutlineX className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            ) : (
              <HiOutlineMenuAlt3 className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className="w-full relative">
        <div
          className={`w-full xl:hidden absolute overflow-hidden shadow-md transition-all duration-500 ease-in-out transform ${
            isOpen ? "bg-slate-100 py-7 opacity-100" : "bg-none py-0 opacity-0"
          }`}
        >
          <ul className="font-monserrat text-lg text-center flex flex-col p-4 space-y-5 text-purple-900 font-semibold">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={`${item.link}`}
                  onClick={() => setIsOpen(false)} // ✅ tutup menu setelah klik
                  className={`hover:text-slate-400 focus:text-slate-300 ${
                    item.different ? "font-bold text-orange-500" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
