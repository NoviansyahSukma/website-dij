import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Logo from "../assets/dij-font-logo.png";
import { NavLink } from "react-router-dom";

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
      link: "/subscribe",
      different: true,
    },
    { id: 5, label: "Contact", link: "contact" },
    // {
    //   id: 6,
    //   label: "Speed Test",
    //   link: "https://speedtest.detik.net.id/",
    //   external: true,
    // },
  ];

  return (
    <>
      <div className="relative w-full">
        <div className="w-full absolute z-50 bg-slate-100 xl:bg-transparent flex items-center justify-between shadow-md pt-4 pb-2 md:pt-6 md:pb-3 lg:pt-8 lg:pb-4 xl:pt-4 px-3 md:px-4 xl:px-6">
          <div className="w-[140px] md:w-[200px] lg:w-[250px] xl:w-[240px] 2xl:w-[260px]">
            <img src={Logo} alt="logo dij" />
          </div>

          {/* Toggle Menu */}
          <button
            className="xl:hidden text-purple-900 font-semibold focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <HiOutlineX className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            ) : (
              <HiOutlineMenuAlt3 className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            )}
          </button>

          {/* Desktop Menu */}
          <ul className="font-monserrat text-lg 2xl:text-xl hidden xl:flex space-x-6 2xl:space-x-8 text-purple-900 font-semibold">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`${
                  item.different
                    ? "font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-blue-500 to-orange-500 hover:via-slate-300 hover:to-gray-400 bg-[length:200%_auto] animate-[shine_4s_linear_infinite]"
                    : "hover:text-slate-400 focus:text-slate-300"
                }`}
              >
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `inline-block ${
                      isActive
                        ? "underline decoration-orange-500 underline-offset-7"
                        : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            <a
              href="https://speedtest.detik.net.id/"
              target="blank"
              className={`inline-block cursor-pointer xl:text-lg rounded-xs hover:text-orange-500 focus:text-slate-300 shadow-sm shadow-slate-500 hover:shadow-slate-300 px-2`}
            >
              Speed Test
            </a>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`w-full absolute xl:hidden pt-18 pb-6 md:pt-26 md:pb-8 lg:pt-32 bg-slate-100 transition-all duration-500 transform ease-in-out ${
            isOpen
              ? "opacity-100 shadow-md translate-y-0"
              : "opacity-0 shadow-none -translate-y-90"
          }`}
        >
          <ul className="font-monserrat text-lg lg:text-2xl text-center flex flex-col space-y-4 lg:space-y-6 text-purple-900 font-semibold">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`${
                  item.different
                    ? "font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-blue-500 to-orange-500 hover:via-slate-300 hover:to-gray-400 bg-[length:200%_auto] animate-[shine_4s_linear_infinite]"
                    : "hover:text-slate-400 focus:text-slate-300"
                }`}
              >
                <NavLink
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `inline-block ${
                      isActive
                        ? "underline decoration-orange-500 underline-offset-7"
                        : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            <a
              href="https://speedtest.detik.net.id/"
              target="blank"
              onClick={() => setIsOpen(false)}
              className={`inline-block cursor-pointer w-30 md:w-36 lg:w-40 m-auto rounded-xs hover:text-orange-500 focus:text-slate-300 shadow-sm shadow-slate-500 hover:shadow-slate-300 px-2`}
            >
              Speed Test
            </a>
          </ul>
        </div>
      </div>

      {/* Keyframes for shiny animation */}
      <style>
        {`
          @keyframes shine {
            0% {
              background-position: -200% center;
            }
            100% {
              background-position: 200% center;
            }
          }
        `}
      </style>
    </>
  );
}
