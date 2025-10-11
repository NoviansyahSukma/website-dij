import { useContext } from "react";
import { ShowContext } from "../contexts/ShowContext";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaMailBulk } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Contact() {
  const show = useContext(ShowContext);
  return (
    <>
      <div
        className={`w-full md:w-5/6 xl:w-4/5 2xl:w-3/4 mx-auto md:mt-34 xl:mt-8 px-3 py-4 md:py-6 lg:py-8 transition-all duration-1000 ease-in-out ${
          show
            ? "opacity-100 md:border-1 md:border-gray-200 md:shadow-lg delay-100"
            : "opacity-0 delay-0"
        }`}
      >
        <div
          className={`font-roboto text-center xl:px-8 text-purple-900 transition-all duration-1000 ease-in-out ${
            show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-100"
          }`}
        >
          <h1 className="tracking-wide text-xl md:text-2xl lg:text-3xl font-bold">
            CONTACT
          </h1>

          <hr className="w-30 lg:w-40 xl:w-38 mx-auto bg-purple-800 mt-1 lg:mt-2 xl:mt-2" />

          <div className="text-slate-600 mt-5 grid grid-cols-1 gap-y-2 md:grid-cols-3">
            <div className="text-lg font-semibold w-48 mx-auto flex items-center justify-evenly cursor-pointer hover:text-slate-400">
              <BsInstagram />
              <Link to="https://www.instagram.com/detikinijuga" target="blank">
                Connect With Us
              </Link>
            </div>

            <div className="text-lg font-semibold w-48 mx-auto flex items-center justify-evenly">
              <BsFillTelephoneForwardFill />
              <h2>+62-81212858272</h2>
            </div>

            <div className="text-lg font-semibold w-48 mx-auto flex items-center justify-evenly">
              <FaMailBulk />
              <h2>sales@detik.net.id</h2>
            </div>
          </div>
        </div>

        <div
          className={`w-full mx-auto md:w-4/5 h-78 2xl:h-100 mt-5 shadow-md transition-all duration-1000 ease-in-out ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-100"
          }`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1676957333043!2d106.82771541476929!3d-6.241617395482026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3c334e63f0b%3A0x422cfc08ad2ec804!2sGedung%20Trans%20TV%2C%20Jl.%20Kapten%20Tendean%2C%20RT.2%2FRW.2%2C%20Mampang%20Prpt.%2C%20Kec.%20Mampang%20Prpt.%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012790!5e0!3m2!1sen!2sid!4v1594784415142!5m2!1sen!2sid"
            className="w-full h-full border border-gray-300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Google Maps"
          ></iframe>
        </div>
      </div>
    </>
  );
}
