"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const VaciContent = () => {
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
      icon: "🔗",
      title: "설비, 센서, IoT 디바이스 연동",
      description: "제조, 환경, 물류 등 다양한 현장에 설치된 설비와 센서, 각종 IoT 디바이스로부터 데이터를 실시간으로 수집합니다.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-900/50 to-cyan-900/50"
    },
    {
      icon: "📊",
      title: "데이터 취합 및 정제",
      description: "수집된 원천 데이터를 표준화, 정제, 가공하여 데이터 품질을 높이고, 활용 가능한 형태로 변환합니다.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-900/50 to-teal-900/50"
    },
    {
      icon: "⚙️",
      title: "대상 시스템 연동",
      description: "정제된 데이터를 ERP, MES, 관제 시스템, 빅데이터 플랫폼 등 고객의 다양한 IT 시스템과 유연하게 연동하여 데이터 기반의 업무 혁신과 자동화를 지원합니다.",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-900/50 to-pink-900/50"
    }
  ];

  const protocols = [
    { name: "Modbus", icon: "🔌", color: "from-blue-500 to-cyan-500" },
    { name: "MQTT", icon: "📡", color: "from-emerald-500 to-teal-500" },
    { name: "OPC-UA", icon: "🌐", color: "from-purple-500 to-pink-500" },
    { name: "시리얼 통신", icon: "📟", color: "from-orange-500 to-red-500" },
    { name: "HTTP/REST API", icon: "🔗", color: "from-indigo-500 to-blue-500" }
  ];

  const applications = [
    {
      icon: "🏭",
      title: "스마트팩토리",
      description: "제조 현장의 디지털화",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🌍",
      title: "환경·설비 모니터링",
      description: "실시간 상태 감시",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: "🤖",
      title: "AI 기반 디지털 트윈",
      description: "가상 모델링 및 시뮬레이션",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const techFeatures = [
    {
      icon: "⚡",
      title: "실시간 처리",
      description: "밀리초 단위의 빠른 데이터 처리"
    },
    {
      icon: "🔒",
      title: "보안 강화",
      description: "엔터프라이즈급 보안 시스템"
    },
    {
      icon: "📈",
      title: "확장성",
      description: "수천 개의 디바이스 동시 연결 지원"
    },
    {
      icon: "🔄",
      title: "고가용성",
      description: "99.9% 이상의 시스템 가동률"
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
          alt="VACI - 관제 Digital Twin 시스템 구축"
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
              VACI
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              관제 Digital Twin 시스템 구축
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
                  <span className="text-cyan-300">VACI</span>의 핵심 기능
                </h2>
                <p className="text-xl text-cyan-100 max-w-4xl mx-auto">
                  다양한 설비 및 센서와의 통신을 위해 산업 표준 프로토콜을 지원하고,<br/>
                  데이터 정제, 통합관리, 보안강화를 통해 이기종 설비/센서와의 유연한 연동과<br/>
                  대용량 데이터의 실시간 통합·활용이 가능합니다.
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

          {/* Protocols Section */}
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
                  지원 프로토콜
                </h2>
                <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                  다양한 산업 표준 프로토콜을 지원하여 모든 설비와의 연동이 가능합니다
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <motion.div 
                className="flex flex-wrap justify-center gap-4"
                variants={staggerContainer}
              >
                {protocols.map((protocol, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center space-x-3 rounded-full bg-gradient-to-r ${protocol.color} px-6 py-3 shadow-lg border border-gray-700`}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-2xl">{protocol.icon}</span>
                    <span className="font-semibold text-white">{protocol.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Applications Section */}
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
                  디지털 혁신의 기반 구축
                </h2>
                <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                  스마트팩토리, 환경·설비 모니터링, AI 기반 디지털 트윈 등<br/>
                  다양한 데이터 통합 서비스를 위한 디지털 혁신의 기반을 구축합니다.
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <motion.div 
                className="grid gap-8 md:grid-cols-3"
                variants={staggerContainer}
              >
                {applications.map((app, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 text-center"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${app.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <span className="text-2xl">{app.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {app.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {app.description}
                    </p>
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
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-8">
              <motion.div 
                className="text-center"
                variants={fadeInUp}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  기술적 우위
                </h2>
                <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                  VACI의 핵심 기술과 성능을 확인하세요
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
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
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
              VACI로 디지털 혁신을 시작하세요
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              관제 Digital Twin 시스템으로 현장의 모든 데이터를 통합하고<br/>
              실시간 모니터링과 예측 분석을 통해 운영 효율성을 극대화하세요.
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

export default VaciContent;
