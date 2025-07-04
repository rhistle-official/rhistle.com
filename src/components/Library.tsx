"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const pdfFiles = [
  {
    title: "CoreCode Brochure (국문)",
    description: "코어코드 브로셔 (국문)",
    file: "/pdf/corecode_kr.pdf",
    icon: "📄",
    color: "from-blue-50 to-blue-100 border-blue-400"
  },
  {
    title: "CoreCode Suite",
    description: "코어코드 제품소개서",
    file: "/pdf/corecode_suite.pdf",
    icon: "📋",
    color: "from-green-50 to-green-100 border-green-400"
  },
  {
    title: "Reference",
    description: "고객사 Reference",
    file: "/pdf/Reference.pdf",
    icon: "📊",
    color: "from-purple-50 to-purple-100 border-purple-400"
  },
];

const Library = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* 상단 배너 */}
      <motion.div 
        className="relative h-[40vh] overflow-hidden lg:h-[50vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/image/com_1.png"
          alt="라이브러리"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              라이브러리
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200">
              자료실
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* 메인 컨텐츠 */}
      <div className="pt-[6.25rem] lg:px-[5rem] lg:pb-[6.25rem]">
        <motion.div 
          className="mx-auto max-w-6xl px-4 py-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
              <span className="text-[#78b237]">다운로드</span> 자료
            </h2>
            <p className="text-lg text-gray-600 md:text-xl">
              나무아이앤씨의 제품 소개서와 참고 자료를 다운로드하세요.
            </p>
          </motion.div>

          {/* PDF 카드들 */}
          <motion.div 
            className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 mb-16"
            variants={staggerContainer}
          >
            {pdfFiles.map((pdf, index) => (
              <motion.div
                key={pdf.title}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${pdf.color} p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center">
                  <div className="mb-6 text-6xl">{pdf.icon}</div>
                  <h3 className="mb-4 text-xl font-bold text-gray-800">
                    {pdf.title}
                  </h3>
                  <p className="mb-6 text-sm text-gray-600 leading-relaxed">
                    {pdf.description}
                  </p>
                  <a
                    href={pdf.file}
                    download
                    className="inline-block px-6 py-3 rounded-full bg-[#78b237] text-white font-semibold hover:bg-[#5a8a2a] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    다운로드
                  </a>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#78b237]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>

          {/* 추가 정보 섹션 */}
          <motion.div 
            className="rounded-3xl bg-gradient-to-br from-[#78b237]/5 to-[#78b237]/10 p-12"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center">
              <div className="mb-6 text-6xl">📚</div>
              <h3 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
                더 많은 자료가 필요하신가요?
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                추가적인 제품 정보나 기술 자료가 필요하시면 언제든지 문의해 주세요. 
                전문 상담사가 도움을 드리겠습니다.
              </p>
              <a
                href="/inquiry/corecode-inquiry"
                className="inline-block px-8 py-4 rounded-full bg-[#78b237] text-white font-semibold hover:bg-[#5a8a2a] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                문의하기
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Library;
