"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const ServiceCard = () => {
  const { ref, inView } = useInView();
  const images = [
    {
      title: "제조 데이터 연계 및 통합 솔루션",
      desc: "다양한 설비 데이터 연계 및 통합으로 효율적인 공정 관리",
      img: "main_S1.png",
      color: "from-blue-500 to-cyan-500",
      tags: ["최적의 통합연계", "인터페이스 표준화"]
    },
    {
      title: "통합 관제 솔루션",
      desc: "사용자 경험(UX) 극대화를 위한 통합 모니터링 플랫폼",
      img: "main_S2.png",
      color: "from-emerald-500 to-teal-500",
      tags: ["스마트팩토리", "모니터링"]
    },
    {
      title: "스마트팩토리 플랫폼",
      desc: "AI 기반 지능형 제조 환경 구축 솔루션",
      img: "main_S3.png",
      color: "from-purple-500 to-pink-500",
      tags: ["자동화 설계", "IoT 통합"]
    },
  ];
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView && { opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:flex-row lg:gap-12">
        {images.map((data, idx) => (
          <motion.div
            key={data.title + idx}
            className="w-full overflow-hidden rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-cyan-500/50 group"
            initial={{ opacity: 0, y: 50 }}
            animate={inView && { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="relative h-[12rem] sm:h-[18rem] overflow-hidden">
              <Image
                src={`/image/${data.img}`}
                alt={data.title}
                width={2000}
                height={1125}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* 오버레이 그라데이션 */}
              <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent`}></div>
            </div>
            <div className="p-6 sm:p-8 md:p-10 relative">
              <div className={`text-lg font-bold bg-gradient-to-r ${data.color} bg-clip-text text-transparent sm:mb-3 lg:text-2xl group-hover:scale-105 transition-transform duration-300`}>
                {data.title}
              </div>
              <div className="text-sm text-gray-300 sm:text-base lg:text-lg leading-relaxed">
                {data.desc}
              </div>
              
              {/* 추가 기능 표시 */}
              <div className="mt-4 flex flex-wrap gap-2">
                {data.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
