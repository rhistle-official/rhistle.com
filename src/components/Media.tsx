"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Article = {
  id: number;
  title: string;
  date: string;
  press: string;
  summary: string;
  link?: string;
  thumbnail?: string;
};

const Media = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    fetch("/api/media")
      .then((res) => res.json())
      .then((data) => setArticles(data.rows || data)); // rows가 있으면 rows, 없으면 data
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
        staggerChildren: 0.1
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
          alt="언론보도"
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
              언론보도
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200">
              Media Coverage
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
              <span className="text-[#78b237]">언론</span> 보도
            </h2>
            <p className="text-lg text-gray-600 md:text-xl">
              나무아이앤씨의 혁신과 성장을 다룬 언론 보도를 확인하세요.
            </p>
          </motion.div>

          {/* 게시판 */}
          <motion.div 
            className="rounded-3xl bg-white shadow-xl overflow-hidden"
            variants={fadeInUp}
          >
            <div className="bg-gradient-to-r from-[#78b237] to-[#5a8a2a] p-6">
              <h3 className="text-xl font-bold text-white">📰 최신 언론 보도</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="py-4 px-6 font-semibold text-gray-800">제목</th>
                    <th className="py-4 px-6 font-semibold text-gray-800">언론사</th>
                    <th className="py-4 px-6 font-semibold text-gray-800">날짜</th>
                    <th className="py-4 px-6 font-semibold text-gray-800">바로가기</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((article, index) => (
                    <motion.tr 
                      key={article.id} 
                      className="border-b hover:bg-gray-50 transition-colors duration-200"
                      variants={fadeInUp}
                      whileHover={{ backgroundColor: "#f8f9fa" }}
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          {article.thumbnail && (
                            <Image 
                              src={article.thumbnail} 
                              alt="썸네일" 
                              width={50} 
                              height={50} 
                              className="rounded-lg object-cover" 
                            />
                          )}
                          <div>
                            <div className="font-semibold text-gray-800">{article.title}</div>
                            <div className="text-sm text-gray-500 mt-1">{article.summary}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-700">{article.press}</td>
                      <td className="py-4 px-6 text-gray-600">{article.date}</td>
                      <td className="py-4 px-6">
                        {article.link ? (
                          <a 
                            href={article.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-block px-4 py-2 rounded-full bg-[#78b237] text-white font-semibold hover:bg-[#5a8a2a] transition-all duration-300 hover:scale-105 text-sm"
                          >
                            기사보기
                          </a>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* 추가 정보 섹션 */}
          <motion.div 
            className="rounded-3xl bg-gradient-to-br from-[#78b237]/5 to-[#78b237]/10 p-12 mt-16"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center">
              <div className="mb-6 text-6xl">📢</div>
              <h3 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
                언론 보도 관련 문의
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                언론 보도 관련 문의사항이나 인터뷰 요청이 있으시면 언제든지 연락해 주세요. 
                빠른 시일 내에 답변 드리겠습니다.
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

export default Media; 