"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CompanyEthics = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
  };

  const ethicsPrinciples = [
    {
      icon: "🤝",
      title: "정직과 신뢰",
      description: "모든 업무에서 정직하게 행동하고, 신뢰를 최우선 가치로 삼습니다.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "⚖️",
      title: "준법과 투명성",
      description: "법과 규정을 준수하며, 투명한 경영활동을 실천합니다.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: "🌱",
      title: "상생과 존중",
      description: "고객, 협력사, 임직원, 사회와의 상생과 상호 존중을 실천합니다.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "🌍",
      title: "사회적 책임",
      description: "기업시민으로서 사회적 책임을 다하고, 지속가능한 발전을 추구합니다.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const commitmentAreas = [
    {
      title: "고객에 대한 약속",
      items: [
        "최고 품질의 제품과 서비스 제공",
        "고객 정보 보호 및 보안 강화",
        "지속적인 기술 혁신과 개선"
      ]
    },
    {
      title: "임직원에 대한 약속",
      items: [
        "안전하고 건강한 근무환경 조성",
        "공정한 평가와 성과 보상",
        "지속적인 교육과 성장 기회 제공"
      ]
    },
    {
      title: "사회에 대한 약속",
      items: [
        "환경 보호와 지속가능한 발전",
        "사회공헌 활동 확대",
        "지역사회와의 상생 발전"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[50vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/image/com_1.png"
          alt="윤리경영"
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
              윤리경영
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              투명하고 공정한 기업문화를 바탕으로 사회적 책임을 다하고<br />
              신뢰받는 기업이 되고자 합니다
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Philosophy Section */}
      <motion.div 
        className="relative -mt-20 lg:px-8 xl:px-16"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  윤리경영 철학
                </h2>
                <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                  모든 임직원이 정직과 신뢰, 준법과 투명성을 바탕으로 사회적 책임을 다하며, 
                  고객·주주·협력사·사회와의 상생을 추구합니다
                </p>
              </motion.div>
            </div>

            {/* Principles Grid */}
            <div className="p-8 lg:p-12">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                variants={staggerContainer}
              >
                {ethicsPrinciples.map((principle, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${principle.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <span className="text-2xl">{principle.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Commitment Areas */}
      <motion.div 
        className="py-20 px-8 lg:px-16"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              우리의 약속
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              모든 이해관계자에 대한 우리의 진정한 약속과 실천 방안을 제시합니다
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {commitmentAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {area.title}
                </h3>
                <ul className="space-y-4">
                  {area.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-start space-x-3 text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom CTA Section */}
      <motion.div 
        className="py-20 px-8 lg:px-16"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-3xl p-12 border border-blue-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              함께 만들어가는 윤리경영
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              나무아이앤씨는 지속적인 윤리경영을 통해 더 나은 미래를 만들어가겠습니다
            </p>
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
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

export default CompanyEthics; 