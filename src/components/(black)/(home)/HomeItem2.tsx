"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl"; 

const HomeItem2 = () => {
  const { ref, inView } = useInView();
  const t = useTranslations("HomeItem2");

  const paragraphs = t.raw("paragraphs") as string[];      // 본문 문단
  const capabilities = t.raw("capabilities") as string[];  // 핵심 역량

  return (
    <div ref={ref} className="items-center justify-between space-y-8 lg:flex">
      <div className="space-y-4 lg:space-y-8">
        <motion.div 
          className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={inView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.div>
        <div className="font-medium md:text-2xl lg:space-y-4 lg:text-5xl">
          <motion.div
            initial={{ width: 0 }}
            animate={inView && { width: "100%" }}
            transition={{ duration: 4, ease: "easeOut" }}
            className="overflow-hidden whitespace-nowrap bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            {t("headline.line1")}
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={inView && { width: "100%" }}
            transition={{ duration: 3, delay: 1.5, ease: "easeOut" }}
            className="overflow-hidden whitespace-nowrap bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            {t("headline.line2")}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="space-y-4 sm:text-lg md:text-xl text-gray-300"
        >
          {paragraphs.map((p, i) => (
            <div key={i} className="space-y-1 whitespace-pre-line">
              {p}
            </div>
          ))}
          
          {/* 핵심 역량 */}
          <div className="mt-8 space-y-3">
            <h3 className="text-lg font-semibold text-cyan-400 md:text-xl">{t("capabilityTitle")}</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView && { opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                >
                  <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                  <span className="text-sm md:text-base text-gray-300">{cap}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView && { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="pt-6"
          >
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 font-semibold"
                asChild
              >
                <a href="/company/greeting">{t("buttons.about")}</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white"
                asChild
              >
                <a href="/product/corecode">{t("buttons.solution")}</a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView && { opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="flex items-center justify-center">
          <motion.div 
            className="relative z-10 h-[10rem] w-[10rem] rounded-[50%] bg-gradient-to-r from-gray-800 to-gray-900 text-white opacity-95 shadow-2xl border border-gray-700 md:h-[20rem] md:w-[20rem]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-2xl md:text-5xl font-bold">
              {t("circles.left")}
            </div>
          </motion.div>
          <motion.div 
            className="relative -ml-6 h-[10rem] w-[10rem] rounded-[50%] bg-gradient-to-r from-cyan-500 to-blue-600 shadow-2xl md:h-[20rem] md:w-[20rem]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-2xl md:text-5xl font-bold text-white">
              {t("circles.right")}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeItem2;