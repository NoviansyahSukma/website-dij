import Jumbotron from "../assets/image/jumbotron.png";
import Thumb_1 from "../assets/image/dij_plus1.png";
import Thumb_2 from "../assets/image/dij_plus2.png";
import Thumb_3 from "../assets/image/dij_plus3.png";

export default function Home() {
  return (
    <>
      <div className="w-full h-40 md:h-80 overflow-hidden shadow-md">
        <img
          src={Jumbotron}
          alt="jumbotron-dij"
          className="h-76 md:h-140 object-cover -mt-12"
        />
      </div>

      <div className="mt-3 md:mt-6 font-roboto text-center text-purple-900">
        <div>
          <h1 className="text-xl tracking-wide md:text-2xl font-bold">
            FASTEST CONNECTION
          </h1>
          <hr className="max-w-64 m-auto my-2 bg-slate-600" />
          <p className="font-monserrat text-sm md:text-lg text-slate-900 mt-2 md:mt-4 px-2">
            Pada awal sejarah industri komunikasi Indonesia, Detik Ini Juga(DIJ)
            telah menjadi salah satu Penyedia layanan internet yang muncul
            dengan kuat dari fokusnya dalam bisnis, komitmen dalam layanan dan
            inovasi produk tanpa akhir. DIJ adalah perusahaan ICT yang
            menyediakan Layanan Internet baik untuk perumahan / small business
            maupun perusahaan.
          </p>
        </div>

        <div className="w-full tracking-wide grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-x-0 mt-5">
          <div className="w-48 md:w-54 m-auto shadow-sm">
            <img src={Thumb_1} alt="Thumb-1" className="-mt-5" />
            <h3 className="font-medium -mt-5 pb-2">FASTER</h3>
          </div>

          <div className="w-48 md:w-54 m-auto shadow-sm">
            <img src={Thumb_2} alt="Thumb-2" className="-mt-5" />
            <h3 className="font-medium -mt-5 pb-2">RELIABLE</h3>
          </div>

          <div className="w-48 md:w-54 m-auto shadow-sm">
            <img src={Thumb_3} alt="Thumb-3" className="-mt-5" />
            <h3 className="font-medium -mt-5 pb-2">STABLE</h3>
          </div>
        </div>
      </div>
    </>
  );
}
