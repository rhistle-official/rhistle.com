"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServiceCard from "./ServiceCard";

const HomeItem4 = () => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="mx-auto max-w-[110rem]">
      <div className="space-y-12">
        <motion.div 
          className="text-center text-2xl font-extrabold lg:text-4xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={inView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          SERVICE
        </motion.div>
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={inView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="text-xl font-bold md:text-3xl lg:text-5xl text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={inView && { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>산업용 데이터 연계 및 통합</div>
            <div>공장 자동화 디지털 전환</div>
          </motion.div>
          <motion.div 
            className="md:text-lg text-gray-300"
            initial={{ opacity: 0, x: -30 }}
            animate={inView && { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div>
              나무아이앤씨는 공장 자동화 시스템 전반의 데이터를 연계하고
            </div>
            <div>
              통합 관리할 수 있는 플랫폼을 제공하여, 보다 효율적이고 스마트한
              제조 환경을 구축합니다.
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <ServiceCard />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeItem4;
