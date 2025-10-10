import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";

import Client_1 from "../assets/image/client-mobile/client-group-1.png";
import Client_2 from "../assets/image/client-mobile/client-group-2.png";
import Client_3 from "../assets/image/client-mobile/client-group-3.png";
import Client_4 from "../assets/image/client-mobile/client-group-4.png";
import Client_5 from "../assets/image/client-mobile/client-group-5.png";

export default function MyCarousel() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="w-full mx-auto"
    >
      <SwiperSlide>
        <img
          src={Client_1}
          alt="product-1"
          className="w-full object-cover m-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={Client_2}
          alt="product-1"
          className="w-full object-cover m-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={Client_3}
          alt="product-1"
          className="w-full object-cover m-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={Client_4}
          alt="product-1"
          className="w-full object-cover m-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={Client_5}
          alt="product-1"
          className="w-full object-cover m-auto"
        />
      </SwiperSlide>
    </Swiper>
  );
}
