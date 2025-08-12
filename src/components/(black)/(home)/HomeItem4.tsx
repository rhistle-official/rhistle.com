"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServiceCard from "./ServiceCard";
import { useTranslations } from "next-intl";

const HomeItem4 = () => {
  const { ref, inView } = useInView();
  const t = useTranslations("HomeItem4");

  const headline = t.raw("headline") as string[];      // 헤드라인
  const description = t.raw("description") as string[]; // 본문

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
            {headline.map((line, i) => (
              <div key={i}>{line}</div> 
            ))}
          </motion.div>
          <motion.div 
            className="md:text-lg text-gray-300"
            initial={{ opacity: 0, x: -30 }}
            animate={inView && { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {description.map((line, i) => (
              <div key={i}>{line}</div> 
            ))}
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
