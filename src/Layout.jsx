import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShowContext } from "./contexts/ShowContext";
import Navigation from "./components/Navigation";

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
        <div>
          <div className="top-0 right-0 bottom-0 left-0 h-screen fixed bg-[url(/bg.jpg)] bg-cover bg-center bg-no-repeat"></div>

          <div className="relative w-full m-auto xl:w-[90%] 2xl:w-[85%] xl:mt-3 2xl:mt-2">
            <div className="top-0 right-0 left-0 fixed z-[9999] m-auto xl:relative">
              <Navigation />
            </div>

            <div className="relative z-30 w-full mt-14 xl:mt-0 xl:pt-22 2xl:pt-24">
              <Outlet />
            </div>
          </div>

          <div
            className={`relative w-full flex items-center justify-center md:mt-7 xl:mt-5 2xl:mt-2 pt-6 pb-4 transition-all transform duration-1500 ease-in-out ${
              show ? "opacity-100 delay-700" : "opacity-0"
            }`}
          >
            <h1 className="font-roboto inline-block text-purple-900 text-sm 2xl: text-center shadow-md px-4 py-2">
              Copyright @ 2025 DIJ.
            </h1>
          </div>
        </div>
      </ShowContext.Provider>
    </>
  );
}
