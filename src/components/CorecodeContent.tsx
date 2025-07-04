"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CorecodeComposition from "./CorecodeComposition";
import CorecodeConcept from "./CorecodeConcept";
import CorecodeFeature from "./CorecodeFeature";
import CorecodeOverview from "./CorecodeOverview";
import CorecodeStack from "./CorecodeStack";
import { Button } from "./ui/button";

const CorecodeContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openInquiryPopup = () => {
    window.open(
      "/corecode-inquiry",
      "inquiryPopup",
      "width=800,height=700,scrollbars=yes",
    );
  };

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
      icon: "🔗",
      title: "설비/센서 연계",
      description: "다양한 설비와 센서를 효율적으로 연계하여 실시간 데이터 수집",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📊",
      title: "Data Integration",
      description: "통합된 데이터 플랫폼으로 일관성 있는 정보 관리",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "⚡",
      title: "실시간 처리",
      description: "빠른 응답 속도로 즉시적인 의사결정 지원",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: "🛡️",
      title: "안정성",
      description: "높은 신뢰성과 안정성을 보장하는 시스템",
      color: "from-orange-500 to-red-500"
    }
  ];

  const techSpecs = [
    {
      icon: "⚙️",
      title: "모듈화 아키텍처",
      description: "확장 가능한 모듈 기반 설계"
    },
    {
      icon: "🔧",
      title: "API 기반 통합",
      description: "표준 API를 통한 쉬운 연동"
    },
    {
      icon: "📱",
      title: "반응형 UI",
      description: "모든 디바이스에서 최적화된 인터페이스"
    },
    {
      icon: "🔐",
      title: "보안 강화",
      description: "엔터프라이즈급 보안 시스템"
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
          alt="CoreCode - 설비/센서 연계 기술 기반의 Data Integration 시스템"
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
              CoreCode
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              설비/센서 연계 기술 기반의 Data Integration 시스템
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
                  <span className="text-cyan-300">CoreCode</span>의 핵심 특징
                </h2>
                <p className="text-xl text-cyan-100 max-w-4xl mx-auto">
                  설비와 센서를 효율적으로 연계하여 실시간 데이터 통합 시스템을 구축합니다
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <motion.div 
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
                variants={staggerContainer}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
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

          {/* Technology Specifications */}
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
                  기술 사양
                </h2>
                <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                  CoreCode의 핵심 기술과 아키텍처
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={staggerContainer}
              >
                {techSpecs.map((spec, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 text-center"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-xl">{spec.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {spec.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {spec.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Existing Components */}
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
                  CoreCode 상세 정보
                </h2>
                <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                  시스템 구성과 기능을 자세히 알아보세요
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <div className="mx-auto max-w-5xl space-y-20">
                <motion.div variants={fadeInUp}>
                  <CorecodeConcept />
                </motion.div>
                
                <motion.div variants={fadeInUp}>
                  <CorecodeOverview />
                </motion.div>
                
                <motion.div variants={fadeInUp}>
                  <CorecodeStack />
                </motion.div>
                
                <motion.div variants={fadeInUp}>
                  <CorecodeComposition />
                </motion.div>
                
                <motion.div variants={fadeInUp}>
                  <CorecodeFeature />
                </motion.div>
              </div>
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
              CoreCode 문의 안내
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              궁금하신 내용을 남겨주시면, 담당자가 빠른 시간 안에 연락드리겠습니다.<br/>
              전문가와 상담하여 최적의 솔루션을 찾아보세요.
            </p>
            <motion.button
              onClick={openInquiryPopup}
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

export default CorecodeContent;
