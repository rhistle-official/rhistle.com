"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const CompanyCeoMessage = () => {
  const t = useTranslations("ceo");
  const achievements = t.raw("achievements") as {number:string;unit:string;description:string;}[];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* 상단 배너 */}
      <motion.div 
        className="relative h-[40vh] overflow-hidden lg:h-[50vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/image/com_1.png"
          alt="CEO - Connecting Values"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              {t("banner.title")}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200">
              {t("banner.subtitle")}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* 메인 컨텐츠 */}
      <div className="pt-[6.25rem] lg:px-[5rem] lg:pb-[6.25rem]">
        {/* CEO 메시지 섹션 */}
        <motion.div 
          className="mx-auto max-w-6xl px-4 py-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div>
            <div className="bg-green py-16 px-4 mx-auto max-w-6xl">
              <motion.div 
                className="text-center mb-16"
                variants={fadeInUp}
              >
                <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
                  <span className="text-[#78b237]">{t("section.ceoMessage.titleHighlight")}</span>
                  {t("section.ceoMessage.titleSuffix")}
                </h2>
                <p className="text-lg text-gray-600 md:text-xl">
                  {t("section.ceoMessage.desc")}
                </p>
              </motion.div>
              <motion.div 
                className="rounded-3xl bg-gradient-to-br from-[#78b237]/5 to-[#78b237]/10 p-12 mb-16"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
              <div className="prose prose-lg max-w-5xl mx-auto text-gray-800 leading-8">
                <p><strong>{t("message.title")}</strong></p>
                <p>{t("message.hello").split("\n").map((s,i)=><span key={i}>{s}<br/></span>)}</p>
                <p>{t("message.p1")}</p>
                <p>{t("message.p2")}</p>
                <p>{t("message.p3")}</p>
                <p>{t("message.p4")}</p>
                <ul className="list-disc pl-6">
                  {t.raw("message.bullets").map((b: string, i: number) => <li key={i}>{b}</li>)}
                </ul>
                <p className="mt-8 font-semibold">
                  {t("message.thanks").split("\n").map((s,i)=><span key={i}>{s}<br/></span>)}
                </p>
              </div>
              </motion.div>
              
            </div>
            {/* CEO 소개 카드 */}
            <motion.div 
              className="rounded-3xl bg-gradient-to-br from-[#78b237]/5 to-[#78b237]/10 p-12 mb-16"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                <div className="mb-6 text-6xl">💼</div>
                <h3 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
                  {t("introCard.title")}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                   {t("introCard.desc")}
                </p>
              </div>
            </motion.div>
          </div>
          {/* 성과 지표 */}
          <motion.div 
            className="grid gap-8 md:grid-cols-3 mb-20"
            variants={staggerContainer}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="mb-4 text-4xl font-bold text-[#78b237]">
                    {achievement.number}
                    <span className="text-2xl">{achievement.unit}</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-800">
                    {achievement.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#78b237]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* 제공가치 섹션 */}
        <motion.div 
          className="bg-gradient-to-br from-[#78b237]/5 to-[#78b237]/10 py-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="mx-auto max-w-6xl px-4">
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
            >
              <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
                {t("section.values.title")}
              </h2>
              <p className="text-lg text-gray-600 md:text-xl">
                {t("section.values.desc")}
              </p>
            </motion.div>

            {/* 가치 카드들 */}
            <motion.div 
              className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 mb-16"
              variants={staggerContainer}
            >
              {(t.raw("values") as any[]).map((value, index) => (
                <motion.div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${value.color} p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mb-6 text-center text-5xl">{value.icon}</div>
                  <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
                    {value.title}
                  </h3>
                  <p className="text-center text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#78b237]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.div>
              ))}
            </motion.div>

          </div>
        </motion.div>

        {/* 미션 섹션 */}
        <motion.div 
          className="mx-auto max-w-4xl px-4 py-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div 
            className="rounded-3xl bg-gradient-to-r from-[#78b237] to-[#5a8a2a] p-12 text-white shadow-2xl"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center">
              <div className="mb-6 text-6xl">🎯</div>
              <h3 className="mb-6 text-3xl font-bold md:text-4xl">
                {t("section.mission.title")}
              </h3>
              <p className="text-lg text-gray-100 leading-relaxed">
                {t("section.mission.body").split("\n").map((s,i)=>
                <span key={i}>{s}<br/></span>)}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyCeoMessage;