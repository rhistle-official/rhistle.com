"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Welfare = () => {
  const welfareCategories = [
    {
      title: "근무 환경",
      color: "from-blue-500 to-blue-600",
      items: [
        {
          name: "유연근무제",
          description: "자유로운 출퇴근 시간과 재택근무 지원",
          icon: "🏢"
        },
        {
          name: "재택근무",
          description: "업무 특성에 맞는 재택근무 환경 제공",
          icon: "🏠"
        },
        {
          name: "자유로운 복장",
          description: "편안하고 자유로운 복장 규정",
          icon: "👔"
        }
      ]
    },
    {
      title: "생활 지원",
      color: "from-green-500 to-green-600",
      items: [
        {
          name: "점심식대 지원",
          description: "매일 점심식대 1만원 지원",
          icon: "🍱"
        },
        {
          name: "교통비 지원",
          description: "대중교통 이용 시 교통비 지원",
          icon: "🚇"
        },
        {
          name: "경조사 지원",
          description: "결혼, 출산, 장례 등 경조사 지원",
          icon: "🎁"
        }
      ]
    },
    {
      title: "건강 관리",
      color: "from-red-500 to-red-600",
      items: [
        {
          name: "건강검진",
          description: "연 1회 종합건강검진 지원",
          icon: "🏥"
        },
        {
          name: "단체보험",
          description: "임직원 및 가족 대상 보험 지원",
          icon: "🛡️"
        },
        {
          name: "운동시설",
          description: "사내 헬스장 및 운동시설 이용",
          icon: "💪"
        }
      ]
    },
    {
      title: "성장 지원",
      color: "from-purple-500 to-purple-600",
      items: [
        {
          name: "교육비 지원",
          description: "업무 관련 교육 및 자격증 취득 지원",
          icon: "📚"
        },
        {
          name: "도서구입비",
          description: "월 도서구입비 지원",
          icon: "📖"
        },
        {
          name: "컨퍼런스 참가",
          description: "업무 관련 컨퍼런스 참가 지원",
          icon: "🎤"
        }
      ]
    },
    {
      title: "여가 활동",
      color: "from-orange-500 to-orange-600",
      items: [
        {
          name: "동호회 활동",
          description: "다양한 동호회 활동 지원",
          icon: "🎯"
        },
        {
          name: "팀워크 활동",
          description: "정기적인 팀워크 및 회식 지원",
          icon: "🎉"
        },
        {
          name: "휴가 제도",
          description: "연차 및 반차 자유로운 사용",
          icon: "🏖️"
        }
      ]
    },
    {
      title: "경제적 혜택",
      color: "from-yellow-500 to-yellow-600",
      items: [
        {
          name: "성과급",
          description: "연 2회 성과에 따른 성과급 지급",
          icon: "💰"
        },
        {
          name: "스톡옵션",
          description: "임직원 대상 스톡옵션 제공",
          icon: "📈"
        },
        {
          name: "퇴직연금",
          description: "확정기여형 퇴직연금 제도",
          icon: "🏦"
        }
      ]
    }
  ];

  const additionalBenefits = [
    { name: "생일 축하금", icon: "🎂" },
    { name: "명절 선물", icon: "🎁" },
    { name: "여름휴가비", icon: "☀️" },
    { name: "겨울휴가비", icon: "❄️" },
    { name: "자녀 학자금", icon: "🎓" },
    { name: "결혼 축하금", icon: "💒" },
    { name: "출산 축하금", icon: "👶" },
    { name: "장기근속 포상", icon: "🏆" }
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
          alt="복리후생"
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
              복리후생
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              임직원의 행복한 일터를 위한<br />
              다양한 복리후생 제도
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
          
          {/* 메인 타이틀 섹션 */}
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
                  임직원의 행복한 일터를 위한
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-emerald-100 mb-6">
                  다양한 복리후생
                </h3>
                <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                  나무아이앤씨는 임직원의 삶의 질 향상과 업무 만족도를 위해 
                  다양한 복리후생 제도를 운영하고 있습니다
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* 복리후생 카테고리 */}
          {welfareCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`bg-gradient-to-r ${category.color} px-8 py-8`}>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.1 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {category.title}
                  </h3>
                </motion.div>
              </div>
              
              <div className="p-8 lg:p-12">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={staggerContainer}
                >
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-xl">{item.icon}</span>
                        </div>
                        <div className="flex-1 space-y-2">
                          <h4 className="text-lg font-bold text-gray-800">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* 추가 혜택 섹션 */}
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
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  추가 혜택
                </h3>
                <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                  더욱 풍부한 혜택으로 임직원의 만족도를 높입니다
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                variants={staggerContainer}
              >
                {additionalBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-xl">{benefit.icon}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      {benefit.name}
                    </h4>
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
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-12 border border-emerald-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              더 궁금한 점이 있으신가요?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              복리후생에 대한 자세한 내용은 언제든 문의해 주세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg"
                >
                  복리후생 문의
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
                  채용 정보 보기
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Welfare;
