import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Layout() {
  return (
    <>
      <div className="w-full h-screen fixed bg-[url(src/assets/bg.jpg)] bg-cover bg-center bg-no-repeat"></div>
      <div className="w-full m-auto lg:w-4/5 xl:w-5/6 lg:py-7 relative z-50">
        <div className="top-0 right-0 left-0 fixed">
          <Navbar />
        </div>

        <div className="w-full px-2 mt-16 mb-14 md:mt-24">
          <Outlet />
        </div>

        <div className="w-full relative">
          <h1 className="absolute top-0 left-0 right-0 font-roboto text-purple-900 text-sm text-center py-2">
            Copyright @ 2025 DIJ.
          </h1>
        </div>
      </div>
    </>
  );
}
