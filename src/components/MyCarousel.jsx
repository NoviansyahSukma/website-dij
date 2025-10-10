import { useEffect, useState } from "react";

import Client_1 from "../assets/image/client-mobile/client-group-1.png";
import Client_2 from "../assets/image/client-mobile/client-group-2.png";
import Client_3 from "../assets/image/client-mobile/client-group-3.png";
import Client_4 from "../assets/image/client-mobile/client-group-4.png";
import Client_5 from "../assets/image/client-mobile/client-group-5.png";

const images = [Client_1, Client_2, Client_3, Client_4, Client_5];

export default function MyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>
    </div>
  );
}
