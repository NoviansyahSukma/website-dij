// CarouselComponent.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Client_1 from "../assets/image/client-mobile/client-group-1.png";
import Client_2 from "../assets/image/client-mobile/client-group-2.png";
import Client_3 from "../assets/image/client-mobile/client-group-3.png";
import Client_4 from "../assets/image/client-mobile/client-group-4.png";
import Client_5 from "../assets/image/client-mobile/client-group-5.png";

export default function Carousel() {
  return (
    <>
      <div className="relative mx-auto">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img src={Client_1} alt="Client1" className="w-full object-cover" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Client_2} alt="Client1" className="w-full object-cover" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Client_3} alt="Client1" className="w-full object-cover" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Client_4} alt="Client1" className="w-full object-cover" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Client_5} alt="Client1" className="w-full object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
