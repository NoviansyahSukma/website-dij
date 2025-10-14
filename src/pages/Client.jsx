import Apartment from "../assets/image/apartment.jpg";
import Mall from "../assets/image/mall.jpg";
import PageWrapper from "../components/framer-motion/PageWrapper";
import Carousel from "../components/Carousel";

export default function Client() {
  return (
    <>
      <PageWrapper>
        <div className="w-4/5 mx-auto grid grid-cols-1 gap-10 xl:grid-cols-3 mt-4 lg:mt-6 xl:mt-12">
          <div className={`w-full`}>
            <div className="font-roboto text-center xl:px-8 text-purple-900">
              <h1 className="tracking-wide text-xl md:text-2xl xl:text-xl lg:text-3xl font-bold">
                APARTMENT
              </h1>

              <hr className="w-36 md:w-44 lg:w-54 xl:w-36 m-auto bg-purple-900 mt-1 md:mt-2 xl:mt-1" />
            </div>

            <div className="w-[90%] md:w-[75%] lg:w-[70%] xl:w-full 2xl:w-[95%] mx-auto mt-4 md:mt-5 lg:mt-7 xl:mt-5 shadow-xl">
              <img
                src={Apartment}
                alt="product-1"
                className="w-full object-cover m-auto shadow-xl"
              />
            </div>
            <div className="pt-12">
              <hr className="w-24 m-auto bg-slate-100 xl:hidden" />
            </div>
          </div>

          <div className={`w-full`}>
            <div className="font-roboto text-center xl:px-8 text-purple-900">
              <h1 className="tracking-wide text-xl md:text-2xl lg:text-3xl xl:text-xl font-bold">
                MALL
              </h1>

              <hr className="w-20 md:w-24 lg:w-30 xl:w-36 m-auto bg-purple-900 mt-1 md:mt-2 xl:mt-1" />
            </div>

            <div className="w-[90%] md:w-[75%] lg:w-[70%] xl:w-full 2xl:w-[95%] mx-auto mt-4 md:mt-5 lg:mt-7 xl:mt-5 shadow-xl">
              <img
                src={Mall}
                alt="product-1"
                className="w-full object-cover m-auto shadow-xl"
              />
            </div>

            <hr className="w-24 m-auto bg-slate-100 mt-10 xl:hidden" />
          </div>

          <div className={`w-full`}>
            <div className="font-roboto text-center xl:px-8 text-purple-900">
              <h1 className="tracking-wide text-xl md:text-2xl lg:text-3xl xl:text-xl font-bold">
                TENANT
              </h1>

              <hr className="w-24 md:w-30 lg:w-36 xl:w-36 m-auto bg-purple-900 mt-1 md:mt-2 xl:mt-1" />
            </div>

            <div className="w-[90%] md:w-[75%] lg:w-[70%] xl:w-full 2xl:w-[95%] mx-auto mt-4 md:mt-5 lg:mt-7 xl:mt-5 shadow-xl border-1 border-gray-300">
              <Carousel />
            </div>
          </div>
        </div>

        <div
          className={`w-full flex items-center justify-center pb-10 pt-16 md:pt-20 lg:pt-24 xl:pt-16 2xl:pt-6`}
        >
          <h1 className="font-roboto inline-block text-purple-900 text-sm 2xl: text-center shadow-md px-4 py-2">
            Copyright @ 2025 DIJ.
          </h1>
        </div>
      </PageWrapper>
    </>
  );
}
