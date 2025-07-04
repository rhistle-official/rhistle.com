import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { useSwiper } from "swiper/react";

const SwiperNavButton = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute top-1/2 right-0 left-0 z-10 flex -translate-y-1/2 justify-between px-[2rem] lg:px-[5rem]">
      <button
        onClick={() => swiper.slidePrev()}
        className="z-10 flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-[#1C1C1C] text-white"
      >
        <ArrowLeft className="h-12 w-12" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="z-10 flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-[#1C1C1C] text-white"
      >
        <ArrowRight className="h-12 w-12" />
      </button>
    </div>
  );
};

export default SwiperNavButton;
