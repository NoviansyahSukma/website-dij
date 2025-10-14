import Jumbotron from "../assets/image/jumbotron.png";
import Thumb_1 from "../assets/image/dij_plus1.png";
import Thumb_2 from "../assets/image/dij_plus2.png";
import Thumb_3 from "../assets/image/dij_plus3.png";
import PageWrapper from "../components/framer-motion/PageWrapper";

export default function Home() {
  return (
    <>
      <PageWrapper>
        <div className="xl:grid xl:grid-cols-2 px-2 xl:px-0">
          <div
            className={`order-2 h-64 md:h-80 lg:h-120 xl:h-74 2xl:h-90 overflow-hidden md:px-2`}
          >
            <img
              src={Jumbotron}
              alt="jumbotron-dij"
              className="h-95 md:h-140 lg:h-216 xl:h-130 2xl:h-160 object-cover m-auto shadow-md -mt-12 md:-mt-20 lg:-mt-32 xl:-mt-18 2xl:-mt-24"
            />
          </div>

          <div
            className={`order-1 font-roboto text-center xl:text-left text-purple-900 mt-3 md:mt-7 xl:mt-3 2xl:mt-14 xl:px-5 2xl:px-14`}
          >
            <h1 className="text-xl tracking-wide md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl font-bold">
              FASTEST CONNECTION
            </h1>
            <hr className="max-w-64 lg:max-w-80 xl:max-w-64 2xl:max-w-78 m-auto my-2 md:mt-3 lg:mt-4 xl:ml-0 xl:mt-1 2xl:mt-2 bg-purple-900" />
            <p className="font-monserrat font-medium tracking-wide text-sm md:text-lg lg:text-lg xl:text-md text-slate-800 mt-2 md:mt-4 lg:mt-5 xl:mt-3 px-2 lg:px-7 xl:pl-0">
              Pada awal sejarah industri komunikasi Indonesia, Detik Ini
              Juga(DIJ) telah menjadi salah satu Penyedia layanan internet yang
              muncul dengan kuat dari fokusnya dalam bisnis, komitmen dalam
              layanan dan inovasi produk tanpa akhir. DIJ adalah perusahaan ICT
              yang menyediakan Layanan Internet baik untuk perumahan / small
              business maupun perusahaan.
            </p>
          </div>
        </div>

        <div
          className={`text-purple-900 text-center w-full xl:w-4/5 2xl:w-3/5 m-auto tracking-wide grid grid-cols-1 md:grid-cols-3 gap-y-3 mt-5 md:mt-7 lg:mt-10 xl:mt-7 md:px-3`}
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

        <div
          className={`w-full flex items-center justify-center py-10 lg:pt-18 xl:py-8 2xl:pt-12`}
        >
          <h1 className="font-roboto inline-block text-purple-900 text-sm 2xl: text-center shadow-md px-4 py-2">
            Copyright @ 2025 DIJ.
          </h1>
        </div>
      </PageWrapper>
    </>
  );
}
