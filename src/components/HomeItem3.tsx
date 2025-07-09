"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BusinessCarousel from "./BusinessCarousel";
import SimpleServiceCard from "./SimpleServiceCard";

const HomeItem3 = () => {
  const { ref, inView } = useInView();

  const services = [
    {
      title: "VEXU",
      description: "플랫폼 기반 통합생산관리 시스템",
      features: ["실시간 모니터링", "데이터 분석", "자동화 관리"],
      link: "/product/vexu",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "VACI",
      description: "생산 라인 최적화 솔루션",
      features: ["라인 밸런싱", "효율성 분석", "품질 관리"],
      link: "/product/vaci",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "MEXI",
      description: "제조 실행 시스템",
      features: ["생산 계획", "공정 관리", "품질 검사"],
      link: "/product/mexi",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div ref={ref} className="space-y-12 text-center">
      <motion.div 
        className="text-2xl font-extrabold lg:text-4xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={inView && { opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        BUSINESS
      </motion.div>
      <div className="space-y-6 lg:space-y-12">
        <motion.div 
          className="text-lg font-semibold md:text-3xl lg:text-5xl text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={inView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          나무아이앤씨와 함께한 기업들의 성공 사례를 살펴보세요
        </motion.div>
        <motion.p 
          className="text-base text-gray-300 md:text-lg lg:text-xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          다양한 산업 분야의 고객들과 함께 성공적인 디지털 전환을 이루어왔습니다. 
          각 분야별 맞춤형 솔루션으로 고객의 비즈니스 가치를 극대화합니다.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href={"/"}
            className="inline-block rounded-4xl border border-gray-600 px-3 py-2 text-sm transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-3 md:text-lg lg:p-[1rem] lg:text-xl"
          >
            고객 사례 더보기 {">"}
          </Link>
        </motion.div>
      </div>
      
      {/* 서비스 카드 섹션 */}
      <div className="space-y-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-xl font-bold md:text-2xl lg:text-3xl mb-4 text-white">
            주요 솔루션
          </h3>
          <p className="text-gray-300 md:text-lg">
            고객의 니즈에 맞는 최적화된 솔루션을 제공합니다
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          animate={inView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView && { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <SimpleServiceCard
                title={service.title}
                description={service.description}
                features={service.features}
                link={service.link}
                color={service.color}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView && { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <BusinessCarousel />
      </motion.div>
    </div>
  );
};

export default HomeItem3;
