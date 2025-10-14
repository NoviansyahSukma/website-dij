import Product_1 from "../assets/image/product-1.jpg";
import Product_2 from "../assets/image/product-2.jpg";
import PageWrapper from "../components/framer-motion/PageWrapper";

export default function Product() {
  return (
    <>
      <div className="w-full mt-2 md:mt-4 lg:mt-6 xl:mt-0 2xl:px-16">
        <PageWrapper>
          <div className="w-full m-auto px-3 md:px-5 xl:px-16 grid grid-cols-1 xl:grid-cols-2 gap-y-3 md:gap-y-4 lg:gap-y-5 xl:gap-y-0">
            <div
              className={`font-roboto text-center xl:text-left xl:mt-7 2xl:mt-14 xl:px-8 text-purple-900 xl:shadow-lg`}
            >
              <h1 className="tracking-wide text-xl md:text-2xl lg:text-3xl font-bold">
                BROADBAND
              </h1>

              <hr className="w-36 md:w-44 lg:w-54 xl:w-38 m-auto xl:m-0 bg-purple-800 mt-1 lg:mt-2 xl:mt-2" />

              <p className="tracking-wide font-medium text-slate-900 font-monserrat text-sm md:text-lg lg:text-xl xl:text-md mt-2 px-4 md:px-6 lg:px-18 xl:px-0">
                Servis ini direkomendasikan untuk rumah, kamar kos, apartemen,
                usaha bisnis kecil, atau kantor kecil yang tidak memiliki
                kebutuhan khusus untuk kecepatan internet yang cepat dan stabil.
              </p>
            </div>

            <div className={`w-full md:w-[90%] xl:w-[75%] 2xl:w-[70%] m-auto`}>
              <img
                src={Product_1}
                alt="product-1"
                className="object-cover m-auto shadow-md 2xl:shadow-xl"
              />
            </div>
          </div>

          <div className="py-10 lg:py-14 xl:py-10 2xl:py-8">
            <hr className={`w-24 md:w-80 xl:w-96 m-auto bg-slate-100`} />
          </div>

          <div className="w-full m-auto px-3 md:px-5 xl:px-18 grid grid-cols-1 xl:grid-cols-2 gap-y-3 md:gap-y-4 lg:gap-y-5 xl:gap-y-0">
            <div
              className={`xl:order-2 font-roboto text-center xl:text-right xl:mt-6 2xl:mt-14 xl:px-8 text-purple-900 xl:shadow-lg`}
            >
              <h1 className="tracking-wide text-xl md:text-2xl lg:text-3xl font-bold">
                DEDICATED
              </h1>

              <hr className="w-32 md:w-38 lg:w-50 xl:w-38 m-auto xl:m-0 xl:float-right bg-purple-900 mt-1 lg:mt-2 xl:mt-2" />

              <p className="tracking-wide font-medium text-slate-800 font-monserrat text-sm md:text-lg lg:text-xl xl:text-md xl:clear-both mt-2 xl:mt-5 px-4 md:px-6 lg:px-18 xl:px-0">
                Servis internet dedicated biasanya digunakan oleh kantor bisnis,
                co-working space, atau gedung perusahaan karena kecepatan
                internet didedikasikan khusus untuk setiap pengguna sehingga
                kecepatan yang didapat sesuai dengan kecepatan yang ditentukan.
              </p>
            </div>

            <div
              className={`xl:order-1 w-full md:w-[90%] xl:w-[75%] 2xl:w-[70%] m-auto`}
            >
              <img
                src={Product_2}
                alt="product-1"
                className="object-cover m-auto shadow-md 2xl:shadow-xl"
              />
            </div>
          </div>

          <div
            className={`w-full flex items-center justify-center py-10 lg:pt-18 xl:py-6 2xl:py-4`}
          >
            <h1 className="font-roboto inline-block text-purple-900 text-sm 2xl: text-center shadow-md px-4 py-2">
              Copyright @ 2025 DIJ.
            </h1>
          </div>
        </PageWrapper>
      </div>
    </>
  );
}
