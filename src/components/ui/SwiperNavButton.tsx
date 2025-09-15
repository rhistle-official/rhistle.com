import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { useSwiper } from "swiper/react";

const SwiperNavButton = () => {
  const swiper = useSwiper();
  return (
     <div
      className="pointer-events-none absolute inset-0 z-[9998]" 
      // ↑ 오버레이 레이어(항상 렌더, 숨김 없음)
    >
      {/* ← 이전 */}
      <button
        onClick={() => swiper.slidePrev()}
        className="
          pointer-events-auto absolute
          left-3 md:left-6                       /* 좌우 여백: 모바일/데스크탑 */
           bottom-[calc(env(safe-area-inset-bottom,0px)+45px)]
          md:bottom-auto md:top-1/2 md:-translate-y-1/2
          flex items-center justify-center
          h-10 w-10 md:h-14 md:w-14             /* 크기: 반응형 */
          rounded-full bg-[#1C1C1C]/80 text-white shadow-lg
        "
        aria-label="이전"
      >
        <ArrowLeft className="h-6 w-6 md:h-10 md:w-10" />
      </button>

      {/* → 다음 */}
      <button
        onClick={() => swiper.slideNext()}
        className="
          pointer-events-auto absolute
          right-3 md:right-6
          bottom-[calc(env(safe-area-inset-bottom,0px)+45px)]
          md:bottom-auto md:top-1/2 md:-translate-y-1/2
          flex items-center justify-center
          h-10 w-10 md:h-14 md:w-14
          rounded-full bg-[#1C1C1C]/80 text-white shadow-lg
        "
        aria-label="다음"
      >
        <ArrowRight className="h-6 w-6 md:h-10 md:w-10" />
      </button>
    </div>
  )
};

export default SwiperNavButton;
