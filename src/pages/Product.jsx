import { useContext } from "react";
import { ShowContext } from "../contexts/ShowContext";
import Product_1 from "../assets/image/product-1.jpg";
import Product_2 from "../assets/image/product-2.jpg";

export default function Product() {
  const show = useContext(ShowContext);
  return (
    <>
      <div className="w-full mt-16 md:mt-26 lg:mt-34 xl:mt-2 grid grid-cols-1 gap-y-10 md:gap-y-14 lg:gap-y-18 xl:gap-y-8 pb-5 xl:pb-0 2xl:px-16">
        <div className="w-full m-auto px-3 md:px-5 grid grid-cols-1 xl:grid-cols-2 gap-y-3 md:gap-y-4 lg:gap-y-5 xl:gap-y-0">
          <div
            className={`font-roboto text-center xl:text-left xl:mt-7 2xl:mt-14 xl:px-8 text-purple-900 xl:shadow-lg transition-all transform duration-1000 ease-in-out ${
              show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-100"
            }`}
          >
            <h1 className="tracking-wide text-xl md:text-2xl lg:text-3xl font-bold">
              BROADBAND
            </h1>

            <hr className="w-40 lg:w-50 xl:w-38 m-auto xl:m-0 bg-purple-800 mt-1 lg:mt-2 xl:mt-2" />

            <p className="tracking-wide font-medium text-slate-900 font-monserrat text-sm md:text-lg lg:text-xl xl:text-md mt-2 px-4 md:px-6 lg:px-18 xl:px-0">
              Servis ini direkomendasikan untuk rumah, kamar kos, apartemen,
              usaha bisnis kecil, atau kantor kecil yang tidak memiliki
              kebutuhan khusus untuk kecepatan internet yang cepat dan stabil.
            </p>
          </div>

          <div
            className={`w-full md:w-[90%] xl:w-[75%] 2xl:w-[70%] m-auto transition-all transform duration-1000 ease-in-out ${
              show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-100"
            }`}
          >
            <img
              src={Product_1}
              alt="product-1"
              className="object-cover m-auto shadow-md 2xl:shadow-xl"
            />
          </div>
        </div>

        <hr
          className={`w-24 md:w-80 xl:w-96 m-auto bg-slate-100 transition-all transform duration-1000 ease-in-out ${
            show ? "opacity-100 delay-500" : "opacity-0"
          }`}
        />

        <div className="w-full m-auto px-3 md:px-5 grid grid-cols-1 xl:grid-cols-2 gap-y-3 md:gap-y-4 lg:gap-y-5 xl:gap-y-0">
          <div
            className={`xl:order-2 font-roboto text-center xl:text-right xl:mt-6 2xl:mt-14 xl:px-8 text-purple-900 xl:shadow-lg transition-all transform duration-1000 ease-in-out ${
              show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-100"
            }`}
          >
            <h1 className="tracking-wide text-xl md:text-2xl lg:text-3xl font-bold">
              DEDICATED
            </h1>

            <hr className="w-40 lg:w-50 xl:w-38 m-auto xl:m-0 xl:float-right bg-purple-900 mt-1 lg:mt-2 xl:mt-2" />

            <p className="tracking-wide font-medium text-slate-800 font-monserrat text-sm md:text-lg lg:text-xl xl:text-md xl:clear-both mt-2 xl:mt-5 px-4 md:px-6 lg:px-18 xl:px-0">
              Servis internet dedicated biasanya digunakan oleh kantor bisnis,
              co-working space, atau gedung perusahaan karena kecepatan internet
              didedikasikan khusus untuk setiap pengguna sehingga kecepatan yang
              didapat sesuai dengan kecepatan yang ditentukan.
            </p>
          </div>

          <div
            className={`xl:order-1 w-full md:w-[90%] xl:w-[75%] 2xl:w-[70%] m-auto transition-all transform duration-1000 ease-in-out ${
              show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-100"
            }`}
          >
            <img
              src={Product_2}
              alt="product-1"
              className="object-cover m-auto shadow-md 2xl:shadow-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
