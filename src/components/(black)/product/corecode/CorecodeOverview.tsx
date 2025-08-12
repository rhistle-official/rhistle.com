"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const SolutionOverview = () => {
  const t = useTranslations("SolutionOverview");

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

  const problemParagraphs = t.raw("problem.paragraphs") as string[];
  const solutionParagraphs = t.raw("solution.paragraphs") as string[];

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
          {t("problem.title")}
        </h3>
        <div className="space-y-4 text-lg leading-relaxed text-red-700">
          {problemParagraphs.map((p, i) => (
            <p key={i} className="whitespace-pre-line">
              {p}
            </p>
          ))}
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
          {t("solution.title")}
        </h3>
        <div className="space-y-4 text-lg leading-relaxed text-gray-100">
           {solutionParagraphs.map((p, i) => (
            <p key={i} className="whitespace-pre-line">
              {p}
            </p>
          ))}
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