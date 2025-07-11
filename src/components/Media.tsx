"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";
import NoticePagination from "./notice/NoticePagination";
import { post } from "@/lib/type";
import Link from "next/link";

interface MediaProps {
  searchParams: { [key: string]: string | undefined };
}


type Article = {
  id: number;
  title: string;
  date: string;
  press: string;
  summary: string;
  link?: string;
  thumbnail?: string;
};

const Media = ({ searchParams } : MediaProps) => {
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const [posts, setPosts] = useState<post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(true);

  const { page = "1", searchTerm = "" } = searchParams;

  const handleDelete = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    
    try {
      const res = await fetch(`/api/media`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        alert("삭제되었습니다.");
        setPosts(prev => prev.filter(post => post.id !== id));
        setTotalPosts(prev => prev - 1); // 총 개수도 감소

        router.refresh(); // 리스트 새로고침
      } else {
        alert("삭제를 실패하였습니다");
      }
    } catch (err) {
      console.error(err);
      alert("에러 발생");
    }
  };

useEffect(() => {
  const loadPosts = async () => {
    try {
      setLoading(true);

      // 미디어 목록 불러오기
      const mediaRes = await fetch("/api/media");
      const mediaData = await mediaRes.json();
      const rawItems = mediaData.rows || mediaData;

      // 페이지네이션 수동 처리
      const size = 10;
      const number = Number(page) - 1;
      const pagedItems = rawItems.slice(number * size, (number + 1) * size);

      // posts 형식에 맞게 정리해서 set
      setPosts(pagedItems);
      setCurrentPage(number + 1);
      setPostPerPage(size);
      setTotalPosts(rawItems.length);
    } catch (error) {
      console.error("데이터 로딩 실패:", error);
    } finally {
      setLoading(false);
      setIsVisible(true);
    }
  };

  loadPosts(); // 호출
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
            <div className="py-10 px-2 md:px-8">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm md:text-base lg:text-lg">
                  총&nbsp;
                  <span className="font-semibold text-blue-500">{totalPosts}</span>
                  건이 검색되었습니다.
                </div>
              </div>
              <table className="w-full text-left border-t">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="py-4 px-6 font-semibold text-gray-800">제목</th>
                    <th className="py-4 px-6 font-semibold text-gray-800">언론사</th>
                    <th className="py-4 px-6 font-semibold text-gray-800">날짜</th>
                    <th className="py-4 px-6 font-semibold text-gray-800">바로가기</th>
                    <th className="py-4 px-6 font-semibold text-gray-800"></th> 
                  </tr>
                </thead>
                <tbody>
                  {totalPosts === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-lg font-semibold text-gray-500">
                        게시물이 없습니다.
                      </td>
                    </tr>
                  ) : (
                    posts.map((post, idx) => (
                      <tr key={post.id} className="border-b hover:bg-gray-50">
                        {/* 제목 */}
                        <td className="py-3 px-4">{post.title}</td>

                        {/* 언론사 */}
                        <td className="py-3 px-2">{post.press}</td>

                        {/* 날짜 */}
                        <td className="py-3 px-2">{post.date}</td>

                        {/* 기사보기 */}
                        <td className="py-3 px-2">
                          <a
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#78b237] text-white px-4 py-1 rounded-full text-sm hover:bg-[#6ba12f]"
                          >
                            기사보기
                          </a>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded-full text-sm hover:bg-red-600"
                          >
                            삭제
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
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
              <div className="mt-6 flex justify-center">
                <NoticePagination
                  currentPage={currentPage}
                  postPerPage={postPerPage}
                  totalPosts={totalPosts}
                  searchTerm={searchTerm}
                />
              </div>
              <div className="flex justify-end mb-4">
                <Button
                  className="cursor-pointer bg-[#78b237] hover:bg-[#78b237]/90 text-white font-semibold px-6 py-2 rounded-lg"
                  onClick={() => router.push("/support/media/write")}
                >
                  글쓰기
                </Button>
              </div>
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