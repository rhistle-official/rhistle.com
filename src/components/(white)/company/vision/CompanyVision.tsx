"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CompanyVision = () => {
  const visionElements = [
    {
      icon: "🚀",
      title: "혁신적 기술",
      description: "최첨단 기술을 활용하여 산업의 디지털 전환을 선도합니다",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "🌱",
      title: "지속가능한 성장",
      description: "환경과 사회적 가치를 고려한 지속가능한 비즈니스 모델을 추구합니다",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "🤝",
      title: "고객 중심",
      description: "고객의 성공을 위해 최고의 솔루션과 서비스를 제공합니다",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "🌍",
      title: "글로벌 리더십",
      description: "세계 시장에서 인정받는 글로벌 기술 기업으로 성장합니다",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const coreValues = [
    {
      title: "혁신",
      description: "끊임없는 도전과 혁신으로 새로운 가치를 창조합니다",
      icon: "💡"
    },
    {
      title: "신뢰",
      description: "정직과 투명성으로 모든 이해관계자와의 신뢰를 구축합니다",
      icon: "🤲"
    },
    {
      title: "협력",
      description: "팀워크와 협력을 통해 시너지를 극대화합니다",
      icon: "👥"
    },
    {
      title: "성장",
      description: "지속적인 학습과 발전을 통해 개인과 조직의 성장을 추구합니다",
      icon: "📈"
    }
  ];

  const futureGoals = [
    {
      year: "2025",
      goal: "스마트팩토리 솔루션 시장 선도",
      description: "AI 기반 스마트팩토리 솔루션으로 제조업 혁신을 주도"
    },
    {
      year: "2030",
      goal: "글로벌 기술 기업으로 도약",
      description: "해외 시장 진출을 통해 글로벌 기술 기업으로 성장"
    },
    {
      year: "2035",
      goal: "지속가능한 미래 기술 선도",
      description: "친환경 기술과 사회적 가치를 실현하는 미래 기술 기업"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    hover: { 
      scale: 1.02, 
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[50vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/image/com_1.png"
          alt="회사 비전"
          fill
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="text-center text-white space-y-6">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              회사 비전
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              기술 혁신으로 더 나은 미래를 만들어가는<br />
              글로벌 기술 기업이 되겠습니다
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className="relative -mt-20 lg:px-8 xl:px-16"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* 메인 비전 섹션 */}
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-12">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  우리의 비전
                </h2>
                <p className="text-xl text-emerald-100 max-w-4xl mx-auto">
                  리슬은 기술 혁신을 통해 산업의 디지털 전환을 선도하고, 
                  지속가능한 미래를 만들어가는 글로벌 기술 기업이 되겠습니다
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* 비전 요소 섹션 */}
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  비전의 핵심 요소
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  우리가 추구하는 미래를 이루기 위한 핵심 가치와 방향성
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={staggerContainer}
              >
                {visionElements.map((element, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${element.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <span className="text-2xl">{element.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {element.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {element.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* 핵심 가치 섹션 */}
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-orange-600 to-red-600 px-8 py-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  핵심 가치
                </h2>
                <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                  우리가 지켜나갈 핵심 가치와 원칙
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={staggerContainer}
              >
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl">{value.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* 미래 목표 섹션 */}
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  미래 목표
                </h2>
                <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                  단계별로 실현해나갈 우리의 미래 목표
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
              >
                {futureGoals.map((goal, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <span className="text-3xl font-bold text-white">{goal.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {goal.goal}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {goal.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom CTA Section */}
      <motion.div 
        className="py-20 px-8 lg:px-16"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-12 border border-emerald-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              함께 만들어가는 미래
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              리슬과 함께 혁신적인 미래를 만들어가겠습니다
            </p>
            <motion.button 
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              회사 소개 더 보기   
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyVision;
