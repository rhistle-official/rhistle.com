"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SolutionComposition = () => {
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
      icon: "🔧",
      title: "Modeling 기반 Tool",
      description: "장비 및 시스템 연계 시, 손쉽게 인터페이스를 개발할 수 있도록 Modeling 기반의 다양한 Tool과 각종 산업용 Built-In Adapter를 제공합니다"
    },
    {
      icon: "⚙️",
      title: "Adapter SDK",
      description: "Framework 기반의 Adapter SDK를 제공함으로써 개발자가 빠르고 손쉽게 장비 연계 인터페이스를 개발할 수 있도록 지원합니다"
    },
    {
      icon: "🛠️",
      title: "통합 개발 환경",
      description: "Modeling, 시험, 디버깅, 배포 등에 이르는 전체 개발 과정을 단일화된 환경에서 진행할 수 있도록 통합 개발 환경을 제공하여 개발 편의성을 제공합니다"
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
          <span className="text-[#78b237]">Product Composition</span>
        </h2>
      </motion.div>

      {/* 특징 카드들 */}
      <motion.div 
        className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 mb-12"
        variants={staggerContainer}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            <div className="mb-6 text-center text-5xl">{feature.icon}</div>
            <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-center text-sm text-gray-600 leading-relaxed">
              {feature.description}
            </p>
            <div className="absolute inset-0 bg-gradient-to-br from-[#78b237]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>
        ))}
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
            src={"/image/corecode_img6.png"}
            alt="CoreCode Product Composition Architecture"
            width={688}
            height={651}
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SolutionComposition;
