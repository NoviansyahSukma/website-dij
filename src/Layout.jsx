import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShowContext } from "./contexts/ShowContext";
import Navbar from "./components/Navbar";

export default function Layout() {
  const [show, setShow] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setShow(false);
    const timeout = setTimeout(() => {
      setShow(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      <ShowContext.Provider value={show}>
        <div className="top-0 right-0 bottom-0 left-0 h-screen fixed bg-[url(/bg.jpg)] bg-cover bg-center bg-no-repeat"></div>
        <div className="w-full m-auto xl:w-[90%] 2xl:w-5/6 lg:py-7 relative z-50">
          <div className="top-0 right-0 left-0 fixed z-[9999] lg:px-7 xl:px-0 xl:static">
            <Navbar />
          </div>

          <div className="w-full px-2 lg:px-7 xl:px-0 mt-16 md:mt-24 lg:mt-20 xl:mt-4 2xl:mt-3">
            <Outlet />
          </div>

          <div
            className={`w-full flex items-center justify-center md:mt-8 lg:mt-12 xl:mt-8 transition-all transform duration-1500 ease-in-out ${
              show ? "opacity-100 delay-500" : "opacity-0"
            }`}
          >
            <div className="pt-10 pb-3 xl:py-0">
              <h1 className="shadow-sm inline-block font-roboto text-purple-900 text-xs md:text-sm lg:text-lg xl:text-sm text-center px-4 py-2 xl:px-3">
                Copyright @ 2025 DIJ.
              </h1>
            </div>
          </div>
        </div>
      </ShowContext.Provider>
    </>
  );
}
