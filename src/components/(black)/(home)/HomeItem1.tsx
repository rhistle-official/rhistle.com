"use client";

import { Swiper, SwiperSlide} from "swiper/react";
import type { Swiper as SwiperType } from 'swiper'; 
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import Image from "next/image";
import SwiperNavButton from "../../ui/SwiperNavButton";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const HomeItem1 = () => {
  const slides = [
    {
      image: "/image/main.mp4",
      width: 1472,
      height: 832,
      title: "Innovate",
      subtitle: "for Tomorrow",
      description: "고객의 가치를 최우선으로 실현하는 최고의 전문 파트너",
      ctaText: "솔루션 보기",
      ctaLink: "/product/corecode"
    },
    {
      image: "/image/main3.mp4",
      width: 1472,
      height: 832,
      title: "Smart",
      subtitle: "Factory",
      description: "AI 기반 스마트팩토리로 생산성 혁신을 이끌어갑니다",
      ctaText: "자세히 보기",
      ctaLink: "/product/corecode"
    },
    {
      image: "/image/main4.mp4",
      width: 1472,
      height: 832,
      title: "Global",
      subtitle: "Partnership",
      description: "전 세계 고객과 함께 성장하는 글로벌 파트너십",
      ctaText: "문의하기",
      ctaLink: "/inquiry/corecode-inquiry"
    },
  ];

  const swiperRef = useRef<SwiperType | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;

          if (entry.isIntersecting) {
            // 화면에 등장한 video → 재생
            video.currentTime = 0;
            video.play().catch(() => {});
          } else {
            // 보이지 않게 된 video → 정지
            video.pause();
            video.currentTime = 0;
          }
        });
      },
      {
        threshold: 0.9, // 90% 이상 보여야 실행
      }
    );

    const videos = document.querySelectorAll("video");
    videos.forEach((v) => observer.observe(v));

    return () => {
      videos.forEach((v) => observer.unobserve(v));
    };
  }, []);

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      effect="fade"
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={2000}
      modules={[Navigation, Autoplay, EffectFade]}
      className="h-[50vh] lg:h-screen"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          {slide.image.endsWith('.mp4') ? (
            <video
              src={slide.image}
              autoPlay
              muted
              loop
              playsInline
              onCanPlayThrough={(e) => e.currentTarget.style.opacity = '1'}
              className="h-full w-full object-cover brightness-50"
            />
          ) : (
            <Image
              src={slide.image}
              alt={`slide-${index}`}
              width={slide.width}
              height={slide.height}
              className="h-full w-full object-cover brightness-50"
            />
          )}
          <div className="absolute top-[30%] left-[5%] max-w-[90%] space-y-6 lg:top-[40%] lg:left-[10%] lg:max-w-[80%]">
            <div className="space-y-2">
              <p className="text-lg font-bold sm:text-xl md:text-5xl text-white">
                {slide.title}
              </p>
              <p className="text-3xl font-extrabold sm:text-4xl md:text-7xl text-white">
                {slide.subtitle}
              </p>
            </div>
            <p className="text-md font-bold sm:text-xl md:text-2xl text-white/90 max-w-2xl">
              {slide.description}
            </p>
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-3 text-lg"
                asChild
              >
                <a href={slide.ctaLink}>
                  {slide.ctaText}
                </a>
              </Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <SwiperNavButton />
    </Swiper>
  );
};

export default HomeItem1;