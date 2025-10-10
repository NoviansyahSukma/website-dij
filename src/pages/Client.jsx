import { useContext } from "react";
import { ShowContext } from "../contexts/ShowContext";
import Apartment from "../assets/image/apartment.jpg";
import Mall from "../assets/image/mall.jpg";
import MyCarousel from "../components/MyCarousel";

export default function Client() {
  const show = useContext(ShowContext);
  return (
    <>
      <div className="w-full xl:w-4/5 2xl:w-5/6 mx-auto grid grid-cols-1 gap-10 xl:grid-cols-3 mt-16 md:mt-24 lg:mt-28 xl:mt-1 pb-5 px-4 xl:pb-12 2xl:pb-1">
        <div
          className={`w-full transition-all transform duration-1500 ease-in-out ${
            show
              ? "opacity-100 translate-y-0 delay-1000"
              : "opacity-0 -translate-y-100"
          }`}
        >
          <div className="font-roboto text-center xl:mt-7 2xl:mt-14 xl:px-8 text-purple-900">
            <h1 className="tracking-wide text-xl md:text-2xl xl:text-xl lg:text-3xl font-bold">
              APARTMENT
            </h1>

            <hr className="w-40 lg:w-50 xl:w-36 m-auto bg-purple-900 mt-1 md:mt-2 xl:mt-1" />
          </div>

          <div className="w-full md:w-[80%] lg:w-[70%] xl:w-full 2xl:w-[95%] mx-auto mt-4 md:mt-5 lg:mt-7 xl:mt-5 shadow-xl">
            <img
              src={Apartment}
              alt="product-1"
              className="w-full object-cover m-auto shadow-xl"
            />
          </div>

          <hr className="w-24 m-auto bg-slate-100 mt-10 xl:hidden" />
        </div>

        <div
          className={`w-full transition-all transform duration-1500 ease-in-out ${
            show
              ? "opacity-100 translate-y-0 delay-500"
              : "opacity-0 -translate-y-100"
          }`}
        >
          <div className="font-roboto text-center xl:mt-7 2xl:mt-14 xl:px-8 text-purple-900">
            <h1 className="tracking-wide text-xl md:text-2xl lg:text-3xl xl:text-xl font-bold">
              MALL
            </h1>

            <hr className="w-40 lg:w-50 xl:w-36 m-auto bg-purple-900 mt-1 md:mt-2 xl:mt-1" />
          </div>

          <div className="w-full md:w-[80%] lg:w-[70%] xl:w-full 2xl:w-[95%] mx-auto mt-4 md:mt-5 lg:mt-7 xl:mt-5 shadow-xl">
            <img
              src={Mall}
              alt="product-1"
              className="w-full object-cover m-auto shadow-xl"
            />
          </div>

          <hr className="w-24 m-auto bg-slate-100 mt-10 xl:hidden" />
        </div>

        <div
          className={`w-full transition-all transform duration-1500 ease-in-out ${
            show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-250"
          }`}
        >
          <div className="font-roboto text-center xl:mt-7 2xl:mt-14 xl:px-8 text-purple-900">
            <h1 className="tracking-wide text-xl md:text-2xl lg:text-3xl xl:text-xl font-bold">
              TENANT
            </h1>

            <hr className="w-40 lg:w-50 xl:w-36 m-auto bg-purple-900 mt-1 md:mt-2 xl:mt-1" />
          </div>

          <div className="w-full md:w-[80%] lg:w-[70%] xl:w-full 2xl:w-[95%] mx-auto mt-4 md:mt-5 lg:mt-7 xl:mt-5 shadow-xl">
            <MyCarousel />
          </div>
        </div>
      </div>
    </>
  );
}
