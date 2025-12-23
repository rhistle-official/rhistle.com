"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import History from "./history/History";

const CompanyHistory = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[40vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/image/com_1.png"
          alt="회사 연혁"
          fill
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
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
              회사 연혁
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              리슬의 성장과 혁신의 발자취를 함께 살펴보세요
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
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-6">
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">기술 혁신의 역사</h2>
                  <p className="text-emerald-100">지속적인 발전과 혁신의 여정</p>
                </div>
              </motion.div>
            </div>

            {/* History Content */}
            <div className="p-8 lg:p-12">
              <History />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom CTA Section */}
      <motion.div 
        className="py-20 px-8 lg:px-16"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-12 border border-emerald-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              더 나은 미래를 함께 만들어가겠습니다
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              지속적인 혁신과 기술 발전을 통해 고객에게 최고의 가치를 제공하겠습니다
            </p>
            <motion.button 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
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

export default CompanyHistory;
