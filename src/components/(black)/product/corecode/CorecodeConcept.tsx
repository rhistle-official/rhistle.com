"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SolutionConcept = () => {
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
          <span className="text-[#78b237]">Concept</span>
        </h2>
        <h3 className="mb-8 text-2xl font-semibold text-gray-100 md:text-3xl">
          CoreCode "Manufacturing Message Bus Framework"
        </h3>
      </motion.div>

      <motion.div 
        className="rounded-2xl bg-gradient-to-br from-[#78b237]/5 to-[#78b237]/10 p-8"
        variants={fadeInUp}
      >
        <div className="space-y-6 text-lg leading-relaxed text-white md:text-xl">
          <p>
            CoreCode는 Plant Floor에서 발생하는 모든 데이터들을 실시간으로 장비로부터 직접 수집하여 
            IT 시스템에 표준화된 방식으로 연계 시켜주는 Manufacturing Message Bus로, 
            Smart Factory를 실현시켜 주는 표준 프레임워크를 제공합니다.
          </p>
          <p>
            Smart Factory는 Plant Floor의 Data Visibility를 확보하여 Business Floor에서 
            모든 상황을 모니터링 및 통제가 가능하게 됩니다.
          </p>
        </div>
      </motion.div>

      <motion.div 
        className="flex flex-col items-center justify-center space-y-8"
        variants={fadeInUp}
      >
        <motion.div
          className="overflow-hidden rounded-2xl shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={"/image/corecode_img1.png"}
            alt="CoreCode Manufacturing Message Bus Framework"
            width={688}
            height={271}
            className="w-full h-auto"
          />
        </motion.div>
        <motion.div
          className="overflow-hidden rounded-2xl shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={"/image/corecode_img2.png"}
            alt="CoreCode Smart Factory Implementation"
            width={688}
            height={577}
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SolutionConcept;
