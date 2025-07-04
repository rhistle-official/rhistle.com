"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ConsultingContent = () => {
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

  const services = [
    {
      icon: "🏭",
      title: "전략 계획 수립",
      subtitle: "Master Planning",
      description: "기업의 현재 상태를 분석하고 미래 비전에 맞는 스마트팩토리 로드맵을 수립합니다.",
      features: ["현황 진단", "목표 설정", "단계별 계획", "투자 효율성 분석"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-900/50 to-cyan-900/50"
    },
    {
      icon: "⚡",
      title: "프로세스 혁신",
      subtitle: "Process Innovation",
      description: "기존 제조 프로세스를 혁신하여 생산성과 품질을 극대화합니다.",
      features: ["프로세스 분석", "개선점 도출", "자동화 설계", "품질 관리 체계"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-900/50 to-pink-900/50"
    },
    {
      icon: "🤖",
      title: "자동화 설계",
      subtitle: "Automation Design",
      description: "최신 기술을 활용한 맞춤형 자동화 시스템을 설계하고 구축합니다.",
      features: ["시스템 설계", "장비 선정", "통합 구축", "운영 교육"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-900/50 to-teal-900/50"
    },
    {
      icon: "📊",
      title: "데이터 분석",
      subtitle: "Data Analytics",
      description: "빅데이터 분석을 통해 생산성 향상과 의사결정을 지원합니다.",
      features: ["데이터 수집", "분석 모델", "시각화", "예측 시스템"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-900/50 to-red-900/50"
    }
  ];

  const advantages = [
    {
      icon: "🎯",
      title: "전문가 집단의 맞춤형 진단",
      description: "제조 현장의 특성과 니즈를 정확히 파악하여, 최적의 스마트팩토리 구축 방안을 제안합니다.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: "🚀",
      title: "최신 기술과 실무 경험의 결합",
      description: "자동화, 데이터 분석, IoT 등 최신 트렌드를 반영한 실질적이고 효과적인 솔루션을 제공합니다.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "💪",
      title: "실행력 중심의 컨설팅",
      description: "이론적 접근을 넘어, 실제 현장에 적용 가능한 실행 계획과 지원을 약속드립니다.",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const techFeatures = [
    {
      icon: "🔗",
      title: "IoT 통합",
      description: "센서와 디바이스를 통한 실시간 데이터 수집"
    },
    {
      icon: "☁️",
      title: "클라우드 기반",
      description: "확장 가능한 클라우드 인프라 구축"
    },
    {
      icon: "🔒",
      title: "보안 강화",
      description: "엔터프라이즈급 보안 시스템 적용"
    },
    {
      icon: "📈",
      title: "성과 측정",
      description: "KPI 기반의 성과 모니터링 시스템"
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
          alt="스마트팩토리 컨설팅"
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
              스마트팩토리 컨설팅
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              미래를 선도하는 제조업 혁신의 시작
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative -mt-20 lg:px-8 xl:px-16">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Advantages Section */}
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
                  스마트팩토리 도입은 <span className="text-cyan-300">제조업의 경쟁력</span>을 높입니다
                </h2>
                <p className="text-xl text-cyan-100 max-w-4xl mx-auto">
                  다년간의 현장 경험과 첨단 기술 역량을 갖춘 스마트팩토리 전문 컨설턴트가<br/>
                  최적의 솔루션을 제공합니다
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <motion.div 
                className="grid gap-8 md:grid-cols-3"
                variants={staggerContainer}
              >
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <span className="text-2xl">{advantage.icon}</span>
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-white">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {advantage.description}
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Services Section */}
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
                  스마트팩토리 전환을 위한 <span className="text-emerald-200">컨설팅 서비스</span>
                </h2>
                <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                  체계적이고 전문적인 접근으로 성공적인 스마트팩토리 구축을 지원합니다
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <motion.div 
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
                variants={staggerContainer}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <h3 className="mb-2 text-center text-xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-center text-sm font-medium text-cyan-400">
                      {service.subtitle}
                    </p>
                    <p className="mb-4 text-center text-sm text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                          <span className="mr-2 text-cyan-400">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
                  핵심 기술 역량
                </h2>
                <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                  스마트팩토리 구축을 위한 최신 기술 스택
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
              스마트팩토리로의 전환을 시작하세요
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              전문 컨설턴트와 함께 귀사의 제조 혁신을 이끌어보세요.<br/>
              무료 상담을 통해 맞춤형 솔루션을 제안드립니다.
            </p>
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              무료 상담 신청하기
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ConsultingContent;
