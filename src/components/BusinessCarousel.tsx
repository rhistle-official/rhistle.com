"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

const BusinessCarousel = () => {
  const { ref, inView } = useInView();
  const contents = [
    {
      title: "차세대 통합 관리시스템 구축",
      tags: ["#DT", "#Solution"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "스마트팩토리 MES 구축",
      tags: ["#MES", "#Smart Factory"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "클라우드 기반 ERP 시스템 개발",
      tags: ["#Cloud", "#ERP"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI 기반 품질 관리 시스템",
      tags: ["#AI", "#Quality"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "IoT 기반 실시간 모니터링",
      tags: ["#IoT", "#Monitoring"],
      color: "from-indigo-500 to-blue-500"
    },
  ];
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView && { opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Carousel
        opts={{
          align: "start",
        }}
        className="mx-auto max-w-[15rem] md:max-w-[35rem] lg:max-w-[80rem]"
      >
        <CarouselContent>
          {contents.map((item, idx) => (
            <CarouselItem
              key={item.title + idx}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView && { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Link href={"/"} className="block">
                  <div className="h-[10rem] w-[15rem] rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-4 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl lg:h-[18rem] lg:w-[25rem] lg:p-6 group">
                    <div className="flex h-full flex-col text-left">
                      <div className="relative w-[6rem] md:w-[8rem] lg:w-[10rem]">
                        <Image
                          src={"/image/ci.png"}
                          alt={"ci"}
                          width={1472}
                          height={832}
                          className="object-contain object-left brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <div className={`my-2 border-b border-gray-600 lg:my-4`} />
                      <div className={`text-md font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent lg:text-2xl group-hover:scale-105 transition-transform duration-300`}>
                        {item.title}
                      </div>
                      <div className="mt-auto flex flex-wrap gap-2 text-sm">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-gray-700 px-3 py-1 text-gray-300 hover:bg-gray-600 transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700" />
        <CarouselNext className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700" />
      </Carousel>
    </motion.div>
  );
};

export default BusinessCarousel;
