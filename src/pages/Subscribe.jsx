import Card from "../components/SiteCard";
import logoBintaro from "../assets/image/logo-site/logo-bintaro.png";
import thumbBintaro from "../assets/image/logo-site/thumb-bintaro.jpg";
import logoCibubur from "../assets/image/logo-site/logo-cibubur.png";
import thumbCibubur from "../assets/image/logo-site/thumb-cibubur.jpg";
import logoJuanda from "../assets/image/logo-site/logo-juanda.png";
import thumbJuanda from "../assets/image/logo-site/thumb-juanda.jpg";
import logoSurabaya from "../assets/image/logo-site/logo-surabaya.png";
import thumbSurabaya from "../assets/image/logo-site/thumb-surabaya.jpg";
import PageWrapper from "../components/framer-motion/PageWrapper";

export default function Subscribe() {
  return (
    <>
      <PageWrapper>
        <div className="w-full grid grid-cols-1 xl:px-12 2xl:px-26">
          <div className="w-full m-auto p-7 md:py-10 md:px-15 lg:px-18 xl:px-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 md:gap-x-2 md:gap-y-7 lg:gap-y-12 lg:gap-x-0 xl:gap-x-8">
            <div
              className={`transition-all duration-1000 transform ease-in-out`}
            >
              <Card
                logo={logoBintaro}
                thumb={thumbBintaro}
                alt="thumb-bintaro"
                link="paket/bintaro"
              />
            </div>

            <div
              className={`transition-all duration-1000 transform ease-in-out`}
            >
              <Card
                logo={logoCibubur}
                thumb={thumbCibubur}
                alt="thumb-bintaro"
                link="paket/cibubur"
              />
            </div>

            <div
              className={`transition-all duration-1000 transform ease-in-out`}
            >
              <Card
                logo={logoJuanda}
                thumb={thumbJuanda}
                alt="thumb-bintaro"
                link="paket/juanda"
              />
            </div>

            <div
              className={`transition-all duration-1000 transform ease-in-out`}
            >
              <Card
                logo={logoSurabaya}
                thumb={thumbSurabaya}
                alt="thumb-bintaro"
                link="paket/surabaya"
              />
            </div>
          </div>
        </div>

        <button className="m-auto px-4 py-2 block border-1 border-slate-300 rounded-sm font-roboto">
          <a
            href="https://noviansyahsukma.github.io/page-subscribe/"
            target="blank"
          >
            <h3 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-blue-500 to-orange-500 bg-[length:200%_auto] animate-[shine_4s_linear_infinite]">
              Berlangganan Disini!
            </h3>
          </a>
        </button>

        <div
          className={`w-full flex items-center justify-center pb-10 pt-16 md:pt-20 xl:pt-16 2xl:pt-28`}
        >
          <h1 className="font-roboto inline-block text-purple-900 text-sm 2xl: text-center shadow-md px-4 py-2">
            Copyright @ 2025 DIJ.
          </h1>
        </div>
      </PageWrapper>
    </>
  );
}
