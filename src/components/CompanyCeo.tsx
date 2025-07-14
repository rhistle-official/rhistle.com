"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CompanyCeo = () => {
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

  const values = [
    {
      icon: "🤝",
      title: "고객",
      description: "고객에게 최고의 해결책을 제시하여 지속적인 신뢰 관계를 구축하는 회사",
      color: "from-blue-50 to-blue-100 border-blue-400"
    },
    {
      icon: "👥",
      title: "임직원",
      description: "임직원에게는 역량 강화를 통해 전문가로 성장할 기회를 제공하는 회사",
      color: "from-green-50 to-green-100 border-green-400"
    },
    {
      icon: "🤝",
      title: "파트너",
      description: "파트너에게는 시너지 창출을 통해 생태계를 함께 성장시켜 나가는 회사",
      color: "from-purple-50 to-purple-100 border-purple-400"
    }
  ];

  const achievements = [
    {
      number: "20",
      unit: "년",
      description: "데이터 기술 역량"
    },
    {
      number: "100+",
      unit: "개",
      description: "성공 프로젝트"
    },
    {
      number: "50+",
      unit: "개",
      description: "파트너사"
    }
  ];

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
              CEO
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200">
              Connecting Values
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
                  <span className="text-[#78b237]">CEO</span> 메시지
                </h2>
                <p className="text-lg text-gray-600 md:text-xl">
                  고객의 가치를 서로 연계하여 더 큰 가치를 만듭니다.
                </p>
              </motion.div>
              <motion.div 
                className="rounded-3xl bg-gradient-to-br from-[#78b237]/5 to-[#78b237]/10 p-12 mb-16"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
              <div className="prose prose-lg max-w-5xl mx-auto text-gray-800 leading-8">
                <p><strong>CEO 인사말: 신뢰와 전문성, 그리고 혁신</strong></p>
                <p>안녕하십니까,<br/>나무아이앤씨 대표이사입니다.</p>
                <p>
                  저희 나무아이앤씨는 제조산업 소프트웨어 분야에서 오랜 경험과 깊이 있는 IT 기술력을 바탕으로,
                  고객 여러분의 비즈니스 혁신을 함께 만들어가고 있습니다.
                </p>
                <p>
                  IT 분야에서 높은 기준과 최신의 기술을 유지하며, 고객에게 가치 높은 서비스와 솔루션을 공급하고,
                  많은 성과를 달성해왔습니다.
                </p>
                <p>
                  단순히 시스템을 구축하는 것을 넘어, 지속적인 연구개발과 제품 및 서비스 혁신을 통해 고객의 성장과
                  성공을 위한 든든한 동반자가 되고자 합니다.
                </p>
                <p>
                  수많은 프로젝트 경험과 IoT, 디지털 트윈 등 첨단 솔루션을 통해 다양한 산업 현장에서 검증된
                  노하우를 보유하고 있습니다.
                </p>

                <ul className="list-disc pl-6">
                  <li>고객 맞춤형 설계와 체계적인 프로젝트 관리로, 마치 집을 짓듯이 기초부터 완공까지 꼼꼼하게 시스템을 구축합니다.</li>
                  <li>투명한 소통과 정직한 약속 이행을 최우선 가치로 삼아, 고객이 신뢰하고 맡길 수 있는 파트너가 되겠습니다.</li>
                  <li>고객의 비전과 목표를 저희의 목표로 삼아, 끝까지 책임지고 고품질의 솔루션 제공을 약속 드립니다.</li>
                </ul>

                <p>
                  나무아이앤씨는 신뢰, 혁신, 그리고 고객 중심의 가치를 바탕으로 고객과 함께 성장하는 최고의 파트너,
                  디지털 혁신의 동반자가 되겠습니다.
                </p>

                <p className="mt-8 font-semibold">감사합니다.<br/>나무아이앤씨 대표이사 드림</p><br/>
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
                  Connecting Values
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  나무아이앤씨는 20년간의 데이터 기술 역량을 바탕으로 제조 현장부터 통합 물류, 
                  고객 접점 및 업무 효율까지, Digitalization을 통한 차별적 가치를 선도하는 기업입니다.
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
                제공가치
              </h2>
              <p className="text-lg text-gray-600 md:text-xl">
                모든 이해관계자에게 지속가능한 가치를 제공합니다
              </p>
            </motion.div>

            {/* 가치 카드들 */}
            <motion.div 
              className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 mb-16"
              variants={staggerContainer}
            >
              {values.map((value, index) => (
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
                우리의 미션
              </h3>
              <p className="text-lg text-gray-100 leading-relaxed">
                Digitalization을 통한 차별적 가치를 선도하여<br/>
                고객, 임직원, 파트너 모두에게 지속가능한 성장을 제공합니다.<br/>
                Connecting Values를 통해 더 큰 가치를 만들어 나가겠습니다.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyCeo;
