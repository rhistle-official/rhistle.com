"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MesContent = () => {
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

  const features = [
    {
      icon: "⚡",
      title: "실시간 생산 운영·관리",
      description: "MES를 기반으로 작업지시, 공정추적, 실적관리 등 제조 전 과정을 디지털화하여 통합 관리합니다.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-900/50 to-cyan-900/50"
    },
    {
      icon: "🤖",
      title: "AI·데이터 기반 품질 및 설비 모니터링",
      description: "품질 데이터와 설비 상태를 AI로 분석하여 불량 예방, 예지보전, 생산성 향상을 실현합니다.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-900/50 to-teal-900/50"
    },
    {
      icon: "📊",
      title: "데이터 기반의 스마트 의사결정 지원",
      description: "집약된 양질의 생산 데이터를 기반으로 신속하고 정확한 의사결정이 가능합니다.",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-900/50 to-pink-900/50"
    }
  ];

  const capabilities = [
    {
      icon: "📈",
      title: "생산성 향상",
      description: "실시간 모니터링으로 생산 효율성 극대화",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🔍",
      title: "품질 관리",
      description: "AI 기반 불량 예방 및 품질 향상",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: "🛠️",
      title: "예지보전",
      description: "설비 상태 예측으로 다운타임 최소화",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "📋",
      title: "실적 관리",
      description: "정확한 생산 실적 추적 및 분석",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "🎯",
      title: "의사결정",
      description: "데이터 기반 스마트 의사결정 지원",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: "🔄",
      title: "자동화",
      description: "제조 프로세스 자동화 및 최적화",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const techFeatures = [
    {
      icon: "🔗",
      title: "IoT 통합",
      description: "센서와 설비의 실시간 데이터 수집"
    },
    {
      icon: "☁️",
      title: "클라우드 기반",
      description: "확장 가능한 클라우드 MES 플랫폼"
    },
    {
      icon: "🔒",
      title: "보안 강화",
      description: "엔터프라이즈급 보안 시스템"
    },
    {
      icon: "📱",
      title: "모바일 지원",
      description: "모바일 기반 현장 관리 시스템"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/image/com_1.png"
          alt="MES - 지능형 스마트팩토리 시스템"
          fill
          className="object-cover object-center brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        
        {/* Digital Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1 
              className="mb-6 text-5xl font-bold md:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              MES
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              지능형 스마트팩토리 시스템 구축 및 운영
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative -mt-20 lg:px-8 xl:px-16">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Features Section */}
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl border border-gray-800 overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 px-8 py-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 animate-pulse" style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,255,255,0.3) 0%, transparent 50%),
                                    radial-gradient(circle at 80% 20%, rgba(147,51,234,0.3) 0%, transparent 50%)`
                }} />
              </div>
              
              <motion.div 
                className="text-center relative z-10"
                variants={fadeInUp}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  <span className="text-cyan-300">MES</span>의 핵심 기능
                </h2>
                <p className="text-xl text-cyan-100 max-w-4xl mx-auto">
                  생산운영/관리시스템(Manufacturing Execution System)을 중심으로<br/>
                  AI와 데이터 기반의 지능형 스마트팩토리 시스템을 구축하여<br/>
                  제조 현장의 실질적인 혁신과 경쟁력 강화를 지원합니다.
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <motion.div 
                className="grid gap-8 md:grid-cols-1 lg:grid-cols-3"
                variants={staggerContainer}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${feature.bgColor} p-8 shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="mb-4 text-center text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-center text-sm text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Capabilities Section */}
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl border border-gray-800 overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-8">
              <motion.div 
                className="text-center"
                variants={fadeInUp}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  AI·빅데이터 기반의 지능형 스마트팩토리
                </h2>
                <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                  AI와 빅데이터 분석 등의 기술을 결합한 지능형 스마트팩토리 시스템으로<br/>
                  실시간 생산 모니터링, 예지보전 등 제조 혁신을 실현합니다.
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <motion.div 
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                variants={staggerContainer}
              >
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${capability.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <span className="text-xl">{capability.icon}</span>
                    </div>
                    <h3 className="mb-2 text-center text-lg font-bold text-white">
                      {capability.title}
                    </h3>
                    <p className="text-center text-sm text-gray-400">
                      {capability.description}
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Technology Features */}
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl border border-gray-800 overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className="bg-gradient-to-r from-orange-600 to-red-600 px-8 py-8">
              <motion.div 
                className="text-center"
                variants={fadeInUp}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  기술적 우위
                </h2>
                <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                  MES의 핵심 기술과 성능을 확인하세요
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={staggerContainer}
              >
                {techFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 text-center"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Innovation Section */}
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl border border-gray-800 overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-8">
              <motion.div 
                className="text-center"
                variants={fadeInUp}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  제조 혁신의 새로운 패러다임
                </h2>
                <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                  MES 시스템을 통해 제조 현장의 모든 데이터를 실시간으로 수집하고 분석하여<br/>
                  생산성 향상, 품질 개선, 비용 절감을 동시에 달성할 수 있습니다.
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <motion.div 
                className="text-center"
                variants={fadeInUp}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <span className="text-4xl">🚀</span>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  AI와 빅데이터 기술이 결합된 지능형 스마트팩토리로<br/>
                  미래 제조업의 경쟁력을 확보하세요.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div 
        className="py-20 px-8 lg:px-16"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 border border-gray-700"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              MES로 스마트팩토리를 구축하세요
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              AI와 빅데이터 기반의 지능형 스마트팩토리 시스템으로<br/>
              제조 현장의 혁신과 경쟁력 강화를 실현하세요.
            </p>
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              문의하기
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default MesContent;
