"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import KakaoMap from "./KakaoMap";

const RouteGuide = () => {
  const contactInfo = [
    {
      icon: "/image/tel_ic1.png",
      title: "TEL",
      value: "02-3018-5114",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "/image/tel_ic2.png",
      title: "FAX",
      value: "02-3018-3026",
      color: "from-green-500 to-green-600"
    }
  ];

  const transportation = [
    {
      icon: "/image/tel_ic3.png",
      title: "버스",
      description: "양재역, 양재동 주민센터 하차",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: "/image/tel_ic4.png",
      title: "지하철",
      description: "양재역 1번 출구 도보로 3분, 양재시민의숲역 2번 출구 도보로 8분",
      color: "from-purple-500 to-purple-600"
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
          alt="찾아오시는 길"
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
              찾아오시는 길
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              나무아이앤씨를 방문하시는 고객님들을 위한<br />
              상세한 위치 안내와 교통편 정보를 제공합니다
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
          
          {/* 지도 섹션 */}
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
                  회사 위치
                </h2>
                <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                  서울 서초구 양재동에 위치한 나무아이앤씨 본사입니다
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <motion.div 
                className="rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <KakaoMap />
              </motion.div>
            </div>
          </motion.div>

          {/* 주소 및 연락처 섹션 */}
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
                transition={{ duration: 0.6, delay: 1 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  주소 및 연락처
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  언제든지 연락주시면 친절하게 안내해드리겠습니다
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              {/* 주소 */}
              <motion.div 
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8 border border-emerald-100"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Image
                      src="/image/map_ic.png"
                      alt="주소"
                      width={24}
                      height={32}
                      className="w-6 h-8"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">주소</h3>
                </div>
                <p className="text-center text-lg text-gray-700 font-medium">
                  서울 서초구 양재동 108-7 2층
                </p>
              </motion.div>

              {/* 연락처 */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
              >
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Image
                          src={contact.icon}
                          alt={contact.title}
                          width={40}
                          height={40}
                          className="w-10 h-10"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-800 mb-1">
                          {contact.title}
                        </h4>
                        <p className="text-lg text-gray-600 font-medium">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* 교통편 섹션 */}
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
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  교통편 안내
                </h2>
                <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                  대중교통을 이용하여 편리하게 방문하실 수 있습니다
                </p>
              </motion.div>
            </div>
            
            <div className="p-8 lg:p-12">
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                variants={staggerContainer}
              >
                {transportation.map((transport, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="flex items-start space-x-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${transport.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Image
                          src={transport.icon}
                          alt={transport.title}
                          width={40}
                          height={40}
                          className="w-10 h-10"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                          {transport.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {transport.description}
                        </p>
                      </div>
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
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-12 border border-emerald-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              방문 전 문의하세요
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              방문 시간이나 추가 안내가 필요하시면 언제든 연락주세요
            </p>
            <motion.button 
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              방문 문의하기
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default RouteGuide;
