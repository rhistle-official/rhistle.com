"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Recruit = () => {
  const router = useRouter()
  const positions = [
    {
      title: "프론트엔드 개발자",
      type: "정규직",
      location: "서울 강남구",
      experience: "신입/경력",
      description: "React, Next.js를 활용한 웹 애플리케이션 개발",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      icon: "💻"
    },
    {
      title: "백엔드 개발자",
      type: "정규직", 
      location: "서울 강남구",
      experience: "경력 3년+",
      description: "Spring Boot 기반 백엔드 시스템 개발",
      skills: ["Java", "Spring Boot", "MySQL", "Redis"],
      icon: "⚙️"
    },
    {
      title: "AI/ML 엔지니어",
      type: "정규직",
      location: "서울 강남구", 
      experience: "경력 2년+",
      description: "스마트팩토리 AI 솔루션 개발",
      skills: ["Python", "TensorFlow", "PyTorch", "OpenCV"],
      icon: "🤖"
    }
  ];

  const benefits = [
    { name: "유연근무제", icon: "⏰", color: "from-blue-500 to-blue-600" },
    { name: "재택근무 가능", icon: "🏠", color: "from-green-500 to-green-600" },
    { name: "점심식대 지원", icon: "🍽️", color: "from-orange-500 to-orange-600" },
    { name: "경조사 지원", icon: "🎁", color: "from-purple-500 to-purple-600" },
    { name: "교육비 지원", icon: "📚", color: "from-indigo-500 to-indigo-600" },
    { name: "건강검진", icon: "🏥", color: "from-red-500 to-red-600" },
    { name: "팀워크 활동", icon: "🤝", color: "from-teal-500 to-teal-600" },
    { name: "성과급", icon: "💰", color: "from-yellow-500 to-yellow-600" }
  ];

  const talentTraits = [
    { trait: "혁신적인 사고", icon: "💡", description: "새로운 아이디어로 문제를 해결하는 창의적 사고" },
    { trait: "팀워크 정신", icon: "👥", description: "함께 성장하고 협력하는 팀 플레이어" },
    { trait: "지속적 학습", icon: "📈", description: "끊임없이 새로운 기술과 지식을 습득" },
    { trait: "고객 중심 마인드", icon: "🎯", description: "고객의 니즈를 최우선으로 생각하는 서비스 마인드" },
    { trait: "책임감과 열정", icon: "🔥", description: "주어진 일에 대한 책임감과 열정을 가진 인재" },
    { trait: "글로벌 시각", icon: "🌍", description: "세계적인 관점으로 사고하고 행동하는 글로벌 마인드" }
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
          alt="채용"
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
              채용
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              혁신적인 기술과 창의적인 아이디어로<br />
              미래를 만들어갈 인재들과 함께하고 싶습니다
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
          
          {/* 인재상 섹션 */}
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  우리가 찾는 인재상
                </h2>
                <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                  나무아이앤씨와 함께 성장할 열정적인 인재를 기다립니다
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
              >
                {talentTraits.map((trait, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl">{trait.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {trait.trait}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {trait.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* 복리후생 섹션 */}
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
                  복리후생
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  임직원의 성장과 워라밸을 위한 다양한 혜택을 제공합니다
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                variants={staggerContainer}
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <span className="text-xl">{benefit.icon}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      {benefit.name}
                    </h3>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* 채용공고 섹션 */}
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
                  채용공고
                </h2>
                <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                  현재 모집 중인 포지션을 확인하고 지원해보세요
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
              >
                {positions.map((position, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
                      <div className="flex items-start space-x-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-2xl">{position.icon}</span>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                              {position.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                                {position.type}
                              </span>
                              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                {position.location}
                              </span>
                              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                                {position.experience}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-4">
                              {position.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {position.skills.map((skill, skillIndex) => (
                                <span 
                                  key={skillIndex} 
                                  className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-200"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg">
                          지원하기
                        </Button>
                      </motion.div>
                    </div>
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
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-12 border border-emerald-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              함께 성장할 인재를 기다립니다
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              나무아이앤씨는 혁신적인 기술과 창의적인 아이디어로 
              미래를 만들어갈 인재들과 함께하고 싶습니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => router.push("/inquiry/corecode-inquiry")}
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg"
                >
                  채용 문의
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-2xl font-semibold"
                >
                  회사 소개서 다운로드
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Recruit;
