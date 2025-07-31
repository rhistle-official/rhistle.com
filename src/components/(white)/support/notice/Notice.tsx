"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import NoticeBoard from "../notice/NoticeBoard";

interface NoticeProps {
  searchParams: { [key: string]: string | undefined };
}

const Notice = ({ searchParams }: NoticeProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* 상단 배너 */}
      <motion.div 
        className="relative h-[40vh] overflow-hidden lg:h-[50vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/image/com_1.png"
          alt="공지사항"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              공지사항
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200">
              Notice & News
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
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div 
            className="text-center mb-16"
            variants={{ hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } }}
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
              <span className="text-[#78b237]">공지</span> 사항
            </h2>
            <p className="text-lg text-gray-600 md:text-xl">
              나무아이앤씨의 최신 소식과 공지사항을 확인하세요.
            </p>
          </motion.div>

          {/* 공지사항 리스트 */}
          <motion.div 
            className="rounded-3xl bg-white shadow-xl overflow-hidden"
            variants={{ hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } }}
          >
            <div className="bg-gradient-to-r from-[#78b237] to-[#5a8a2a] p-6">
              <h3 className="text-xl font-bold text-white">📢 공지사항 목록</h3>
            </div>
            <div className="py-10 px-2 md:px-8">
              <NoticeBoard searchParams={searchParams} />
            </div>
          </motion.div>

          {/* 추가 정보 섹션 */}
          <motion.div 
            className="rounded-3xl bg-gradient-to-br from-[#78b237]/5 to-[#78b237]/10 p-12 mt-16"
            variants={{ hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center">
              <div className="mb-6 text-6xl">📬</div>
              <h3 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
                공지사항 문의
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                공지사항 관련 문의사항이 있으시면 언제든지 연락해 주세요. 
                빠른 시일 내에 답변 드리겠습니다.
              </p>
              <Link 
                href="/inquiry/corecode-inquiry"
                className="inline-block px-8 py-4 rounded-full bg-[#78b237] text-white font-semibold hover:bg-[#5a8a2a] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                문의하기
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Notice;
