"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type PdfFile = {
  key: string;
  title: string;
  description: string;
  file: string;
  icon: string;
  color: string;
};

const Library = () => {
  const t = useTranslations("library");
  const [isVisible, setIsVisible] = useState(false);
  const [downloading, setDownloading] = useState<string | null>(null);
  const pdfFiles = t.raw("files") as PdfFile[];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownload = (filename: string) => {
    try {
      setDownloading(filename);
      
      // 직접 링크 생성하여 다운로드
      const link = document.createElement('a');
      link.href = `/pdf/${filename}`;
      link.download = filename;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
            
    } catch (error) {
      console.error('다운로드 오류:', error);
      alert('다운로드에 실패했습니다. 다시 시도해 주세요.');
    } finally {
      setTimeout(() => {
        setDownloading(null);
      }, 1000);
    }
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
              {t("banner.title")}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200">
              {t("banner.subtitle")}
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
              <span className="text-[#78b237]">{t("section.titleHighlight")}</span>
              {t("section.titleSuffix")}
            </h2>
            <p className="text-lg text-gray-600 md:text-xl">
              {t("section.desc")}
            </p>
          </motion.div>

          {/* PDF 카드들 */}
          <motion.div 
            className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 mb-16"
            variants={staggerContainer}
          >
            {pdfFiles.map((pdf, index) => (
              <motion.div
                key={pdf.title}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${pdf.color} p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
                variants={fadeInUp}
              >
                <div className="text-center">
                  <div className="mb-6 text-6xl">{pdf.icon}</div>
                  <h3 className="mb-4 text-xl font-bold text-gray-800">
                    {pdf.title}
                  </h3>
                  <p className="mb-6 text-sm text-gray-600 leading-relaxed">
                    {pdf.description}
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleDownload(pdf.file);
                    }}
                    disabled={downloading === pdf.file}
                    className="inline-block px-6 py-3 rounded-full bg-[#78b237] text-white font-semibold hover:bg-[#5a8a2a] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 cursor-pointer"
                    style={{ position: 'relative', zIndex: 10 }}
                  >
                    {downloading === pdf.file ? t("buttons.downloading") : t("buttons.download")}
                  </button>
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
                {t("cta.title")}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                {t("cta.desc")}
              </p>
              <Link 
                href="/inquiry/corecode-inquiry"
                className="inline-block px-8 py-4 rounded-full bg-[#78b237] text-white font-semibold hover:bg-[#5a8a2a] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t("cta.button")}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Library;
