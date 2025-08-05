import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { useSwiper } from "swiper/react";

const SwiperNavButton = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute top-1/2 right-0 left-0 z-10 flex -translate-y-1/2 justify-between px-[2rem] lg:px-[5rem]">
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#1C1C1C] text-white"
      >
        <ArrowLeft className="h-10 w-10" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#1C1C1C] text-white"
      >
        <ArrowRight className="h-10 w-10" />
      </button>
    </div>
  );
};

export default SwiperNavButton;
