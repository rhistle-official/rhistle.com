import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import ClerkWrapper from '@/components/ClerkWrapper'
import Footer from "@/components/Footer";
import SessionProvider from "@/components/SessionProvider";
import HideFooterOnAuthPages from "@/components/layout/HideFooterOnAuthPages";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";

const pretendard = localFont({
  src: "./font/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "Namoo INC",
  description: "Namoo INC",
};

/*
Readonly<...>는 TypeScript에서 객체의 모든 속성을 읽기 전용(read-only) 으로 만들어주는 유틸리티 타입
즉, 그 객체의 속성들을 변경할 수 없게 막는 역할을 합니다.
*/

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={pretendard.className}>
        <ClerkWrapper>
          <NextIntlClientProvider>
            <SessionProvider>
              {children}
              {/* Footer 조건부 렌더링 */}
              <HideFooterOnAuthPages>
                <Footer />
              </HideFooterOnAuthPages>
            </SessionProvider>
          </NextIntlClientProvider>
        </ClerkWrapper>
      </body>
    </html>
  );
}
