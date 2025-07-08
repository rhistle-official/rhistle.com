"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SolutionOverview = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="space-y-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.div 
        className="text-center"
        variants={fadeInUp}
      >
        <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
          <span className="text-[#78b237]">Overview</span>
        </h2>
      </motion.div>

      {/* 문제점 섹션 */}
      <motion.div 
        className="rounded-2xl bg-gradient-to-br from-red-50 to-red-100 p-8 border-l-4 border-red-400"
        variants={fadeInUp}
      >
        <h3 className="mb-6 text-2xl font-bold text-red-800">
          현재 제조현장의 문제점
        </h3>
        <div className="space-y-4 text-lg leading-relaxed text-red-700">
          <p>
            현재 제조현장은 개별적/수직적인 1:N 방식의 인터페이스 연계로 복잡도가 날로 증가하고 있으며,
            신규 시스템 도입 시 복잡도가 더욱 증가하여 막대한 시간, 인력, 비용을 요구하고 있습니다.
          </p>
          <p>
            따라서, 장비별 연계를 위해 장비업체나 개발인력에 종속되어 변화에 따른 민첩한 대응이 불가합니다.
          </p>
        </div>
      </motion.div>

      <motion.div 
        className="flex flex-col items-center justify-center"
        variants={fadeInUp}
      >
        <motion.div
          className="overflow-hidden rounded-2xl shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={"/image/corecode_img3.png"}
            alt="현재 제조현장의 복잡한 인터페이스 연계 구조"
            width={688}
            height={569}
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>

      {/* 해결책 섹션 */}
      <motion.div 
        className="rounded-2xl bg-gradient-to-br from-[#78b237]/5 to-[#78b237]/10 p-8 border-l-4 border-[#78b237]"
        variants={fadeInUp}
      >
        <h3 className="mb-6 text-2xl font-bold text-[#78b237]">
          VEXU의 해결책
        </h3>
        <div className="space-y-4 text-lg leading-relaxed text-gray-100">
          <p>
            VEXU는 하나의 표준화된 Manufacturing Message Bus로 레고블럭처럼 손쉽게 장비나 시스템의 변경 및 추가가 가능합니다.
          </p>
          <p>
            또한, 현장에서 검증된 다양한 내장 컨포넌트(어댑터)를 제공하며, Custom 컴포넌트 개발을 위한 API를 제공합니다.
          </p>
          <p>
            이러한 VEXU 엔진의 핵심 기능은 국내 특허와 미국, 일본 특허를 모두 보유하고 있습니다.
          </p>
        </div>
      </motion.div>

      <motion.div 
        className="flex flex-col items-center justify-center"
        variants={fadeInUp}
      >
        <motion.div
          className="overflow-hidden rounded-2xl shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={"/image/corecode_img4.png"}
            alt="CoreCode Manufacturing Message Bus 구조"
            width={688}
            height={537}
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SolutionOverview;
