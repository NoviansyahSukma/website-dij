import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/dij-font-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "Product", link: "/product" },
    { id: 3, label: "Client", link: "/client" },
    {
      id: 4,
      label: "Subscribe",
      link: "https://noviansyahsukma.github.io/page-subscribe/",
      external: true,
      different: true,
    },
    { id: 5, label: "Contact", link: "contact" },
    {
      id: 6,
      label: "Speed Test",
      link: "https://speedtest.detik.net.id/",
      external: true,
    },
  ];

  return (
    <>
      <nav className="w-full bg-slate-100 xl:bg-none shadow-md xl:border-slate-700 px-4 py-3 md:py-5 lg:px-7 xl:px-5">
        <div className="flex items-center justify-between mx-auto relative">
          <div className="w-[140px] md:w-[200px] lg:w-[250px] xl:w-[240px] 2xl:w-[280px]">
            <img src={Logo} alt="logo dij" />
          </div>

          {/* Desktop menu */}
          <ul className="font-monserrat text-lg hidden xl:flex space-x-6 2xl:space-x-8 text-purple-900 font-semibold">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`hover:text-slate-400 focus:text-slate-300 ${
                  item.different ? "font-bold text-orange-500" : ""
                }`}
              >
                {item.external || item.link.startsWith("http") ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `inline-block ${
                        isActive ? "text-blue-900 font-bold" : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
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
          <ul className="font-monserrat text-lg lg:text-xl text-center flex flex-col p-4 space-y-5 text-purple-900 font-semibold">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`hover:text-slate-400 focus:text-slate-300 ${
                  item.different ? "font-bold text-orange-500" : ""
                }`}
              >
                {item.external || item.link.startsWith("http") ? (
                  <a
                    href={item.link}
                    target="_blank"
                    onClick={() => setIsOpen(false)} // ✅ tutup menu setelah klik
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    to={item.link}
                    onClick={() => setIsOpen(false)} // ✅ tutup menu setelah klik
                    className={({ isActive }) =>
                      `inline-block ${
                        isActive ? "text-blue-900 font-bold" : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
