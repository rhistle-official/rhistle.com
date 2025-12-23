"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl"; // 번역 훅 추가

const Footer = () => {
  const pathname = usePathname();
  const isOnInquiryPage = pathname.includes("inquiry");

  const t = useTranslations("Footer"); // Footer 네임스페이스 사용

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* 회사 정보 */}
          <div className="space-y-4 space-x-10">
            <div className="flex items-center space-x-2">
              <Image
                src="/image/ci_white.png"
                alt="리슬 로고"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {t("slogan").split("<br>").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>{t("address.line1")}</p>
              <p>{t("address.line2")}</p>
            </div>
          </div>

          {/* 비즈니스 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("business.title")}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {t.raw("business.items").map((item: string, i: number) => (
                <li key={i}>
                  <Link
                    href={`/product/${item.toLowerCase()}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 회사소개 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("company.title")}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {t.raw("company.items").map((item: string, i: number) => {
                const hrefs = ["/ceomessage", "/history", "/recruit", "/map"];
                return (
                  <li key={i}>
                    <Link
                      href={`/company${hrefs[i]}`}
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* 연락처 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("contact.title")}</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>{t("contact.ceo")}</p>
              <p>{t("contact.bizNumber")}</p>
              <p>{t("contact.tel")}</p>
              <p>{t("contact.fax")}</p>
            </div>
            {!isOnInquiryPage && (
              <div className="pt-4">
                <Link
                  href="/inquiry/corecode-inquiry"
                  className="inline-block bg-white text-black px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  {t("contact.inquiry")}
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2026 Rhistle INC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">
                {t("privacy")}
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                {t("terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;