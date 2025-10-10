import { useContext } from "react";
import Jumbotron from "../assets/image/jumbotron.png";
import Thumb_1 from "../assets/image/dij_plus1.png";
import Thumb_2 from "../assets/image/dij_plus2.png";
import Thumb_3 from "../assets/image/dij_plus3.png";
import { ShowContext } from "../contexts/ShowContext";

export default function Home() {
  const show = useContext(ShowContext);

  return (
    <>
      <div className="xl:grid xl:grid-cols-2 xl:gap-4 px-2 xl:px-0 mt-12 md:mt-18 lg:mt-22 xl:mt-0">
        <div
          className={`order-2 h-50 md:h-80 lg:h-96 xl:h-68 2xl:h-93 overflow-hidden shadow-md transition-all transform duration-1500 ease-in-out ${
            show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-50"
          }`}
        >
          <img
            src={Jumbotron}
            alt="jumbotron-dij"
            className="h-86 md:h-140 lg:h-180 xl:h-140 2xl:h-192 object-cover m-auto -mt-12 md:-mt-18 lg:-mt-28 xl:-mt-24 2xl:-mt-34"
          />
        </div>

        <div
          className={`order-1 font-roboto text-center xl:text-left text-purple-900 mt-3 md:mt-7 xl:mt-3 2xl:mt-14 xl:px-5 2xl:px-14 transition-all transform duration-1500 ease-in-out ${
            show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-50"
          }`}
        >
          <h1 className="text-xl tracking-wide md:text-2xl lg:text-3xl xl:text-2xl font-bold">
            FASTEST CONNECTION
          </h1>
          <hr className="max-w-64 lg:max-w-80 xl:max-w-64 m-auto my-2 md:mt-3 lg:mt-4 xl:ml-0 xl:mt-1 bg-purple-900" />
          <p className="font-monserrat tracking-wide text-sm md:text-lg lg:text-lg xl:text-md text-slate-900 mt-2 md:mt-4 lg:mt-5 xl:mt-3 px-2 lg:px-7 xl:pl-0">
            Pada awal sejarah industri komunikasi Indonesia, Detik Ini Juga(DIJ)
            telah menjadi salah satu Penyedia layanan internet yang muncul
            dengan kuat dari fokusnya dalam bisnis, komitmen dalam layanan dan
            inovasi produk tanpa akhir. DIJ adalah perusahaan ICT yang
            menyediakan Layanan Internet baik untuk perumahan / small business
            maupun perusahaan.
          </p>
        </div>
      </div>

      <div
        className={`text-purple-900 text-center w-full xl:w-4/5 2xl:w-3/5 m-auto tracking-wide grid grid-cols-1 md:grid-cols-3 gap-y-3 mt-5 md:mt-7 lg:mt-10 xl:mt-7 md:px-3 2xl:pb-7 transition-all duration-1500 ease-in-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-50"
        }`}
      >
        <div className="w-48 md:w-54 lg:w-74 xl:w-64 2xl:w-68 m-auto shadow-sm pb-3 lg:pb-5">
          <img src={Thumb_1} alt="Thumb-1" className="-mt-5" />
          <h3 className="font-semibold -mt-5 lg:text-xl">FASTER</h3>
        </div>

        <div className="w-48 md:w-54 lg:w-74 xl:w-64 2xl:w-68 m-auto shadow-sm pb-3 lg:pb-5">
          <img src={Thumb_2} alt="Thumb-2" className="-mt-5" />
          <h3 className="font-semibold -mt-5 lg:text-xl">RELIABLE</h3>
        </div>

        <div className="w-48 md:w-54 lg:w-74 xl:w-64 2xl:w-68 m-auto shadow-sm pb-3 lg:pb-5">
          <img src={Thumb_3} alt="Thumb-3" className="-mt-5" />
          <h3 className="font-semibold -mt-5 lg:text-xl">STABLE</h3>
        </div>
      </div>
    </>
  );
}
