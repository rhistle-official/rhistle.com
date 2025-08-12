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
import { useTranslations } from "next-intl";

const BusinessCarousel = () => {
  const { ref, inView } = useInView();
  const t = useTranslations("BusinessCarousel");

  const contents = [
    {
      titleKey: "items.aiQuality.title",
      tagsKey: "items.aiQuality.tags",
      color: "from-orange-500 to-red-500",
    },
    {
      titleKey: "items.iotMonitoring.title",
      tagsKey: "items.iotMonitoring.tags",
      color: "from-indigo-500 to-blue-500",
    },
  ] as const;
  
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
          {contents.map((item, idx) => {
            // ✅ tags는 배열이므로 raw 사용
            const tags = (t.raw(item.tagsKey) as string[]) ?? [];
            return (
              <CarouselItem key={item.titleKey} className="md:basis-1/2 lg:basis-1/3">
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
                          {/* 로고는 그대로 사용 */}
                          <Image
                            src={"/image/ci.png"}
                            alt={"ci"}
                            width={1472}
                            height={832}
                            className="object-contain object-left brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>

                        <div className="my-2 border-b border-gray-600 lg:my-4" />

                        {/* ✅ 제목 번역 */}
                        <div className={`text-md font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent lg:text-2xl group-hover:scale-105 transition-transform duration-300`}>
                          {t(item.titleKey)}
                        </div>

                        {/* ✅ 태그 번역 배열 */}
                        <div className="mt-auto flex flex-wrap gap-2 text-sm">
                          {tags.map((tag) => (
                            <span key={tag} className="rounded-full bg-gray-700 px-3 py-1 text-gray-300 hover:bg-gray-600 transition-colors duration-300">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700" />
        <CarouselNext className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700" />
      </Carousel>
    </motion.div>
  );
};

export default BusinessCarousel;
