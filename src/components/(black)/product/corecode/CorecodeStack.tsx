"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SolutionStack = () => {
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

  const features = [
    {
      icon: "🔄",
      title: "Fan-in, Fan-out",
      description: "유연한 데이터 흐름 제어"
    },
    {
      icon: "🌿",
      title: "Branching & Merging",
      description: "복잡한 비즈니스 로직 처리"
    },
    {
      icon: "⚡",
      title: "Level 1,2 통합",
      description: "높은 성능과 속도"
    },
    {
      icon: "🛠️",
      title: "재활용성",
      description: "높은 생산성 개발 툴"
    }
  ];

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
          <span className="text-[#78b237]">Application Stack</span>
        </h2>
      </motion.div>

      {/* 특징 카드들 */}
      <motion.div 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12"
        variants={staggerContainer}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4 text-center text-4xl">{feature.icon}</div>
            <h3 className="mb-2 text-center text-lg font-bold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-center text-sm text-gray-600">
              {feature.description}
            </p>
            <div className="absolute inset-0 bg-gradient-to-br from-[#78b237]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>
        ))}
      </motion.div>

      {/* 설명 섹션 */}
      <motion.div 
        className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-8 border-l-4 border-blue-400"
        variants={fadeInUp}
      >
        <div className="space-y-4 text-lg leading-relaxed text-blue-800">
          <p>
            CoreCode의 프레임워크는 Fan-in, Fan-out, Branching and merging 등의 유연성을 갖춘 Router를 통해
            자유롭게 비즈니스 로직을 설계와 변경이 가능하여 재활용성과 생산성이 높은 개발 툴입니다.
          </p>
          <p>
            또한, 필요에 따라 level 1,2 단을 한번에 아우를 수 있는 구조로 속도와 성능에서 매우 뛰어난 품질을 보여줍니다.
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
            src={"/image/corecode_img5.png"}
            alt="CoreCode Application Stack Architecture"
            width={688}
            height={596}
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SolutionStack;
