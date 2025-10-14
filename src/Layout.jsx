import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AnimatePresence, motion as Motion } from "framer-motion";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <div className="relative">
        <div className="top-0 right-0 bottom-0 left-0 h-screen fixed bg-[url(/bg.jpg)] bg-cover bg-center bg-no-repeat"></div>

        <div className="relative w-full m-auto xl:w-[90%] 2xl:w-[85%] xl:mt-3 2xl:mt-2">
          <div className="top-0 right-0 left-0 fixed z-[9999] m-auto xl:relative">
            <Navbar />
          </div>

          <div>
            <AnimatePresence mode="wait" initial={false}>
              <Outlet key={location.pathname} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
